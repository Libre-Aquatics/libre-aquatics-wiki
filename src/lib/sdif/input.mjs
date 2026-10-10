// Input handling for the SDIF reader: recognise what kind of file was dropped, decode
// its text, and open Meet Manager zip archives. Browser and Node both; no network.

export const MAX_BYTES = 20 * 1024 * 1024;

const u8 = (input) => (input instanceof Uint8Array ? input : new Uint8Array(input));

/**
 * Work out what a file is before trying to read it as SDIF.
 * @returns {{kind: 'zip'|'pdf'|'utf16'|'hy3'|'sdif'|'empty'|'unknown', message?: string}}
 */
export function sniff(input) {
  const b = u8(input);
  if (b.length === 0) return { kind: 'empty', message: 'The file is empty.' };
  if (b[0] === 0x50 && b[1] === 0x4b && b[2] === 0x03 && b[3] === 0x04) return { kind: 'zip' };
  if (b[0] === 0x25 && b[1] === 0x50 && b[2] === 0x44 && b[3] === 0x46) {
    return { kind: 'pdf', message: 'This is a PDF, not an SDIF file. Meet programs export SDIF results as .sd3 or .cl2 files, usually inside a .zip.' };
  }
  // UTF-16: a byte-order mark, or a NUL in every other byte of the first few hundred.
  const bom16 = (b[0] === 0xff && b[1] === 0xfe) || (b[0] === 0xfe && b[1] === 0xff);
  let nulOdd = 0;
  const n = Math.min(b.length, 400);
  for (let i = 1; i < n; i += 2) if (b[i] === 0) nulOdd++;
  if (bom16 || (n > 20 && nulOdd > n / 2 - 5)) {
    return {
      kind: 'utf16',
      message:
        'This file was saved as UTF-16 ("Unicode" in Excel and Notepad). SDIF is plain one-byte text, and meet programs reject this encoding. Save it again as plain text (ANSI or UTF-8) and reopen it.',
    };
  }
  // Line-length census over the first lines: SDIF and CL2 are 160 wide, HY3 is 130.
  const head = new TextDecoder('windows-1252').decode(b.subarray(0, 8000));
  const lines = head.split(/\r\n|\n|\r/).slice(0, 40).filter((l) => l.length > 0);
  const complete = lines.slice(0, -1).length ? lines.slice(0, -1) : lines;
  const widths = complete.map((l) => l.length);
  if (widths.length && widths.filter((w) => w === 130).length >= Math.max(1, widths.length * 0.8) && /^A1/.test(lines[0] ?? '')) {
    return {
      kind: 'hy3',
      message: 'This is a Hy-Tek HY3 file (130-character lines). It is a different format from SDIF; open the .cl2 file from the same Meet Manager export instead.',
    };
  }
  if (/^(﻿|ï»¿)?[A-Z][0-9]/.test(head)) return { kind: 'sdif' };
  if (/^\s*<(!doctype|html|head|body|\?xml|[a-z]+[\s>])/i.test(head)) {
    const xml = /^\s*<\?xml/i.test(head) || /<LENEX/i.test(head);
    return {
      kind: 'html',
      message: xml
        ? 'This is an XML file (Lenex or XSDIF), not fixed-width SDIF.'
        : 'This is a web page, not an SDIF file. If it came from a download link, the link may be broken or need a sign-in.',
    };
  }
  if (/[\x00-\x08\x0e-\x1f]/.test(head.replace(/\x1a$/, ''))) {
    return { kind: 'unknown', message: 'This looks like a binary file, not an SDIF text file.' };
  }
  return { kind: 'sdif' };
}

/**
 * Decode SDIF bytes to text. A UTF-8 byte-order mark is removed. Files that are valid
 * UTF-8 and use multi-byte characters are read as UTF-8; everything else as
 * Windows-1252, which is what SDIF writers have always produced.
 * @returns {{text: string, encoding: 'utf-8'|'windows-1252', bom: boolean}}
 */
export function decodeText(input) {
  if (typeof input === 'string') {
    const bom = input.charCodeAt(0) === 0xfeff;
    return { text: bom ? input.slice(1) : input, encoding: 'utf-8', bom };
  }
  let b = u8(input);
  const bom = b[0] === 0xef && b[1] === 0xbb && b[2] === 0xbf;
  if (bom) b = b.subarray(3);
  let multibyte = false;
  for (let i = 0; i < b.length; i++) {
    if (b[i] >= 0x80) {
      multibyte = true;
      break;
    }
  }
  if (multibyte) {
    try {
      return { text: new TextDecoder('utf-8', { fatal: true }).decode(b), encoding: 'utf-8', bom };
    } catch {
      // Not valid UTF-8: fall through to Windows-1252.
    }
  } else if (bom) {
    return { text: new TextDecoder('utf-8').decode(b), encoding: 'utf-8', bom };
  }
  return { text: new TextDecoder('windows-1252').decode(b), encoding: 'windows-1252', bom };
}

/**
 * Split text into raw record lines. Normal files use CR LF (or LF, or CR); a file whose
 * line breaks were lost is split every 160 characters when its length allows.
 * @returns {{lines: string[], unbroken: boolean}}
 */
export function toLines(text) {
  // Drop a DOS end-of-file marker and anything after it.
  const t = text.replace(/\x1a[\s\S]*$/, '');
  const body = t.replace(/[\r\n]+$/, '');
  if (!/[\r\n]/.test(body) && body.trimEnd().length > 160) {
    // No line breaks at all: split every 160 characters, but only when every chunk then
    // starts with a record code, so ordinary long text is not chopped up.
    const lines = [];
    for (let i = 0; i < body.trimEnd().length; i += 160) lines.push(body.slice(i, i + 160));
    if (lines.every((l) => /^[A-Z][0-9]/.test(l))) return { lines, unbroken: true };
  }
  const lines = t.split(/\r\n|\n|\r/);
  while (lines.length && /^[\s\x1a]*$/.test(lines[lines.length - 1])) lines.pop();
  return { lines, unbroken: false };
}

/* ---------- zip ---------- */

const le16 = (b, o) => b[o] | (b[o + 1] << 8);
const le32 = (b, o) => (b[o] | (b[o + 1] << 8) | (b[o + 2] << 16) | (b[o + 3] << 24)) >>> 0;

/**
 * List the entries of a zip archive from its central directory.
 * @returns {{name: string, method: number, compressedSize: number, size: number, offset: number, encrypted: boolean}[]}
 */
export function zipEntries(input) {
  const b = u8(input);
  // End of central directory: search back from the end (it may be followed by a comment).
  let eocd = -1;
  for (let i = b.length - 22; i >= Math.max(0, b.length - 22 - 0xffff); i--) {
    if (le32(b, i) === 0x06054b50) {
      eocd = i;
      break;
    }
  }
  if (eocd < 0) throw new Error('The zip archive is damaged (no central directory).');
  const count = le16(b, eocd + 10);
  let p = le32(b, eocd + 16);
  if (p === 0xffffffff || count === 0xffff) throw new Error('Zip64 archives are not supported.');
  const entries = [];
  for (let i = 0; i < count; i++) {
    if (p + 46 > b.length || le32(b, p) !== 0x02014b50) throw new Error('The zip archive is damaged (bad directory entry).');
    const flags = le16(b, p + 8);
    const method = le16(b, p + 10);
    const compressedSize = le32(b, p + 20);
    const size = le32(b, p + 24);
    const nameLen = le16(b, p + 28);
    const extraLen = le16(b, p + 30);
    const commentLen = le16(b, p + 32);
    const offset = le32(b, p + 42);
    const nameBytes = b.subarray(p + 46, p + 46 + nameLen);
    const name = new TextDecoder(flags & 0x800 ? 'utf-8' : 'windows-1252').decode(nameBytes);
    entries.push({ name, method, compressedSize, size, offset, encrypted: !!(flags & 1) });
    p += 46 + nameLen + extraLen + commentLen;
  }
  return entries;
}

/** Extract one entry's bytes. Supports stored (0) and deflate (8). */
export async function zipRead(input, entry) {
  const b = u8(input);
  if (entry.encrypted) throw new Error(`${entry.name} is encrypted.`);
  if (entry.size > MAX_BYTES) throw new Error(`${entry.name} is larger than 20 MB.`);
  const o = entry.offset;
  if (le32(b, o) !== 0x04034b50) throw new Error(`The zip archive is damaged at ${entry.name}.`);
  const start = o + 30 + le16(b, o + 26) + le16(b, o + 28);
  const data = b.subarray(start, start + entry.compressedSize);
  if (entry.method === 0) return data.slice();
  if (entry.method !== 8) throw new Error(`${entry.name} uses an unsupported compression method (${entry.method}).`);
  const stream = new Blob([data]).stream().pipeThrough(new DecompressionStream('deflate-raw'));
  const out = new Uint8Array(await new Response(stream).arrayBuffer());
  if (out.length !== entry.size) throw new Error(`${entry.name} did not decompress to its recorded size.`);
  return out;
}

const SDIF_EXT = /\.(sd3|cl2|sdif|sdi)$/i;

/**
 * Open a zip and return the SDIF-family files in it. Zips inside the zip (a batch of
 * Meet Manager exports zipped together) are opened one level deep. Each file carries
 * the archive bytes it lives in, for readZipFile.
 * @returns {Promise<{files: {name: string, entry: any, container: Uint8Array}[], skipped: string[]}>}
 */
export async function sdifFilesInZip(input, depth = 0) {
  const b = u8(input);
  const entries = zipEntries(b).filter((e) => !e.name.endsWith('/'));
  const files = [];
  const skipped = [];
  for (const entry of entries) {
    const base = entry.name.split('/').pop();
    if (SDIF_EXT.test(entry.name)) files.push({ name: base, entry, container: b });
    else if (/\.zip$/i.test(entry.name) && depth === 0 && !entry.encrypted) {
      try {
        const inner = await zipRead(b, entry);
        const nested = await sdifFilesInZip(inner, 1);
        files.push(...nested.files.map((f) => ({ ...f, name: `${base} › ${f.name}` })));
        skipped.push(...nested.skipped.map((s) => `${base} › ${s}`));
      } catch {
        skipped.push(base);
      }
    } else skipped.push(base);
  }
  return { files, skipped };
}

/** Read a file returned by sdifFilesInZip. */
export function readZipFile(file) {
  return zipRead(file.container, file.entry);
}

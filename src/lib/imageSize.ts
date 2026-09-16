// Intrinsic pixel dimensions of an image, read from its own header. Used at
// build time by the Open Graph card route to bound how tall a photograph may
// render: astro-og-canvas scales a card's inset image by width and lets the
// height follow, then starts the text below it, so a very tall photograph would
// push the title and description off the bottom of the card.
//
// Deliberately dependency-free. Reading the three formats the wiki accepts is a
// few lines, and the alternative is pulling an image library into the build for
// one number.
import { readFileSync } from 'node:fs';

export interface ImageSize {
  width: number;
  height: number;
}

// Markers in this range carry a frame header, except these three: DHT (0xc4),
// JPG (0xc8), and DAC (0xcc), which are tables rather than frames.
function isStartOfFrame(marker: number): boolean {
  return marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
}

// WebP is a RIFF container whose first chunk says where the dimensions live.
// Photographs with an alpha channel come out as VP8X, but a file saved without
// alpha is a bare VP8 or VP8L, so all three are handled.
function webpSize(buffer: Buffer): ImageSize | null {
  const chunk = buffer.toString('ascii', 12, 16);

  // VP8X: 4 bytes of flags, then canvas width-1 and height-1 as 24-bit LE.
  if (chunk === 'VP8X' && buffer.length >= 30) {
    return {
      width: buffer.readUIntLE(24, 3) + 1,
      height: buffer.readUIntLE(27, 3) + 1,
    };
  }

  // VP8: a 3-byte frame tag and the 3-byte sync code precede the dimensions,
  // which occupy the low 14 bits of their 16-bit words.
  if (chunk === 'VP8 ' && buffer.length >= 30) {
    return {
      width: buffer.readUInt16LE(26) & 0x3fff,
      height: buffer.readUInt16LE(28) & 0x3fff,
    };
  }

  // VP8L: a 1-byte signature, then width-1 and height-1 packed as 14 bits each.
  if (chunk === 'VP8L' && buffer.length >= 25 && buffer[20] === 0x2f) {
    const bits = buffer.readUInt32LE(21);
    return {
      width: (bits & 0x3fff) + 1,
      height: ((bits >> 14) & 0x3fff) + 1,
    };
  }

  return null;
}

/** Dimensions of a PNG, JPEG or WebP, or null if unreadable or another format. */
export function imageSize(path: string): ImageSize | null {
  let buffer: Buffer;
  try {
    buffer = readFileSync(path);
  } catch {
    return null;
  }

  // PNG: the 8-byte signature is followed by IHDR, whose width and height are
  // big-endian 32-bit values at a fixed offset.
  if (buffer.length >= 24 && buffer.readUInt32BE(0) === 0x89504e47) {
    return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
  }

  // WebP: "RIFF" .... "WEBP" then a chunk identifying the encoding.
  if (
    buffer.length >= 16 &&
    buffer.toString('ascii', 0, 4) === 'RIFF' &&
    buffer.toString('ascii', 8, 12) === 'WEBP'
  ) {
    return webpSize(buffer);
  }

  // JPEG: walk the segment chain from SOI to the first frame header.
  if (buffer.length >= 4 && buffer[0] === 0xff && buffer[1] === 0xd8) {
    let offset = 2;
    while (offset + 9 < buffer.length) {
      if (buffer[offset] !== 0xff) {
        offset += 1;
        continue;
      }
      const marker = buffer[offset + 1];
      // Padding and the standalone markers carry no length field.
      if (marker === 0xff || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd9)) {
        offset += 2;
        continue;
      }
      if (isStartOfFrame(marker)) {
        return {
          height: buffer.readUInt16BE(offset + 5),
          width: buffer.readUInt16BE(offset + 7),
        };
      }
      offset += 2 + buffer.readUInt16BE(offset + 2);
    }
  }

  return null;
}

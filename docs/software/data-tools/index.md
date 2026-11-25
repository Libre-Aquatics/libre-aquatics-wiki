---
title: Data tools
seoTitle: Swim meet data tools
description: "Tools that work on swim meet file formats without defining them: an SDIF validator, a TypeScript library for SDIF and Hy-Tek files, and a DSV-Standard converter."
tags:
  - Software
---

Libraries, validators and converters that work on swim meet files without defining a format
of their own.

## What lives here

- Validators, which check a file against a published layout before it is imported.
- Libraries, which other programs use to read and write the formats.
- Converters, which turn a meet file into another form such as a spreadsheet.

## Articles

- [SDIFCheck](sdifcheck.md): checks an [SDIF](../file-formats/sdif.md) file against the
  published layout; distributed from the site of
  [WinSwim](../meet-management/winswim.md), which moves entries and results between teams
  and programs as SDIF.
- [swimlib](swimlib.md): an open-source TypeScript library that reads and writes SDIF,
  [HY3](../file-formats/hy3.md) and [EV3](../file-formats/ev3.md).
- [libreDSV6.reader](libredsv6-reader.md): converts a Format 6 file of the
  [DSV-Standard](../file-formats/dsv-standard.md) into a spreadsheet.

## See also

- [File formats](../file-formats/index.md): the formats these tools read
- [Tools](../../tools/index.md): the file reader hosted on this site
- [Software](../index.md): the other programs the wiki covers

See everything tagged [Software](../../categories.md).

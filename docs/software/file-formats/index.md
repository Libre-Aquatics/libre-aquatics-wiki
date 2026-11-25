---
title: File formats
seoTitle: Swimming meet file formats
description: "Interchange formats for swim meet entries and results: SDIF, XSDIF, Lenex and the DSV-Standard, Hy-Tek's HY3, CL2, HYV and EV3, and scoreboard data feeds."
tags:
  - Software
  - Meet management
---

The interchange formats that move entries, event lists and results between team software,
meet software, timing systems and scoreboards.

## What lives here

- Open and federation formats with a published specification or a public maintainer.
- Hy-Tek's own formats and transfer methods.
- Data feeds read by scoreboards.

## Articles

### Open formats

[SDIF](sdif.md), the Standard Data Interchange Format published by United States Swimming,
is the open standard for moving entries and results between programs, carried in `.sd3`
files whose records are 162 bytes, the last two of them a line terminator.
[XSDIF](xsdif.md) is an XML form of the same standard accepted beside it, and
[Lenex](lenex.md) is the European format that answers the same need in XML. Germany keeps a
plain-text format of its own, the [DSV-Standard](dsv-standard.md).

### Hy-Tek formats

Hy-Tek's own formats are separate from that standard and come in pairs. Results go out as [CL2](cl2.md) and [HY3](hy3.md) together, event lists as
[HYV](hyv.md) and [EV3](ev3.md) together, with the older of each pair read by Team Manager
releases before 4.0G and the newer by 4.0G and later. Hy-Tek has published a specification
for none of them. Each line of an HY3 ends with a checksum the company never documented,
which the program enforces on import; swimming volunteers worked it out and published it in
2010, and it has been reproducible ever since.

Hy-Tek's earlier [Commlink](commlink.md) moved entries and results on a diskette and was
treated as an alternative to SDIF rather than an implementation of it.
[Generic network file sharing](generic-network-file-sharing.md) is the Meet Manager
interface that exchanges schedule and result files with a timing program through a shared
folder.

### Scoreboard data

[ERTD](ertd.md) is the real-time data format that Daktronics pairs with its Venus software
and that Swiss Timing consoles can also send.

The template and name files of the Colorado Time Systems display programs are described
under [display software](../display/index.md).

## See also

- [Software](../index.md): the programs that read and write these formats
- [Data tools](../data-tools/index.md): libraries, validators and converters
- [SDIF file reader](../../tools/sdif-reader.md): opens an SDIF file in the browser
- [Meet management software](../meet-management/index.md) and
  [team management software](../team-management/index.md): the two ends of the exchange

See everything tagged [Software](../../categories.md).

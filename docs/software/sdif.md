---
title: SDIF
description: >-
  SDIF is United States Swimming's Standard Data Interchange Format, the published
  fixed-record specification that lets meet results move between programs as .sd3 files.
tags:
  - Software
  - Meet management
  - Reference
---

<!--
Research notes, SDIF.

Surfaced while building out Meet Manager. The software overview had already flagged the gap
in a TODO, noting that the standard needed a specification source before anything was
written about it. That source exists and is public.

The specification. "United States Swimming Interchange Format VERSION 3 DOCUMENT", version
3.0, dated 28 April 1998, published by United States Swimming, freely readable at
usms.org/admin/sdifv3f.txt. Records are a fixed 162 bytes, each beginning with a two-byte
identifier. Record types: A0 file description, B1 and B2 meet data, C1 and C2 team data, D0
to D3 individual swimmer data, E0 relay events, F0 relay names, G0 splits, J0 to J2
qualifying times, Z0 file terminator. Fields are positioned by start byte and length with
declared types including CONST, CODE, ALPHA, DATE, TIME, INT, DEC, NAME, PHONE, LOGICAL,
USPS and USSNUM. The stated purpose is exchange between clubs, Local Swimming Committees and
headquarters. The file extension is SD3.

Note the publisher naming. The document says United States Swimming; the organization is now
USA Swimming. The copy cited here is hosted by US Masters Swimming, and Active also hosts a
copy in the Hy-Tek support knowledge base. Prefer the specification text itself over any
description of it.

Contemporary adoption evidence from the magazines, which is better than a vendor's account.
sources/periodicals/swimming-world/199412.txt:2117-2143 is a US Swimming item from December
1994 explaining that results can reach the LSC Top 16 tabulators by disk or modem once
vendors support the format, that this removes retyping and the errors retyping causes, and
telling readers whose vendor does not yet support SDIF to ask when it will. Note that
predates the version 3 document by nearly four years, so earlier versions existed and are not
held. By May 1998 Swimming World accepted times in an SDIF-compatible format or in Hy-Tek's
Commlink (199805.txt:1032-1036), so the standard had not displaced the proprietary route.
SwimNews around 2001 lists SDIF alongside Commlink, Splash, WSV and Lenex
(swimnewsn271.txt:68).

A competitor used compliance as a selling point: Hy-Point Software's SwimMeet Manager
advertised itself as fully compliant with the USAS SDIF data exchange standard through 2000
and 2001 (swimming-world/200009.txt:5110 and repeats). Do not mistake Hy-Point for Hy-Tek;
they are different companies and the names collide in a grep.

Warning for the next pass. The .sd3 extension appears nowhere in the held vendor documents,
only in the periodicals and in external sources. Nothing in sources/ documents it.

Still to research: versions 1 and 2, and when each appeared; whether version 3 was ever
revised after 1998; how SWIMS, USA Swimming's database, consumes it now; the relationship to
Lenex, the European equivalent; and which current programs still read and write it.
-->

This article is a stub. SDIF is the Standard Data Interchange Format published by United
States Swimming, whose version 3 document of April 1998 specifies fixed 162-byte records,
each opening with a two-byte type code, covering the meet, the teams, individual swimmers,
relays, splits and qualifying times, carried in files with an `.sd3` extension.

It exists so that entries and results can move between meet-management programs and up to
the governing body without being retyped, and through the 1990s it competed with Hy-Tek's
proprietary [Commlink](commlink.md) rather than replacing it; see the
[software overview](index.md) for what this section covers.

---
title: Daktronics dual phone-jack junction box
description: >-
  The Daktronics 0A-1196-0013 is a wall junction box with MAIN and AUXILIARY 1/4 in phone jacks
  that lets one All Sport console run two scoreboards together or two consoles run them apart.
tags:
  - Equipment
  - Scoring
infoboxTitle: Dual phone-jack junction box
infobox:
  - label: Manufacturer
    value: Daktronics
  - label: Part number
    value: '`0A-1196-0013`'
  - label: Type
    value: Signal junction box
  - label: Connection
    value: Two 1/4 in phone jacks, MAIN and AUXILIARY
---

<!--
Research notes, Daktronics 0A-1196-0013. Surfaced 2026-10-21 while building out
all-sport-5000.md. Not the same part as the single-jack 0A-1091-0227 on
daktronics-phone-jack-junction-box.md.

Source: Daktronics, All Sport 5000 manual ED-11976 Rev 32 (2024, held), drawings rendered from
the PDF with PyMuPDF:
  - DWG-124686 "Block Diagram: AS5000 BB-VB and WR #1" (drawn 29 November 1999; rev 01
    26 April 2000 added the All Sport 3000; rev 02 17 August 2011 added the 5500). Called a
    "dual 1/4 in phone J-box with shunt jack". Faceplate reads DAKTRONICS, MAIN, AUXILIARY
    SCOREBOARD. Wiring: MAIN jack tip to the main board's + signal (red), ring to - (black);
    AUXILIARY jack has a shunt contact, so with nothing in it the main signal passes on to the
    auxiliary board; a plug in AUXILIARY breaks that and feeds the auxiliary board from a second
    console. One W-1077 pair to each board.
  - DWG-124688 (shot clock version, rev 09 May 2022) shows the same box, one per shot clock
    pair, and portable shot clock cabling through it.
  - Schematic DWG-125316 "Dual 1/4 in Phone J-Box w/Shunt Jack" is listed in Appendix A.
The shunt behaviour is read from the schematic, not stated in words; treat as inferred from the
drawing. Not found: dimensions, gang size, price, whether it is still sold.
-->

This article is a stub. The Daktronics dual phone-jack junction box (`0A-1196-0013`) is a wall
box whose MAIN jack lets one [All Sport 5000](all-sport-5000.md) console drive a main and an
auxiliary scoreboard together, while a second console plugged into its AUXILIARY jack runs the
auxiliary board separately.

See the [scoreboard control overview](index.md) for the shared background on scoreboard links.

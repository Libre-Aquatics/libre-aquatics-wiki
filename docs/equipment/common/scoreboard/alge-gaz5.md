---
title: ALGE GAZ5 display board
description: >-
  The GAZ5 is the ALGE-Timing numeric display board that succeeded the GAZ4, with bistable
  seven-segment digits 15, 25 or 45 cm high and RS-232 and RS-485 inputs.
tags:
  - Equipment
  - Scoring
  - Swimming
infoboxTitle: GAZ5
infobox:
  - label: Manufacturer
    value: '[ALGE-Timing](vendors/alge-timing.md)'
  - label: Part number
    value: '`GAZ5 nhh` (`n` digits, `hh` digit height), e.g. `GAZ5 625 PP5`'
  - label: Type
    value: 'Numeric display board'
  - label: Power
    value: '11–20 V DC, internal power pack `PP5`, or mains supply `PS5`'
  - label: Status
    value: 'Current as of 2017 catalogue; later status not established'
  - label: Manual
    value: '[GAZ5 manual (E120911)](https://alge-timing.com/downloads/userGuides/GAZ5-BE.pdf)'
---

<!--
Research notes, ALGE GAZ5 display board. Surfaced 2026-11-22 while building out alge-gaz4.md. It
was already named on alge-d-sw.md, alge-gazc.md, alge-cable-010.md, alge-mc8.md, alge-timy.md and
alge-timer-s3/s4.md without a page of its own.

What the held documents say:
  - ALGE-Timing, GAZ5 manual, Version E120911, 22 pp. (sources/vendors/alge-timing/
    scoreboards-displays/alge-gaz5-display-board-manual-e120911.pdf). Read in full. Calls itself
    the fifth generation (the GAZ4 manual says fourth). Same scheme as the GAZ4: 16-position
    rotary switch (0 standard, 1-10 address, 11 test, 12 refresh, 13 shift left, 14 countdown,
    15 clock) and a format toggle (bib/rank, min-sec-hundredths, h-min-sec). Adds a second toggle
    that picks RS-485, RS-232 or the internal clock, and white/blue RS-485 banana sockets beside
    the yellow/black RS-232 pair; both default to 2400 baud, 8N1. Two Amphenol sockets carry
    +11-20 V, 0 V and data. PP5 power pack: NiMH, 12 V 4.5 Ah, mains charger for 90-132 or
    187-264 V AC, 14 h charge; the PP5 is not offered on 45 cm boards. PS5 built-in mains supply.
    External battery at least 2 Ah. Runtime as a clock about 70 h (15 cm) and 35 h (25 cm) in
    section 2.1, but 30 h for 25 cm in section 7 and 60/20/11 h in the dimension table: the same
    kind of internal conflict as the GAZ4 manual. Dimension table identical in sizes to the 2010
    GAZ4 manual (515/615 290 x 956 mm; 525/625 393 x 1493; 545/645 664 x 2490; depth 100/100/120),
    weights 12/13, 20/21, 45/48 kg. Quartz 9.216 MHz, -25 to 50 C. Takes data from TdC 8001,
    8000, 4000, Timy/Timy2, VT2, Comet, OPTIc2, OPTIc, OPTI 1sw, Timer S4, Timer S3, Self Timer
    SF2 and a PC. Cables 010-10, 037-10, 060-10 (S4), 030-10 (Comet, powered), 033-01 between
    boards; KT300/KT500 reels; ranking board of 2-10 lines with TdC, PC running TimeNET2, NGAZ/R,
    adapter 069-02. PDF created September 2012.
  - ALGE general catalogue 2017 (catalogs-brochures/alge-general-catalogue-2017), pp. 46-47:
    standard models GAZ5 515/615/525/625/545/645; weights 12/13/21/22/45/48 kg (one kg more for
    the 25 cm boards than the manual); column D 352/455/726 mm against 375/480/738 in the manual;
    reading distance per DIN 1450 75/125/225 m; order code digits then height then PP5 or PS5;
    PP5 runtime figures 60/20/11 h. Verified.
  - ALGE swimming catalogue V1.113, 2013: "GAZ5 8xxS + PP5" in the semi-automatic system with a
    Timy2 PXE. Verified.
  - Archived ALGE page GAZ5-E1.html (January 2012): "new generation GAZ5", feature list worded like
    the GAZ4 page, Timy2 in place of the Comet, RS-232 or RS-485. Verified.
  - Section 4.3 of the manual covers driving a GAZ5 from a Timer S4 with the rotary switch at 0
    or 13, so the board kept the S4 display protocol (see alge-gazc.md and alge-gaz4.md).
Not established: introduction date (2012 is the earliest dated document), whether it is still sold
in 2026, digit counts beyond 5 and 6.

Sources:
  - ALGE-Timing, GAZ5 manual, Version E120911 (https://alge-timing.com/downloads/userGuides/GAZ5-BE.pdf)
  - ALGE-Timing, General catalogue 2017 (held locally)
  - ALGE-Timing, The Specialist for Swimming, catalogue V1.113, 2013 (https://www.freker.se/dokument/ALGE%20Swimming-KE-1.PDF)
  - ALGE-Timing, ALGE Display Board GAZ5 (https://web.archive.org/web/20120116224021/http://alge-timing.com/alge/GAZ5-E1.html)
-->

This article is a stub. The `GAZ5` is the [ALGE-Timing](../../../vendors/alge-timing.md) numeric
display board that followed the [GAZ4](alge-gaz4.md), keeping its digit sizes, switches and case
sizes and adding an RS-485 input.

See the [scoreboards overview](index.md) for the shared background on scoreboards.

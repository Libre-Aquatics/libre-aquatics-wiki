---
title: SynchroMM
description: >-
  SynchroMM, or Wireless Synchro MM, is Colorado Time Systems' Windows program for scoring
  synchronized (artistic) swimming from wireless judging terminals.
tags:
  - Software
  - Artistic swimming
  - Scoring
---

<!--
Research notes, SynchroMM.

Surfaced while building out the WA-3, whose guide F1045 names a laptop running SynchroMM as
one of the adapter's data sources; the WA-1 and WA-2 guides say the same.

What is established:
  - CTS sheet "Wireless Synchro" (revised 09/13), held as
    sources/vendors/colorado-time-systems/software/cts-wireless-synchro.txt: a complete system
    is a scoreboard, wireless judging terminals (WJT-003), a wireless interface (WIO-003) and
    the Wireless Synchro software. The software collects the judges' scores and works out
    routine scores, whether a routine has one scored component or several, for technical and
    free routines; scores can also be
    typed in on the PC. Results go to any CTS aquatic scoreboard by a wireless scoreboard
    adapter or a cable. Needs Microsoft .NET Framework 4.0 on Windows XP SP3 or later.
    Package part number R-8700-0159, SYNCHRO-03: two portable scoreboards with interconnect
    cabling, two wireless adapters and the Wireless Synchro MM PC software.
  - Wireless judging guides F941 (900 MHz, Rev. 20110720) and F961 (2.4 GHz, Rev. 201106):
    the laptop connects to the WIO by USB and needs the Wireless Synchro software; the
    software controls the WIO for synchronized swimming; a judge's request to change a sent
    score works with Synchro MM (and the System 6) but not the System 5; each terminal displays
    which routine is up, its own judge number and the score it expects next. 31 channels at 900 MHz, 12 at 2.4 GHz.
  - F1045 (WA-3) and F987 (WA-2): the laptop's COM port for the adapter is selected in
    SynchroMM; both adapters get switch 8 up.

Naming: CTS writes SynchroMM, Synchro MM, Wireless Synchro MM and Wireless Synchro. The
sport is now called artistic swimming; CTS's documents use the older name. The CTS site menu
captured in August 2020 (Wayback, with the WTTC and WHC product pages) lists "Artistic
Swimming Software" and an "Artistic Swimming Package", possibly the same program renamed;
not verified.

Still to research: versions and whether it is still sold; its scoring rules and which
governing bodies' formats it follows; the relationship to the "Artistic Swimming Software"
and "Artistic Swimming Package" listings.
-->

This article is a stub. SynchroMM, also written Wireless Synchro MM, is a Colorado Time Systems
Windows program that collects synchronized swimming judges' scores from CTS wireless judging
terminals, calculates routine scores, and sends them to a CTS scoreboard through a
[WA-3](../equipment/common/scoreboard-control/wa-3.md) wireless adapter or a cable.

See the [software overview](index.md) for what this section covers.

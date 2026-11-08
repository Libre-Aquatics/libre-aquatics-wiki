---
title: ALGE Printer P4
description: >-
  The Printer P4 is the ALGE-Timing electrosensitive printer that plugs into a Timer S4 and takes
  its power from it.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Printer P4
infobox:
  - label: Manufacturer
    value: '[ALGE-Timing](vendors/alge-timing.md)'
  - label: Part number
    value: '`P4`'
  - label: Type
    value: 'Electrosensitive printer'
  - label: Connection
    value: '5-pin plug to the Timer S4 printer socket'
  - label: Power
    value: 'From the Timer S4'
  - label: Status
    value: 'Discontinued; dates not established'
---

<!--
Research notes, ALGE Printer P4.

Surfaced 2026-11-07 while building out alge-timer-s4.md.

Timer S4 manual (E-06-04-18), section 4.1 and pages 8-13, 24, 60, read in full:
  - Prints on electrosensitive paper 60 mm wide, rolls 40 mm across holding about 25 m, which the
    manual puts at roughly 6000 lines. A black edge stripe warns that a roll is nearly used.
  - Powered through the S4's printer socket; the S4 must then be fitted with NiCd cells rather
    than alkaline ones. The socket carries 6-15 V supply and two data channels; the link runs at
    2400 baud, 8N1, and can be set to 4800, 9600 or 19200.
  - The S4 buffers up to 60 times for it; a print speed setting of 0.1 suits the P4, while 6.0 suits
    the older, slower Printer P3, which also halves battery life in the manual's runtime table.
  - Maintenance notes: a serrated cutter, a release lever, and clearing a jam under the roller with
    a strip of 35 mm film.
  - In the swimming program it prints each touch as it arrives, then a heat summary.
Swimming installation guide E-97-03-24: one P4 per system on the S4's "printer" socket with a
5-pin plug; the false-start drawing shows a P4 on each of the two Timer S4s.

Lineage: Printer P3 (older, named in the S4 manual) -> P4 -> P5 (2013 catalogue) -> P5-8/P6-8
(see alge-p6-8.md). Inferred from the documents' dates; no source states the chain.

Not established: dimensions, weight, dates.

Sources:
  - ALGE-Timing, Timer S4 manual, Version E-06-04-18 (https://alge-timing.com/downloads/userGuides/s4-be.pdf)
  - ALGE, Swimming System installation guide, Timer S4, Version E-97-03-24 (https://alge-timing.com/downloads/userGuides/s4-schwimmen-installation-be.pdf)
-->

This article is a stub. The `P4` is an [ALGE-Timing](../../../vendors/alge-timing.md)
electrosensitive printer that plugs into the [Timer S4](alge-timer-s4.md) and runs from the
timer's batteries.

See the [timers overview](index.md) for the shared background that applies to every timing
console.

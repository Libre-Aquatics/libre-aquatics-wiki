---
title: Swiss Timing INT004 converter
description: >-
  The INT004 is a Swiss Timing box that converts a serial line between RS232 and RS422 and
  distributes it to up to seven devices.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: INT004 converter
infobox:
  - label: Manufacturer
    value: Swiss Timing
  - label: Type
    value: RS232 and RS422 converter and distributor
  - label: Connection
    value: RS232 and RS422 inputs; up to seven outputs
  - label: Power
    value: '10–40 V DC or 85–264 V AC'
  - label: Manual
    value: '[INT004 User''s Manual (3394.500.02)](https://www.swisstiming.com/pdfs/3394.500.02.pdf)'
---

<!--
Research notes, Swiss Timing INT004. Surfaced 2026-11-07 while building out
swiss-timing-int131.md; Swiss Timing's instruction-manual list files the two converters side by
side ("INT004 converter RS232-RS422" and "INT131 converter USB-RS232/RS422").

Held and read in full: sources/vendors/swiss-timing/accessories/swiss-timing-int004-user-manual-3394.500.02
("User's Manual INT004, Converter & Distributor RS232-RS422", 3394.500.02, version 1.2, June 2008,
3 pp. of content). Verified from it:
  - RS232-to-RS422 conversion in either direction, with one input fanned out to at most seven
    devices.
  - An input switch on top selects RS232 or RS422 as the source for the outputs; a loop-resistor
    switch on the side is set ON when the RS422 OUT socket is unused and OFF when it is used.
  - RS232: one IN/OUT (pins 2 RX, 3 TX, 5 GND; 1, 4 and 6 linked) and outputs OUT1 to OUT3.
    RS422: one IN/OUT and outputs OUT, OUT4, OUT5 and OUT6 (TX on pins 3 and 4, RX on 5 and 6).
  - Power from DC (10-40 V, 500 mA T fuse, 4-pin input, pin 1 +, pin 2 -) or AC (85-264 V,
    50/60 Hz, 800 mA T fuse). Red power LED; green signal LED blinks when data arrive on the
    selected input.
Not established: part number of the box, dimensions, introduction date, which systems use it.
The manual does not mention the INT131.

Sources:
  - Swiss Timing, User's Manual INT004, 3394.500.02, version 1.2, June 2008 (https://www.swisstiming.com/pdfs/3394.500.02.pdf)
  - Swiss Timing, Instruction manuals list (https://www.swisstiming.com/download/instruction-manuals/), read 2026-11-07
-->

This article is a stub. The INT004 is a Swiss Timing box that turns an RS232 signal into RS422
or the reverse and passes one input on to as many as seven devices, running from either a DC or
a mains supply.

See the [timers overview](index.md) for the shared background that applies to every timing
console.

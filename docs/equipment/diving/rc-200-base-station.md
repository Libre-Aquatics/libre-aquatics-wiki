---
title: Daktronics RC-200 base station
description: >-
  The RC-200 base station is the Daktronics radio receiver that links RC-200 handhelds to a
  scoreboard or, for judging, to an OmniSport 2000 timing console.
tags:
  - Equipment
  - Diving
  - Scoring
infoboxTitle: RC-200 base station
infobox:
  - label: Manufacturer
    value: Daktronics
  - label: Part number
    value: '`0A-1110-0066` (kit); `0A-1110-0067` (outdoor); model `DAKT-0406-00`'
  - label: Type
    value: Wireless base station
  - label: Connection
    value: CAN to the OmniSport 2000 J14 or J15 port on `W-1823`; RS-232; 6-pin plug inside a scoreboard
  - label: Power
    value: 12–18 V, 0.1 A (label); 12 V AC wall pack
---

<!--
Research notes, RC-200 base station. Surfaced 2026-10-19 while building out rc-200.md.

Sources, all read for rc-200.md:
- Daktronics, Remote Control System RC-200 All Sport Operation Manual, DD3572889 Rev 03,
  26 January 2023 (held under sources/vendors/daktronics/accessories/). The label figure gives
  the base station as 0A-1110-0067, 12-18 V at 0.1 A, model DAKT-0406-00, the same model number
  as the handheld. Section 2 lists three housings: built into the display, a tabletop enclosure,
  and an outdoor enclosure. Section 17 covers its LEDs: IN RANGE flashes at start-up while it
  looks for another server on its channel and keeps flashing if it finds one; fault codes are a
  long flash on DATA OUT/TX and IN RANGE followed by short flashes, five times, then a reset.
  ALT+CONNECT on a handheld shows its firmware (DD-3561942 with a version), group, channel and
  region (D or I).
- Drawings in that manual: DWG-3640329 (May 2017) shows the tabletop unit 0A-1110-0066 with
  12 VAC power, RS232 and CAN sockets and an L-shaped antenna, on W-1823 to the OmniSport 2000,
  function 1. DWG-3640534 (2004, an RC-100 drawing reissued) gives the function table (1 CAN
  judges console, 2 All Sport scoreboard Gen I, F reset/test), server mode as shipped with
  jumpers moved for client mode, and in-scoreboard mounting on Velcro with an external antenna;
  pre-April-2015 drivers take adapter W-2913. Kit notes call 0A-1110-0066 the base station kit
  (typical function 2, server jumper on) and point to 0A-1110-0067 as the outdoor unit for
  remote location; one tennis riser names 0A-1110-0068 as the outdoor base station instead.
  The remote start/stop kit uses its own base station, 0A-1110-0069. Wall pack A-3430138.
- Daktronics KB DD1993017 (broadcast and channel dials under a four-screw cover), DD3998349 (one
  handheld can drive several base stations if one is server and the rest clients, set on X1),
  DD2674209 (judging: function 1, server, different channels for two base stations), and
  000011787 (function 5 given as the fix for a unit stuck waiting for external control,
  application not stated).
Discrepancies: 0A-1110-0067 is both the outdoor unit in drawing notes and the generic label in
the manual; outdoor unit 0A-1110-0067 versus 0A-1110-0068. The judging riser still marks the
channel range 1-15, an RC-100 figure.
Still to research: enclosure dimensions; firmware history; current part numbers.
-->

This article is a stub. The RC-200 base station (kit `0A-1110-0066`) is the
[Daktronics](../../vendors/daktronics.md) receiver that RC-200 handhelds connect to by radio. A
dial selects its job, and on function 1 it links up to nine [RC-200](rc-200.md) judge consoles
to the J14 or J15 port of an [OmniSport 2000](../swimming/timers/omnisport-2000.md).

See the [diving equipment overview](index.md) for the shared background on judging equipment.

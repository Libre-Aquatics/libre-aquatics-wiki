---
title: ALGE cable 010-10
description: >-
  Cable 010-10 is the ALGE-Timing data cable from a Timer S4's display-board socket to GAZc or
  GAZ5 display boards.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Cable 010-10
infobox:
  - label: Manufacturer
    value: '[ALGE-Timing](vendors/alge-timing.md)'
  - label: Part number
    value: '`010-10`'
  - label: Type
    value: 'Display-board data cable'
  - label: Connection
    value: 'Timer S4 display-board socket to display-board banana sockets'
---

<!--
Research notes, ALGE cable 010-10.

Surfaced 2026-11-07 while building out alge-timer-s4.md.

Timer S4 manual (E-06-04-18), section 5.3 and page 13: 010-10 runs from the S4's "display board"
socket to the board's banana sockets. The socket carries two data channels; turning the plug half a
turn swaps which channel reaches the board (running time on one, finish time on the other in most
programs). Data at 2400 baud, 8N1 by default. For runs over 10 m the manual extends it with the
KT300 or KT500 cable reels.
Swimming installation guide E-97-03-24 drawings: a "cable 010-xx" from the S4 to the GAZc boards.
The -10 suffix is presumably the length in metres, as with the 001-10/-20/-30 photocell cables in the
same manual. Inferred.
GAZ5 manual (Version E120911), section 4.3: the S4 can feed a GAZ5 through 010-10, 037-10 or 060-10,
extended with ordinary two-wire cable to about 1 km or with KT300/KT500 reels. 037-10 and 060-10 not
researched.

Sources:
  - ALGE-Timing, Timer S4 manual, Version E-06-04-18 (https://alge-timing.com/downloads/userGuides/s4-be.pdf)
  - ALGE, Swimming System installation guide, Timer S4, Version E-97-03-24 (https://alge-timing.com/downloads/userGuides/s4-schwimmen-installation-be.pdf)
  - ALGE-Timing, GAZ5 manual, Version E120911 (https://alge-timing.com/downloads/userGuides/GAZ5-BE.pdf)
-->

This article is a stub. The `010-10` is the [ALGE-Timing](../../../vendors/alge-timing.md) data
cable from the display-board socket of a [Timer S4](alge-timer-s4.md) to a
[GAZc](../../common/scoreboard/alge-gazc.md) display board, and turning its plug over swaps the
data channel the board receives.

See the [timers overview](index.md) for the shared background that applies to every timing
console.

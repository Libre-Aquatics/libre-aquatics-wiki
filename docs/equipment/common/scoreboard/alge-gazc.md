---
title: ALGE GAZc display board
description: >-
  The GAZc is the ALGE-Timing numeric display board driven by the Timer S4, used one per lane as a
  ranking board or singly for all times in the S4 swimming system.
tags:
  - Equipment
  - Scoring
  - Swimming
infoboxTitle: GAZc
infobox:
  - label: Manufacturer
    value: '[ALGE-Timing](vendors/alge-timing.md)'
  - label: Part number
    value: '`GAZc`'
  - label: Type
    value: 'Numeric LED display board'
  - label: Connection
    value: '[Cable 010-10](equipment/swimming/timers/alge-cable-010.md) from the Timer S4; Amphenol power cable 033'
  - label: Status
    value: 'Discontinued; dates not established'
---

<!--
Research notes, ALGE display board GAZc.

Surfaced 2026-11-07 while building out alge-timer-s4.md. Already named on alge-d-sw.md as the board
SwimTime calls GAZ ("GAZc on the 1997 Timer S4, GAZ5 in 2013").

Swimming installation guide E-97-03-24, pages 1, 9-10 and drawings:
  - Up to eight on one Timer S4, one per lane, showing rank, lane and time in order of finish
    (ranking board). A thumb-wheel switch on each board sets the rank it shows, 1 at the top to 8 at
    the bottom; the S4 toggle switch goes to A-timer or B-timer.
  - Or a single board showing every time: thumb wheel at 0, S4 at C-timer; the yellow key steps
    from the winner's time down the placings, and after the last one the printer prints the whole
    result.
  - Power from an NGAZ/R mains supply (220 V; a 110 V NGAZ/R also made) over Amphenol cable 033, or a
    board's own powerpack, which lasts a day and charges in about 14 hours; NGAZc is the other
    external supply named.
Timer S4 manual E-06-04-18: the S4's display-board socket has two data channels and supply; 2400
baud default; the board's EPROM must be changed to 4800 baud if the S4 sends time of day and net
time together; addressed output (thumb wheel 1-3) for several boards; a 6-digit board shows
thousandths with the thumb wheel at 13.
GAZ5 manual (Version E120911): the later GAZ5 still accepts data from a Timer S4 or S3 with the
rotation switch at 0 or 13, so GAZ5 kept the GAZc protocol. That the GAZ5 replaced the GAZc is
inferred from this and the 2013 catalogue only.

Not established: digit height, digit count of the swimming version, dimensions, dates.

Sources:
  - ALGE, Swimming System installation guide, Timer S4, Version E-97-03-24 (https://alge-timing.com/downloads/userGuides/s4-schwimmen-installation-be.pdf)
  - ALGE-Timing, Timer S4 manual, Version E-06-04-18 (https://alge-timing.com/downloads/userGuides/s4-be.pdf)
  - ALGE-Timing, GAZ5 manual, Version E120911 (https://alge-timing.com/downloads/userGuides/GAZ5-BE.pdf)
-->

This article is a stub. The `GAZc` is the [ALGE-Timing](../../../vendors/alge-timing.md) numeric
display board that a [Timer S4](../../swimming/timers/alge-timer-s4.md) drives, set by a thumb-wheel
switch either to show one placing as part of an eight-board ranking stack or to show every time on
a single board.

See the [scoreboards overview](index.md) for the shared background on scoreboards.

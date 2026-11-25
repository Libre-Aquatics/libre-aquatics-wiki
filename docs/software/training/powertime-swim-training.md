---
title: Swim Training
description: >-
  Swim Training is a Swiss Timing program for the PowerTime II hand-held timer that records
  split, lap, reaction and turn times during swimming practice.
tags:
  - Software
  - Swimming
  - Timing
---

<!--
Research notes, Swim Training (PowerTime II). Surfaced 2026-11-16 while building out top-8.md,
from Swiss Timing's instruction-manual list.

Read in full: Swiss Timing, User Manual Swim Training, 3462.502.02, version 2.0, English
(https://www.swisstiming.com/pdfs/3462.502.02.pdf, fetched 2026-11-16, not filed in sources/;
PDF created 24 February 2010 from Word). Verified from it:
  - A coaching aid for practice; it points to the PowerTime II general manual 3462.501.02 for
    everything outside the program itself.
  - Inputs through the 5-input box 3361.608 (1 start, 4 stops) or the 9-input box 3361.609
    (1 start, 8 stops). Devices named: OCP5 touchpad, OSB11 starting block, OIT3 pushbutton,
    StartTime start system.
  - Mode sectional timing: start on the start input, touchpads or pushbuttons on inputs 1-8.
    Records the split from the start, the lap (since the last impulse on the same input) and the
    section (since the last impulse on any input). Bib typed at any time; bib 0 means nothing is
    saved. Scoreboard lines: running, split, lap, section.
  - Mode reaction time: OSB11 on input 1, optional pushbuttons on 2-8. Records the time until the
    swimmer leaves the block, plus splits. With bib 0 a new start impulse restarts the
    measurement automatically. Scoreboard lines: running, split, reaction.
  - Mode touchpad turn: OCP5 on input 1, optional start and pushbuttons. Records how long the
    hands stay on the pad, from first pressure to release. Scoreboard lines: running, split,
    time on the pad.
  - Mode daytime: any input, or the START key, records a time of day.
  - Send results: RS-232 PC line, one record per time, with race type letter (I sectional,
    B reaction on blocks, T touchpad turns, D day time), sequential race number, bib 1-999, lap
    or split number, time, PowerTime input number and a time-mode flag. Delete results clears
    the memory.
Swiss Timing's manual list (read 2026-11-16) also has editions 3462.502.01 and 3462.502.03,
presumably French and German; not read. The program is not on the 2002-2009 Omega Electronics
download pages for the original PowerTime, so it appears to be PowerTime II only (inferred).

Not established: release date, versions before 2.0, whether it is still distributed.

Sources:
  - Swiss Timing, User Manual Swim Training, 3462.502.02, v2.0 (https://www.swisstiming.com/pdfs/3462.502.02.pdf)
  - Swiss Timing, Instruction manuals (https://www.swisstiming.com/download/instruction-manuals/)
-->

This article is a stub. Swim Training is a [Swiss Timing](../../vendors/swiss-timing.md) program
for the [PowerTime II](../../equipment/swimming/timers/powertime-ii.md) that times practice swims
from touchpads, starting blocks and pushbuttons, giving splits, lap times, reaction times and
time spent on the wall at a turn (user manual `3462.502.02`).

See the [software overview](../index.md) for the other programs this wiki covers, and
[TOP-8](../timing/top-8.md) for the PowerTime's race-timing program.

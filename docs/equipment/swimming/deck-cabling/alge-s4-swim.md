---
title: ALGE S4-SWIM lane box
description: >-
  The S4-SWIM is the ALGE-Timing switch box that connects eight swimming lanes and a Start Acoustic
  SA1 to a Timer S4 through its 25-pin multi-channel socket.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: S4-SWIM
infobox:
  - label: Manufacturer
    value: '[ALGE-Timing](vendors/alge-timing.md)'
  - label: Part number
    value: '`S4-SWIM`'
  - label: Type
    value: 'Lane switch box'
  - label: Lanes
    value: '8'
  - label: Connection
    value: '25-pin plug to the Timer S4; four [cable 078](equipment/swimming/deck-cabling/alge-cable-078.md) outlets; cable 004 to the SA1'
  - label: Status
    value: 'Discontinued; dates not established'
---

<!--
Research notes, ALGE S4-SWIM.

Surfaced 2026-11-07 while building out alge-timer-s4.md.

Swimming installation guide E-97-03-24, read in full with the drawings rendered:
  - Plugs into the Timer S4's "multi channel" socket (item 22) with a 25-pin plug.
  - Text says eight outlets for the finish adapters; the drawings label the lane-side outlets in
    pairs, "1+2 3+4 5+6 7+8", one cable 078 per pair, which matches one FIN1 per two lanes.
  - Holds a touchpad on/off switch per lane and the SA1's "start" socket; cable 004 joins the
    two.
  - On the false-start drawing (SCHW-E05.DWG, 3 November 1994) one S4-SWIM has outlets on both
    sides, serving finish adapters at both ends of the pool, and feeds two Timer S4s.
Timer S4 manual E-06-04-18: the multi-channel socket is a 25-pin D-sub carrying all 18 timing
channels, 5 V and external supply, RS232 receive and a printer/display data line; the swimming
program (6) relies on the "switch board (S4-SWIM)" to arm the pads. The MC18 box is the general
purpose alternative on the same socket, breaking every channel out to a banana jack.

Discrepancy: text "eight outlets" vs drawing's four paired outlets per side. Both may be true if each
outlet is a pair of lanes; unresolved.

Not established: dimensions, internal wiring, dates.

Sources:
  - ALGE, Swimming System installation guide, Timer S4, Version E-97-03-24 (https://alge-timing.com/downloads/userGuides/s4-schwimmen-installation-be.pdf)
  - ALGE-Timing, Timer S4 manual, Version E-06-04-18 (https://alge-timing.com/downloads/userGuides/s4-be.pdf)
-->

This article is a stub. The `S4-SWIM` is the [ALGE-Timing](../../../vendors/alge-timing.md) switch
box that plugs into the 25-pin socket of a [Timer S4](../timers/alge-timer-s4.md), carries the
touchpad on/off switches for eight lanes, and feeds a [FIN1 finish adapter](alge-fin1.md) for each
pair of lanes.

See the [deck-cabling overview](index.md) for the shared background on lane wiring.

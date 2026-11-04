---
title: ALGE SWT3 swim terminal
description: >-
  The SWT3 is the ALGE-Timing lane terminal that chains on a bus to the TM-SWIM and takes a
  touchpad, three push buttons and a starting block for its lane.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: SWT3
infobox:
  - label: Manufacturer
    value: '[ALGE-Timing](vendors/alge-timing.md)'
  - label: Part number
    value: '`SWT3`; terminator `SWT-END`'
  - label: Type
    value: 'Swim lane terminal'
  - label: Connection
    value: 'Cable `200-04` terminal to terminal'
  - label: Dimensions
    value: '160 × 85 × 60 mm (product page); 159 × 84 × 59 mm (manual)'
  - label: Weight
    value: '577 g (product page); 0.3 kg (manual)'
  - label: Power
    value: '12 V from the TM-SWIM'
  - label: Status
    value: 'Current'
---

<!--
Research notes, ALGE SWT3 swim terminal.

Surfaced 2026-11-04 while building out alge-tm-swim.md.

Manual 5.5: all terminals identical, any lane, five peripherals (dual-edge touchpad, three manual
buttons, one relay sensor), 1/10,000 s precision, sits behind the lane or inside an SO4 or SO5.
Silicone grease on contacts. Product page: sealed; SWT-END on the last unit; a system must not combine it with
the earlier SWT or SWT2. Generation order: SWT, SWT2 (2013 catalogue, same five channels), SWT3.

SWT-DP: the SwimTime log of February 2025 adds a touchpad failure pre-warning for it, and the TMS
log of December 2024 describes extended SWT hardware reporting low pad resistance on channel 5.
Whether SWT-DP is a separate product or a revision is not established; no page found.

Manual 3.1 still says to connect an SWT2 during installation, a leftover.

Sources:
  - ALGE-Timing, Swimming Timing System manual (Version E24-08-29, published at alge-timing.com/downloads/userGuides/Swimming-BE.pdf)
  - ALGE-Timing product page (alge-timing.com/en/product/2229/swt3, read 2026-11-04)
  - ALGE-Timing, The Specialist for Swimming, catalogue V1.113, PDF dated 2 September 2013 (freker.se/dokument/ALGE%20Swimming-KE-1.PDF)
  - ALGE-Timing, History file for SwimTime (alge-timing.com/alge/download/software/Change_SwimTime.txt)
  - ALGE-Timing, History file for Time Manager Swim (alge-timing.com/alge/download/uC/Change_TMS.txt)
-->

This article is a stub. The `SWT3` is the [ALGE-Timing](../../../vendors/alge-timing.md) lane
terminal for the [TM-SWIM](../timers/alge-tm-swim.md), with one per lane and side, sockets for a
touchpad, three push buttons and a starting block, and an `SWT-END` terminator on the last unit.

See the [deck-cabling overview](index.md) for the shared background on lane wiring.

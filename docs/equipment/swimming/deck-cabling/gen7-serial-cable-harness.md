---
title: Colorado Time Systems Gen7 Serial cable harness
description: >-
  The Gen7 Serial cable harness is the on-deck lane harness for the Colorado Time Systems Gen7
  Serial Timer, plugged into round near-end and far-end sockets and chainable to 20 lanes.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Gen7 Serial cable harness
infobox:
  - label: Manufacturer
    value: '[Colorado Time Systems](vendors/colorado-time-systems.md)'
  - label: Type
    value: On-deck serial lane harness
  - label: Lanes
    value: Up to 20, primary and backup chained
  - label: Timer
    value: '[Gen7 Serial Timer](equipment/swimming/timers/gen7-serial.md)'
---

<!--
Research notes, Gen7 Serial cable harness. Surfaced 2026-10-19 while building out
cts-cable-harness.md, when the user pointed out that the Gen7 Serial seemed to use a different
harness connector from the 50-pin CH41 family.

Verified, from documents held under sources/vendors/colorado-time-systems/timers-consoles/:
- Gen7 Swimming User Guide F1034 Rev 201807 and Gen7 Serial Timer User Guide F1034 Rev 202603
  (https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Gen7/Gen7SerialTimerUserGuide_F1034.pdf):
  the Serial timer's in-deck and on-deck connections differ; on deck it has separate near-end
  and far-end connectors for serial cable harnesses, which can be chained so one timer serves
  main and backup harnesses over as many as 20 lanes. Lane mapping offers extra on-deck options
  (normal, reversed, shift up/down, advanced). Input detection works only on in-deck serial
  deckplates, not on harnesses. Appendix A: the on-deck near and far connectors together supply
  12 V at 200 mA, short-circuit protected; battery runs up to 6 h with harnesses or a small
  in-deck system.
- Gen7 Serial Quick Start Guide F1041 Rev C (on-deck page): near-end and far-end harnesses drawn
  into two small round sockets in the ON DECK block of the timer's rear panel; the drawing shows
  each lane point as a block with two plugs.
- Gen7 Serial swim timing sheet: cable harnesses up to 20 lanes; TP-GEN7-6/-8/-10 touchpad
  systems include a primary cable harness.
Inferred, not stated: that the harness is built from the same networked nodes as the in-deck
system (the US 10,137,353 node patent and the keyed, wet-pluggable connect hubs suggest it, but
no document says what is inside a serial harness pod).
Not found (searched 2026-10-19: the CTS Shopify product list, the CTS shop, Pool360, Just In
Timing, KAP7, HS Sports, the web): any part number, the connector type, pod jacks, lengths, or
price. The CH41 family on the CTS shop is the 50-pin harness, not this one.
-->

This article is a stub. The Gen7 Serial cable harness is the on-deck lane harness for the
Colorado Time Systems [Gen7 Serial Timer](../timers/gen7-serial.md), plugged into round
near-end and far-end sockets instead of the 50-pin connector of the older
[CTS cable harness](cts-cable-harness.md), and chainable so that a pool of up to 20 lanes can have both primary and
backup harnesses.

See the [deck cabling overview](index.md) for the shared background that applies to every
deck cabling system.

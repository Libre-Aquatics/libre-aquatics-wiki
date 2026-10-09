---
title: Daktronics lane module
description: >-
  The Daktronics lane module is the on-deck connection box for one lane in an OmniSport 2000
  swimming system; identical modules daisy-chain along the deck to form the harness.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Daktronics lane module
infobox:
  - label: Manufacturer
    value: Daktronics
  - label: Type
    value: On-deck lane module
  - label: Connection
    value: Daisy-chained; four-pin plug to the console
  - label: Timer
    value: OmniSport 2000
    href: equipment/swimming/timers/omnisport-2000.md
---

<!--
Research notes, Daktronics lane module. Surfaced 2026-10-08 while writing the deck-cabling
overview.

Read: sources/vendors/daktronics/timers-consoles/daktronics-omnisport-2000-timing-console-
operation-manual-p1240-ed-13312-23 (ED-13312 Rev 16, 23 May 2019), "Deck Cabling & Lane Modules"
and the test menu. A module takes a touchpad and as many as three buttons, through jacks
labelled TOUCHPAD, BUTTON 1-3 and TO NEXT LANE; the linking cable is keyed. Modules are universal: the
console works out each module's lane from its place in the chain. A relay take-off platform
plugs into BUTTON 3, piggy-backed on the third button if all three are used. A Lane Extension
Module (an extension cable) joins the console to the nearest module in 25, 50, 100 or 200 ft
(7.6, 15.2, 30.5, 61 m) lengths, ending in a four-pin plug into J10 (near end) or J11 (far end).
Near- and far-end chains must not be joined together. Keep modules out of the swimmers' way and
out of standing water. Ground tab of each dual banana plug to the black jack; reversed
touchpads cause phantom touches. Daktronics says one bad lane is fixed by swapping its module.
Lane module test: MENU 5-2 shows TP and B1-B3 by lane.
Also: T-7000 manual DD1953274 (0 V at the module input means a bad module, swap to confirm);
Aquatics Maintenance Checklist DD3691471 (silicone grease LU-1002, brushes TH-1024/TH-1025);
Aquatics Solutions brochure DD1565872 (sealed modules; modular so the whole harness need not be
replaced). Daktronics KB 000009528 (testing a lane module with a pushbutton) and KB DD2416737
(lane modules not repairable) are already cited on pushbutton/daktronics.md.

Still to research: part number; internal design (whether the module is active electronics or a
passive junction; the position-in-chain addressing suggests active); maximum chain length;
whether it also works with the OmniSport 6000 or 1000.
-->

This article is a stub. The Daktronics lane module is the on-deck connection box for one lane of
an [OmniSport 2000](../timers/omnisport-2000.md) swimming system, with jacks for a touchpad and
three buttons; identical modules daisy-chain along the deck, and the console works out each
module's lane from its position in the chain.

See the [deck cabling overview](index.md) for the shared background that applies to every
deck plate and harness.

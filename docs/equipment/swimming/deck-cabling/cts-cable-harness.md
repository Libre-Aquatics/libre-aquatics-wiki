---
title: Colorado Time Systems cable harness
description: >-
  The Colorado Time Systems cable harness is the portable multi-conductor cable laid along the
  pool deck to connect each lane's touchpad and backup buttons to a CTS timing console.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Colorado Time Systems cable harness
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Part number
    value: '`CH41-8` (8-lane touchpad and pushbutton primary harness)'
  - label: Type
    value: On-deck multi-conductor lane harness
  - label: Connection
    value: 50-pin connector to the timer or a wall plate
  - label: Source
    value: '[CTS shop, CH41-8](https://shop.coloradotime.com/products/8-lane-touchpad-and-pushbutton-primary-cable-harness-ch41-8)'
---

<!--
Research notes, CTS cable harness. Surfaced 2026-10-08 while writing the deck-cabling overview.

Read (local copies under sources/vendors/colorado-time-systems/):
- software/cts-system-6-swimming-software-user-guide-f870 (F870 Rev. 20241107): CTS offers an
  on-deck harness or in-deck wiring; the harness is described as a multi-conductor cable
  run across the deck, and its usual fault is a corroded connector. Console has near-end and
  far-end harness inputs for lanes 1-10 with a second connector for lanes 11-12, and a duplicate
  pair so a second timer can be attached as a backup. Touchpads and the first button go on the
  "Prime" connectors of the primary harness; buttons B and C go on a separate B and C
  backup-button harness. Testing: a voltmeter in each touchpad and button position should read
  5 V.
- touchpads-deckplates/cts-touchpads-user-guide-f147 (Rev. 201407) and accessories/cts-test-
  meter-instructions (F696 Rev. 0205): each lane pod has receptacles labelled PRIME and BUTTON;
  the test meter should read 4.5-5 V at each.
- touchpads-deckplates/cts-deck-plate-and-cable-harness-cleaning-f897 (Rev. 201111): grease each
  pod jack before use; clean with alcohol and a cotton pipe cleaner after; hang the harness to
  dry, never bag it; brush the 50-pin plug (timer or wall-plate end) with alcohol.
- timers-consoles/cts-serial-timer-user-guide-f1034 (Rev 202603): the Gen7 Serial uses serial
  cable harnesses with separate near- and far-end inputs, which link end to end so one console can take primary and
  backup harnesses across as many as 20 lanes; input detection does not work on harnesses. Whether the serial
  harness has its own part number was not found.
- timers-consoles/cts-legacy-timer-user-guide-f1058: on a Gen7 Legacy, the starter can plug
  into a start pod on the primary harness.
Web: the CTS shop listing for CH41-8 (8-lane touchpad and pushbutton primary cable harness),
already cited on pushbutton/cts.md. relay-judging/cts.md cites R-SL-xx speedlight harnesses
(6/8/10/12 lanes), and the start-system pages cite LS40-xx lane-speaker harnesses; those carry
other signals and are separate harnesses.

Still to research: the full CH41 and B/C backup harness part-number range; lengths; the serial
harness part numbers; when CTS introduced the pod design.
-->

This article is a stub. The Colorado Time Systems cable harness is a portable multi-conductor
cable laid along the pool deck, with a pod at each lane for the touchpad and backup buttons,
that plugs into a CTS timer or wall plate through a 50-pin connector; the 8-lane primary
version is `CH41-8`.

See the [deck cabling overview](index.md) for the shared background that applies to every
deck plate and harness.

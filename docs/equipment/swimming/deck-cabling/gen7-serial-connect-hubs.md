---
title: Colorado Time Systems Gen7 serial connect hubs
description: >-
  The Gen7 serial connect hubs are Colorado Time Systems' keyed, colour-coded titanium
  connection points for the timer, starter, scoreboard and bulkheads on a Gen7 Serial
  in-deck system.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Gen7 serial connect hubs
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Part number
    value: '`TDPI-T1`, `TDPI-S2`, `TDPI-BH3`, `TDPI-BH4`, `TDPI-SC5`'
  - label: Type
    value: In-deck and wall-plate connection hubs
  - label: Timer
    value: Gen7 Serial Timer
    href: equipment/swimming/timers/gen7-serial.md
  - label: Source
    value: '[CTS, Gen7 Swim Timing Serial Connect Hubs](https://coloradotime.com/products/gen7-swim-timing-serial-connect-hubs)'
---

<!--
Research notes, Gen7 serial connect hubs. Surfaced 2026-10-10 while building out
cts-titanium-deckplate.md; kept as a stub by decision.

Read:
- sources/vendors/colorado-time-systems/timers-consoles/cts-gen7-serial-connect-hubs (datasheet,
  REV 09/22, two pages; both rendered with PyMuPDF and inspected). Table: titanium timer connect
  TDPI-T1; titanium starter connect TDPI-S2; titanium bulkhead connect in-deck TDPI-BH3; titanium
  bulkhead connect on bulkhead TDPI-BH4; titanium scoreboard connect TDPI-SC5. Photo shows four
  square plates with a round centre socket coloured red (Timer Connect), green (Start Connect),
  gray (Scoreboard Connect) and blue (Bulkhead Connect), plus a Connect Hub Cover (screw-on cap).
  Features: keyed and colour-coded so each part goes in one place; titanium pins; wet-pluggable
  connector pushes water off the contact face; self-diagnostics and presence detection; fits a
  4 x 4 x 6 in PVC junction box; 1.5 in PVC conduit between deckplate and wallplate boxes.
- sources/.../timers-consoles/cts-gen7-serial-swim-timing-gen7 (REV 10/24): hubs check for a
  connection twice a second; on-board memory for troubleshooting data; cap supplied with each
  hub; floor plates can be power-washed; timer, start, scoreboard and bulkhead hubs mount in the
  deck or in wallplates.
- sources/.../timers-consoles/cts-serial-timer-user-guide-f1034 (Rev 202603): R-015-715-xx cable,
  black end to the timer, white end with red keyway to a "Timer" node in wall or deck; the starter
  reaches its own node over R-015-706-xx, whose keyway is green.
- sources/.../start-systems/cts-championship-elite-start-system-user-instructions-f1064:
  R-015-706-xx (8 m or 15 m) from the Elite's WALLPLATE connector to a TDPI-S2 (in-deck) or
  WPI-S2 (wallplate) starter node; the cable carries start and audio. WPI-S2 is the only WPI part
  seen; other WPI- numbers are presumably the wall-plate equivalents (inferred, unverified).
- coloradotime.com/products/gen7-swim-timing-serial-connect-hubs (fetched 2026-10-10): same
  table; adds that the hubs report input connections, wire terminations and corrosion; links
  datasheet Gen7_Connect_Hubs.pdf, F1066 networking, F1041 serial quick start, F1034-1.
- ManualsLib lists the five TDPI parts as covered by the Gen7 Legacy guide F1058 Rev 202012;
  that is ManualsLib's tagging, not a CTS statement.
- Patents: US 10,137,353 B2 is the connect-hub networked-node patent cited on gen7-serial.md;
  US 11,192,016 B2 (component detection) is also relevant. Not re-read for this stub.

- CTS video "Gen7 Serial Swim Timing" (slide presentation, 3:15; youtube.com/watch?v=pfd3J5qrf9g;
  screenshots held in
  sources/vendors/colorado-time-systems/timers-consoles/cts-gen7-serial-swim-timing-video/, one PNG per slide named by timestamp). Frames read:
  0:57 bulkhead: wet-pluggable floor plates poolside and in the bulkhead; plate pictured with
  a blue socket. 1:08 the bus lets the timer, starter, deck clocks, portable scoreboards and
  bulkheads connect where the facility chooses. 1:11 connect hubs: same features as the 10/24
  datasheet, plus "compromised wire terminations or corrosion" among what the hubs report, and
  mounting in the floor or the wall. 1:42 Start Connect Hub: green, for the Championship or
  Infinity starter. 2:24 Lane Quick Connect Hub: dark gray; same feature list (proprietary
  wet-pluggable connector, connection detection, self-diagnostics, 4 x 4 x 6 in box, 1.5 in
  conduit). This hub is NOT in the 09/22 TDPI table and has no part number anywhere found;
  what it connects (a lane, a harness, a bulkhead lane run) is not stated. 2:40 Timer Connect:
  red; the timer's own cable plugs in here from the deck side; uses CTS's proprietary
  serial link. 2:57 Scoreboard Connect: light gray; where deck clocks and portable
  scoreboards plug in (answers the earlier open question). All hubs share one housing: a
  square plate with four corner screws, "GEN7" moulded at the top, the CTS name down the left,
  radial ribs round a central round multi-pin socket whose collar carries the colour, and a
  key notch below the socket.
  The datasheet photo calls the scoreboard hub gray; the video distinguishes light gray
  (scoreboard) from dark gray (lane quick connect).

Still to research: dimensions; hub colours for BH3 versus BH4 (the video shows one blue
bulkhead plate); the part number and purpose of the Lane Quick Connect Hub; the WPI- wall-plate
range; pin count; introduction date (Gen7 Serial announced April 2017).
-->

This article is a stub. The Gen7 serial connect hubs are Colorado Time Systems' keyed titanium
connection points for the [Gen7 Serial Timer](../timers/gen7-serial.md), colour-coded red for
the timer (`TDPI-T1`), green for the starter (`TDPI-S2`), blue for bulkheads (`TDPI-BH3`,
`TDPI-BH4`) and light gray for deck clocks and portable scoreboards (`TDPI-SC5`), with a dark
gray lane quick-connect hub shown by CTS but absent from its part list, all mounted in the deck
or a wall plate on the same data bus as the
[intelligent Titanium Deckplates](cts-titanium-deckplate.md).

See the [deck cabling overview](index.md) for the shared background that applies to every
deck plate and harness.

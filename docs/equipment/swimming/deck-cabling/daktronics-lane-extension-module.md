---
title: Daktronics lane extension module
description: >-
  The Daktronics lane extension module is the lead that joins an OmniSport 2000 console to the
  nearest lane module in an on-deck swimming harness, made in lengths from 25 to 200 ft.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Daktronics lane extension module
infobox:
  - label: Manufacturer
    value: Daktronics
  - label: Part number
    value: '`0A-1056-0150` (Lane Extension Module II, length not stated)'
  - label: Type
    value: On-deck harness extension
  - label: Models
    value: Lane Extension Module II
  - label: Connection
    value: TO NEXT LANE jacks to the first lane module; four-pin plug to console J10 or J11
  - label: Lengths
    value: 25, 50, 100 and 200 ft (7.6, 15.2, 30.5 and 61 m); 200 ft maximum
  - label: Timer
    value: OmniSport 2000
    href: equipment/swimming/timers/omnisport-2000.md
  - label: Status
    value: OmniSport line being retired since 2023; service for up to 7 years
  - label: Manual
    value: '[OmniSport 2000 Timing Console Operation Manual (ED-13312)](https://www.daktronics.com/web-documents/customer-service-manuals/ed13312.pdf)'
---

<!--
Research notes, Daktronics lane extension module. Surfaced 2026-10-16 while building out
daktronics-lane-module.md; built out 2026-10-21.

Read: OmniSport 2000 Timing Console Operation Manual (ED-13312 Rev 16, 23 May 2019), held at
sources/vendors/daktronics/timers-consoles/, deck cabling pp. 6-9, figure 13 rendered and
zoomed. The panel reads DAKTRONICS, INC., LANE EXTENSION MODULE II, with a row of four TO NEXT
LANE jacks (three black, one red), the D logo, sticker ASSY # 0A-1056-0150, S/N 1328, dated
09/01/06, REV 04, and the panel legend LL-2582, REV 00; a lead leaves one end through a strain
relief. The text calls it an extension cable between the console and the nearest lane module,
in 25, 50, 100 and 200 ft (7.6, 15.2, 30.5, 61 m) lengths, ending in a four-pin plug into J10
NEAR END or J11 FAR END. The manual's figure 4 and the Minnesota Swimming officials' slides
(Timing Systems 101, November 2024, gomotionapp.com) show it at the console end of the chain.
J10 and J11 carry ground, lane-module data, clock and unregulated supply on pins 1-4.

Build-out research, 2026-10-21:
- ED-13312 further: equipment overview lists "deck cabling with lane modules and lane extension
  cable"; figure 4 (on-deck installation) labels the EXTENSION MODULE at the console; the note on
  p. 6 says the two ends' harnesses must stay separate, each reaching the console on its own
  jack; p. 9 calls it the "deck extension" when giving the J10/J11 instruction;
  on-deck, the lane order turns on where the console is placed relative to
  lane 1; connector designations: J10/J11 pins 1-3 black (GND, LM data, CLK), 4 red
  (+VUNREG).
- OmniSport 2000 Swimming Quick Reference ED-13584: coat banana connectors of deck extensions
  (on-deck) with silicone, along with lane modules, start and speaker cables; connectors that
  plug straight into the console or horn start need none.
- Daktronics KB DD2106954 "Maximum distance that can be obtained btw lane module and OmniSport
  2000": the lane extension module is the cable from console to nearest lane module; 25, 50,
  100, 200 ft; cannot be extended past 200 ft even by piggybacking extensions; cites ED-13312
  p. 7.
- Daktronics KB 000009528 (lane module test): bench test plugs a lane module straight into
  J10 NEAR END with a second on its TO NEXT LANE jacks, no extension; so the module's own lead
  fits J10 and the extension serves for distance only. Inference from the procedure, stated as
  such in text.
- Daktronics KB DD2434204: question marks on all lanes when the lane modules are on J11.
- Daktronics KB DD4199116: OmniSport EOL plan as of fall 2023, no new orders, up to 7 years of
  service.
- Minnesota Swimming, Timing Systems 101 slides (November 2024), slides 9-10 and 13: the lane
  extension module links the timing unit to the closest lane module; drawn
  with an "Extension Unit Electronics" block between the cable and the console in slide 13's
  schematic. That block is the presenter's drawing, not Daktronics'; whether the box contains
  electronics is not established. Not asserted in text.
- Web search summary only (not fetched; reseller page returned 404): Scoreboard Enterprises
  listed on-deck lane extensions in 25, 50, 100 and 200 ft at $160-$425. Not cited.
- eBay listing "Daktronics Omnisport 84' Multi Cord for Lane Swimming Touchpad Connection":
  marketplace, research input only, not cited and not followed up.
- Dead ends: DD2804825 (digital billboard reface history), DD3059635 (track interfaces), a Dover
  NH scoreboard bid tab (outdoor boards only), the HS-200 manuals (only the figure 4 label).
Not found: part numbers for each length (0A-1056-0150 is the only one, length unknown); any
"Lane Extension Module I"; whether the box holds electronics; weight, cable gauge.
-->

The Daktronics lane extension module is the lead at the console end of an on-deck
[OmniSport 2000](../timers/omnisport-2000.md) swimming harness. It runs from the console's
near-end or far-end lane socket to the first [lane module](daktronics-lane-module.md) in the
chain, so the console can be set up some distance from the lanes.[^manual] Daktronics sells it
in lengths of 25, 50, 100 and 200 ft and puts a ceiling of 200 ft on the run.[^manual][^kbdist]
The unit shown in Daktronics' manual is the Lane Extension Module II, assembly
`0A-1056-0150`.[^manual]

## Role in the timing system

This section places the extension in an on-deck installation; the
[deck cabling overview](index.md) covers how other manufacturers cable a pool.

On-deck, each lane has a lane module for its touchpad and buttons, and the modules plug into
one another in a chain along the deck.[^manual] The extension module links that chain to the
console. Daktronics' on-deck layout drawing shows it at the console end, and its manual and
support pages treat it as a length of cable joining the console to the first
module.[^manual][^kbdist] A Minnesota Swimming training presentation for officials shows it
the same way, closing the gap between the console and the closest module in the
chain.[^mnswim]

The extension is needed only for distance: Daktronics' bench test for lane modules plugs a
module straight into the console's near-end socket, with no extension in between.[^kbtest] An in-deck pool does not use one at all. There the deck plates are wired to a
[lane interface](daktronics-lane-interface.md) behind the
[wall plate](daktronics-wall-plate.md), and the console connects at the plate.[^manual]

## Design and construction

This section describes the unit in Daktronics' manual.

The extension module is a small box with a lead. The box's face panel is labelled LANE
EXTENSION MODULE II and carries a row of four jacks marked TO NEXT LANE, three black and one
red.[^manual] The lead from the first lane module plugs into those jacks. The extension's own
lead leaves the box through a strain relief and ends in the four-pin plug that fits the
console.[^manual] The unit pictured carries assembly number `0A-1056-0150` and a sticker dated
September 2006.[^manual]

The four jacks match the four lines of the console's lane sockets: ground, lane-module data,
clock and an unregulated supply, pinned three black and one red.[^manual] Daktronics' documents
call the unit a cable and say nothing of what is inside the box.[^manual][^kbdist]

## Lengths and limits

This section covers the lengths and the maximum run.

The manual lists four standard lengths:[^manual]

| Length | Metric |
|---|---|
| 25 ft | 7.6 m |
| 50 ft | 15.2 m |
| 100 ft | 30.5 m |
| 200 ft | 61 m |

Daktronics' support pages put the limit on the console-to-module run at 200 ft. Joining
extensions end to end does not raise it.[^kbdist] The only part number in the sources,
`0A-1056-0150`, is not tied to a length, and no source gives numbers for the others.

## Connection to the timer

This section covers the console ports and settings that involve the extension.

The four-pin plug of the extension serving the near end, the primary finish end, goes into J10
NEAR END. If the far end of the pool is also timed, for split times, a second harness with its
own extension goes into J11 FAR END.[^manual] Daktronics warns against plugging the far-end
harness into the near-end harness. Each must reach the console on its own.[^manual]

Because every lane module is identical, the console works out which lane each one serves from
its place in the chain. The extension's position therefore sets the lane order. If the
extension reaches the chain at lane 1, the order stays at normal. If it reaches the chain at
the last lane, the order is set to reversed.[^manual][^kborder]

## Testing and troubleshooting

This section covers faults Daktronics links to the console end of the harness.

A chain plugged into J11 instead of J10 shows a question mark over every lane on the console,
though touches can still print.[^kbqmark] The console's lane module test (menu 5-2) checks each
lane through the whole chain, extension included.[^manual]

As everywhere in the on-deck harness, Daktronics stresses matching each plug's ground side to
the black jack.[^manual]

## Care and maintenance

This section covers the extension's upkeep.

Daktronics' quick reference names deck extensions among the on-deck cables whose banana
connectors are coated with silicone lubricant. Plugs that go straight into the console are left
uncoated.[^ed13584]

## Status

Daktronics decided in fall 2023 to retire the OmniSport timing system. It takes no new orders
and gives existing systems up to seven years of service.[^kbeol]

## Specifications

| | |
|---|---|
| Manufacturer | Daktronics, Brookings, South Dakota[^manual] |
| Model | Lane Extension Module II[^manual] |
| Lengths | 25, 50, 100, 200 ft (7.6, 15.2, 30.5, 61 m)[^manual] |
| Maximum run | 200 ft, including joined extensions[^kbdist] |
| Chain end | Four TO NEXT LANE jacks (3 black, 1 red)[^manual] |
| Console end | Four-pin plug to J10 NEAR END or J11 FAR END[^manual] |
| Lines | Ground, lane-module data, clock, unregulated supply[^manual] |
| Console | OmniSport 2000[^manual] |

## Part numbers and accessories

This section lists the part numbers the sources give.

- `0A-1056-0150`, Lane Extension Module II, length not stated.[^manual]
- `LL-2582`, the extension module's panel label.[^manual]
- [Lane module](daktronics-lane-module.md), `0A-1056-0146` (Lane Module IV), the unit it
  connects to.[^manual]

## See also

- [Daktronics lane module](daktronics-lane-module.md): the modules it connects to the console
- [Daktronics lane interface](daktronics-lane-interface.md): the in-deck equivalent at the wall
- [Daktronics wall plate](daktronics-wall-plate.md): where an in-deck console connects instead
- [Daktronics deck plates](daktronics-deck-plate.md): the in-deck lane connections
- [Deck cabling](index.md): the deck cabling overview
- [Daktronics](../../../vendors/daktronics.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^manual]: [Daktronics, OmniSport 2000 Timing Console Operation Manual (ED-13312, Rev 16, 23 May 2019)](https://www.daktronics.com/web-documents/customer-service-manuals/ed13312.pdf), deck cabling, lane order, pinouts.
[^ed13584]: [Daktronics, OmniSport 2000 Swimming Quick Reference (ED-13584, Rev 8, 19 August 2013)](https://www.daktronics.com/web-documents/customer-service-manuals/ed-13584.pdf).
[^kbdist]: [Daktronics, Maximum distance that can be obtained between lane module and OmniSport 2000 (KB DD2106954)](https://www.daktronics.com/en-us/support/kb/DD2106954).
[^kbtest]: [Daktronics, How to test a Daktronics Lane Module (KB 000009528)](https://www.daktronics.com/en-us/support/kb/000009528).
[^kbqmark]: [Daktronics, Question marks on OmniSport 2000 console for all lanes; incorrect port connection (KB DD2434204)](https://www.daktronics.com/en-us/support/kb/DD2434204).
[^kborder]: [Daktronics, OmniSport 2000, Scoreboard is showing lanes in incorrect order (KB DD3024657)](https://www.daktronics.com/en-us/support/kb/DD3024657).
[^kbeol]: [Daktronics, Unable to show time of day to scoreboard using OmniSport with Multi-drop Protocol (KB DD4199116)](https://www.daktronics.com/en-us/support/kb/DD4199116), OmniSport EOL plan.
[^mnswim]: [Minnesota Swimming, Timing Systems 101](https://www.gomotionapp.com/czmnlsc/UserFiles/File/Officials/Clinics/eq101-nov2024_044097.pdf) (officials' clinic slides, November 2024).

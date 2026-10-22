---
title: Daktronics lane interface
description: >-
  The Daktronics lane interface (lane module interface, LMI) is the unit behind an in-deck
  pool's wall plate where the lane deck plates' cables end and the OmniSport 2000 console reads
  the lanes.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Daktronics lane interface
infobox:
  - label: Manufacturer
    value: Daktronics
  - label: Type
    value: In-deck lane interface
  - label: Connection
    value: Deck plate cables on green Phoenix connectors; console J10 NEAR END or J11 FAR END through the wall plate
  - label: Timer
    value: OmniSport 2000
    href: equipment/swimming/timers/omnisport-2000.md
  - label: Status
    value: OmniSport line being retired since 2023; service for up to 7 years
  - label: Manual
    value: '[OmniSport 2000 Timing Console Operation Manual (ED-13312)](https://www.daktronics.com/web-documents/customer-service-manuals/ed13312.pdf)'
---

<!--
Research notes, Daktronics lane interface. Surfaced 2026-10-16 while building out
daktronics-lane-module.md; already mentioned in the research comment of
daktronics-deck-plate.md. Built out 2026-10-21.

Read: OmniSport 2000 Timing Console Operation Manual (ED-13312 Rev 16, 23 May 2019), held at
sources/vendors/daktronics/timers-consoles/: figure 14 (typical in-deck installation) labels
"WALL PLATE #1, LMI LOCATED BEHIND PLATE", with each lane deck plate wired back to it and the
console connected at the wall plate; a bulkhead plate gets its lane signals from an interface built
into the bulkhead; the Lane Order setting says in-deck systems using a lane interface stay
on NRM, and names "lane modules/lane interface" as what feeds J10 and J11. T-7000 Series Touchpads
Installation & Maintenance Manual (DD1953274, held in touchpads-deckplates/): deck plate cables
end on green Phoenix connectors that plug onto the lane interface; with a touchpad connected,
pins 1 and 5 reading 0.25 VDC at the interface but 0 V at the plate points to a cable break or bad
termination; with the touchpad unplugged, about 0 V suggests corrosion at the Phoenix connector
or a failed pad input on the interface.

Added 2026-10-21 (wall plate research): Daktronics KB DD3209688 lists "Wall Plate/Lane Module
Interface (LMI)" in a pool's equipment and traces pads not registering, with a question mark over
every lane, to the lane data being in J11 instead of J10. The HS-200 manual ED-12935 repeats
figure 14 with the LMI behind wall plate 1. DWG-190817 in ED-13312 gives wall plate part numbers
0A-1240-0059/-0060 but none for the LMI.

Build-out research, 2026-10-21:
- ED-13312, connector designations (appendix, sheet 17800): J10 NEAR END pins 1-3 black, 4 red:
  GND, LM NEAR (lane-module data), CLK NEAR, +VUNREG; J11 FAR END the same for the far end. Lane
  module test (menu 5-2) shows near-end and far-end data, TP or B1-B3 per lane. Primary time
  setting: J10 with 1, 2 or 3 buttons for up to 10 lanes. Split times from both ends: near-end
  cabling to J10, far-end to J11. Figures 17-19 rendered earlier for daktronics-wall-plate.md:
  the single-ended wall plate's NEAR END group is four jacks, one red and three black, the same
  pattern as J10's pins; the double-ended plate has separate NEAR and FAR panels; the bulkhead
  deck plate has a LANE DATA group of four jacks (one plain, three bold) beside its start and
  speaker jacks. That the NEAR END group is the LMI's output on the console's lane bus is
  inferred from the matching pin pattern and figure 14, not stated in words.
- T-7000 manual DD1953274 (both copies), troubleshooting table: where a touchpad plug reads 0 V
  or close to it when plugged in, the in-deck causes listed are high resistance in the cable
  from deck plate to lane interface, how it is terminated in the green Phoenix connector, how
  well that connector seats on the interface, or a failed pad input on the interface itself; on-deck the
  cause is a bad lane module input.
- Daktronics KB DD2434204: question marks on all lanes (touches still print) when lane modules
  are on J11; move to J10. KB DD3024657: lane order; in-deck with a lane interface, NRM.
- Daktronics KB DD4199116 (an SW-2000 time-of-day article), section "OmniSport EOL plan as of
  fall 2023": Daktronics has decided to sunset the OmniSport timing system, no new orders are
  planned, existing systems have up to a 7-year service plan. pc-2001.md already records the
  sunset (kbshot, DD2796781).
- Checked and not relevant: DD3059635 (Track & Field Interfaces Setup Guide, Rev 03, 2024);
  Centaur Products Swim-14 PDF, which is the Daktronics Aquatics Solutions brochure DD1565872
  Rev 07 already held; Minnesota Swimming "Timing Systems 101" slides (Nov 2024) describe only
  the on-deck lane module chain; Husson's 2006 PGS&LC guide (held under reference/) says the
  in-deck cabling stayed through an OmniSport 6000 to 2000 upgrade but does not mention the
  interface.
Further research, 2026-10-21:
- Daktronics KB DD3559364 (deck plate mounting holes do not match the floor box): product
  "Individual Lane Deck Plate", component "Deck Plate (Lane, Start, Bulkhead)", control system
  "Lane Module Interface (LMI)"; deck plate models Generic (direct anchor, wider hole spread) and
  Carlon (Carlon box, narrower spread); no part numbers.
- Daktronics architect specification Section 11480, "SW-2218-11/21 Aquatics Scoreboard and
  OmniSport Timing System", footer SL050509-06027, Word file hosted by dealer Centaur Products
  (centaurproducts.com .../sl06027-9.doc; file metadata 2008-09-29). 2.05 deck plates: one per
  lane (eight in this spec) for touchpad, buttons A/B/C and start speaker; three start-location
  plates (start system, aux speaker, lane speakers; start box recommended 188 in from the start
  end); flush with tile, connections recessed, no protruding connectors or covers; under-deck
  cable soldered and potted in epoxy against joint corrosion; plates fit a 4 x 4 x 6 in Carlon
  E989NNR box, joined by 2 in PVC conduit to a 12 x 12 x 6 in Carlon E989R box; standard
  production part. 2.06 wall plate: one; termination point for in-deck cables, timers and start
  system; non-corrosive; 14 x 14 in minimum. Console: 1-10 lanes, 1-3 buttons, 20 ft control
  cable to the control receptacle box, 50 W maximum. Same text as the Swim-10 copy cited on
  daktronics-wall-plate.md (SW-2216 version). The spec never names the lane interface; the box
  that holds it is not identified (the 12 x 12 x 6 in box is the obvious candidate, inferred).
- T-7000 manual DD1953274 Rev 1, 4 March 2011: also hosted by Poolweb (assets.poolweb.com,
  "Daytronics_OM.pdf", SKU 0A-1040-0108); identical to the -alt copy already held; its
  troubleshooting table already names the lane interface and the green Phoenix connector, so the
  term is in print by March 2011.
- Daktronics KB DD2425415: clean deck plates and lane modules after every event with a .22 cal
  brass or fiber brush and refill with silicone lubricant LU-1002 (kit 0A-1240-0003). Deck plate
  material; not used here.
- Daktronics KB 000007808 (touchpad test via menu 5-2) and DD2337911 (lane module test with a
  pushbutton in the TOUCHPAD jack): on-deck procedures; not used.
- Time Drops (competitor) touchpad timing page: "Daktronics has exited the swim timing
  business"; its SA-1 does not support Daktronics pads. Competitor claim, consistent with the
  Daktronics EOL notice; not cited.
- OmniSport revision history DD3679410: no lane interface entries; a fix for reverse lane order
  with "extra lane modules connected to the timer".
- Searched without result: any part number (0A-1240 searches return nothing for the LMI), an
  OmniSport 6000 manual, photographs, university bid or asset documents naming the unit.
Not found anywhere: a part number, photo, lane count per interface, whether one unit serves
both ends of a double-ended pool, whether it is powered from the console's +VUNREG line.
-->

The Daktronics lane interface, or lane module interface (LMI), is the unit at the wall end of an
in-deck [OmniSport 2000](../timers/omnisport-2000.md) installation where the cables from the
lane [deck plates](daktronics-deck-plate.md) end. Daktronics' typical in-deck drawing places it
behind the first [wall plate](daktronics-wall-plate.md), where the console connects.[^manual]
It lets an in-deck pool feed the console in the form the console expects from on-deck
[lane modules](daktronics-lane-module.md), on the same near-end and far-end lane
ports.[^manual] Daktronics publishes no part number, photograph or lane count for it.

## Role in the timing system

This section places the interface between the deck plates and the console; the
[deck cabling overview](index.md) covers other manufacturers' in-deck wiring.

Daktronics wires a pool in one of two ways. On-deck, a chain of lane modules is laid along the
deck for each meet and plugged into the console. In-deck, permanent deck plates at each lane
are wired through conduit to the wall.[^manual][^brochure] The console reads both the same way.
Its lane order setting refers to data arriving from "the lane modules/lane interface" on its
near-end and far-end ports, which treats the two as interchangeable sources.[^manual] On the
in-deck side each lane has its own cable back to the wall, and the interface presents those
lanes to the console.[^manual][^t7000man]

A movable bulkhead has a lane interface of its own. Its lanes reach the system through a
bulkhead deck plate, which carries a group of lane data jacks next to the start and speaker
jacks. A matching plate in the deck beside the bulkhead is joined to it by jumper cables across
the deck.[^manual]

## Design and construction

This section gives what the sources establish about the unit.

Daktronics' support pages treat the interface as the control system for the whole in-deck
side. A support article on deck plates files the lane, start and bulkhead plates alike under
"Lane Module Interface (LMI)".[^kbmount] The interface is also named in the troubleshooting
section of the T-7000 touchpad manual from its first revision, dated March 2011.[^t7000rev1]

Each deck plate's cable ends on a green Phoenix connector, a pluggable terminal block, which
plugs onto the interface. Daktronics' touchpad checks are made across pins 1 and 5 of that
connector.[^t7000man]

On the console side, the near-end and far-end lane ports each carry four lines: ground, a
lane-module data line, a clock line and an unregulated supply. They are pinned three black and
one red.[^manual] The single-ended wall plate's NEAR END group repeats that pattern of one red
and three black jacks, and the bulkhead plate's lane data group also has four jacks.[^manual]
That is consistent with the interface putting its lanes onto the same four-wire bus a lane
module chain uses, though Daktronics does not describe the circuit.

Several things are not documented: how many lanes one interface serves, and whether a pool
timed at both ends uses one interface or two. The double-ended wall plate has separate NEAR and
FAR panels, so each end has its own connection to the console.[^manual]

## Installation

This section covers the wiring the interface terminates, as Daktronics specifies it.

Daktronics' architect specification for an aquatics scoreboard and OmniSport timing package
describes the in-deck side. Each lane has a deck plate set flush in the tile, with its
connections recessed and nothing protruding. The cable under the plate is soldered in place
and potted in epoxy so the joints cannot corrode.[^spec] The plates fit 4 × 4 × 6 in junction
boxes in the deck, which run through 2 in PVC conduit to a 12 × 12 × 6 in box. A single wall
plate of non-corrosive material, at least 14 by 14 in, terminates the in-deck cables, the timer
and the start system.[^spec] The specification does not say which box holds the interface. The
console manual puts it behind the first wall plate.[^manual]

Daktronics makes its deck plates in two hole patterns. A generic model is for anchoring directly
into the deck, and a narrower pattern fits the Carlon junction boxes named in the
specification.[^kbmount][^spec]

## Connection to the timer

This section covers the console settings and ports that apply.

The console connects at the wall plate. Near-end lanes go to its J10 NEAR END port and far-end
lanes, used for split times, to J11 FAR END.[^manual] With an interface, the lane order setting
stays at normal. Reversing it is only needed for some on-deck layouts, where the console sits
beside the last lane rather than lane 1.[^manual][^kborder]

Putting the near-end lane data into J11 is a known mistake. Daktronics' support articles
describe a question mark over every lane on the console and pads and buttons that do not
register. One of them names a wall plate and lane interface among the pool's equipment, and
another notes that touches can still print while the display shows question marks. In both,
the remedy is to move the connection to J10.[^kbport][^kbqmark]

## Troubleshooting

This section covers Daktronics' fault-finding at the interface.

The console's lane module test (menu 5-2) works the same for an in-deck pool. Pressing a
pushbutton plugged into each deck plate jack should show TP, B1, B2 or B3 for that lane,
separately for near-end and far-end data.[^manual][^kbcheck]

When a touchpad's plug reads 0 V, or close to it, at its deck plate jack, Daktronics' touchpad
manual lists four possible in-deck causes, all between the plate and the interface. They are
high resistance in the cable, a poor termination of the cable at the Phoenix connector, a poor
fit of that connector on the interface, or a failed touchpad input on the interface
itself.[^t7000man] On an on-deck system the same symptom points to the lane module's
input.[^t7000man] Two voltage checks on pins 1 and 5 of the Phoenix connector separate the
causes:[^t7000man]

- With the touchpad connected: if the connector reads about 0.25 V at the interface but 0 V at
  the deck plate, the cable or its termination is at fault.
- With the touchpad disconnected: a reading at or near 0 V points to corrosion between the
  connector and the interface, or to a bad input on the interface.

In either case Daktronics asks the facility to contact it rather than repair the
interface.[^t7000man]

## Compared with the lane module

This section sets out the differences the sources support.

| | Lane interface (in-deck) | Lane module (on-deck) |
|---|---|---|
| Location | Behind the first wall plate, or in a bulkhead[^manual] | On the deck, one per lane, chained[^manual] |
| Lane wiring | One cable per lane from the deck plate, on a Phoenix connector[^t7000man] | Device leads plug into the module's banana jacks[^manual] |
| Console port | J10 or J11, through the wall plate[^manual] | J10 or J11, through a lane extension module[^manual] |
| Lane order | Normal[^manual][^kborder] | Normal or reversed, by console position[^manual][^kborder] |
| Fault at a pad input | Cable, Phoenix connector or interface input[^t7000man] | Module input; swap the module[^t7000man] |

## Status

Daktronics announced in fall 2023 that it is retiring the OmniSport timing system. It takes no
new orders and offers existing systems, lane interfaces included, up to seven years of
service.[^kbeol]

## Specifications

| | |
|---|---|
| Manufacturer | Daktronics, Brookings, South Dakota[^manual] |
| Location | Behind wall plate 1; a separate unit in a bulkhead[^manual] |
| Lane inputs | Deck plate cables on green Phoenix connectors; touchpad on pins 1 and 5[^t7000man] |
| Console ports | J10 NEAR END; J11 FAR END (ground, data, clock, unregulated supply)[^manual] |
| Lane order setting | Normal[^manual][^kborder] |
| Part number | Not published |
| Console | OmniSport 2000[^manual] |

## See also

- [Daktronics wall plate](daktronics-wall-plate.md): the plate it sits behind
- [Daktronics deck plates](daktronics-deck-plate.md): the plates wired to it
- [Daktronics lane module](daktronics-lane-module.md): the on-deck alternative
- [Daktronics lane extension module](daktronics-lane-extension-module.md): the on-deck chain's
  link to the console
- [Deck cabling](index.md): the deck cabling overview
- [Daktronics](../../../vendors/daktronics.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^manual]: [Daktronics, OmniSport 2000 Timing Console Operation Manual (ED-13312, Rev 16, 23 May 2019)](https://www.daktronics.com/web-documents/customer-service-manuals/ed13312.pdf), in-deck system, lane order, pinouts.
[^t7000man]: [Daktronics, T-7000 Series Touchpads Installation & Maintenance Manual (DD1953274)](https://www.daktronics.com/web-documents/customer-service-manuals/dd1953274.pdf), troubleshooting.
[^brochure]: Daktronics, Aquatics Solutions brochure (DD1565872, Rev 07, June 2018), deck harness systems. Print document, not hosted online.
[^kbport]: [Daktronics, Touchpads not registering on the OmniSport, lane data connection in wrong port (KB DD3209688)](https://www.daktronics.com/en-us/support/kb/DD3209688).
[^kbqmark]: [Daktronics, Question marks on OmniSport 2000 console for all lanes; incorrect port connection (KB DD2434204)](https://www.daktronics.com/en-us/support/kb/DD2434204).
[^kborder]: [Daktronics, OmniSport 2000, Scoreboard is showing lanes in incorrect order (KB DD3024657)](https://www.daktronics.com/en-us/support/kb/DD3024657).
[^kbcheck]: [Daktronics, How to perform an Aquatics Systems Check (KB DD3536111)](https://www.daktronics.com/en-us/support/kb/DD3536111).
[^kbmount]: [Daktronics, Deck plate mounting holes for screws do not line up with the floor box (KB DD3559364)](https://www.daktronics.com/en-us/support/kb/DD3559364).
[^t7000rev1]: Daktronics, T-7000 Series Touchpads Installation & Maintenance Manual (DD1953274, Rev 1, 4 March 2011), troubleshooting.
[^spec]: [Daktronics, Section 11480 specification, SW-2218-11/21 aquatics scoreboard and OmniSport timing system (SL-06027)](https://www.centaurproducts.com/wp-content/uploads/2021/07/sl06027-9.doc), 2.05–2.06; dealer copy.
[^kbeol]: [Daktronics, Unable to show time of day to scoreboard using OmniSport with Multi-drop Protocol (KB DD4199116)](https://www.daktronics.com/en-us/support/kb/DD4199116), OmniSport EOL plan.

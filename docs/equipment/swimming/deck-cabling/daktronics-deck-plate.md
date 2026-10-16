---
title: Daktronics deck plates
description: >-
  Daktronics deck plates are the permanent in-deck connection plates of an OmniSport 2000
  swimming installation: a lane plate at each lane, start location plates for the horn start,
  and a pair of bulkhead plates, all wired back to a wall plate.
updated: 2026-10-16
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Daktronics deck plates
infobox:
  - label: Manufacturer
    value: Daktronics
  - label: Type
    value: In-deck plates
  - label: Models
    value: Individual lane, start location and bulkhead deck plates
  - label: Jacks
    value: 'Lane plate: TP, B1, B2, B3, SPEAKER, START; start plate: START, LANE SPEAKERS, AUX SPEAKERS'
  - label: Timer
    value: OmniSport 2000
    href: equipment/swimming/timers/omnisport-2000.md
  - label: Start system
    value: HS-200
    href: equipment/swimming/starter/hs-200.md
  - label: Manual
    value: '[OmniSport 2000 Timing Console Operation Manual (ED-13312)](https://www.daktronics.com/web-documents/customer-service-manuals/ed13312.pdf)'
---

<!--
Research notes, Daktronics deck plates. Stub surfaced 2026-10-08 while writing the deck-cabling
overview; built out 2026-10-16.

Local sources read (sources/vendors/daktronics/):
- timers-consoles/daktronics-omnisport-2000-timing-console-operation-manual-p1240-ed-13312-23
  (ED-13312 Rev 16, 23 May 2019), in-deck system pp. 9-11, pages rendered with PyMuPDF.
  Figure 14 (typical in-deck installation): an individual lane deck plate and lane speaker per
  lane, start deck plates on both sides, wall plate 1 with the lane module interface (LMI)
  behind it, console at the wall plate, aux speaker. J-boxes in the deck are deck boxes, those in
  or on a wall are wall boxes, conduit joins them; only equipment leads lie on the deck. Lane
  plate (figure 15): square gray plate, four corner screws; red and black SPEAKER pair at the top;
  TP, B1, B2, B3 as a row of red jacks over a row of black; red and black START pair below; D
  logo and DAKTRONICS, INC. Text: six sets of jacks; touchpad into TP; buttons into B1-B3; RTOP
  into B3, stacked on the third button's plug if three are used; SPEAKER for a 45 ohm lane
  speaker only, nothing else without asking Daktronics; START for a remote strobe; where there is
  no start plate, the HS-200 can use the nearest lane plate's START, giving start and lane
  speakers but no aux speaker. Start plate (figure 16): red and black pairs for START, LANE
  SPEAKERS and AUX SPEAKERS, D logo; horn start's START, AUX SPEAKER and LANE SPEAKERS cables plug
  into the matching jacks; most pools have one each side; on the second plate an aux speaker goes
  on AUX SPEAKERS and a remote strobe on START. Bulkhead plate (figure 17, a line drawing): START,
  LANE SPKR and AUX SPKR jacks on one side and a LANE DATA group on the other; combines the start
  plate's jacks with lane signals fed by an interface inside the bulkhead; fitted as a pair (bulkhead
  and deck) joined by jumpers laid over the deck. Wall plates (figures 18, 19): "a variety"; single-ended
  photo shows NEAR END (one red, three black jacks), START, LANE SPEAKER and SCOREBOARD;
  double-ended photo shows START, LANE SPEAKER, SCOREBOARD; a second START and SCOREBOARD; RTD and
  ETHERNET; and NEAR and FAR with yellow leads plugged in. Settings: lane order stays NRM for an
  in-deck system with a lane interface; LM INPUT BOTH when far-end pads plug into deck plates.
  HS-200 reference drawing DWG-185695 (on-deck configuration only).
- start-systems/daktronics-hs-200-horn-start-owners-manual-ed-12935-p1058 (ED-12935 Rev 16, 18
  May 2018): same in-deck figure; HS-200 LANE SPEAKERS, AUX SPEAKER and START jacks; up to 10 lane
  speakers; remote strobe DAKT-401-00 (covered on hs-200.md).
- touchpads-deckplates/daktronics-t-7000-series-touchpads-installation-and-maintenance-manual
  (DD1953274): TP jack on the lane plate; in-deck faults traced at the lane interface's green
  Phoenix connectors, pins 1 and 5 (0.25 VDC at the interface and 0 V at the plate means a cable
  break or bad termination; about 0 V with the pad unplugged means corrosion at the connector or
  a bad interface input).
- touchpads-deckplates/daktronics-aquatics-maintenance-manual-manualslib (DD3691471, July 2017):
  inspect plates, connectors and cables for damage and corrosion; brass brushes TH-1024/TH-1025,
  silicone grease LU-1002; test: connect the console at the right wall plate, check dashes for
  the right lane count, menu 5-2, a pushbutton in each TP and button jack shows TP, B1, B2, B3.
- catalogs-brochures/daktronics-aquatics-solutions-brochure (DD1565872 Rev 07, June 2018), p. 7
  rendered: permanent plates are the in-deck option; photo captioned "Deck plate" shows the
  same lane plate layout as the 2019 manual.

Web (2026-10-16): Daktronics KB DD3536111 (aquatics systems check; same in-deck test as the
checklist); KB DD2425415 (cleaning, already cited elsewhere). No part numbers found for any plate
in the manual, the KBs, the brochure or dealer searches; DWG-185695 covers the HS-200 on-deck
configuration. Manualslib hosts the manual pages; Centaur Products hosts a copy of the brochure.

Not found: part numbers, dimensions or materials of the plates; the LANE DATA connector type;
whether the wall plate's NEAR END jacks take the same lead as a lane module chain (the jack
pattern matches; inferred only); current availability.
-->

Daktronics deck plates are the permanent connection plates of an in-deck
[Daktronics](../../../vendors/daktronics.md) [OmniSport 2000](../timers/omnisport-2000.md)
swimming installation. Each lane has its own plate, set in the deck, where the lane's
[touchpad](../touchpad/t-7000.md), backup [pushbuttons](../semi-automatic/pushbutton/daktronics.md),
relay platform, lane speaker and remote strobe plug in. The
[HS-200](../starter/hs-200.md) horn start connects at start location plates, and a pair of bulkhead plates links a movable
bulkhead to the system. The plates are wired through conduit to a wall plate, where the console
connects.[^manual]

## Role in the timing system

This section places the plates in a Daktronics installation. Daktronics offers two ways to wire
a pool. An on-deck system lays a chain of [lane modules](daktronics-lane-module.md) along the
deck for each meet, while an in-deck system uses permanent deck plates.[^brochure] In an in-deck
pool the cables run through conduit between junction boxes in the floor, called deck boxes, and
in or on the walls, called wall boxes, so the only cables on the deck during a meet are the
short leads from each device to its plate.[^manual] The plate cables end at a
[lane interface](daktronics-lane-interface.md) behind the first wall plate, which passes the
lanes to the console.[^manual]

See the [deck cabling overview](index.md) for how other manufacturers lay out their plates.

## Models

This section describes each plate. The manual shows three kinds of deck plate.[^manual]

### Individual lane deck plate

The lane plate is a square plate held by four corner screws, carrying six pairs of banana
jacks, each pair red and black. Its jacks are:[^manual]

- TP, for the lane's touchpad.
- B1, B2 and B3, for up to three backup buttons. A relay take-off platform also uses B3, its
  plug stacked on the third button's plug when all three buttons are in use.
- SPEAKER, for the lane's 45 ohm speaker. Daktronics asks that no other kind of speaker be
  connected without consulting it first.
- START, for a remote strobe.

The plate shown in Daktronics' 2018 brochure has the same layout.[^brochure]

### Start location deck plate

The start plate is where the horn start connects. It has three pairs of jacks, START, LANE
SPEAKERS and AUX SPEAKERS, each taking the cable from the matching jack on the HS-200, which
feeds the start signal into the system and drives the lane speakers and the backstroke
speaker.[^manual][^hs200] Most pools have a start plate on each side. On the second plate an
extra auxiliary speaker goes into AUX SPEAKERS and a remote strobe for that side into
START.[^manual] Where a pool has no separate start plate, the nearest lane plate's START jack can
take the horn start instead. That gives the start signal and the lane speakers but not the
auxiliary speaker.[^manual]

### Bulkhead deck plate

A bulkhead plate combines the start plate's START, lane speaker and auxiliary speaker
connections with a group of lane data connections. The lane data comes from a lane interface
built into the bulkhead. The plates are used as a pair, one on the bulkhead and one in the deck
beside it, joined by jumper cables laid across the deck.[^manual]

## Wall plates

This section covers where the console connects. The console is usually set up at a
[wall plate](daktronics-wall-plate.md), of which Daktronics makes several versions. The manual
pictures a single-ended plate, with a NEAR END group of four jacks and jacks for the start, the
lane speakers and the scoreboard, and a double-ended plate that adds the far end, a second start
and scoreboard connection, and sockets for the console's real-time data (RTD) output and
Ethernet.[^manual] The
single-ended plate's NEAR END jacks follow the same pattern, one red and three black, as the
TO NEXT LANE jacks on a lane module.[^manual]

## Connection to the timer

This section covers the plugs. Every device uses a dual banana plug, and its ground-tab side always
matches the black jack.[^manual] The plates reach the console through the lane
interface, so with in-deck cabling the console's lane order stays at normal; the reversed
setting is only for on-deck chains that start at the last lane.[^manual] If far-end touchpads are
plugged into deck plates, the console is set to read both ends.[^manual]

## Testing and troubleshooting

This section covers checking the plates. Daktronics' systems check connects the console at the
correct wall plate, confirms that the console shows the right number of lanes, and then uses the
lane module test, menu 5-2. A pushbutton is plugged into each touchpad and button jack in turn
and pressed, and the console shows TP, B1, B2 or B3 for that lane if the connection
works.[^maint][^kbcheck]

Faults in an in-deck touchpad connection are traced from the lane interface end. With the
touchpad connected, the interface should read about 0.25 V across pins 1 and 5 of its green connector for
that lane. A reading there but none at the deck plate points to a break or a bad termination in
the cable; a reading of about 0 V with the touchpad unplugged points to corrosion at the
connector or a faulty input on the interface.[^t7000man]

## Care and maintenance

This section covers routine care. Daktronics' checklist calls for each plate, its connectors and
its cable to be inspected for damage and corrosion, and for corroded jacks to be cleaned with a
brass brush and protected with silicone grease.[^maint] Its brushes are `TH-1024` and `TH-1025`
and its grease `LU-1002`.[^maint]

## Specifications

| | |
|---|---|
| Manufacturer | Daktronics, Brookings, South Dakota |
| Models | Individual lane, start location, bulkhead (used in pairs)[^manual] |
| Lane plate jacks | TP; B1, B2, B3; SPEAKER (45 ohm); START (remote strobe)[^manual] |
| Start plate jacks | START; LANE SPEAKERS; AUX SPEAKERS[^manual] |
| Bulkhead plate | Start-plate jacks plus lane data from a bulkhead lane interface[^manual] |
| Connectors | Red and black banana jacks for dual banana plugs[^manual] |
| Console | OmniSport 2000, through a lane interface and wall plate[^manual] |
| Earliest dated document | Brochure, June 2018; manual, May 2019 |

Daktronics has not published part numbers, dimensions or materials for the plates.

## Part numbers and accessories

This section lists the parts named with the plates.

- `TH-1024` and `TH-1025`, brass cleaning brushes; `LU-1002`, silicone grease.[^maint]
- `DAKT-401-00`, the HS-200 remote strobe that plugs into a START jack; see [HS-200](../starter/hs-200.md).[^hs200]

## See also

- [Daktronics lane interface](daktronics-lane-interface.md) and [Daktronics wall plate](daktronics-wall-plate.md): where the plate cables end and the console connects
- [Daktronics lane module](daktronics-lane-module.md): the on-deck alternative
- [HS-200](../starter/hs-200.md): the horn start that uses the start plates
- [T-7000 series touchpad](../touchpad/t-7000.md), [Daktronics pushbuttons](../semi-automatic/pushbutton/daktronics.md) and [Daktronics relay take-off platform](../relay-judging/daktronics.md): the devices that plug into a lane plate
- [OmniSport 2000](../timers/omnisport-2000.md): the console
- [Deck cabling](index.md): the deck-cabling overview
- [Daktronics](../../../vendors/daktronics.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^manual]: [Daktronics, OmniSport 2000 Timing Console Operation Manual (ED-13312, Rev 16, 23 May 2019)](https://www.daktronics.com/web-documents/customer-service-manuals/ed13312.pdf), in-deck system and wall plates.
[^hs200]: [Daktronics, Horn Start HS-200 Owner's Manual (ED-12935, Rev 16, 18 May 2018)](https://www.daktronics.com/web-documents/customer-service-manuals/ed-12935.pdf), connections.
[^t7000man]: [Daktronics, T-7000 Series Touchpads Installation & Maintenance Manual (DD1953274)](https://www.daktronics.com/web-documents/customer-service-manuals/dd1953274.pdf), troubleshooting.
[^kbcheck]: [Daktronics, How to perform an Aquatics Systems Check (KB DD3536111)](https://www.daktronics.com/en-us/support/kb/DD3536111).
[^maint]: Daktronics, Aquatics Maintenance Checklist (DD3691471, July 2017), in-deck equipment.
[^brochure]: Daktronics, Aquatics Solutions brochure (DD1565872, Rev 07, June 2018), p. 7, deck harness systems. Print document, not hosted online.

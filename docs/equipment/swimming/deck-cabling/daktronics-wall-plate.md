---
title: Daktronics wall plate
description: >-
  The Daktronics wall plate is where an OmniSport 2000 console connects to a pool's in-deck
  wiring, made in single-ended and double-ended versions with the lane interface behind it.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Daktronics wall plate
infobox:
  - label: Manufacturer
    value: Daktronics
  - label: Part number
    value: '`0A-1240-0059` (single-ended); `0A-1240-0060` (double-ended)'
  - label: Type
    value: Wall connection panel
  - label: Models
    value: Single-ended, double-ended
  - label: Connection
    value: Near and far lane data, start, lane speaker, scoreboard; RTD, Ethernet and judging on some plates
  - label: Timer
    value: OmniSport 2000
    href: equipment/swimming/timers/omnisport-2000.md
  - label: Manual
    value: '[OmniSport 2000 Timing Console Operation Manual (ED-13312)](https://www.daktronics.com/web-documents/customer-service-manuals/ed13312.pdf)'
---

<!--
Research notes, Daktronics wall plate. Stub created 2026-10-16 while building out
daktronics-deck-plate.md; built out 2026-10-21.

Held sources, read (sources/vendors/daktronics/):
- timers-consoles/daktronics-omnisport-2000-timing-console-operation-manual-p1240-ed-13312-23
  (ED-13312 Rev 16, 23 May 2019). Read: Timing System Setup (on-deck, in-deck, deck plates,
  wall plates, horn start, console connections), Lane Order setting, RTD/matrix connection, and
  section 7 judge consoles. Rendered with PyMuPDF: page 21 (figures 17-19) and page 155
  (DWG-190817), with a 300 dpi crop of wall plate 1.
  - In-deck system: conduit and J-boxes in floor and walls carry the cables for the horn start,
    lane and backstroke speakers, pads, buttons, relay platforms and bulkheads; deck boxes in
    the floor, wall boxes in or on walls; only device leads lie on the deck. Note to designers:
    plan conduit, boxes and drainage, and contact Daktronics.
  - Figure 14 (typical in-deck installation): console at "WALL PLATE #1, LMI LOCATED BEHIND
    PLATE"; six lane deck plates (touchpad, up to three buttons, RTOP, lane speaker), start deck
    plate with the HS-200, aux speaker. The same figure appears in the HS-200 manual ED-12935.
  - Wall plates: usually the console's set-up point; several versions exist; the manual
    pictures the two it calls most common. Figure 19 single-ended: two panels; NEAR END with one red and three black
    jacks; START red/black pair; LANE SPEAKER red/black pair; SCOREBOARD 1/4 in jack. Figure 18
    double-ended: upper row of three panels (START, LANE SPEAKER, SCOREBOARD; second START and
    SCOREBOARD; RTD 1/4 in jack and ETHERNET RJ-45 socket); lower row NEAR and FAR panels each
    with a yellow lead ending in a black molded plug hanging from it. Whether those leads are
    fixed pigtails or plugged-in extension cables is not stated; the photo suggests leads
    coming out of the panel. Not asserted in text beyond "a lead".
  - Bulkhead deck plate (figure 17): start, lane speaker and aux speaker jacks plus a LANE DATA
    group, its lanes supplied by an interface built into the bulkhead; one plate on the bulkhead, one on the deck,
    jumpered across.
  - Console: lane data on J10 NEAR END and J11 FAR END for either cabling type; start on J12; J2/J3 scoreboard outputs; J5 RTD port; J6 results port or Ethernet; J14/J15 judging.
  - Lane Order: sets how the console numbers the lanes arriving on J10 and J11; NRM for an
    in-deck pool with a lane interface.
  - Matrix displays: a typical link is a 50 ft 9-pin male to 1/4 in cable, 0A-1240-0032, from
    J5 RTD to the matching jack on the wall plate.
  - DWG-190817 "OmniSport 2000 Judging Equipment - In-Deck" (23 June 2003; rev 01 15 January
    2004; rev 02 11 April 2011 "updated wall plate part numbers"): wall plate 1 labelled
    "0A-1240-0059 SINGLE ENDED OR 0A-1240-0060 DOUBLE ENDED"; its face drawn with a NEAR END
    group of four jacks (TOUCHPADS), START #1 pair, SCOREBOARD #1 jack and a round female JUDGES
    CONSOLES socket. Console J14 to wall plate on W-1823 (30 ft). From the plate, W-1370 in the
    wall up to 550 ft (judges) and W-1077 (scoreboard) run to wall plates 2 and 3, each a
    judging control J-box cover 0A-1240-0057 with SCOREBOARD and JUDGES CONSOLE sockets; up to
    nine judges per output; extension cables W-1820/-1821/-1822; termination plug
    0A-1241-4010; console power T-1085. A note points to DWG-191692 for the plate's wiring; that
    drawing is not in the manual. The judging drawing is the only place the 0059/0060 numbers appear; whether
    every single- and double-ended swimming plate carries them, or only plates with the judging
    socket, is not stated. Flagged in text.
- touchpads-deckplates/daktronics-t-7000-series-touchpads-installation-and-maintenance-manual-
  p1198-dd-1953274 and its -alt copy: in-deck fault causes; cable from deck plate to lane
  interface ends on a green Phoenix connector that plugs onto the interface; voltage checks on
  pins 1 and 5 (0.25 V at the interface but 0 V at the plate with the pad connected: cable or
  termination; about 0 V with the pad unplugged: corrosion at the Phoenix connector or a bad
  input on the interface).
- touchpads-deckplates/daktronics-aquatics-maintenance-manual-manualslib (DD3691471, July
  2017): pad and button data only arrive with the console cabled at the right wall plate; then MENU 5 2 test mode with a pushbutton in each deck plate jack (TP, B1, B2, B3).
- timers-consoles/daktronics-omnisport-2000-swimming-quick-reference (ED-13584): silicone on
  the banana connectors of cables to wall plates (in-deck) as well as other cables.
Web, October 2026:
- Daktronics KB DD3536111 (aquatics systems check): same "proper wall plate" instruction.
- Daktronics KB DD3209688: environment lists "Wall Plate/Lane Module Interface (LMI)"; pads and
  buttons not registering, "?" above each lane: lane data in J11 FAR END instead of J10.
- Centaur Products (Daktronics dealer) hosts a Daktronics specification (Section 11480; the SL-06027
  version for an SW-2218 board carries a Daktronics SL footer, see daktronics-lane-interface.md) for a Daktronics aquatics
  scoreboard and OmniSport timing system (Word file, metadata 2008, undated body): one wall plate
  required; the termination point for in-deck cables, timers and the start system; non-
  corrosive material; at least 14 x 14 in. Deck plates in 4 x 4 x 6 in deck boxes on 2 in PVC
  conduit to a 12 x 12 x 6 in box; console on a 20 ft control cable to the control receptacle
  box. Used for the wall plate size and material only. The spec names a scoreboard model; not
  named in text.
Further research, 2026-10-21 (three new sources, filed in sources/ with .txt extractions):
- vendors/daktronics/scoreboards-displays/daktronics-aquatics-interface-with-matrix-displays-
  technical-guide-dd1387596 (DD1387596 Rev 2, 16 April 2012), section 2.3 Venus 7000: console
  J5 RTD to a Venus 7000 RTD input; next to the computer, a W-1267 9-pin cable; at a distance,
  a wall plate (J-box) at the console end is wired through to a second plate beside the Venus
  7000 computer, current loop over the distance, signal converter at the controller's
  wall plate to the computer's com port. Section 2.4 (Venus 1500 displays): troubleshooting includes
  checking the cable's termination at the J-box and at the display.
- vendors/daktronics/scoreboards-displays/daktronics-aquatics-track-led-scoreboards-display-
  manual-p1153-dd3043167 (DD3043167 Rev 04, 3 August 2021), indoor signal connection: W-1077
  (paired 22 AWG shielded) in conduit from the display to a J-box or wall plate by the console
  position; 1/4 in phone plug 0L-40683 at the display end; then a cable from that box or plate
  to the console's J1, J2 or J3; clock switches 0A-1166-0003 and 0A-1196-0031 on the
  OmniSport's J8 and J9. ED-13312 names only J2 and J3 as scoreboard outputs (its rear-panel
  drawing labels J8 M-SWITCH and J9 S-SWITCH). Flagged in text.
- reference/husson-omnisport-2000-electronic-timing-system-potomac-valley-swimming-2006: Tim
  Husson, operations guide to the OmniSport 2000 at the Prince George's Sports and Learning
  Complex, February 2006, updated November 2006, hosted on an LSC site (gomotionapp lscamso).
  Independent of Daktronics. In-deck cabling, pads, buttons and start unit kept when the complex
  went from an OmniSport 6000 to the 2000; RTD port cabled to a wall-panel phone jack,
  feeding the scoreboard computer in the office; the start cable's two-prong banana plug and the
  touchpad/button connector come loose easily, the latter shown by no touches in a whole heat;
  check both the console end and the wall connection.
Also checked: Daktronics WP-2101 architect spec SL-06074 (section 11 66 43, January 2016) has
no wall plate content (useful for wp-2101.md: 100 lb, 200 W, 10 and 8 in digits); trade press
(Athletic Business) gives only generic in-deck background; no web result for 0A-1240-0059,
0A-1240-0060 or DWG-191692; the studylib copy of a Daktronics setup guide was not used.
Still to research: DWG-191692; panel sizes of the standard plates; the other wall plate
versions the manual alludes to; whether the double-ended plate's near and far leads are fixed.
-->

The Daktronics wall plate is the panel in a pool wall where an
[OmniSport 2000](../timers/omnisport-2000.md) timing console plugs into an in-deck installation.
The cables from every lane's [deck plate](daktronics-deck-plate.md) and from the start location
plates run through conduit to it, and the console's lane, start, speaker and scoreboard
connections are made at its face.[^manual] Daktronics makes several versions. Its manual shows
a single-ended plate, for pools timed at one end, and a double-ended plate that adds the far end
and data connections.[^manual] A [lane interface](daktronics-lane-interface.md) mounted behind
the plate collects the lane wiring.[^manual]

## Role in the timing system

This section places the wall plate in an in-deck installation; the
[deck cabling overview](index.md) covers how other manufacturers wire a pool.

Daktronics wires a pool either on-deck, with a chain of
[lane modules](daktronics-lane-module.md) laid out for each meet, or in-deck, with permanent
plates and cables run through conduit.[^manual][^brochure] In an in-deck pool the wall plate is
the one place the console connects. Junction boxes set in the floor hold the deck plates, wall
boxes hold the wall plate, and conduit joins them, so the only loose cables during a meet are
the short leads from each device to its plate.[^manual] Daktronics' architect specification
for an aquatics scoreboard and OmniSport package describes the wall plate the same way, as the
point where the in-deck cables, the timer and the start system meet.[^spec]

A wall plate can also carry the console's data out of the pool hall. Daktronics' guide to
linking its timing consoles with matrix displays covers a console set up far from the display's
[Venus](../../../software/venus.md) 7000 control computer. The console plugs into a wall plate
where it sits, and the wiring runs to a second wall plate at the control computer. Over that distance the link uses current
loop, with a signal converter between the far wall plate and the computer's serial
port.[^matrix]

Because the lanes reach the console through this plate, Daktronics' maintenance checks begin by
confirming that the console and its cables are plugged in at the correct wall
plate.[^maint][^kbcheck]

## Versions

This section describes the two plates the manual pictures. Both are built from separate labelled
panels set into one wall plate.[^manual]

### Single-ended plate

The single-ended plate has two panels.[^manual]

- NEAR END: a group of four jacks, one red and three black, for the lane data from the finish
  end of the pool.
- START and LANE SPEAKER: a red and black jack pair for each, with a 1/4 in SCOREBOARD jack
  below them.

### Double-ended plate

The double-ended plate has five panels.[^manual]

- Three panels across the top. The first carries START, LANE SPEAKER and SCOREBOARD. The second
  carries a second START pair and a second SCOREBOARD jack. The third carries a 1/4 in RTD jack
  and an ETHERNET socket.
- Two panels below, marked NEAR and FAR, each with a lead for one end's lane data.

The RTD connection carries the console's real-time data to a matrix display. Daktronics' usual
link is a 50 ft [9-pin to 1/4 in cable](../../common/scoreboard-control/daktronics-rtd-cable.md)
from the console's RTD port to the matching connector on the wall plate.[^manual] A 2006
operations guide for visiting officials at the Prince George's Sports and Learning Complex in
Maryland describes that arrangement in use. There a cable from the console's RTD port ended at a
wall-panel phone jack, which fed a scoreboard computer in the office.[^husson]

### Part numbers

Daktronics' in-deck judging drawing labels the wall plate as `0A-1240-0059` single-ended or
`0A-1240-0060` double-ended. The plate it draws has a NEAR END touchpad group, a START pair, a
scoreboard jack and a round JUDGES CONSOLES socket.[^manual] The judging drawing is the only
source giving these numbers. It does not say whether plates without the judging socket share
them.[^manual]

## Connection to the timer

This section matches the plate's connections to the console's rear panel.

The console reaches the plate through short cables from its rear panel:[^manual]

| Wall plate | Console |
|---|---|
| NEAR END | J10 NEAR END |
| FAR | J11 FAR END |
| START | J12 START INPUT |
| SCOREBOARD | J2 or J3 scoreboard outputs |
| RTD | J5 RTD port |
| JUDGES CONSOLES | J14 or J15, on the `W-1823` cable |

Daktronics' scoreboard manual describes the scoreboard path from the display's end. Shielded
signal cable runs in conduit from the display to a junction box or wall plate close to where the
console is operated, and a cable from there plugs into the console.[^swmanual] That manual
names the console's J1, J2 or J3 jack. The console's own manual lists only J2 and J3 as scoreboard
outputs.[^swmanual][^manual]

Lane data plugged into the wrong end is a known fault. A Daktronics support article for a pool
with a wall plate and lane interface describes touchpads and buttons that would not register,
with a question mark over every lane, because the lane data was in J11 instead of
J10.[^kbport] With a lane interface, the console's lane order setting stays at normal. Reversing
it is only needed for some on-deck layouts.[^manual]

## Lane interface

This section covers the unit behind the plate.

Daktronics' typical in-deck layout places the lane interface (lane module interface, LMI)
behind the first wall plate.[^manual][^hs200] Each deck plate's cable ends on a green Phoenix
connector that plugs onto the interface.[^t7000man] The console then reads the lanes as it
would a chain of on-deck lane modules.[^manual] A bulkhead has its own lane interface, which
feeds a pair of bulkhead deck plates instead of the wall plate.[^manual]

Daktronics' touchpad manual gives voltage checks at the interface for a pad that does not
register. With the pad plugged in, a reading of 0.25 V at the interface but 0 V at the deck
plate points to a broken cable or a bad termination. With the pad unplugged, a reading near
0 V points to corrosion where the Phoenix connector meets the interface, or to a failed input
on the interface itself.[^t7000man]

## Judging connections

This section covers the plate's role in diving judging.

In a pool wired for in-deck judging, the console's J14 port connects to the JUDGES CONSOLES
socket on wall plate 1 by the 30 ft [`W-1823`](../../diving/w-1823-cable.md) cable. From
there, cable in the wall runs up to 550 ft to further wall boxes, each finished with a
[judging control J-box cover](../../diving/daktronics-judging-jbox-cover.md) that has a judges'
console socket and a scoreboard socket.[^manual] Wired [JC-100](../../diving/jc-100.md)
consoles chain from those sockets, up to nine on one console output.[^manual]

## Installation

This section gives what the sources say about mounting.

The plate sits in a wall box, joined to the deck boxes by conduit.[^manual] The architect
specification asks for a single wall plate of non-corrosive material, at least 14 by 14 in.[^spec]
The OmniSport 2000 manual advises anyone designing a pool to plan the conduit, junction boxes
and drainage with Daktronics, since each facility differs.[^manual]

When the Prince George's complex replaced its [OmniSport 6000](../timers/omnisport-6000.md)
with an OmniSport 2000, it kept the in-deck cabling, touchpads, buttons and start unit.[^husson]

## Care and maintenance

This section covers the checks Daktronics recommends.

Daktronics recommends coating the banana connectors of cables to the wall plate with silicone
lubricant, as with the other deck cables.[^ed13584] Its systems check connects the console at
the proper wall plate and runs the console's test mode. A pushbutton plugged into each deck plate
jack in turn should make TP, B1, B2 or B3 appear on the console's display.[^maint][^kbcheck]

The Prince George's operations guide singles out two connections that come loose easily. One
is the lane connector, at the back of the console or at the wall. A heat with no touches from
any lane points there, and the guide advises checking both ends. The other is the start cable's
two-prong banana plug.[^husson]

## Specifications

| | |
|---|---|
| Manufacturer | Daktronics, Brookings, South Dakota[^manual] |
| Versions | Single-ended; double-ended[^manual] |
| Single-ended connections | Near-end lane data (4 jacks); start; lane speaker; scoreboard[^manual] |
| Double-ended connections | Near and far lane data; two start; lane speaker; two scoreboard; RTD; Ethernet[^manual] |
| Judging | JUDGES CONSOLES socket on the plate drawn for in-deck judging[^manual] |
| Lane wiring | Deck plate cables on green Phoenix connectors at the lane interface behind the plate[^manual][^t7000man] |
| Size and material | At least 14 × 14 in, non-corrosive (architect specification)[^spec] |
| Remote data link | Current loop to a second wall plate at a distant display computer[^matrix] |
| Console | OmniSport 2000[^manual] |

## Part numbers and accessories

This section lists the part numbers the sources give with the wall plate.

- `0A-1240-0059`, wall plate, single-ended.[^manual]
- `0A-1240-0060`, wall plate, double-ended.[^manual]
- [`0A-1240-0057`](../../diving/daktronics-judging-jbox-cover.md), judging control J-box cover
  for further judging locations.[^manual]
- [`W-1823`](../../diving/w-1823-cable.md), 30 ft cable from console J14 to the judging
  socket.[^manual]
- [`0A-1240-0032`](../../common/scoreboard-control/daktronics-rtd-cable.md), 50 ft 9-pin to 1/4 in
  cable from the console's RTD port.[^manual]

## See also

- [Daktronics deck plates](daktronics-deck-plate.md): the lane, start and bulkhead plates wired
  to it
- [Daktronics lane interface](daktronics-lane-interface.md): the unit behind it
- [Daktronics lane module](daktronics-lane-module.md): the on-deck alternative
- [CTS wall plate](cts-wall-plate.md): the Colorado Time Systems counterpart
- [Deck cabling](index.md): the deck cabling overview
- [Daktronics](../../../vendors/daktronics.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^manual]: [Daktronics, OmniSport 2000 Timing Console Operation Manual (ED-13312, Rev 16, 23 May 2019)](https://www.daktronics.com/web-documents/customer-service-manuals/ed13312.pdf), in-deck system, wall plates, DWG-190817.
[^matrix]: [Daktronics, Aquatics Interface with Daktronics Matrix Displays Technical Guide (DD1387596 Rev 2, 2012)](https://www.daktronics.com/web-documents/customer-service-manuals/dd1387596.pdf), Venus 7000.
[^swmanual]: [Daktronics, Aquatics/Track LED Scoreboards Display Manual (DD3043167 Rev 04, 2021)](https://www.daktronics.com/web-documents/customer-service-manuals/dd3043167.pdf), signal connection.
[^husson]: [Tim Husson, Daktronics OmniSport 2000 Electronic Timing System](https://www.gomotionapp.com/lscamso/UserFiles/File/omnisport2000_006609.pdf) (Potomac Valley Swimming, November 2006).
[^hs200]: [Daktronics, Horn Start HS-200 Owner's Manual (ED-12935, Rev 16, 18 May 2018)](https://www.daktronics.com/web-documents/customer-service-manuals/ed-12935.pdf), in-deck layout.
[^t7000man]: [Daktronics, T-7000 Series Touchpads Installation & Maintenance Manual (DD1953274)](https://www.daktronics.com/web-documents/customer-service-manuals/dd1953274.pdf), troubleshooting.
[^ed13584]: [Daktronics, OmniSport 2000 Swimming Quick Reference (ED-13584, Rev 8, 19 August 2013)](https://www.daktronics.com/web-documents/customer-service-manuals/ed-13584.pdf).
[^maint]: Daktronics, Aquatics Maintenance Checklist (DD3691471, July 2017), timing system.
[^brochure]: Daktronics, Aquatics Solutions brochure (DD1565872, Rev 07, June 2018), deck harness systems. Print document, not hosted online.
[^kbcheck]: [Daktronics, How to perform an Aquatics Systems Check (KB DD3536111)](https://www.daktronics.com/en-us/support/kb/DD3536111).
[^kbport]: [Daktronics, Touchpads not registering on the OmniSport, lane data connection in wrong port (KB DD3209688)](https://www.daktronics.com/en-us/support/kb/DD3209688).
[^spec]: [Daktronics, Section 11480 specification, aquatics scoreboard and OmniSport timing system](https://www.centaurproducts.com/wp-content/uploads/2021/07/Swim-10.doc), 2.06 wall plates; dealer copy.

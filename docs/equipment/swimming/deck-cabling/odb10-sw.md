---
title: Swiss Timing ODB10-SW
description: >-
  The ODB10-SW is a wall-mounted Swiss Timing distribution box that gathers in-deck lane
  wiring in the timing room and feeds it to a Quantum Aquatics timer.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: ODB10-SW
infobox:
  - label: Manufacturer
    value: Swiss Timing
  - label: Part number
    value: '`3494.716`, `3494.718`, `3494.710` (Primary); `3494.728`, `3494.720` (Primary & Secondary)'
  - label: Type
    value: In-deck lane distribution box
  - label: Lanes
    value: 6, 8 or 10 (lanes 0–9)
  - label: Connection
    value: WAGO spring terminals for the deck-plate cables; Tuchel 7-pin HA and 4-pin START sockets to the timer
  - label: Dimensions
    value: 269 × 540 × 130 mm (2018 case); 195 × 495 × 128 mm (earlier case)
  - label: Weight
    value: 3.350 kg (Primary, 10 lanes); 3.690 kg (Primary & Secondary, 10 lanes)
  - label: Timer
    value: '[Quantum Aquatics](equipment/swimming/timers/quantum.md)'
  - label: Introduced
    value: By December 2011
  - label: Manual
    value: '[ODB10-SW User''s Manual (3494.501.02)](https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3494.501.02_AQU_ODB10_User_Manual.pdf)'
---

<!--
Research notes, ODB10-SW. Surfaced while building out quantum.md; built out 2026-10-13.

Held and read in full: sources/vendors/swiss-timing/accessories/swiss-timing-aqu-odb10-user-manual-3494.501.02
(v1.7, December 2018, 29 PDF pages, printed pages to 23). Pages 2, 9, 10, 14, 15 and 18
rendered with PyMuPDF to read the figures. The copy Swiss Timing hosts now
(3494.501.02_AQU_ODB10_User_Manual.pdf, downloaded October 2026) is the same v1.7.
Version history: 1.0 1 Dec 2011 first issue; 1.1 21 Mar 2012; 1.2 4 Jul 2012 adds electrical
chapter; 1.3 20 Jul 2012 adds deck-plate protection; 1.4 29 Oct 2012 adds deck plate chapter and
the 100 m limit; 1.5 22 Oct 2013 adds start and HA cable wiring; 1.6 20 Jul 2015 pictures for the
new StartTime; 1.7 7 Dec 2018 pictures for a new case.
Facts used: role between pool and control room for blocks, touchpads and hand contacts from
HA1 PRY/SDY and HA2 PRY/SDY; delivered with WAGO tool 9071.3003, four screws with buffers and
four M4 washers; connection face (Figure 2) with START (4-pin) and HA (7-pin) Tuchel sockets and
cable glands L0-L9 plus a START gland and one more; six cover screws; at least 110 mm clear
below; housing 269 x 540 x 130 mm with a 516 x 245 mm fixing pattern in Figure 3; Primary
3494.716/718/710 (6/8/10 lanes), P&S 3494.728/720 (8/10); harness circuits 3494.600,
programmed per lane at the factory, reprogramming only for a replaced card (manual 3494.502.02),
programmer 3494.901 sold with a spare circuit; P&S box carries a spare in slot 11/RES; layouts
for one pool end (finish) and two ends (finish plus 25/50 m) with one or two boxes; deck-plate
wiring table (3a/2a/1a/Pa/Ta/c to B3/B2/B1/PF/TP/COM, shield to SHIELD); one shielded
6 x 0.5 mm2 cable (9 mm max) per deck plate, at most 100 m; start deck plate wiring (ready and
start contacts to terminals 1-4 and to the wall socket); loudspeaker wiring from two amplifiers
through the start deck plates (figures only); box to Quantum by START cable 1865.010 and HA cable
1892.010, at most 200 m; Quantum labelled 3480.721 (primary, "or JS") and 3480.720 (P&S) in the
diagrams; Quantum PRY takes the finish box on HA1/START 1 and the 25/50 m box on HA2/START 2,
while a P&S Quantum has one HA input per box; pinouts START 1 Ready-, 2 Start+, 3 Start-, 4
Ready+ and HA 1 PRY +12V, 2 SDY +12V, 3/4 PRY data +/-, 5/6 SDY data +/-, 7 GND; weights; no
preventive maintenance; store -10 to +60 C, work 0 to +45 C; grease banana plugs (OCP, HP, RBD,
OIT) and fill deck-plate terminals with silicone grease 9038.7047 (Bluestar Paste B 431) after
meets, with Quantum off. Wall sockets: 2650.619 (one 7-pole female), 2650.749 (4-pole female),
2650.750 (4-pole male), 2650.646, 2650.648, 2650.651 (two-plug combinations of 4-pole and 7-pole).
The lane deck plate in Figure 20 is labelled 3494.603; the Swimming Concept text gives the same
plate as 3493.603. Flagged in the text.

  - touchpads-deckplates/swiss-timing-aqu-concept-0017.509.02 (Swimming Concept, v4.9, January
    2017), sections 2, 3.3.1, 4.1, 4.2: the timing room per World Aquatics (then FINA) rules,
    raised 30-35 cm for visibility; Swiss Timing says the ODB10-SW speeds intervention and
    switching and takes in all aquatic disciplines (vendor claim); 1 to 4 racks (HA1-PRY,
    HA1-SDY, HA2-PRY, HA2-SDY); page 17 drawing gives the case as 195 x 495 x 128 mm, with a
    475 x 175 mm fixing pattern, and the same 110 mm clearance. That is the pre-2018 case; the
    manual's v1.7 entry "pictures updated with new case" is the likely explanation, inferred.
    Scoreboard cable screen goes to the scoreboard or the ODB10-SW, never both; a matrix board's
    20-pair cable lands on a separate ODB for displays.
  - timers-consoles/swiss-timing-aqu-programmer-user-manual-3480.501.02: the Programmer AQ reads
    and writes lane numbers in ODB10-SW circuits within 1 cm and reads their version. Its set
    numbers are 3480.921/922; the ODB10-SW manual names 3494.901. Whether these are one device is
    not stated.

Independent:
  - AVK Group (Austrian distributor), "Distribution box ODB10"
    (https://www.avkgroup.at/catalog/distribution-box-odb10/, read October 2026): marked no
    longer supplied; 60 x 40 x 23.5 cm; 13 kg with one rack to 16 kg with four; primary and
    backup, up to 10 lanes, acoustic start; connections SCB, GP, Flash, Start, HA1, HA1 backup,
    HA2, HA2 backup; cables to the harnesses, scoreboard and an ARES timing unit; the text
    also says ODB9. This is a different, ARES-era box; stub created as odb10.md.
  - Swiss Timing instruction-manuals page (October 2026) lists "ODB10 fix cabling", which is
    this manual, beside "Mobile harness" and "Harness Programmer".
  - No tender or facility document naming the ODB10-SW was found in a short search.

Still to research: price; the deck-plate adapter part number; the separate display ODB; whether
3494.901 and the Programmer AQ are the same tool; the manual 3494.502.02 on replacing circuits.
-->

The ODB10-SW is a Swiss Timing distribution box for fixed swimming-pool timing wiring. Mounted
on the timing-room wall, it takes the cable from each lane's in-deck plate and from the start
plates, and passes the touchpad, starting-block and pushbutton signals to a
[Quantum Aquatics](../timers/quantum.md) timer over two standard cables.[^manual] Swiss Timing
first issued its manual in December 2011. The box comes in Primary and Primary & Secondary
versions for 6, 8 or 10 lanes.[^manual]

## Role in the timing system

This section places the box in a Quantum installation; fixed and mobile deck cabling in
general are covered in the [deck cabling overview](index.md).

A Quantum pool is cabled one of two ways. A mobile installation lays a
[Quantum Mobile Harness](quantum-mobile-harness.md) along the deck. A fixed installation runs a
cable from each [Swiss Timing deck plate](swiss-timing-deck-plate.md) under the deck to the
ODB10-SW.[^manual][^concept] Swiss Timing describes the box as the centre of the fixed cabling,
where the cables from the timer and from every deck plate meet.[^manual] It places the box in
the timing room. Its Swimming Concept guide credits it with faster fault-finding and switching
of inputs and outputs, and with serving every aquatic discipline.[^concept]

Each box serves one end of the pool. A pool timed at the finish end only needs one box. A pool
with touchpads at both ends uses a second box for the 25 m or 50 m end.[^manual] Inside, a box
holds a rack of harness circuits for the primary timer and, in the Primary & Secondary version,
a second rack for the backup. A full installation therefore has up to four racks: primary and
secondary at the finish (HA1), and primary and secondary at the far end (HA2).[^manual][^concept]

## Design and construction

This section describes the box and its circuits.

The box is a rectangular case closed by a cover held with six screws.[^manual] One end carries
the two connectors to the timer: a 7-pin Tuchel socket marked HA for the harness data and a 4-pin
Tuchel socket marked START. Beside them are cable glands for lanes 0 to 9 and for the start
cable.[^manual] Inside, each lane's cable ends on a row of WAGO spring terminals marked B3, B2,
B1, PF, TP, COM and SHIELD. These are the three pushbuttons, the platform, the touchpad, their
common return, and the cable screen.[^manual] Swiss Timing supplies a tool for opening the
terminals, together with wall screws and washers.[^manual]

The lane signals reach the timer through harness circuits, part `3494.600`, one per lane. Each
circuit stores its lane number. Swiss Timing programs the circuits for their lanes before
delivery, so they need reprogramming only when one is replaced.[^manual] The Primary & Secondary
box carries a spare circuit in slot 11, marked RES.[^manual] A circuit's lane number is set with
an RFID programmer held within 1 cm of it. The ODB10-SW manual names programmer `3494.901`,
sold with a spare circuit. The [Programmer AQ](../timers/programmer-aq.md), sets `3480.921` and
`3480.922`, does the same job, and its manual names ODB10-SW circuits. Neither manual says
whether the two are the same tool.[^manual][^programmer]

The two documents give different case sizes. The 2018 manual gives 269 × 540 × 130 mm. The
2017 Swimming Concept guide gives 195 × 495 × 128 mm, with a smaller fixing pattern.[^manual][^concept]
The manual's December 2018 revision records new pictures "with new case", which probably
accounts for the difference.[^manual]

## Wiring

This section covers the cables on each side of the box.

Each lane deck plate has its own shielded cable of six 0.5 mm² cores, no more than 9 mm across,
running to the box.[^manual] Swiss Timing limits that run to 100 m.[^manual] The plate's
contacts map to the box's terminals one for one:[^manual]

| Signal | Deck plate | ODB10-SW |
|---|---|---|
| Button 3 | 3a | B3 |
| Button 2 | 2a | B2 |
| Button 1 | 1a | B1 |
| Platform | Pa | PF |
| Touchpad | Ta | TP |
| Common | c | COM |
| Cable screen | none | SHIELD |

The start deck plates carry the start signal from a start system such as the
[StartTime V](../starter/starttime-v.md) and a ready signal, each as a pair, on terminals 1 to 4. The same four terminals appear
on the matching wall socket.[^manual] The manual also shows the lane loudspeakers wired in two
groups, each fed by its own amplifier through a start deck plate.[^manual]

The box connects to the timer with two standard cables: `1865.010` for the start signal and
`1892.010` for the harness data. The run from box to timer is limited to 200 m.[^manual] The
7-pin HA connector carries separate +12 V supplies and data pairs for the primary and secondary
circuits. The 4-pin START connector carries the start and ready pairs.[^manual] A Primary Quantum
takes the finish-end box on its HA1 and START 1 inputs and the far-end box on HA2 and START 2. A
Primary & Secondary Quantum has one harness input for each box.[^manual]

Swiss Timing's Swimming Concept guide adds a rule for scoreboard cables that pass through the
timing room. The cable screen is earthed at the scoreboard or at the ODB10-SW, never at both. A
matrix scoreboard's cable ends on a separate distribution box for displays.[^concept]

## Installation and mounting

This section covers fixing the box and the wall sockets.

The box is screwed to the timing-room wall, with at least 110 mm left clear below it for the
cables.[^manual][^concept] The installer removes the side panel, feeds each deck-plate cable
through a gland, strips it, and pushes the cores into the spring terminals with the supplied
tool.[^manual] The Swimming Concept guide places the timing room according to World Aquatics
rules and suggests raising its floor by 30–35 cm so the operators can see the pool.[^concept]

Some signals are taken out to the poolside through surface-mounted wall sockets of cast
aluminium. They come with one or two plugs, in 4-pole and 7-pole, male and female
combinations; see [Swiss Timing wall socket](swiss-timing-wall-socket.md).[^manual] The manual's
deck-plate drawing labels the lane plate `3494.603`. The Swimming Concept guide gives the same
plate as `3493.603`.[^manual][^concept]

## Care and maintenance

This section covers upkeep of the box and the plates it serves.

Swiss Timing says the box itself needs no preventive maintenance. A faulty harness circuit is
replaced and, if necessary, reprogrammed.[^manual] The box is stored clean and dry.[^manual] The
deck plates need more care. Between meets the Quantum is switched off and disconnected. The
banana plugs of the touchpads, pushbuttons, relay platforms and other peripherals are greased,
and the plate terminals are filled with silicone grease `9038.7047`.[^manual]

## Specifications

| | |
|---|---|
| Manufacturer | Swiss Timing, Corgémont, Switzerland[^manual] |
| Lanes | 6, 8 or 10 (lanes 0–9)[^manual] |
| Racks | Up to four per installation: HA1 and HA2, each primary and secondary[^manual][^concept] |
| Lane terminals | WAGO spring terminals: B3, B2, B1, PF, TP, COM, SHIELD[^manual] |
| Lane cable | Shielded, 6 × 0.5 mm², 9 mm maximum diameter; 100 m maximum[^manual] |
| Timer connectors | Tuchel 7-pin (HA), Tuchel 4-pin (START)[^manual] |
| Box to timer | 200 m maximum[^manual] |
| Dimensions | 269 × 540 × 130 mm (2018 manual); 195 × 495 × 128 mm (2017 concept guide)[^manual][^concept] |
| Weight | 3.350 kg (Primary, 10 lanes); 3.690 kg (Primary & Secondary, 10 lanes)[^manual] |
| Clearance below | 110 mm minimum[^manual] |
| Operating temperature | 0 to +45 °C[^manual] |
| Storage temperature | −10 to +60 °C[^manual] |

## Part numbers and accessories

This section lists the parts Swiss Timing names.

| Part | Description |
|---|---|
| `3494.716` | ODB10-SW Primary, 6 lanes[^manual] |
| `3494.718` | ODB10-SW Primary, 8 lanes[^manual] |
| `3494.710` | ODB10-SW Primary, 10 lanes[^manual] |
| `3494.728` | ODB10-SW Primary & Secondary, 8 lanes[^manual] |
| `3494.720` | ODB10-SW Primary & Secondary, 10 lanes[^manual] |
| `3494.600` | Harness circuit, one per lane[^manual] |
| `3494.901` | Programmer for harness circuits, with a spare circuit[^manual] |
| `1865.010` | [Quantum start cable](quantum-start-cable.md), box to timer[^manual] |
| `1892.010` | [Quantum harness cable](quantum-harness-cable.md), box to timer[^manual] |
| `9071.3003` | Tool for the WAGO terminals, supplied[^manual] |
| `9038.7047` | Silicone grease for plugs and deck plates[^manual] |
| `2650.619`, `2650.646`, `2650.648`, `2650.651`, `2650.749`, `2650.750` | [Wall sockets](swiss-timing-wall-socket.md)[^manual] |

An earlier Swiss Timing box sold as the [ODB10](odb10.md), for the ARES timer, is a different
product. A distributor lists it as discontinued, at 60 × 40 × 23.5 cm and 13–16 kg.[^avk]

## See also

- [Swiss Timing deck plate](swiss-timing-deck-plate.md): the in-deck plate wired to the box
- [Quantum Mobile Harness](quantum-mobile-harness.md): the on-deck alternative to fixed cabling
- [Programmer AQ](../timers/programmer-aq.md): the tool that sets a circuit's lane number
- [Quantum Aquatics](../timers/quantum.md): the timer the box feeds
- [Deck cabling](index.md): the deck cabling overview
- [Swiss Timing](../../../vendors/swiss-timing.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^manual]: [Swiss Timing, ODB10-SW User's Manual (3494.501.02, v1.7, December 2018)](https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3494.501.02_AQU_ODB10_User_Manual.pdf).
[^concept]: [Swiss Timing, Swimming Concept: Quantum / OSB with footrest (0017.509.02, v4.9, January 2017)](https://web.archive.org/web/20230315150625/https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/0017.509.02.pdf).
[^programmer]: [Swiss Timing, Programmer AQ User's Manual (3480.501.02)](https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3480.501.02_AQU_Programmer_User_Manual.pdf).
[^avk]: [AVK Group, Distribution box ODB10](https://www.avkgroup.at/catalog/distribution-box-odb10/) (distributor listing, October 2026).

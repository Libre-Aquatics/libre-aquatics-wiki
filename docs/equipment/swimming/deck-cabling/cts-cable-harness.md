---
title: Colorado Time Systems cable harness
description: >-
  The Colorado Time Systems CH41 cable harness is the portable multi-conductor cable laid along
  the pool deck to connect each lane's touchpad and backup buttons to a CTS timing console
  through a 50-pin connector, from the System 4000 to the Gen7 Legacy.
updated: 2026-10-19
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Colorado Time Systems cable harness
infobox:
  - label: Manufacturer
    value: '[Colorado Time Systems](vendors/colorado-time-systems.md)'
  - label: Part number
    value: '`CH41-6`, `CH41-8`, `CH41-10`, `CH41-12` (primary); `CH41-6-3`, `CH41-8-3`, `CH41-10-3` (backup)'
  - label: Type
    value: On-deck multi-conductor lane harness
  - label: Lanes
    value: 6, 8, 10 or 12
  - label: Connection
    value: 50-pin connector to the timer or a wall plate; banana jacks at each lane pod
  - label: Timer
    value: '[System 4000](equipment/swimming/timers/system-4000.md), [System 5](equipment/swimming/timers/system-5.md), [System 6](equipment/swimming/timers/system-6.md), [Gen7 Legacy](equipment/swimming/timers/gen7-legacy.md)'
  - label: Status
    value: Sold by CTS as of 2026
  - label: Source
    value: '[CTS shop, CH41-8](https://shop.coloradotime.com/products/8-lane-touchpad-and-pushbutton-primary-cable-harness-ch41-8)'
---

<!--
Research notes, CTS cable harness. Stub created 2026-10-08 while writing the deck-cabling
overview; built out 2026-10-19.

Scope. The user expected two harness generations: a 50-pin one for System 6 and earlier, and a
newer one for the Gen7 Serial with a different connector. The documents confirm it:
- F1034 Rev 201807 (Gen7 Swimming User Guide, held under timers-consoles/), Legacy Timer
  section: the Legacy takes in-deck and on-deck systems on 50-pin and 14-pin connectors marked
  near end and far end, the same as on the System 6, System 5 and System 4000. On deck, a
  harness plugs straight into either connector for its end; a primary plus a backup harness
  needs both. In deck, wall plate to timer by CHI-xx-CPUA, plus CHI12-xx for a 12-lane pool.
- The same guide's Serial Timer section and F1034 Rev 202603: the Serial's on-deck near-end and
  far-end connectors take serial cable harnesses that chain to carry primary and backup across
  up to 20 lanes. F1041 Rev C drawing shows them as small round sockets. No part number,
  connector name or length for the serial harness was found in any held document, on
  shop.coloradotime.com (Shopify product list pulled 2026-10-19: only CH41-6/-8/-10 listed) or
  at dealers. So the serial harness gets its own stub, gen7-serial-cable-harness.md.
- Nothing found on what harness the pre-System 4000 consoles (Swimming III, printing timer)
  used.

CH41 family (all held under sources/vendors/colorado-time-systems/):
- Making Time Count catalogue (2008, catalogs-brochures/), Complete Timing, Scoring, Training and
  Display Solutions 2011 and 2015 (start-systems/, misfiled): identical lists. CH41-6/-8/-10/-12
  primary (touchpad and pushbutton); CH41-6-3/-8-3/-10-3 pushbutton backup; no 12-lane backup in
  any edition; CHE-41P-50M extension for primary only and CHE-41-50M for primary and backup.
  2011 and 2015 add that the harnesses need no extra environmental protection.
- CTS shop, 2026-10-19: CH41-6 $1,200, CH41-8 $1,350, CH41-10 $1,550 (sold out); listings dated
  June 2016; CH41-12 and the backup harnesses not listed. Also CHI-25-CPUA timer to wallplate
  $275 (belongs to the wall plate page).
- Just In Timing dealer page (justintiming.com/product/touchpad-cable-harness-primary/): CH41-6
  to -12; compatible with System 6 and Gen7 Legacy; per lane a touchpad input, one backup
  button input, and a start connection; prime extension 50 m and 75 ft, "Y" extension 50 m and
  75 ft. Lengths and lane spacing not stated anywhere.
- KAP7 lists the family at $1,115-$1,730. Pool360 (CYC-35-85xx SKUs) carries CH41-6/-8/-10,
  CH41-6-3/-8-3/-10-3 and CHE-41P-50M.
Console side:
- F506 Rev 0698 (System 5): separate primary (touchpad and button A harness), backup (B and C
  harness) and far-end inputs; inputs 5 V at 3.5 mA; diagnostics test harness circuits.
- F870 Rev 20241107 (System 6 software guide): near-end and far-end inputs for lanes 1-10, a
  second connector each for lanes 11-12, a duplicate near/far pair for a backup timer; wire bails
  lock the plugs; start system and backup start button plug into the primary harness; three
  buttons use B on the backup harness and leave C empty.
- F1058 (Gen7 Legacy): its connections photo shows two 50-pin lanes 1-10 connectors and two
  smaller lanes 11-12 connectors at each end, each with wire bail clips, plus START jacks. F1058
  names R-INF-SJxx for the starter-to-start-pod cable, but that is the Infinity-series jumper
  (Infinity, Infinity Pro, Elite docs); the SS2 uses SJ-25/SJ-50M (F503) and the Championship
  R-SJ-xx (Championship rugged datasheet). Corrected after the user flagged it, 2026-10-19.
  Start cables by starter (the article covers only these four, at the user's request): Championship
  SJ-50 to SJ-200 (F875 Rev 202202 and Rev 0604) and R-SJ-xx (rugged datasheet); Infinity INF-SJ25
  and INF-SJ50M (F849 Rev 202202), R-INF-SJxxx in the 2015 catalogue; Infinity Pro R-INF-SJxx
  (F1063 and its datasheet); Championship Elite R-INF-SJxx (F1064; the Elite datasheet calls it a
  "Champ series" cable). F1063 and F1064 both list deckplates, wall plates, harnesses and a
  Gen7 timer's start connector as places to plug it in. The SS2 (SJ-25, SJ-50M per F503) is left
  out of the body.
- F870 p13: the second near/far ports can link a second System 6 as a backup timer; F870 also
  says the primary and the B/C harness each go into either connector for their end.
- Architectural guidelines site worksheet (on-deck cabling): far-end cable length from console
  to nearest far-end lane 25/50/100/200 ft; near-end extension if the console is over 40 ft from
  the closest lane. Confirms the user's description: primary and backup harnesses into the
  console at the near end, a far-end harness on an extension for far-end pad times.
  F1034 202603 and F1058: buttons can be promoted (pad to A, A to B, B to C) for a two-button
  finish on one harness.
Care and testing:
- F897 Rev 201111 cleaning sheet; F147 Rev 201407 touchpad guide (Figure 11 photo shows grey
  cable with white moulded pods; test procedure); F696 Rev 0205 test meter sheet; maintenance
  checklist 20240916. The 2024 checklist drops dielectric grease for harnesses (it keeps it for
  deck plates) and adds Strikehold spray and cracked 50-pin hood checks. Flagged in the text.
- F507 Rev 1104 and F968 Rev 201909: RJP into the Button A/RJP jack with a stackable banana plug,
  backup button A stacked on top; speedlights on the separate R-SL harness.
- Enhanced Support Options sheet (undated): cable harnesses carry a one-year limited warranty.
- US 11,192,016 B2 (priority 2014) describes the problem with conventional harnesses: unkeyed
  banana plugs fit any jack, and an unplugged component cannot be detected.
Periodicals: Swimming World, December 1982, classified: a used eight-lane CTS system sold with a
"printer-harness" and backup buttons. Nothing else on CTS harness history.
Still to research: harness length, lane spacing and pod spacing; when the CH41 number started;
whether CH41-12 carries the 14-pin connector; the pre-1980s harness.
-->

The Colorado Time Systems (CTS) cable harness is a portable cable laid along the pool deck that
connects each lane's touchpad and backup pushbuttons to a CTS timing console. It is used at
pools without in-deck wiring.[^cat11] Each lane has a pod with banana jacks, and the
harness ends in a 50-pin connector that plugs into the console or a wall plate.[^f897] CTS
sells it as the CH41 family: a primary harness for the touchpad and first button, and a backup
harness for the second and third buttons, in versions for six to twelve lanes.[^cat08][^cat15]
The same connector served the [System 4000](../timers/system-4000.md),
[System 5](../timers/system-5.md), [System 6](../timers/system-6.md) and
[Gen7 Legacy](../timers/gen7-legacy.md) consoles.[^gen7] The
[Gen7 Serial Timer](../timers/gen7-serial.md) takes a different
[serial cable harness](gen7-serial-cable-harness.md).[^f1034]

## Role in the timing system

This section places the harness among CTS deck cabling; the general background is on the
[deck cabling overview](index.md).

CTS offers two ways to wire lanes to a console: deck plates fed by cabling buried in the deck,
or a harness laid on the deck. A pool that uses the harness needs no deck
plates.[^arch] The console plugs into the harness directly or into a wall plate, and the starter
can be connected at the harness, a deck plate or a wall plate.[^arch][^f870]

CTS describes the CH41 harness only in terms of touchpads, pushbuttons and the start
signal.[^cat15][^f870] Lane speakers and relay-platform speedlights are wired through separate
harnesses: the `R-LS40` series for [CTS lane speakers](../external-speaker/cts.md) and the
`R-SL` series for [CTS relay judging platforms](../relay-judging/cts.md).[^champ][^f1064]

## Design and construction

This section describes the harness as the CTS manuals and catalogues show it.

The harness is a multi-conductor cable with a pod at each lane.[^f870][^f147] The pods have banana
jacks: PRIME takes the touchpad, or the first pushbutton when no pad is used, and BUTTON takes
backup button A.[^ctsmeter][^f870] On the backup harness the jacks are B and C.[^f870] The
primary harness also carries a start pod with a jack for the start system and one for a backup
start button.[^f870][^f1058] CTS's 2024 maintenance checklist lists the full set of lane
connectors as Prime, A, B, C, Start and Backup Start.[^checklist]

At the console end is a 50-pin connector inside a hood, held to the console by wire bails (see
[Connection to the timer](#connection-to-the-timer)).[^f897][^checklist][^f870] CTS says the
harnesses are made for the pool environment and need no extra protection from it.[^cat11]

A CTS patent describes two weaknesses of this kind of cabling. Two-prong banana plugs have no
keying, so a component can go into the wrong jack, for example a touchpad into a speaker jack.
The timer also cannot tell when a plug has been knocked out during a meet.[^patentdetect] The
Gen7 Serial's input detection, which shows which jacks are filled, works only on its in-deck
plates and not on harnesses.[^f1034]

## Models and generations

This section lists the CH41 versions and the consoles that take them.

| Version | Lanes | Jacks per lane | Part number |
|---|---|---|---|
| Primary harness | 6, 8, 10, 12 | Touchpad and button A | `CH41-6`, `CH41-8`, `CH41-10`, `CH41-12`[^cat08][^cat15] |
| Backup harness | 6, 8, 10 | Buttons B and C | `CH41-6-3`, `CH41-8-3`, `CH41-10-3`[^cat08][^cat15] |
| Extension, primary harness only | Not stated | None | `CHE-41P-50M`[^cat08][^cat15] |
| Extension, primary and backup | Not stated | None | `CHE-41-50M`[^cat08][^cat15] |

The list is the same in CTS's 2008, 2011 and 2015 catalogues. None of them offers a 12-lane
backup harness.[^cat08][^cat11][^cat15] As of 2026 the CTS online shop lists the 6-, 8- and
10-lane primary harnesses at $1,200, $1,350 and $1,550, with the 10-lane one sold out. It does
not list the 12-lane or backup versions.[^shop] A dealer lists 50 m and 75 ft extensions for the
primary harness alone and in a Y form for both harnesses.[^jit] No source gives the length of a
harness or the spacing of its pods.

CTS's 2018 Gen7 guide says the Gen7 Legacy's 50-pin connectors, and the 14-pin ones beside them,
match those of the System 4000, System 5 and System 6. CTS presents the Legacy as a
direct replacement that lets a pool keep its existing CTS equipment.[^gen7] A dealer lists the
CH41 harnesses for the System 6 and Gen7 Legacy.[^jit] No source has been found for the harness
used by the consoles before the System 4000.

The Gen7 Serial uses a different connector. Its on-deck near-end and far-end sockets are small
round connectors. CTS says the serial harnesses can be chained, so that a pool of up to 20
lanes can have both primary and backup harnesses.[^f1034][^f1041] Those are covered in the
[Gen7 Serial cable harness](gen7-serial-cable-harness.md) article.

## Connection to the timer

This section covers how the harnesses are laid out and how each console takes them.

A full on-deck setup has up to two harnesses at each end of the pool. The primary harness
carries the touchpad and button A for every lane, and the backup harness carries buttons B and
C. Both run back to the console and plug into it separately.[^f870][^f506] A far-end harness is
only needed for far-end finishes and 50 m splits.[^f506] Because it has to reach the console from
the other end of the pool, it needs a longer run of cable. CTS's site worksheet asks for the
length of cable from the console to the nearest far-end lane (25, 50, 100 or 200 ft). It also
asks for an extension at the near end when the console sits more than 40 ft from the first
lane.[^arch] The catalogue lists two 50 m extensions, one for the primary harness alone and one
for the primary and backup harnesses together.[^cat15][^jit]

The three consoles differ in how they take the harnesses:

- The System 5 has a primary input for the touchpad and button A harness, a backup input for
  the B and C harness, and one far-end input that takes the pads and buttons from the other end. Its
  lane inputs run at 5 V and 3.5 mA.[^f506]
- The System 6 has two connectors for each end, each covering lanes 1–10, plus a second
  connector on each side for lanes 11 and 12. The primary harness and the B and C harness each
  go into either connector for their end.[^f870] CTS also lists a second use for the spare
  pair: linking a second System 6 as a backup timer, by connecting the primary console's other
  near-end and far-end ports to the backup console.[^f870]
- The Gen7 Legacy has the same layout: two 50-pin connectors for lanes 1–10 and two smaller
  connectors for lanes 11 and 12 at each end. A harness goes into either connector for its end,
  and a primary and backup pair fills both.[^f1058][^gen7]

On all three consoles the plugs are held in by wire bails: spring-wire clips at each end of the
console's socket that are snapped over the plug once it is pushed in.[^f506][^f870][^f1058]

The jacks used depend on how the finish is timed. With touchpads, the pad goes into PRIME,
backup button A into A on the primary harness, and buttons B and C onto the backup
harness.[^f870] With a button finish and no pads, the first button goes into PRIME and the
second into A, and the System 6 averages the two times. A third button goes into B on the
backup harness, and C is left empty.[^f870] When buttons are the primary finish, the Gen7
consoles can renumber the inputs (pad as A, A as B, B as C); CTS says this allows a two-button
finish on a single harness.[^f1058]

Each CTS start system reaches the start jack on the primary harness through a start jumper
cable of its own:[^f875][^f849][^f1063][^f1064]

- [Championship Start System](../starter/championship-start-system.md): `SJ-50` to `SJ-200` in
  its instruction guide, listed as `R-SJ-xx` on its datasheet.[^f875][^champ]
- [Infinity Start System](../starter/infinity-start-system.md): `INF-SJ25` or `INF-SJ50M` in its
  user guide, listed as `R-INF-SJxx` in the 2015 catalogue.[^f849][^cat15]
- [Infinity Pro Start System](../starter/infinity-pro-start-system.md): `R-INF-SJxx`.[^f1063]
- [Championship Elite Start System](../starter/championship-elite-start-system.md):
  `R-INF-SJxx`.[^f1064]

A backup start button goes into
the jack marked Backup Start.[^f870] The Gen7 Legacy also has START jacks on its own back panel,
and the Infinity Pro and Championship Elite guides allow the starter to be wired straight to a
Gen7 timer instead of the harness.[^f1058][^f1063][^f1064] A
[relay judging platform](../relay-judging/cts.md) plugs into the Button A/RJP jack with a
stackable banana plug, and backup button A is pushed into the back of that plug.[^f507][^f968]

## Care and maintenance

This section covers cleaning, testing and storage.

CTS's 2011 cleaning sheet concentrates on the banana jacks of each pod. Before use, each jack
gets a little dielectric grease, enough that some is pushed out when a plug goes in. After
use, each jack is cleaned with a cotton pipe cleaner dipped in isopropyl alcohol, rinsed with fresh
water rather than pool water, and greased again. The 50-pin connector is cleaned with alcohol
and a soft toothbrush.[^f897] The harness should be hung up to dry, for example on a garden hose
hanger, and never stored in a bag or bin.[^f897] Lime scale in a jack may be removed with a
50-50 dilution of Lime Away or CLR, but CTS says never to use those on the 50-pin
connector.[^f897]

CTS's 2024 maintenance checklist changes the routine. It drops the dielectric grease for
harnesses, though it keeps it for deck plates, and protects the connectors with Strikehold spray
instead. It adds a check for cracked 50-pin connector hoods, flushing of every lane connector
with fresh water after each use, and a monthly alcohol cleaning.[^checklist]

Each pod is tested with the CTS test meter while the harness is connected to a running timer.
The meter goes into PRIME and then into BUTTON, and should read 4.5–5 V; a lower reading points
to the timer, the harness or a dirty connector.[^ctsmeter][^f147] The System 5 diagnostics also
check the harness circuits.[^f506] CTS gives cable harnesses a one-year limited
warranty.[^support]

## Specifications

This section collects the figures the CTS documents give.

| Item | Value |
|---|---|
| Lanes | 6, 8, 10 or 12 (primary); 6, 8 or 10 (backup)[^cat15] |
| Primary harness jacks | PRIME (touchpad) and BUTTON (button A) per lane; start and backup start[^ctsmeter][^f870] |
| Backup harness jacks | B and C per lane[^f870] |
| Console connector | 50-pin, hooded, with wire bails; 14-pin connectors for lanes 11–12 on the System 6 and Gen7 Legacy[^f897][^checklist][^gen7] |
| Lane input (System 5) | 5 V at 3.5 mA[^f506] |
| Test reading | 4.5–5 V at each jack[^ctsmeter] |
| Extensions | 50 m (CTS); 50 m and 75 ft (dealer)[^cat15][^jit] |
| Warranty | 1 year, limited[^support] |

## Part numbers and accessories

This section lists the numbers in CTS's catalogues and shop.

| Item | Number |
|---|---|
| Primary harness, 6, 8, 10 or 12 lanes | `CH41-6`, `CH41-8`, `CH41-10`, `CH41-12`[^cat15] |
| Backup harness, 6, 8 or 10 lanes | `CH41-6-3`, `CH41-8-3`, `CH41-10-3`[^cat15] |
| Extension, primary harness only | `CHE-41P-50M`[^cat15] |
| Extension, primary and backup harnesses | `CHE-41-50M`[^cat15] |
| [Backup pushbutton](../semi-automatic/pushbutton/cts.md), 6 ft cable | `PB-6`[^cat08] |
| Start jumper cable, start system to harness | `R-SJ-xx` (Championship); `R-INF-SJxx` (Infinity, Infinity Pro, Championship Elite)[^champ][^cat15][^f1063][^f1064] |
| Test meter | `TPM-D`[^meter] |

## See also

- [Gen7 Serial cable harness](gen7-serial-cable-harness.md): the harness for the Gen7 Serial
  Timer
- [Colorado Time Systems wall plate](cts-wall-plate.md): the in-deck alternative at the console
  end
- [Colorado Time Systems QuickConnect deck plate](cts-quickconnect-deck-plate.md): the in-deck
  lane connection
- [Gen7 Legacy Timer](../timers/gen7-legacy.md): the current console that takes the harness
- [Deck cabling](index.md): the deck cabling overview
- [Colorado Time Systems](../../../vendors/colorado-time-systems.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^cat08]: Colorado Time Systems, Making Time Count (2008 catalogue), cable harnesses and accessories.
[^cat11]: Colorado Time Systems, Complete Timing, Scoring, Training and Display Solutions (2011), cable harnesses.
[^cat15]: Colorado Time Systems, Complete Timing, Scoring, Training and Display Solutions (2015), in- and on-deck solutions.
[^shop]: [Colorado Time Systems, 8-lane touchpad and pushbutton primary cable harness (CH41-8)](https://shop.coloradotime.com/products/8-lane-touchpad-and-pushbutton-primary-cable-harness-ch41-8), with related listings.
[^jit]: [Just In Timing, Primary Cable Harness](https://justintiming.com/product/touchpad-cable-harness-primary/) (CH41 compatibility and extensions).
[^arch]: Colorado Time Systems, Architectural Guidelines: A Guide for Designing Competitive Aquatic Facilities (System 6 edition), site worksheet.
[^f506]: [Colorado Time Systems, Swimming 5 for the System 5 Sports Timer user guide (F506, Rev. 0698)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/System5/System5swim-man.pdf).
[^f870]: Colorado Time Systems, Swimming 6 for the System 6 Sports Timer Software User Guide (F870 Rev. 20241107), hardware setup.
[^gen7]: Colorado Time Systems, Gen7 Swimming User Guide (F1034 Rev 201807), Serial Timer and Legacy Timer connections.
[^f1034]: [Colorado Time Systems, Gen7 Serial Timer User Guide (F1034 Rev 202603)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Gen7/Gen7SerialTimerUserGuide_F1034.pdf), connections and diagnostics.
[^f1041]: [Colorado Time Systems, Gen7 Serial Quick Start Guide (F1041 Rev C)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Gen7/Gen7_Serial_Quick_Start_Guide_F1041.pdf).
[^f1058]: [Colorado Time Systems, Gen7 Legacy Timer User Guide (F1058)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Gen7/Gen7LegacyTimerUserGuide_F1058.pdf).
[^f897]: [Colorado Time Systems, Cleaning Deck Plates, Cable Harnesses and Wall Plates (F897 Rev. 201111)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Misc/Maintenance/CleaningDP-CH.pdf).
[^checklist]: [Colorado Time Systems, Maintenance Checklist](https://www.coloradotime.com/hubfs/CTS%20Website%20%20Assets/Datasheets/Maintenance-Checklist.pdf) (September 2024).
[^ctsmeter]: [Colorado Time Systems, Test Meter Instructions (F696 Rev. 0205)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Misc/Maintenance/TestMeterInstr.pdf).
[^meter]: [Colorado Time Systems, Test Meter (TPM-D)](https://shop.coloradotime.com/products/test-meter-tpm-d).
[^f147]: Colorado Time Systems, Touchpads User Guide (F147 Rev. 201407), test meter and care and maintenance.
[^f507]: [Colorado Time Systems, Relay Judging Platform Installation Guide (F507, Rev. 1104, 2004)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Relay%20Judging/RJP_manual.pdf).
[^f968]: [Colorado Time Systems, RJPLD User Guide (F968, Rev. 201909)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Relay%20Judging/RJPLD_User_Guide_F968.pdf).
[^f1064]: [Colorado Time Systems, Championship Elite Start System User Instructions (F1064)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Start%20Systems/Elite/Championship%20Elite%20Starter_F1064.pdf).
[^f1063]: [Colorado Time Systems, Infinity Pro Start System User Instructions (F1063)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Start%20Systems/Infinity%20Pro/INF-PRO%20Starter_F1063.pdf).
[^f849]: [Colorado Time Systems, Infinity Start System User Guide (F849 Rev. 202202)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Start%20Systems/Infinity_User_Guide_F849.pdf).
[^f875]: [Colorado Time Systems, Championship Start Instruction Guide (F875 Rev. 202202)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Start%20Systems/Champ_Start_User_Guide_F875.pdf).
[^champ]: Colorado Time Systems, Championship Start System datasheet (Rugged edition), accessories (`R-SJ-xx`, `R-LS40-x`).
[^support]: Colorado Time Systems, Enhanced Support Options (undated sheet), standard warranty.
[^patentdetect]: [US Patent 11,192,016 B2, Apparatus and method for the detection of timing components in swimming pools](https://patents.google.com/patent/US11192016B2/en) (priority 2014).

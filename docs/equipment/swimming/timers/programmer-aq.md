---
title: Swiss Timing Programmer AQ
description: >-
  The Programmer AQ is a hand-held Swiss Timing RFID tool that reads and writes the lane
  number stored in Quantum Mobile Harness modules and ODB10-SW harness circuits, used when a
  module or circuit is replaced on site.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Programmer AQ
infobox:
  - label: Manufacturer
    value: Swiss Timing
  - label: Part number
    value: '`3480.921`, `3480.922` (sets with a spare module)'
  - label: Type
    value: RFID lane-number programmer
  - label: Works with
    value: '[Quantum Mobile Harness](equipment/swimming/deck-cabling/quantum-mobile-harness.md), [ODB10-SW](equipment/swimming/deck-cabling/odb10-sw.md) harness circuits'
  - label: Range
    value: 1 cm maximum
  - label: Dimensions
    value: 168 × 74.4 × 35 mm
  - label: Weight
    value: 0.150 kg without batteries; 0.200 kg with
  - label: Power
    value: Two AA cells
  - label: Introduced
    value: '2012'
  - label: Manual
    value: '[Programmer AQ User''s Manual (3480.501.02)](https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3480.501.02_AQU_Programmer_User_Manual.pdf)'
---

<!--
Research notes, Programmer AQ. Stub surfaced while building out quantum.md; built out
2026-10-14.

Sources read in full (local copies under sources/vendors/swiss-timing/):
- timers-consoles/swiss-timing-aqu-programmer-user-manual-3480.501.02: Programmer AQ User's
  Manual, v1.1, January 2019; version history gives v1.0 on 10 January 2012 and v1.1 on
  8 January 2019, the only change being step 1 of section 3.2.6 (the step telling the operator
  to deselect HA1 in the software). Byte-identical to the copy Swiss Timing still hosts at
  .../Instruction_Manuals/3480.501.02_AQU_Programmer_User_Manual.pdf (checked by hash
  2026-10-14); the bare 3480.501.02.pdf URL now returns 404. Pages rendered with PyMuPDF to read
  the figures. Findings: the manual's figure calls it an RFID programmer; front panel has a
  power key, Enter and four arrow keys, a small display, Swiss Timing logo. Boot screen reads
  "QUANTUM-AQ Module pgm" and a version (1.0 in the figure). Menu header "RFiD PGM" with a
  battery gauge; entries Turn OFF, Read ADD, Write ADD, Read vers. Auto power-off after one
  minute idle. Read and write work on ODB10-SW harness circuits (drawn as the green 3494.600
  card) and on Quantum mobile harness modules, held within 1 cm (warning repeated on every
  procedure page); for the mobile module the target is an antenna symbol on the case side next
  to the cable entry. Write shows "OK" on success. Primary module write: pick lane, hold to
  antenna, confirm OK, then check the lane in the timing software. P&S module write: module must
  be cabled to the Quantum on HA1 and HA2; deselect the HA1 harness in the software so HA2 can
  be written; pick the lane, press Right then Up to put a star beside the number, Enter; hold to
  antenna; OK; reselect the harness in the software; check the lane; repeat without the star.
  Which circuit the starred write targets is not stated; the HA1/HA2 wording suggests the
  starred write is the Secondary circuit (inferred, not used as fact in the text). Read vers.
  reports the version of the harness circuit in a module or ODB10-SW circuit (no figure).
  Batteries: 2 x AA (UM-3) 1.5 V, in a compartment on the back under a cover with a lever.
  Size H 168 x W 74.4 x D 35 mm; 0.150 kg without cells, 0.200 kg with. Keep clean and dry;
  store -10 to +60 C; use 0 to +45 C. Sets 3480.921 (programmer plus a Primary mobile harness
  module) and 3480.922 (programmer plus a P&S module). The safety boilerplate on the inside
  cover (chargers, mains earth, horns) is generic Swiss Timing text and does not apply to a
  battery tool; not used.
- timers-consoles/swiss-timing-aqu-harness-user-manual-3480.500.02-rev-1.0 (v1.0, December
  2011) and ...3480.500.02 (v1.1, August 2019). Both say lanes are coded at the factory and a
  programmer can be ordered for on-site replacement, and both list 3480.921/922. v1.0 points to
  the programmer manual as 3480.502.02; v1.1 corrects this to 3480.501.02 (its version history
  says 1.3.4 was updated). The 3480.502.02 number was not found anywhere else (direct URL 404).
- timers-consoles/swiss-timing-quantum-harness-datasheet-harness-3480-1303 (2013, PDF dated
  22 May 2013): the options list pairs 3480.921 with a Primary module and 3480.922 with a P&S
  module. Page 1 photo shows a dark hand-held unit with a small display and a cross of
  arrow keys around a centre key, beside two harness modules; the 2019 manual draws it with a red
  front panel. Whether this is a design change or just rendering is unknown. The kit-contents
  table also prints 3480.921 in a column whose meaning the extraction does not make clear; not
  used.
- accessories/swiss-timing-aqu-odb10-user-manual-3494.501.02 (v1.7, December 2018), 3.2:
  ODB10-SW harness circuits 3494.600 are factory-programmed; reprogramming only needed on
  replacement (pointing to a manual 3494.502.02, not held, URL 404); a programmer 3494.901 can
  be ordered and comes with a spare harness circuit. Nothing says whether 3494.901 is the same
  hand-held unit as the Programmer AQ. Reading: the Programmer AQ manual covers ODB10-SW circuits
  explicitly, so 3494.901 is plausibly the same unit packaged with a 3494.600 card, as 3480.921/
  922 package it with a module. Inferred, flagged as unresolved in the text.
- quantum.md research: Quantum Concept manual v1.0 dated 1 May 2012, so the programmer manual
  (January 2012) predates the first Quantum concept manual.

Web, 2026-10-14: searches for 3480.921, 3480.922, 3494.901, "Harness Programmer" and "Programmer
AQ" found no dealer listing, price, tender or press coverage. Swiss Timing's instruction-manuals
page lists the document as "Harness Programmer". The 2017 Swiss Timing Aquatics Sales
Consulting brochure (DOCM_AQ_SalesConsulting_0517_EN.pdf) describes the mobile harness but not
the programmer. Patent search: US 11,192,016 (Everlast Climbing Industries dba Colorado Time
Systems, priority 2014) uses RFID between plugs and harness jacks to identify devices, not to
set lane numbers; unrelated. No Swiss Timing patent on RFID lane addressing found.

Still to research: whether 3494.901 is the same device; manual 3494.502.02; price; whether the
programmer handles ARES-era harnesses (nothing suggests it does); the firmware history behind
the "Version 1.0" boot screen.
-->

The Programmer AQ is a hand-held radio-frequency identification (RFID) tool made by Swiss
Timing. It reads and rewrites the lane number stored in the lane hardware of the
[Quantum Aquatics](quantum.md) timer: the modules of the
[Quantum Mobile Harness](../deck-cabling/quantum-mobile-harness.md) and the harness circuits
inside an [ODB10-SW](../deck-cabling/odb10-sw.md) distribution box.[^manual] Swiss Timing sets
these lane numbers at the factory, so the programmer is needed only when a module or circuit is
replaced on site.[^harness][^odb10] Its manual was first issued in January 2012.[^manual]

## Role in the timing system

Quantum identifies a lane by an address stored in the lane's hardware, not by the wire a signal
arrives on. Each mobile harness module, and each harness circuit in a fixed installation, holds
one lane number, and the timing software maps those numbers to pool lanes.[^harness][^sw] A new
module or circuit fitted as a replacement has to carry the number of the lane it is replacing.
Swiss Timing's harness manual and datasheet both point to an optional programmer for that
case.[^harness][^ds2013] The Programmer AQ reads and writes the stored number over a
short-range radio link.[^manual]

Background on mobile harnesses and in-deck lane wiring is on the
[deck cabling overview](../deck-cabling/index.md).

## Design and construction

The programmer is a small battery-powered case with a display and six keys: a power key, an
Enter key and four arrow keys.[^manual] At power-up the display shows the unit's name and
version, and the main menu shows a battery gauge in its top corner.[^manual] Two AA cells sit in
a compartment on the back, under a cover released by a lever. The case measures 168 × 74.4 ×
35 mm and weighs 0.150 kg, or 0.200 kg with cells fitted.[^manual] Swiss Timing's 2013 harness
datasheet pictures the programmer beside two harness modules.[^ds2013]

## Operation

The main menu has four entries, stepped through with the up and down keys and opened with
Enter:[^manual]

| Menu entry | Function |
|---|---|
| Turn OFF | Switches the programmer off |
| Read ADD | Reads the lane number held in a module or circuit |
| Write ADD | Writes a chosen lane number to a module or circuit |
| Read vers. | Reads the version of the harness circuit in a module or ODB10-SW |

The unit also turns itself off after one minute without a key press.[^manual]

To read or write, the operator holds the programmer against the target. The manual repeats on
every procedure page that the gap must be 1 cm or less. An ODB10-SW harness circuit is read by
passing the programmer over the circuit card. A mobile harness module is read through an
antenna symbol printed on the side of its case.[^manual] A read shows the stored lane number on
the display. For a write, the operator picks the lane number with the arrow keys before holding
the programmer to the target, and the display shows OK when the write succeeds.[^manual] After
writing a mobile harness module, the manual asks the operator to confirm in the timing software
that the module now appears in the intended lane.[^manual]

### Primary & Secondary modules

A Primary & Secondary harness module carries two circuits, one for each timer of a Primary &
Secondary Quantum pair.[^harness] Writing one is a longer procedure. The module has to be cabled
to the Quantum through both harness inputs, HA1 and HA2. The operator first deselects the HA1
harness in the swimming software so that the HA2 side can be written.[^manual] On the
programmer, the lane number is chosen and then marked with a star (the right key, then the up
key) before it is written. The harness is then selected again in the software, the lane is
checked there, and the whole write is repeated without the star.[^manual] The manual does not
name which circuit receives each write. The 2019 revision of the manual changed only the
deselection step.[^manual]

## The ODB10-SW programmer

The ODB10-SW manual names its own programmer for harness circuits, part number `3494.901`,
supplied with a spare circuit.[^odb10] The Programmer AQ manual covers ODB10-SW circuits
directly, but neither manual says whether `3494.901` is the same hand-held unit sold under a
different set number, and no other source found settles it.[^manual][^odb10]

## Care and maintenance

The programmer is kept clean and dry when not in use. Swiss Timing rates it for use between 0
and 45 °C and for storage between −10 and 60 °C.[^manual]

## Specifications

| Specification | Value |
|---|---|
| Type | Hand-held RFID programmer |
| Targets | Quantum Mobile Harness modules (Primary, Primary & Secondary); ODB10-SW harness circuits |
| Functions | Read lane number, write lane number, read circuit version |
| Range | 1 cm maximum |
| Keys | Power, Enter, four arrows |
| Power | 2 × AA (UM-3) 1.5 V cells |
| Auto power-off | After 1 minute idle |
| Dimensions | 168 × 74.4 × 35 mm |
| Weight | 0.150 kg without cells; 0.200 kg with |
| Operating temperature | 0–45 °C |
| Storage temperature | −10–60 °C |

## Part numbers and accessories

- `3480.921`: programmer set with a Primary mobile harness module.[^manual][^ds2013]
- `3480.922`: programmer set with a Primary & Secondary mobile harness module.[^manual][^ds2013]
- `3494.901`: programmer for ODB10-SW harness circuits, supplied with a spare circuit; possibly
  the same unit (see above).[^odb10]

The first edition of the harness manual (December 2011) refers readers to the programmer manual
as `3480.502.02`. The 2019 edition gives `3480.501.02`, the number printed on the programmer
manual itself.[^harness]

## See also

- [Quantum Mobile Harness](../deck-cabling/quantum-mobile-harness.md): the mobile lane modules it programs
- [ODB10-SW](../deck-cabling/odb10-sw.md): the fixed-wiring box whose circuits it programs
- [Quantum Aquatics](quantum.md): the timer the lane hardware serves
- [Deck cabling](../deck-cabling/index.md): the deck-cabling overview
- [Swiss Timing](../../../vendors/swiss-timing.md): the manufacturer

## References

[^manual]: [Swiss Timing, Programmer AQ User's Manual (3480.501.02, v1.1, January 2019)](https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3480.501.02_AQU_Programmer_User_Manual.pdf).
[^harness]: [Swiss Timing, Quantum Mobile Harness User's Manual (3480.500.02, v1.1, August 2019)](https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3480.500.02_AQU_Harness_User_Manual.pdf).
[^ds2013]: [Swiss Timing, Aquatics Harness Swimming Pool datasheet (HARNESS_3480_1303)](https://www.swisstiming.com/fileadmin/Resources/Data/Datasheets/DOCM_AQ_HarnessSwimmingPool_0913_EN.pdf) (2013).
[^odb10]: [Swiss Timing, ODB10-SW User's Manual (3494.501.02, v1.7, December 2018)](https://web.archive.org/web/20230315150617/https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3494.501.02.pdf), 3.2.
[^sw]: [Swiss Timing, Quantum-Swimming User's Manual (3480.509.02, v1.4, October 2019)](https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3480.509.02.pdf).

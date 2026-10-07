---
title: Swiss Timing Programmer AQ
description: >-
  The Programmer AQ is a hand-held Swiss Timing RFID tool that reads and writes the lane
  number stored in Quantum harness modules and ODB10-SW circuits.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Programmer AQ
infobox:
  - label: Manufacturer
    value: Swiss Timing
  - label: Part number
    value: '`3480.921`, `3480.922`'
  - label: Type
    value: RFID lane-number programmer
  - label: Dimensions
    value: 168 × 74.4 × 35 mm
  - label: Weight
    value: 0.150 kg without batteries
  - label: Power
    value: Two AA cells
  - label: Manual
    value: '[Programmer AQ User''s Manual (3480.501.02)](https://web.archive.org/web/20230315150625/https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3480.501.02.pdf)'
---

<!--
Research notes, Programmer AQ.

Surfaced while building out quantum.md.

Held and read: sources/vendors/swiss-timing/timers-consoles/swiss-timing-aqu-programmer-user-manual-3480.501.02
(v1.0 10 January 2012; v1.1 8 January 2019, which changed the Primary & Secondary write
procedure). Called an RFID programmer in its figures. Five keys (power, enter, four arrows);
menu: turn off, read address, write address, read version; switches itself off after a minute.
Reads or writes the lane number of an ODB10-SW harness circuit or a Quantum mobile harness
module held within 1 cm of the antenna mark. Writing a Primary & Secondary module needs it cabled to the
console on both HA1 and HA2, and HA1 is deselected in the software so the second
circuit can be written. Sets: 3480.921 (with a Primary harness module) and 3480.922 (with a PRY
& SDY module). The ODB10-SW manual names a separate programmer, 3494.901, for its circuits;
whether that is the same device is not stated. 168 x 74.4 x 35 mm; 0.150 kg, 0.200 kg with two
AA cells. Store -10 to 60 C, work 0 to 45 C.

Still to research: whether 3494.901 and 3480.921/922 are the same unit; price.
-->

This article is a stub. The Programmer AQ is a hand-held Swiss Timing RFID tool that reads and
rewrites the lane number held in a [Quantum Mobile Harness](quantum-mobile-harness.md) module or
an [ODB10-SW](odb10-sw.md) circuit, so a replacement module can be set to its lane on site.

See the [Quantum Aquatics](quantum.md) article for the system it serves.

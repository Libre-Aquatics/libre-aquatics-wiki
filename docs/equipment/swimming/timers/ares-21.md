---
title: Swiss Timing ARES 21
description: >-
  ARES 21 is the swim timing system that Omega Electronics and then Swiss Timing sold from the
  mid-1990s until Quantum: an IF-ARES interface box that time-stamps the pool contacts and a PC
  running ARES Swimming that processes the races.
updated: 2026-10-08
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: ARES 21
infobox:
  - label: Manufacturer
    value: Swiss Timing
  - label: Part number
    value: '`3330.900` (interface); `3330.900.BT` or `3330.901` (with Bluetooth)'
  - label: Type
    value: Swim timing console
  - label: Lanes
    value: Up to 10
  - label: Resolution
    value: 1, 1/10, 1/100 or 1/1000 s, selectable
  - label: Software
    value: ARES Swimming on a Windows PC; diving, synchronized swimming and water polo programs optional
  - label: Connection
    value: RS-232 to the PC; two harness inputs; RS485 scoreboard and data handling ports
  - label: Dimensions
    value: 410 × 285 × 80 mm
  - label: Weight
    value: 2.8 kg
  - label: Power
    value: External 12 V battery, 10.8–14.4 V
  - label: Introduced
    value: '1995'
  - label: Succeeded by
    value: '[Quantum Aquatics](equipment/swimming/timers/quantum.md)'
  - label: Manual
    value: Concept ARES 21 Swimming User's Manual (3330.560.02, version 3.30, April 2008)
---

<!--
Research notes, ARES 21. Stub created while building out quantum.md; built out October 2026.

Sources held in sources/ and read in full:
  - vendors/swiss-timing/timers-consoles/swiss-timing-ares-21-concept-swimming-user-manual-3330.560.02
    Swiss Timing, Concept ARES 21 Swimming User's Manual, version 3.30, April 2008. Obtained from
    a Canadian club's GoMotion site (gomotionapp.com/canrhac/UserFiles/Image/QuickUpload/
    ares---swimming-eng-3330-560-02_091888.pdf), not from swisstiming.com. Written against ARES
    Swimming 2.04; data handling over the PC's second COM port from 2.15. Supports the whole
    Software and operation section, the scoreboard and data handling ports, the GP and PC-COM
    wiring and serial settings, the Galactica and ERTD chapters and the Meet Manager functions.
    The scoreboard chapter's cross-references to the Galactica and ERTD chapters are off by one
    (it says chapters 9 and 10; they are 10 and 11).
  - ...-3330.560.02-rev-3.1: the same manual at version 3.1, May 2002 (printed number
    3330-560-02), branded "a product of Omega Electronics, Switzerland", protocols and modules
    downloadable from omega-electronics.ch, footer with Swiss Timing UK at Chandlers Ford. Same
    chapters and content as 2008; the 2008 edition replaces Omega Electronics with Swiss Timing.
    Spells the acronym out as Advanced Result Entry Station. From hertsssa.org.uk (Hertfordshire
    swimming association), uploads/5/2/5/3/5253152/ares_swimming_user_manual.pdf.
  - ...-datasheet-3330.525.02.ra: Swiss Timing datasheet "ARES 21 Timing Device", Corgemont
    edition, RoHS and CE. hertsssa.org.uk .../ares_21_timing_device_3300.525.02.ra.pdf (the URL
    says 3300, the page says 3330). Connector panel, specifications, options list, security,
    database, printed results, scoreboard compatibility.
  - ...-datasheet-3300.525.02c: the UK edition (Swiss Timing UK address), CE only, "Omega
    Electronics scoreboards", so probably the older one. hertsssa.org.uk .../ares_21_connectors.pdf.
    Differences: Bluetooth unit 3330.901 (RA: 3330.900.BT); no dual supply 3330.624; OMT channel
    "OMEGA MTS" (RA: "OMEGA MTL"); power table "MTO console" (RA: "MTL console"); harness input
    "2x30"; START described as an LED transducer input/output; US printer 3330.630.US.
  - reference/cvs-meet-manager-ares-link-guide-2016: Central Victoria Swimming guide (cvs.org.au,
    an Australian district association; created
    July 2016, no author). ARES PC on COM1 to the timer ("the flat red box"); Meet Manager PC on
    COM2 by null modem and USB-serial adapters; ARES Configuration > DH: GP port none, PC COM port
    Bi-Directional; Meet Manager Omega ARES21 Bi-Directional, Download Events to ARES, Get Times
    (F3). Meet Manager v5.0 called the most used version in 2016. Club workaround: Meet Manager
    sometimes failed to read times for events over 100 m, so the guide sets the distance to 50 m in
    ARES; only event number and lane times transfer. Calls the system "Semi-Automatic Timing
    (SAT)", which is the guide's own label.
  - Swiss Timing official communication 307.225, Relay break detection in swimming, 22.10.01
    V002 (relay-judging folder): ARES relay take-over principle (window of 2 s each side of the
    touch, result 2 s after the touch, minus sign for early take-off, net time with no 0.03 s
    adjustment); LEN approval 1995, FINA approval 4.5.1998.
  - StartTime II (3399.502.02) and III (3399.504.02): stand-alone operation with ARES, READY lamp
    lit when the ARES is cleared; SW5 refuses a start until it is. StartTime IV (3481.501.02) and
    V (3481.560.02) list ARES among their timers.
  - Calypso manuals 3403.500 and 3403.507: ARES listed beside Quantum and the Saturn controller;
    the alphanumeric line's Calypso protocol serves Quantum and ARES.
  - Daktronics ED-12156 Rev 14 (SW-2000 series): protocol 1 is "Omega Ares 21 or Quantum";
    drawing A-131037 riser with Ares or OSM6; A-118397 Ares LED driver address configuration.
  - Quantum-Swimming manual 3480.509.02: DH_LSTFILES reads the ARES file type; SCB Swiss Timing
    Alpha serves Galactica and IRIS; SCB ERTD.
  - Splash: brochure in an August 2007 archive lists Omega ARES21; release notes build 2007.49
    (10 September 2007) add sending event summary and medals to ARES 21; build 4743 (18 September
    2009) adds summary support needing ARES software 2.24d or later; swimoff fixes in 2009; FAQ
    (October 2011) lists ARES 21 as bidirectional; Swim Wiki release notes, version 11.40736
    (2 January 2016) era, fix for reading finals from ARES 21.
  - The 1984 Swimming World "Ares" hits are OCR of "Pan-Ams"; unrelated.

Web, read October 2026:
  - Swiss Timing, Innovation milestones (swisstiming.com/company/innovation-milestones/): 1995
    entry for ARES, glossed both as Automatic Recording Evaluation System and as Advanced Results
    Entry Station; described as joining timing with information technology.
  - Swatch Group release, 5 August 2005: Omega Electronics' sports business merged into Swiss
    Timing's, staff transferred. Explains the 2002 to 2008 change of branding.
  - Hy-Tek support, Interfacing with the Ares 21; Hy-Tek MM6 and MM8 guides, Omega OSM 6 or
    ARES 21: two modes; bi-directional needs ARES 2.14 or later; 9600 8N1 bi-directional, 9600
    7E1 OSM6 (some units 8N1); null modem between the two PCs or the ARES "GP RS422 port" through
    an RS232-RS422 converter for long runs; Download Events to Ares; Get Times by event and heat;
    Race # by the timer's own race number, which resets to 1 at power-on.
  - Daktronics KB DD3844000: SW-2006 Event/Heat driver at address 11 for ARES 21, 18 for Quantum.
  - MSECM (msecm.at) offers ARES 21 or OSM-6 systems for hire, with a second ARES as backup.

Discrepancies flagged in the text: 1995 (Swiss Timing) and the two acronym expansions; GP port
RS485 (Swiss Timing) against RS422 (Hy-Tek); MTL / MTS / MTO for the judging console on the OMT
channel; 3330.900.BT against 3330.901.

Dead ends: a UK reseller page (swimtiming.co.uk/timingares21.html) is indexed by search engines
as saying ARES 21 was introduced at the 1996 Atlanta Games, but the domain no longer resolves and
the page could not be read or archived, so the claim is not used. No Olympic official report
or Omega release naming ARES at a specific Games was found. Swiss Timing's datasheet says the
concept is covered by international patents; a Google Patents search did not identify them. No
source explains the "21". IRIS (a Swiss Timing alphanumeric board in the Quantum manual) is not
tied to ARES by any source.

Still to research: the patents; Olympic use; the ARES judging console (MTL/MTS/MTO); when Swiss
Timing stopped selling ARES; the SCB and GP protocol documents once offered for download.
-->

ARES 21 is a swim timing system made by Omega Electronics and, from 2005, by
[Swiss Timing](../../../vendors/swiss-timing.md). It has two parts: the IF-ARES, an interface box
on deck that time-stamps every contact from the pool, and a PC running the ARES Swimming program,
which receives those contacts over an RS-232 cable and does all of the race processing.[^ares][^ds]
Swiss Timing dates ARES to 1995.[^milestones] It was succeeded by
[Quantum Aquatics](quantum.md), which keeps the same split between box and computer.[^sw]

## Models and naming

This section covers the names used for the system and its parts.

ARES is an acronym. The 2002 manual spells it out as Advanced Result Entry Station; Swiss
Timing's company history gives both "Advanced Results Entry Station" and "Automatic Recording
Evaluation System".[^ares02][^milestones] Neither the manuals nor Swiss Timing's history
explain the number 21.

The documents use several names for the parts. ARES 21 is the system and, on the datasheets, the
interface box itself, article number `3330.900`. The manuals call the same box the IF-ARES and
call the PC program ARES Swimming (also ARES-Swimming).[^ares][^ds] The box runs a sport module
that the PC loads into it at start-up; swimming is one module, and Swiss Timing sold separate
programs for diving and synchronized diving, synchronized swimming and water polo, plus a suite
containing all of them.[^ares][^ds]

The 2002 edition of the manual is branded "a product of Omega Electronics, Switzerland". In
August 2005 the Swatch Group moved Omega Electronics' sports business into Swiss Timing, and the
2008 edition carries Swiss Timing's name with otherwise the same chapters.[^ares02][^swatch05][^ares]

## Role in the timing system

This section places ARES 21 in a swimming installation; the shared background on timing consoles
is on the [timers overview](index.md).

The IF-ARES sits between the pool and the computer. Each lane's touchpad, relay take-off
platform and backup pushbutton connect to a lane module on a harness, and up to two harnesses
plug into the box, one at each end of the pool. A start system such as the
[StartTime II](../starter/starttime-ii.md) feeds the start input.[^ares][^ds][^st2] The box
records each contact with a code for its source and holds it in an internal buffer; result
lists, records, printouts and scoreboard pages are all produced on the PC.[^ds]

Swiss Timing gives two consequences of that design. Because the PC keeps every race on its hard
disk, earlier races can be recalled, reprinted or sent to the scoreboard again. Because the box
buffers its data, timing continues while the PC is down and the data is processed once it is
back.[^ds]

## History and predecessors

This section traces ARES 21 from the Omega console before it to the Quantum system after it.

Omega's earlier swimming console was the [OSM6](osm6.md), a self-contained briefcase unit with
its own keyboard, display and printer. ARES moved the processing from the console to a PC. It can also
imitate the OSM6's one-way serial results output, and Hy-Tek's software reads an ARES in that
mode through the same interface it uses for the OSM6.[^ares][^ds][^hytek]

Swiss Timing's history places ARES in 1995 and describes it as the point where its timing met
information technology.[^milestones] The swimming manual appeared in May 2002 under the Omega
Electronics name and again under Swiss Timing's in April 2008; both editions describe ARES
Swimming 2.04.[^ares02][^ares] A Swiss Timing notice of October 2001 explains how
ARES measures relay take-overs and records that LEN approved the method in 1995 and FINA on
4 May 1998.[^relay]

Meet-management programs kept supporting ARES after Quantum arrived. Hy-Tek Meet Manager
offers two ARES interfaces, and Splash Meet Manager added functions for ARES in 2007 and 2009 and
was still fixing its ARES interface in 2016.[^hytek][^ssrel][^relnotes] A 2016 setup guide from
Central Victoria Swimming, an Australian district association, describes linking a Meet Manager
computer to an ARES computer, which places the system in use there that year.[^cvs]

Quantum's manuals begin in 2012. The Quantum software still reads the ARES set of "Lst" text
files for data handling, and later Swiss Timing starters and scoreboards name ARES beside Quantum
as a compatible timer.[^sw][^st4][^calypso]

## Design and hardware

This section describes the IF-ARES interface box.

The IF-ARES is a portable box measuring 410 × 285 × 80 mm and weighing 2.8 kg, which a
Central Victoria Swimming guide describes as flat and red.[^ds][^cvs] A red LED on the front blinks while the
swimming module is running.[^ares] The box keeps a time base of 16 MHz and counts to 23:59:59.99
before starting over, at a resolution of whole seconds down to thousandths.[^ds]

It runs from an external 12 V battery pack rather than from the mains. Swiss Timing presents
this as a security feature: with a notebook PC and a battery-powered printer, a meet can carry
on through a power cut or be run from the poolside entirely.[^ds] The Corgémont datasheet lists
a single and a dual power supply, the dual one for an ARES 21 with a data switcher.[^ds]

The datasheets number ten connectors on the panel:[^ds][^dsuk]

| Connector | Use |
|---|---|
| HARNESS 1/2 | Swimming timing lines, one harness per input |
| LINE 1/2/3 | Serial inputs for diving and synchronized swimming |
| SCB | Scoreboard output |
| PC | Link to the computer, RS-232 |
| PRN | Printer output, RS-232 |
| GP | Data handling, RS485 |
| OMT | Channel for an Omega judging console |
| SYNC | Time synchronization input |
| START | Start impulse input and READY lamp output |
| MAIN/BU | Main and backup 12 V supply |

The two datasheet editions disagree on the console that the OMT channel serves: the Corgémont
edition calls it an Omega MTL, while the UK edition calls the channel MTS and the console MTO in
its power table.[^ds][^dsuk] The diving and judging hardware is covered on the
[judging terminals](../../diving/judging-terminals.md) page.

A "protocol printer" can be connected straight to the box. It prints every event the box
records as it happens, such as lane and time in swimming or judge and score in
diving.[^ds][^ares] The Swiss Timing datasheet also says that international patents cover the
ARES concept, without naming them.[^ds]

## Connectivity

This section covers the box's links to the harness, the starter, the scoreboard and other
computers.

### Harness and starter

The pool-configuration screen tells the program which harnesses are connected, on which side of
the pool, which one is on the near-end input HA1, and which end is the finish. Two more settings
map the order of the lane modules along the harness to the lane numbers on the blocks, so a
ten-lane harness can serve a pool run as eight central lanes. Presets cover eight lanes on an
eight-lane harness and eight lanes on a ten-lane harness.[^ares]

On a Swiss Timing interface each lane has three contacts: touchpad, relay platform and backup
button. The
start contact can be set as normally open or normally closed, closed being standard for Swiss
Timing start systems.[^ares] A StartTime II or III connected to the box lights its green READY
lamp only once the ARES has been cleared for a start, and can be set to refuse a start before
that.[^st2][^st3]

### Scoreboard

The SCB port always drives a 20 mA current loop, and can drive its RS485 pins as well.[^ares]
The program has two scoreboard types:

- [Galactica](../../common/scoreboard/galactica.md), Swiss Timing's alphanumeric board, which also takes start lists sent from the
  record-output dialog in a mode called "GALACTICA Startlist".[^ares]
- [ERTD](../../../software/ertd.md), written for Daktronics boards controlled by Daktronics'
  [Venus](../../../software/venus.md) software, which receive
  each heat's start list when it is called up.[^ares]

In [UNT4](../../common/scoreboard/unt4.md) modes an extra figure, such as a team score, can go on a twelfth line.[^ares] The
scoreboard can follow the race, show the results page by page with a hold time, show the time
of day, or freeze the last result between events.[^ares] A separate record-output function
sends record and split comparisons (ahead of the start and of the finish, and after each
intermediate) to a scoreboard or a television character generator; inputs on the box can
trigger its Clear and Manual commands.[^ares]

Daktronics boards also accept its output. The SW-2000 manual gives one protocol setting
for an "Omega Ares 21 or Quantum" and an address-configuration drawing for ARES, and a Daktronics
support article sets the SW-2006 event and heat driver to address 11 for ARES 21 and 18 for
Quantum.[^dak][^dakkb] Swiss Timing's [Calypso](../../common/scoreboard/calypso.md) manuals
list ARES as a compatible source.[^calypso]

### Data handling

From ARES Swimming 2.15, a meet-management computer can connect in either of two ways:[^ares]

- To the ARES PC's second serial port, by a null modem cable or a three-wire cable.
- To the GP port on the IF-ARES itself, through an RS485 to RS-232 converter.

The manual gives the GP port as RS485, while Hy-Tek's guides describe it as an RS422 port that
needs an RS-232 to RS422 converter and recommend it only for long cable runs.[^ares][^hytek]

The link runs in one of two modes. OSM6 mode copies the one-way output of the older OSM6 at 9600
baud, 7 data bits, even parity, 1 stop bit. Bi-directional mode runs at 9600 baud, 8 data bits,
no parity, 1 stop bit.[^ares] Hy-Tek adds that some ARES units in OSM6 mode also need the 8N1
setting.[^hytek] Swiss Timing offered the scoreboard and GP protocols, and new sport modules for
the box, as free downloads.[^ares]

## Software and operation

This section summarizes how a session is run in ARES Swimming.

### Setting up

The manual advises a new data folder for each day of competition, so that a day's results can be
backed up by copying one folder. A new folder takes its tables and settings from the program's
default folder, and can copy the competitor and record tables from the previous day.[^ares]

The box should be synchronized every time it is switched on, because start impulses are stored
as time of day and a backup system has to share the same clock. It can be set directly from the
PC, on the next start impulse, or on an impulse at the SYNC input, and only once per power-on;
an unsynchronized box sets itself to 0:00 at the first start.[^ares] A test window then shows
each lane number in large figures as its contact is pressed, shading the window's edges to show
which end of the pool it came from, so two people can check every contact before the
session.[^ares] The harness can also be switched off in software, so that scoreboard and data
handling links can be tested while swimmers warm up.[^ares]

Program texts can be shown in English, French, German, Italian or Spanish, and the
competition-definition texts and on-screen messages can be edited in plain text files.[^ares]

### Running a race

Heats are grouped into competitions. Each competition carries an event number and round, which
cannot be changed once it is saved, and a length, style and category from which the program works out
how many laps to expect and which records apply. A scoreboard title line can pull in the event number, round, heat,
category, length and style automatically.[^ares] Start lists are built from a competitor table,
in which a bib field can hold the number assigned by an outside results system.[^ares]

The race dialog shows each lane's times, laps completed and arming state. With two harnesses it
shows both ends, and the operator switches between them. Lanes arm themselves after an arming
delay, and the operator can also force a lane on or off. There are two delays: the one after the
start should be just under the fastest possible swim to the far end, and the one during the race
just under the fastest possible swim there and back.[^ares] A missing
touch can be flagged by a blinking time. The operator can add or remove a lap, enter a finish
time, or take the backup time for a lane, and can simulate a start or a touch from the
keyboard.[^ares] If the wrong heat was connected when the start went off, the race can be
recovered from the events list, and results can be copied from one heat to another.[^ares]

The events dialog lists every time received, marking whether it came from a touchpad, a button
or a take-off, and whether it was valid, invalidated or entered by hand. A received time cannot be
altered, only replaced by validating another or adding a new one.[^ares]

### Backup times and relays

With three backup buttons in a lane the middle time is the official backup, which the manual
attributes to FINA rules. With a Daktronics interface, two buttons give their average and a
single button gives its own time.[^ares]

For relays, the 2001 Swiss Timing notice describes ARES as storing every touchpad and block
impulse. When a swimmer touches, it looks for the last block impulse within 2 seconds either side
of the touch and reports the difference 2 seconds after the touch, with a minus sign when the
next swimmer left early. The figure is the net take-over time, with no adjustment for the 0.03 s
allowance.[^relay] The allowance itself is covered on the
[relay take-off platforms overview](../relay-judging/index.md).

### Results and records

Records are kept at three levels, labelled for example world, European and national, and the
labels can be renamed. The program compares each winner's time with all three, marks a new
record on the result, and offers to update the table; record split times are kept for comparison
displays.[^ares]

Pressing End of race sends the result to whichever of these outputs is selected, normally
only one:[^ares]

- an HTML page through the PC's web browser, or a plain text file, with or without a preview;
- a text file in the data folder named from the event, round and heat (`sEEERRHH.txt`);
- the [ARES-Print](../../../software/ares-print.md) program, the default, over a DDE link;
- the [ARES online printer](ares-online-printer.md) connected to the box;
- a line added to a results table file for import into a database.

## Meet-management software

This section covers the two meet-management programs documented with ARES 21.

[Hy-Tek Meet Manager](../../../software/hy-tek-meet-manager.md) offers an "Omega OSM6/ARES21"
interface, in which the timer only sends, and an "Omega ARES21 Bi-Directional" interface, which
requires ARES software 2.14 or later.[^hytek][^hytekkb] In bi-directional mode Meet Manager tests
the link when the port is opened, can send the meet's events to ARES, and fetches each heat's
times on request, either by event and heat or by the timer's own race number, which starts again
at 1 whenever the timer is switched on.[^hytekkb] On the ARES side, a Meet Manager computer on
the GP port can supply start lists, and ARES can pass Meet Manager's start lists, finish lists
and team scores to the scoreboard in ERTD mode.[^ares]

Central Victoria Swimming's 2016 guide runs the ARES PC on one serial port to the timer and
links it to the Meet Manager PC by a null modem cable and USB-serial adapters. It notes that Meet
Manager sometimes failed to pick up times for events longer than 100 m, and gives a workaround:
enter such events in ARES as 50 m races, since only the event number and lane times
transfer.[^cvs]

[Splash Meet Manager](../../../software/splash-meet-manager.md) lists Omega ARES 21 among its
supported timers in its 2010 getting-started guide and its 2018 brochure. Its 2011 FAQ describes
the ARES 21 link as bidirectional: the operator selects a heat and Splash asks the timer for that
heat's results.[^howto][^brochure][^faq] Splash added
sending event summaries and medals to ARES in September 2007, required ARES software 2.24d or
later for its summary function from September 2009, and fixed reading of finals from ARES 21 in
January 2016.[^ssrel][^relnotes]

## Compared with Quantum

This section sets out what Quantum Aquatics kept from ARES 21 and what it changed.

Both systems divide the work the same way: a box on deck time-stamps contacts and a PC program
processes them. Both map harness modules to lanes on a pool-configuration screen and synchronize
the box at the start of a session.[^ares][^sw] Quantum's data handling still includes the ARES
file type and an OSM6 output.[^sw] Its scoreboard settings keep a Swiss Timing alphanumeric
feed for Galactica boards and an ERTD feed, and add a numeric Calypso output.[^sw] Daktronics drives both from one protocol setting, but its event and heat driver needs a
different address for each.[^dak][^dakkb]

## Specifications

This section lists the interface box's published specifications.

| Specification | Value |
|---|---|
| Article number | `3330.900` |
| Power | External battery, 10.8–14.4 V, nickel-cadmium or lead-acid |
| Current draw | 400 mA typical for the interface; 200 mA per swimming harness; 100 mA per judging console |
| Operating temperature | 0–45 °C |
| Relative humidity | 20–80%, non-condensing |
| Time capacity | 23:59:59.99, repeating |
| Resolution | 1, 1/10, 1/100 or 1/1000 s |
| Time base | 16 MHz; ±1 ppm over 0–45 °C; ageing ±5 ppm |
| Dimensions | 410 × 285 × 80 mm |
| Weight | 2.8 kg |
| PC link | RS-232 |
| Data handling | GP port (RS485 per Swiss Timing, RS422 per Hy-Tek) or the PC's second serial port; 9600 7E1 (OSM6 mode) or 9600 8N1 (bi-directional) |
| Scoreboard output | 20 mA current loop, optional RS485 |
| Approvals | CE; RoHS (Corgémont edition) |

Sources: Swiss Timing datasheets and manual.[^ds][^dsuk][^ares]

## Part numbers and accessories

This section lists the options on the two datasheet editions.

| Part number | Item |
|---|---|
| `3330.900` | ARES 21 interface |
| `3330.900.BT` | ARES with aquatics interface and Bluetooth (Corgémont edition) |
| `3330.901` | ARES with aquatics interface and Bluetooth (UK edition) |
| `3330.621` | Single power supply |
| `3330.624` | Dual power supply for ARES 21 and switcher (Corgémont edition only) |
| `3330.701` | [ARES data switcher](ares-data-switcher.md) |
| `3397.902` | Laptop computer for ARES |
| `3330.613` | Transport case |
| `3330.630` | [ARES online printer](ares-online-printer.md), with integrated battery (`3330.630.US` in the UK edition) |
| `3330.661` | ARES online printer, 115/230 V |
| `3330.633` | [ARES diving](../../../software/ares-diving.md) and synchronized diving software |
| `3330.634` | [ARES synchronized swimming](../../../software/ares-synchronized-swimming.md) software |
| `3330.635` | [ARES water polo](../../../software/ares-water-polo.md) software |
| `3330.636` | All ARES aquatics software |
| `3330.650` | Scoreboard cable, 20 mA and RS485 |
| `3330.651` | ARES double start cable |

Sources: Swiss Timing datasheets.[^ds][^dsuk]

## See also

- [Quantum Aquatics](quantum.md): the Swiss Timing system that replaced it
- [OSM6](osm6.md): the Omega console before it, whose output format it kept
- [StartTime II](../starter/starttime-ii.md) and [StartTime III](../starter/starttime-iii.md): start systems documented with it
- [Galactica](../../common/scoreboard/galactica.md) and [Calypso](../../common/scoreboard/calypso.md): Swiss Timing scoreboards it drives
- [ERTD](../../../software/ertd.md) and [Venus](../../../software/venus.md): the Daktronics scoreboard protocol and software
- [ARES-Print](../../../software/ares-print.md): the results-printing program
- [Timers](index.md): the timers overview
- [Swiss Timing](../../../vendors/swiss-timing.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^ares]: Swiss Timing, Concept ARES 21 Swimming User's Manual (3330.560.02, version 3.30, April 2008).
[^ares02]: Omega Electronics, ARES Swimming user's manual (3330-560-02, version 3.1, May 2002).
[^ds]: [Swiss Timing, ARES 21 Timing Device datasheet](http://www.hertsssa.org.uk/uploads/5/2/5/3/5253152/ares_21_timing_device_3300.525.02.ra.pdf) (3330.525.02.RA).
[^dsuk]: [Swiss Timing, Ares 21 timing device datasheet, UK edition](http://www.hertsssa.org.uk/uploads/5/2/5/3/5253152/ares_21_connectors.pdf) (3300.525.02C).
[^milestones]: [Swiss Timing, Innovation milestones](https://www.swisstiming.com/company/innovation-milestones/) (1995, ARES).
[^swatch05]: [Swatch Group, Enhanced synergies in the non-watchmaking sector](https://www.swatchgroup.com/en/services/archive/2005/swatch-group-enhanced-synergies-non-watchmaking-sector) (5 August 2005).
[^relay]: [Swiss Timing, Relay break detection in swimming](https://aquaticsgb.com/documents/350/Swiss_Timing_Relay_Break_Detection_Communication.pdf) (official communication 307.225, October 2001).
[^st2]: Swiss Timing, StartTime II User's Manual (document 3399.502.02, Version 2.1, July 2007).
[^st3]: Swiss Timing, StartTime III User's Manual (document 3399.504.02).
[^st4]: [Swiss Timing, StartTime IV E-Gun User's Manual (3481.501.02)](https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3481.501.02.pdf).
[^calypso]: Swiss Timing, Calypso 8-digit LED Scoreboard User's Manual (3403.500, version 2.2, August 2016).
[^sw]: Swiss Timing, Quantum-Swimming User's Manual (3480.509.02, version 1.4, October 2019).
[^dak]: Daktronics, SW-2000 Series 10" Numeric Digit Display Manual (ED-12156, Rev 14, May 2015).
[^dakkb]: [Daktronics, Quantum timer not showing Event/Heat data on Address 11 (KB DD3844000)](https://www.daktronics.com/en-us/support/kb/DD3844000).
[^hytek]: [Hy-Tek, Meet Manager 8 guide, Omega OSM 6 or ARES 21](https://hytek.active.com/user_guides_html/swmm8/omegaosm6.htm).
[^hytekkb]: [Hy-Tek, Interfacing with the Ares 21](https://support.activenetwork.com/hytekswimming/articles/en_US/Article/Interface-with-Ares-21).
[^cvs]: [Central Victoria Swimming, Setting up the computers to run a swim meet](https://www.cvs.org.au/Resources/MM-ARES%20Link.pdf) (July 2016).
[^howto]: [Splash Software, Meet Manager 11: How to Start](https://wiki.swimrankings.net/images/8/83/Meet_Manager_How-to-start.pdf) (GeoLogix AG, May 2010).
[^brochure]: [Splash Software, Splash Meet Manager](https://www.swimrankings.net/files/MeetManager.pdf) (product brochure, April 2018).
[^faq]: [Splash Software, Splash Meet Manager 11 FAQ](https://wiki.swimrankings.net/images/4/45/Meet_Manager_FAQ.pdf) (October 2011).
[^ssrel]: [Splash Software, Release notes](https://web.archive.org/web/20100623045701/http://www.splash-software.ch/index.php?nav=,home,C) (archived June 2010).
[^relnotes]: [Swim Wiki, Meet Manager: Release Notes](https://wiki.swimrankings.net/index.php/Meet_Manager:Release_Notes).

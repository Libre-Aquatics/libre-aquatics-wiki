---
title: Swiss Timing Quantum Aquatics
description: >-
  Quantum Aquatics is the Swiss Timing swim timer sold under the Omega name since about 2012,
  an interface box that logs every pool contact and hands race processing to a PC running
  Swiss Timing's Quantum Swimming software.
updated: 2026-10-07
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Quantum Aquatics
infobox:
  - label: Manufacturer
    value: Swiss Timing
  - label: Part number
    value: '`3480.911`, `3480.911.IS` (Primary); `3480.912` (Primary & Secondary)'
  - label: Type
    value: Swim timing console
  - label: Lanes
    value: Up to 10 per pool end, lanes numbered 0–9
  - label: Connection
    value: USB to the PC; harness bus to mobile harness or ODB10-SW; RS422 scoreboard and data ports
  - label: Power
    value: External 9–18 V DC battery, two inputs
  - label: Introduced
    value: About 2012
  - label: Status
    value: Current
  - label: Manual
    value: Quantum-Swimming User's Manual (3480.509.02, version 1.4, October 2019)
---

<!--
Research notes, Quantum Aquatics. Stub created while building out Splash Meet Manager; built
out October 2026.

Documents held and read in full (sources/vendors/swiss-timing/):
  - timers-consoles/...-quantum-concept-3480.508.02: Quantum Concept, Swimming User's Manual,
    version 1.4, July 2015. Version history starts 1 May 2012 (v1.0); May 2014 removed
    synchronised swimming, which moved into the general aquatics concept. Gives the two
    versions; the per-module contact counts (a Primary lane module carries five contacts,
    three buttons plus the pad and the block's relay break detection; a P&S module ten); the
    characteristics (capacity 23:59:59.99 repeating; resolution 1, 1/10 or 1/100 s,
    sampling 1/10,000; ageing +/-4 ppm over 10 years; stability +/-0.1 ppm 0-45 C; supply
    9-18 V DC from NiCd, lead-acid or other; 0.5 A Primary, 1.1 A Primary & Secondary;
    0-60 C; 20-80 % RH; CE); maintenance (sunshade, splash cover, clean after each meet,
    4-year calibration certificate); connections (two DC inputs, a battery may be swapped
    mid-race; USB with cable 9051.1316; scoreboard on SERIAL 1-3 (P&S) or 1-2 (P); data
    handling on SERIAL 1-4 or 1-2; serial printer; START to a StartTime 3481.900 or 901, START1
    finish end, START2 other end; harness to HA1/HA2 with cable 1892.025, extensions
    1892.050 and 1892.100, terminator 3480.770); connector pinouts (DC DIN 4-pin; printer
    RS232 DB9; HA Tuchel 7-pin carrying PRY and SDY +12 V and data pairs; START Tuchel 4-pin
    ready and start pairs; IN3-4 and OUT1-2 banana; SERIAL RS422 DB9 with +12 V on pin 1;
    START OUT 1-2); Calypso cabling (1906.050 or 1906.100 plus adapter 3403.611) and Piccolo
    (1906.050/.100); eight cabling levels (mobile or fixed; finish PRY; finish PRY with
    25/50 m inter PRY; finish PRY and SDY; both ends PRY and SDY).
  - timers-consoles/...-quantum-sw-user-manual-3480.509.02: Quantum-Swimming User's Manual,
    version 1.4, October 2019, 45 pp. Software versions named in its history: 1.6.6, 1.6.7,
    1.6.9, 1.6.10. Install: .NET Framework, "DRC Base" libraries, Quantum Swimming, USB driver.
    USB dongle licence; a 3-day code from online-dongleactivation.sportresult.com if lost.
    Home page green/red timer link. Timer sync from the PC clock, a typed time, or a start
    pulse (the last preferred for P&S; the StartTime ready lamp relights 2 s after the start as a check). Synchro Out
    pulse on P&S START OUT. Meet = folder; one meet per session recommended. Settings:
    reaction window (typ. 2 s), relay window (typ. 1 s), split hold. I/Os: scoreboards
    SCB_SwissTiming Alpha (12 x 32 characters, Swiss Timing custom protocol, IRIS and
    Galactica boards), SCB ERTD (12 x 32, 100-character line offsets), SCB Calypso (numeric),
    SCB Finish Light (service only); defaults Serial 1 at 9600 8N1. Data handling:
    DH_LSTFILES (the ARES Lst*.txt set: styles, lengths, categories, rounds, status, races,
    records, competitors, start lists; results to LstRslt.txt; typically produced by
    Sportsystems, Hy-Tek or a spreadsheet), DH_OSM6 (one-way serial results, used by
    Sportsystems with Lst files), DH_HYTEK (shared folder; Hy-Tek writes quantum.sch and
    startlist.slx, Quantum writes .qaq), DH_SPLASH (splash_send.txt / splash_receive.txt).
    Five saved I/O profiles. Pool config: 25 or 50 m (list editable), finish side, harness
    side and connector, devices per module (touchpad, platform, up to three buttons), lane
    count and module-to-lane mapping (e.g. modules 3 and 5 as lanes 1 and 2). Pool test
    with contact counters. Timing: arming delays, reaction and relay windows, no-touch
    warning, beeps, auto-unused lanes, record table update. Printers: PC/XPS and serial.
    Running: start inputs shown green/red; arming the start lights the starter's ready lamp
    and shows 0.00; StartTime gives a false-start tone if a start is fired unarmed (can be
    overridden); "Attrib last start" recovers an unarmed start time; harness disconnect;
    lane menu (lap +/-, arm, backup time, DSQ/DNS/DNF); backup delta flagged at 200 ms;
    heat status letters F I O S U W; keyboard shortcuts. Maintenance: 4-year calibration,
    return to Swiss Timing if the federation asks; grease deck plates weekly.
  - timers-consoles/...-harness-user-manual-3480.500.02: Quantum Mobile Harness, v1.1,
    August 2019. Sets 3480.950/958/956 (Primary 10/8/6 lanes), 3480.960/968/966 (P&S),
    spares 3480.75X/76X; programmer sets 3480.921/922. Lanes 0-9 printed on the case. Banana
    colours: yellow OCP5 touchpad, white OSB11 block, red OIT pushbutton. Cables 1892.025
    (25 m), 1892.050 (50 m drum), 1892.075 (75 m drum). Up to 10 modules per pool end,
    terminator 3480.770. Module 105 x 105 x 36 mm plus 3 m cable; 0.760 kg (P), 0.865 kg (P&S).
    Working 0-45 C.
  - timers-consoles/...-programmer-user-manual-3480.501.02: Programmer AQ, v1.1 (v1.0
    10 January 2012, v1.1 8 January 2019). RFID; reads/writes lane numbers in harness modules
    and ODB10-SW circuits within 1 cm; 2 AA; 168 x 74.4 x 35 mm, 0.150 kg (0.200 with cells).
  - accessories/...-odb10-user-manual-3494.501.02: ODB10-SW, v1.7, December 2018: fixed
    wall-mounted distribution box in the timing room, Primary sets 3494.716/718/710 (6/8/10
    lanes), P&S 3494.728/720; harness circuit 3494.600, programmer 3494.901; deck plate to
    box 100 m max, box to Quantum 200 m max; 269 x 540 x 130 mm, 3.35 kg (P, 10 lanes),
    3.69 kg (P&S).
  - touchpads-deckplates/...-aqu-concept-0017.509.02: Swimming Concept, Quantum / OSB with
    footrest, v4.9 January 2017; Quantum enters this document at v4.0, 15 July 2013. In-deck
    versus mobile cabling; FINA facilities rules cited for clear starts; OCP5, OSB11/12/14,
    deck plates 3493.603, ODB10-SW, Calypso and Piccolo dimensions; display cabling rules.
  - The StartTime IV (3481.501.02) and V (3481.560.02) manuals pair the starter with
    Quantum, ARES or Chronos; the Calypso manuals (3403.500, 3403.507) list Quantum, the
    Saturn controller and ARES.
  - timers-consoles/swiss-timing-ares-21-concept-swimming-user-manual-3330.560.02 (filed
    October 2026, from a club website): ARES 21 Swimming, v3.30, April 2008. See ares-21.md.
  - The six PDFs at the root of sources/ named 3480.*/3481.* are byte-identical copies of
    files already filed here; nothing new in them.

Datasheet (cited as before): DOCM_AQ_Quantum_1015_EN, October 2015. Differs from the 2015
concept manual on supply (10-18 V against 9-18 V), Primary current (0.55 A against 0.5 A),
humidity (0-94 % against 20-80 %) and adds harness-loaded currents (1.00 A / 2.0 A with 24
modules), dual power supply 3480.932, and options (laptop Quantum 3397.910, cases
3480.925/926, printer 3480.920, Bluetooth RS422 adapter 3440.708, thermal printer 3330.661,
double-start cable 3330.651). Cable discrepancy: concept 1892.100 (100 m) against harness
manual 1892.075 (75 m).

Independent sources: Hy-Tek Meet Manager 7 guide, "Omega Quantum-AQ" interface (shared folder;
.qaq results; start list quantum.slx; records quantum.rec from MM 7.0), which differs from
Swiss Timing's file names (quantum.sch, startlist.slx). Hy-Tek's vendor list names Omega OSM 6,
ARES 21, Quantum-AQ and Power Time. Swim Wiki: Splash interface from build 20948 with the DH
Splash protocol; release notes: Interface 2.0 over UDP/TCP (January 2021), compatibility fix
(April 2021), V2 fix (January 2023), Splash V2 needing Quantum 6.1.19 or later (August 2024).
Daktronics KB DD2090313: RTOPs do not work with Quantum. Swiss Timing milestones page: the
Omega sport department was folded into Swiss Timing in 2005-2006.

Not found: a press announcement or launch date (the 2012 manual dates are the bound); a
patent; prices; which Olympic Games used Quantum for swimming (Swiss Timing's datasheet
claims Olympic and world championship use without naming events). A Swimming World item on
Swiss Timing and NCAA Division I could not be fetched.
-->

Quantum Aquatics is a swim timing console made by [Swiss Timing](../../../vendors/swiss-timing.md)
and sold under the Omega name. It is an interface box that time-stamps every contact from the
pool and passes the record to a computer, which runs Swiss Timing's Quantum Swimming software
and does all the race processing.[^concept][^sw] It comes as a single Primary timer or as a
Primary & Secondary pair of complete timers with a data switch between them.[^concept][^ds]
Its manuals begin in 2012, and it took over from Swiss Timing's earlier
[ARES 21](ares-21.md) system.[^concept][^programmer][^ares]

## Role in the timing system

This section places Quantum in an Omega swimming installation; the shared background on timing
consoles is on the [timers overview](index.md).

The console sits between the pool and the computers. Touchpads, starting blocks with relay
take-off detection and backup pushbuttons connect lane by lane to a harness, and the harness
connects to the console. A StartTime starter supplies the start signal, and serial ports feed
scoreboards and a meet-management computer.[^concept][^swconcept] Every contact reaches the
console with a code identifying where it came from. The console keeps the time base and
buffers the events; result lists, records and scoreboard pages are produced on the PC, so the
number of stored races depends on the PC's disk.[^concept]

Swiss Timing's datasheet presents Quantum as fit for school meets and for Olympic and world
championship competition alike.[^ds]

## History and predecessors

This section traces Quantum from the ARES 21 system it replaced.

Before Quantum, Swiss Timing's swimming system was ARES 21: an IF-ARES interface box linked by
an RS-232 cable to a PC running ARES Swimming, documented in a 2008 manual.[^ares] Quantum keeps
the same division of work. Harness modules are mapped to lanes in a pool-configuration screen,
the clock is synchronised at the start of a session, and data handling uses the same set of
"Lst" text files, which the Quantum manual calls the ARES file type.[^ares][^sw]

The Quantum Concept manual's first version is dated 1 May 2012, and the RFID programmer for
Quantum's harness modules dates from January 2012.[^concept][^programmer] Swiss Timing's
general swimming installation guide added Quantum in July 2013.[^swconcept]

The 2019 software manual covers versions 1.6.6 to 1.6.10.[^sw]
In January 2021 Splash Meet Manager added a second Quantum interface that exchanges data over
UDP and TCP instead of shared files. By August 2024 Splash's newest features required Quantum
software 6.1.19 or later.[^relnotes]

## Design and hardware

This section describes the console's two versions, inputs and outputs.

The Primary console contains one timing system. Each lane module sends it five contacts: the
touchpad, the starting block's relay break detection and three backup buttons.[^concept] The
Primary & Secondary console contains two complete timers in one case, each with its own power
input and printer port. A data switch selects which timer's results go out, and each lane
module carries ten contacts, the same five for each system.[^concept] Swiss Timing lists a
Primary model with an internal power supply (`3480.911.IS`) as well as one without
(`3480.911`).[^ds]

The console runs from an external 12 V battery or power pack. It has two DC inputs, so one
battery can be changed without stopping, even during a race.[^concept] With battery-powered
PCs and printer, Swiss Timing says a meet can continue through a complete mains failure.[^concept]
The console records time to 23:59:59.99 and resolves 1, 1/10 or 1/100 s from a 1/10,000 s
sampling rate.[^concept]

Swiss Timing asks for the console to be shaded from the sun, kept away from splashing at the
blocks, and cleaned and dried after each competition. It ships with a calibration certificate
valid for four years, after which the console goes back to Swiss Timing or a reseller for
recalibration.[^concept][^sw]

## Connectivity

This section covers the pool cabling and the console's data ports.

The pool side connects through one of two cabling schemes:[^concept][^harness][^odb10]

| Scheme | Lane connection | Link to the console |
|---|---|---|
| Mobile | A [Quantum Mobile Harness](quantum-mobile-harness.md) module at each lane, chained module to module, up to ten per pool end, with a terminator on the last | One 25 m cable, extendable to 50 m or more on drums |
| Fixed | In-deck deck plates wired back to an [ODB10-SW](odb10-sw.md) distribution box in the timing room | Up to 100 m from deck plate to box and 200 m from box to console |

Either scheme joins the console at its harness inputs, HA1 for the finish end and HA2 for the
other end. Swiss Timing's cabling diagrams run from one harness on a Primary console to two
harnesses on a Primary & Secondary console.[^concept][^swconcept] Each lane module carries its
lane number, from 0 to 9. Swiss Timing sets the numbers at the factory, and the
[Programmer AQ](programmer-aq.md) rewrites them on site by RFID when a module is
replaced.[^harness][^programmer] The lane sockets are colour-coded: yellow for the
[OCP5](../touchpad/ocp5.md) touchpad, white for the starting block, red for a pushbutton.[^harness]

The start system plugs into the START inputs: START1 at the finish end and START2 at the other
end, for a [StartTime](../starter/starttime-v.md) starter.[^concept][^st5] The console sends the
starter a ready signal when the race is armed.[^sw][^st4]

The console's other ports are:[^concept]

- USB to the PC;
- RS422 serial ports, two on the Primary and four on the Primary & Secondary, for scoreboards
  and data handling;
- a serial printer port per timer;
- banana inputs and outputs, and on the Primary & Secondary model start-pulse outputs.

## Software and operation

This section summarises the Quantum Swimming program that runs the console.

Quantum Swimming is a Windows program installed with Swiss Timing's support libraries and a USB
driver, and licensed by a USB dongle. A race cannot be started without the dongle, but a
three-day code can be requested online if it is lost before a meet.[^sw]

The console's clock is synchronised at the start of each session, from the PC's time, from a
typed time, or from a start pulse. The start pulse is the preferred method when two timers must
agree, and the starter's ready lamp relights two seconds later so the operator can check the
result.[^sw] Each meet is a folder on the PC. Swiss Timing recommends one meet per session,
because the program does not separate the two.[^sw]

Before a meet, the operator configures the pool:[^sw]

- the pool length, 25 or 50 m;
- which side is the finish;
- which harness is on which input;
- what equipment each lane has;
- how harness modules map to lanes, so that, for example, two modules in the centre of a
  ten-lane pool can be run as lanes 1 and 2.

A pool test counts contacts lane by lane so the setup can be checked from the pool side.[^sw]

During a race, the timing window shows each lane's laps, rank, direction and arming state, and
lets the operator add or remove laps, take a backup time, or mark a swimmer as DSQ, DNS or
DNF.[^sw] Reaction-time and relay-exchange windows are set per meet, typically 2 s and 1 s.[^sw]
If a start is fired while the race is not armed, the program keeps its time, and the operator
can attach it to the race afterwards.[^sw] A backup time that differs from the touchpad time by
more than 200 ms is flagged.[^sw] When the result is marked official, the program can print it,
send it to the scoreboard, export it and update the records table.[^sw]

The program drives three kinds of scoreboard output:[^sw][^swconcept]

- Swiss Timing's alphanumeric protocol, for 12-line, 32-character boards;
- the ERTD protocol used by other makers' alphanumeric boards;
- a numeric output for Swiss Timing's [Calypso](../../common/scoreboard/calypso.md) boards.

## Meet-management software

This section covers the four data-handling links in the program and how other software
connects.

| Link | How it works |
|---|---|
| Lst files | Imports the schedule, start lists and records from the ARES-format text files and writes results to another file in the same set[^sw] |
| OSM6 | Sends results one way over a serial port, for data-handling systems that load their schedules from Lst files[^sw] |
| Hy-Tek | Shared folder: Meet Manager writes the schedule and start lists, Quantum writes a `.qaq` result file per race[^sw][^hytek] |
| Splash | Shared folder with a send file and a receive file[^sw][^omega] |

[Hy-Tek Meet Manager](../../../software/hy-tek-meet-manager.md) lists the console as Omega
Quantum-AQ, beside Omega's older OSM 6, ARES 21 and Power Time.[^hytekv] Its guide describes the
same shared folder, with result files ending in `.qaq`.[^hytek] The two vendors name the
start-list files differently. Swiss Timing's manual expects files called `quantum.sch` and
`startlist.slx`, while Hy-Tek's guide writes a start list called `quantum.slx` and, from
Meet Manager 7.0, a records file called `quantum.rec`.[^sw][^hytek]

[Splash Meet Manager](../../../software/splash-meet-manager.md) reads and writes a shared folder
from build 20948, with Quantum set to its Splash protocol.[^omega] In January 2021 Splash added a
second interface over UDP and TCP, and later releases fixed compatibility between the two
protocol versions.[^relnotes]

Daktronics states that its RTOP relay take-off platforms do not work with a Quantum
console.[^dakkb]

## Specifications

This section gives Swiss Timing's figures; the 2015 manual and the 2015 datasheet differ on
three of them.

| Item | Value |
|---|---|
| Time capacity | 23:59:59.99, repeating[^concept] |
| Resolution | 1, 1/10 or 1/100 s; sampling 1/10,000 s[^concept] |
| Ageing | ±4 ppm over 10 years[^concept] |
| Stability | ±0.1 ppm, 0–45 °C[^concept] |
| Supply | External battery, 9–18 V DC (manual) or 10–18 V DC (datasheet)[^concept][^ds] |
| Current | Primary 0.5 A (manual) or 0.55 A (datasheet); Primary & Secondary 1.1 A[^concept][^ds] |
| Current with 24 harness modules | Primary 1.00 A; Primary & Secondary 2.0 A[^ds] |
| Operating temperature | 0–60 °C[^concept] |
| Humidity | 20–80 % (manual) or 0–94 % (datasheet), non-condensing[^concept][^ds] |
| PC link | USB[^concept] |
| Lanes | Ten modules per pool end, numbered 0–9[^harness] |
| Certification | CE[^concept] |

## Part numbers and accessories

This section lists the part numbers in Swiss Timing's documents.

| Part | Number |
|---|---|
| Quantum Primary, without internal power supply | `3480.911`[^ds] |
| Quantum Primary, with internal power supply | `3480.911.IS`[^ds] |
| Quantum Primary & Secondary | `3480.912`[^ds] |
| Power supply, Primary & Secondary | `3480.932`[^ds] |
| Mobile harness sets, Primary, 10, 8 or 6 lanes | `3480.950`, `3480.958`, `3480.956`[^harness] |
| Mobile harness sets, Primary & Secondary, 10, 8 or 6 lanes | `3480.960`, `3480.968`, `3480.966`[^harness] |
| Harness terminator | `3480.770`[^concept][^harness] |
| Harness cable to the console, 25 m | `1892.025`[^concept][^harness] |
| Harness extension cables, 50 m and 75 m on drums (the concept manual lists 50 m and 100 m) | `1892.050`, `1892.075`, `1892.100`[^harness][^concept] |
| USB cable | `9051.1316`[^concept] |
| Programmer sets | `3480.921`, `3480.922`[^programmer] |
| Laptop-compatible Quantum | `3397.910`[^ds] |
| Cases | `3480.925`, `3480.926`[^ds] |
| Battery online printer; thermal printer | `3480.920`; `3330.661`[^ds] |
| Bluetooth RS422 adapter | `3440.708`[^ds] |
| Double-start cable | `3330.651`[^ds] |

## See also

- [ARES 21](ares-21.md): the Swiss Timing system Quantum replaced
- [Quantum Mobile Harness](quantum-mobile-harness.md), [Programmer AQ](programmer-aq.md) and [ODB10-SW](odb10-sw.md): the lane cabling
- [StartTime V](../starter/starttime-v.md): the current Swiss Timing starter
- [OCP5](../touchpad/ocp5.md): the Omega touchpad
- [Calypso](../../common/scoreboard/calypso.md): the Swiss Timing numeric scoreboard
- [Timers](index.md): the timers overview
- [Swiss Timing](../../../vendors/swiss-timing.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^ds]: [Swiss Timing, Quantum Aquatics datasheet](https://www.swisstiming.com/fileadmin/Resources/Data/Datasheets/DOCM_AQ_Quantum_1015_EN.pdf) (Quantum AQ/10-2015).
[^concept]: [Swiss Timing, Quantum Concept Swimming User's Manual (3480.508.02, v1.4, July 2015)](https://web.archive.org/web/20230315150630/https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3480.508.02.pdf).
[^sw]: Swiss Timing, Quantum-Swimming User's Manual (3480.509.02, version 1.4, October 2019).
[^harness]: [Swiss Timing, Quantum Mobile Harness User's Manual (3480.500.02, v1.1, August 2019)](https://web.archive.org/web/20230315150623/https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3480.500.02.pdf).
[^programmer]: [Swiss Timing, Programmer AQ User's Manual (3480.501.02, v1.1, January 2019)](https://web.archive.org/web/20230315150625/https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3480.501.02.pdf).
[^odb10]: [Swiss Timing, ODB10-SW User's Manual (3494.501.02, v1.7, December 2018)](https://web.archive.org/web/20230315150617/https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3494.501.02.pdf).
[^swconcept]: [Swiss Timing, Swimming Concept: Quantum / OSB with footrest (0017.509.02, v4.9, January 2017)](https://web.archive.org/web/20230315150625/https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/0017.509.02.pdf).
[^ares]: Swiss Timing, Concept ARES 21 Swimming User's Manual (3330.560.02, version 3.30, April 2008).
[^st4]: [Swiss Timing, StartTime IV E-Gun User's Manual (3481.501.02)](https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3481.501.02.pdf).
[^st5]: Swiss Timing, StartTime V User's Manual (3481.560.02).
[^hytek]: [Hy-Tek, Meet Manager 7 guide, Omega Quantum-AQ](https://hytek.active.com/user_guides_html/swmm7/omegaquantum-aq.htm).
[^hytekv]: [Hy-Tek, Timing Console Interface Vendor Contacts](https://support.activenetwork.com/hytekswimming/articles/en_US/Article/Timing-Console-Interface-Vendor-Contacts).
[^omega]: [Swim Wiki, Meet Manager: Timing System Omega Quantum Aquatics](https://wiki.swimrankings.net/index.php/Meet_Manager:Timing_System_Omega_Quantum_Aquatics).
[^relnotes]: [Swim Wiki, Meet Manager: Release Notes](https://wiki.swimrankings.net/index.php/Meet_Manager:Release_Notes) (January 2021 to August 2024).
[^dakkb]: [Daktronics, Which RTOPs, starting blocks, and third-party timing systems are compatible (KB DD2090313)](https://www.daktronics.com/en-us/support/kb/DD2090313).

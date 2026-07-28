---
title: Gen7 Serial Timer
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Gen7 Serial Timer
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Part number
    value: '`GEN7-TMR`'
  - label: Type
    value: Swim timing console
  - label: Interface
    value: 'Windows laptop or tablet, over Ethernet'
  - label: Dimensions
    value: 4.90 × 14.23 × 13.07 in (12.5 × 36.1 × 33.2 cm)
  - label: Weight
    value: 11.0 lb (5.0 kg)
  - label: Power
    value: 12 VDC; internal NiMH battery
  - label: Certifications
    value: 'cULus, FCC, RoHS'
  - label: Manual
    value: CTS F1034
    href: >-
      https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Gen7/Gen7SerialTimerUserGuide_F1034.pdf
---

The Gen7 Serial Timer (part number `GEN7-TMR`) is a swimming timing console
made by [Colorado Time Systems](../../../vendors/colorado-time-systems.md)
(CTS). It is the central unit of the company's Gen7 swim-timing platform: it
collects the finish signals from each lane's [touchpad](../touchpad/index.md) and backup pushbuttons, runs
the race clock, and drives the scoreboard. Unlike earlier consoles, the Gen7 timer
has no built-in display or keypad; it is operated from a Windows laptop or tablet
connected over Ethernet.[^f1034][^datasheet][^product]

## Role in the timing system

In a Gen7 installation the timer is the head end that everything on the deck
connects back to. Each lane's touchpad, pushbuttons, and relay-judging platform run
through in-deck plates and cable harnesses to the timer; the starter's console and
speaker also connect to it. The timer measures the elapsed time for every lane and
sends results to the scoreboard. A separate computer running CTS's Gen7 Swimming
software is the operator's interface, and third-party meet-management software
supplies start lists and receives results, but the console does the timing
itself.[^f1034]

Under World Aquatics rules, competition times are recorded to a hundredth of a
second, and championship swimming is timed by fully automatic officiating equipment,
touchpads at both ends of each lane, backed up by pushbuttons, of which this
timer is the central component.[^warules] The Gen7 platform also covers diving and
water polo through other components; this article concerns the swim-timing console.[^datasheet]

"Serial" distinguishes this model from the
[Gen7 Legacy Timer](gen7-legacy.md) (`GEN7-TMR-L`). The Serial timer drives Gen7's
newer connect-hub cabling, while the Legacy timer is built to drive a facility's
existing older multi-pin lane hardware and scoreboards.[^blog]

## Design and hardware

The console is a sealed unit about 4.9 in tall and 14 in wide, weighing 11 lb, with
no screen or buttons other than a power button.[^datasheet] A lighted bar and a row
of indicators on the front convey the timer's state:[^f1034]

| LED pattern | Meaning |
|---|---|
| Blank | Not ready |
| Slow sweep | Booting |
| Pulsing | Ready for a race |
| Fast sweep | Running a race |

Additional front indicators show wired and wireless scoreboard data, network link,
Wi-Fi, USB traffic, timing-event data, charging, and power. A charging light glows
blue while the battery charges and is dark when charging is complete or the unit is
unplugged; the charging circuit lights the indicator red if it detects a battery
fault.[^f1034]

The timer runs from a 12 VDC supply or an internal 7.2 V, 10,000 mAh
nickel-metal-hydride battery. CTS rates that battery for up to about six hours of
normal use on a small (roughly ten-node) in-deck system or cable harnesses, dropping
to about three hours on a large (roughly sixty-node) system.[^f1034] The rear panel carries
connectors for scoreboard data, a CTS expansion port, meet-management, USB,
Ethernet, the start system and its speaker, an in-deck connection, separate on-deck
near-end and far-end connections, and power.[^f1034]

## Connectivity

The Serial timer uses CTS's connect-hub cabling. Connect hubs for
the timer, start system, scoreboard, and bulkhead are uniquely keyed and
colour-coded so each component can only be plugged into the right place, and they
use corrosion-resistant titanium connectors that are wet-pluggable: they purge
water while making the connection, so bulkhead connections no longer have to be kept
dry.[^datasheet] CTS holds a patent on this networked-node approach, in which the
connection points have "spatial awareness" that simplifies configuring the
system.[^patentnode]

Lane signals reach the timer through titanium deckplates (CTS cites a separate
patent for their domed, corrosion-limiting design and integrated starter-light
connection), wired back through near-end and far-end serial harnesses that can be
chained far enough to carry both a primary and a backup harness across 20 lanes.[^datasheet][^f1034]
Connect hubs and plates can be mounted in the deck or in wallplates, and CTS notes
that outdoor floorplates can replace older deck "tombstones."[^datasheet]

The start system connects either directly to the timer (separate cables for the
start signal and the speaker) or through a start node in the wall or deck; the timer
has an integrated start and speaker input.[^f1034] Scoreboard outputs drive LED
numeric and LED video displays.[^datasheet] How meet-management software connects to the
timer is covered under [Meet-management software](#meet-management-software) below.

## Software and operation

The operator's laptop or tablet runs Gen7 Swimming software and reaches the timer
over the same network, by cabled Ethernet, Wi-Fi, or a direct cable. On start-up the
software discovers the timer automatically (or by a manually entered IP address);
when several timers share a network, each timer's coloured "case lights" help tell
them apart. The operator then creates or opens a meet and session, choosing a
governing body and the course configuration.[^f1034]

The timer and its computer must share one network. The Gen7 software finds the timer
by Zeroconf auto-discovery (UDP port 5353) and controls it over an encrypted,
authenticated channel (TCP port 7105), with a separate SSH channel (TCP 22) used for
diagnostics; a timer with a static IP address can instead be entered manually, and if no
DHCP server is present the timer self-assigns an address in the 169.254.x.x range so a
laptop can be cabled straight to it. The SSH login permits no remote root access, and each
timer's login password is assigned randomly at the factory and shared with no other
unit.[^f1034]

During a session the main screen shows the timer's state, *Ready for Start*, the
running time, and *Finished*, with a toolbar for printing, race data, diagnostics,
and settings. Because the layout is defined in software, a facility can change the
course configuration without moving cables, switch off unused inputs and lanes to
save power, and run up to four courses at once from one timer using separate
computers.[^datasheet][^f1034] The software also adds several meet-running options: an
"Event 0" test-race mode that runs a full test without affecting meet data, running only
even or odd heats or only one gender's events, and a per-lane distance setting that lets
one or more lanes finish in fewer lengths than the rest of the race, which CTS describes
as intended for merging time-trial events.[^blog]

Two features address reliability. A pre-meet diagnostic screen checks the health of
the whole system and can flag connections that are corroding or wired incorrectly;
CTS holds a patent on detecting and identifying timing components by their
electrical signature.[^patentdetect][^datasheet] And a race-finish safeguard logs
all timing data on the timer itself: if the laptop or tablet interface drops, the
timer keeps running and will finish the race, with the raw data available for
replay. A second timer can still be added for redundancy, but is not required as it was
with a System 6 console.[^datasheet][^f1034][^blog]

## Meet-management software

Third-party meet-management programs supply start lists to the timer and record the
results it returns. The console does the timing itself. The meet-management
computer can connect to the Gen7 in four ways:

- By USB directly to a port on the timer, where the computer sees it as a virtual serial
  (COM) port.
- By USB to the Gen7 interface laptop, through CTS's USB-Connect coupler (part `USB2USB`),
  which simulates a null-modem serial link over USB.
- Over the network by file sharing, in which the meet-management computer and the Gen7
  laptop read and write a shared Windows folder, enabled as the meet-management
  file-export option in the software settings.
- Over the network by a UDP link, which sends swimmers' names, team scores, and event
  results from the meet-management software to the Gen7 for the scoreboard, and is
  described below.

The first three connections carry the event sequence into the timer and the race results
back out, and they exchange the same data, so the choice among them is practical. The two USB options depend
on whether the meet-management computer is within cable reach of the timer or of the
laptop; file sharing serves a computer that is on the network but beyond USB reach of
both. Over any of the three the meet-management software downloads the event sequence to
the timer, so the console matches the meet program, and reads back each race's
results.[^f1034] With Hy-Tek Meet Manager the timer appears as a USB serial port; Meet
Manager is then set to its Colorado Time Systems interface to open it.[^hytek] SwimTopia's
Meet Maestro detects the timer automatically and imports each race's touchpad, pushbutton,
reaction, and split times. SwimTopia lists its Gen7 support as a beta feature.[^swimtopia]

The fourth connection, the UDP link, feeds display data the other way, to the Gen7 for the
operator's screen and the scoreboard. Since Gen7 Swimming v2023 the console can take
swimmers' names from the meet-management program and show them on screen and on an LED
video board. This removes the need for a direct link between the meet-management computer
and the computer running [DisplayLink Plus](../../../software/displaylink-plus.md) (DL+),
and requires DL+ v4.6.0 or
later. The names can be pre-loaded from SCB files on a USB drive or sent live over the UDP
connection. The live feed also carries team scores and complete event results, added in
Gen7 Swimming v2026 with DL+ v4.7.0. The UDP
link runs between the meet-management computer and whichever of the Gen7 timer or the Gen7
computer shares its subnet; it cannot cross subnets. Once the operator sends an initial
start list, the link becomes bidirectional, and the Gen7 requests a fresh start list
whenever the event or heat changes. Of the meet-management programs, CTS notes that only
Hy-Tek Meet Manager supports this UDP data, over UDP Ethernet on port 60287, and that it
needs Hy-Tek's Alpha Scoreboard licence. Name integration also requires an RS-485 link to
the DL+ computer rather than RS-232.[^f1034]

## Compared with earlier consoles

Both Gen7 timers replace CTS's earlier [System 5](system-5.md) and System 6 consoles. CTS first
announced the Gen7 platform, beginning with the Serial in-deck system, in April 2017,
and gave it a wider launch that December.[^launch2][^launch] Where System 6 was a
self-contained console operated from its own keypad and ran one course at a time,
the Gen7 timers move the interface to a Windows computer and let one timer run
multiple and simultaneous courses, recover from an interface failure without a
second backup timer, connect to meet-management software over USB or Ethernet, and
accept an integrated start and speaker input.[^datasheet] Within the Gen7 line, the
Serial timer suits new installations built around connect-hub cabling, while the
[Gen7 Legacy Timer](gen7-legacy.md) reuses existing multi-pin lane hardware.[^blog] Both
Gen7 consoles remain current products, sold by CTS and stocked by independent
aquatic-equipment dealers.[^dealer]

## Specifications

| | |
|---|---|
| Dimensions (H × W × L) | 4.90 × 14.23 × 13.07 in (12.45 × 36.14 × 33.20 cm) |
| Weight | 11.0 lb (5.0 kg) |
| Operating temperature | 0–45 °C (storage −20–70 °C) |
| Humidity / altitude | 90% non-condensing; 0–3000 m |
| Power | 12 VDC, 7.5 A Class 2 supply |
| Battery | 7.2 V, 10,000 mAh NiMH; ~6 h (small system) to ~3 h (large system) |
| Scoreboard outputs | RS-485 (3 V, 300 mA) |
| Data | Gigabit Ethernet (isolated); USB; start input 3.3 V |
| Certifications | cULus, FCC, RoHS |
| Patents | US 10,137,353; US 11,192,016 (system); US 8,602,815 (deckplate) |

## Installation and safety

The Gen7 timer is made for indoor or outdoor pools and must be installed to the
electrical code for its location (in the United States, the National Electrical
Code), and kept far enough from the water that it is not splashed.[^f1034] A unit
brought in from the cold should be allowed to reach room temperature before use to
avoid internal condensation. There are no user-serviceable parts inside; opening the
enclosure voids the warranty.[^f1034]

## Part numbers and accessories

- `GEN7-TMR`, Gen7 Timer.
- `R-920-05x`, power supply (regional plug variants).
- `R-600-302`, laptop for the user interface.
- `R-470-117`, Gen7 Swimming software (`R-470-118`, software maintenance).
- `USB2USB`, CTS USB-Connect coupler, linking a meet-management computer to the
  interface laptop over a simulated serial connection.
- Connect hubs (timer, starter, scoreboard, bulkhead), titanium deckplates,
  wallplates, and connection cables and harnesses (up to 20 lanes).
- `TP-GEN7-6` / `TP-GEN7-8` / `TP-GEN7-10`, 6-, 8-, and 10-lane touchpad systems
  (harness, pushbuttons, meter, and vacuum pump; touchpads sold separately).

## See also

- [Timers](index.md): the timing-console overview and the Gen7 comparison table
- [Gen7 Legacy Timer](gen7-legacy.md): the multi-pin console in the same platform
- [Colorado Time Systems](../../../vendors/colorado-time-systems.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^f1034]: [Colorado Time Systems, Gen7 Serial Timer User Guide (F1034)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Gen7/Gen7SerialTimerUserGuide_F1034.pdf).
[^datasheet]: [Colorado Time Systems, Gen7 Serial Swimming datasheet](https://web.archive.org/web/20260409172128/https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Datasheets/Gen7_Serial_Swimming.pdf), archived; CTS has withdrawn the original.
[^product]: [Colorado Time Systems, Gen7 Swim Timing (Serial)](https://coloradotime.com/products/gen7-swim-timing-serial).
[^blog]: [Colorado Time Systems, Serial or Legacy, Which Gen7 Timer is Right for You?](https://coloradotime.com/blog/serial-or-legacy-which-gen7-timer-is-right-for-you).
[^patentnode]: [US Patent 10,137,353 B2, System for timing and scoring aquatic sports in pools](https://patents.google.com/patent/US10137353B2/en) (assignee Everlast Climbing Industries, dba Colorado Time Systems; inventor Chris Stockinger et al.).
[^patentdetect]: [US Patent 11,192,016 B2, Apparatus and method for the detection of timing components in swimming pools](https://patents.google.com/patent/US11192016B2/en) (assignee Everlast Climbing Industries, dba Colorado Time Systems).
[^warules]: [World Aquatics, Swimming Rules](https://resources.fina.org/fina/document/2023/01/04/65961a45-bde5-4217-b666-ca1f5dc2d1f0/1_Swimming-Technical-Rules.04.01.2023.pdf), competition times are recorded to a hundredth of a second, timed by automatic officiating equipment.
[^launch]: [Aquatics International, Colorado Time Systems Launches Gen7](https://www.aquaticsintl.com/products/colorado-time-systems-launches-gen7_o) (December 2017).
[^launch2]: [Aquatics International, Colorado Time System Introduces Gen7 Swim Timing and Scoring](https://www.aquaticsintl.com/products/colorado-time-system-introduces-gen7-swim-timing-and-scoring_o) (April 2017; Serial in-deck system, up to 20 lanes).
[^hytek]: [Hy-Tek / ACTIVE, Interface with Colorado Gen 7 Timer](https://activenetwork.my.salesforce-sites.com/hytekswimming/articles/en_US/Article/Interface-with-Colorado-Gen-7-Timer).
[^swimtopia]: [SwimTopia, CTS Gen 7 Timing Consoles: Meet Maestro Setup](https://help.swimtopia.com/hc/en-us/articles/360056845272--IN-BETA-CTS-System-5-6-or-CTS-Gen-7-Timing-Consoles-Meet-Maestro-Setup).
[^dealer]: Dealer listings: [Recreonics, CTS Gen7 Legacy Swim Timing](https://www.recreonics.com/product/colorado-time-gen7-legacy-swim-timing/); [Team Aquatic Supplies, CTS Gen7 Legacy Timing](https://team-aquatic.com/products/coloroda-time-system-gen7-legacy-timing).

---
title: Gen7 Legacy Timer
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Gen7 Legacy Timer
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Part number
    value: '`GEN7-TMR-L`'
  - label: Type
    value: Swim timing console
  - label: Interface
    value: 'Windows laptop or tablet, over Ethernet'
  - label: Connection
    value: Existing CTS multi-pin lane harnesses
  - label: Lanes
    value: Up to 12 (in-deck or on-deck)
  - label: Dimensions
    value: 4.90 × 14.23 × 13.07 in (12.5 × 36.1 × 33.2 cm)
  - label: Weight
    value: 11.0 lb (5.0 kg)
  - label: Power
    value: 12 VDC; internal NiMH battery
  - label: Certifications
    value: 'cULus, FCC, RoHS'
  - label: Manual
    value: CTS F1058
    href: >-
      https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Gen7/Gen7LegacyTimerUserGuide_F1058.pdf
---

The Gen7 Legacy Timer (part number `GEN7-TMR-L`) is a swimming timing console made by
[Colorado Time Systems](../../../vendors/colorado-time-systems.md) (CTS). It
is one of the two consoles in the company's Gen7 swim-timing platform: it collects the
finish signals from each lane's touchpad and backup pushbuttons, runs the race clock,
and drives the scoreboard, and it is operated from a Windows laptop or tablet connected
over Ethernet rather than from a built-in keypad.[^f1058][^product] The Legacy console
cables to the deck through a facility's existing CTS lane hardware and display boards,
so it can replace an older CTS console without rewiring the pool.[^f1058][^blog]

## Role in the timing system

The Legacy timer occupies the same place in a timing system as the
[Gen7 Serial Timer](gen7-serial.md): it is the head end that the deck equipment
connects back to. Each lane's touchpad, pushbuttons, and relay-judging platform run
through deckplates or cable harnesses to the timer; the starter's console and speaker
also connect to it. The timer measures the elapsed time for every lane and sends
results to the scoreboard. A separate computer running CTS's Gen7 Swimming software is
the operator's interface, and third-party meet-management software supplies start lists
and receives results, but the console does the timing itself.[^f1058]

What separates the two Gen7 consoles is the deck cabling. The Serial timer drives
CTS's newer connect-hub bus; the Legacy timer instead drives a facility's existing
multi-pin CTS lane harnesses and display boards, which lets it stand in for an older
CTS console, described by CTS as "a direct replacement for any existing CTS Timing
Console", while keeping the Gen7 software interface.[^f1058][^blog] It supports
in-deck and on-deck systems of up to 12 lanes.[^product]

Under World Aquatics rules, competition times are recorded to a hundredth of a second,
and championship swimming is timed by fully automatic officiating equipment, touchpads
at both ends of each lane, backed up by pushbuttons, of which this timer is the central
component.[^warules]

## Design and hardware

The console shares the Gen7 enclosure: a sealed unit about 4.9 in tall and 14 in wide,
weighing 11 lb, with no screen or keypad other than a power button.[^f1058] A lighted
bar and a row of indicators on the front convey the timer's state:[^f1058]

| LED pattern | Meaning |
|---|---|
| Blank | Not ready |
| Slow sweep | Booting |
| Pulsing | Ready for a race |
| Fast sweep | Running a race |

Additional front indicators show wired and wireless scoreboard data, network link, USB
traffic, timing-event data, charging, and power. A charging light glows blue while the
battery charges and is dark when charging is complete or the unit is unplugged; the
charging chip lights the indicator red if it detects a battery fault.[^f1058]

The timer runs from a 12 VDC supply or an internal 7.2 V, 10,000 mAh nickel-metal-hydride
battery. The specifications appendix in the user guide rates the battery for up to about
six hours of normal use.[^f1058] CTS's Legacy datasheet and product page give a higher
figure of about eight hours; the appendix rating is the more specific and conservative of
the two.[^legacyds]

The rear panel carries the connectors that distinguish this console from the Serial
model. Alongside the shared ports (power, start system, a Gen7 scoreboard-data output,
a CTS expansion port, a meet-management USB port, a general USB port, and Ethernet), the
Legacy timer adds a separate legacy-scoreboard output and four multi-pin lane
connectors: near-end and far-end connectors for lanes 1–10 and separate near-end and
far-end connectors for lanes 11 and 12.[^f1058] An in-deck or on-deck system takes its
near- and far-end cables into whichever of the timer's rear connectors are
free.[^f1058]

## Connectivity

The Legacy timer's lane inputs are the multi-pin connectors used by existing CTS timing
harnesses, not the keyed connect hubs of the Serial model. The specifications list 98
timing inputs across eight connectors (primary, backup, near end, and far end), each at
3.6 V and 1.8 mA, which together carry the touchpad, pushbutton, and relay-judging
signals for up to 12 lanes.[^f1058]

Scoreboard connections reflect the console's compatibility with older displays. The rear
panel provides an RS-232 output (±12 V, 60 mA) for a legacy scoreboard and two RS-485
differential-pair outputs (3 V, 300 mA, with short-circuit-protected 12 V power), and the
timer has a built-in 2.4 GHz wireless link for wireless scoreboards, a function that on
a System 6 console required a separate WA-1 or WA-2 adapter. CTS lists the Legacy timer
as driving LED numeric and LED video displays.[^f1058][^blog]

The start system reaches the timer by one of three routes: a single start-signal cable
straight to the timer, separate starter and speaker cables into a deckplate, or the start
pod on a primary cable harness, which carries its own start input.[^f1058] How meet-management
software connects to the timer is covered under
[Meet-management software](#meet-management-software) below.

## Software and operation

The operator's laptop or tablet runs the same Gen7 Swimming software as the Serial timer
and reaches the console over the same network, by cabled Ethernet, Wi-Fi, or a direct
cable. On start-up the software discovers the timer automatically (or by a manually
entered IP address); when several timers share a network, each timer's coloured "case
lights" help tell them apart. The operator then creates or opens a meet and session,
choosing a governing body and the course configuration.[^f1058]

The timer and its computer must share one network. The Gen7 software finds the timer by
Zeroconf auto-discovery (UDP port 5353) and controls it over an encrypted, authenticated
channel (TCP port 7105), with a separate SSH channel (TCP 22) used for diagnostics; a
timer with a static IP address can instead be entered manually, and if no DHCP server is
present the timer self-assigns an address in the 169.254.x.x range so a laptop can be
cabled straight to it. The SSH login permits no remote root access, and each timer's
login password is assigned randomly at the factory and shared with no other unit.[^f1058]

During a session the main screen shows the timer's state, *Ready for Start*, the
running time, and *Finished*, with a toolbar for printing, race data, diagnostics, and
settings.[^f1058] The software adds several meet-running options: an "Event 0" test-race
mode that runs a full test without affecting meet data, running only even or odd heats or
only one gender's events, and a per-lane distance setting that lets one or more lanes
finish in fewer lengths than the rest of the race, which CTS describes as intended for
merging time-trial events.[^blog]

Two features address reliability, both shared with the Serial timer. A pre-meet
diagnostic screen checks the health of the whole system and can flag connections that are
corroding or shorted before a meet begins; CTS holds a patent on detecting and
identifying timing components by their electrical signature.[^patentdetect][^f1058] And a
race-finish safeguard logs all timing data on the timer itself: if the laptop or tablet
interface drops, the timer keeps running and will finish the race, with the raw data
available for replay. A second timer can still be added for redundancy, but it is not
required as it was with a System 6 console.[^f1058][^blog]

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
results.[^f1058] With Hy-Tek Meet Manager the timer appears as a USB serial port; Meet
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
needs Hy-Tek's Alpha Scoreboard licence. On the Legacy timer the RS-485 link to the DL+
controller must use one of its RS-485 scoreboard outputs, not the RS-232 legacy output,
which name integration does not support.[^f1058]

## Compared with System 6 and the Serial timer

CTS presents the Legacy timer as a direct replacement for its [System 5](system-5.md) and System 6
consoles, one that does not require changing the deck cabling. Where System 6 was a
self-contained console operated from its own keypad, connected to meet-management
software over a serial link, and needed a second timer as its only backup, the Legacy
timer moves the interface to a Windows computer, connects to meet-management software
over USB or network file sharing, recovers from an interface failure on its own, and
carries a built-in wireless scoreboard link that System 6 required an adapter to
provide.[^blog]

Within the Gen7 line, the Legacy timer and the [Gen7 Serial Timer](gen7-serial.md) share
the same enclosure, Gen7 software, diagnostics, and race-finish safeguard; the difference
is the deck cabling. The Serial timer uses CTS's connect-hub bus with keyed, colour-coded,
wet-pluggable titanium connectors and titanium deckplates, and its cabling supports up to
20 lanes; the Legacy timer reuses a facility's existing multi-pin CTS harnesses and
display boards for up to 12 lanes, and adds an RS-232 legacy-scoreboard output the Serial
model does not carry.[^f1058][^blog] The connect-hub patent (US 10,137,353) covers the
Serial model's connect-hub cabling, which the Legacy timer does not use; the
titanium-deckplate patent (US 8,602,815) covers a deck component used in CTS in-deck
installations, including Legacy in-deck systems, and both consoles share the
component-detection patent (US 11,192,016).[^patentnode][^patentplate][^patentdetect] Both
Gen7 consoles remain current products, sold by CTS and stocked by independent
aquatic-equipment dealers.[^dealer]

## Specifications

| | |
|---|---|
| Dimensions (H × W × L) | 4.90 × 14.23 × 13.07 in (12.45 × 36.14 × 33.20 cm) |
| Weight | 11.0 lb (5.0 kg) |
| Operating temperature | 0–45 °C (storage −20–70 °C) |
| Humidity / altitude | 90% non-condensing; 0–3000 m |
| Power | 12 VDC, 7.5 A Class 2 supply (R-920-055) |
| Battery | 7.2 V, 10,000 mAh NiMH; up to ~6 h normal use |
| Lanes | Up to 12 (in-deck or on-deck) |
| Timing inputs | 98 inputs across 8 connectors (primary/backup, near/far end), 3.6 V @ 1.8 mA |
| Scoreboard outputs | RS-232 (±12 V, 60 mA); two RS-485 (3 V, 300 mA); built-in 2.4 GHz wireless |
| Data | Gigabit Ethernet (isolated); USB; start input 3.3 V @ 1.7 mA |
| Certifications | cULus, FCC, RoHS |
| Patents | US 11,192,016 (component detection) |

## Installation and safety

The Gen7 timer is made for indoor or outdoor pools and must be installed to the
electrical code for its location (in the United States, the National Electrical Code),
and kept far enough from the water that it is not splashed.[^f1058] A unit brought in from
the cold needs to warm up somewhere dry until it reaches the temperature of the room,
which keeps condensation from forming inside it. Replacing a fuse or similar servicing must be done only with
the unit disconnected from power; there are no other user-serviceable parts inside, and
opening the enclosure voids the warranty.[^f1058]

## Part numbers and accessories

- `GEN7-TMR-L`, Gen7 Timer with legacy connections.
- `R-920-05x`, power supply (regional plug variants).
- `R-600-302`, laptop for the user interface.
- `R-470-117`, Gen7 Swimming software (`R-470-118`, software maintenance).
- `USB2USB`, CTS USB-Connect coupler, linking a meet-management computer to the
  interface laptop over a simulated serial connection.

## See also

- [Timers](index.md): the timing-console overview and the Gen7 comparison table
- [Gen7 Serial Timer](gen7-serial.md): the connect-hub console in the same platform
- [Colorado Time Systems](../../../vendors/colorado-time-systems.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^f1058]: [Colorado Time Systems, Gen7 Legacy Timer User Guide (F1058)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Gen7/Gen7LegacyTimerUserGuide_F1058.pdf).
[^product]: [Colorado Time Systems, Gen7 Swim Timing (Legacy)](https://coloradotime.com/products/gen7-swim-timing-legacy).
[^blog]: [Colorado Time Systems, Serial or Legacy, Which Gen7 Timer is Right for You?](https://coloradotime.com/blog/serial-or-legacy-which-gen7-timer-is-right-for-you).
[^patentdetect]: [US Patent 11,192,016 B2, Apparatus and method for the detection of timing components in swimming pools](https://patents.google.com/patent/US11192016B2/en) (assignee Everlast Climbing Industries, dba Colorado Time Systems).
[^patentnode]: [US Patent 10,137,353 B2, System for timing and scoring aquatic sports in pools](https://patents.google.com/patent/US10137353B2/en) (assignee Everlast Climbing Industries, dba Colorado Time Systems; connect-hub networked-node system).
[^patentplate]: [US Patent 8,602,815 B2, Swimming pool deckplate for horizontal surfaces with integrated slopes around electrical contacts](https://patents.google.com/patent/US8602815B2/en) (assignee Everlast Climbing Industries, dba Colorado Time Systems; titanium deckplate).
[^warules]: [World Aquatics, Swimming Rules](https://resources.fina.org/fina/document/2023/01/04/65961a45-bde5-4217-b666-ca1f5dc2d1f0/1_Swimming-Technical-Rules.04.01.2023.pdf), competition times are recorded to a hundredth of a second, timed by automatic officiating equipment.
[^hytek]: [Hy-Tek / ACTIVE, Interface with Colorado Gen 7 Timer](https://activenetwork.my.salesforce-sites.com/hytekswimming/articles/en_US/Article/Interface-with-Colorado-Gen-7-Timer).
[^swimtopia]: [SwimTopia, CTS Gen 7 Timing Consoles: Meet Maestro Setup](https://help.swimtopia.com/hc/en-us/articles/360056845272--IN-BETA-CTS-System-5-6-or-CTS-Gen-7-Timing-Consoles-Meet-Maestro-Setup).
[^dealer]: Dealer listings: [Recreonics, CTS Gen7 Legacy Swim Timing](https://www.recreonics.com/product/colorado-time-gen7-legacy-swim-timing/); [Team Aquatic Supplies, CTS Gen7 Legacy Timing](https://team-aquatic.com/products/coloroda-time-system-gen7-legacy-timing).
[^legacyds]: [Colorado Time Systems, Gen7 Legacy Swimming datasheet](https://coloradotime.com/hubfs/PDFs/data%20sheets/Gen7_Legacy_Swimming.pdf), which states 8-hour battery life; also the [Gen7 Swim Timing (Legacy) product page](https://coloradotime.com/products/gen7-swim-timing-legacy).

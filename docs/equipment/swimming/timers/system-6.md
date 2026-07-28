---
title: Colorado Time Systems System 6
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Colorado Time Systems System 6
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Part number
    value: '`SYS6`'
  - label: Type
    value: Swim timing console
  - label: Sports
    value: 'Swimming, diving (water polo and pace clock optional)'
  - label: Lanes
    value: Up to 12
  - label: Display
    value: 8.4 × 6.3 in backlit colour LCD
  - label: Power
    value: 15 VDC external supply; internal lithium-ion backup battery
  - label: Status
    value: Discontinued; succeeded by the Gen7 timers
  - label: Manual
    value: CTS F890
    href: >-
      https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/System6/System_6_Swimming_Manual_F890.pdf
---

The System 6 (part number `SYS6`) is a swimming timing and scoring console made by
[Colorado Time Systems](../../../vendors/colorado-time-systems.md) (CTS). Unlike
the [Gen7 timers](gen7-serial.md) that replaced it, the System 6 is a self-contained
unit: it carries its own backlit LCD, keypad, and timing software, and is operated
directly from the console rather than from a separate computer. It collects the finish
signals from each lane's [touchpad](../touchpad/index.md) and backup pushbuttons,
runs the race clock, receives the start pulse from the
[start system](../starter/index.md), and drives the scoreboard. It has been
discontinued in favour of the Gen7 platform, though CTS still sells refurbished
units.[^f890][^datasheet][^product]

## Role in the timing system

The System 6 is the head end that the on-deck equipment connects back to. The start
system, the lane touchpads and their backup buttons, the relay-judging platforms, the
scoreboard, a printer, and a meet-management computer all connect to the console, which
measures the elapsed time for each lane and sends the results to the scoreboard.[^f890]
The console does the timing itself; a meet-management program supplies the event sequence
and records the results the console returns, but does not do the timing.[^f890]

Under World Aquatics rules, competition times are recorded to a hundredth of a second,
and championship swimming is timed by automatic officiating equipment, touchpads at both
ends of each lane, backed up by pushbuttons, reporting to a console of this
kind.[^warules] A System 6 runs one course at a time. For redundancy a second System 6
can be attached as a backup timer: the back panel carries duplicate near-end and far-end
inputs that pass the lane signals through to a second console.[^f890] CTS states that the
System 6 has been used at World Aquatics and NCAA championship meets.[^product]

## Design and hardware

The front of the console carries a liquid-crystal display that shows the running
time, race status, event and heat numbers, and lane results. CTS described the screen,
8.4 by 6.3 inches, as the largest on the market for a timing console, and it is backlit
and in colour.[^product][^f890] A column of softkeys to the right of the screen selects
printing formats, detailed race and relay-judging information, scoreboard controls, and
the setup menus, and lets the operator store setup configurations for later
meets.[^f890]

Below the screen a keyboard insert carries the keys used during a race. A row of per-lane
keys turns each lane on or off, arms a lane for a finish, or arms it for a split; other
keys start the race, store and print results, advance to the next heat or event, edit an
event's length, and enter disqualification information.[^f890] A lithium-ion cell inside
the console carries it through a mains failure. CTS gives the charge time as
three hours and the backup runtime as about 45 minutes, rising to roughly an hour after
the battery has been through four or five full charge-and-discharge cycles, with a life
expectancy of three to five years.[^f890][^product]

## Connectivity

Connectors on the back panel carry the console's inputs and outputs.[^f890] The inputs
are an external DC power connector, near-end and far-end cable harnesses for the lane
signals, a duplicate set of near-end and far-end connectors for attaching a second
console as a backup, a Judges I/O port, and keyboard and mouse connectors. The near-end
and far-end harnesses each carry lanes 1 through 10, with a second connector on each side
for lanes 11 and 12.[^f890]

The power input is a DIN connector fed by an approved 15-volt supply (part `R-920-004`);
CTS warns that a [System 5](system-5.md) power supply, though it fits, can damage the console.[^f890] The
Judges I/O connector accepts the judging expansion hardware and other CTS expansion
devices.[^f890] The scoreboard connects through a quarter-inch jack to CTS fixed-digit
(LED or light-reflective) and full-matrix LED displays, with each display line set by
channel switches to the data it shows.[^f890] Two nine-pin serial ports are provided:
COM1 connects a meet-management computer, and COM2 is reserved. A monitor output is a
standard VGA port that mirrors the console screen, and the keyboard and mouse ports are
standard PS-2 connectors.[^f890] An Ethernet port is used for online software
updates.[^f890]

The console's storage and printer interfaces changed over its production run, and the
sources describe two different arrangements. The 2010 Swimming software manual documents a
standard IBM PC parallel printer port and, on older consoles, a 3.5-inch disk drive for
saving older files.[^f890] Current CTS materials instead describe USB support: a PCL
printer connected by USB (or parallel), a USB memory stick for transferring data, and USB
keyboard and mouse support.[^product] The manual notes the USB port on newer consoles and
refers to the Sport Loader manual for its use, which indicates the hardware was revised
across the model's life rather than the accounts being in conflict.[^f890]

## Software and operation

This article describes the console; the operating detail here follows the System 6
Swimming software user guide.[^f890]

Swimming and diving software come standard with each console; water polo and pace-clock
software are available separately.[^product] The pace-clock program turns the console
into a programmable training clock: it holds separate workouts for up to 12 lanes, up to
100 sets per lane, and runs them on the connected scoreboard.[^f873] Each sport uses its own software and a
matching printed keyboard insert that labels the lower keys for that sport, so changing
sports means swapping the insert and loading the corresponding program. CTS's Sport
Loader utility handles loading and updating the sport software on the console.[^f890] The
console is shut down through its menus (Misc, then Change Sport, then Shut Down) before
its power switch is used, rather than by cutting power while a sport program is
running.[^f890]

The System 6 supports up to 12 lanes, which CTS described as the largest lane count of
any console on the market, and records an unlimited number of splits at both the near and
far ends of the pool.[^datasheet][^product] The race course can be shifted to the centre
lanes of a pool while the lane numbering stays standard, and lanes can be reversed. The
operator can declare where odd- and even-length races start, which determines the end at
which they finish.[^datasheet]

Several features handle the mechanics of scoring a race. When enabled, the console
measures the time between the start signal and the impulse from a
[relay-judging platform](../relay-judging/index.md) or, for backstroke starts, a
touchpad, and posts that start-reaction time to the scoreboard.[^datasheet] For lanes where a backup button rather than a touchpad records the
finish, the console applies the governing body's rules to decide the backup time from the
number of buttons received, and can automatically adjust a lane's backup time using the
average differential measured across the good lanes.[^datasheet] A relay-judging window
constrains how long the console looks for a takeoff impulse, so that swimmers standing on
or stretching against the blocks do not affect the exchange time.[^datasheet] After a
reset, the console re-arms every lane listed as in use, so no lane is left off for the
next heat.[^datasheet]

On the display side the console can post subtracted splits to LED video boards, cycle
through all lane times when the scoreboard has fewer lines than the pool has lanes, and
adjust the intensity of LED numeric boards and pace clocks for day or night and indoor or
outdoor use.[^datasheet]

## Meet-management software

A meet-management program connects to COM1 and exchanges the event sequence and race
results with the console. CTS specifies a male-to-female nine-pin DB-9 straight-through
RS-232 cable for the link.[^f890] The console is compatible with Hy-Tek Meet Manager and
other meet-management programs.[^product] SwimTopia's Meet Maestro also lists the System 5
and System 6 among the CTS consoles it supports.[^swimtopia]

## Compared with the Gen7 timers

CTS's Gen7 platform replaced the earlier [System 5](system-5.md) and System 6 consoles; the company
first announced Gen7 in 2017.[^datasheet] Where the System 6 is a self-contained console
operated from its own keypad, runs one course at a time, and needs a second console
attached for redundancy, the [Gen7 timers](gen7-serial.md) move the operator interface to
a Windows laptop or tablet over Ethernet, let one timer run several courses at once, and
keep all timing data on the console so a race finishes even if the interface drops. The
Gen7 line is split into the connect-hub [Serial](gen7-serial.md) and the multi-pin
[Legacy](gen7-legacy.md) consoles.[^datasheet] The System 6 is discontinued as a new
product, but CTS continues to sell refurbished units (part `SYS6.S`), and the console is
still stocked by independent aquatic-equipment dealers.[^product][^dealer]

## Specifications

| | |
|---|---|
| Sports | Swimming and diving standard; water polo and pace clock optional |
| Lanes | Up to 12 |
| Splits | Unlimited, near- and far-end |
| Display | 8.4 × 6.3 in backlit colour LCD |
| Power | External 15 VDC supply (`R-920-004`, DIN connector) |
| Battery | Internal lithium-ion; ~3 h charge, ~45 min backup (up to ~1 h after 4–5 cycles); 3–5 yr life |
| Serial ports | COM1 and COM2, nine-pin RS-232 (COM1 for meet management) |
| Data and display | Ethernet (online updates), USB, VGA monitor out, PS-2 keyboard and mouse |
| Scoreboard output | Quarter-inch jack to CTS LED numeric and LED matrix displays |
| Printer | Parallel port (older consoles); USB PCL printer (later consoles) |
| Meet management | Hy-Tek Meet Manager and others, over RS-232 |

## See also

- [Timers](index.md): the timing-console overview and the Gen7 comparison table
- [Gen7 Serial Timer](gen7-serial.md): the connect-hub console in the platform that replaced the System 6
- [Gen7 Legacy Timer](gen7-legacy.md): the multi-pin console in the same platform
- [Colorado Time Systems](../../../vendors/colorado-time-systems.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^f890]: [Colorado Time Systems, Swimming 6 for the System 6 Sports Timer user guide (F890)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/System6/System_6_Swimming_Manual_F890.pdf).
[^datasheet]: [Colorado Time Systems, System 6 Timing Console datasheet](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Datasheets/System%206.pdf).
[^f873]: [Colorado Time Systems, Pace Clock for the System 6 Sports Timer software user guide (F873, Rev. 20100820)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/System6/System_6_Pace_Clock_Manual_F873.pdf).
[^product]: [Colorado Time Systems, System 6 Timing Console](https://coloradotime.com/products/system-6-timing-console).
[^swimtopia]: [SwimTopia, CTS System 5/6 or CTS Gen 7 Timing Consoles: Meet Maestro Setup](https://help.swimtopia.com/hc/en-us/articles/360056845272--IN-BETA-CTS-System-5-6-or-CTS-Gen-7-Timing-Consoles-Meet-Maestro-Setup).
[^dealer]: Dealer listings: [Colorado Time Systems, System 6 Timing Console (Refurbished, SYS6.S)](https://shop.coloradotime.com/products/system-6-timing-console-refurbished-sys6-s); [Poolweb, System 6 Sports Timing System](https://www.poolweb.com/products/system-6-sports-timing-system).
[^warules]: [World Aquatics, Swimming Technical Rules](https://resources.fina.org/fina/document/2023/01/04/65961a45-bde5-4217-b666-ca1f5dc2d1f0/1_Swimming-Technical-Rules.04.01.2023.pdf), competition times are recorded to a hundredth of a second, timed by automatic officiating equipment.

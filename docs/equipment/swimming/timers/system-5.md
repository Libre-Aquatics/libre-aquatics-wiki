---
title: Colorado Time Systems System 5
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Colorado Time Systems System 5
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Type
    value: Multi-sport aquatics timing console
  - label: Sports
    value: >-
      Swimming and diving standard; water polo, synchronized swimming, pace
      clock optional
  - label: Lanes
    value: Up to 10
  - label: Display
    value: 25-line by 80-character full-matrix LCD
  - label: Resolution
    value: '0.01 or 0.001 second, selectable'
  - label: Race memory
    value: Over 500 races
  - label: Power
    value: Eight D-cell alkaline batteries or 12 VDC wall transformer
  - label: Status
    value: Discontinued; succeeded by the System 6 and then the Gen7 timers
  - label: Manual
    value: CTS F506
    href: >-
      https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/System5/System5swim-man.pdf
---

The System 5 is a swimming timing and scoring console made by
[Colorado Time Systems](../../../vendors/colorado-time-systems.md) (CTS),
which the company's datasheet presents as the fifth generation of its timing
consoles.[^datasheet] Like the [System 6](system-6.md) that succeeded it, it is a
self-contained unit with its own LCD screen, softkeys, and keyboard insert, operated
directly from the console. It collects the finish signals from each lane's
[touchpad](../touchpad/index.md) and backup [pushbuttons](../semi-automatic/pushbutton/index.md), runs
the race clock, receives the start pulse from the
[start system](../starter/index.md), and drives the scoreboard.[^f506] Unlike its
mains-powered successors it is designed to run on eight D-cell batteries, with an AC
wall transformer as the alternate supply.[^f506][^datasheet] The console is
discontinued, but CTS still publishes its manuals and third-party meet-management
software still supports it.[^f506][^swimtopia]

## Role in the timing system

The System 5 is the head end that the on-deck equipment connects back to. The start
system, the lane touchpads and their backup buttons, relay judging platforms, a
printer, a meet-management computer, and the scoreboard all connect to the console,
which measures the elapsed time for each lane and sends the results to the
scoreboard.[^f506] Laid out in the manual's full-system diagram, that installation runs
from a loudspeaker start system through RJP-1
[relay judging platforms](../relay-judging/cts.md) and a touchpad finish backed by three
buttons in each lane, to a printer, a computer and a scoreboard.[^f506] The SS2
loudspeaker start system was the standard starter supplied with swimming packages;
button and start-pistol-transducer starts are also supported.[^f506]

Under World Aquatics rules, competition times are recorded to a hundredth of a second,
and championship swimming is timed by automatic officiating equipment, touchpads backed
up by pushbuttons, reporting to a console of this kind.[^warules] Lanes connect through
a touchpad and button A cable harness to the primary input, through a separate B and C
button harness to the backup input, and through a far-end harness for far-end splits
and finishes, all with a single console.[^f506][^datasheet]

## History and predecessors

The Swimming 5 manual places the console in a line that began in the early 1970s, when
CTS offered what it describes as the first practical display timing and scoreboard
system on the American market. The company followed it with the Printing Timer, which
added a built-in strip printer and three-button backup timing, the Swimming III of the
early 1980s, which added race memory, relay judging, and a membrane keyboard with
cassette-loaded sports programs, and the System 4000 of the late 1980s, which added a
full-sized printer, a meet-management computer link, and sports programs on plug-in
cards.[^f506] The System 5 followed as the fifth generation; its sports programs are
supplied on diskette and downloaded into the console's internal memory from a personal
computer rather than loaded from a cassette or card.[^f506] A product brochure updated
in 2004 presents the console as the company's fifth-generation timer and states that it
is compatible with every generation of CTS start systems, scoreboards, and
touchpads.[^brochure] CTS was still publishing a System 5 datasheet in 2014, and its
2004 relay judging platform guide notes that System 5 Swimming software was still being
updated (version 3.29.20 or later is needed for relay platform
operation).[^datasheet][^f507]

## Design and hardware

The console is operated from a full-size LCD screen of 25 lines by 80 characters, 2,000
characters in all, with a contrast control. The screen shows the running time, race
status, event and heat numbers, lane and pad status, warning messages, and a mini
scoreboard view, along with a battery gauge.[^datasheet][^f506] Softkeys to the right of
the screen select printing formats, detailed race and relay-judging displays, scoreboard
controls, and the setup menus, and store setups for future meets.[^f506] The keyboard
insert below carries the per-lane on-off keys and the race keys: finish arm, split arm,
touch adjustment (+touch and -touch), store/print, next heat and next event, edit/DQ, and
a start key that is the final backup start.[^f506]

The battery compartment on the underside holds eight standard alkaline D cells;
CTS instructs that rechargeable batteries not be used because the battery gauge cannot
read them accurately, and recommends new batteries once a year.[^f506] The sources give
slightly different battery figures: the manual's specifications state 35 hours of
normal use, while the datasheet says the console operates up to 40 hours on a set of
batteries.[^f506][^datasheet] When the console can get wet, CTS instructs that it be
powered by batteries only, never the AC adapter.[^f506] The electronics are low-current
CMOS, and the case is not user-openable; CTS recommends factory calibration every five
years (the crystal oscillator that provides the timing accuracy is guaranteed for five
years) and factory replacement of the internal memory battery within five to seven
years.[^f506] The console measures 18.4 by 13.5 by 8.5 inches and weighs 11.6
pounds (5.3 kg); CTS offered a foam-lined carrying case (CC-SYS5) and a training
keyboard (TK-1) that simulates touchpad and button inputs for operator practice, and
covered the console with a two-year limited domestic warranty.[^brochure]

## Connectivity

All connections are on the I/O panel. The scoreboard output is a quarter-inch jack
carrying RS-232 data to CTS light-reflective and full-matrix LED displays; each
scoreboard module is set by channel switches to the data it shows (for example channel
01 for lane 1, 0C for event and heat, 0D for team scores, 0F for a single-line
display), and channels can be redirected in software.[^f506] The brochure lists the
company's 3009 and 4009 series scoreboards as the displays the sport programs interface
with.[^brochure] External power enters
through a DIN connector from the approved 12-volt supply, and CTS warns to use only the
recommended power supply; the [System 6](system-6.md) article notes that a System 5
supply fits the later console but can damage it.[^f506][^f890] A Judges I/O DIN
connector accepts the judging expansion hardware and other CTS expansion
devices.[^f506]

The printer port is a standard IBM PC parallel port, and a second parallel connector,
Computer Port 3, receives sports-program downloads.[^f506] Two nine-pin serial ports
are provided: COM1 connects the meet-management computer and COM2 is reserved for
special operations.[^f506] The lane inputs are the primary (touchpads, start, and
button A), backup (buttons B and C), and far-end harness connectors, secured with wire
bails.[^f506]

## Software and operation

Swimming and diving programs and their keyboard inserts come standard; water polo,
synchronized swimming, and pace-clock programs and inserts were sold separately, each
documented in its own user guide (the synchronized swimming software, for example, is
CTS part F511).[^datasheet][^brochure][^f511] The diving program accepts the dive
program before the meet or on the fly, assigns degrees of difficulty automatically,
tabulates judges' scores entered on the console keyboard or from optional judging
terminals, and stores up to 32 diving meets with 100 divers per meet; CTS states it was
the official scoring system of United States Diving.[^diving] New programs are
downloaded from a computer through the console's
parallel Computer Port 3 and remain in internal memory, selectable at a
keystroke.[^f506] On power-up the console runs self-diagnostics that also exercise a
connected cable harness, touchpads, pushbuttons, and scoreboard cable.[^f506]

The Swimming software has three operating modes that differ in how much race
information is recorded: write-in mode (the operator writes event and heat numbers on
the printout), print-in mode (numbers are entered and printed), and title mode (numbers
and a race description are printed and stored, driven by a programmed event
sequence).[^f506] The console stores roughly 500 races in memory, prints splits as they
occur, and includes context-sensitive help on the screen.[^f506]

The console times and places up to ten lanes, with the pool configurable as 6, 8, or 10
lanes, and the lane order reversible for decks cabled from the far end.[^f506][^datasheet]
Timing resolution is selectable between hundredths and thousandths of a
second, with a timing range of 99:59.999.[^datasheet] Far-end splits and far-end
finishes are supported from the single console through the far-end harness
input.[^datasheet][^f506]

The Swimming software corrects for human reaction time when manual and automatic
timing are mixed: 0.15 seconds, which CTS describes as the statistical median delay, is
added to a manual start and subtracted from a manual button finish.[^f506] The same
correction applies to relay judging with buttons, while no correction is applied to
relay judging platform times.[^f506] Relay judging is offered in a semi-automatic form
that uses the backup buttons with no additional hardware, or fully automatically with
relay judging platforms, and printouts mark early and late exchanges.[^brochure] The datasheet lists automatic flagging of a 3/10
second discrepancy between the pad and backup times, and the edit/DQ key resolves a
flagged lane with the median of three backup times or the average of two.[^f506][^datasheet]

Setup options anticipate the mechanics of a meet: a pad split delay (15 seconds
recommended) keeps a touched pad inoperative so exiting relay swimmers do not trigger
it, a pad delay at start ignores pad hits just after the start, time warning messages
predict a lap time from the previous lap and flag a probable missed touch, and the
touchpad voltage can be lowered to slow connector corrosion.[^f506] Race lengths can be
counted down on the scoreboard or the console screen.[^f506]

## Meet-management software

A meet-management program connects to COM1 and exchanges data with the console. Hy-Tek
Meet Manager supports the console as "CTS 5": the software downloads event lists of up
to 240 events to the console and reads back race results, backup times, and splits, and
its documentation notes that the CTS 5 and CTS 6 cannot store prelims and finals
results for the same event in the same console meet.[^hytek] The Swimming software's
remote-setup option allows all setups, including event sequences, to be edited on a PC
and uploaded through COM1.[^f506] SwimTopia's Meet Maestro also lists the System 5
among the CTS consoles it supports.[^swimtopia]

## Compared with the System 6 and Gen7

The [System 6](system-6.md) replaced the System 5 as CTS's self-contained console,
moving to a backlit color LCD, twelve lanes, an internal lithium-ion backup battery
with a 15-volt external supply, and duplicate lane inputs for attaching a second
console as a backup.[^f890] Both consoles were in turn replaced by the
[Gen7 platform](gen7-serial.md), announced in 2017, which moves the operator interface
to a computer over Ethernet.[^gen7launch] The System 5 is discontinued; CTS continues
to host its manuals, and meet-management vendors continue to list it as a supported
console.[^f506][^swimtopia][^hytek]

## Specifications

| | |
|---|---|
| Sports | Swimming and diving standard; water polo, synchronized swimming, pace clock optional |
| Lanes | Up to 10 (pool set as 6, 8, or 10 lanes) |
| Resolution | 0.01 or 0.001 second, selectable; range 99:59.999 |
| Race memory | Over 500 races |
| Display | 25-line by 80-character full-matrix LCD with contrast control |
| Power | Eight D-cell alkaline batteries (35 h per the manual, up to 40 h per the datasheet) or 12 VDC at 750 mA external supply |
| Lane inputs | Primary, backup (B/C buttons), and far-end harness connectors, 5 V |
| Serial ports | COM1 and COM2, nine-pin RS-232 (COM1 for meet management) |
| Judges I/O | RS-232 DIN, supplying 12 VDC at 0.5 A |
| Printer and downloads | IBM PC parallel printer port; parallel Computer Port 3 for sports programs |
| Scoreboard output | Quarter-inch jack, RS-232, channel-switched CTS displays |
| Environment | 0–45 °C, 90% humidity non-condensing, up to 3000 m |
| Dimensions | 18.4 × 13.5 × 8.5 in (46.7 × 34.3 × 21.6 cm) |
| Weight | 11.6 lb (5.3 kg) |
| Warranty | Two-year limited (domestic) |
| Compliance | FCC Class A |

## See also

- [Timers](index.md): the timing-console overview
- [System 6](system-6.md): the console that replaced the System 5
- [Gen7 Serial Timer](gen7-serial.md) and [Gen7 Legacy Timer](gen7-legacy.md): the
  current CTS platform
- [Colorado Time Systems RJP](../relay-judging/cts.md): the relay judging platforms the
  console reads
- [Colorado Time Systems](../../../vendors/colorado-time-systems.md): the
  manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^f506]: [Colorado Time Systems, Swimming 5 for the System 5 Sports Timer user guide (F506, Rev. 0698)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/System5/System5swim-man.pdf).
[^datasheet]: [Colorado Time Systems, System 5 Timing Console datasheet (Rev. 03/14)](https://www.coloradotime.com/hubfs/CTS%20Website%20%20Assets/Datasheets/System%205.pdf).
[^f890]: [Colorado Time Systems, Swimming 6 for the System 6 Sports Timer user guide (F890)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/System6/System_6_Swimming_Manual_F890.pdf) (System 6 power requirements and the System 5 power-supply warning).
[^f507]: [Colorado Time Systems, Relay Judging Platform Installation Guide (F507, Rev. 1104, 2004)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Relay%20Judging/RJP_manual.pdf) (System 5 requires Swimming 3.29.20 or later for relay platform operation).
[^hytek]: [Hy-Tek Swimming knowledge base, Interface with CTS 5 or CTS 6](https://activenetwork.my.salesforce-sites.com/hytekswimming/articles/en_US/Article/Interface-with-CTS-5-or-CTS-6) (serial interface, event download limits, and the prelims/finals limitation).
[^swimtopia]: [SwimTopia, CTS System 5/6 or CTS Gen 7 Timing Consoles: Meet Maestro Setup](https://help.swimtopia.com/hc/en-us/articles/360056845272--IN-BETA-CTS-System-5-6-or-CTS-Gen-7-Timing-Consoles-Meet-Maestro-Setup).
[^warules]: [World Aquatics, Swimming Technical Rules](https://resources.fina.org/fina/document/2023/01/04/65961a45-bde5-4217-b666-ca1f5dc2d1f0/1_Swimming-Technical-Rules.04.01.2023.pdf), competition times are recorded to a hundredth of a second, timed by automatic officiating equipment.
[^gen7launch]: [Aquatics International, Colorado Time System Introduces Gen7 Swim Timing and Scoring](https://www.aquaticsintl.com/products/colorado-time-system-introduces-gen7-swim-timing-and-scoring_o) (April 2017).
[^brochure]: [Colorado Time Systems, System 5 brochure (updated June 2004)](https://www.yumpu.com/en/document/view/38874710/system-5-brochurepdf-colorado-time-systems) (specifications, accessories, warranty, and compatibility; published on the company's Yumpu account).
[^diving]: Colorado Time Systems, System 5 Diving datasheet, Rev. 04/10.
[^f511]: Colorado Time Systems, Synchronized Swimming for the System 5 Sports Timer user guide, part no. F511, Rev. 0698.

---
title: Swiss Timing PowerTime II
description: >-
  The PowerTime II is a battery-powered Swiss Timing hand-held timer with a built-in thermal
  printer, used for athletics, skiing and small swimming meets, where its TOP-8 program times up
  to eight lanes from judges' pushbuttons.
updated: 2026-10-19
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: PowerTime II
infobox:
  - label: Manufacturer
    value: '[Swiss Timing](vendors/swiss-timing.md)'
  - label: Part number
    value: '`3361.900`'
  - label: Type
    value: Hand-held timer with printer
  - label: Lanes
    value: Up to 8, with the [TOP-8](software/top-8.md) program
  - label: Display
    value: LCD, 4 lines of 16 characters
  - label: Printer
    value: Thermal, 24 characters a line, 58 mm paper
  - label: Resolution
    value: 1/1000–1 s, selectable
  - label: Outputs
    value: RS-232 to a PC; RS-485 or RS-422 to scoreboards (sources differ)
  - label: Dimensions
    value: 235 × 95 × 40 mm (datasheet); 210 × 95 × 40 mm (manual)
  - label: Weight
    value: 500 g with batteries
  - label: Power
    value: 4 × AA cells, or 9–15 V DC external
  - label: Manual
    value: '[PowerTime II General User''s Manual (3462.501.02)](https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3462.501.02_PowerTime2_General.pdf)'
---

<!--
Research notes, PowerTime II. Stub created 2026-10-14 while building out piccolo.md; built out
2026-10-19.

Held in sources/vendors/swiss-timing/timers-consoles/ (all read in full):
- swiss-timing-powertime-ii-datasheet-3434.525.02: datasheet 3434.525.02 B
  (DOCM_MS_PowerTimeII_0913_EN). PDF metadata: created 5 March 2012, modified 17 April 2013, so a
  PowerTime II existed by early 2012. The product name is a logo, so the text extraction drops it.
  Page 2 photo of the "ready-to-use pack": red shoulder bag, the unit, AA cells, mains adaptor,
  PC adaptor, two start/stop leads with banana plugs, two paper rolls, a mini CD.
- swiss-timing-powertime-ii-general-user-manual-3462.501.02 (filed 2026-10-19 from the
  swisstiming.com URL in the infobox): General User's Manual 3462.501.02, TIM022, version 1.0,
  undated; PDF made 15 September 2025 from Word, so the date says nothing about the product.
  Contents list: transport bag 3361.620; 3462.700 (no description given; possibly the unit
  itself, not confirmed); mini CD 3462.606; paper 9051.6042 x2; adaptor options 3361.618
  (.AU/.GB/.US); AA cells 9035.6109 x4; start/stop leads 3361.605 x2 (3.5 mm mono jack to two
  4 mm sockets); PC cable 3361.603 (RJ 10-pole to RJ 10-pole); PC adaptor 3361.610 (RJ 6-pole
  to Sub-D 9 female). Accessories add 3361.608 (1 start, 4 stops), 3361.609 (1 start, 8 stops),
  3361.611 swimming harness (1 start, 8 stops), 2872.003 pushbutton on a 3 m coiled cable,
  9051.6042PK paper x20, GEMINI 3449.961 (6 digits, 24 cm) / 3449.991 (9 digits), marathon clock
  3456.901 single-sided / 3456.902 double-sided (16 cm digits), StartTime III 3399.911.
  Section 9 table and pinouts; scoreboard RS485 on RJ pins 1 (TxD+), 3 (TxD-), 2 (GND), Sub-D
  pins 1, 9, 5; PC RS232 TxD RJ pin 6 / Sub-D 3, RxD RJ pin 5 / Sub-D 2; 9600 8N1.
- swiss-timing-powertime-ii-top-8-user-manual-3462.511.02 (filed 2026-10-19 from
  swisstiming.com): User Manual TOP-8, 3462.511.02, version 3.2. Lane and non-lane modes,
  scoreboard types rollertime and multiline, page time and non-lane settings from v3.2,
  "dh run time" option sends running time to the PC. Parts table: 3361.611, 3361.609.

Discrepancies found (all flagged in the text):
- Length 235 mm (datasheet) v 210 mm (manual).
- Buzzer about 4 kHz (datasheet) v about 1 kHz (manual).
- Battery life 50 h with one roll printed (datasheet) v over 30 h without serial output and over
  12 h with PC and scoreboard output running, both with 2000 lines printed (manual).
- Scoreboard line: RS485 in both spec tables, RS422 in the manual's 3.5 and the datasheet's
  overview (which calls it a combined RS232/RS422 port).
- Data retention: datasheet says a lithium cell; manual 2 says a capacitor on the main board,
  while manual 5.2 also mentions an internal lithium battery changed only by a service centre.
  Probably both exist (capacitor for data during a cell change, lithium for the clock); not
  confirmed.
- IP55 on the datasheet, yet the manual says to keep the unit out of rain and water jets.

Original PowerTime (predecessor, own stub at powertime.md):
- Daktronics SW-2000 manual ED-12156 Rev 14 (May 2015, held): drawing A-118395 "Powertime LED
  driver address configuration", drawn 21 July 1999; "Omega Power Time" Protocol 1 with
  addresses for up to 8 lines. So a PowerTime was driving Daktronics boards by mid-1999.
- Daktronics All Sport 5000 manual ED-11976 Rev 32 (4 November 2024, held): external timer code
  8602 takes data from the PowerTime through a Venus 7000 computer; PowerTime scoreboard type
  must be multi-line with 1 line; Venus baud rate 9600.
- Omega Electronics TOP-8 manual 3361-511-02 v2.0 (manualzilla mirror, link in references):
  Omega branding, general manual 3361-501, the same 3361.611 and 3361.609 harness and box,
  OIT8 pushbutton 5 m 2872-008, OIT3 3 m coiled 2872-003, SCB+PC adaptor 3361-616 (the II lists
  3361.628 for this), UNT6 numeric scoreboard; settings from "version 3.0 or higher".
  The 3361 article series and accessories carried over to the II.
- AVK Group (Austrian dealer) page "Power Time": no longer supplied; 235 x 95 x 40 mm; 410 g
  without batteries; -20 to +40 C; RS232 data and RS485 display; does not say I or II.
- StartTime II manual (Omega Electronics edition v1.1, Feb 2004, and Swiss Timing v2.1, July
  2007), StartTime III (v1.1, Aug 2009), StartTime IV (v1.1, Aug 2011): each has a "Stand alone
  operation (PowerTime)" mode, in which the starter's unit fires without waiting for the
  timer's ready signal.
- IDB1 impulse distribution box manual 3411.510 v2.0 (Dec 2007): wiring example shares a start
  impulse with a PowerTime among other devices.
No launch date for either model was found. The Wayback CDX for omegaelectronics.ch and
swisstiming.com returned no PowerTime URLs (searched 2026-10-19).

Software interfaces:
- Hy-Tek Meet Manager guide (swmm6, omegapowertime.htm): select Omega PowerTime; RS-232 cable,
  phone jack at the timer and 9-pin at the PC, sold by Omega; on the timer choose PC under send
  results; no splits, finish times only; TOP-8 version 2.0 does not work, use a later one.
- Hy-Tek omegapowertime2.htm: open water (OW module) download from the PowerTime.
- Daktronics quick guide ED-13876 Rev 5 (Aug 2013, held): Hy-Tek's timer vendor screen lists
  Omega PowerTime.
- Splash Meet Manager 11 FAQ (Oct 2011): Swiss Timing Powertime, one-way serial, implemented;
  How to Start (May 2010) lists Powertime among supported systems.
- Piccolo White datasheet (10-2015) and Omega 2008 Piccolo page: Piccolo works with PowerTime
  running TOP-8 for swimming.
None of the third-party documents says whether it means the PowerTime or the PowerTime II.

Not given their own pages (athletics or skiing products, outside this wiki's scope, named here
only): GEMINI scoreboard 3449.961 (AVK: 6 or 9 digits at 24 cm or 12 alphanumeric characters at
20 cm, IP54, athletics, cycling, skating, skiing, show jumping); marathon clock 3456.901/.902
(Swiss Timing athletics catalogue 2018 says it is controlled by PowerTime); OST4 start device
(AVK lists an OST4 start transducer as 3431.901, 11.3 x 7.2 x 3.8 cm, 700 g; cable 1712.001
runs from its Tuchel 4-pin socket to the PowerTime's banana start input).

Still to research: launch dates of both models; whether 3361.900 also covered the first
PowerTime; what 3462.700 is; prices.
-->

The PowerTime II is a battery-powered timer, small enough to hold in one hand, with a built-in
thermal printer, made by
[Swiss Timing](../../../vendors/swiss-timing.md) and sold with Omega branding on its
accessories. Swiss Timing offers it for athletics, skiing and swimming.[^datasheet] The operator loads its
programs from a PC. For swimming, the [TOP-8](../../../software/top-8.md) program times up
to eight lanes, each from a judge's pushbutton, and can drive a scoreboard such as the
[Piccolo](../../common/scoreboard/piccolo.md).[^general][^top8][^piccolo] It succeeded the
[PowerTime](powertime.md), which Omega Electronics sold under the same article series.[^top8old]

## Role in the timing system

This section places the PowerTime II among swim timing equipment; the general background on
timing consoles is on the [timers overview](index.md).

The PowerTime II is a timer for small meets and has no touchpad inputs. In swimming it records finishes from judges' pushbuttons, one per lane, through a nine-box harness
plugged into its extension socket, and takes its start from a start system or from its own
START/STOP key.[^general][^top8] It prints every impulse as it arrives and works out each lane's
race time, and Swiss Timing treats the printout as the basis of the official results.[^general] Swiss Timing also sells it as a
backup or supplementary timer for other events.[^datasheet]

A full swimming setup from Swiss Timing's own range pairs it with the
[PowerTime swimming harness](../deck-cabling/powertime-swimming-harness.md), the
[OIT3 pushbuttons](../semi-automatic/pushbutton/swiss-timing.md), a start system such as the
[StartTime III](../starter/starttime-iii.md), and a scoreboard.[^general][^piccolo]

## History and predecessors

This section covers the earlier PowerTime and what the documents show about the two models'
dates.

An Omega PowerTime was in use before the PowerTime II. A Daktronics wiring drawing dated July
1999 gives the address settings for driving its SW-2000 lane displays from a PowerTime.[^sw2000]
An Omega Electronics edition of the TOP-8 manual, document 3361-511-02, describes the same lane
and non-lane modes and lists the same swimming harness (`3361.611`) and nine-input box
(`3361.609`) as the current manual.[^top8old][^top8] The StartTime II start system's 2004
manual, also published under the Omega Electronics name, already had a mode for working with a
PowerTime. Its 2007 edition carries the Swiss Timing name instead.[^st2]

The oldest PowerTime II document found is Swiss Timing's datasheet, whose file was created in
March 2012.[^datasheet] No launch date for either model has been found. An Austrian dealer lists
the original PowerTime as no longer supplied.[^avk]

## Design and hardware

This section describes the unit as the datasheet and the general manual give it.

The case is held in one hand, with the printer at the top, a four-line display of 16 characters
below it, and an 18-key pad: ten digits and eight function keys.[^datasheet][^general] The
function keys are paper advance, START/STOP (which also switches the unit on), correction,
arming (ON/OFF), up and down cursor, ESC and ENTER.[^general] The printer takes 58 mm thermal
rolls up to 29 mm across and prints 24 characters a line.[^general]

Five sockets connect it to other equipment. The start and stop inputs are 3.5 mm mono jacks
and accept any volt-free switch, whether it is open or closed at rest. A 10-pole RJ socket, reached
by opening the battery cover, takes the extension boxes and the swimming harness. A 6-pole RJ
socket carries both the PC and scoreboard outputs, and a 3.5 mm jack takes an external 9 V
adaptor.[^general]

It runs on four AA cells, alkaline or rechargeable, but cannot recharge them itself, even from
its mains adaptor.[^general] Cells can be changed during a race, although impulses that arrive
while they are out are lost.[^general] The datasheet says a lithium cell keeps the data and
clock. The manual says a capacitor on the main board holds the data during a cell change, and
mentions a separate internal lithium battery that only a Swiss Timing service centre may
replace.[^datasheet][^general] A reset button underneath clears the stored results but not the
date and time.[^general]

The two documents disagree on several figures. The datasheet gives the length as 235 mm, the
beeper as about 4 kHz, and a battery life of 50 hours with one roll printed. The manual gives
210 mm, about 1 kHz, and more than 30 hours without serial output or more than 12 hours with
PC and scoreboard output running.[^datasheet][^general] The datasheet rates the case IP55, but
the manual tells users to keep it out of rain and water jets.[^datasheet][^general]

## Connectivity

This section covers the inputs and outputs and the equipment documented to work with the unit.

Contact type is set for each input. If it is set the wrong way, the unit records the release of
a pushbutton instead of the press, and Swiss Timing warns that this can put each time out by several
tenths.[^general] Several units can be synchronised by wiring their start sockets
together, red to red and black to black, and giving one start impulse.[^general] Swiss Timing's
IDB1 distribution box can also share one start impulse between a PowerTime and other timers.[^idb1]

The serial socket has two outputs. The PC line is RS-232 at 9600 baud, 8 data bits, 1 stop bit
and no parity.[^general] The scoreboard line is RS-485 in both specification tables, but the
manual's text and the datasheet's overview call it RS-422.[^general][^datasheet] Two scoreboard
protocols are offered: RollerTime, and a multi-line protocol that drives up to eight lines at
once, for which Swiss Timing gives its [Calypso](../../common/scoreboard/calypso.md) board as an
example.[^general][^top8] The
operator also sets what the board shows, such as minutes to hundredths for a short race, or
turns the output off.[^general]

Two Daktronics manuals also describe a PowerTime link:

- Daktronics SW-2000 lane displays take a PowerTime on their protocol 1, with addresses for up
  to eight lines.[^sw2000]
- The Daktronics [All Sport 5000](../../common/scoreboard-control/all-sport-5000.md) scoreboard
  controller receives PowerTime data through a Venus 7000 computer, using external timer code
  8602, with the PowerTime set to a one-line multi-line board and the computer to 9600
  baud.[^as5000]

Swiss Timing's [StartTime II](../starter/starttime-ii.md),
[StartTime III](../starter/starttime-iii.md) and [StartTime IV](../starter/starttime-iv.md)
start systems each have a PowerTime mode. In it the start system fires without waiting for a
ready signal from the timer.[^st2][^st3][^st4]

## Software and operation

This section covers the general settings and the TOP-8 swimming program.

The unit loads programs over its serial cable from Swiss Timing's PC installer, which finds the
port by itself. Swiss Timing names Standard, Ski and TOP-8 as available programs.[^general]
Before a session the operator checks the date and time, contact types, resolution, scoreboard
format and printer, and clears old results.[^general]

Resolution runs from 1/1000 s to 1 s. Three rounding rules are offered: truncation, ordinary
rounding, and an IAAF rule in which any fraction raises the result to the next unit.[^general]
An arming delay of 0–99 s keeps an input closed after the start, and impulses received while an
input is closed are kept in a separate store from which they can be recovered.[^general] Every
correction or hand-entered time is printed with an asterisk.[^general]

In TOP-8 lane mode, the operator picks an event and heat between 0 and 199, and the start input
is armed. Once the start arrives, the running time shows on the display. After the arming delay
each lane accepts one finish impulse, and the printer records both the time of day and the race
time.[^top8] Pressing 1 to 8 moves the cursor to a lane, 0 closes every lane, and 9 reopens them
all and discards their times. A lane pressed by mistake can be cleared and reopened. If a judge
presses twice and the second press is the real finish, the operator picks it from the store of
received impulses.[^top8] When the race ends the operator can send the results to the PC, and the heat
number steps on by one.[^top8]

Non-lane mode is for a lone judge with one pushbutton, who records competitors as they finish;
the operator then types in each bib number. Swiss Timing gives the marathon and the 1500 m as
examples.[^top8] Version 3.2 added a page time that scrolls results across a board of fewer than
eight lines, and options for numbering finishes automatically in non-lane races.[^top8]

## Meet-management software

This section lists the meet programs that read results from a PowerTime.

[Hy-Tek Meet Manager](../../../software/hy-tek-meet-manager.md) reads a PowerTime over an
RS-232 cable with a phone jack at the timer and a 9-pin plug at the computer. The operator sends
results to the PC from the timer's menu. Only the finish time is transferred, with no splits, and
Hy-Tek says TOP-8 version 2.0 will not work.[^hytek] Its open water module can also download
times from the timer.[^hytekow]
[Splash Meet Manager](../../../software/splash-meet-manager.md) lists the Swiss Timing PowerTime
among the timers it reads, over a one-way serial link.[^splashfaq] Neither program's guide says
whether it means the PowerTime or the PowerTime II.

## Specifications

This section gives the figures from Swiss Timing's datasheet and general manual.

| Item | Value |
|---|---|
| Display | LCD, 4 lines of 16 characters[^datasheet] |
| Keyboard | 10 numeric keys, 8 function keys[^datasheet] |
| Time base | Temperature-compensated quartz; ±1 ppm over −10 to +50 °C when on; ±10 ppm over −20 to +40 °C when off[^general] |
| Resolution | 1/1000–1 s, selectable[^datasheet] |
| Memory | Up to 2000 entries[^datasheet] |
| Printer | Thermal, 24 characters a line, 1.5 s a line, about 2000 lines a roll[^datasheet] |
| Paper | 58 mm wide, 8 m long, up to 29 mm roll diameter[^datasheet][^general] |
| Inputs | Start and stop, 3.5 mm mono jacks; 10-pole RJ extension socket[^general] |
| Outputs | PC RS-232, 9600 baud, 8N1; scoreboard RS-485 (RS-422 in the text); one 6-pole RJ socket[^general] |
| Beeper | About 4 kHz (datasheet); about 1 kHz (manual)[^datasheet][^general] |
| Power | 4 × 1.5 V AA cells; 9–15 V DC external; mains adaptor 9 V DC, 1.2 A[^datasheet][^general] |
| Battery life | 50 h at 20 °C with one roll printed (datasheet); over 30 h, or over 12 h with serial output running (manual)[^datasheet][^general] |
| Operating temperature | −10 to +50 °C[^datasheet] |
| Storage temperature | −30 to +60 °C[^datasheet] |
| Protection | IP55[^datasheet] |
| Dimensions | 235 × 95 × 40 mm (datasheet); 210 × 95 × 40 mm (manual)[^datasheet][^general] |
| Weight | 500 g with batteries[^datasheet] |

## Part numbers and accessories

This section lists the numbers in Swiss Timing's datasheet and manuals. The unit is delivered in
a carrying bag with its system software installed.[^general]

| Item | Number |
|---|---|
| PowerTime II | `3361.900`[^datasheet] |
| Transport bag | `3361.620`[^general] |
| Mini CD with system software | `3462.606`[^general] |
| Thermal paper, 1 roll or 20 rolls | `9051.6042`, `9051.6042PK`[^general] |
| AA cells, 4 supplied | `9035.6109`[^general] |
| Mains adaptor, 230 V Europe, Australia, Great Britain; 115 V USA | `3361.618`, `3361.618.AU`, `3361.618.GB`, `3361.618.US`[^general] |
| Start and stop leads, 3.5 mm jack to two 4 mm sockets | `3361.605`[^general] |
| PC cable, RJ 10-pole to RJ 10-pole | `3361.603`[^general] |
| PC adaptor, RJ 6-pole to Sub-D 9-pole female | `3361.610`[^general] |
| Scoreboard cable, 3 m | `3361.626`[^datasheet] |
| Cable to two scoreboards, 3 m | `3361.627`[^datasheet] |
| Cable to a scoreboard and a PC, 3 m | `3361.628`[^datasheet] |
| Extension box, 1 start and 4 stops | `3361.608`[^general] |
| Extension box, 1 start and 8 stops | `3361.609`[^general] |
| [Swimming harness](../deck-cabling/powertime-swimming-harness.md), 1 start and 8 stops | `3361.611`[^general] |
| [OIT3 pushbutton](../semi-automatic/pushbutton/swiss-timing.md), normally open, 3 m coiled cable | `2872.003`[^datasheet][^general] |
| Start cable, Tuchel 4-pin to two banana plugs, from a Swiss Timing start unit | `1712.001`[^datasheet] |
| [StartTime III](../starter/starttime-iii.md) start system, 230 V | `3399.911`[^general] |
| General user's manual | `3462.501.02` (English), `3462.501.03` (German)[^general] |
| TOP-8 user manual | `3462.511.02`[^top8] |

## See also

- [PowerTime](powertime.md): the earlier Omega model
- [TOP-8](../../../software/top-8.md): the lane-timing program for swimming and athletics
- [PowerTime swimming harness](../deck-cabling/powertime-swimming-harness.md): the pushbutton
  harness for eight lanes
- [Piccolo](../../common/scoreboard/piccolo.md): a Swiss Timing scoreboard listed for use with
  it
- [Timers](index.md): the timing-console overview
- [Swiss Timing](../../../vendors/swiss-timing.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^datasheet]: [Swiss Timing, PowerTime II Timing Device datasheet (3434.525.02 B)](https://www.swisstiming.com/fileadmin/Resources/Data/Datasheets/DOCM_MS_PowerTimeII_0913_EN.pdf).
[^general]: [Swiss Timing, PowerTime II General User's Manual (3462.501.02, version 1.0)](https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3462.501.02_PowerTime2_General.pdf).
[^top8]: [Swiss Timing, User Manual TOP-8 (3462.511.02, version 3.2)](https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3462.511.02_PowerTime2_TOP8.pdf).
[^top8old]: [Omega Electronics, User Manual TOP-8 (3361-511-02, version 2.0)](https://manualzilla.com/doc/5821748/user-manual-top-8) (ManualZilla copy).
[^piccolo]: [Swiss Timing, Omega Piccolo White swimming scoreboard datasheet (10-2015)](https://www.swisstiming.com/fileadmin/Resources/Data/Datasheets/DOCM_AQ_PiccoloWhite_1015_EN.pdf).
[^sw2000]: Daktronics, SW-2000 Series 10" Numeric Digit Display Manual (ED-12156, Rev 14, May 2015), drawing A-118395.
[^as5000]: Daktronics, All Sport 5000 Series Control Console Operation Manual (ED-11976, Rev 32, November 2024), track.
[^st2]: Swiss Timing, StartTime II User's Manual (3399.502.02; Omega Electronics v1.1, 2004; Swiss Timing v2.1, 2007).
[^st3]: Swiss Timing, StartTime III User's Manual (document 3399.504.02, Version 1.1, August 2009).
[^st4]: [Swiss Timing, StartTime IV E-Gun User's Manual (3481.501.02)](https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3481.501.02.pdf).
[^idb1]: Swiss Timing, IDB1 Impulse Distribution Box User's Manual (3411.510, version 2.0, December 2007).
[^avk]: [AVK Group, Power Time](https://www.avkgroup.at/catalog/timing-console-power-time/).
[^hytek]: [Hy-Tek, Meet Manager 6 guide, Omega PowerTime](https://hytek.active.com/user_guides_html/swmm6/omegapowertime.htm).
[^hytekow]: [Hy-Tek, Meet Manager 6 guide, Omega Power Time open water download](https://hytek.active.com/user_guides_html/swmm6/omegapowertime2.htm).
[^splashfaq]: [Splash Software, Splash Meet Manager 11 FAQ](https://wiki.swimrankings.net/images/4/45/Meet_Manager_FAQ.pdf) (October 2011).

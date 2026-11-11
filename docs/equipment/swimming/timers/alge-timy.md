---
title: ALGE Timy
description: >-
  The Timy is ALGE-Timing's hand-held multi-sport timer, in three generations (Timy, Timy2 and
  Timy3), and the timing device in ALGE's semi-automatic swimming systems and swim training
  setups.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Timy
infobox:
  - label: Manufacturer
    value: '[ALGE-Timing](vendors/alge-timing.md)'
  - label: Part number
    value: '`TIMY3 WP-F`, `TIMY3 W-F` (Timy3); Timy2 `PXE`, `XE`; Timy `PXE`, `XE`, `P`, `S`'
  - label: Type
    value: Hand-held multi-sport timer
  - label: Models
    value: 'Timy, Timy2, Timy3 (W without printer, WP with printer)'
  - label: Channels
    value: '9 (C0–C5 at 1/10,000 s, C6–C8 at 1/100 s)'
  - label: Connection
    value: 'D-sub 25-pin multiport, banana sockets for start, finish and display board, photocell DIN socket, USB; WTN radio on the Timy3'
  - label: Dimensions
    value: '204 × 91 × 50 mm (W, XE); 307 × 91 × 65 mm (WP, PXE)'
  - label: Weight
    value: '450 g (W, XE); 650 g (WP, PXE), without battery'
  - label: Power
    value: 'Internal battery pack or six AA cells; 8–22 V DC external (8–15 V on the Timy)'
  - label: Introduced
    value: 'Timy2 PXE, November 2010'
  - label: Manual
    value: '[Timy3 General (E25-03-10)](https://alge-timing.com/downloads/userGuides/Timy3-Allgemein-BE.pdf)'
---

<!--
Research notes, ALGE Timy. Stub surfaced 2026-11-04 while building out alge-tm-swim.md; built
out 2026-11-11.

Downloaded 2026-11-11 from the Timy3 product page (alge-timing.com/en/product/921/timy3-wp-s,
which links all of them) and filed under sources/vendors/alge-timing/ (timers-consoles/ and, for
the leaflet, catalogs-brochures/), each read in full with a PyMuPDF extraction beside it:
- Timy General, E101012 (28 pp): models S and P (standard quartz, -5 C display, both marked as no
  longer produced) and XE and PXE (TCXO, -20 C); 9 channels, C0-C5 1/10,000 s, C6-C8 1/100 s;
  programs free from firmware V0591; memory stated as about 15,000 times on pp 5 and 21 but about
  13,000 on p 14 (flagged in the body); 8 Mbit flash, 2 Mbit RAM; TCXO +/-2.5 ppm (0.009 s/h)
  over -25 to 50 C, aging 1 ppm a year, 0.3 ppm calibrated; standard quartz +/-50 ppm; NC-TIMY
  NiCd pack, about 25 h without printer or about 3,000 printed lines; 8-15 V DC; printer up to
  6 lines/s; default delay times 0.1 s start and 0.03 s other channels.
- Timy2 General, E130522 (32 pp): XE and PXE; 30,000 times; 16 Mbit flash, 4 Mbit RAM; same TCXO
  figures; NM-TIMY2 NiMH, about 60 h without printer, 47 h at three printed lines a minute;
  charging 18 h; 8-22 V DC in; printer 6 lines/s; backlight; default delays 1.0 s and 0.3 s.
- Timy3 General, E25-03-10 (40 pp): W and WP (WP "Design 2" and an older design, differing in
  paper loading); declaration of conformity dated 22 March 2017 names Timy3 W-F and WP-F;
  integrated WTN radio (2.4 GHz, 16 frequencies, 10-100 mW, 5 timing channels, about 350 m line
  of sight); GPS sync with a GPS mouse to 1/10,000 s; sync from other ALGE devices through C0,
  sync output every minute in Backup or PC-Timer, Timy-to-Timy sync over WTN (off, passive,
  active once, active every minute); about 30,000 times; Siemens C161 processor, 12.8 MHz TCXO
  or standard quartz, TCXO figures as Timy2; 128 x 64 LCD, 26-key silicone keypad; connections
  numbered 1-7 (USB, charger, 25-pin multiport, display board, start, finish, photocell);
  channel extension 5 per unit up to 99 channels; NM-TIMY2 or six AA alkaline (W only); battery
  table 50 h alkaline at 20 C (W), 60 h NiMH; with printer 47 h; charging 14 h; printer 5
  lines/s; -20 to 60 C (section 1.1 says +50 to -20 C); RS232 9600 baud default, 2400-38400;
  display board output 2400 baud default; RS485 for special uses; USB for updates, settings and
  PC programs; 26 programs listed including TrackTimer (lanes, athletics and swimming), Swim
  Trainer, Terminal and Voting (judging).
- Timy2 SWIM TRAINER, E110330 (12 pp): two lanes; each lane a touchpad (C1, C3) and a starting
  block with relay sensor (C2, C4), start on C0, e.g. a push button with a STB1 startbeep;
  reaction (swimmer first loads the block), leaving the block, each touch with a lap time, turn
  time (pad pressed until let go), relay take-off; backstroke measures pad-off time from the
  start; only times within 2.5 s count for block times; display board shows block-off then total
  time; PC output format differs from the printout.
- Timy TrackTimer, E23-11-02 (12 pp): one start, a separate finish channel per lane, for
  athletics and swimming; needs a TIDO docking station or MC9 multichannel; wired or WTN-PB
  radio buttons (socket mode from four lanes, up to nine channels); E-START W stays in standard
  mode; display modes lane, rank, alternating, standard, up to eight GAZ or D-LINE boards; RS232
  38,400 baud; its channel table puts C5 at 1/100 s, unlike the general manuals (flagged).
- Timy PC-Timer, E101007 (8 pp): running time every 0.1 s on RS232 at a fixed 38,400 baud with
  impulse strings between; otherwise like Backup. Timy2 PC-Timer E130522 (12 pp) is the same.
- Timy BACKUP, E101007 (8 pp): time-of-day recording, memo mode for bunched finishes, markers
  c, n, i, M. Its channel list calls C1 the start and C2 the finish, unlike every other guide;
  treated as a slip and not used.
- Timy TRAINING, E170123 (16 pp): Training Light and REF, skiing and running examples, no
  swimming content. Timy USB update (7 pp): installer steps only.
- Timy3 leaflet (2 pp): TCXO +/-1 ppm (+/-0.00036 s/h), WTN 15 frequencies, about 100 h
  without printer, NiMH 7.2 V 2 Ah, 8-22 V DC external; up to eight text lines on the display.
  The product page repeats +/-1 ppm, 100 h and 7.2 V 2 Ah and lists the WP-F kit (NM-TIMY2 pack,
  KS-TY1 case, USB cable, PS12A supply, RTP paper). The +/-1 ppm figure works out to 0.0036 s/h,
  not 0.00036, so the leaflet's own conversion is off by a factor of ten.
Other held sources:
- ALGE swimming catalogue V1.113 (2013): semi-automatic system of a Timy2 PXE, eight 023-02
  buttons on an MC8-SWIM cable, STB1 startbeep, GAZ5 board, FLASH; Timy2 swim training program.
- ALGE Aquatic Sports catalogue (June 2026): wired package Timy3 WP, BANG2 with BANG-HS headset,
  023-10 start button, 023-02 finish buttons, D-LINE board, MC8-S2 cable; radio package with
  E-Start W, WTN-PB buttons (one per lane plus one for the start, up to eight lanes) and WTN-DB;
  swim training with a Timy3 WP and 023-02 buttons; open water with Timy3 WP and MC9; diving
  scoring with a Timy3 W per judge on WTN.
- ALGE SwimTime change log v2.5.4.1: Timy USB support from 1.8.9.2 (27 September 2018) for PC
  Timer, Backup, Tracktimer and SwimTrainer; Timy only in automatic mode, bib built from event
  and heat (1.8.11.1, November 2018); improved Timy support 1.9.4.1 (April 2019).
- ALGE product page archive (November 2026): MC8-S2 for eight lanes with Timy3 W(P), 3,594 g,
  training adapter MC2-S; 023-02 and 023-10 list TIMY3 as host.
Web (2026-11-11):
- ALGE NEWS, English edition dated 19 December 2011 (yumpu.com/en/document/view/51614/alge-news,
  page 15): Timy2 PXE on sale from early November 2010, XE expected January or February 2011;
  same case and keypad as the Timy; backlight, double processor speed and memory, NiMH instead
  of NiCd, about three times the battery life; flash 16 vs 8 Mbit, EEPROM 256 vs 64 kbit.
- FIS homologated timing equipment list: Timy PXE ALG.001T.10, Timy XE ALG.004T.10, Timy2 PXE
  ALG.080T.10, Timy2 XE ALG.083T.10, Timy3 W ALG.089.14, Timy3 WP ALG.090.14, all valid to
  30 June 2031. The .14 suffix and a Timy3 manual edition E140702 (copy on baertiming.ch)
  support a Timy3 by 2014; the exact launch date is inferred, not stated.
- Hy-Tek Meet Manager 8 guide, ALGE Timy page: Timy on RS232 to a PC running an ALGE interface
  program that writes one .gen file per race into a shared folder; Meet Manager uses Generic
  Network File Sharing; race number entered on the Timy as event (two digits) and heat (two
  digits), e.g. 0102; file closed when the next race number is entered; empty lanes become NS.
Named but not stubbed (accessories with no further source): NC-TIMY and NM-TIMY2 battery packs,
PS12/PS12A chargers, GPS-TY, TIDO docking station, KS-TY1 case, RTP paper, MC2-S adapter.
Still to research: launch date of the original Timy; price; Timy3 firmware history.
-->

The Timy is a hand-held timer made by [ALGE-Timing](../../../vendors/alge-timing.md) of
Lustenau, Austria, for many sports. In swimming it is the timing device in ALGE's
semi-automatic systems, where a push button per lane stops the time, and in its two-lane swim
training setup.[^cat2026][^swimtrainer] It has gone through three generations, the Timy, the
Timy2 and the Timy3. All three share a case shape, a 26-key silicone keypad, nine timing
channels and a resolution of 1/10,000 second.[^timy][^timy2][^timy3] Each comes in a model
with a built-in thermal printer and one without. What the timer does depends on the
program chosen at switch-on. Its programs include a stopwatch, lane timing and judging
terminals.[^timy3]

See the [semi-automatic timing overview](../semi-automatic/index.md) for how push-button
timing works and the rules that apply to it, and the [TM-SWIM](alge-tm-swim.md) for ALGE's
fully automatic swimming console.

## Models and naming

This section sets out the three generations and their model letters. The original Timy came
in four models. The S and P used a standard quartz crystal and a display rated only to −5 °C,
and both were out of production by the 2010 edition of the manual. The XE and PXE used a
temperature-compensated crystal oscillator (TCXO) and worked down to −20 °C. In each pair the
letter P marks the printer model.[^timy]

ALGE began selling the Timy2 PXE in November 2010 and expected the Timy2 XE to follow early in
2011.[^news] The Timy2 kept the Timy's case and keypad, so the two look almost alike. Inside,
ALGE added a display backlight and doubled the processor speed and memory, and replaced the
nickel-cadmium battery pack with a nickel-metal hydride one that lasts about three times as
long.[^news][^timy2]

The Timy3 drops the XE naming. The Timy3 W has no printer and the Timy3 WP has one, and both
carry ALGE's built-in 2.4 GHz Wireless Timing Network ([WTN](alge-wtn.md)) radio.[^timy3] Its
manual's declaration of conformity names the kit versions Timy3 W-F and WP-F.[^timy3] No ALGE
source gives a launch date. The Timy3's homologation numbers on the FIS list end in .14,
against .10 for the earlier models, which suggests 2014.[^fis] As of 2026, ALGE sells the
Timy3 WP for swimming.[^cat2026]

## Design and hardware

This section covers the case, display and power. The timer is a hand-held unit that can also
stand on a table. The printer models are longer, at 307 mm against 204 mm, to hold the paper
roll.[^timy3] The display is a 128 × 64 pixel graphic LCD showing up to eight lines of
text.[^leaflet] The silicone keypad has two coloured OK keys, green for start inputs and red for
finish inputs, along with function keys whose meanings change with the program and appear on
the display.[^timy3]

The timer records the time of day and works out net times from it. Times go into memory with
the start number and channel. The Timy holds about 15,000 times and the Timy2 and Timy3 about
30,000.[^timy][^timy2][^timy3] The original Timy manual is inconsistent on this point, giving
about 13,000 times in its memory section.[^timy] Firmware sits in flash memory and is updated
free of charge over USB.[^timy3][^leaflet]

All three generations run from six AA cells or an internal battery pack. The printer models
must use the pack.[^timy3] Running time depends on the generation. ALGE gives about 25 hours
for the original Timy's nickel-cadmium pack without printing, and about 60 hours for the
nickel-metal hydride pack of the Timy2 and Timy3, or 47 hours when printing three lines a
minute.[^timy][^timy2][^timy3] The Timy3 leaflet and product page instead give about 100 hours
without the printer.[^leaflet][^product] An external supply of 8–22 V DC, such as ALGE's mains
adapter, a 12 V battery or an ALGE display board, runs the timer and charges the pack. Charging
takes about 14 hours on the Timy3 and 18 hours on the Timy2.[^timy2][^timy3]

## Programs

This section lists the programs relevant to swimming. The Timy3 manual lists 26 programs, and
the user picks one each time the timer is switched on.[^timy3] Those used in aquatics are:

- TrackTimer: one start and a separate finish channel for each lane, for athletics and
  swimming[^tracktimer]
- Swim Trainer: start, turn and relay take-off analysis on two training lanes[^swimtrainer]
- Backup: records time-of-day impulses as a backup system or as a time reference for a
  computer[^timy3]
- PC-Timer: as Backup, but also sends the running time to a computer every tenth of a
  second[^pctimer]
- Terminal and Voting: judging terminals, which ALGE names for diving and artistic
  swimming[^leaflet]

The rest cover other sports, such as ski racing, track cycling, show jumping and speed
climbing.[^timy3] On the original Timy, firmware version V0591 made every program free to
use.[^timy]

## Use in swimming

This section covers the three ways ALGE uses the timer at a pool.

### Semi-automatic timing

In ALGE's semi-automatic package, a timekeeper at each lane presses a push button at the finish.
Each button has its own channel, so the timer ranks the lanes as the times arrive and prints
the order.[^cat2013] The start signal enters on channel 0 and the eight lanes take the remaining
channels. The TrackTimer program then records a separate finish time for each lane from its own
channel.[^tracktimer][^cat2026] In the wired form the buttons, ALGE's
[023-02](../semi-automatic/pushbutton/alge-023-02.md), plug into an eight-lane
[MC8](../deck-cabling/alge-mc8.md) cable. The 2013 catalogue pairs a Timy2 PXE with the
MC8-SWIM version and a [STB1](../starter/alge-stb1.md) startbeep. The 2026 catalogue pairs a
Timy3 WP with the MC8-S2 and a [BANG2](../starter/alge-bang.md) speaker system.[^cat2013][^cat2026]
In the radio form each lane has a WTN-PB wireless button and one more button gives the start,
for up to eight lanes.[^cat2026] From four lanes upward the TrackTimer guide switches the radio
buttons to a WTN mode that gives each one its own channel.[^tracktimer]

The TrackTimer program can drive up to eight ALGE GAZ or [D-LINE](../../common/scoreboard/alge-d-line.md)
display boards, one per lane or one per place, or one eight-digit board showing time, place and
lane in turn.[^tracktimer] The same guide says lane timing also needs either an ALGE
[MC9](alge-mc9.md) multichannel unit or an ALGE docking station.[^tracktimer]

### Training

The Swim Trainer program, introduced on the Timy2, times two lanes in practice. Each lane uses
a touchpad and a starting block fitted with a sensor.[^swimtrainer][^cat2013] On the block it
records three figures: the reaction time, when the swimmer first presses on the block; the
time on the block; and the block-off time, when the swimmer leaves it. In the water it records
each touch with a lap time, and the turn time from touching the pad to leaving it. In a relay it
records the take-off time from the incoming swimmer's touch to the outgoing swimmer leaving the
block. In backstroke it records when each swimmer leaves the pad after the start.[^swimtrainer]
The 2026 catalogue offers the same training setup with a Timy3 WP.[^cat2026]

### Judging and results software

At diving events ALGE uses one Timy3 W per judge as a scoring terminal, linked to the results
computer by the WTN radio.[^cat2026] For swimming results, ALGE's
[SwimTime](../../../software/swimtime.md) program has read times from a Timy over USB since
September 2018. It works with the PC-Timer, Backup, TrackTimer and Swim Trainer
programs.[^swimtime] [Hy-Tek Meet Manager](../../../software/hy-tek-meet-manager.md) takes Timy
results through [Generic Network File Sharing](../../../software/generic-network-file-sharing.md).
An ALGE program on a computer cabled to the Timy writes one file per race into a shared folder,
and Meet Manager reads it from there. The operator enters each race on the Timy as a four-digit
number, the event in the first two digits and the heat in the last two.[^hytek]

## Connections

This section covers the timer's sockets and data outputs. The Timy3 has seven
connections:[^timy3]

- a 25-pin D-sub multiport carrying all nine channels, RS232, RS485, the display-board output,
  power in and out, and a horn output
- banana sockets for the start channel, the finish channel and a display board
- a DIN socket for an ALGE photocell
- USB
- a charger socket

The RS232 port sends each time as a line of text with the start number, channel, time to
1/10,000 second and rank. It runs at 9,600 baud by default and can be set from 2,400 to
38,400.[^timy3] PC-Timer runs at a fixed 38,400 baud.[^pctimer] The display-board output defaults
to 2,400 baud for ALGE's GAZ boards.[^timy3] RS485 links several timers in a network for special
uses.[^timy3] Extension units add five channels each, up to 99 channels.[^timy3]

The timer can set its clock from a GPS receiver to 1/10,000 second, or from another ALGE timer
through the start channel. Two Timy3s can also keep each other in time over WTN. In the Backup
and PC-Timer programs it can send a synchronizing pulse to other devices every full
minute.[^timy3]

## Specifications

This section compares the three generations from their manuals.

| | Timy (XE, PXE) | Timy2 (XE, PXE) | Timy3 (W, WP) |
|---|---|---|---|
| Timing channels | 9 | 9 | 9 |
| Resolution | 1/10,000 s (C0–C5), 1/100 s (C6–C8) | same | same |
| Time base | 12.8 MHz TCXO | 12.8 MHz TCXO | 12.8 MHz TCXO |
| Memory | about 15,000 times | about 30,000 times | about 30,000 times |
| Program memory | 8 Mbit flash | 16 Mbit flash | 16 Mbit flash |
| Display | 128 × 64 LCD | 128 × 64 LCD, backlit | 128 × 64 LCD, backlit |
| Printer | thermal, 6 lines/s | thermal, 6 lines/s | thermal, 5 lines/s |
| Battery | NiCd pack or 6 × AA | NiMH pack or 6 × AA | NiMH pack or 6 × AA |
| External supply | 8–15 V DC | 8–22 V DC | 8–22 V DC |
| Radio | none | none | WTN, 2.4 GHz |
| Temperature | −20 to 60 °C | −20 to 60 °C | −20 to 60 °C |
| Size without printer | 204 × 91 × 50 mm | 204 × 91 × 50 mm | 204 × 91 × 50 mm |
| Size with printer | 307 × 91 × 65 mm | 307 × 91 × 65 mm | 307 × 91 × 65 mm |
| Weight | 450 g / 650 g | 450 g / 650 g | 450 g / 650 g |

Sources: the three general manuals.[^timy][^timy2][^timy3] Weights are without battery or paper.

The sources disagree on several Timy3 figures. The manuals give the TCXO's accuracy as ±2.5 ppm
over −25 to 50 °C, ±0.3 ppm when calibrated at 25 °C, and up to 1 ppm a year of
drift.[^timy2][^timy3] The leaflet and product page give ±1 ppm, which they also express as
±0.00036 s/h. At 1 ppm the drift is 0.0036 s/h, so the converted figure is off by a factor of
ten.[^leaflet][^product] The leaflet gives the WTN radio 15 frequencies, while the manual gives
16.[^leaflet][^timy3] The TrackTimer guide lists channel 5 at 1/100 second, while the general
manuals put it at 1/10,000 second.[^tracktimer][^timy3]

## Part numbers and accessories

This section lists the swimming accessories named in ALGE's catalogues.

| Item | Use |
|---|---|
| [023-02](../semi-automatic/pushbutton/alge-023-02.md) push button | finish button for each lane; the longer-cabled 023-10 is used for the start |
| [MC8](../deck-cabling/alge-mc8.md) cable (MC8-SWIM, MC8-S2) | connects eight lane buttons to the timer |
| [WTN](alge-wtn.md) devices (WTN-PB, WTN-DB) | radio push buttons and a display-board receiver |
| [MC9](alge-mc9.md) multichannel | extra timing channels, used in lane timing and open water |
| [STB1](../starter/alge-stb1.md) startbeep | start tone on the start channel (2013 package) |
| [BANG2](../starter/alge-bang.md) speaker system | start tone and commands (2026 package) |
| [D-LINE](../../common/scoreboard/alge-d-line.md) display board | running and finish time |
| [P6-8](alge-p6-8.md) printer | external log printer |

Sources: the 2013 and 2026 catalogues and the TrackTimer guide.[^cat2013][^cat2026][^tracktimer]

## See also

- [TM-SWIM](alge-tm-swim.md): ALGE's fully automatic swimming timing console
- [Timer S4](alge-timer-s4.md): an earlier ALGE multi-sport timer with a swimming program
- [023-02](../semi-automatic/pushbutton/alge-023-02.md): the push button used with it
- [Semi-automatic timing](../semi-automatic/index.md): the semi-automatic timing overview
- [Timers](index.md): the timers overview
- [ALGE-Timing](../../../vendors/alge-timing.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^timy]: [ALGE-Timing, Timy General](https://alge-timing.com/downloads/userGuides/timy-allgemein-be.pdf) (version E101012).
[^timy2]: [ALGE-Timing, Timy2 General](https://alge-timing.com/downloads/userGuides/Timy2-Allgemein-BE.pdf) (version E130522).
[^timy3]: [ALGE-Timing, Timy3 General](https://alge-timing.com/downloads/userGuides/Timy3-Allgemein-BE.pdf) (version E25-03-10).
[^swimtrainer]: [ALGE-Timing, Timy2 Swim Trainer](https://alge-timing.com/downloads/userGuides/Timy2-SWIM-Trainer-BE.pdf) (version E110330).
[^tracktimer]: [ALGE-Timing, Timy TrackTimer](https://alge-timing.com/downloads/userGuides/Timy-TrackTimer-BE.pdf) (version E23-11-02).
[^pctimer]: [ALGE-Timing, Timy PC-Timer](https://alge-timing.com/downloads/userGuides/Timy-PC-Timer-BE.pdf) (version E101007).
[^leaflet]: [ALGE-Timing, Timing Device Timy3](https://alge-timing.com/downloads/leaflets/Timy3-PE.pdf) (product leaflet).
[^product]: [ALGE-Timing, Timy3 product page](https://alge-timing.com/en/product/921/timy3-wp-s).
[^cat2013]: [ALGE-Timing, The Specialist for Swimming](https://www.freker.se/dokument/ALGE%20Swimming-KE-1.PDF) (catalogue V1.113, 2013).
[^cat2026]: [ALGE-Timing, Aquatic Sports](https://alge-timing.com/downloads/leaflets/Swimming_KE.pdf) (catalogue, June 2026).
[^news]: [ALGE-Timing, ALGE News](https://www.yumpu.com/en/document/view/51614/alge-news) (English edition, December 2011), Timy2.
[^fis]: [FIS, Homologated timing equipment](https://www.fis-ski.com/DB/information/homologated-timing-equipment.html).
[^swimtime]: [ALGE-Timing, History file for SwimTime](https://alge-timing.com/alge/download/software/Change_SwimTime.txt).
[^hytek]: [Hy-Tek, ALGE Timy](https://hytek.active.com/user_guides_html/swmm8/algetimy.htm) (Meet Manager 8 guide).

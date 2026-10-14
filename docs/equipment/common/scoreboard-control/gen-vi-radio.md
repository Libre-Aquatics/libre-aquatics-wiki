---
title: Daktronics Gen VI radio
description: >-
  Gen VI is the sixth generation of the Daktronics 2.4 GHz radio link between All Sport and
  OmniSport consoles and the receivers inside scoreboards and portable clocks.
tags:
  - Equipment
  - Scoring
  - Timing
infoboxTitle: Gen VI radio
infobox:
  - label: Manufacturer
    value: Daktronics
  - label: Part number
    value: '`0P-1110-0013` (radio/wire switch card); antenna extension kits `0A-1196-0243`, `0A-1196-0280`, `0A-1196-0281`, `0A-1196-0284`'
  - label: Type
    value: Wireless scoreboard control link
  - label: Frequency
    value: 2.4 GHz spread spectrum
  - label: Connection
    value: Transmitter in the console; receiver in the display on a 5- or 6-pin power/signal lead
  - label: Range
    value: 500 ft (152 m) indoors, 1500 ft (457 m) outdoors
  - label: Introduced
    value: 2011–2012
  - label: Manual
    value: '[Gen VI Radio Installation Manual (DD2362277 Rev 07)](https://www.daktronics.com/web-documents/customer-service-manuals/dd2362277.pdf)'
---

<!--
Research notes, Daktronics Gen VI radio. Stub created October 2026 while building out
pc-2001.md; built out 2026-10-13.

Held sources, read in full or in their radio sections:
  - sources/vendors/daktronics/accessories/daktronics-gen-vi-radio-installation-manual-p1110-
    dd-2362277 (P1110, DD2362277 Rev 07, 2 September 2021, copyright 2015-2021). Whole text
    read, including the Appendix A drawings as extracted text. Facts used: receiver mounting
    (hook-and-loop, outdoor internal bracket); drawing list and title blocks; post-March-2013
    indoor boards have U-bolt holes guarding the antenna; radio/wire switch card 0P-1110-0013
    (DWG-168045, first drawn June 2002, revised November 2012); dual radio with an RC-100
    base station (receiver firmware 1.4+, base station 3.7+; whichever is active first wins;
    receivers a couple of feet apart; splitter W-2914 on driver jack J21, adapter W-2913,
    extra J45 harness 0A-1388-0004 to J22 on legacy drivers); antenna extension kit
    0A-1196-0243 and the Remote Antenna Installation Quick Guide DD3548818; CHAN and BCAST
    1-8, international units BCAST 1-4; master broadcast B0 C00; defaults B1 C01; bX CY shown
    at power-up then US or EU; US radios higher power and all groups, EU lower power and groups
    1-4, the two types not compatible; LEDs on transmitter (POWER green, STATUS amber, DATA red)
    and receiver (POWER green, RADIO IN RANGE amber, DATA OUT red); receiver search order
    (own channel, group broadcast, master broadcast, diagnostics channel, repeat); receiver
    label LL-2567 Rev 01 reading 2.4GHZ (Figure 3); three typical configurations; channel
    table; troubleshooting (BCAST 0 CHAN 0 test, up to 30 s to link, move console within
    20 ft); range 500 ft indoor / 1500 ft outdoor, antennas at least 20 ft apart, consoles at
    least 20 ft apart and never on the same setting; line-of-sight obstacles list (fence,
    low-E or tinted glass, trees, concrete or metal, fog and rain, crowds); keep Wi-Fi hotspots
    and cellular repeaters away; diagnostics need radio firmware 1.3+ both ends and All Sport
    5000 4.0.9+; white firmware sticker; four tests (signal level 00-99, missed packets 00-99,
    radio channel, server version shown as rX / _Y); indoor strength should be in the upper
    90s; strength is averaged and excludes missed packets; diagnostics behave like the master
    broadcast and capture unconnected receivers only; on server loss the receiver waits 10 s;
    a flashing decimal shows a test is running.
    Drawing dates: DWG-1109105 (indoor receiver) drawn 7 August 2012, rev 1 July 2013, rev 2
    March 2014; DWG-1109181 (outdoor) rev 1 March 2014, adds Gyrus driver view February 2015
    (W-2909 radio plug, W-2913 between W-2909 and J45); DWG-1109252 (dual radio) drawn
    8 August 2012; DWG-1130990 drawn March 2013, RC-100 changed to RC-200 May 2017;
    DWG-1166771 drawn March 2014; DWG-202943 riser drawn January 2004 for Gen V, retitled
    August 2012 to cover Gen VI, and states a system is all Gen V or all Gen VI.
    Receiver dials per drawing: FUNC, CHAN, BCAST, each 0-8; factory F1 B1 C1; leave FUNC at 1;
    four Phillips screws on the case.
  - timers-consoles/daktronics-all-sport-5000-series-control-console-operation-manual-p1196-
    ed-11976 (Rev 32, 2024), Setting Radio Channels and Radio Diagnostics: same scheme; Gen V
    receivers have groups 1-4, and on Gen V groups 2 and 4 only channels 1-4 work; Gen IV
    channel drawing DWG-203113 and Gen VI channel guide DWG-1109870.
  - timers-consoles/daktronics-omnisport-2000-timing-console-operation-manual-p1240-ed-13312-23
    (Rev 16, 2019): same radio section, with aquatic examples (one console for a typical high
    school pool; a natatorium with several pools each with its own board and controller).
  - timers-consoles/daktronics-all-sport-omnisport-revision-histories-dd-3679410 (Rev 06,
    2024): All Sport 1600 and 5000 v2.0.0 (15 January 2003) add group and channel selection
    for Gen 4 radios; All Sport 1600 v4.0.2 (21 August 2011) goes from 4 to 8 groups "with Gen
    VI radio update"; All Sport 5000 v4.0.3 (27 February 2012) 8 groups; OmniSport 2000 v12.2.8
    (8 February 2012) maximum group raised from 2 to 8 for Gen V and VI; All Sport 5000 v4.0.9
    (26 March 2014) adds the radio diagnostics menu; All Sport 5500 v4.0.7 (July 2017) 8 groups;
    All Sport MX-1 v2.6 adds a Gen VI scoreboard radio test.
  - pace-clocks: PC-2001 (ED-13737), PC-2002 (ED-14253) and TI-2022 (ED-13736) manuals: optional
    internal receiver, refer to the Gen VI manual, b1 C1 shown at power-up; W-2913 adapter.
    PC-2001 spec sheet SL-05394 (2013) lists 2.4 GHz spread spectrum radio control (SL-04370).

Web (October 2026):
  - Daktronics KB DD2122306 (changing receiver settings): Gen V has a blue label, a CHAN rotary
    switch 1-8 and a BCAST jumper on J4/J5 for groups 1-4 (groups 2 and 4 only channels 1-4);
    Gen VI has a gray label and CHAN and BCAST rotary switches 1-8, FUNC left at 1; both ship
    B1 C1; Gen V manual is ED-13831. Receiver sits behind the black antenna, usually at the front.
  - Daktronics KB DD3101711: Gen VI receiver on All Sport 1600/5000/5500 blank with in-range
    light off and settings flashing; the dials were not seated; turn each a full turn and reset.
  - Daktronics KB 000025864 (no date): skipping and lag near new 5G towers on 2.4 GHz All Sport
    radio, Gen 4, 5 and 6, on All Sport 1600, 3000 and 5000; the radio does not reject the
    adjacent 5G bands; indicators signal strength about 80 or below or 5+ dropped packets a
    minute with a tower added within 1000 ft; fix is bandpass filter kit 0A-1110-0165 between
    receiver cable and antenna, one per scoreboard.
  - Daktronics KB 000001140: console antenna extension kits 0A-1196-0284 (25 ft), -0280
    (50 ft), -0281 (100 ft), for Gen 5 and Gen 6, to put the antenna outside a press box;
    low-E glass named as the cause; separate article DD3361927 for the fixed antenna released
    23 May 2016. The manual's 0A-1196-0243 is a fourth number; its length is not given.
  - Daktronics All Sport control console product page: radio option is 2.4 GHz spread
    spectrum, no signal wire, 64 non-interfering channels, and a multi-broadcast feature
    Daktronics calls exclusive. Reseller av-iq.com repeats this and adds frequency hopping,
    FCC and UL, and 0-70 C (32-158 F); not used in the text. Whether 64 channels equals the
    manuals' eight groups of eight is inferred, not stated, and the text does not assert it.
  - FCC: Daktronics grantee codes P7E (2002 HS-200 wireless microphone; 2005 902-928 MHz
    remote control system P7E-04262005P1110, the RC-100 era) and 2A4GK (2022 and 2025
    2.4 GHz modules). No grant matches the Gen VI transmitter or receiver; it probably uses a
    third-party module certified under the module maker's code, but that is inferred and
    unverified. A photo of a receiver's FCC label would settle it.

Still to research: the Gen VI part numbers for the transmitter and receiver themselves (none
in any held document); the Gen V manual ED-13831; the Gen IV generation and its date; what the
FUNC dial does at settings other than 1; the length of 0A-1196-0243.
-->

Gen VI is the sixth generation of the Daktronics radio link that carries scoreboard data from a
console to a display without a signal cable. A transmitter fitted to an All Sport or
[OmniSport 2000](../../swimming/timers/omnisport-2000.md) console sends to a receiver mounted
inside each scoreboard or portable clock, such as the
[PC-2001](../pace-clock/pc-2001.md) and [PC-2002](../pace-clock/pc-2002.md) pace
clocks.[^manual][^omni][^pc2001] It runs in the 2.4 GHz band, as did the Gen IV and Gen V
radios before it.[^kb5g] Consoles began supporting its eight broadcast groups in 2011 and 2012,
and the installation drawings date from August 2012.[^revhist][^manual]

## Role in the scoring system

This section places the radio between console and display; the
[scoreboard control overview](index.md) covers the other ways a board is fed.

The radio replaces the wire from a console's scoreboard output to the display. Daktronics sells
it as an option on its All Sport consoles.[^product] The console detects a fitted transmitter by
itself and asks for radio settings once a sport code is chosen.[^manual][^as5000] The OmniSport
2000 manual uses aquatic examples. One console serves a typical high school pool, and a
natatorium with several pools can give each pool its own board and controller on one shared
radio scheme.[^omni]

## Generations

This section sets out what the sources say about the generations before Gen VI.

Daktronics names Gen IV, Gen V and Gen VI radios, all on 2.4 GHz.[^kb5g] All Sport 1600 and All
Sport 5000 software first let the operator choose a Gen IV radio's group and channel in
version 2.0.0 of January 2003.[^revhist] A Daktronics system drawing for multiple broadcast groups was first drawn
in January 2004 for Gen V and retitled in August 2012 to take in Gen VI. It notes that a system
must be entirely Gen V or entirely Gen VI.[^manual]

The two later generations differ in their receivers:

- A Gen V receiver carries a blue label. Its channel is set on a rotary switch, 1 to 8, and its
  broadcast group by a jumper, 1 to 4. On groups 2 and 4 only channels 1 to 4 are
  usable.[^kbsettings][^as5000]
- A Gen VI receiver carries a gray label and has rotary switches for both channel and
  broadcast group, 1 to 8 each, plus a function switch that stays at 1.[^kbsettings][^manual]

Console software followed the change to eight groups. The All Sport 1600 moved from four to
eight groups in version 4.0.2 of August 2011, a release its history ties to the Gen VI
radio. The All Sport 5000 followed in version 4.0.3 of February 2012. The OmniSport 2000 raised
its limit from two groups to eight in version 12.2.8, also February 2012.[^revhist]

## Design and hardware

This section describes the transmitter, the receiver and their antennas.

The transmitter sits at the back of the console with three LEDs. POWER (green) shows the
transmitter has power. STATUS (amber) stays lit while the radio runs as the server. DATA (red)
flickers as the console passes it data.[^manual]

The receiver is a small case fixed inside the display with hook-and-loop strips. Most outdoor
boards also have a bracket for it.[^manual] Its antenna mounts on the outside face of the board
through a drilled hole. Indoor boards built after March 2013 have holes for U-bolts that guard
the antenna.[^manual] Four screws hold the cover, and under it are the FUNC, CHAN and BCAST
dials.[^manual] The receiver's own LEDs show POWER (green), RADIO IN RANGE (amber) once it has
found a console, and DATA OUT (red). DATA OUT flashes at random while data arrives and pulses
steadily while the receiver searches.[^manual] A label on the cover marked `LL-2567` reads
2.4 GHz.[^manual]

The receiver draws power and passes data through the display's driver over a 5-pin lead.
Some boards and clocks need adapter `W-2913` to meet the receiver's 6-pin plug.[^manual][^pc2001]
On an indoor board with a radio/wire switch, card `0P-1110-0013` sits between the receiver, the
wired signal input and the driver, so the board can take either source.[^manual]

Two regional versions exist. A receiver shows US or EU after its settings at power-up. The US
version, for the United States and Canada, transmits at higher power and has all eight groups.
The EU version, for Europe and other international markets, has lower power and groups 1 to 4
only. The two types do not work together.[^manual]

## Channels and broadcast groups

This section explains how a receiver decides which console to obey.

Each receiver is set to a channel (1 to 8) and a broadcast group (1 to 8). It accepts data on
three addresses: its own group and channel, its group's broadcast channel (channel 0), and the
master broadcast (group 0, channel 0) that reaches every receiver in range.[^manual] At power-up
it tries those addresses in turn, then a diagnostics channel, and repeats until it finds a
console. It then stays on that console until either end is switched off.[^manual] Every
receiver ships set to group 1, channel 1.[^manual][^kbsettings]

A console asks for its group and channel when a game starts. Resuming a game keeps the last
settings.[^manual][^as5000] Daktronics describes three arrangements:

- One console for every board, all left on group 1, channel 1, so each board shows the same
  data.[^manual]
- Several consoles in one group, each on its own channel. A master console on group 0,
  channel 0 can drive every board at once.[^manual][^omni]
- Several groups, where a console addresses one board, one whole group on channel 0, or all
  boards. Daktronics' example is a split basketball court that can be scored as two games or
  joined as one.[^manual]

The settings a board holds appear on its digits at power-up as, for example, b1 C1. They can be
read that way without opening the board, once nearby radio consoles are switched
off.[^manual][^pc2001] Daktronics' product page gives the radio 64 non-interfering
channels.[^product] The manuals instead describe eight groups of eight channels and do not use
that figure.[^manual][^as5000]

## Installation and range

This section gives Daktronics' siting rules and fault-finding steps.

Daktronics gives a range of 500 ft (152 m) indoors and 1500 ft (457 m) outdoors. It also sets a
minimum of 20 ft (6.1 m) between console and display antennas, and the same between two
consoles, which must never share a setting.[^manual] The antennas should stand upright with a
clear line of sight. The manual lists what blocks the signal: chain-link fence, tinted or low-E
glass, trees, concrete and metal, fog and rain, and a crowd standing in front of the
console.[^manual] The manual also advises siting both
antennas far from Wi-Fi hotspots and cellular repeaters.[^manual]
Daktronics sells console antenna extension kits of 25, 50 and 100 ft to put the antenna outside
a press box, naming low-E glass as the usual reason.[^kbant]

A Daktronics support article reports that new 5G cell towers nearby can cause skipping and lag, because the
2.4 GHz receiver does not reject the neighbouring 5G bands. The remedy is a bandpass filter kit
fitted inside each affected board between the receiver cable and its antenna.[^kb5g]

When a board stays blank, the manual's first test is to set the console to the master
broadcast, which can take up to 30 seconds to link. If the board still fails, moving the console
within 20 ft of it separates an antenna or interference problem from a faulty unit.[^manual] A
Gen VI receiver that flashes its settings and never shows RADIO IN RANGE may have dials that are
not fully seated. Daktronics' fix is to turn each dial a full turn and set it again.[^kbdials]

### Dual radios

This section covers a board that takes two wireless controllers.

A display can hold a Gen VI receiver alongside an RC-100 or RC-200 base station. A facility can
then run practices from a handheld [RC-100](../../diving/rc-100.md) or
[RC-200](../../diving/rc-200.md) and games from a wireless All Sport console.[^manual] The board
follows whichever controller its receiver finds active first, until that signal stops. The
setup needs Gen VI receiver firmware 1.4 or later and RC-100 base station firmware 3.7 or
later. The two units mount a couple of feet apart.[^manual]

### Diagnostics

This section covers the radio test menu.

With radio firmware 1.3 or later at both ends, an All Sport 5000 running version 4.0.9 (March
2014) or later has a radio test menu.[^manual][^revhist] Its four tests each send a command to
the receiver and show the answer on the board's clock digits:[^manual][^as5000]

- Signal level, from 00 (no console in range) to 99. Daktronics expects indoor installations to
  read in the upper 90s.
- Missed packets since the test began, ideally 00.
- The receiver's group and channel, shown as bX and CY.
- The receiver's firmware version, shown as rX followed by _Y.

The signal figure is an average over received packets. A board can therefore show high signal
strength and still drop data.[^manual] A test captures only receivers not already linked to
another console.[^manual]

## Specifications

| | |
|---|---|
| Manufacturer | Daktronics, Brookings, South Dakota[^manual] |
| Band | 2.4 GHz spread spectrum[^product][^kb5g] |
| Channels | 1–8 per broadcast group[^manual] |
| Broadcast groups | 1–8 (US); 1–4 (EU)[^manual] |
| Default setting | Group 1, channel 1[^manual] |
| Range | 500 ft (152 m) indoors; 1500 ft (457 m) outdoors[^manual] |
| Minimum antenna separation | 20 ft (6.1 m)[^manual] |
| Diagnostics | Radio firmware 1.3 or later; All Sport 5000 version 4.0.9 or later[^manual] |
| Consoles | All Sport 1600, All Sport 5000, OmniSport 2000 and other All Sport consoles[^revhist][^kbant] |

## Part numbers and accessories

This section lists the parts Daktronics names. No document seen gives a part number for the Gen
VI transmitter or receiver themselves.

- `0P-1110-0013`, radio/wire switch card for indoor boards.[^manual]
- `W-2913`, adapter harness from the receiver's 6-pin plug to the display's 5-pin
  connector.[^manual][^pc2001]
- `W-2914`, splitter cable for a receiver and a base station on one driver.[^manual]
- `W-2909`, radio lead on boards with Gyrus driver trays, drawn from 2015.[^manual]
- `0A-1388-0004`, second J45 harness for a base station on older drivers.[^manual]
- `0A-1196-0243`, radio antenna extension kit named in the manual.[^manual]
- `0A-1196-0284`, `0A-1196-0280`, `0A-1196-0281`, console antenna extension kits of 25, 50 and
  100 ft.[^kbant]
- `0A-1110-0165`, bandpass filter kit against 5G interference.[^kb5g]

## See also

- [All Sport 5000](all-sport-5000.md) and [All Sport 1600](all-sport-1600.md): consoles that carry the transmitter
- [PC-2001](../pace-clock/pc-2001.md) and [PC-2002](../pace-clock/pc-2002.md): pace clocks that take the receiver
- [RC-200](../../diving/rc-200.md): the handheld controller that can share a board with it
- [WA-3](wa-3.md): Colorado Time Systems' 2.4 GHz scoreboard adapter
- [Scoreboard control](index.md): the scoreboard control overview
- [Daktronics](../../../vendors/daktronics.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^manual]: [Daktronics, Gen VI Radio Installation Manual (DD2362277 Rev 07, 2021)](https://www.daktronics.com/web-documents/customer-service-manuals/dd2362277.pdf), with drawings.
[^as5000]: [Daktronics, All Sport 5000 Series Control Console Operation Manual (ED-11976 Rev 32, 2024)](https://www.daktronics.com/web-documents/customer-service-manuals/ed11976.pdf), radio sections.
[^omni]: [Daktronics, OmniSport 2000 Timing Console Operation Manual (ED-13312 Rev 16, 2019)](https://www.daktronics.com/web-documents/customer-service-manuals/ed13312.pdf), radio settings.
[^revhist]: Daktronics, All Sport & OmniSport Revision Histories (DD3679410 Rev 06, 2024).
[^pc2001]: [Daktronics, PC-2001 Pace Clock System Display Manual (ED-13737 Rev 09, 2023)](https://www.daktronics.com/web-documents/customer-service-manuals/ed13737.pdf), radio receiver.
[^product]: [Daktronics, All Sport Control Consoles](https://www.daktronics.com/en-us/products/software-and-controllers/all-sport-control-console) (product page, October 2026).
[^kbsettings]: [Daktronics, How do I change wireless scoreboard radio receiver settings? (DD2122306)](https://www.daktronics.com/en-us/support/kb/DD2122306).
[^kbdials]: [Daktronics, Gen VI radio receiver: broadcast and channel dials not seated (DD3101711)](https://www.daktronics.com/en-us/support/kb/DD3101711).
[^kb5g]: [Daktronics, All Sport radio data skipping or delayed near 5G cell towers (000025864)](https://www.daktronics.com/en-us/support/kb/000025864).
[^kbant]: [Daktronics, All Sport console radio antenna extension kit (000001140)](https://www.daktronics.com/en-us/support/kb/000001140).

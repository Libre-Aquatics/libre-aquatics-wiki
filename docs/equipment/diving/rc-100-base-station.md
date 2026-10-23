---
title: Daktronics RC-100 base station
description: >-
  The RC-100 base station is the Daktronics 900 MHz radio receiver that links RC-100 handhelds
  to a scoreboard or, for judging, to an OmniSport 2000 timing console.
tags:
  - Equipment
  - Diving
  - Scoring
infoboxTitle: RC-100 base station
infobox:
  - label: Manufacturer
    value: Daktronics
  - label: Part number
    value: '`0A-1110-0030`, later `0A-1110-0037` (tabletop kit); `0A-1110-0045` (outdoor); `0A-1110-0104` (remote start/stop)'
  - label: Type
    value: Wireless base station
  - label: Connection
    value: CAN to the OmniSport 2000 J14 or J15 port on `W-1823`; RS-232; 6-pin plug inside a scoreboard
  - label: Radio
    value: Frequency-hopping, 902–928 MHz; channels 1–15
  - label: Range
    value: 10–500 ft (3–152 m) from the handheld
  - label: Power
    value: 12 V AC (tabletop)
  - label: Firmware
    value: '`ED14906`'
  - label: Succeeded by
    value: '[RC-200 base station](equipment/diving/rc-200-base-station.md)'
  - label: Manual
    value: '[Remote Control System RC-100 All Sport Operation Manual (ED-15133)](https://www.daktronics.com/web-documents/customer-service-manuals/ed-15133.pdf)'
---

<!--
Research notes, RC-100 base station. Stub surfaced 2026-10-22 while building out rc-100.md;
built out to a full article the same day. rc-100.md holds the handheld-side notes.

Sources:
- Daktronics ED-15133 Rev 11 (9 February 2018), Remote Control System RC-100 All Sport
  Operation Manual, held under sources/vendors/daktronics/accessories/, read in full; drawings
  rendered with PyMuPDF.
  - Section 2: three housings (inside a display, tabletop box, outdoor enclosure for some
    uses); 10-500 ft from the handheld; antenna upright, L-shaped from the side.
  - Section 3: rotary switches S2 FUNCTION and S1 CHANNEL; jumper X1 SERVER/CLIENT, server
    with the jumper on the lower posts (factory), client on the upper. Function table (server):
    0 last used; 1 CAN handheld judges' console; 2 Gen I All Sport scoreboard controller; 3 a
    DataTime/DataMaster message-display function; 4, 6-E reserved; 5 Gen II All Sport; F reset
    memory and test (power up on F, wait 10 s, power down, set the wanted function). Client
    mode: the function switch sets the display group, 0 all groups, 1-4 groups. A switch change
    takes effect after about 5 s; at power-up the base station always takes the switch setting.
    All Sport normally on 5; 2 for Gen I handhelds; all base stations at one site on the same
    function. Firmware: Gen I base stations labelled ED14906 v2.1 or lower, Gen II v2.2 or
    higher. Channels 1-15, channel 1 the default for one base station; handheld and base station
    must match. One server per channel: at power-up it checks for another and flashes IN RANGE
    quickly if it finds one. Frequency hopping; servers within about 2000 ft (610 m) must
    synchronise through sync groups: sync channel 0 for all, 1 for primary group 2-5 (extended
    7-10, 12-15), 6 for primary 7-10 (extended 12-15), 11 for primary 12-15. A synced station's
    IN RANGE flashes about every 5 s, the count giving the sync group. Stations on non-sync
    channels keep scanning whenever no handheld is connected, so power-up order does not matter
    for them; stations on 1, 6 and 11 scan only at power-up, so must be powered in that order.
    Worked examples: a central always-on station on channel 1 within 3000 ft (914 m) of the
    rest, with 6 and 11 left unused; or three independent groups synced on 1, 6 and 11.
    LEDs (figure 10): POWER green; CL/RS232 TX red (current loop to scoreboards, RS-232 to
    devices such as a DakTennis computer); CL/RS232 RX green; IN RANGE amber (searching at
    start-up, flashing if another server shares the channel, then on while a handheld is
    connected; on a client, on while linked to a server; also sync status); CAN TX green and
    CAN RX red (traffic with an OmniSport 2000). Errors: TX, RX, IN RANGE and CAN TX flash long
    then short, five times, then the unit resets.
  - Section 18: NO SERVER FOUND, NO RESPONSE (cycle base station power; check for another
    station on the channel), CHANNEL IN USE, LOW SIGNAL STRENGTH (station off, channel changed,
    or handheld too far or too close). ALT then CONNECT shows firmware revision and date, sync
    state and channel.
  - Drawings: DWG-227465 indoor installation (11 November 2004; rev 02 June 2008, rev 03 August
    2011 function chart, rev 04 February 2015 Gyrus driver and adapter harness, rev 05 January
    2016): base station board with a 6-pin plug P1 to the driver; on Gyrus drivers into jack
    J21; legacy view for boards built before April 2015 names base station 0A-1110-0035 and the
    original harness; mounted on the scoreboard access door with four 5 in hook-and-loop
    strips; antenna outside the door through a 9/32 in hole, tooth lock washer and nut; antenna
    cable from the bottom of the unit to keep water out; later boards see DWG-1130990.
    DWG-236394 outdoor installation (11 March 2005; rev 01 June 2008, 02 August 2011, 03
    February 2015 dropping a "before Jan 2007" view): same mounting; legacy drivers through
    adapter W-2913 from the 6-pin plug to the driver's 5-pin J45 RADIO; Gyrus drivers direct to
    J21. DWG-266717 DistaView scoreboard installation (14 March 2006; rev 03 April 2010 added
    function 5; rev 04 March 2015): same pattern with W-2913 to J45. DWG-230608 judging riser:
    tabletop 0A-1110-0030 with 12 VAC power, RS232 and CAN sockets, W-1823 to the OmniSport
    2000, function 1, channels 1-15. DWG-317837 server/client riser (28 August 2007; rev 02
    February 2016 added settings): two TI-2003 play clocks at either end of a football field,
    each with an internal base station; server receives from the RC-100 and re-sends to the
    client; X1 shunt P-1072; both on function 5 and channel 1; a handheld talks to one server
    at a time. DWG-319037 remote start/stop riser (5 September 2007; rev 05 August 2016):
    outdoor base station 0A-1110-0104 on function 5, channels 1-15, factory channel 1, with a
    25 ft cable to J-box 0A-1110-0103 (RJ-11/DB9 with power, 18 V DC wall pack A-3430138, which
    replaced 0A-1611-0508 in 2016) and an 8 ft cable 0A-1120-0176 to the All Sport console; kit
    0A-1110-0106 = handheld kit 0A-1110-0102, J-box, base station, cable, T-1118 transformer
    and insert 0G-319079. Tennis risers (DWG-231298, 233254 and others): kit 0A-1110-0037 with
    T-1118 12 VAC wall pack and cable W-1267 to a DakTennis computer, replacing 0A-1110-0030 in
    revisions of October-December 2015; outdoor base station 0A-1110-0045 per DWG-1040167 when it
    must be moved for line of sight.
- Daktronics Aquatics Maintenance Checklist DD3691471 (2017), held: base station firmware 3.0
  or later for judging, function 6 from 3.0 and 1 before; a 900 MHz antenna. ED-15133 Rev 11
  (2018) and every drawing keep 1 for judging and 6 reserved. Flagged in the body.
- Daktronics Gen VI Radio Installation Manual DD2362277, held: a scoreboard can carry an RC-100
  base station and a Gen VI receiver together through splitter W-2914 (DWG-1109252, August
  2012); base station firmware 3.7 or later and Gen VI 1.4 or later; the first active
  transmitter keeps control.
- RC-200 manual DD3572889, held: the RC-200 base station's indoor installation drawing
  (DWG-3640534) is the RC-100's 2004 drawing reissued.
- Daktronics KB (fetched 2026-10-22): DD2264609 generation pairing (Gen II handheld on a Gen I
  base station only on function 2; Gen II on Gen II uses 5; Gen II handhelds shipped from
  August 2006); DD2233192 (WAITING FOR EXTERNAL CONTROL or INITIALIZING RADIO on an All Sport
  board: set function 5 for handheld firmware 2.2 or later or built from August 2006, 2 for 1.6
  or lower); DD1997015 (range only about 50 ft, scoreboard digits freezing: the gold coaxial
  antenna plug on the radio card unseated or the lead broken; reseat, else replace the base
  station); DD4290624 (handheld connects but the board stays blank: it has joined another base
  station on the same channel; move to a free channel); DD2223959 (ALT then CONNECT status
  screen: firmware, date, channel, sync group); DD3003307 (a client cannot run when its server
  has lost power). Search summaries only, not fetched: DD2775450 (0 V on the RS-232 output,
  replace the unit) and a KB recommending base station firmware 3.8 or later for client mode.
- FCC ID P7E-04262005P1110 (search summaries of fccid.io; the site refused direct fetches):
  Daktronics remote control system, Part 15 spread spectrum, 902-928 MHz, application 21 July
  2005. Whether the grant covers the base station radio, the handheld, or both is not stated.
Unverified and left out of the body: a dealer listing (2026-10-11 search summary) of an RC-100
base station on an AC4490-200M radio module with part numbers 0A-1110-0135 and 0A-1110-0162; a
2026-10-22 search found nothing for those numbers.
Still to research: the internal receiver's current part number; the tabletop unit's size;
what firmware 3.0 changed.
-->

The RC-100 base station is the radio receiver in a [Daktronics](../../vendors/daktronics.md)
RC-100 system. [RC-100](rc-100.md) handhelds send their data to it by 900 MHz radio, and it
passes that data on, either to the scoreboard it is built into or, for judging, to an
[OmniSport 2000](../swimming/timers/omnisport-2000.md) timing console.[^manual] A switch on the
board sets its function, and that function decides what a connected handheld does.[^manual] The
installation drawings date from 2004 and were reissued for the
[RC-200 base station](rc-200-base-station.md) in 2017.[^manual][^rc200]

## Role in the scoring system

This section places the base station between the handhelds and the equipment they control; the
[diving equipment overview](index.md) covers judging systems as a whole.

For diving, synchronized swimming and rodeo judging, a tabletop base station is cabled to the
J14 or J15 judge port on the back of an OmniSport 2000 with a [`W-1823`](w-1823-cable.md) cable.
It replaces a chain of wired [JC-100](jc-100.md) judge consoles.[^riser][^os2000] Up to nine
handhelds work through one base station. For synchronized swimming a second base station on the
other port, set to a different channel, raises the total to 18.[^riser] The handhelds need no
sport code in this mode. Each waits until the base station finds the console on the CAN link and
then takes its prompts from the console.[^manual]

In scoreboard use, the base station sits inside the display and takes the place of the console
cable. The handheld then runs the board directly with an All Sport code.[^manual] Other drawings
show it in play clocks, tennis scoreboards and a kit that gives an All Sport console a wireless
start and stop switch.[^manual]

## Design and construction

This section describes the unit's housings, settings and connections. The base station is a
circuit board with a radio card and an external antenna, which should stand upright, making an L
shape seen from the side.[^manual] It comes in three forms:[^manual][^riser]

- built into a scoreboard behind the power and signal access door;
- a tabletop enclosure, kit `0A-1110-0030` and later `0A-1110-0037`, with sockets for 12 V AC power,
  RS-232 and CAN;
- an outdoor enclosure, used where the receiver has to be moved for a clear line of sight.

Two rotary switches on the board, S2 for the function and S1 for the channel, are turned with a
small screwdriver after the cover is removed. A jumper, X1, makes the unit a server or a client,
and units leave the factory as servers.[^manual] The board talks to a scoreboard by current loop,
to a computer by RS-232, and to an OmniSport 2000 by CAN.[^manual]

## Functions

This section lists what the function switch selects on a server base station.[^manual][^install]

| Setting | Function |
|---|---|
| 0 | The function last used |
| 1 | CAN handheld judges' console (OmniSport 2000) |
| 2 | All Sport scoreboard controller, first generation |
| 3 | A Daktronics non-sports message display |
| 5 | All Sport scoreboard controller, second generation |
| F | Reset memory and test |
| 4, 6–E | Reserved |

The base station takes on a new setting about five seconds after the switch is turned, and always
starts on the switch setting at power-up. Setting F returns all stored settings to their
defaults. The unit is powered up on F for ten seconds, powered down, and then set to the wanted
function.[^manual] Every base station at one site must use the same function.[^manual]

The sources disagree on the judging setting. The manual, the diving riser drawing and the
installation drawings all give function 1.[^manual][^riser][^install] Daktronics' 2017 aquatics
maintenance checklist says base stations on firmware 3.0 or later should be set to function 6,
and earlier ones to 1.[^maint] The 2018 manual, published after the checklist, still marks 6 as
reserved.[^manual] Neither source explains the difference.

For All Sport scoreboards the setting depends on the handheld's generation. Daktronics support
traces a handheld stuck on WAITING FOR EXTERNAL CONTROL or INITIALIZING RADIO to the wrong
function. It gives function 5 for handhelds on firmware 2.2 or later, or built from August 2006,
and function 2 for firmware 1.6 or lower.[^kbfunc]

## Radio settings and range

This section covers channels and how base stations share the band. The base station and its
handhelds use a channel from 1 to 15, and the two must match. Channel 1 is the default for a
single base station.[^manual] Daktronics gives the radio as 902–928 MHz with 15
channels.[^kbradio] The handheld must stay at least 10 ft (3 m) and at most 500 ft (152 m) from
the base station, ideally in view of its antenna.[^manual]

Only one server may use a channel. At power-up a server listens for another server on its
channel, and if it finds one its IN RANGE light keeps flashing until one of them is moved or
switched off.[^manual] A handheld near two base stations on the same channel can join the wrong
one. Daktronics support describes a handheld that showed the game normally while its scoreboard
stayed blank for that reason.[^kbwrong]

The radio hops between frequencies. Server base stations within about 2000 ft (610 m) of each
other have to coordinate their hopping, which the manual calls synchronizing. Channels 1, 6 and
11 act as sync channels, and each of the other channels follows one of them, with channel 0 as a
sync channel for all of them.[^manual] A synchronized base station signals its sync group by
flashing IN RANGE briefly about every five seconds.[^manual] Base stations on ordinary channels
keep searching for a sync channel while no handheld is connected, so they can be switched on in
any order. Those on channels 1, 6 and 11 search only at power-up and have to be switched on in
that order.[^manual] The manual's examples are baseball complexes with nine diamonds, run either
from one central base station on channel 1 or as three groups on channels 1, 6 and 11.[^manual]
The judging riser asks only that two base stations at one pool use different channels.[^riser]

## Server and client operation

This section covers using one handheld with more than one display. A server base station runs
the handhelds itself, or passes data between them and an external controller such as an
OmniSport 2000. A client base station takes its data from a server and drives a second display.
On a client the function switch selects a display group instead of a function.[^manual]

Daktronics' example is a pair of play clocks at opposite ends of a football field. The base
station in one clock is the server and receives from the handheld. The one in the other clock is
a client and receives from the server, with both on the same function and channel.[^serverclient]
A handheld talks to only one server at a time.[^serverclient] If the server loses power, the
client and its display stop working too.[^kbclient]

## Installation and mounting

This section summarizes Daktronics' installation drawings. Inside a scoreboard, the base station
is fixed to the inside of the power and signal access door with four 5 in strips of
hook-and-loop. The antenna mounts on the outside of the door through a 9/32 in hole, held by a
tooth lock washer and a nut.[^install][^outdoor] The antenna cable must leave from the bottom of
the unit so that water cannot run into it.[^install]

A 6-pin plug connects the base station to the display's driver. Drivers built from April 2015
take it directly. Older drivers have a 5-pin radio jack and need the `W-2913` adapter
harness.[^install][^outdoor] A scoreboard can carry an RC-100 base station and a
[Gen VI radio](../common/scoreboard-control/gen-vi-radio.md) receiver together through a
splitter cable. That needs base station firmware 3.7 or later, and whichever transmitter the
board hears first keeps control.[^genvi]

The [remote start/stop kit](../common/scoreboard-control/rc-200-remote-start-stop-kit.md) uses its
own outdoor base station, `0A-1110-0104`, on function 5. A 25 ft cable runs from it to a junction
box at the All Sport console, and the junction box takes its power from an 18 V DC wall
pack.[^rss]

## Indicators and troubleshooting

This section covers the lamps on the board and the faults Daktronics describes.[^manual]

| Lamp | Color | Shows |
|---|---|---|
| POWER | Green | Power present |
| CL/RS232 TX | Red | Data sent to a scoreboard or computer |
| CL/RS232 RX | Green | Data received by wire |
| IN RANGE | Amber | Search at start-up, a channel conflict, a handheld connected, or sync status |
| CAN TX | Green | Data sent to an OmniSport 2000 |
| CAN RX | Red | Data received from an OmniSport 2000 |

On a failure, four of the lamps flash a long flash followed by a count of short flashes for the
error. The pattern repeats five times and the unit then resets. Daktronics' first step is to
remove power for a few seconds.[^manual] With a handheld connected, pressing ALT then CONNECT
shows the base station's firmware revision and date, its channel and its sync
group.[^manual][^kbstatus]

Daktronics support links several faults to the base station:

- a range of only about 50 ft, with scoreboard digits freezing, traced to the small coaxial
  antenna plug on the radio card working loose or its lead breaking;[^kbantenna]
- handhelds stuck waiting for control, traced to the wrong function setting;[^kbfunc]
- a blank scoreboard while the handheld works, traced to another base station on the same
  channel.[^kbwrong]

## Generations and firmware

The base station's firmware carries the number `ED14906`. A first-generation unit runs version
2.1 or earlier, and a second-generation unit runs 2.2 or later.[^manual][^kbgen] A second-generation handheld
works with a first-generation base station only in function 2. A first-generation handheld needs
a second-generation base station set to function 2 as well, and function 5 is for second-generation
equipment at both ends.[^kbgen] Daktronics' documents also set firmware minimums for particular
uses: 3.0 for judging and 3.7 for sharing a scoreboard with a Gen VI receiver.[^maint][^genvi]

## Specifications

| | |
|---|---|
| Manufacturer | Daktronics, Brookings, South Dakota |
| Housings | Inside a display; tabletop; outdoor[^manual] |
| Radio | Frequency-hopping, 902–928 MHz; channels 1–15; sync channels 1, 6, 11 and 0[^manual][^kbradio] |
| Range | 10–500 ft (3–152 m) from the handheld[^manual] |
| Handhelds | Up to 9 per base station in judging[^riser] |
| Settings | Function switch S2; channel switch S1; server/client jumper X1[^manual] |
| Connections | CAN and RS-232 (tabletop); current loop; 6-pin plug to a scoreboard driver[^manual][^riser][^install] |
| Power | 12 V AC (tabletop)[^riser] |
| Firmware | `ED14906`; 2.2 or higher for second generation[^manual] |

## Part numbers and accessories

This section lists the part numbers the drawings give.

- `0A-1110-0030`, the tabletop kit on the judging riser.[^riser]
- `0A-1110-0037`, the tabletop kit that replaced it on the drawings in late 2015, supplied with the `T-1118` 12 V AC wall pack.[^manual]
- `0A-1110-0045`, the outdoor base station.[^manual]
- `0A-1110-0035`, a base station named in the installation drawing for scoreboards built before April 2015.[^install]
- `0A-1110-0104`, the outdoor base station in remote start/stop kit `0A-1110-0106`.[^rss]
- [`W-1823`](w-1823-cable.md), the cable from the tabletop unit to the OmniSport 2000.[^riser]
- `W-2913`, the adapter from the 6-pin plug to an older driver's 5-pin radio jack.[^install][^outdoor]

## See also

- [RC-100](rc-100.md): the handheld that talks to it
- [RC-200 base station](rc-200-base-station.md): its 2.4 GHz successor
- [OmniSport 2000](../swimming/timers/omnisport-2000.md): the timing console it connects to for judging
- [Colorado Time Systems wireless judging](wireless-judging.md): a competing wireless judging system
- [Diving equipment](index.md): the diving equipment overview
- [Daktronics](../../vendors/daktronics.md): the manufacturer
- [Equipment](../index.md): the equipment reference

## References

[^manual]: [Daktronics, Remote Control System RC-100 All Sport Operation Manual (ED-15133 Rev 11, 2018)](https://www.daktronics.com/web-documents/customer-service-manuals/ed-15133.pdf), with drawings.
[^riser]: Daktronics, DWG-230608, System Riser: RC-100, Rodeo/Diving/Sync Swimming (2004, rev. 2012), in ED-15133 and ED-13312.
[^install]: Daktronics, DWG-227465, Base Station: Indoor Installation (2004, rev. 2016), in ED-15133.
[^outdoor]: Daktronics, DWG-236394, Base Station: Outdoor Installation (2005, rev. 2015), in ED-15133.
[^serverclient]: Daktronics, DWG-317837, System Riser Diagram: RC-100 Server/Client Line (2007, rev. 2016), in ED-15133.
[^rss]: Daktronics, DWG-319037, System Riser, RC-100 Game/DOG Clock Remote Start/Stop (2007, rev. 2016), in ED-15133.
[^rc200]: [Daktronics, Remote Control System RC-200 All Sport Operation Manual (DD3572889 Rev 03, 2023)](https://www.daktronics.com/web-documents/customer-service-manuals/dd3572889.pdf), DWG-3640534.
[^os2000]: [Daktronics, OmniSport 2000 Timing Console Operation Manual (ED-13312 Rev 16, 2019)](https://www.daktronics.com/web-documents/customer-service-manuals/ed13312.pdf), section 7.
[^maint]: Daktronics, Aquatics Maintenance Checklist (DD3691471, 2017), diving judge controls.
[^genvi]: Daktronics, Gen VI Radio Installation Manual (DD2362277), dual radio.
[^kbradio]: [Daktronics support, DD2664877, Wireless NHL goal light frequencies (RC-100 and RC-200)](https://www.daktronics.com/en-us/support/kb/DD2664877).
[^kbgen]: [Daktronics support, DD2264609, What generation is my RC-100 base station or handheld?](https://www.daktronics.com/en-us/support/kb/DD2264609).
[^kbfunc]: [Daktronics support, DD2233192, RC-100 showing Waiting for External Control, wrong function](https://www.daktronics.com/en-us/support/kb/DD2233192).
[^kbantenna]: [Daktronics support, DD1997015, RC-100 limited range, antenna cable connection](https://www.daktronics.com/en-us/support/kb/DD1997015).
[^kbwrong]: [Daktronics support, DD4290624, RC-100 connecting to another base station](https://www.daktronics.com/en-us/support/kb/DD4290624).
[^kbstatus]: [Daktronics support, DD2223959, Base station information from an RC-100/RC-200 handheld](https://www.daktronics.com/en-us/support/kb/DD2223959).
[^kbclient]: [Daktronics support, DD3003307, RC-100 client base station, server without power](https://www.daktronics.com/en-us/support/kb/DD3003307).

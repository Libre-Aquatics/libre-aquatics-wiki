---
title: Daktronics RC-200 base station
description: >-
  The RC-200 base station is the Daktronics radio receiver that links RC-200 handhelds to a
  scoreboard or, for judging, to an OmniSport 2000 timing console.
tags:
  - Equipment
  - Diving
  - Scoring
infoboxTitle: RC-200 base station
infobox:
  - label: Manufacturer
    value: Daktronics
  - label: Part number
    value: '`0A-1110-0066` (tabletop kit); `0A-1110-0067` or `0A-1110-0068` (outdoor); `0A-1110-0069` (remote start/stop); model `DAKT-0406-00`'
  - label: Type
    value: Wireless base station
  - label: Connection
    value: CAN to the OmniSport 2000 J14 or J15 port on `W-1823`; RS-232; 6-pin plug inside a scoreboard
  - label: Range
    value: 10–500 ft (3–152 m) from the handheld
  - label: Power
    value: 12–18 V, 0.1 A (label); 12 V AC wall pack (tabletop); 18 V DC (remote start/stop kit)
  - label: Introduced
    value: '2017'
  - label: Manual
    value: '[Remote Control System RC-200 All Sport Operation Manual (DD3572889)](https://www.daktronics.com/web-documents/customer-service-manuals/dd3572889.pdf)'
---

<!--
Research notes, RC-200 base station. Stub created 2026-10-19 while building out rc-200.md;
built out 2026-10-21.

Held sources, read:
- Daktronics, Remote Control System RC-200 All Sport Operation Manual, DD3572889 Rev 03,
  26 January 2023 (sources/vendors/daktronics/accessories/). Read: introduction (label figure,
  temperatures), section 2 system overview, section 3 config and connect modes, section 4 All
  Sport applications, sections 14-16 (remote start/stop, goal judge, CAN), section 17
  troubleshooting, and the appendix A drawing list. Drawings rendered from the PDF with
  PyMuPDF because the extraction scrambles them: pages 49 (DWG-3639940), 54 (DWG-3640329),
  57 (DWG-3640534), 58 (DWG-3640913), 59 (DWG-3640952), 62 (DWG-3660093).
  Facts used:
  - Label: base station 0A-1110-0067, 12-18 V, 0.1 A, model DAKT-0406-00 (the handheld label
    0A-1110-0062, 18 V, 1.1 A, carries the same model number). Label on the bottom of the unit.
    Operating temperatures in the manual are given for the system, -10 to 65 C operation,
    -20 to 45 C storage; not stated as base-station specific, so not used in the infobox.
  - Section 2: the base station processes what the handhelds send and passes it to the
    scoreboard or another controller; mounted inside the display, in a tabletop enclosure, or
    in an outdoor enclosure for some applications. Range 10 ft minimum to 500 ft maximum from
    the handheld; clear line of sight; antenna vertical, an L shape from the side.
  - Section 3: in connect mode the base station's function decides how the handheld behaves.
    The handheld connects on a group (1-8, international 1-4) and channel (1-8) that must
    match the base station. ALT+CONNECT shows the base station firmware (DD-3561942 with a
    version), group, channel and region (D domestic, I international).
  - Section 4: the All Sport function is set on the base station; the sport code entered on
    the handheld is then kept by the base station through power cycles; NOT FOUND means the
    base station firmware lacks that code and the unit must be replaced or reprogrammed. With
    a CAN connection (typically an OmniSport 2000) no code is needed; the mode is detected.
  - Section 14: remote start/stop; on an All Sport 5000 the handheld's horn/reset key acts as a
    horn when the base station is on J4 and a reset on J7. Section 16: "WAITING FOR EXTERNAL
    CONTROL" until a CAN device is found; diving and synchro use insert LL-2606, rodeo LL-2608.
  - Section 17: handheld messages NO SERVER FOUND, NO RESPONSE ON (check power, range, other
    base stations on the same group/channel), CHANNEL IN USE (nine applications take one handheld only:
    goal judge, segment timer, remote start/stop, volleyball, football, basketball, baseball,
    clock/score and the play clock or pitch timer), LOW SIGNAL STRENGTH (base station off, changed
    channel, or too far or too close). Base station: at power-up a server blinks IN RANGE a few
    times while it checks its channel for another server, and keeps blinking if one answers, since only one server is allowed per channel; failures show on the IN RANGE and DATA OUT/TX
    lamps as one long blink and a count of short ones, five times over, then a reset; first remedy is to
    remove power for a few seconds.
  - DWG-3640534 Base Station: Indoor Installation, project RC-100, drawn 11 November 2004:
    function chart 1 CAN handheld judges console, 2 All Sport scoreboard controller Gen I,
    F reset memory/test (all in server mode); dials set with a small flat screwdriver or by
    hand; server mode from the factory, jumpers moved to the right-most position for client.
    Mounting in most indoor boards: inside, behind the power/signal access door, on four 5 in
    pre-attached hook-and-loop strips; external antenna through a 9/32 in hole in that door,
    fixed with tooth lock washer and nut; antenna cable must leave from the bottom of the unit
    so water cannot run in. 6-pin plug: on legacy drivers built before April 2015 through
    adapter W-2913 to the driver's 5-pin J45; on newer (Gyrus) drivers straight into the 6-pin
    J21. Boards made after March 2013 use DWG-1130990 for mounting.
  - DWG-3640913 Outdoor Installation, project RC-200, 17 May 2017 (rev 01 September 2017
    title fix): the same chart, jumpers and mounting for most outdoor boards.
  - DWG-3640952 (2006, project RC-100): same for one older scoreboard line; not named in text.
  - DWG-3639940 RC-200 Server/Client Line (16 May 2017): one handheld (play clock insert
    LL-2653, code 05) talks to a server base station in one play clock, which re-sends to a
    client base station in the other; shunt P-1072 on X1 sets server or client; both on
    function 2, group 1, channel 1; a handheld talks to only one server at a time. The clocks
    are a TI-2003 model; not named in the text.
  - DWG-3640329 riser (24 May 2017): tabletop base station 0A-1110-0066 with 12 VAC power,
    RS232 and CAN sockets and an L antenna, on W-1823 to the OmniSport 2000; function 1;
    diving and rodeo up to 9 handhelds on one base station, all on one group and channel;
    synchro two base stations on J14 and J15, different channels, up to 18 handhelds. Base
    station channel labelled 1-15, an RC-100 figure (flagged in text).
  - DWG-3660093 RC-200 game/DOG clock remote start/stop (29 June 2017, modified May 2019):
    kit 0A-1110-0074 = handheld kit 0A-1110-0064, J-box 0A-1110-0103 (RJ-11/DB9 with power),
    remote start/stop base station 0A-1110-0069 (outdoor enclosure with a 25 ft cable attached,
    function 02, needs clear line of sight), 8 ft RJ-11 cable 0A-1120-0176, 18 V DC wall pack
    A-3430138, insert 0G-319079 (code 98). The J-box feeds J4 or J7 of an All Sport console.
    Base station preset to group 1, channel 1.
  - Earlier notes (from rc-200.md): kit notes call 0A-1110-0066 the base station kit (typical
    function 2, server jumper on) and point to 0A-1110-0067 as the outdoor unit for remote
    siting; one tennis riser names 0A-1110-0068 as the outdoor base station; tennis kit lists
    A-3430138 as a 12 VAC wall pack, whereas DWG-3660093 gives A-3430138 as 18 V DC. Unresolved.
- OmniSport 2000 manual ED-13312 Rev 16 (2019), section 7: a wireless base station plugs into
  J14 or J15 in place of wired consoles; refers to DWG-230608 (RC-100) and DWG-3640329.
- OmniSport 2000 rodeo manual ED-14843 (2015): an RC-100 base station usually goes on J14.
- Daktronics Aquatics Maintenance checklist DD3691471 (2017): for RC-100 base stations,
  firmware 3.0 or later, function 6 from 3.0 and function 1 before, 900 MHz antenna. RC-100
  material, not used for this page beyond the comparison note.
- Daktronics Aquatics Solutions brochure (2018): up to nine judge terminals per base station.
- Gen VI radio manual DD2362277: an RC-100 or RC-200 base station can share a board with a Gen
  VI receiver (covered on gen-vi-radio.md).
Web, October 2026 (Daktronics KB):
- DD1993017: open the display, follow the antenna cable, remove four screws with a precision
  Phillips screwdriver; RC-200 has broadcast and channel dials; match the handheld.
- DD3998349: one handheld can run several base stations if one is server and the rest are
  clients; X1 sets the mode.
- 000011733 / DD3907814: base stations ship as servers; a second unit left on server makes one
  board not respond unless the other is off; set all extra units to client.
- DD2674209: synchronized diving with 11 judges: base station 1 channel 1, base station 2
  channel 2, both function 1, server.
- 000011787: RC-200 stuck on WAITING FOR EXTERNAL CONTROL or INITIALIZING RADIO with only the
  power light on: wrong function; set function 5. The manual's chart has no function 5.
- 000008457: remote start/stop kit: RC-200 code 98, base station function 2 (RC-100 kit used
  function 5).
- 000028211: a failed base station on a pitch timer: dim blinking power light despite 18 V DC,
  NO SERVER FOUND on the handheld; replace the base station.
- No FCC ID found for model DAKT-0406-00 in a search.
Still to research: enclosure dimensions and weight; the base station firmware history; the
meaning of functions other than 1, 2 and F on the RC-200; which outdoor part number is current.
-->

The RC-200 base station is the [Daktronics](../../vendors/daktronics.md) radio receiver that
[RC-200](rc-200.md) handhelds talk to. It takes what the handhelds send and passes it on, either
to the scoreboard it sits inside or, for judging, to an
[OmniSport 2000](../swimming/timers/omnisport-2000.md).[^manual] The base station's
function setting decides how a connected handheld behaves. In scoreboard use the base station
also stores the sport code, and a code its firmware lacks cannot be used.[^manual] Its
installation drawings first appeared for the [RC-100](rc-100.md) in 2004 and were reissued for
the RC-200 in 2017.[^manual]

## Role in the scoring system

This section places the base station between the handhelds and the equipment they control; the
[diving equipment overview](index.md) covers judging systems as a whole.

In diving, synchronized swimming and rodeo, a tabletop base station plugs into the J14 or J15
port on the back of an OmniSport 2000 in place of a chain of wired
[JC-100](jc-100.md) judge consoles.[^omni][^manual] Up to nine handhelds work through one base
station.[^manual][^brochure] Synchronized swimming can use a second base station on the other
port, for up to 18 handhelds.[^manual] Once a base station is on that network, the handheld
needs no sport code; it waits for the console and then shows the judging screen.[^manual]

In scoreboard use, the base station is mounted inside the display and replaces the console
cable. The handheld then runs the board directly under an All Sport code entered on the
handheld.[^manual] A separate kit uses a base station to give an All Sport console a wireless
start, stop and horn or reset switch.[^manual][^kbrss]

## Design and construction

This section describes the unit's housings, its settings and its connections.

The receiver is a circuit board in a small case with an L-shaped external antenna, which
should stand upright.[^manual] It comes in three forms:[^manual]

- built into a scoreboard, behind the power and signal access door;
- a tabletop enclosure, kit `0A-1110-0066`, with a 12 V AC power socket, an RS-232 socket and a
  CAN socket;
- an outdoor enclosure, used where the receiver has to be moved for a clear line of sight.

Under a cover held by four small screws are three dials, for function, broadcast group and
channel, which can be turned with a small screwdriver or by hand.[^manual][^kbdials] A jumper
block marked X1 sets the unit as a server or a client. Units leave the factory as
servers.[^manual][^kbmulti] The unit's label gives 12–18 V at 0.1 A and the model number
`DAKT-0406-00`, the same model number as the handheld.[^manual]

## Functions

This section lists what the function dial selects.

The installation drawings give three settings:[^manual]

| Setting | Use |
|---|---|
| 1 | CAN handheld judges console (OmniSport 2000) |
| 2 | All Sport scoreboard controller |
| F | Reset memory and test |

Daktronics' support articles use the same two working settings: function 1 for judging and
function 2 for the remote start/stop kit.[^kbsync][^kbrss] One article, though, gives function
5 as the fix for an RC-200 that never gets past "waiting for external control", a setting the
manual's table does not list.[^kbfunc] Older RC-100 base stations numbered their functions
differently.[^maint]

## Radio settings and range

This section covers how a handheld finds its base station.

A handheld connects on a broadcast group and channel, each 1 to 8, that must match the dials
on the base station. International units offer groups 1 to 4 only.[^manual] Daktronics places
the base station at least 10 ft (3 m) and no more than 500 ft (152 m) from the handheld, in direct
view of its antenna.[^manual] When the handheld is linked, pressing ALT then
CONNECT shows the base station's firmware version, group, channel and region.[^manual]

Several handhelds can share one base station in judging and in some sports, but nine
applications allow only one at a time, among them the remote start/stop, basketball and the
segment timer.[^manual] For judging with two base stations, each needs its own channel. In
Daktronics' setup for synchronized diving with eleven judges, the two units sit on channels 1
and 2, both on function 1 as servers.[^manual][^kbsync]

The diving riser drawing labels the base station's channel as 1 to 15. That range belongs to
the RC-100; the RC-200 uses a group and a channel of 1 to 8 each.[^manual]

## Server and client operation

This section covers using one handheld for more than one display.

Only one server may run on a given channel. A server checks for another at start-up, and its
IN RANGE lamp keeps flashing if it finds one.[^manual] A handheld talks to one server. The
server then re-sends the data to any number of client base stations on the same function, group
and channel, so one handheld can run, for example, play clocks at both ends of a football
field.[^manual][^kbmulti] Because every unit ships as a server, a second display that stays
dark while the first works, and lights up when the first is switched off, usually has its base
station still set to server.[^kbserver]

## Installation and mounting

This section summarizes Daktronics' installation drawings.

Inside a scoreboard, the base station is fixed to the access door with four 5 in strips of
hook-and-loop. The antenna mounts on the outside of the door through a 9/32 in hole, held by a
tooth lock washer and nut.[^manual] The antenna cable must leave the bottom of the unit so
water cannot run into it.[^manual] A 6-pin plug connects the receiver to the display's driver.
Drivers built before April 2015 need the `W-2913` adapter to their 5-pin radio jack; newer
drivers take the 6-pin plug directly.[^manual] The same base station can share a board with a
[Gen VI radio](../common/scoreboard-control/gen-vi-radio.md) receiver for a wireless All Sport
console.[^gen6]

For judging, the tabletop unit connects to the OmniSport 2000 with a
[`W-1823`](w-1823-cable.md) cable.[^manual] The
[remote start/stop kit](../common/scoreboard-control/rc-200-remote-start-stop-kit.md) uses its
own base station, `0A-1110-0069`, in an outdoor enclosure with a 25 ft cable to a junction box
at the All Sport console. It is powered from an 18 V DC wall pack and must be in unobstructed view of
the handheld.[^manual]

## Indicators and troubleshooting

This section covers the base station's lamps and the faults Daktronics describes.

The unit has POWER, IN RANGE and DATA OUT/TX lamps.[^manual][^kbfunc] When it fails, the IN
RANGE and DATA OUT/TX lamps give one long flash followed by a count of short flashes for the error
type, repeat the pattern five times, and the unit resets. Daktronics' first step is to remove
power for a few seconds.[^manual]

Most connection faults are reported on the handheld:[^manual]

- NO SERVER FOUND: no base station answered on that group and channel. The base station may be
  off or set differently, or the handheld may be out of range.
- NO RESPONSE: a server was found but did not answer. Daktronics suggests cycling the base
  station's power and checking for another base station nearby on the same setting.
- LOW SIGNAL STRENGTH: the base station has stopped answering, because it lost power, its
  setting changed, or the handheld has moved out of range, whether too distant or too near.

A support article describes a failed unit on a pitch timer whose power lamp glowed dimly and
blinked despite a correct 18 V DC supply. Daktronics' fix was to replace the base
station.[^kbfail]

## Specifications

| | |
|---|---|
| Manufacturer | Daktronics, Brookings, South Dakota[^manual] |
| Model | `DAKT-0406-00`[^manual] |
| Housings | Inside a display; tabletop; outdoor[^manual] |
| Power | 12–18 V, 0.1 A (label); 12 V AC (tabletop); 18 V DC (remote start/stop kit)[^manual] |
| Connections | CAN and RS-232 (tabletop); 6-pin plug to a display driver[^manual] |
| Settings | Function, broadcast group (1–8) and channel (1–8) dials; server/client jumper X1[^manual][^kbmulti] |
| Range | 10–500 ft (3–152 m) from the handheld[^manual] |
| Handhelds | Up to 9 per base station in judging[^manual][^brochure] |

## Part numbers and accessories

This section lists the part numbers the sources give. Daktronics' drawings disagree on the
outdoor unit: kit notes give `0A-1110-0067`, which is also the number on the manual's sample
label, while one tennis riser gives `0A-1110-0068`.[^manual]

- `0A-1110-0066`, tabletop base station kit.[^manual]
- `0A-1110-0067` and `0A-1110-0068`, outdoor base station, as above.[^manual]
- `0A-1110-0069`, remote start/stop base station, part of kit `0A-1110-0074`.[^manual]
- [`W-1823`](w-1823-cable.md), cable from the tabletop unit to the OmniSport 2000.[^manual]
- `W-2913`, adapter from the 6-pin plug to a pre-2015 driver's 5-pin jack.[^manual]
- `A-3430138`, wall pack, given as 18 V DC in the remote start/stop kit and as 12 V AC in a
  tennis kit list.[^manual]

## See also

- [RC-200](rc-200.md): the handheld that talks to it
- [RC-200 charging station](rc-200-charging-station.md): the charger for the handhelds
- [RC-100](rc-100.md): the earlier 900 MHz system whose drawings it reuses
- [Remote start/stop kit](../common/scoreboard-control/rc-200-remote-start-stop-kit.md): the kit
  built around its outdoor variant
- [Wireless judging](wireless-judging.md): wireless judge consoles across makers
- [Diving](index.md): the diving equipment overview
- [Daktronics](../../vendors/daktronics.md): the manufacturer
- [Equipment](../index.md): the equipment reference

## References

[^manual]: [Daktronics, Remote Control System RC-200 All Sport Operation Manual (DD3572889 Rev 03, 2023)](https://www.daktronics.com/web-documents/customer-service-manuals/dd3572889.pdf), with drawings.
[^omni]: [Daktronics, OmniSport 2000 Timing Console Operation Manual (ED-13312 Rev 16, 2019)](https://www.daktronics.com/web-documents/customer-service-manuals/ed13312.pdf), section 7.
[^gen6]: [Daktronics, Gen VI Radio Installation Manual (DD2362277 Rev 07, 2021)](https://www.daktronics.com/web-documents/customer-service-manuals/dd2362277.pdf), dual radio.
[^maint]: Daktronics, Aquatics Maintenance Checklist (DD3691471, 2017), judging equipment.
[^brochure]: Daktronics, Aquatics Solutions brochure (2018), judging consoles.
[^kbdials]: [Daktronics knowledge base, RC-100/RC-200: How do I change radio settings on the base station? (DD1993017)](https://www.daktronics.com/en-us/support/kb/DD1993017).
[^kbmulti]: [Daktronics knowledge base, Can One RC-200 Control Multiple Displays? (DD3998349)](https://www.daktronics.com/en-us/support/kb/DD3998349).
[^kbserver]: [Daktronics knowledge base, Scoreboard or clock not responding; base station set to server mode (DD3907814)](https://www.daktronics.com/en-us/support/kb/DD3907814).
[^kbsync]: [Daktronics knowledge base, Synchronized diving with Omni 2000 and 11 judges (DD2674209)](https://www.daktronics.com/en-us/support/kb/DD2674209).
[^kbfunc]: [Daktronics knowledge base, RC-200 showing Waiting for External Control, wrong function (000011787)](https://www.daktronics.com/en-us/support/kb/000011787).
[^kbrss]: [Daktronics knowledge base, RC-100/RC-200: How do I set up the Remote Start Stop Kit? (000008457)](https://www.daktronics.com/en-us/support/kb/000008457).
[^kbfail]: [Daktronics knowledge base, RC-200 used as a pitch timer reset not controlling the clock (000028211)](https://www.daktronics.com/en-us/support/kb/000028211).

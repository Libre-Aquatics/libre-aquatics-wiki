---
title: Colorado Time Systems WA-3
description: >-
  The WA-3 is the Colorado Time Systems 2.4 GHz wireless scoreboard adapter that carries
  data from a timing console, laptop or controller to CTS scoreboards and video boards.
tags:
  - Equipment
  - Scoring
  - Timing
infoboxTitle: WA-3
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Part number
    value: '`WA-3`'
  - label: Type
    value: 2.4 GHz wireless scoreboard adapter
  - label: Connection
    value: 2.4 GHz radio, channel 0–11, PAN 0–7; RS-232 jack; USB-B
  - label: Dimensions
    value: 4.25 × 6.4375 × 1.1875 in (10.80 × 16.00 × 3.00 cm)
  - label: Weight
    value: 13.4 oz (380 g)
  - label: Power
    value: 5 V DC, 500 mA, from a USB power adapter, a computer or the scoreboard
  - label: Introduced
    value: By 2019
  - label: Status
    value: Current
  - label: Manual
    value: '[2.4 GHz Wireless Adapter (WA-3) User Guide (F1045 Rev. 202007)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Misc/Wireless%20Adapters/WA-3_User-Guide_F1045.pdf)'
---

<!--
Research notes, WA-3. Built out from a stub in September 2026.

Held and read in full: F1045 Rev. 202007 ((c)2020, 12 pages), including its PDF for the
switch table and the connection diagrams; the WA-3 datasheet (Rev 04/19). WA passages read
in F870 (System 6 swimming software), F873 (System 6 pace clock), F1004 and F995 (Otter),
F927 (mini scoreboard), F985 (deck clock), F904 (pro pace clock), F941 and F961 (wireless
judging), the 2013 Wireless Synchro sheet, DisplayLink Plus help topic 19, the architectural
guidelines and the Making Time Count catalogue.

Read from the web (text saved under sources/reference/cts-web/):
  - WA-2 user guide F987, two editions: Rev. 201411 (archived November 2014) and Rev. 201605
    (archived 2023). Not held locally before this pass.
  - F1026 Rev. 201907, "WA-2/WA-3 Water Polo", a firmware and mapping sheet.
  - CTS product pages archived May 2014 (2.4 GHz adapter, then the WA-2; 900 MHz Sky-Fi
    adapter) and August 2020 (adapters menu), and the current WA-3 page.
  - Dealer listings: RecSupply (item MMWA350, maker part WA-3, $824.56); KAP7 (WA-2,
    $725.00, backordered). September 2026.

What F1045 says, in summary: three set-up steps (source connection, display connection,
switches). Sources: any CTS console, the System 6 being the example, over an R-DC cable,
with the adapter powered from a USB wall adapter; a laptop with SynchroMM or another CTS
program over cable R-015-606, which then appears as a COM port; wireless controllers need no adapter to transmit.
Displays: an LED-R or P01-style mini scoreboard by an R-DC4 cable, the board powering the
adapter, further boards daisy-chained on R-DC4; a video board through the DL+ computer by USB,
powered from it; multisport boards directly by radio, with the warning not to cable a second
adapter to them. Switches: power off before changing (bank labelled CONFIG); 1-4 channel,
5-7 PAN, 8 mode. Antenna screws on, pointing up. Mounting: non-metallic obstructions matter
little; many sites put it inside an LED-R sign panel; outdoor signs are Dibond, a metal
composite, so the antenna goes outside on extension cable R-015-638 through a 1/4 in hole
(two 5/16 in wrenches). Technical data: DC 5 V, 500 mA. COM-port instructions for Windows XP,
7/8 and 10. Standards and declaration at the back.

Switch map, read from the rendered table: binary with up = 0 and down = 1. Channel =
switch 1 (1) + switch 2 (2) + switch 3 (4) + switch 4 (8), values 0-11 only. PAN = switch 5
(1) + switch 6 (2) + switch 7 (4), values 0-7. Switch 8 goes down only when a System 6
feeds water polo into multisport boards, and up in every other case.

Consequence, inferred and stated carefully in the body: controllers and multisport boards
take PAN 0-15 (F970, F1071, F1050), but the adapter's three switches reach only 0-7, so a
board or controller on PAN 8-15 cannot be paired with a WA-3. The datasheet's "8 networks per
channel" agrees with the switches; the 2015 catalogue's 16 per channel describes the boards.

Lineage:
  - WA-1, Sky-Fi: 900 MHz, 8 channels (CTS page, May 2014: 5.75 x 5.2 x 3.9 in; works with
    older CTS consoles). F941 says 900 MHz judging channels 1-8 are shared with WA-1 adapters
    and CTS wireless pace clocks.
  - WA-2: CTS's May 2014 page for the 2.4 GHz adapter is the WA-2, with exactly the figures
    later printed for the WA-3 (12 x 8, 1,000 ft (100 m), 4-1/4 x 6-7/16 x 1-3/16 in, 13.4 oz).
    F987's text, set-ups and switch map are the same as F1045's. Differences found: the WA-2
    connects to a computer with a Micro USB-B to USB-A cable, R-015-203, where the WA-3 uses
    USB-B, R-015-606; the 2014 WA-2 guide gives antenna extension cable R-015-552, the 2016
    WA-2 guide and the WA-3 guide R-015-638; the WA-2 names only the XBee-PRO radio (FCC ID
    OUR-XBEEPRO, IC 4214-XBEEPRO), the WA-3 the XBee-PRO or XBee 3 (MCQ-XBEE3, IC
    1846A-XBEE3); the WA-2 cites UL 60950-1, the WA-3 UL 62368-1:2014. F987 Rev. 201411 is
    marked (c)2008, which conflicts with a 2.4 GHz product first seen in 2014; not resolved.
  - The MultiSport reprogrammer lists a WA-3 as "WA2" (F1004), and the firmware packages are
    named "with WA2" (coloradotime.com downloads, 2022-2024). F1026 treats WA-2 and WA-3 as one
    target for firmware 2.0.8. Dealers still sell the WA-2 by that name in 2026.
  - Earliest WA-3 attestation held: the datasheet Rev 04/19 and F1026 Rev. 201907.

Declarations: both the WA-2 and the WA-3 declarations are dated 20 December 2013. The WA-2's
cites 2006/95/EC, 2004/108/EC and 2002/96/EC; the WA-3's cites 2014/35/EU, 2014/30/EU and
2012/19/EU and the IEC 62368-1:2014 standard. The WA-3's date is inherited from the WA-2 and
predates the documents it cites. Same pattern as the WHC-1 (see whc-1.md).

Range conflict: "1,000 ft (100m)" on the datasheet, the 2014 WA-2 page and KAP7. 1,000 ft
is about 305 m. The controllers' datasheets give 1,000 ft without a metric figure. Flagged.

Cable name conflict: F1045's System 6 diagram labels the cable R-20C (read from the PDF);
the text says R-DC. The WA-1 guide calls a similar cable R-2DC. Probably R-2DC or an R-xxDC
length variant; flagged, not resolved.

System 6: F870 (Rev. 20241107) has a menu showing a wireless adapter's channel and firmware
version on the board and setting the transmitting and receiving adapters' channels, which then
override the DIP switches. It does not name the model; the wording (channel only, no PAN)
may reflect the WA-1 era. Stated with that caution.

Gen7: not addressed by F1045. F1004 says consoles older than the Gen7 need a WA-2 or WA-3 to
reach a wireless board, which implies the Gen7 does not; see gen7-serial.md. Stated as the
Otter guide's claim.

Still to research: when the WA-3 replaced the WA-2 (between May 2016 and April 2019); what
the internal changes were beyond the USB connector and radio; CTS's own price.
-->

The WA-3 is a 2.4 GHz wireless scoreboard adapter made by
[Colorado Time Systems](../../../vendors/colorado-time-systems.md) (CTS). It replaces the data
cable between a scoreboard and whatever feeds it. One adapter plugs into the data source and
sends its scoreboard output by radio, and a second adapter at the display receives it, unless
the display has a 2.4 GHz radio of its own.[^f1045][^ds19] The data source can be a timing
console, a laptop running CTS software, or one of CTS's wireless controllers. CTS names
water polo, diving, swimming and synchronized swimming as its uses.[^ds19]

## Role in the scoreboard system

This section covers what the adapter connects and when one is needed.

A WA-3 is needed at each end of the link that has no radio. At the source end, it takes the
scoreboard output of a [System 6](../../swimming/timers/system-6.md) or another CTS console,
or the output of [SynchroMM](../../../software/synchromm.md) or other CTS software on a laptop.
The [WTTC-1](wttc-1.md) and [WHC-1](whc-1.md) controllers have radios built in and need no
adapter to transmit.[^f1045] At the display end, an adapter is needed for a cabled board such
as the [LED-R](../scoreboard/led-r.md) or the [mini scoreboard](../scoreboard/mini-scoreboard.md),
and for the computer running [DisplayLink Plus](../../../software/displaylink-plus.md) for a
video board. Multisport boards, including the [deck clock](../pace-clock/deck-clock.md) and the
[Otter](../scoreboard/otter.md) boards, have their own radios and take the adapter's signal
directly. CTS warns against cabling a second adapter to them.[^f1045][^f1004]

The Otter guide adds that a System 6 or an older console needs a WA-3 or its predecessor, the
[WA-2](wa-2.md), to reach an Otter board over the air, while a
[Gen7](../../swimming/timers/gen7-serial.md) timer sets the board's channel and PAN from its own
software.[^f1004] The
same guide uses the adapter over USB to designate one board as the leader and the rest as its
followers.[^f1004]

## Design and hardware

The adapter is a small box of 4.25 × 6.4375 × 1.1875 in (10.80 × 16.00 × 3.00 cm),
weighing 13.4 oz (380 g), with a screw-on antenna that should point upward.[^ds19][^f1045] It
has an RS-232 jack for the console cable, a USB-B port, and a bank of eight DIP switches
labelled CONFIG.[^f1045] It draws 5 V DC at 500 mA.[^f1045] Power comes from a USB power
adapter at a console, from the computer's USB port at a laptop or video board computer, and
from the scoreboard itself when it is cabled to an LED-R or mini scoreboard.[^f1045]

The radio is an XBee module, either the XBee-PRO or the XBee 3, the same pair that the WHC-1,
the [WHC-2](../pace-clock/whc-2.md) and the slim pace clocks carry.[^f1045][^f970][^f1050][^f972] CTS says it has 12 channels, each with
8 independent networks, and an operating range of 1,000 ft.[^ds19] The datasheet converts the
range as 100 m, but 1,000 ft is about 305 m, so one of the two figures is wrong.[^ds19]

CTS notes that the radio passes through non-metal obstructions with little loss, but metal in
the line of sight blocks it. Many facilities put the adapter inside an LED-R sign panel. On
outdoor signs, whose panels are a metal composite, the antenna goes outside the case on an
extension cable, part `R-015-638`, through a 1/4 in hole.[^f1045]

## Set-ups

F1045 gives a set-up for each combination of source and display. In every case, both ends
must share a channel and PAN ID.[^f1045]

| Source | Display | Adapters | Switch 8 |
|---|---|---|---|
| System 6: swimming, diving or training pace clock | Cabled aquatic board or video board computer | Two | Up on both |
| Laptop running SynchroMM | Cabled aquatic board or video board computer | Two | Up on both |
| WTTC-1 or WHC-1 controller | Video board, through the DisplayLink Plus computer | One, at the computer | Up |
| System 6 water polo | Multisport boards | One, at the console | Down |
| System 6 water polo | LED-R or mini scoreboard | Two | Up on both |
| System 6 water polo | Video board | Two | Down if the system has multisport boards; up if it has cabled aquatic boards |

Water polo from a System 6 has extra conditions. The console's water polo definitions must be
at their defaults. With switch 8 down, each multisport board has to be on address 1. In
DisplayLink Plus, the template items and interface must match the switch: the multisport ones
with switch 8 down, the aquatic ones with switch 8 up.[^f1045] Multisport boards can be
recognised by part numbers starting `MS-` on the label on the right of the case.[^f1045]

A computer sees the adapter as a serial port, and the COM port number Windows assigns must be
selected in SynchroMM or DisplayLink Plus. The guide explains how to find the number in
Windows XP, 7, 8 and 10.[^f1045]

## Switch settings

The eight switches must be changed with the power off. Switches 1–4 set the channel and
switches 5–7 the PAN ID, as a binary number in which a switch set down counts as 1 and switch 1
is the lowest bit. Switch 8 sets the mode.[^f1045]

| Switch | Value when down |
|---|---|
| 1 | Channel + 1 |
| 2 | Channel + 2 |
| 3 | Channel + 4 |
| 4 | Channel + 8 (channels run 0–11) |
| 5 | PAN + 1 |
| 6 | PAN + 2 |
| 7 | PAN + 4 (PANs run 0–7) |
| 8 | Mode: down only when a System 6 sends water polo to multisport boards; otherwise up |

With all switches up, the adapter is on channel 0 and PAN 0. Channel 11 with PAN 7 has
switches 1, 2 and 4 to 7 down.[^f1045]

Three switches reach only eight PAN IDs, while the multisport boards and the WTTC-1 and WHC-1
controllers accept PANs from 0 to 15.[^f1045][^f970][^f1071] A board or controller set to a PAN
above 7 therefore cannot be matched by a WA-3's switches. The datasheet's figure of eight
networks per channel reflects the adapter's own limit; CTS's 2015 catalogue gives sixteen
networks per channel for its wireless boards.[^ds19][^cat15]

A System 6 menu can also set the channels of the transmitting and receiving adapters, and show
an adapter's channel and firmware version on the board. The System 6 guide says the console's
setting overrides the DIP switches, but it does not name the adapter model.[^f870]

## Firmware and water polo mapping

The adapter's firmware is updated from a Windows PC over USB with CTS's MultiSport reprogramming
tool. The tool lists a WA-3 under the name WA2.[^f1026][^f1004] CTS's 2019 instructions for
firmware 2.0.8 treat the WA-2 and WA-3 as one device. That firmware lets an adapter at an older
cabled board, such as an LED-R or a portable mini scoreboard, show water polo data sent by a
WTTC-1. A separate CTS program, the Wireless Polo Scoreboard Mapper, chooses which item appears
on each line of an LED-R board.[^f1026]

## Compared with WA-1 and WA-2

The WA-3 is the third of CTS's wireless scoreboard adapters.

The [Sky-Fi WA-1](wa-1.md) used the 900 MHz band, with eight spread-spectrum channels, in a
larger case of 5.75 × 5.2 × 3.9 in. CTS offered it for its older consoles.[^cts900] Its channels
overlapped with those of CTS's 900 MHz wireless judging system.[^f941]

The WA-2 introduced the 2.4 GHz radio, and the WA-3 is close to a copy of it. CTS's 2014 page for
the WA-2 gives the same channels, networks, range, size and weight later printed for the WA-3,
and the two user guides share their set-ups and switch map.[^cts24][^f987][^f1045] The
differences that the documents show are small:[^f987][^f987b][^f1045]

- the computer connection, Micro USB-B on the WA-2 with cable `R-015-203`, full-size USB-B on
  the WA-3 with cable `R-015-606`;
- the radio, the XBee-PRO alone on the WA-2, and the XBee-PRO or XBee 3 on the WA-3;
- the antenna extension cable, `R-015-552` in the 2014 WA-2 guide and `R-015-638` from 2016;
- the safety standard, UL 60950-1 for the WA-2 and UL 62368-1 for the WA-3.

Both declarations of conformity carry the same date, 20 December 2013. The WA-2's cites the
European directives of that time. The WA-3's cites the 2014 directives and a 2014 standard under
the same 2013 date, so it appears to have been carried over from the WA-2 and updated without
being re-dated.[^f987][^f1045]

The earliest WA-3 documents held date from 2019.[^ds19][^f1026] The WA-2 has not disappeared: in
2026 a dealer still sold it under that name, and CTS's firmware packages still carry the WA2
label.[^kap7][^f1026]

## Specifications

| Item | Value |
|---|---|
| Radio | 2.4 GHz; XBee-PRO or XBee 3 module[^f1045] |
| Channels | 12 (0–11), set by switches 1–4[^f1045] |
| PAN IDs | 8 (0–7), set by switches 5–7[^f1045] |
| Range | 1,000 ft, given as 100 m in the datasheet[^ds19] |
| Power | 5 V DC, 500 mA[^f1045] |
| Dimensions (H × W × D) | 4.25 × 6.4375 × 1.1875 in (10.80 × 16.00 × 3.00 cm)[^ds19] |
| Weight | 13.4 oz (380 g)[^ds19] |
| Connections | RS-232 jack; USB-B; antenna connector[^f1045] |
| Safety and EMC | UL 62368-1; CSA C22.2 No. 62368-1; FCC Part 15 Class A; ICES-003[^f1045] |
| Manufacture | Loveland, Colorado[^ds19] |

## Part numbers and accessories

This section lists the adapter's part number, its cables and dealer prices.

- `WA-3`, the adapter. RecSupply listed it as item MMWA350 at $824.56 in September 2026.[^recsupply]
- `R-015-606`, USB-A to USB-B cable for a laptop or DisplayLink Plus computer.[^f1045]
- `R-015-638`, antenna extension cable for outdoor signs, sold separately.[^f1045]
- R-DC console cable and R-DC4 scoreboard cable. F1045's drawing labels the console cable
  R-20C where the text says R-DC; the difference is not explained.[^f1045]
- `WA-2`, the predecessor, sold by KAP7 at $725.00 in September 2026.[^kap7]

## See also

- [WA-2](wa-2.md) and [Sky-Fi WA-1](wa-1.md): the adapters it succeeds
- [WTTC-1](wttc-1.md) and [WHC-1](whc-1.md): the wireless controllers that need no adapter to
  transmit
- [SynchroMM](../../../software/synchromm.md): the CTS artistic swimming software it can carry
- [Scoreboard control](index.md): the scoreboard-control overview
- [Colorado Time Systems](../../../vendors/colorado-time-systems.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^f1045]: [Colorado Time Systems, 2.4 GHz Wireless Adapter (WA-3) User Guide (F1045 Rev. 202007)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Misc/Wireless%20Adapters/WA-3_User-Guide_F1045.pdf).
[^ds19]: Colorado Time Systems, 2.4GHz Wireless Scoreboard Adapter (WA-3) datasheet (Rev 04/19).
[^f987]: [Colorado Time Systems, 2.4 GHz Wireless Adapter (WA-2) User Guide (F987 Rev. 201411)](https://web.archive.org/web/20141114024203/http://coloradotime.com/manuals/WA-2_F987.pdf) (archived 2014).
[^f987b]: [Colorado Time Systems, 2.4 GHz Wireless Adapter (WA-2) User Guide (F987 Rev. 201605)](https://web.archive.org/web/20230401201250/https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Misc/Wireless%20Adapters/WA-2_F987.pdf) (archived 2023).
[^f1026]: [Colorado Time Systems, WA-2/WA-3 Water Polo (F1026 Rev. 201907)](https://web.archive.org/web/20220411150907/https://www.coloradotime.com/manuals/WTTC-WA2-WP-Instructions-20190722_F1026.pdf) (archived 2022).
[^cts24]: [Colorado Time Systems, 2.4GHz Wireless Scoreboard Adapter](https://web.archive.org/web/20140520205053/http://www.coloradotime.com/2-4ghz-wireless-scoreboard-adapter/) (WA-2; archived May 2014).
[^cts900]: [Colorado Time Systems, 900MHz Wireless Scoreboard Adapter](https://web.archive.org/web/20140512225630/http://www.coloradotime.com/900mhz-wireless-scoreboard-adapter/) (Sky-Fi; archived May 2014).
[^recsupply]: [RecSupply, Wireless Adapter for Colorado Time System 6, 2.4 GHz (MMWA350)](https://www.recsupply.com/wireless-adapter-for-colorado-time-system-6-2-4-ghz-mmwa350) (September 2026).
[^kap7]: [KAP7 International, Colorado Wireless Adapter (WA-2)](https://www.kap7.com/products/wireless-adapter) (September 2026).
[^f1004]: Colorado Time Systems, Scoreboard for Swimming & Track With 2.4 GHz Integrated Wireless, Installation and User Guide (F1004 Rev. 202605).
[^f970]: [Colorado Time Systems, Wireless Handheld All Scoreboards Controller User Guide (F970 Rev. 202103)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Multisport%20Electronic%20Scoreboards/Multisport%20Controllers/WHC_All_Scoreboards_User_Guide_F970.pdf).
[^f1071]: [Colorado Time Systems, WTTC Water Polo User Instructions (F1071 Rev 202501)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Multisport%20Electronic%20Scoreboards/Multisport%20Controllers/WTTC%20Water_Polo_F1071.pdf).
[^f870]: Colorado Time Systems, Swimming 6 for the System 6 Sports Timer Software User Guide (F870 Rev. 20241107), wireless adapter menu.
[^f941]: Colorado Time Systems, Wireless Judging 900 MHz Frequency User Guide (F941 Rev. 20110720).
[^cat15]: Colorado Time Systems, Complete Timing, Scoring, Training and Display Solutions catalogue (2015).
[^f1050]: Colorado Time Systems, Wireless Handheld Segment Timer Controller User Guide (F1050 Rev. 202103, ©2021).
[^f972]: [Colorado Time Systems, Slim Pace Clock User Guide (F972 Rev. 202509)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Training%20Tools/Pace%20Clocks/Slim_Pace_Clock_User_Guide_F972.pdf).

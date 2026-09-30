---
title: Colorado Time Systems WA-2
description: >-
  The WA-2 is the 2014 Colorado Time Systems 2.4 GHz wireless scoreboard adapter, the
  generation between the Sky-Fi WA-1 and the WA-3.
tags:
  - Equipment
  - Scoring
  - Timing
infoboxTitle: WA-2
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Part number
    value: '`WA-2`'
  - label: Type
    value: 2.4 GHz wireless scoreboard adapter
  - label: Connection
    value: 2.4 GHz radio, channel 0–11, PAN 0–7; RS-232 jack; Micro USB-B
  - label: Dimensions
    value: 4.25 × 6.4375 × 1.1875 in (10.80 × 16.00 × 3.00 cm)
  - label: Weight
    value: 13.4 oz (379.88 g)
  - label: Power
    value: 5 V DC, 500 mA, from a USB power adapter, a computer or the scoreboard
  - label: Introduced
    value: '2014'
  - label: Succeeded by
    value: '[WA-3](equipment/common/scoreboard-control/wa-3.md), by 2019'
  - label: Status
    value: Superseded; still sold by dealers in 2026
  - label: Manual
    value: '[2.4 GHz Wireless Adapter (WA-2) User Guide (F987 Rev. 201605)](https://web.archive.org/web/20230401201250/https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Misc/Wireless%20Adapters/WA-2_F987.pdf)'
---

<!--
Research notes, WA-2. Built out from a stub in September 2026.

Read in full: the WA-2 user guide F987 in both editions held as text under
sources/reference/cts-web/ (Rev. 201411, archived November 2014; Rev. 201605, archived April
2023). A whitespace-normalised diff shows only three changes between them: the revision
line, the copyright line ((c)2008 in 2014, (c)2016 in 2016) and the antenna extension cable
part number (R-015-552, then R-015-638). The (c)2008 on a guide for a product first named in
2014 is unexplained; most likely a template carried over from an older CTS manual.

Read from the Wayback Machine in this pass (September 2026), saved outside the repo:
  - WA-2 datasheet, coloradotime.com/pdf/WA_2_Scoreboard_Adapter.pdf, captured November 2014
    and August 2016 (identical files). Footer Rev 03/14; the PDF was created 26 March 2014.
    Gives 12 channels with 8 networks each, 1,000 ft (100 m), 4-1/4 x 6-7/16 x 1-3/16 in
    (10.80 x 16.00 x 3.00 cm), 13.4 oz (379.88 g), power AC, made in Loveland.
  - CTS product page, /2-4ghz-wireless-scoreboard-adapter/. Post dated 1 May 2014; first
    captured 20 May 2014. Captures of November 2014, June 2016, August 2017 and September
    2018 all name the WA-2; by September 2018 the title reads "2.4GHz Wireless Electronic
    Scoreboard Adapter". The next capture, July 2020, names the WA-3 with the same figures
    and links WA_3_Scoreboard_Adapter.pdf instead. No capture falls between September 2018
    and July 2020. Last capture February 2022.
  - CTS 2014 multisport scoreboard catalogue (2014_Scoreboard_Catalog_sm.pdf, PDF created 13
    January 2014, captured 23 January 2014). 26 pages. Covers the 2.4 GHz boards and the
    WTTC-1 and WHC-1 controllers, with 12 channels and 16 networks per channel for the boards.
    Its DisplayLink Plus page mentions an optional wireless adapter for meet-management data
    but names no model. No WA-2 anywhere in it.
  - CTS 2018 aquatic catalogue (captured September 2018, 64 pages). Refers only to "wireless
    adapter" generically (Dolphin mini scoreboard diagram; Otter boards with System 6). No
    model number.

Other held documents that name the WA-2:
  - Deck clock guide F985 (the console connects by cable or through a WA-2, set to the
    board's channel and PAN, mode switch to multisport) and the deck clock datasheet Rev 05/18
    (a CTS console reaches the clock through a WA-2).
  - Otter guides F1004 and F995 (Rev. 202605): board defaults channel 6/PAN 0 (swimming) and
    channel 8/PAN 0 (diving) for use with a WA-2; leader/follower set-up over USB with a
    WTTC, WA-3 or WA-2; System 5 and System 6 send time of day through a WA-2 or WA-3.
  - Gen7 serial timer guide F1034 (Rev 202603), menu 5d: which pool feeds the wireless
    stream to an Otter or LED-R "via WA-2 or WA-3".
  - Gen7 Legacy swim timing datasheet (REV: 05/26): its comparison table gives the System 6
    a wireless scoreboard "with WA-1 or WA-2 adapter" and the Gen7 Legacy built-in 2.4 GHz.
  - DisplayLink Plus help: troubleshooting topic (data source connected physically or through
    a WA-1 or WA-2); release notes v4.2.15 of 11 December 2015 (fixed a crash when a WA-2 was
    in use and the event or heat changed).
  - F1026 Rev. 201907, WA-2/WA-3 Water Polo: firmware 2.0.8 for both, the MultiSport
    Reprogrammer listing the device as "WA2 2.X.X", and the Wireless Polo Scoreboard Mapper
    with buttons labelled Find WA-2 and Program WA-2.
  - Wireless Synchro sheet (Revised 09/13): package includes two wireless adapters, model not
    named. Dated before the WA-2's datasheet, so it may mean the WA-1. Not used in the body.

Radio: F987 states the WA-2 contains FCC ID OUR-XBEEPRO and IC 4214-XBEEPRO, a MaxStream
XBee-PRO module (fccid.io/OUR-XBEEPRO). Digi's XBee/XBee-PRO S1 802.15.4 (Legacy) user
guide, 90000982, gives the XBee-PRO's CH parameter as 0x0C-0x17, twelve channels, where the
lower-power XBee has 0x0B-0x1A (sixteen). That is the same count as CTS's twelve; the mapping
of CTS channel 0 to 802.15.4 channel 12 is inferred, not documented by CTS. The same Digi
guide rates the XBee-PRO (US) at up to 300 ft indoors and 1 mile outdoors line of sight.

Dealers, September 2026: KAP7, WA-2, $725.00; Poolweb, "System 6 Wireless Adapter 2.4 GHz",
item 1151-WA-3 with cross reference WA-2, $741.06, extended lead time (a search-engine snippet
showed $585.86, so the price has moved); RecSupply, MMWA350, WA-3, $824.56; CTS shop,
refurbished WA-3, $375.00 marked down from $595.00, sold out. An Olympian LED listing titled
for the WA-2 at $595.00 appeared in search but the page served a NovaStar catalogue instead,
so it is not cited.

Discrepancies flagged in the body: range 1,000 ft vs 100 m; datasheet "Power: AC" vs guide
5 V DC 500 mA (the AC is the wall adapter feeding the USB supply); (c)2008 on Rev. 201411.

Still open: the exact month the WA-3 replaced the WA-2 (between September 2018 and April
2019 on the evidence of the product page and the WA-3 datasheet); CTS's own price for the
WA-2; whether the "two wireless adapters" of the 2013 synchro package were WA-1 or WA-2.
-->

The WA-2 is a 2.4 GHz wireless scoreboard adapter made by
[Colorado Time Systems](../../../vendors/colorado-time-systems.md) (CTS). It replaces the
data cable between a scoreboard and its data source. One adapter at the source sends the
scoreboard output by radio, and a second at the board receives it, unless the board has a
2.4 GHz radio of its own.[^f987][^ds14] It was the second of CTS's three wireless adapters,
after the 900 MHz [Sky-Fi WA-1](wa-1.md), and it first appears in CTS documents in 2014. The
[WA-3](wa-3.md), which keeps its specifications and set-ups, had replaced it by
2019.[^ds14][^ds19][^cts20]

## Role in the scoreboard system

This section covers what the WA-2 connects and when a second unit is needed.

F987 names three kinds of data source. A [System 6](../../swimming/timers/system-6.md) or
another CTS timing console connects to the adapter by an R-DC cable. A laptop with
[SynchroMM](../../../software/synchromm.md) or another CTS program on it connects by USB. CTS's
wireless controllers, the [WTTC-1](wttc-1.md) and [WHC-1](whc-1.md), carry their own radios
and transmit without one.[^f987]

At the display end, the guide covers three cases:

- An [LED-R](../scoreboard/led-r.md) or a P01-style [mini scoreboard](../scoreboard/mini-scoreboard.md)
  takes a second WA-2 on an R-DC4 cable. Further boards can be chained from the first with
  more R-DC4 cables.
- A video board takes the second WA-2 at the computer running
  [DisplayLink Plus](../../../software/displaylink-plus.md), plugged into a USB port.
- A multisport board has its own receiver and needs no second adapter. CTS tells users not to
  cable one to it.[^f987]

Other CTS guides show the same role from the board's side. The
[deck clock](../pace-clock/deck-clock.md) guide offers a WA-2 as the alternative to a data
cable from a console, set to the clock's channel and PAN with the mode switch at the
multisport position.[^f985] The [Otter](../scoreboard/otter.md) guides give each board a
factory channel for use with a WA-2: channel 6 on the swimming board and channel 8 on the
diving board, both on PAN 0.[^f1004][^f995] CTS's 2026 datasheet for the
[Gen7 Legacy](../../swimming/timers/gen7-legacy.md) timer sets it against the System 6, which
needs a WA-1 or WA-2 to reach a wireless board. The Gen7 Legacy has a 2.4 GHz radio built
in.[^legacyds]

## Design and hardware

The WA-2 is a flat box of 4.25 × 6.4375 × 1.1875 in (10.80 × 16.00 × 3.00 cm) that weighs
13.4 oz (379.88 g).[^ds14] It has an RS-232 jack for the console cable, a Micro USB-B socket,
a screw-on antenna that is set pointing up, and eight DIP switches under the label
CONFIG.[^f987] The guide rates it at 5 V DC and 500 mA. Power depends on the set-up: a USB
power adapter at a console, the computer's USB port at a laptop or DisplayLink Plus
computer, and the scoreboard itself when the WA-2 is cabled to one.[^f987] The datasheet lists
the power only as "AC", presumably meaning the wall supply at the console end.[^ds14]

The radio is an XBee-PRO module, FCC ID `OUR-XBEEPRO`, certified by MaxStream, the module's
original maker.[^f987][^fccpro] CTS gives twelve channels, each with eight independent
networks, and a range of 1,000 ft.[^ds14] Digi International's guide for this generation of
module gives the XBee-PRO twelve usable 802.15.4 channels, against sixteen for the standard
XBee, the same number CTS gives. CTS does not document how its channel numbers map to the
module's.[^digi] The range figure has a conversion problem: CTS prints it as 1,000 ft
(100 m), but 1,000 ft is about 305 m.[^ds14][^cts24]

The radio passes through non-metallic material with little loss, so the guide's concern is
metal in the line of sight. It notes that many facilities mount the WA-2 inside the sign panel
of an LED-R. Outdoor panels are Dibond, a metal composite, so there the antenna has to go
outside the case on an extension cable through a 1/4 in hole.[^f987]

## Set-ups

Two rules apply to every set-up in F987. The sending and receiving devices must share a
channel and PAN ID, and switch 8 selects the data format.[^f987]

| Source | Display | Adapters | Switch 8 |
|---|---|---|---|
| System 6: swimming, diving or training pace clock | Cabled aquatic board or video board computer | Two | Up on both |
| Laptop running SynchroMM | Cabled aquatic board or video board computer | Two | Up on both |
| WTTC-1 or WHC-1 controller | Video board, through the DisplayLink Plus computer | One, at the computer | Up |
| System 6 water polo | Multisport boards | One, at the console | Down |
| System 6 water polo | LED-R or mini scoreboard | Two | Up on both |
| System 6 water polo | Video board | Two | Down if the system has multisport boards; up if it has cabled aquatic boards |

Water polo from a System 6 needs the console's water polo definitions left at their defaults.
With switch 8 down, every multisport board has to be on address 1; such boards carry part
numbers beginning `MS-`. In DisplayLink Plus, the multisport template items and interface
go with switch 8 down, and the aquatic ones with switch 8 up.[^f987]

A computer sees the WA-2 as a serial port. The COM port that Windows assigns must then be
chosen as the input in SynchroMM or DisplayLink Plus, and the guide shows where to find it in
Windows XP, 7 and 8.[^f987]

## Switch settings

The switches are changed with the adapter unpowered. Switches 1–4 hold the channel and
switches 5–7 the PAN ID, each read as a binary number in which a switch pushed down is a 1 and
the lowest-numbered switch is the lowest bit.[^f987]

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

The map is the same in the WA-3 guide. Its limit to eight PAN IDs also carries over: the
multisport boards and controllers accept PANs up to 15, and a WA-2's switches cannot match
one set above 7.[^f987][^f1045][^f1004]

## Firmware

CTS updates the WA-2's firmware over USB with its
[MultiSport Reprogrammer](../../../software/multisport-reprogrammer.md), which lists the unit
as "WA2" followed by its firmware version. CTS's 2019 instructions for firmware 2.0.8 cover the
WA-2 and WA-3 as a single target. That version lets an adapter at a cabled board show water
polo data sent by a WTTC. A second CTS program, the
[Wireless Polo Scoreboard Mapper](../../../software/wireless-polo-scoreboard-mapper.md),
writes a custom layout for an LED-R into the adapter, and its buttons are labelled
Find WA-2 and Program WA-2.[^f1026]

## History

This section traces the WA-2 from its first documents to its replacement.

CTS's January 2014 scoreboard catalogue already covers the 2.4 GHz boards and the WTTC-1 and
WHC-1 controllers. It mentions only an unnamed optional adapter, for getting meet-management
data into DisplayLink Plus.[^cat14] The WA-2's European declaration of conformity is dated 20
December 2013.[^f987] The earliest document found that names the WA-2 is its datasheet, revision
03/14.[^ds14] CTS's product page for the 2.4 GHz adapter is dated 1 May 2014 and gives the same
figures.[^cts24]

The first edition of F987 found is Rev. 201411. It carries a copyright date of 2008, which
does not fit a product first documented in 2014 and may have been carried over from an older
manual. The second edition, Rev. 201605, changes one part number, the antenna extension cable,
from `R-015-552` to `R-015-638`, and is otherwise the same text.[^f987][^f987b] DisplayLink
Plus 4.2.15, released on 11 December 2015, fixed a crash that happened when a WA-2 was
connected and the event or heat changed.[^relnotes]

The product page still named the WA-2 in September 2018, under a new title, "2.4GHz Wireless
Electronic Scoreboard Adapter".[^cts18] The WA-3 datasheet is dated April 2019, and by July
2020 the same page named the WA-3, with its figures unchanged.[^ds19][^cts20] That places the
change between September 2018 and April 2019. CTS's firmware tool still reports a WA-3 as a
WA2.[^f1004] CTS documents from 2026, including the Otter guides,
the Gen7 serial timer guide and the Gen7 Legacy datasheet, still name the WA-2 beside or
instead of the WA-3.[^f1004][^f1034][^legacyds]

## Compared with the WA-3

The [WA-3](wa-3.md) kept the WA-2's case size, weight, channels, range, set-ups and switch map.
The documented differences are few:[^f987][^f987b][^f1045]

- the computer connection, a Micro USB-B socket with cable `R-015-203` on the WA-2, and a
  full-size USB-B socket with cable `R-015-606` on the WA-3;
- the radio, the XBee-PRO alone on the WA-2, and the XBee-PRO or XBee 3 on the WA-3;
- the safety standard, UL 60950-1 for the WA-2 and UL 62368-1 for the WA-3;
- the COM-port instructions, which add Windows 10 in the WA-3 guide.

CTS's 2019 firmware sheet, by contrast, calls for a USB-A to USB-B cable for either
model, which does not match the Micro USB-B cable in F987.[^f1026][^f987]

## Specifications

| Item | Value |
|---|---|
| Radio | 2.4 GHz; XBee-PRO module, FCC ID `OUR-XBEEPRO`, IC 4214-XBEEPRO[^f987] |
| Channels | 12 (0–11), set by switches 1–4[^f987] |
| PAN IDs | 8 (0–7), set by switches 5–7[^f987] |
| Range | 1,000 ft, given as 100 m[^ds14] |
| Power | 5 V DC, 500 mA[^f987] |
| Dimensions (H × W × D) | 4.25 × 6.4375 × 1.1875 in (10.80 × 16.00 × 3.00 cm)[^ds14] |
| Weight | 13.4 oz (379.88 g)[^ds14] |
| Connections | RS-232 jack; Micro USB-B; antenna connector[^f987] |
| Safety and EMC | UL 60950-1; CSA C22.2 No. 60950-1; FCC Part 15 Class A; ICES-003[^f987] |
| Declaration of conformity | 20 December 2013, Loveland, Colorado[^f987] |
| Manufacture | Loveland, Colorado[^ds14] |

## Part numbers and accessories

This section lists the adapter's part number, its cables and dealer prices.

- `WA-2`, the adapter. In September 2026 KAP7 sold it under that number at $725.00, and
  Poolweb listed a 2.4 GHz adapter as item 1151-WA-3, cross-referenced to WA-2, at
  $741.06.[^kap7][^poolweb]
- `R-015-203`, Micro USB-B to USB-A cable for a laptop or DisplayLink Plus computer, included.[^f987]
- `R-015-552` (2014 guide) or `R-015-638` (2016 guide), antenna extension cable for outdoor
  signs, sold separately.[^f987][^f987b]
- R-DC console cable and R-DC4 scoreboard cable; extra R-DC4 cables for chained boards are
  ordered separately.[^f987]

## See also

- [WA-3](wa-3.md) and [Sky-Fi WA-1](wa-1.md): the adapters after and before it
- [WTTC-1](wttc-1.md) and [WHC-1](whc-1.md): the wireless controllers that need no adapter to
  transmit
- [SynchroMM](../../../software/synchromm.md): the CTS artistic swimming software it can carry
- [Scoreboard control](index.md): the scoreboard-control overview
- [Colorado Time Systems](../../../vendors/colorado-time-systems.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^f987]: [Colorado Time Systems, 2.4 GHz Wireless Adapter (WA-2) User Guide (F987 Rev. 201411)](https://web.archive.org/web/20141114024203/http://coloradotime.com/manuals/WA-2_F987.pdf) (archived 2014).
[^f987b]: [Colorado Time Systems, 2.4 GHz Wireless Adapter (WA-2) User Guide (F987 Rev. 201605)](https://web.archive.org/web/20230401201250/https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Misc/Wireless%20Adapters/WA-2_F987.pdf) (archived 2023).
[^ds14]: [Colorado Time Systems, 2.4GHz Wireless Scoreboard Adapter datasheet (WA-2, Rev 03/14)](https://web.archive.org/web/20141114093400/http://www.coloradotime.com/pdf/WA_2_Scoreboard_Adapter.pdf).
[^cts24]: [Colorado Time Systems, 2.4GHz Wireless Scoreboard Adapter](https://web.archive.org/web/20140520205053/http://www.coloradotime.com/2-4ghz-wireless-scoreboard-adapter/) (WA-2; archived May 2014).
[^cts18]: [Colorado Time Systems, 2.4GHz Wireless Electronic Scoreboard Adapter](https://web.archive.org/web/20180906000511/http://www.coloradotime.com/2-4ghz-wireless-scoreboard-adapter/) (WA-2; archived September 2018).
[^cts20]: [Colorado Time Systems, 2.4GHz Wireless Scoreboard Adapter](https://web.archive.org/web/20200725164405/http://www.coloradotime.com/2-4ghz-wireless-scoreboard-adapter/) (WA-3; archived July 2020).
[^cat14]: [Colorado Time Systems, 2014 scoreboard catalogue](https://web.archive.org/web/20140123175040/http://coloradotime.com/pdf/2014_Scoreboard_Catalog_sm.pdf) (archived January 2014).
[^ds19]: Colorado Time Systems, 2.4GHz Wireless Scoreboard Adapter (WA-3) datasheet (Rev 04/19).
[^f1045]: [Colorado Time Systems, 2.4 GHz Wireless Adapter (WA-3) User Guide (F1045 Rev. 202007)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Misc/Wireless%20Adapters/WA-3_User-Guide_F1045.pdf).
[^f1026]: [Colorado Time Systems, WA-2/WA-3 Water Polo (F1026 Rev. 201907)](https://web.archive.org/web/20220411150907/https://www.coloradotime.com/manuals/WTTC-WA2-WP-Instructions-20190722_F1026.pdf) (archived 2022).
[^f1004]: Colorado Time Systems, Scoreboard for Swimming & Track With 2.4 GHz Integrated Wireless, Installation and User Guide (F1004 Rev. 202605).
[^f995]: Colorado Time Systems, Diving Scoreboard With 2.4 GHz Integrated Wireless, Installation and User Guide (F995 Rev. 202605).
[^f985]: [Colorado Time Systems, Deck Clock User Guide (F985 Rev. 202007)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Multisport%20Electronic%20Scoreboards/LED%20Scoreboards/Deck_Clock_User_Guide_F985.pdf).
[^f1034]: [Colorado Time Systems, Gen7 Serial Timer User Guide (F1034)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Gen7/Gen7SerialTimerUserGuide_F1034.pdf), menu 5d.
[^legacyds]: [Colorado Time Systems, Gen7 Legacy Swimming datasheet](https://coloradotime.com/hubfs/PDFs/data%20sheets/Gen7_Legacy_Swimming.pdf) (Rev 05/26), feature comparison.
[^relnotes]: Colorado Time Systems, Display Link Plus Help, Release Notes topic (v4.2.15, 11 December 2015).
[^fccpro]: [FCC ID OUR-XBEEPRO, MaxStream XBee-PRO OEM RF module](https://fccid.io/OUR-XBEEPRO) (2.4 GHz ISM band).
[^digi]: [Digi International, XBee/XBee-PRO S1 802.15.4 (Legacy) RF Modules User Guide (90000982)](https://docs.digi.com/resources/documentation/digidocs/pdfs/90000982.pdf), CH command.
[^kap7]: [KAP7 International, Colorado Wireless Adapter (WA-2)](https://www.kap7.com/products/wireless-adapter) (September 2026).
[^poolweb]: [Poolweb, System 6 Wireless Adapter 2.4 GHz (1151-WA-3)](https://www.poolweb.com/products/system-6-wireless-adapter-2-4-ghz) (September 2026).

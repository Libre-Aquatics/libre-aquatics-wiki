---
title: Colorado Time Systems Dolphin Scoreboard Adapter
description: >-
  The Dolphin Scoreboard Adapter is a small Colorado Time Systems radio receiver that lets a
  CTS numeric scoreboard show results directly from a Dolphin wireless stopwatch timing system.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Dolphin Scoreboard Adapter
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Part number
    value: '`K-DSCB` (adapter and mounting kit)'
  - label: Type
    value: Wireless scoreboard receiver for the Dolphin system
  - label: Connection
    value: Cord to a scoreboard RS-485 DIN jack; 2.4 GHz radio from the Dolphin base
  - label: Scoreboards
    value: CTS LED numeric scoreboards; built into the [Otter](equipment/common/scoreboard/otter.md)
  - label: Dimensions
    value: 2.5 × 4.2 × 0.9 in (6.4 × 10.7 × 2.3 cm), H × L × D
  - label: Weight
    value: 3.2 oz (90.7 g)
  - label: Power
    value: From the scoreboard, or a separate power supply
  - label: Introduced
    value: By 2008
  - label: Status
    value: Current
  - label: Manual
    value: Dolphin Scoreboard Adapter instructions (F928 Rev. 201505)
---

<!--
Research notes, Dolphin Scoreboard Adapter. Stub created while building out dolphin.md; built out
to a full article 2026-10-19.

The adapter's own documents, found on the web on 2026-10-19 and now filed under
sources/vendors/colorado-time-systems/scoreboards-displays/:
- F928 Rev. 201505, "Dolphin Scoreboard Adapter", two pages (PDF dated 8 May 2015), from a
  dealer's product page (assets.poolweb.com/products/Colorado_Time/
  Dolphin_Scoreboard_Adapter_Install.pdf). Filed as
  cts-dolphin-scoreboard-adapter-installation-instructions-f928.
  - Base firmware: the Dolphin base must first be given firmware that supports the adapter
    (BASExxx.DBC, loaded from the small "CTS Dolphin version" link in the software).
  - Mounting: a holster screwed to the wall near the board, or Velcro or double-sided tape on
    the board's top or side.
  - Cable: the adapter's cord plugs into either RS-485 jack, which it calls a round 4-pin DIN.
  - Power: lit LEDs on the adapter, once the board is on, mean the board is powering it;
    otherwise plug in the supplied power supply.
  - Several lines must be linked with R-DC4 RS-485 cables. Any R-2DC RS-232 cables may stay, so
    long as nothing else (System 6, pace clock controller) is sending data.
  - Channel: after its self-test the board shows the adapter's channel. Set the base to that
    channel in the software's Channel box, then optionally move the adapter to a new channel
    from the same box, and set base, watches and starter to match.
  - Updates: the adapter file is SBxxx.DDC, loaded by Update Scoreboard Code. The sheet carries
    patents 7,821,876 and 8,085,623.
- Datasheet "Dolphin Wireless Scoreboard Adapter", Rev 03/14 (PDF dated 27 March 2014), on
  coloradotime.com (hubfs/PDFs/data sheets/Dolphin Scoreboard Adapter.pdf). The dealer's
  "brochure" PDF has the same text. Filed as cts-dolphin-scoreboard-adapter-datasheet.
  - Display: lane, place and time for lanes 1-10, one line can scroll through active lanes,
    event and heat, time to 1/10 s.
  - K-DSCB is offered to add the adapter to LED numeric boards already in place; DC4 cables
    link the lines of a multi-line board.
  - Size 2.5 in high, 4.2 in long, 0.9 in deep; 3.2 oz.

Already held:
- F912 Dolphin User Guide Rev 202412.
  - The adapter is an optional device that the software can reprogram.
  - Firmware: .DDC for v1 and v2 hardware, .DD3 for v3.
  - The current update order: base first, scoreboard off, Open, power the board, then Start
    quickly.
  - The seven scoreboard settings and the Set Time of Day button.
  - Otter boards have the adapter built in; other boards need the external one.
- F927 Mini Scoreboard Rev 201202: the adapter plugs into an RS-485 jack, which F927 calls
  5-pin DIN (against F928's 4-pin; unresolved). Its drawing shows the adapter sitting on top of
  the board at one end. Dolphin module codes are 01-09 for lanes 1-9 and 0A for lane 10.
- F1004 Otter Rev. 202605: the board has its own 2.4 GHz radio for Gen7 and System 6, plus a
  separate Dolphin scoreboard adapter inside it, factory channel 7. At power-on it shows the
  board's address, channel and PAN, then the adapter's channel. Gen7 uses channel 6 / PAN 0 by
  default.
- Catalogues and flyers:
  - 2008 Making Time Count: results only.
  - 2011: split and result data, with "some restrictions apply".
  - 2015: split and result data.
  - Dolphin brochure Rev 08/12, flyer Rev 03/14 and datasheet Rev 10/20: results and race data;
    the 10/20 datasheet lists the adapter as needed for the portable scoreboard.
  - Flyer Rev 09/22: K-DSCB is the adapter plus a mounting kit, and split times show on the
    scoreboard.
  - Mini LED datasheets Rev 03/14 and Rev 03/26: compatible through the adapter.

Web, fetched 2026-10-19:
- CTS shop: K-DSCB "Dolphin Wireless Scoreboard Adapter" new $725.00; refurbished $625.00, sold
  out.
- Poolweb: K-DSCB $686.24, extended lead time. Its copy says time to 1/100 s, against the CTS
  datasheet's 1/10 s. The CTS document is preferred.

Discrepancies:
- RS-485 jack: 4-pin DIN (F928) against 5-pin DIN (F927).
- Time resolution: 1/10 s (CTS datasheet) against 1/100 s (dealer copy).
- Firmware files: F928 (2015) names one adapter file, SBxxx.DDC; F912 (2024) splits .DDC (v1
  and v2) from .DD3 (v3). So the v3 hardware is later than 2015, inferred.
- Splits: absent from the 2008 copy, qualified in 2011, plain by 2015. The 2012 brochure is
  where splits first appear in the Dolphin system as a whole (dolphin.md).

Still to research: the radio module or FCC ID; what changed at hardware v3; the date of first
sale.
-->

The Dolphin Scoreboard Adapter is a small radio receiver made by
[Colorado Time Systems](../../../vendors/colorado-time-systems.md) (CTS) for its
[Dolphin Wireless Stopwatch Timing System](../../swimming/semi-automatic/dolphin.md). Plugged into a CTS LED numeric
scoreboard, it picks up results from the Dolphin base unit and puts them on the board, with no
timing console in between.[^datasheet][^f928] It is sold as kit `K-DSCB`, the adapter with a
mounting kit.[^flyer22] CTS's [Otter](../scoreboard/otter.md) swimming scoreboards have
the same receiver built in.[^f912][^f1004]

## Role in the timing system

This section places the adapter in a Dolphin setup; the Dolphin system as a whole is covered in
the [Dolphin](../../swimming/semi-automatic/dolphin.md) article. A Dolphin base unit plugged into a laptop collects the times
from the lane timers' wireless watches. Without the adapter those times reach only the computer
and the meet-management program.[^f912] The adapter listens to the base on the Dolphin radio
channel and passes the results to the scoreboard over the board's RS-485 data input.[^f928][^f1004]

CTS's 2012 brochure lists the adapter as required with a scoreboard, and later Dolphin
packages pair it with a portable two-line LED scoreboard.[^bro12][^flyer14][^ds20]

## Design and construction

The adapter is a small box, 2.5 in high, 4.2 in long and 0.9 in deep (6.4 by 10.7 by 2.3 cm),
weighing 3.2 oz (90.7 g).[^datasheet] It carries LEDs that show whether it has power, and a cord
that plugs into the scoreboard.[^f928] The kit includes a holster that screws to the wall near
the board. The instructions also allow Velcro or double-sided tape, sticking the adapter onto the
board's top or one end.[^f928] The mini scoreboard guide shows it sitting on top of the
board at one end.[^f927]

## Connection to the scoreboard

This section covers wiring and power. The adapter's cord plugs into either of the board's round
RS-485 DIN jacks. The adapter's own instructions call these 4-pin jacks, while the mini
scoreboard guide calls the same jacks 5-pin.[^f928][^f927] On a board with several lines, the
lines are linked to each other with CTS `R-DC4` RS-485 cables, so that one adapter feeds them
all.[^f928][^datasheet] Any RS-232 cables already on the board can stay, provided no other
source, such as a System 6 console or a pace clock controller, is sending data to it at the
same time.[^f928]

Where the board supplies power through the data jack, the adapter's LEDs light as soon as the
board is switched on. If they stay dark, the adapter runs from the power supply included with
it.[^f928]

On a mini scoreboard, each line is told which lane to show by its module address. Dolphin data
uses addresses 01 to 09 for lanes 1 to 9 and 0A for lane 10.[^f927]

## Operation

This section covers setup and day-to-day use. The adapter and the Dolphin base must share a
radio channel.[^f928][^f1004] When the scoreboard is switched on with the adapter connected, it
runs its self-test and then shows the adapter's channel.[^f928] The operator sets the Dolphin
base to that channel from the Channel box in the Dolphin software. The same box can then move
the adapter to another channel if wanted, and the watches and starter are set to match.[^f928]
The adapter built into an Otter board leaves the factory on channel 7.[^f1004]

Everything the board shows is controlled from the Dolphin software's settings, not from the
adapter.[^f912] The operator sets:[^f912]

- whether the scoreboard is enabled
- whether results are listed by lane or by place
- how many lines the board has and how many lanes the pool has, each from 1 to 10
- how quickly the board scrolls through the lanes when there are more lanes than lines, from
  0.5 to 4 seconds
- brightness from 0 to 7, where 1 hands control to the board's ambient light sensor
- a 12- or 24-hour clock for time of day

A Set Time of Day button sends the computer's clock to boards that show the time. To bring the
time of day back after racing, the guide says to disable the scoreboard in the settings or
unplug the base once the software is closed.[^f912]

CTS's 2014 datasheet lists each lane's place and time for up to ten lanes, the event
and heat, and times to a tenth of a second. One line can be set to cycle through all the active
lanes.[^datasheet] A dealer listing repeats the datasheet's text but gives hundredths, and this
article follows the CTS document.[^datasheet][^poolweb]

## Splits

CTS's description of the adapter changed with the Dolphin system's split feature. The 2008
catalogue says only that the adapter displays results.[^cat08] The 2011 catalogue adds split
times, with a note that some restrictions apply.[^cat11] By 2015 the catalogue lists split and
result data without qualification, and the 2022 flyer says split times appear on the
scoreboard.[^cat15][^flyer22] The [Dolphin](../../swimming/semi-automatic/dolphin.md) article dates splits in the system as a
whole to 2012.

## Firmware and hardware generations

The adapter's firmware is updated from the Dolphin software, through the base unit, after the
base has been updated.[^f928][^f912] The 2024 guide has the operator choose the file, power up the scoreboard, and start the transfer at once, because the adapter accepts new
code only for a short time after power-up.[^f912] When the update is done, the scoreboard shows
the adapter's new revision and its channel.[^f928][^f912]

The 2015 instructions name a single firmware file type, `.DDC`.[^f928] The 2024 guide keeps `.DDC`
for version 1 and 2 hardware and adds `.DD3` for version 3. That puts at least three hardware
versions on record, the third later than 2015.[^f912] No held source says what changed between
them. Before the adapter can be used at all, the base unit needs firmware that supports it.[^f928]

## Compared with the built-in and WA-1 adapters

The [Otter](../scoreboard/otter.md) scoreboard carries two radios. Its own 2.4 GHz radio
takes data from a Gen7 timer or System 6 console on a channel and PAN of its own. A separate
Dolphin scoreboard adapter inside the board listens to the Dolphin system. At power-up the board
shows its own settings first and then the adapter's channel.[^f1004]

CTS's [WA-1](wa-1.md) wireless adapters do a different job. The
mini scoreboard guide uses two of them, one cabled to the timing console and one to the board's
RS-485 jack, in place of the data cable between them.[^f927] The Dolphin adapter has no partner unit at a console, because it takes its data straight
from the Dolphin base.[^f928]

## Specifications

| | |
|---|---|
| Manufacturer | Colorado Time Systems, Loveland, Colorado |
| Part number | `K-DSCB`, adapter and mounting kit[^flyer22] |
| Input | Radio from the Dolphin base, on the Dolphin channel[^f928][^f1004] |
| Output | Cord to a scoreboard RS-485 DIN jack (4-pin per F928, 5-pin per F927)[^f928][^f927] |
| Display data | Lane, place and time for lanes 1–10; event and heat; splits[^datasheet][^cat15] |
| Time shown | To 1/10 s, per CTS[^datasheet] |
| Power | From the scoreboard, or the supplied power supply[^f928] |
| Mounting | Wall holster, or Velcro or tape on the board[^f928] |
| Dimensions | 2.5 × 4.2 × 0.9 in (6.4 × 10.7 × 2.3 cm), H × L × D[^datasheet] |
| Weight | 3.2 oz (90.7 g)[^datasheet] |
| Firmware | `.DDC` (versions 1 and 2), `.DD3` (version 3)[^f912] |
| Price | $725 new, $625 refurbished, at the CTS store in 2026[^shop] |

## Part numbers and accessories

This section lists the parts CTS names for the adapter.

- `K-DSCB`, the adapter kit: the adapter and its mounting kit.[^flyer22]
- A holster and screw for wall mounting, and a power supply, supplied.[^f928]
- `R-DC4`, RS-485 cable linking the lines of a multi-line scoreboard.[^f928][^datasheet]

## See also

- [Dolphin Wireless Stopwatch Timing System](../../swimming/semi-automatic/dolphin.md): the system it receives from
- [Otter](../scoreboard/otter.md): the CTS swimming scoreboard with the adapter built in
- [Mini scoreboard](../scoreboard/mini-scoreboard.md): a CTS board it is used with
- [WA-1](wa-1.md) and [WA-3](wa-3.md): CTS's console-to-scoreboard wireless adapters
- [Scoreboard control](index.md): the scoreboard control overview
- [Colorado Time Systems](../../../vendors/colorado-time-systems.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^f928]: Colorado Time Systems, Dolphin Scoreboard Adapter installation instructions (F928 Rev. 201505).
[^datasheet]: [Colorado Time Systems, Dolphin Wireless Scoreboard Adapter datasheet](https://coloradotime.com/hubfs/PDFs/data%20sheets/Dolphin%20Scoreboard%20Adapter.pdf) (Rev 03/14).
[^f912]: [Colorado Time Systems, Dolphin User Guide (F912)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Dolphin/Dolphinextendedinstructions-F912.pdf) (Rev. 202412), scoreboard settings and device updates.
[^f927]: [Colorado Time Systems, Mini Scoreboard User Guide (F927)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Scoreboards/Mini_Scoreboard_F927.pdf) (Rev. 201202), connections.
[^f1004]: [Colorado Time Systems, Otter Scoreboard for Swimming and Track (F1004)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Multisport%20Electronic%20Scoreboards/LED%20Scoreboards/Otter_Swimming+Track_Scbd_User_Guide_F1004.pdf) (Rev. 202605), Dolphin.
[^flyer22]: Colorado Time Systems, Dolphin Wireless Stopwatch System flyer (Rev. 09/22), accessories.
[^flyer14]: Colorado Time Systems, Dolphin Wireless Stopwatch System flyer (Rev. 03/14), packages.
[^ds20]: Colorado Time Systems, Dolphin Wireless Stopwatch System datasheet (Rev. 10/20), requirements.
[^bro12]: Colorado Time Systems, Wireless Stopwatch Timing System brochure (Rev. 08/12), accessories.
[^cat08]: Colorado Time Systems, Making Time Count (2008 catalogue), Dolphin page.
[^cat11]: Colorado Time Systems, Complete Timing, Scoring, Training and Display Solutions (2011), Dolphin page.
[^cat15]: Colorado Time Systems, Complete Timing, Scoring, Training and Display Solutions (2015), Dolphin page.
[^shop]: [Colorado Time Systems, Dolphin Wireless Stopwatch Timing collection](https://shop.coloradotime.com/collections/dolphin-wireless-stopwatch-timing) (K-DSCB new and refurbished).
[^poolweb]: [Poolweb, Dolphin Scoreboard Adapter Kit (K-DSCB)](https://www.poolweb.com/products/dolphin-scoreboard-adapter-kit).

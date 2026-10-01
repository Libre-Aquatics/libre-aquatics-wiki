---
title: Colorado Time Systems Sky-Fi WA-1
description: >-
  The Sky-Fi WA-1 is the Colorado Time Systems 900 MHz wireless scoreboard adapter, the
  first of its three wireless adapters, sold from at least 2008 and succeeded by the WA-2.
tags:
  - Equipment
  - Scoring
  - Timing
infoboxTitle: Sky-Fi WA-1
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Part number
    value: '`WA-1`'
  - label: Other names
    value: Sky-Fi Wireless Adapter; 900MHz Wireless Scoreboard Adapter
  - label: Type
    value: 900 MHz wireless scoreboard adapter
  - label: Connection
    value: 900 MHz radio, channel 1–8; RS-232 jack; RS-485 DIN jack
  - label: Dimensions
    value: 5.2 × 3.9 × 1.1 in (13.2 × 9.9 × 2.8 cm), W × D × H; 5.75 in (14.6 cm) high with antenna
  - label: Weight
    value: 7.3 oz (206.9 g)
  - label: Power
    value: From the scoreboard's RS-485 jack, or a separate power supply
  - label: Introduced
    value: By 2008
  - label: Succeeded by
    value: '[WA-2](equipment/common/scoreboard-control/wa-2.md), 2014'
  - label: Status
    value: Discontinued; still listed by dealers in 2026
  - label: Manual
    value: '[Sky-Fi Wireless Adapter (WA-1) User Instructions (F929 Rev. 201401)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Misc/Wireless%20Adapters/WA-1_F929.pdf)'
---

<!--
Research notes, Sky-Fi WA-1. Built out from a stub in September 2026.

Read in full, with the PDF pages rendered to check the diagrams and tables the text
extraction flattens:
  - F929 Rev. 201401, Sky-Fi Wireless Adapter (WA-1) User Instructions, 4 pages
    (sources/vendors/colorado-time-systems/scoreboards-displays/
    cts-sky-fi-wireless-adapter-wa-1-user-instructions.pdf). Page 1 photo shows the jack
    panel: a 5-way DIP block labelled CONFIG, a round RS232 jack, the antenna connector and a
    round RS485 DIN jack. Pages 3-4 are wiring diagrams for the four set-ups; the extraction
    keeps only their captions. The PDF's internal creation date is 29 September 2020, so the
    file was regenerated well after its printed revision. It gives the antenna extension cable
    as R-015-638, the number that the WA-2 guide only adopted in its 2016 edition (the 2014
    edition had R-015-552), which suggests the held F929 was edited after January 2014 without
    a new revision number. Inferred, not confirmed.
  - Sky-Fi Wireless Adapter datasheet, Rev 03/14, 1 page (cts-sky-fi-wireless-adapter-transmit.pdf;
    PDF created 27 March 2014, the same week as the WA-2's first datasheet). Photo shows the unit
    beside a System 6 running water polo, with "Sky-Fi" printed on the lid and a row of green
    LEDs on the front. Gives width 5.2 in, height 1.1 in without antenna and 5.75 in with it,
    depth 3.9 in, 7.3 oz, 8 channels, spread spectrum, 900 MHz; made in Loveland.

Other held documents naming the adapter:
  - CTS 2008 catalogue, Making Time Count: High Impact Visual Display Systems (copyright 2008),
    System 6 page: a Sky-Fi Wireless Adapter entry listing pace clocks, shot clocks, single and
    multi-line LED boards and matrix boards as destinations. Earliest dated mention found.
  - F870 System 6 manual Rev. 20100817 (ManualsLib copy): Wireless menu under setups names
    Sky-Fi units. Option 1 shows the adapter's channel on the board, option 2 its firmware
    version on the board, options 3 and 4 set the transmitting and receiving channels, and a
    channel set from the console overrides the DIP switches. The 2024 edition (Rev. 20241107)
    keeps the text but says "wireless adapters" instead of Sky-Fi. Neither says how the console
    reaches the receiving unit's setting; presumably over the radio link. Not stated.
  - F941 Rev. 20110720, Wireless Judging 900 MHz: judging has 31 channels; 1-8 only where no
    wireless pace clocks from CTS or WA-1 units are in use, because both occupy those channels.
  - CTS 2011 catalogue: System 6 page lists a "Sky-Fi wireless option" as a hardware add-on.
  - CTS 2015 catalogue: System 6 page offers wireless add-ons in 900 MHz or 2.4 GHz, with a photo
    of each. Model numbers not printed in the extraction.
  - F927 mini scoreboard guide: two WA-1s, one at the timer on an R-xxDC cable, one at the board
    on an R-DC4-xx cable into one of the board's 5-pin DIN RS-485 jacks. F929 calls the board's
    jacks 4-pin. Flagged in the body.
  - Display Link Plus Help, troubleshooting topic: a data source can reach the DisplayLink
    computer through a WA-1 or WA-2.
  - Gen7 Legacy swimming datasheet (Rev 05/26): the System 6 needs a WA-1 or WA-2 for a
    wireless board.
  - Wireless Synchro sheet (Revised 09/13): package of two "Wireless Adapters", model not
    named. Before the WA-2's datasheet, so probably WA-1s; still unconfirmed, not in the body.
  - F904 Rev. 1106 and Rev. 202507 (Wireless Pro pace clock) and F910 Rev. 202008 (Wireless
    Portable and Standard): a System 6 can feed the clocks through a wireless adapter. The
    2025 F904 and the F910 both say the clocks contain FCC ID Q7V-3F090003X (Brazil:
    OJMTRM900TTA). F941 says the same module, named there as the pre-certified Wi.232DTS,
    is inside the WIO and WJT.
  - F917 (pace clock wireless upgrade kit K-PCW-1): uses an 18 in coax R-015-638 and an antenna
    R-905-001, the same two part numbers the WA-1 uses.

Radio: F929 prints only generic FCC Part 15 Class A text and no FCC ID. The shared channels
(F941) and shared antenna (CTS shop, R-905-001 fits both) make it likely that the WA-1 uses the
same Linx/Radiotronix Wi.232DTS module as the pace clocks, but no document says so. Linx
grantee code Q7V; FCC application filed 13 December 2005 per search-engine summaries of
fccid.io (fccid.io itself returned 403). The Linx TRM-915-DTS data guide (Digi-Key mirror)
gives 32 DTS channels in 902-928 MHz in North America; CTS uses only 8 on the WA-1. Kept out of
the body except as an attributed "not documented" statement.

Web, September 2026:
  - CTS product page, coloradotime.com/products/900mhz-wireless-scoreboard-adapter-wa-1:
    marked DISCONTINUED; same specs as the 2014 page; links F929 and the datasheet; offers the
    R-905-001 antenna; no price.
  - Wayback CDX for coloradotime.com/900mhz-wireless-scoreboard-adapter/: captures from 12 May
    2014 to at least 21 August 2017. The archive went offline mid-session, so later captures
    (and when "DISCONTINUED" first appeared) were not checked. The May 2014 capture is titled
    "Sky-Fi Wireless Scoreboard Adapter with System 6 Timing Console".
  - CTS shop: Replacement Antenna for 900 MHz WA-1 (Sky-Fi) Wireless Adapter and wireless Pace
    Clocks, R-905-001, $30.00; excludes the Slim Pace Clock.
  - Poolweb: System 6 Wireless Adapter 900 MHz, item 1151-WA-1, cross reference WA-1, $785.91,
    extended lead time.
  - Just In Timing: Wireless Adapter 900MHz, SKU WA-1, $515.00.
  - DK Hardware lists it as CYC-35-8621 (search result only; page returned 403; price in the
    snippet $1,129.98). Not cited.

Discrepancies flagged in the body: 4-pin (F929) vs 5-pin (F927) DIN jacks; datasheet names only
a timing console as the source while F929 adds a laptop and the UPC-C.

Still open: first year of sale (before 2008?); CTS list price; range (never stated by CTS); power
supply rating; the radio module; whether the console channel override reaches the receiving
unit over the air; when the CTS page was marked discontinued.
-->

The Sky-Fi WA-1 is a 900 MHz wireless scoreboard adapter made by
[Colorado Time Systems](../../../vendors/colorado-time-systems.md) (CTS). An adapter at the
data source sends scoreboard data by radio to CTS wireless pace clocks and shot clocks, or to a
second WA-1 cabled to a numeric scoreboard or a video board computer.[^f929] It was the first
of CTS's three wireless scoreboard adapters. It appears in a CTS catalogue in 2008, and the
2.4 GHz [WA-2](wa-2.md) followed it in 2014.[^mtc2008][^cts14] CTS now lists the WA-1 as
discontinued.[^cts26]

## Role in the scoreboard system

This section covers the sources and displays the WA-1 links.

F929, the adapter's user instructions, gives three data sources: a CTS timer (the
[System 6](../../swimming/timers/system-6.md) is its example), a laptop running
[SynchroMM](../../../software/synchromm.md), and the [UPC-C](../pace-clock/upc-c.md) pace clock
controller. The data it carries includes the shot clock.[^f929] The datasheet names only a CTS
timing console as the source, and CTS says the adapter works with its older
consoles.[^ds14]

The receiving end depends on the display:[^f929]

- CTS [wireless pace clocks and shot clocks](../pace-clock/wireless-pace-clock.md) have a
  900 MHz radio inside and receive the signal with no second adapter.
- A numeric LED board, such as an [LED-R](../scoreboard/led-r.md), takes a second WA-1
  cabled to its data input.
- A video or matrix board takes the second WA-1 at the computer running
  [DisplayLink](../../../software/displaylink.md).

Other CTS documents show the same uses. The [mini scoreboard](../scoreboard/mini-scoreboard.md)
guide describes a pair of WA-1s, one at the timer and one at the board.[^f927] The help file
for [DisplayLink Plus](../../../software/displaylink-plus.md) allows its data source to arrive
through a WA-1 or a WA-2.[^dlphelp] In 2026 the datasheet for the
[Gen7 Legacy](../../swimming/timers/gen7-legacy.md) timer still says a System 6 needs one of
those two adapters to drive a wireless board.[^legacyds]

## Design and hardware

The WA-1 is a small box with the word Sky-Fi on its lid. Without the antenna it is 5.2 in wide,
3.9 in deep and 1.1 in high (13.2 × 9.9 × 2.8 cm); with the antenna fitted it stands 5.75 in
(14.6 cm). It weighs 7.3 oz (206.9 g).[^ds14] One panel carries, from left to right, a bank of
DIP switches labelled CONFIG, a round RS-232 jack, the antenna connector and a round RS-485 DIN
jack. Status LEDs sit on the front.[^f929][^ds14]

Power reaches the adapter in one of two ways. When it is cabled to the RS-485 jack of a CTS
display, it can draw power from that display; if its LEDs stay dark once the
display is on, it needs its own power supply. At any other device it always runs from the
power supply.[^f929]

CTS describes the radio as 900 MHz spread spectrum with eight channels.[^ds14] F929 carries a
generic FCC Part 15 Class A statement but gives no FCC ID, so the module inside is not
documented. CTS's other 900 MHz products, the wireless pace clocks and the wireless judging
system, name a Linx Technologies Wi.232DTS module, FCC ID `Q7V-3F090003X`.[^f904][^f941] The WA-1
shares its replacement antenna with the wireless pace clocks.[^antenna] CTS gives no range for
the WA-1.

Non-metallic material does little to the signal, so the guide's concern is metal between the
two antennas. CTS reports that many sites mount the adapter within the sign panel of a board, with
the hole in the back enlarged for its data and power cables. Outdoor sign panels are made of
Dibond, a metal composite, and there the antenna goes on the outside of the case. It mounts
through a 1/4 in hole on an extension cable, `R-015-638`, sold separately.[^f929]

## Set-ups

Each set-up pairs a switch setting with a particular cable.[^f929]

| Role | Device | Switches 1 and 2 | Jack used | Cable |
|---|---|---|---|---|
| Transmit | System 6, other CTS timer or UPC-C | Down, down | RS-232 | `R-2DC` |
| Transmit | Laptop running SynchroMM | Down, down | RS-232 | `R-0002-0428` and USB-to-serial adapter `015-467` |
| Receive | LED scoreboard, pace clock or shot clock | Up, up | RS-485 | `R-DC4` |
| Receive | LED numeric scoreboard with no RS-485 jack | Up, down | RS-232 | `R-2DC` |
| Receive | DisplayLink computer | Up, down | RS-232 | `R-0002-0428` |

The laptop and DisplayLink cables are ordered separately.[^f929] A wireless pace clock or shot
clock needs no adapter at the receiving end. Its channel is set on the clock itself, as that
clock's own manual describes.[^f929][^f904]

The two guides disagree about the scoreboard jack. F929 calls the RS-485 inputs on a scoreboard
round 4-pin DIN jacks.[^f929] The mini scoreboard guide, describing the same connection with an
`R-DC4-xx` cable, calls them 5-pin DIN jacks.[^f927]

## Switch settings

Switches are set with the adapter unpowered. Switches 1 and 2 choose the role, as in the table
above. Switches 3, 4 and 5 choose the channel as a three-bit binary number, in which a switch
pushed up counts as 1 and switch 3 is the lowest bit; the channel is that number plus
one.[^f929]

| Channel | Switch 3 | Switch 4 | Switch 5 |
|---|---|---|---|
| 1 | Down | Down | Down |
| 2 | Up | Down | Down |
| 3 | Down | Up | Down |
| 4 | Up | Up | Down |
| 5 | Down | Down | Up |
| 6 | Up | Down | Up |
| 7 | Down | Up | Up |
| 8 | Up | Up | Up |

The transmitting adapter and every receiver must share a channel. Where several timers feed
separate boards at once, such as concurrent water polo games or a meet run in more than one
course, CTS asks for channels spread as widely as possible and never closer than two
apart.[^f929]

A System 6 can also manage the link from its setup menus. Its Wireless menu puts the adapter's
current channel or firmware version up on the scoreboard, and sets the channel of the
transmitting and the receiving unit. A channel set this way takes precedence over the DIP
switches. The 2010 edition of the manual names Sky-Fi units in this menu; the 2024 edition
says only "wireless adapters".[^f870][^f870b]

CTS's 900 MHz [wireless judging](../../diving/wireless-judging.md) system uses the same eight
channels. Its guide offers 31 channels and keeps channels 1–8 for sites that have neither CTS
wireless pace clocks nor WA-1 adapters.[^f941]

## History

This section traces the WA-1 from its first catalogue entry to its replacement.

The earliest dated mention found is CTS's 2008 display catalogue. Its System 6 page lists the
Sky-Fi Wireless Adapter, with matrix boards among the displays it can reach in addition to pace
clocks, shot clocks and LED boards.[^mtc2008] The 2010 System 6 manual has its channel
menu.[^f870] In CTS's 2011 catalogue it is the "Sky-Fi wireless option", a hardware add-on for
the System 6.[^cat2011] The same year the 900 MHz wireless judging guide set aside the WA-1's
channels.[^f941]

The WA-1's user instructions are revision 201401 and its datasheet is revision 03/14.[^f929][^ds14]
In the same month CTS issued the first datasheet for the 2.4 GHz WA-2, and by May 2014 its
website listed both adapters. The WA-1's page there sat under the name 900MHz Wireless
Scoreboard Adapter and showed the Sky-Fi unit beside a System 6.[^cts14][^wa2ds] CTS's 2015 catalogue still
offered either band for the System 6.[^cat2015] The 900 MHz page was still being archived in
August 2017.[^cts17]

CTS's current page for the WA-1 marks it discontinued.[^cts26] The name Sky-Fi does not appear
in the WA-2 or [WA-3](wa-3.md) documents.[^wa2][^f1045] Dealers still listed the WA-1 in
2026.[^poolweb][^jit]

## Compared with the WA-2

The [WA-2](wa-2.md) changed the radio band and the switch scheme:[^ds14][^f929][^wa2]

- the band, 900 MHz on the WA-1 and 2.4 GHz on the WA-2;
- the channels, eight with no network setting on the WA-1, against twelve channels with eight
  PAN IDs each on the WA-2, which uses eight switches instead of five;
- the computer connection, RS-232 through a USB-to-serial adapter on the WA-1, and USB on the
  WA-2;
- the board connection, an RS-485 jack on the WA-1, which the WA-2 does not have;
- size and weight: the WA-1's case is smaller, and at 7.3 oz it weighs a little over half as
  much as the 13.4 oz WA-2.

Both adapters are set up once with their switches and then left alone. F929 and the 2016 WA-2
guide give the same antenna extension cable, `R-015-638`.[^f929][^wa2]

## Specifications

| Item | Value |
|---|---|
| Radio | 900 MHz, spread spectrum[^ds14] |
| Channels | 8 (1–8), set by switches 3–5[^f929] |
| Role | Transmit over RS-232, or receive over RS-485 or RS-232, set by switches 1–2[^f929] |
| Dimensions (W × D × H) | 5.2 × 3.9 × 1.1 in (13.2 × 9.9 × 2.8 cm); 5.75 in (14.6 cm) high with antenna[^ds14] |
| Weight | 7.3 oz (206.9 g)[^ds14] |
| Connections | RS-232 jack; RS-485 DIN jack; antenna connector[^f929] |
| Power | From a CTS display's RS-485 jack, or a separate power supply[^f929] |
| EMC | FCC Part 15 Class A[^f929] |
| Manufacture | Loveland, Colorado[^ds14] |

## Part numbers and accessories

This section lists the adapter's part number, its cables and dealer prices.

- `WA-1`, the adapter. In September 2026 Poolweb listed it as item 1151-WA-1 at $785.91 with an
  extended lead time, and Just In Timing at $515.00.[^poolweb][^jit]
- `R-905-001`, replacement antenna, shared with the wireless pace clocks other than the Slim
  Pace Clock; $30.00 from CTS.[^antenna]
- `R-015-638`, antenna extension cable for outdoor signs, sold separately.[^f929]
- `R-2DC`, data cable from a timer or UPC-C, and to a numeric board without RS-485 jacks.[^f929]
- `R-DC4`, data cable into the RS-485 jack of a CTS display.[^f929]
- `R-0002-0428`, serial cable to a laptop or DisplayLink computer, sold separately.[^f929]
- `015-467`, USB-to-serial adapter for a laptop, sold separately.[^f929]

## See also

- [WA-2](wa-2.md) and [WA-3](wa-3.md): the 2.4 GHz adapters that followed it
- [Wireless pace clocks](../pace-clock/wireless-pace-clock.md): the 900 MHz clocks it transmits to
- [Wireless judging](../../diving/wireless-judging.md): the 900 MHz judging system that shares
  its channels
- [UPC-C](../pace-clock/upc-c.md) and [SynchroMM](../../../software/synchromm.md): data sources
  it can carry
- [Scoreboard control](index.md): the scoreboard-control overview
- [Colorado Time Systems](../../../vendors/colorado-time-systems.md): the manufacturer

## References

[^f929]: [Colorado Time Systems, Sky-Fi Wireless Adapter (WA-1) User Instructions (F929 Rev. 201401)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Misc/Wireless%20Adapters/WA-1_F929.pdf).
[^ds14]: [Colorado Time Systems, Sky-Fi Wireless Adapter datasheet (Rev 03/14)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Datasheets/Sky%20Fi.pdf).
[^cts26]: [Colorado Time Systems, 900MHz Wireless Scoreboard Adapter (WA-1)](https://coloradotime.com/products/900mhz-wireless-scoreboard-adapter-wa-1) (September 2026).
[^cts14]: [Colorado Time Systems, 900MHz Wireless Scoreboard Adapter](https://web.archive.org/web/20140512225630/http://www.coloradotime.com/900mhz-wireless-scoreboard-adapter/) (archived May 2014).
[^cts17]: [Colorado Time Systems, 900MHz Wireless Scoreboard Adapter](https://web.archive.org/web/20170821050115/https://www.coloradotime.com/900mhz-wireless-scoreboard-adapter/) (archived August 2017).
[^wa2]: [Colorado Time Systems, 2.4 GHz Wireless Adapter (WA-2) User Guide (F987 Rev. 201605)](https://web.archive.org/web/20230401201250/https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Misc/Wireless%20Adapters/WA-2_F987.pdf) (archived 2023).
[^wa2ds]: [Colorado Time Systems, 2.4GHz Wireless Scoreboard Adapter datasheet (WA-2, Rev 03/14)](https://web.archive.org/web/20141114093400/http://www.coloradotime.com/pdf/WA_2_Scoreboard_Adapter.pdf).
[^f1045]: [Colorado Time Systems, 2.4 GHz Wireless Adapter (WA-3) User Guide (F1045 Rev. 202007)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Misc/Wireless%20Adapters/WA-3_User-Guide_F1045.pdf).
[^mtc2008]: Colorado Time Systems, Making Time Count: High Impact Visual Display Systems (2008 catalogue), System 6 page.
[^cat2011]: Colorado Time Systems, Complete Timing, Scoring, Training and Display Solutions (2011 edition), System 6 page.
[^cat2015]: Colorado Time Systems, Complete Timing, Scoring, Training and Display Solutions (2015 edition), System 6 page.
[^f870]: Colorado Time Systems, System 6 User Manual (F870 Rev. 20100817), Wireless setup menu.
[^f870b]: Colorado Time Systems, Swimming 6 for the System 6 Sports Timer Software User Guide (F870 Rev. 20241107), wireless adapter menu.
[^f927]: Colorado Time Systems, Mini Scoreboard User Guide (F927), wireless set-up.
[^f941]: Colorado Time Systems, Wireless Judging 900 MHz Frequency User Guide (F941 Rev. 20110720).
[^f904]: Colorado Time Systems, Wireless Pro Pace Clock and Shot Clock User Guide (F904 Rev. 202507).
[^dlphelp]: Colorado Time Systems, Display Link Plus Help, troubleshooting topic.
[^legacyds]: [Colorado Time Systems, Gen7 Legacy Swimming datasheet](https://coloradotime.com/hubfs/PDFs/data%20sheets/Gen7_Legacy_Swimming.pdf) (Rev 05/26), feature comparison.
[^antenna]: [Colorado Time Systems shop, Replacement Antenna for 900 MHz WA-1 (Sky-Fi) Wireless Adapter (R-905-001)](https://shop.coloradotime.com/products/replacement-antenna-for-wa-1-sky-fi-wireless-adapter-r-905-001).
[^poolweb]: [Poolweb, System 6 Wireless Adapter 900 MHz (1151-WA-1)](https://www.poolweb.com/products/system-6-wireless-adapter-900-mhz) (September 2026).
[^jit]: [Just In Timing, Wireless Adapter 900MHz (WA-1)](https://www.justintiming.com/product/wireless-adapter-900mhz/) (September 2026).

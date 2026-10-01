---
title: Colorado Time Systems Pace Clock/Shot Clock
description: >-
  The Colorado Time Systems Pace Clock/Shot Clock is a line of portable 10-inch LED clocks,
  wired or 900 MHz wireless, sold in Standard, Portable and Pro versions for training and
  water polo.
tags:
  - Equipment
  - Timing
  - Swimming
  - Water polo
infoboxTitle: Pace Clock/Shot Clock
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Part number
    value: '`PC-STANDARD`, `PC-PORTABLE`, `PC-PRO-R`, `PCW-STANDARD`, `PCW-PORTABLE`, `PCW-PRO`'
  - label: Type
    value: LED pace clock and water polo shot clock
  - label: Display
    value: Four 10 in LED digits, red or amber
  - label: Connection
    value: Two RS-485 4-pin round jacks; two RS-232 1/4 in phone jacks; 900 MHz radio on `PCW-` models
  - label: Dimensions
    value: 13.5 × 36.25 × 4.75 in (34.3 × 92 × 12.1 cm), H × L × D
  - label: Weight
    value: 19 lb (8.6 kg) Standard; 29 lb (13.2 kg) Portable and Pro
  - label: Power
    value: 110 V AC 60 Hz or 220 V AC 50 Hz; internal battery on Portable and Pro
  - label: Introduced
    value: By 2006
  - label: Status
    value: Current (2026); `PCW-PORTABLE` no longer listed
  - label: Manual
    value: '[F890](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Shot%20Clocks/BasicPaceClock.pdf), [F891](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Shot%20Clocks/ProPaceClock.pdf), [F904](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Training%20Tools/Pace%20Clocks/WirelessProPaceClock.pdf), [F910](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Training%20Tools/Pace%20Clocks/WirelessPortable%26StandardPaceClock.pdf)'
---

<!--
Research notes, CTS Pace Clock/Shot Clock line. Built out in September 2026 from the
"wireless pace clocks" stub (wireless-pace-clock.md, created in the Sky-Fi WA-1 pass). The
user pointed out that the clocks come in many variants and revisions; the wired PC- and
wireless PCW- clocks share one case, datasheet and part-number table, so the page was renamed
and widened to the whole line at the user's choice.

Read in full (sources/vendors/colorado-time-systems/pace-clocks/), with PDF pages rendered for
tables the extraction scrambles:
  - F904 Wireless Pro, two editions: Rev. 1106 (copyright 2006; the held PDF was regenerated
    27 September 2013) and Rev. 202507 (copyright 2025). A sentence-level diff shows the 2025
    edition mostly reflowed and re-paginated. Real changes: a Wall Mount section (29 lb load,
    keyhole slots 25.00 in apart and 2.50 in below the top, sized for a #8 screw); a
    Specifications page (3.0 A at 115 V 60 Hz, 1.5 A at 230 V 50 Hz; UL 863; CSA C22.2 No.
    207; FCC ID Q7V-3F090003X, and for Brazil FCC ID OJMTRM900TTA with Anatel 3069-12-8396);
    and an FCC text that still says Class A but swaps in the residential-installation wording
    of the Class B notice. The 2006 edition prints the commercial Class A wording and no FCC
    ID.
  - F891 Pro (wired), Rev. 202008: same text as F904 minus the channel step and wireless
    series section. Has an appendix the wireless guide lacks, a mode map for firmware before
    2.0: game clock 2, shot 4, timeout 6, lane times 2-11, follower 2; team scores, event/heat,
    diving, synchro and time of day not available. Fifteen intensity levels on the wired Pro
    too, though every datasheet credits fifteen levels to the PCW-PRO only (the 2008
    catalogue to the PC-Pro-R as well).
  - F910 Wireless Portable and Standard, Rev. 202008 (cover reads Rev. 0820). Dial with
    Water Polo, Pace Clock Lead and Pace Clock Follow positions; intensity HI in Water Polo and
    Lead, LO in Follow; channel 4 in Water Polo and Lead, 2 in Follow, though the same page
    says the dial changes the channel while CH shows and that lead and followers must share a
    channel. Flagged in the body. Battery called optional; Standard upgradable to Portable by
    CTS. Under a timer the basic clocks show only the minutes and seconds of scoreboard
    channel 01. Water polo: shot time from channel 02 on module 03; game time from channel 01
    on module 01, on an extra clock set to Follow. A board can join the chain or be split off
    at the timer.
  - F890 Basic (wired), Rev. 202008: F910 without the radio.
  - F917 (202110) wireless upgrade kit K-PCW-1: radio board R-0066-5210 plugs into an 8-pin
    header on the LED driver board R-0066-5072; 18 in coax R-015-638; antenna R-905-001; water
    shield R-085-039; FCC label R-012-467. After the upgrade the clock shows intensity, then
    channel, then firmware at power-up.
  - Datasheets: "Pace Clocks/Shot Clocks", Revised 08/12 (PDF created 2 August 2012), part
    list with PC-FMK flush mount and no prices; a second copy of the 08/12 sheet with -F (220 V)
    numbers and prices and no PC-FMK (PDF regenerated 2026, prices undated): PC-Standard
    $850, PC-Portable $940, PC-Pro-R $1,045, PCW-Standard $1,070, PCW-Pro $1,248; ETL mark on
    both. "Pace Clocks / Shot Clocks", Rev 07/25: feature grid (battery, horn, wireless), no
    PCW-PORTABLE, no -F numbers, no PC-FMK. All three give 13.5 x 36.25 x 4.75 in, 19/29/29 lb,
    8 channels PCW-PRO and 2 PCW-STANDARD, battery over 6 hours.
  - CTS Pace/Shot Clock Guide, an Excel-made PDF dated 11 February 2021 (downloaded from the
    CTS site, not filed in sources/): PCW-STANDARD 19 lb, wall mounted; PC-PORTABLE, PC-PRO-R
    and PCW-PRO 29 lb, pool deck; all "10 in red or amber"; compatibility SYS5/6 with Pace
    Clock or Water Polo software.

Catalogues: 2008 Making Time Count (Pace Clocks/Shot Clocks page) lists PC-Standard,
PC-Portable, PC-Pro-R, PCW-Standard, PCW-Portable, PCW-Pro, TR-3, PC-WMK, PC-FMK and UPC-C;
red or amber standard, custom colour at extra cost; says every version can be had wireless.
2011 and 2015 catalogues pair each wired number with a wireless one, PCW-Portable included,
and repeat the "all versions" claim.

Case studies: UNC Koury Natatorium (summary PDF March 2012; the upgrade decided in 2006):
six blue LED wireless pace clocks. Notre Dame Rolfs Aquatic Center (August 2012): wireless
pace clocks. The blue digits are the only evidence of a colour beyond red, amber and the
2008 catalogue's custom option.

Radio: Linx Technologies Wi.232DTS module (FCC grantee Q7V, application filed December 2005
per fccid.io summaries; fccid.io returned 403 directly). Shares channels 1-8 with the WA-1
(F941) and the R-905-001 antenna (CTS shop).

Web, September 2026: CTS product pages "Pace Clocks for Training" and "Pace Clocks/Shot
Clocks for Water Polo" list PC-Standard, PC-Portable, PC-Pro-R, PCW-Standard, PCW-Pro, TR-3,
PC-WMK, UPC-C, link F890, F891, F904, F910. CTS shop: PCW-STANDARD $1,675.00, sold out.
Poolweb: 1151-PCW-PRO, $2,186.50, extended lead time, amber or red, 220 V factory option; it
gives the weight as about 70 lb, probably a shipping weight, not used. Search snippets showed
other PCW-PRO dealer prices from $2,050 to $2,337.66 (SwimZone, Kiefer, RecSupply MMPCPROWL);
not read, not cited. Wayback Machine offline during this pass.

Not used: the older SC-I/2/4/5 (F410) and SCS (F732) shot clocks, a separate product family.

Still open: first year of sale (before 2006?); firmware 2.0 date; when the PCW-PORTABLE was
dropped (after the 2015 catalogue, before the 07/25 sheet; the 08/12 sheets already omit it);
digit colour options on the current wireless models; PC-FMK details; the "about 70 lb" figure.
-->

The Colorado Time Systems (CTS) Pace Clock/Shot Clock is a line of portable LED clocks with
four 10 in digits, sold for swim training and as water polo shot clocks. It comes in three
versions, Standard, Portable and Pro, each made wired (`PC-` part numbers) or with a 900 MHz
radio (`PCW-`).[^ds25][^mtc2008] The Pro adds fifteen training modes driven by touchpads,
start systems and relay platforms, and shows data from a CTS timing console in several
sports.[^f904] CTS's guide to the wireless Pro dates back to 2006, and the line is still on
sale in 2026.[^f904a][^ctstrain]

## Models

This section sets out the variants and how they differ.

All six models share one case, 13.5 in high, 36.25 in long and 4.75 in deep, with a handle
and legs.[^ds25] The Standard runs from mains power only. The Portable adds an internal
battery and horn, which make it usable as a shot clock. The Pro has the battery and horn as
well, plus its training modes and a finer intensity control.[^ds25][^f910][^f891]

| Part number | Version | Radio | Battery and horn | Front-panel control | Training modes | Intensity levels | Weight |
|---|---|---|---|---|---|---|---|
| `PC-STANDARD` | Standard | None | No | Dial | None | 2 | 19 lb (8.6 kg) |
| `PC-PORTABLE` | Portable | None | Yes | Dial | None | 2 | 29 lb (13.2 kg) |
| `PC-PRO-R` | Pro | None | Yes | 16-position switch | 15 | 15 | 29 lb (13.2 kg) |
| `PCW-STANDARD` | Standard | 900 MHz, 2 channels | No | Dial | None | 2 | 19 lb (8.6 kg) |
| `PCW-PORTABLE` | Portable | 900 MHz | Yes | Dial | None | 2 | Not given |
| `PCW-PRO` | Pro | 900 MHz, 8 channels | Yes | 16-position switch | 15 | 15 | 29 lb (13.2 kg) |

The table draws on several documents, which do not fully agree:[^ds25][^ds12][^guide21][^f891][^mtc2008]

- The `PCW-PORTABLE` is in CTS's 2008, 2011 and 2015 catalogues but not in either revision of
  the datasheet or on CTS's current product pages. The F910 guide still covers a wireless
  Portable.[^mtc2008][^cat2011][^cat2015][^ds12][^ds25][^f910]
- The datasheets credit fifteen intensity levels to the `PCW-PRO` alone. The wired Pro's own
  guide gives it the same fifteen levels, as does the 2008 catalogue.[^ds25][^f891][^mtc2008]
- The F910 and F890 guides call the battery an option on the basic clocks and say CTS can
  convert a Standard into a Portable.[^f910][^f890]

CTS lists the digits as red or amber.[^ds25][^guide21] Its 2008 catalogue also offered a
custom colour at extra cost, and the University of North Carolina installed six wireless clocks
with blue digits in the late 2000s.[^mtc2008][^unc] Versions for 220 V carry an `-F` suffix in
one copy of the 2012 datasheet; CTS's later documents instead describe 220 V as a factory
change to the power supply, marked on the unit.[^ds12p][^f904]

## Design and hardware

The digits show minutes and seconds, or two two-digit figures such as event and heat. The
connections sit on the right end panel: two round 4-pin RS-485 jacks above two 1/4 in phone
jacks for RS-232, beside the power inlet. Any one of them links the clock to a timer or
controller, and the clock passes data on to further clocks over the same kind of
cable.[^f904][^f910] The Pro carries extra inputs on its front panel for training: two touchpad
jacks wired in parallel, a start system input, a relay platform input and a reset or breakout
input. A pushbutton can stand in on any of them, at the cost of precision.[^f904]

The battery runs a clock for at least six hours and recharges whenever it is plugged in.[^f904]
The horn sounds under the control of a CTS timer.[^f904] For wall mounting, the back has two
keyhole slots 25 in apart, sized for a #8 screw, and CTS sells a wall mount kit and a tripod
kit.[^f904][^ds25] The electrical rating is 3.0 A at 115 V and 60 Hz, or 1.5 A at 230 V and
50 Hz, with listing to UL 863 and CSA C22.2 No. 207.[^f904]

## Controls

The basic clocks and the Pro use different controls.

On the Standard and Portable, a dial on the front has three positions: Water Polo, Pace Clock
Lead and Pace Clock Follow. At power-up the clock steps through its brightness, then (if
wireless) its channel, then its firmware version and mode, each step lasting four seconds, and
saves the settings when it is switched off. Brightness is fixed by the dial position, high in
Water Polo and Lead and low in Follow.[^f910][^f890]

The Pro replaces the dial with a 16-position mode switch and a Scoreboard/Training switch. The
mode switch first sets one of fifteen brightness levels, then the channel on the wireless
model, then the mode.[^f904][^f891] In Training the clock runs the selected training mode and
can lead other clocks. In Scoreboard it shows data from a timer, controller or lead clock,
with the mode switch choosing which item.[^f904]

## Pace clock operation

Any model can run on its own, counting up in minutes and seconds and rolling over after
59:59.[^f904][^f910] For a row of clocks, one is set as the lead (Pace Clock Lead on the
basic clocks, Training and mode 2 on the Pro) and the rest as followers (Pace Clock Follow, or
Scoreboard and mode 1). Wired clocks are chained through their RS-485 jacks. Wireless clocks
are set to a common channel and fall into step within five seconds.[^f904][^f910]

The F910 guide is inconsistent on the wireless Standard and Portable. It fixes the channel at
4 for the Water Polo and Lead positions and at 2 for Follow, which would put a lead clock and
its followers on different channels; on the same page it says the dial selects the channel
and that all the clocks must share one.[^f910] The datasheets give the `PCW-STANDARD` two
channels.[^ds25]

Any of the clocks can be driven by a [UPC-C](upc-c.md) pace clock controller, or by a CTS
timer loaded with its pace clock program.[^f904][^f910] Under such a source the Standard and Portable show only
the minutes and seconds sent on scoreboard channel 01, the same on every clock. The Pro can
instead show the time for one of ten lanes, selected by its mode switch.[^f910][^f904]

## Water polo and scoreboard modes

For shot clock use, a Portable or Pro is set to Water Polo (or Scoreboard) and cabled to a CTS
timer loaded with its water polo program. The timer starts and stops the clocks and sounds their
horns.[^f910][^f904] CTS's catalogues say a shot clock needs a link to the timer,
but CTS's wireless adapter guide treats its pace clocks and shot clocks as wireless
receivers.[^mtc2008][^f929] A scoreboard can join the same cable chain or be fed by a splitter
at the timer.[^f910]

A basic clock shows only the shot time, or the game time on an extra clock set to
Follow.[^f910] The Pro's mode switch chooses among more items, and clocks in one chain can
each show something different:[^f904]

| Mode | Sport | Display |
|---|---|---|
| 1 | Water polo | Game clock |
| 3 | Water polo | Shot clock |
| 5 | Water polo | Time-out clock |
| 12 | Water polo | Team scores, dark team on the left by default |
| 1–10 | Swimming, training | Lane time for that lane |
| 11 | Swimming | Event and heat |
| 13 | Diving | Dive number and position |
| 14 | Diving | Round and diver |
| 15 | Artistic swimming | Award, to hundredths |
| 16 | All | Time of day |

The timer has to send each item on its default scoreboard channel and module; the shot time,
for instance, goes on channel 02 at module 03.[^f904] Either a
[System 5](../../swimming/timers/system-5.md) or a
[System 6](../../swimming/timers/system-6.md) can supply the data.[^ds25] Clocks before firmware 2.0 used a
different map, with the game clock on 2, the shot clock on 4, the time-out clock on 6, lane
times on 2–11 and followers on 2, and none of the other items.[^f891]

## Training modes

The Pro's fifteen training modes take their inputs from the front-panel jacks, so most need
other CTS equipment: [touchpads](../../swimming/touchpad/index.md), a
[start system](../../swimming/starter/index.md) or a
[relay judging platform](../../swimming/relay-judging/cts.md).[^f904][^ds25]

| Mode | Function | Inputs |
|---|---|---|
| 1 | Lap counter | Touchpad |
| 2 | Pace clock | None |
| 3 | Pace clock with cumulative splits | Touchpad |
| 4 | Pace clock with lap splits | Touchpad |
| 5 | Relay exchange | Touchpad and relay platform |
| 6 | Start reaction | Start, then touchpad (backstroke) or relay platform |
| 7 | Turn speed | Touchpad |
| 8 | Breakout time | Start and breakout input |
| 9 | Start reaction and breakout | Start, touchpad or platform, and breakout input |
| 10–14 | Single-lane timer for 1, 2, 3, 4 or any number of laps | Start and touchpad |
| 15 | Mid-race timer | Touchpad at one or both ends |
| 16 | Test | As directed by CTS |

Times show to the hundredth. A relay exchange shows as a positive figure when the incoming
swimmer touched first and as a negative one when the takeoff came first, and an expected
input that never arrives produces Err.[^f904] With a second touchpad on an extension cable,
the single-lane and mid-race modes can time lengths rather than laps.[^f904]

## Wireless operation

The `PCW-` clocks use a 900 MHz Linx Technologies Wi.232DTS radio module, FCC ID
`Q7V-3F090003X`. Units for Brazil carry a different module, FCC ID `OJMTRM900TTA`.[^f904][^f910][^f941]
CTS gives eight channels for the `PCW-PRO` and two for the `PCW-STANDARD`.[^ds25]

A CTS timer reaches the clocks through a [Sky-Fi WA-1](../scoreboard-control/wa-1.md)
adapter, whose eight channels the clocks share, and they receive its data directly with no
second adapter.[^f929][^f904] The same channels are used by CTS's
[900 MHz wireless judging](../../diving/wireless-judging.md) system, whose guide keeps
channels 1–8 for sites without these clocks or WA-1 adapters.[^f941] The clocks use the same
replacement antenna as the WA-1.[^antenna]

A wired clock can be converted. CTS's upgrade kit `K-PCW-1` adds a radio board that plugs
into the clock's display driver board, with an antenna, an 18 in coaxial cable, a water
shield and an FCC label. A converted clock shows its channel at power-up.[^f917]

## History and revisions

This section dates the line and the changes between its documents.

The earliest edition of the wireless Pro guide F904 found is revision 1106, copyright
2006.[^f904a] The
University of North Carolina chose wireless clocks in an upgrade it decided on in
2006.[^unc] CTS's 2008 display catalogue lists all six models with the tripod, wall mount and
flush mount kits, and says every version can be had with the radio.[^mtc2008] The 2011 and
2015 catalogues repeat the six models.[^cat2011][^cat2015]

The datasheet revised in August 2012 drops the `PCW-PORTABLE`.[^ds12] A second copy of that
sheet adds the `-F` numbers for 220 V and a price for each model, from $850 for the
`PC-STANDARD` to $1,248 for the `PCW-PRO`, and leaves out the flush mount kit.[^ds12p] The
revision of July 2025 sets the five remaining models in a grid by battery, horn and radio, and
omits the `-F` numbers and the flush mount kit.[^ds25]

The 2025 edition of F904 keeps the 2006 text nearly unchanged but reflows it. It adds the
wall-mounting details, an electrical specification and the FCC ID; the 2006 edition gives no
FCC ID.[^f904][^f904a] The wired guides F890 and F891 and the wireless F910 are revisions of
August 2020.[^f890][^f891][^f910] Only F891 notes the firmware change at 2.0 that moved the
scoreboard modes.[^f891]

## Specifications

| Item | Value |
|---|---|
| Display | Four 10 in LED digits, red or amber[^ds25] |
| Dimensions (H × L × D) | 13.5 × 36.25 × 4.75 in (34.3 × 92 × 12.1 cm)[^ds25] |
| Weight | 19 lb (8.6 kg) Standard; 29 lb (13.2 kg) Portable and Pro[^ds25] |
| Power | 110 V AC 60 Hz, 3.0 A; or 220–230 V AC 50 Hz, 1.5 A[^ds25][^f904] |
| Battery | Portable and Pro; over 6 hours, recharged overnight[^ds25] |
| Data | RS-485 (two 4-pin round jacks) and RS-232 (two 1/4 in phone jacks)[^f904] |
| Radio (`PCW-`) | 900 MHz; 8 channels (Pro), 2 channels (Standard)[^ds25] |
| Training inputs (Pro) | Touchpad (two), start system, relay platform, reset/breakout[^f904] |
| Safety | UL 863; CSA C22.2 No. 207[^f904] |
| Manufacture | Loveland, Colorado[^ds25] |

## Part numbers and accessories

This section lists the part numbers and dated prices.

- `PC-STANDARD`, `PC-PORTABLE`, `PC-PRO-R`, `PCW-STANDARD`, `PCW-PRO`: the current models;
  `PCW-PORTABLE` in catalogues to 2015.[^ds25][^cat2015]
- `-F` suffix: 220 V versions, in one copy of the 2012 datasheet.[^ds12p]
- `TR-3`, tripod kit; `PC-WMK`, wall mount kit; `PC-FMK`, flush mount option (2008 and 2012
  only).[^ds25][^ds12][^mtc2008]
- `K-PCW-1`, wireless upgrade kit for a wired clock.[^f917]
- `R-905-001`, replacement antenna for the wireless clocks; $30.00 from CTS in
  2026.[^antenna]
- [UPC-C](upc-c.md), pace clock controller, listed as an accessory.[^ctstrain]

Prices in an undated copy of the 2012 datasheet were $850 (`PC-STANDARD`), $940
(`PC-PORTABLE`), $1,045 (`PC-PRO-R`), $1,070 (`PCW-STANDARD`) and $1,248
(`PCW-PRO`).[^ds12p] In September 2026 CTS's shop listed the `PCW-STANDARD` at $1,675.00, sold
out, and Poolweb the `PCW-PRO` at $2,186.50 with an extended lead time.[^shop][^poolweb]

## See also

- [Pace clocks](index.md): the overview, with the shared background on pace clocks
- [UPC-C](upc-c.md): the pace clock controller that drives the clocks
- [Sky-Fi WA-1](../scoreboard-control/wa-1.md): the 900 MHz adapter that feeds the wireless
  clocks
- [Deck clock](deck-clock.md) and [Slim pace clock](slim-pace-clock.md): CTS's 2.4 GHz clocks
- [Ultimate Pace Clock](ultimate-pace-clock.md): CTS's earlier pace clock system
- [Water polo equipment](../../water-polo/index.md): the shot clock role
- [Colorado Time Systems](../../../vendors/colorado-time-systems.md): the manufacturer

## References

[^f904]: [Colorado Time Systems, Wireless Pro Pace Clock and Shot Clock User Guide (F904 Rev. 202507)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Training%20Tools/Pace%20Clocks/WirelessProPaceClock.pdf).
[^f904a]: Colorado Time Systems, Wireless Pro Pace Clock and Shot Clock User Guide (F904 Rev. 1106, ©2006).
[^f891]: [Colorado Time Systems, Pro Pace Clock and Shot Clock User Guide (F891 Rev. 202008)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Shot%20Clocks/ProPaceClock.pdf), appendix.
[^f890]: [Colorado Time Systems, Basic Pace Clock and Shot Clock User Guide (F890 Rev. 202008)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Shot%20Clocks/BasicPaceClock.pdf).
[^f910]: [Colorado Time Systems, Wireless Portable and Standard Pace Clock and Shot Clock User Guide (F910 Rev. 202008)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Training%20Tools/Pace%20Clocks/WirelessPortable%26StandardPaceClock.pdf).
[^f917]: Colorado Time Systems, User Instructions: Upgrade Pace Clock to Wireless Operation (F917, 202110).
[^ds25]: [Colorado Time Systems, Pace Clocks / Shot Clocks datasheet (Rev 07/25)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Datasheets/Pace%20Clocks.pdf).
[^ds12]: Colorado Time Systems, Pace Clocks/Shot Clocks datasheet (Revised 08/12).
[^ds12p]: Colorado Time Systems, Pace Clocks/Shot Clocks datasheet (Revised 08/12), copy with 220 V part numbers and prices.
[^guide21]: [Colorado Time Systems, Pace/Shot Clock Guide](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Datasheets/Pace%20Shot%20Clock%20Guide.pdf) (February 2021).
[^mtc2008]: Colorado Time Systems, Making Time Count: High Impact Visual Display Systems (2008 catalogue), Pace Clocks/Shot Clocks page.
[^cat2011]: Colorado Time Systems, Complete Timing, Scoring, Training and Display Solutions (2011 edition), pace clock options.
[^cat2015]: Colorado Time Systems, Complete Timing, Scoring, Training and Display Solutions (2015 edition), pace clock options.
[^unc]: Colorado Time Systems, Project Summary: University of North Carolina, Koury Natatorium (2012).
[^ctstrain]: [Colorado Time Systems, Pace Clocks for Training](https://coloradotime.com/products/pace-clocks-for-training) (September 2026).
[^f929]: [Colorado Time Systems, Sky-Fi Wireless Adapter (WA-1) User Instructions (F929 Rev. 201401)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Misc/Wireless%20Adapters/WA-1_F929.pdf).
[^f941]: Colorado Time Systems, Wireless Judging 900 MHz Frequency User Guide (F941 Rev. 20110720).
[^antenna]: [Colorado Time Systems shop, Replacement Antenna for 900 MHz WA-1 (Sky-Fi) Wireless Adapter (R-905-001)](https://shop.coloradotime.com/products/replacement-antenna-for-wa-1-sky-fi-wireless-adapter-r-905-001).
[^shop]: [Colorado Time Systems shop, Standard Wireless Pace Clock (PCW-STANDARD)](https://shop.coloradotime.com/products/standard-wireless-pace-clock-pcw-standard) (September 2026).
[^poolweb]: [Poolweb, Pro Digital Wireless Pace/Shot Clock With Horn and Battery (1151-PCW-PRO)](https://www.poolweb.com/products/pro-digital-wireless-pace-clock-with-horn-and-battery) (September 2026).

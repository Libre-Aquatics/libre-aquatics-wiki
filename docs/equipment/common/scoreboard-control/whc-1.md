---
title: Colorado Time Systems WHC-1
description: >-
  The WHC-1 is the Colorado Time Systems wireless handheld controller that runs the score,
  period and clock on a multisport scoreboard, deck clock or pace clock.
tags:
  - Equipment
  - Scoring
  - Timing
infoboxTitle: WHC-1
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Part number
    value: '`WHC-1` (`WHC-1.S`, refurbished)'
  - label: Type
    value: Wireless handheld scoreboard controller
  - label: Connection
    value: 2.4 GHz radio, channel 0–11, PAN 0–15, module 1–6
  - label: Dimensions
    value: 1.4 × 3.0 × 4.6 in (3.6 × 7.6 × 11.7 cm)
  - label: Weight
    value: 0.43 lb (0.2 kg)
  - label: Power
    value: Two AA batteries, about 8 hours
  - label: Introduced
    value: By 2013
  - label: Status
    value: Current
  - label: Manual
    value: '[Wireless Handheld All Scoreboards Controller User Guide (F970 Rev. 202103)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Multisport%20Electronic%20Scoreboards/Multisport%20Controllers/WHC_All_Scoreboards_User_Guide_F970.pdf)'
---

<!--
Research notes, WHC-1. Built out from a stub in September 2026.

Held and read in full: F970 Rev. 202103 ((c)2021, 12 pages), in
sources/vendors/colorado-time-systems/scoreboards-displays/, and its PDF for the key layout
(cover photo and page 4). Also the WHC passages in F985 (deck clock), F972 (slim pace clock),
F1050 (WHC-2), F1045 and the WA-3 datasheet, F1004 (Otter), the baseball scoreboard datasheet
(rev. 10/13), the deck clock datasheets of 05/18 and 07/23, the 2015 catalogue, and the
"Wireless Scoreboard Controllers" datasheet (Rev 05/19, cts-wireless-scoreboard-controllers-datasheet.txt),
which is the best single source for the physical specification.

Read from the web (text saved under sources/reference/cts-web/):
  - F970 Rev. 201410 ((c)2014), the first edition, archived at coloradotime.com/manuals in
    February 2016; and F971 Rev. 201410, the Wireless Handheld Baseball Controller User Guide,
    archived April 2016. F971 is not held locally.
  - CTS shop pages archived November 2013: WHC-1 at $250 with a sport option of generic or
    baseball; WTTC-1 at $600. Product photos on the old CTS site sit in a 2013/04 uploads
    folder, which suggests the handheld was listed by April 2013 (inferred from the path).
  - CTS product page archived August 2020, and the current page; CTS shop refurbished
    WHC-1.S; Poolweb.

Key layout, from the F970 cover photo and page 4: twelve round keys in three columns under
the LCD. Top row blue (home score), purple (horn), yellow (guest score); then green (clock
run/stop), up arrow, red (shot clock reset); left arrow, grey enter, right arrow; orange
minus, down arrow, orange plus. Power on is a one-second hold of minus; power off a
five-second hold with MENU highlighted, or OFF in the menu. The page-4 icons for the minus
key show the plus graphic; a layout slip in the manual.

Edition comparison, 2014 against 2021:
  - 2014 names only the XBee-PRO radio (FCC ID OUR-XBEEPRO, IC 4214A-XBEEPRO). 2021 adds the
    XBee 3 (MCQ-XBEE3, IC 1846A-XBEE3) and an IC for the PRO written 4214-XBEEPRO without the
    A. The 2021 connection screen adds a T-Level field for the radio version, the RSSI
    readout, and a signal-loss troubleshooting table, none of which are in 2014.
  - The European declaration is dated 17 January 2013 in both editions. In 2014 it cites
    2006/95/EC, 2004/108/EC and 2002/96/EC, which fits a 2013 date. In 2021 the directive list
    is updated to 2014/35/EU, 2014/30/EU and 2012/19/EU but the date is not, which is the
    anachronism the stub had noticed. Both name model WHC-X.
  - The rest (keys, menu, sports behaviour) is unchanged apart from punctuation and paging.

Discrepancies, flagged in the body:
  - Depth 4.5 in (Rev 05/19 datasheet, W x H x D 3 x 1.4 x 4.5 in) against 4.6 in on the CTS
    product page (2020 and current) and the CTS shop (H x W x D 1.4 x 3.0 x 4.6 in). Both
    give 11.7 cm, which is 4.6 in, so the datasheet's 4.5 is the likelier slip. The infobox
    uses the product page.
  - Networks per channel: the WA-3 datasheet says 8, the 2015 catalogue 16 (192 games at a
    facility), F970 PAN 0-15 (16 values). This is covered on whc-2.md and not repeated.

Compatibility: the 2013 shop page, the 2019 datasheet and the 2020 and current CTS pages
recommend the handheld for BB-1101, CM-1400, CM-1401 and CM-1402; the tabletop for FB-1200,
FB-1201, BK-1300, BK-1301 and BB-1100. The body does not list the model numbers because none
has a page here, and the football, basketball and baseball boards are out of scope. The CM
series are CTS multisport portable boards; see multisport-portable-scoreboard.md, whose own
comment says no model number was held when it was written. Worth reconciling there.

"Dots": the CTS product page says adding the tabletop controller lets an operator control the
dots on a scoreboard. Not defined; probably indicator dots such as possession or bonus.
Recorded as the vendor's wording and not interpreted in the body.

Baseball firmware (F971, 2014): same case and keys, remapped. Green and red become home and
guest (score, or pitch count when those are shown); blue, purple and yellow step balls,
strikes and outs; inning 1-9; hit and error indicators toggled from the arrows. The baseball
datasheet (10/13) adds that the handheld can sound two preset horn tones, where the tabletop
offers eight tones at four volumes.

Prices: $250 (CTS shop, November 2013); $642.07 (Poolweb, September 2026); refurbished
WHC-1.S $395.00, down from $525.00, sold out (CTS shop, September 2026).

Still to research: whether the generic and baseball versions are separate part numbers;
the firmware versions; whether the handheld can address more than six modules.
-->

The WHC-1 is a wireless handheld controller made by
[Colorado Time Systems](../../../vendors/colorado-time-systems.md) (CTS) for its multisport
scoreboards. It runs a board's home and guest scores, period and game clock over the air, and a
shot clock and timeout indicators where the board has them, with no timing console in the
loop.[^f970] CTS describes it as a palm-sized unit for an operator who needs to move
around.[^shop13]

## Role in the scoreboard system

This section covers what the handheld drives and where it sits beside the tabletop controller.

Like the [WTTC-1](wttc-1.md) tabletop controller, the handheld holds the game itself and sends
it by radio to every display set to its channel, personal area network (PAN) ID and module
address. It needs no [WA-3](wa-3.md) adapter at its own end.[^f1045][^wa3ds] The
[deck clock](../pace-clock/deck-clock.md) shows its game and shot times, and the
[slim pace clock](../pace-clock/slim-pace-clock.md) shows its game time.[^f985][^f972] On the
[Otter](../scoreboard/otter.md) boards it can also reset the clock of the leader board, which
carries every follower with it, and change a board's channel and PAN.[^f1004]

CTS pairs each of its wireless scoreboards with one of the two controllers. The handheld is the
recommended controller for the smaller boards, including the multisport portable scoreboards,
and the tabletop for the larger football, basketball and baseball boards, with either model
available as an addition.[^ds19][^shop13] CTS's product page adds that the tabletop lets an
operator control the scoreboard's dots, a term it does not define.[^ctswhc]

To reach a video board, the handheld's data goes through a WA-3 at the
[DisplayLink Plus](../../../software/displaylink-plus.md) computer, set to the controller's
channel and PAN with its switch 8 up.[^f1045]

## Design and controls

The controller measures 1.4 × 3.0 × 4.6 in (3.6 × 7.6 × 11.7 cm) and weighs 0.43 lb
(0.2 kg).[^ctswhc] CTS's 2019 datasheet gives the depth as 4.5 in, but both documents give it as
11.7 cm, which matches 4.6 in.[^ds19][^ctswhc] It runs on two AA cells, alkaline or rechargeable,
for about eight hours a pair; CTS recommends rechargeables.[^ds19][^f970] CTS describes the keys
as having tactile dome feedback and the LCD as transflective, readable in darkness or in direct
sun, with an operating distance of up to 1,000 ft.[^ds19]

The screen shows the menu, the game time, both scores and the period. Below it sit twelve round
keys in three columns, coloured by job:[^f970]

| Key | Function |
|---|---|
| Blue | Add a point for the home team; hold for one second to take one away |
| Yellow | Add a point for the guest team; hold to take one away |
| Purple | Sound the horn for two seconds |
| Green | Start or stop the game clock |
| Red | Reset the shot clock |
| Grey arrows and enter | Move around the screen and select |
| Orange minus and plus | Change the highlighted value; a one-second hold of minus switches the unit on |

The arrow keys and the plus and minus pair can also change any score, the period (1 to 9) or
the timeouts remaining for either team.[^f970]

## Operation

The game clock can count up from zero to its default time or down from the default to zero.
The game horn sounds when the clock expires. If the board has a shot clock and it is switched on,
the shot clock runs with the game clock, and its own horn sounds when it reaches zero.[^f970]
Time and scores can be edited digit by digit, but only with the clock stopped, since the menu
will not open while it runs.[^f970]

The menu holds these items:[^f970]

- Reset time and reset game. Reset game returns scores to zero, the period to one and every
  clock to its default.
- Default time: the game length, the count direction, the shot clock on or off with its default
  length, and the timeout display on or off.
- Connection: the channel, PAN and module settings described below.
- More: the time of day on the board, in 12-hour or 24-hour form; horn volume on four levels;
  and the backlight, which can be off, always on at low level, or on for 3–15 seconds at low or
  high level.
- Off.

When the controller is off and the board is on, the board shows the time of day.[^f970]

### Baseball version

CTS offered the handheld in two versions, a generic one and a baseball one, as a choice on its
2013 web shop.[^shop13] The baseball version has its own guide, F971. It uses the same keys for
the inning, balls, strikes, outs, hit and error indicators, a pitch count and a clock.[^f971] CTS's
baseball scoreboard datasheet notes that the handheld can sound two preset horn tones, where the
tabletop controller offers a choice of eight.[^bbds]

## Wireless setup

The Connection screen sets the PAN ID (0–15), the channel (0–11) and the module address (1–6).
All three must match the board, which shows its own settings as C, P and A when it powers up. A
mismatch means the board receives nothing.[^f970]

Opening the Connection screen also turns on a signal-strength readout on the board. It is a
hexadecimal number between 24 and 64, where lower means a stronger signal. The 2021 guide adds a
troubleshooting table for a missing or high readout, which suggests checking power, settings and
distance, moving to a channel at either end of the band, checking the board's antenna, and
turning either device.[^f970] The same screen shows the firmware version and the version of the
radio fitted, and can put the controller into a mode for updating its firmware over the air,
which CTS reserves for its technicians.[^f970]

The radio is a certified XBee module. The first edition of the guide, from 2014, names only
the XBee-PRO; the 2021 edition names the XBee-PRO or the XBee 3.[^f970a][^f970] The
[handheld segment timer](../pace-clock/whc-2.md), the WA-3 and the slim pace clocks carry the
same modules.[^f1050][^f1045][^f972] The European declaration for both handhelds covers model
`WHC-X`, which marks the two as one platform with different software.[^f970][^f1050]

The declaration in both editions of F970 is dated 17 January 2013. In the 2014 edition it cites
the European directives in force in 2013. The 2021 edition cites their replacements, issued in
2012 and 2014, but keeps the 2013 date, so the list of directives was updated without the
declaration being re-dated.[^f970a][^f970]

## Compared with the WTTC-1

The two controllers reach the same boards without an adapter and share an operating distance of
up to 1,000 ft.[^f1045][^ds19] The handheld is the smaller and simpler of the two. It has one
fixed key layout and runs on AA cells. The [WTTC-1](wttc-1.md) has sport-specific keyboard
inserts, player statistics, water polo exclusions, inputs for
[run-stop-reset units](rsr.md), a USB link, wired scoreboard ports and a real-time clock of its
own.[^f970][^ds19] CTS's 2013 prices were $250 for the handheld and $600 for the tabletop.[^shop13][^shop13t]

## Specifications

| Item | Value |
|---|---|
| Dimensions (H × W × D) | 1.4 × 3.0 × 4.6 in (3.6 × 7.6 × 11.7 cm); 4.5 in deep in the 2019 datasheet[^ctswhc][^ds19] |
| Weight | 0.43 lb (0.2 kg)[^ds19][^ctswhc] |
| Power | Two AA batteries, alkaline or rechargeable; about 8 hours[^ds19][^f970] |
| Radio | 2.4 GHz; XBee-PRO or XBee 3 module[^f970] |
| Channel, PAN, module | 0–11, 0–15, 1–6[^f970] |
| Operating distance | Up to 1,000 ft[^ds19] |
| Period display | 1–9[^f970] |
| Horn volume | Four levels[^f970] |
| Compliance | FCC, CE, RoHS[^ds19] |

## Part numbers and accessories

This section lists the handheld's part numbers and prices.

- `WHC-1`, the controller, $250 on CTS's web shop in November 2013, offered in generic and
  baseball versions.[^shop13] Poolweb listed it at $642.07 in September 2026.[^poolweb]
- `WHC-1.S`, a refurbished unit, $395.00, down from $525.00, sold out on the CTS shop in
  September 2026.[^ctsshop]
- `WHC-X`, the model number on the European declaration, covering this controller and the
  [WHC-2](../pace-clock/whc-2.md).[^f970]

## See also

- [WTTC-1](wttc-1.md): the tabletop controller for the same boards
- [Handheld segment timer](../pace-clock/whc-2.md): the WHC-2, built on the same platform for
  training sets
- [WA-3](wa-3.md): the adapter that carries its data to a video board computer
- [Scoreboard control](index.md): the scoreboard-control overview
- [Colorado Time Systems](../../../vendors/colorado-time-systems.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^f970]: [Colorado Time Systems, Wireless Handheld All Scoreboards Controller User Guide (F970 Rev. 202103)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Multisport%20Electronic%20Scoreboards/Multisport%20Controllers/WHC_All_Scoreboards_User_Guide_F970.pdf).
[^f970a]: [Colorado Time Systems, Wireless Handheld All Scoreboards Controller User Guide (F970 Rev. 201410)](https://web.archive.org/web/20160222051026/http://coloradotime.com/manuals/WHC_All_Scoreboards_User_Guide_F970.pdf) (archived 2016).
[^f971]: [Colorado Time Systems, Wireless Handheld Baseball Controller User Guide (F971 Rev. 201410)](https://web.archive.org/web/20160423163850/http://coloradotime.com/manuals/WHC_Baseball_User_Guide_F971.pdf) (archived 2016).
[^ds19]: Colorado Time Systems, Wireless Scoreboard Controllers datasheet (Rev 05/19).
[^ctswhc]: [Colorado Time Systems, Wireless Handheld Scoreboard Controller (WHC-1)](https://coloradotime.com/products/wireless-handheld-scoreboard-controller-whc-1) (as of 2026).
[^shop13]: [Colorado Time Systems, Wireless Handheld Controller](https://web.archive.org/web/20131105075807/http://www.coloradotime.com/shop/wireless-handheld-controller/) (web shop, archived November 2013).
[^shop13t]: [Colorado Time Systems, Wireless Tabletop Controller (WTTC-1)](https://web.archive.org/web/20131105080835/http://www.coloradotime.com/shop/wireless-tabletop-controller-wttc-1/) (web shop, archived November 2013).
[^ctsshop]: [Colorado Time Systems shop, Wireless Handheld Controller (WHC-1.S), Refurbished](https://shop.coloradotime.com/products/wireless-handheld-controller-2-4ghz-whc-1-s-refurbished) (September 2026).
[^poolweb]: [Poolweb, All Scoreboard Wireless Handheld Controller (WHC-1)](https://www.poolweb.com/products/all-scoreboard-wireless-handheld-controller) (September 2026).
[^f1045]: Colorado Time Systems, 2.4 GHz Wireless Adapter WA-3 User Guide (F1045 Rev. 202007), multisport boards.
[^f1050]: Colorado Time Systems, Wireless Handheld Segment Timer Controller User Guide (F1050 Rev. 202103, ©2021).
[^wa3ds]: Colorado Time Systems, 2.4 GHz Wireless Scoreboard Adapter (WA-3) datasheet.
[^f985]: [Colorado Time Systems, Deck Clock User Guide (F985 Rev. 202007)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Multisport%20Electronic%20Scoreboards/LED%20Scoreboards/Deck_Clock_User_Guide_F985.pdf).
[^f972]: [Colorado Time Systems, Slim Pace Clock User Guide (F972 Rev. 202509)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Training%20Tools/Pace%20Clocks/Slim_Pace_Clock_User_Guide_F972.pdf).
[^f1004]: Colorado Time Systems, Scoreboard for Swimming & Track With 2.4 GHz Integrated Wireless, Installation and User Guide (F1004 Rev. 202605).
[^bbds]: Colorado Time Systems, Baseball/Softball Scoreboards datasheet (rev. 10/13), horn.

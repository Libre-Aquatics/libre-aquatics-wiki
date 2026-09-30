---
title: Colorado Time Systems WTTC-1
description: >-
  The WTTC-1 is the Colorado Time Systems wireless tabletop controller that runs a
  multisport scoreboard, deck clocks and shot clocks for water polo and other sports.
tags:
  - Equipment
  - Scoring
  - Timing
  - Water polo
infoboxTitle: WTTC-1
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Part number
    value: '`WTTC-1`; `WTTC`; `WTTC-2-NB2` (dealer and shop listings)'
  - label: Type
    value: Wireless tabletop scoreboard controller
  - label: Connection
    value: 2.4 GHz radio, channel 0–11 and PAN 0–15; wired scoreboard ports; two USB-B ports; two RSR inputs
  - label: Dimensions
    value: 4.1 × 12.1 × 9.1 in (10.4 × 30.7 × 23.1 cm)
  - label: Weight
    value: 3.4 lb (1.5 kg)
  - label: Power
    value: 5 V DC, 1 A maximum, from the supplied power supply, a PC or an external USB battery
  - label: Status
    value: Current
  - label: Manual
    value: '[WTTC Water Polo User Instructions (F1071 Rev 202501)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Multisport%20Electronic%20Scoreboards/Multisport%20Controllers/WTTC%20Water_Polo_F1071.pdf)'
---

<!--
Research notes, WTTC-1. Built out from a stub in September 2026.

Held and read in full:
  - accessories/cts-wttc-water-polo-user-instructions-f1071.txt, F1071 Rev 202501, (c)2025,
    13 pages. The full water polo manual. Key legends are icons that the .txt drops; read from
    the PDF (pages 8-10): RUN/STOP, HORN, RESET (yellow), undo shot reset, ALT SHOT RESET,
    PERIOD, FULL T.O., PART T.O., BRUT., EXCL., FOUL, SUBST, CLEAR EXCL A/B/C, RED CARD,
    +1/-1, MENU (green), EDIT MODE.
  - scoreboards-displays/cts-water-polo-wttc-1-tabletop-controller-easy.txt, F980/202003, and
    cts-basketball-wttc-1-tabletop-controller-easy.txt, F979/202003: two-page quick references.
    Both refer to a "Tabletop Quick Reference Guide" for the hardware menu, not held.
  - accessories/cts-water-polo-revolutionize.txt, datasheet REV 07/24: specifications.
  - scoreboards-displays/cts-rsr-3-run-stop-reset-water-polo-user-guide.txt, datasheet REV
    11/25. Its page one never says RSR-3; the CTS product page does, so the filename is right.
  - scoreboards-displays/cts-wireless-handheld-all-scoreboards-controller-user-guide-f970.txt
    (WHC-1, F970 Rev. 202103) for the comparison.
  - WTTC passages in F1045 (WA-3 guide), the WA-3 datasheet, F1004 (Otter), F985 (deck clock),
    the 2018 and 2023 deck clock datasheets, F972 (slim pace clock), the baseball scoreboard
    datasheet (rev. 10/13), the Gen7 Legacy architectural guidelines (water polo page), and
    DisplayLink Plus help topic 22 (team logos).
  - Rules: World Aquatics Competition Regulations 2026, Part Six, Articles 3.8.7, 5, 9 and 10;
    NFHS 2012-13 rules book, water polo Rules 6 and 12.

Naming and generations:
  - WTTC-1 is the name in the 2013 baseball datasheet (earliest attestation held), the 2018
    deck clock datasheet, F979/F980 (2020), F1045 and the WA-3 datasheet. From 2023 CTS writes
    WTTC without the suffix (deck clock datasheet 07/23, flyer 07/24, F1071, product page).
  - Dealer and shop part numbers: WTTC-2-NB with a case (KAP7, "WTTC-2-NB/CASE-WTTC"),
    WTTC-2-NB2 (Poolweb), WTTC-2-NB2.S refurbished (CTS shop). What -2, NB and NB2 mean is
    not stated anywhere read. That NB means "no battery" is a guess and is not used.
  - Battery conflict, flagged in the body: KAP7's listing for WTTC-2-NB describes an internal
    lithium-polymer battery with 24 hours between charges. CTS's own product page (archived
    August 2020 and current), the 07/24 flyer and ScoreBoards.com all say there is no internal
    battery. The KAP7 text is probably older copy for an earlier build, but nothing says so.
  - Second conflict, flagged: the flyer and the CTS product page give the external battery
    as 5 V/1.8 A in and out; F1071 (2025) says 5 V/1.0 A. F1071's figure matches the unit's
    own 1 A maximum input.
  - A search summary quoted the 24-hour internal battery as from CTS; it is the KAP7 page.

Radio: F1071 carries an FCC Part 15 statement but no FCC ID; none found for the WTTC. The
WHC-1, WA-3 and slim pace clocks use XBee modules (see whc-1.md); that the WTTC does too is
likely but not verified, and is not stated.

Rules mapping:
  - The August 2020 CTS page says CTS had built in FINA's amendment to WP 20: a 20-second
    possession after corner throws, after rebounds kept by the shooting team, and after
    exclusions. The RSR datasheet of 11/25 still cites those three 20-second
    resets as World Aquatics rules. The 2026 World Aquatics regulations (Part Six, Article 9)
    set 28 seconds of possession and 18 seconds after a rebound, a corner throw, a penalty
    throw without change of possession, and some side-line free throws; after an exclusion
    the team keeps the greater of 18 seconds or the time remaining. So the 11/25 datasheet
    describes superseded values. The controller's settings are user-set, so it is the
    configuration, not the hardware, that follows the rule.
  - Double exclusion: F1071 says it leaves the shot clock alone; WA 2026 Article 3.8.7 says
    after simultaneous exclusions the possessing team restarts with a free throw and the
    shot clock keeps its value. Consistent.
  - Timeouts: WA 2026 Article 5, two one-minute timeouts per team per match, with a signal at
    45 seconds. NFHS 2012-13 (Rules 6 and 12): regular two-minute time-outs with a warning at
    1:45, and an optional 30-second time-out with a warning at 20 seconds. The WTTC's full and
    partial timeouts, with separate lengths, counts and warnings, fit the second pattern.
  - Exclusion length: WA 2026 Article 10 re-entry after 18 seconds of actual play. F1071 makes
    exclusion and brutality lengths settings; it gives no defaults.

Other sports: the 2020 CTS page and the KAP7 and CTS shop listings give nine sports (water polo, basketball, volleyball, soccer, wrestling, baseball,
lacrosse, field hockey, American football).
The current CTS page names inserts for basketball, hockey and lacrosse beside water polo.
Basketball specifics from F979 (+1/+2/+3, possession, bonus thresholds, tenths below 1:00
and :10) are summarised only briefly because basketball is out of scope.

Firmware: the CTS product page lists v1.7.10 of 17 November 2025, loaded with the MultiSport
Firmware Reprogrammer (v2.0.9 on the page). F1055, a 2019 time-of-day synchronisation sheet
naming the WTTC, is on ManualsLib but not held.

Prices, September 2026: ScoreBoards.com, WTTC-1, $1,295.00, out of stock; KAP7, with carrying
case, $1,879.99; CTS shop, refurbished WTTC-2-NB2.S, $1,200.00, marked down from $1,600.00.

Web sources saved to sources/reference/cts-web/ for the copying check: CTS page archived
August 2020; dealer pages.

Still to research: introduction date (before October 2013); what the -2 and NB2 suffixes
mean; the radio module; the Tabletop Quick Reference Guide; whether any sport besides water
polo has a full manual like F1071.
-->

The WTTC-1 is a wireless tabletop controller made by
[Colorado Time Systems](../../../vendors/colorado-time-systems.md) (CTS). An operator at the
officials' table uses it to run the clocks, scores and fouls of a game on CTS's 2.4 GHz
scoreboards, deck clocks and pace clocks, with no timing console involved.[^f1071][^f1045] CTS
sells it chiefly as a water polo controller, but the same unit covers other sports through
slide-in keyboard inserts.[^ctswttc][^cts2020]

## Naming and models

CTS has written the name two ways. Documents from 2013 to 2020 call it the WTTC-1, including
a 2013 baseball scoreboard datasheet, which is the earliest reference held here.[^bbds][^f980]
From 2023 CTS writes WTTC without the suffix.[^ds23][^ds24][^f1071]

Dealers use a longer part number. KAP7 sells `WTTC-2-NB` with a carrying case, Poolweb lists
`WTTC-2-NB2`, and the CTS shop offers a refurbished `WTTC-2-NB2.S`.[^kap7][^poolweb][^ctsshop] CTS
does not explain the suffixes in anything published.

The listings also disagree on power. KAP7's description of `WTTC-2-NB` gives an internal
lithium-polymer battery that runs 24 hours between charges.[^kap7] CTS's own product page,
in 2020 and now, and its 2024 datasheet say the controller has no internal battery.[^cts2020][^ctswttc][^ds24]
The KAP7 text may describe an earlier build, but no source says so.

## Role in the scoreboard system

This section covers where the controller sits between the operator and the displays.

The WTTC-1 holds the game itself. The score, the clocks and the fouls live in the controller,
which sends them by radio to every display set to its channel and personal area network (PAN)
ID. It needs no [WA-3](wa-3.md) adapter at its own end.[^f1045][^wa3ds] The
[deck clock](../pace-clock/deck-clock.md) and the
[slim pace clock](../pace-clock/slim-pace-clock.md) both display the game time it sends, and the
deck clock also shows its shot time.[^f985][^f972] CTS's facility-planning guide describes it
as portable enough to sit wherever suits the deck, and says it reaches most CTS scoreboards,
wired or wireless, at up to 1,000 ft.[^arch]

Each display also has a module address. A display must be set active in the controller's
menu before it shows the controller's data.[^f985][^f972] One controller can run several
boards at once, each set to its own channel, PAN and module.[^ctswttc][^f985] If two
controllers share a channel, PAN and module, the boards receiving them show wrong data.[^f985]

The controller does some work beyond scoring. On the [Otter](../scoreboard/otter.md) boards
it sets the time of day on a leader board and every follower board, and it changes a board's channel and PAN from its menu. Over USB, it
connects a computer to the boards so that CTS's MultiSport firmware tool can designate one
board as the leader and the rest as followers.[^f1004]

## Design and controls

The controller is a desk unit of 4.1 × 12.1 × 9.1 in (10.4 × 30.7 × 23.1 cm),
weighing 3.4 lb (1.5 kg).[^ds24] CTS describes its keys as having tactile dome feedback and its
LCD as transflective, readable from darkness to direct sun. It has a real-time clock of its own for time
of day.[^cts2020]

The keys sit under a slide-in paper insert that labels them for one sport. The water polo
insert carries keys for the game clock (Run/Stop), the shot clock (a yellow Reset, an undo key
for a mistaken reset, and Alt Shot Reset), Period and Horn. Each team has Full T.O. and
Part T.O. timeout keys, Excl., Brut. and Foul keys, +1 and −1 score keys, a Subst key, and keys
to clear exclusions in slots A, B and C. A Red Card key, a Menu key and an Edit Mode key serve
both teams.[^f1071] The 2025 water polo insert is double-sided: one face puts blue on the left, the
other white, so that it can match whichever arrangement the governing body uses.[^f1071] In the 2020 quick reference, turning the insert over instead gave the
alphabetic keyboard for typing names.[^f980]

The rear panel has a power switch, scoreboard ports for a wired connection to boards and deck
clocks, two round phone-plug inputs for run-stop-reset units, and two USB-B ports. One USB port
takes power; the other can link to a computer running
[DisplayLink Plus](../../../software/displaylink-plus.md) to feed a video board.[^f1071]

The controller runs on 5 V DC at up to 1 A, from the supplied power supply, a PC, or an external
USB battery.[^ds24] CTS's own tests of three battery sizes give these times:[^f1071]

| Battery | Run time | Charge time |
|---|---|---|
| 3.7 V, 10,000 mAh (38 Wh) | 19 hours | 28 hours |
| 3.7 V, 7,800 mAh (29 Wh) | 15 hours | 5.5 hours |
| 3.7 V, 2,600 mAh (10 Wh) | 4.5 hours | 3 hours |

The documents disagree on the battery rating. The 2025 manual asks for a pack with 5 V, 1.0 A
input and output, while the 2024 datasheet and the product page give 5 V, 1.8 A.[^f1071][^ds24][^ctswttc]
The manual's figure matches the unit's own 1 A maximum. CTS also notes that some batteries
made the controller switch off as a sport was selected, and that turning it off and on
again cleared the fault.[^f1071]

## Setup and wireless

The hardware menu applies to every sport. It sets the radio channel (0–11) and PAN (0–15),
which must match the numbers a board shows next to C and P when it powers up. It also turns the
board on or blank, sets the board's brightness from 1 to 7 or to automatic, and runs a segment
test. A signal-strength readout on the board shows how much noise the radio is receiving, with
lower numbers meaning a cleaner signal.[^f1071]

The same menu sets the controller's backlight and the time of day, entered in 24-hour form
and displayed in either 12-hour or 24-hour form. Each horn can be given one of eight tones at
one of four volumes.[^f1071] The water polo and basketball guides assign horn 1 to the game and
horn 2 to the shot clock.[^f980][^f979] A menu for pairing remote devices is marked as deprecated in
the 2025 manual.[^f1071]

CTS advises keeping every board in direct view of the controller, with no walls in between. A channel and PAN
that work in an empty building can fail during an event, when spectators' phones and staff
radios add interference, and the manual suggests trying other settings when that
happens.[^f1071]

## Water polo operation

The controller keeps the water polo game clock, the shot clock, exclusions, timeouts and
player statistics, and it sounds the horn by itself whenever a period, a break or the game ends.[^f1071]

### Clocks

Run/Stop starts and stops the game clock, and Reset returns the shot clock to its main value.
An undo key restores the shot time after a mistaken reset. Alt Shot Reset sets the shot clock
to a second, shorter value.[^f1071] The current World Aquatics rules need both values: a team
has 28 seconds of possession, cut to 18 when it recovers its own rebound, takes a corner, or keeps
the ball after a penalty throw.[^wacr] With the Shot Can Stop option turned on,
the operator can pause the shot clock by itself while the game clock keeps running.[^f1071]

The rule values have changed since CTS first described the feature. CTS's 2020 product page
said it had built in a FINA amendment giving a 20-second possession after a corner, a rebound
kept by the shooting team, or an exclusion.[^cts2020] A CTS datasheet for the run-stop-reset accessory, dated
November 2025, still gives those 20-second resets as the World Aquatics rule.[^rsr3] The 2026
regulations set 18 seconds instead.[^wacr] Both values are settings on the controller, so it is
the configuration that follows the rule.[^f1071]

Game and shot times can be corrected in Edit Mode while the clock is stopped, entered to a
tenth of a second.[^f1071] The Period key advances to the following period or break, and only
while the clock is stopped.[^f1071]

### Fouls, exclusions and timeouts

Each team's +1 and −1 keys change its score. If player tracking is on, the operator also enters
the scorer's cap number.[^f1071] The Excl. and Brut. keys record an exclusion or a brutality and
start its timer straight away whenever the game clock is going. The exclusion then shows in slot A, B or C
on the board, and the Clear Excl keys end one early.[^f1071] Red Card ejects a player and charges
three fouls to their cap number.[^f1071]

A double-exclusion key excludes one player from each team at the same moment. It stops the game
clock and leaves the shot clock unchanged.[^f1071] The 2026 World Aquatics rules treat
simultaneous exclusions the same way, restarting play without resetting the shot
clock.[^wacr]

The controller counts two kinds of timeout, full and partial, each with its own number per half,
length and warning horn.[^f1071] That suits rules such as the NFHS high school book of 2012–13,
which paired two-minute regular time-outs with an optional 30-second time-out. The World
Aquatics regulations of 2026 have only one kind: two one-minute timeouts per team in a match,
with a signal at 45 seconds.[^nfhs][^wacr] For a numeric board with a single timeout digit, the
controller can show the two counts combined.[^f1071]

### Game setup

Game setup has five parts.[^f1071]

- Default times: period, break, halftime and overtime lengths, and an optional warning horn
  before a break ends. When a period ends, the controller can go to the break and start its
  clock, go to the break and wait, or stay where it is.
- Shot clock: on or off, the main and alternate reset values, independent stopping, and what
  to show when the shot time is longer than the time left in the period. It can show normally,
  go blank, or follow the game clock.
- Exclusions: lengths for exclusions and brutalities, whether a goal clears them, whether
  brutalities always take slot C, and whether later exclusions move up as earlier ones expire.
- Timeouts: numbers, lengths and horns for full and partial timeouts.
- More options: tracking fouls and points by cap number, and the foul count that puts a player
  out of the game.

The same menu chooses which team, white or blue, appears on the left of the display, and
whether, during a timeout, the main clock holds the game time or counts the timeout
down.[^f1071] The 2024 datasheet lists the third exclusion slot, red cards, double exclusions
and automatic breaks as features.[^ds24]

### Penalty shootout

A penalty shootout mode records each team's shots as made or missed, entered on the number pad,
and keeps a running shootout score. It works only with DisplayLink Plus and an LED video board.
The rest of the game stays in memory, and the operator returns to it from the shootout
menu.[^f1071]

## Other sports

CTS lists nine sports for the controller: water polo, basketball, volleyball, soccer, wrestling,
baseball, lacrosse, field hockey and American football.[^cts2020][^ctsshop] Its current product page names
keyboard inserts for basketball, hockey and lacrosse alongside water polo.[^ctswttc] Each sport
has its own keys. The basketball insert, for example, adds two- and three-point score keys, a
possession arrow and bonus indicators.[^f979] CTS's 2013 baseball scoreboard datasheet recommends
the WTTC-1 for its larger boards and the handheld controller for the smallest.[^bbds]

## Run-stop-reset units

[Run-stop-reset units](rsr.md) let a second or third timekeeper work the clocks from a hand
switch plugged into one of the controller's two inputs. A single unit starts and stops the game
clock with a black rocker switch and resets the shot clock with a blue button; while it is
connected, the matching keys on the controller are inactive.[^f1071] With two units, the one on
input 1 runs the game clock and the one on input 2 resets the shot clock, and it can also stop
and start the shot clock if Shot Can Stop is on. A two-button unit adds the alternate reset.[^f1071]
The `RSR-1` resets only to the main shot value, leaving the alternate reset to the keyboard.
CTS sells a unit with two reset buttons for water polo as the `RSR-3`.[^f1071][^ctswttc][^rsr3]

## Connections to DisplayLink Plus

For a video board, the controller's data reaches the DisplayLink Plus computer over a USB cable
or through a WA-3 at that computer, set to the controller's channel and PAN with its switch 8
up.[^f1071][^f1045] DisplayLink Plus keeps separate water polo templates for the two sources: a
MultiSport set for the WTTC and an Aquatic Sports set for the [System 6](../../swimming/timers/system-6.md)
console. Team logos are matched to the WTTC's game through team abbreviations entered on the
program's MultiSport tab.[^dlp22] The player foul and point displays and the penalty shootout
need that video board.[^ds24][^f1071]

CTS updates the controller's firmware with its MultiSport firmware reprogramming tool. The
current version listed on the product page is 1.7.10, of 17 November 2025.[^ctswttc]

## Compared with the WHC-1

The [WHC-1](whc-1.md) is CTS's handheld controller for the same boards, and like the WTTC-1 it
needs no adapter.[^f1045] It is smaller in scope. It runs on two AA cells for about eight hours
and drives a board's two team scores, a period digit from 1 to 9, a clock that counts up or down, and a
shot clock and timeouts if the board has them.[^f970] Its guide describes no sport inserts,
statistics, exclusion slots, run-stop-reset inputs or USB link.[^f970][^f1071] CTS's baseball datasheet makes
the split explicit: the WHC-1 can run its smallest board, and the WTTC-1 is required for the
larger boards that add a game clock and a pitch count.[^bbds]

## Specifications

| Item | Value |
|---|---|
| Dimensions (H × W × D) | 4.1 × 12.1 × 9.1 in (10.4 × 30.7 × 23.1 cm)[^ds24] |
| Weight | 3.4 lb (1.5 kg)[^ds24] |
| Power | 5 V DC, 1 A maximum, from power supply, PC or external USB battery; no internal battery[^ds24][^f1071] |
| Radio | 2.4 GHz; channel 0–11; PAN 0–15[^f1071] |
| Operating distance | Up to 1,000 ft[^ds24] |
| Wired outputs | Scoreboard ports for boards and deck clocks[^f1071] |
| Other connections | Two USB-B; two run-stop-reset inputs[^f1071] |
| Horn settings | Eight tones and four volumes for each horn[^f1071] |
| Board brightness | Levels 1–7, or automatic on boards with a light sensor[^f1071] |
| Compliance | cETLus, FCC, CE, RoHS[^ds24] |
| Firmware | 1.7.10 (November 2025)[^ctswttc] |

## Part numbers and accessories

This section lists the controller's part numbers and the accessories CTS sells for it.

- `WTTC-1`, the name in CTS documents to 2020, and `WTTC`, the name from 2023.[^f980][^ds24]
- `WTTC-2-NB`, sold with carrying case `CASE-WTTC`, at $1,879.99 in September 2026.[^kap7]
- `WTTC-2-NB2`, the current dealer part number.[^poolweb] The CTS shop sold a refurbished unit,
  `WTTC-2-NB2.S`, for $1,200.00, down from $1,600.00, in September 2026.[^ctsshop] ScoreBoards.com
  listed the WTTC-1 at $1,295.00, out of stock.[^sbcom]
- `R-012-090-A`, water polo keyboard insert.[^ctswttc]
- `R-420-021`, power bank.[^ctswttc]
- `RSR-1` and `RSR-3`, [run-stop-reset units](rsr.md).[^f1071][^ctswttc]
- [WA-3](wa-3.md), needed only at a DisplayLink Plus computer, not at the controller.[^f1045]

## See also

- [WHC-1](whc-1.md): the handheld controller for the same boards
- [Run-stop-reset units](rsr.md): the hand switches that plug into the controller
- [WA-3](wa-3.md): the adapter that carries its data to a video board computer
- [Deck clock](../pace-clock/deck-clock.md): the portable game and shot clock it drives
- [Scoreboard control](index.md): the scoreboard-control overview
- [Colorado Time Systems](../../../vendors/colorado-time-systems.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^f1071]: [Colorado Time Systems, WTTC Water Polo User Instructions (F1071 Rev 202501)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Multisport%20Electronic%20Scoreboards/Multisport%20Controllers/WTTC%20Water_Polo_F1071.pdf).
[^f980]: [Colorado Time Systems, Water Polo (WTTC-1 Tabletop Controller) quick reference (F980/202003)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Multisport%20Electronic%20Scoreboards/Multisport%20Controllers/WTTC_Water_Polo_Quick_Reference_F980.pdf).
[^f979]: Colorado Time Systems, Basketball (WTTC-1 Tabletop Controller) quick reference (F979/202003).
[^ds24]: Colorado Time Systems, Water Polo wireless tabletop controller datasheet (Rev 07/24), specifications.
[^ds23]: Colorado Time Systems, Water Polo: Colorado Time Systems' Deck Clocks datasheet (Rev 07/23).
[^rsr3]: Colorado Time Systems, Water Polo Run-Stop-Reset datasheet (Rev 11/25).
[^ctswttc]: [Colorado Time Systems, Water Polo Wireless Tabletop Controller (WTTC)](https://coloradotime.com/products/water-polo-wireless-tabletop-controller-wttc) (as of 2026).
[^cts2020]: [Colorado Time Systems, Wireless Scoreboard Controller, Tabletop](https://web.archive.org/web/20200823143847/https://www.coloradotime.com/wireless-scoreboard-controller-tabletop/) (archived August 2020).
[^ctsshop]: [Colorado Time Systems shop, Wireless Tabletop Controller (WTTC-2-NB2.S), Refurbished](https://shop.coloradotime.com/products/wireless-tabletop-controller-2-4ghz-wttc-2-nb2-s-refurbished) (September 2026).
[^kap7]: [KAP7 International, Colorado Wireless Table Top Controller with Case](https://www.kap7.com/wireless-table-top-controller/) (September 2026).
[^poolweb]: [Poolweb, Water Polo Wireless Tabletop Controller (WTTC-2-NB2)](https://www.poolweb.com/products/water-polo-wireless-tabletop-controller) (September 2026).
[^sbcom]: [ScoreBoards.com, Colorado Time Systems Wireless Tabletop Controller (WTTC-1)](https://scoreboards.com/product/colorado-time-systems-wireless-tabletop-controller-wttc-1/) (September 2026).
[^f1045]: Colorado Time Systems, 2.4 GHz Wireless Adapter WA-3 User Guide (F1045 Rev. 202007), multisport boards.
[^wa3ds]: Colorado Time Systems, 2.4 GHz Wireless Scoreboard Adapter (WA-3) datasheet.
[^f1004]: Colorado Time Systems, Scoreboard for Swimming & Track With 2.4 GHz Integrated Wireless, Installation and User Guide (F1004 Rev. 202605).
[^f985]: [Colorado Time Systems, Deck Clock User Guide (F985 Rev. 202007)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Multisport%20Electronic%20Scoreboards/LED%20Scoreboards/Deck_Clock_User_Guide_F985.pdf).
[^f972]: [Colorado Time Systems, Slim Pace Clock User Guide (F972 Rev. 202509)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Training%20Tools/Pace%20Clocks/Slim_Pace_Clock_User_Guide_F972.pdf).
[^f970]: [Colorado Time Systems, Wireless Handheld All Scoreboards Controller User Guide (F970 Rev. 202103)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Multisport%20Electronic%20Scoreboards/Multisport%20Controllers/WHC_All_Scoreboards_User_Guide_F970.pdf).
[^bbds]: Colorado Time Systems, Baseball/Softball Scoreboards datasheet (rev. 10/13), controllers.
[^arch]: Colorado Time Systems, Gen7 Legacy Architectural Guidelines (©2026), water polo.
[^dlp22]: Colorado Time Systems, Display Link Plus Help, How to Display Directly to the Board (water polo team logos).
[^wacr]: [World Aquatics, Competition Regulations](https://resources.fina.org/fina/document/2026/02/18/e6815ecc-06d9-4f0b-98e9-4c441cf5e6a3/2026-02-18_World-Aquatics_CR-Final.pdf), Part Six, 3.8.7, 5 and 9.
[^nfhs]: NFHS, Swimming, Diving and Water Polo Rules Book 2012-13, Water Polo Rules 6 and 12 (time-outs).

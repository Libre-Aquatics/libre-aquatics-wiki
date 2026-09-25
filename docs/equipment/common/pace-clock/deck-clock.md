---
title: Colorado Time Systems Deck Clock
description: >-
  The deck clock is a Colorado Time Systems portable multisport clock that shows game
  and shot time in competition and doubles as a pace clock the rest of the time.
tags:
  - Equipment
  - Timing
  - Scoring
  - Water polo
infoboxTitle: Deck Clock
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Part number
    value: '`DC-1500`, `DC-1501`, `DC-1502`; manual model numbers `MS-0043`–`MS-0045`'
  - label: Type
    value: Portable multisport game, shot and pace clock
  - label: Digits
    value: 5 in upper row, 10 in lower row; red, amber, or mixed
  - label: Wireless
    value: 2.4 GHz; channel 0–11, PAN ID 0–15, module address 1–6 by menu, `01`–`1E` by DIP switch
  - label: Controllers
    value: '[WTTC-1](equipment/common/scoreboard-control/wttc-1.md), [WHC-1](equipment/common/scoreboard-control/whc-1.md), [WHC-2](equipment/common/pace-clock/whc-2.md), [System 6](equipment/swimming/timers/system-6.md), [System 5](equipment/swimming/timers/system-5.md)'
  - label: Dimensions
    value: 32 × 18.5 × 12 in (81.3 × 47 × 30.5 cm)
  - label: Weight
    value: 30 lb (13.6 kg)
  - label: Power
    value: Two Powersonic PS1270 gel cells, or 120/240 VAC autosensing
  - label: Introduced
    value: By May 2015
  - label: Status
    value: Current
  - label: Manual
    value: Deck Clock User Guide (F985 Rev. 202007)
    href: 'https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Multisport%20Electronic%20Scoreboards/LED%20Scoreboards/Deck_Clock_User_Guide_F985.pdf'
---

<!--
Research notes, deck clock. Built out from a stub in September 2026.

Surfaced while building out the handheld segment timer, which names deck clocks as one of
the three display types it drives. Two numbering schemes again, as with the slim pace clocks.

Held sources and what each supports, all under sources/vendors/colorado-time-systems/.

F985, Deck Clock User Guide, Rev. 202007, ©2020, in pace-clocks/. The spine of the article:
product overview, first-use battery hookup, the nine-item push-button menu, battery rules,
the four data sources, the DIP-switch tables, battery replacement and the standards list.
Product identification gives the product as Multisport Deck Clock and the model numbers as
MS-0043, MS-0044 and MS-0045, which places it in the MS- family the WA-3 guide F1045 defines.
The manufacturer line is Everlast Climbing Industries, Inc. DBA Colorado Time Systems;
Everlast is CTS's own legal entity (see the vendor page and otter.md), so it is not stubbed.

The datasheet cts-deck-clock.txt, Rev 05/18, in pace-clocks/. Uses DC-1500 for the mixed red
and amber version, DC-1501 for all red and DC-1502 for all amber. The only held source, with
its 2023 reissue, for the overall dimensions, the weight and the digit sizes. Names WTTC-1 and
WHC-1 as accessories and the WA-2 as the route for console data.

cts-water-polo-colorado-time-systems-deck-clocks.txt, Rev 07/23, in pace-clocks/. A water
polo branded reissue of the same sheet: same DC- numbers and same specifications, but it
drops the -1 suffix from the controllers (WTTC, WHC) and refers to the console adapter only
generically.

The 2015 catalogue, Complete Timing, Scoring, Training, and Display Solutions (held twice,
in start-systems/ and catalogs-brochures/). Lists the deck clock twice: under water polo shot
clocks, where it adds a conformal coating on the digits and board and the 12 channel by 16
network figure (192 games per facility, CTS's arithmetic), and in the training section. It
says the clock takes wired data from a System 6. Beside it the same catalogue lists a separate
aluminium-cased CTS pace clock with a 10 in digit row for shot timing, which is the
older wired and 900 MHz pace and shot clock line covered on the pace clocks overview. The
catalogue also records CTS as official scoring and timing supplier to USA Water Polo.

The 2011 edition of the same catalogue is held and covers pace clocks, but no held document
older than the 2015 catalogue mentions a deck clock at all (a case-insensitive search of the
whole collection for "deck clock", DC-150x and MS-004x). That was what the first pass's "By 2015" rested on; the second pass (below) moved it to May 2015. It is an inference from catalogue absence, not a launch date, and the
tracker's note that the 2015 edition "introduces" the product is the same inference.

F1045, WA-3 user guide, in scoreboards-displays/. Defines multisport boards as those whose part
number starts MS-, lists deck clocks among them, locates the part number on the unit's serial
sticker, which sits on the enclosure's right-hand face, and explains that a WA-3 feeding System 6 water polo data
to multisport boards runs with its switch 8 down and needs the board at address 1. So a WA-3
works as well as the WA-2 that F985 and the 2018 datasheet name.

F1050, segment timer guide, in pace-clocks/. Deck clocks show the rep time and the rep number.

F1071, WTTC Water Polo User Instructions, Rev 202501, in accessories/. The WTTC's two
scoreboard ports take scoreboards or deck clocks by cable as well as wirelessly.

Gen7 Legacy Architectural Guidelines (©2026), in catalogs-brochures/, water polo section:
portable pace clocks also serve as water polo shot clocks, and the 2.4 GHz deck clocks pair
with the WTTC. Confirms the product is still in the current facility-planning literature.

CTS product page, fetched 2026-09-24:
https://coloradotime.com/products/deck-clock-for-training-dc-1500 . Titled Deck Clock for
Training (DC-1500), with DC-1501 red and DC-1502 amber as the other options; same dimensions,
weight and power as the datasheets; links F985; and lists R-420-003 as the Start System/Deck
Clock Battery, which confirms the same cell as the Championship start systems use. So in 2026
CTS still sells under the DC- numbers, five years after F985 printed MS- numbers.

Independent sources. World Aquatics Competition Regulations (in force February 2026), Part
Six, Article 9 (28 seconds of possession, kept by timekeepers and shown on a shot clock) and
Article 21.12 (one or more shot clock displays visible to officials and players). Held as
sources/rules/world-aquatics/wa-competition-regulations-2026.txt. NFHS 2012-13 rules book,
water polo Rule 1-2, Clocks, Score: at least two shot clocks, four recommended at the
corners, whole-second display only, and a game-clock buzzer that sounds different from the
shot-clock buzzer. Held as sources/rules/nfhs/nfhs-swimming-diving-and-water-polo-rules-book-2012-13.txt.
No public URL for the water polo part of that book was found, so it is cited by title. These
rules say what a shot clock must do; neither mentions CTS, and nothing here claims the deck
clock was certified against either.

Findings worth keeping.

The part number schemes. F985 (2020) gives MS-0043 to MS-0045; the datasheets (2018, 2023)
and the 2026 product page give DC-1500 to DC-1502. Three of each, and the DC- numbers map to
digit colour, but no held source pairs an MS- number with a DC- number or a colour. The likely
reading is that MS- is the engineering model number on the serial label and DC- the ordering
number, but that is inferred.

The module address range. F985's push-button menu offers 1 to 6, the same as the slim pace
clock and the handheld controllers. Its DIP table on switch bank S1 (switches 1-5) accepts 01
to 1E hexadecimal, with 1F reserved as a test mode, so the hardware addresses thirty modules
where the menu reaches six. Nothing held explains the gap. F985 also says the menu wraps from
6 to 0, which is outside the range it has just stated; probably a copy slip from the PAN menu.
Switches 6-8 of S1 must not be touched. Channel is S2 switches 1-4, PAN S2 switches 5-8. The
board sits behind the left-hand large digit, reached by removing nine screws from the weather
cover.

F985 predates the segment timer. Rev. 202007 is July 2020 and F1050 is March 2021, and F985's
list of data sources does not include it. Do not read the omission as incompatibility.

F985 has a Gen7 section its own table of contents leaves out: a Gen7 timer sharing the clock's channel
and PAN feeds the clock its time of day (no game or shot data is described).

Water polo from a console, from F985. Two of the console's scoreboard channels must be at
factory default (channel 1 shown on module 1, channel 2 on module 3), restorable from the
Scoreboard menu's Define Module submenu with Default Scbds. On a System 6 the game setup must
also be switched to not show running tenths. Connection is by R-xxDC data cable or through a
WA-2 whose DIP switch selects the multisport-scoreboard output. F985 names both the
System 6 and System 5; the 2015 catalogue and the product page name only the System 6.

Power. F985's product identification gives a 150 W supply, 100-240 V, 50/60 Hz, 2 A max; the
datasheets give battery or 120/240 VAC auto-sensing. Not a contradiction, but the two describe
the input differently. Batteries: two Powersonic PS1270 gel cells, UL recognized MH20845, CTS
part R-420-003, replaced as a pair. Shipped with the red lead disconnected and taped; charge at
least 8 hours before first use and after every use; trickle charge when full; green indicators
while charging; automatic shutdown on deep discharge. Battery only outdoors or near water;
charge only indoors away from water. No run time or charge time is given anywhere held.

Standards followed: UL 48, CAN/CSA C22.2 #207, FCC 47 CFR 15B Class A, ICES-003. Unlike the
slim pace clock guide, F985 prints no FCC ID, so the radio module cannot be identified from
held sources. The slim pace clock and segment timer use XBee-PRO or XBee 3 modules; the deck
clock probably does too, but that is inferred.

Horn. F985 says tones and volumes are chosen from the tabletop controller and can differ by
function, game against shot. The WTTC-1 guide is the place to find the options; not held.

Second research pass, September 2026 (web; nothing new was added to sources/).

The 2015 edition of the guide, F985 Rev. 201505, ©2015. Not held and not on the CTS site;
read through two third-party manual mirrors: ManualsLib
(https://www.manualslib.com/manual/945363/Colorado-Time-Systems-Ms-0043.html, pages 7, 8, 9
and 13 checked individually) and ManualZilla
(https://manualzilla.com/doc/7249603/deck-clock-user-manual---colorado-time-systems). A
DocPlayer copy (99900147) exists but would not resolve. Cited by title only, because the rule
is to link the publisher, and CTS no longer hosts this edition. Verified from those pages:
same three MS- model numbers, so the MS- scheme is at least as old as the product; the same
150 W supply line; eight menu items (12/24 hour, hours, minutes, time shifting, intensity,
channel, PAN, module 1-6), with no leader or follower step, so every clock could set the time
and a change propagated to the others; a red front battery lamp once the series pair is down
to 22 V, and automatic shutdown at 20 V (these figures are dropped from the 2020 edition,
which keeps only the shutdown); unchanged console setup rules for water polo from a System 5 or 6, R-xxDC
cable and WA-2 route; no Gen7 section. The last page is a European declaration of conformity:
Everlast Climbing Industries, Inc. DBA Colorado Time Systems, product Multisport Scoreboard
MS-XXXX, signed by Michael Medina-Brodsky as Director of Manufacturing and Technology at
Loveland on 17 January 2013, citing 2006/95/EC with EN 60950-1, EN 60950-22, EN 60598-1 and
EN 60598-2-1, 2004/108/EC with CISPR 22 and CISPR 24, and 2011/65/EU. Two things follow. The
declaration is a family document and its date says nothing about when the deck clock itself
appeared. And it puts the Everlast DBA name on CTS paperwork in January 2013, earlier than
the "at least 2021" the vendor page currently gives; that page could be updated. F1050's
declaration (2019) has the same signer under a different title, Director of Operations.

Dating, revised. Earliest dated evidence is now F985 Rev. 201505 (May 2015), consistent with
the 2015 catalogue and with the product's absence from the 2011 catalogue. A search for a 2014
or 2015 launch announcement found nothing, and the Wayback Machine could not be queried from
here; an archived coloradotime.com product page from 2013-2015 would narrow it.

CTS product pages, fetched 2026-09-24. Three listings sell the clock: Deck Clock for Training
(DC-1500); Game/Shot Clock for Water Polo (DC-1500), which names the WTTC, the WHC-1 and a
wired System 6, and links a datasheet Game_Shot_Clock_Water_Polo_DC1500.pdf (probably the Rev
07/23 sheet already held; not checked); and Wireless Portable Scoreboard and Shot Clocks
(WP-1700 / DC-1500), a package with the WP-1700 scoreboard (13.75 x 48 x 4 in, 29 lb, 5 in
digits) that quotes a handheld range of up to 1,000 ft and a viewing distance of at least 50 m
for both displays, and links the mini scoreboard guide F927 alongside F985. None shows a price.

Prices, all September 2026. CTS's own shop (shop.coloradotime.com) lists Deck Clock / Pace Clock
(DC-1500.S) Refurbished at US$1,760, marked down from US$2,350, factory-certified, one-year
limited warranty, 50% restocking fee, sold out when checked. The .S suffix is not explained;
it is presumably the refurbished-stock marker. KAP7 International: Colorado Wireless Shotclock
Pair, US$4,900. Recreonics: Colorado Time Systems Wireless Deck Clocks, pair only, US$5,140.99,
SKU 93-591. DK Hardware lists a Water Polo/Deck Clock Pair under its own code CYC-35-8537, marked
product discontinued in the URL; the page refused the fetch (403), so no price. S&R Sport and HS
Sports (UK) also list CTS shot clock systems; not read. Dealer prices move, so the article dates
them.

FCC. The 2015 edition, like the 2020 one, prints no FCC ID.

Still to research: which MS- number is which colour; battery run and charge time; horn tone
options (the WTTC-1 guide); the launch year within 2011 to May 2015; and whether the deck clock should move to the water polo section once that section has
pages. It is filed here because the segment timer drives it as a pace clock and the
scoreboards overview had already excluded it.
-->

The deck clock is a portable LED clock made by [Colorado Time Systems](../../../vendors/colorado-time-systems.md)
(CTS). Whenever a water polo controller or timing console is sending it scoreboard data, the
upper row of 5 in digits carries the game clock and the lower row of 10 in digits the shot
clock; when nothing is being sent, the clock shows the time of day.[^f985][^ds18] With no
controller attached, several deck clocks keep the same time over the air, so the product
doubles as a pace clock for training. CTS now
sells it as the Deck Clock for Training.[^ctsdc] The clock runs on two internal gel-cell
batteries or on mains power.[^f985]

## Role in training and competition

The clock has two uses: timing matches and pacing training.

In water polo, a team must shoot within 28 seconds of gaining possession. Timekeepers run
that count, and the World Aquatics rules require the time remaining to be shown on one or
more shot clock displays that officials and players can see.[^wacr] The NFHS high school
rules ask for more: at least two shot clocks per game, and preferably four, one in every
corner, showing whole seconds only. They also require the game-clock buzzer to sound
different from the shot-clock buzzer.[^nfhs] The deck clock puts the shot count on its large
lower row and the game time on its upper row. CTS lists it among its water polo shot clocks
and says its built-in horn gives the game and the shot clock different tones.[^cat15][^ds18]
Neither rulebook names a product, and none of the CTS documents cited here says the deck clock
was tested against either one.

Out of competition the same unit shows the time of day, and CTS markets it as a pace
clock.[^ds18][^ctsdc] A [handheld segment timer](whc-2.md) can also drive it through
interval sets. Deck clocks then show the rep time and the rep number.[^f1050] The shared
background on pace clocks is in the [pace clocks overview](index.md).

The earliest dated document for the clock is the first known edition of its user guide, F985
Rev. 201505, from May 2015.[^f985a] The CTS catalogue of the same year lists it both with the
water polo shot clocks and with the training equipment.[^cat15] The 2011 edition of that
catalogue covers pace clocks but does not mention a deck clock. The product was therefore
introduced between 2011 and May 2015; no source gives a launch date. CTS still lists it in
2026.[^ctsdc][^arch]

## Design and construction

The enclosure is molded polyethylene. CTS describes it as water resistant, sun resistant and
free of corrosion, with a handle for carrying and a base shaped to resist tipping.[^f985][^ds18]
The 2015 catalogue adds that the digits and circuit board are conformal coated.[^cat15] The
unit stands 32 in (81.3 cm) tall, 18.5 in (47 cm) wide and 12 in (30.5 cm) deep, and weighs
30 lb (13.6 kg).[^ds18]

The upper row holds four 5 in (12.7 cm) digits. The lower row holds two 10 in (25.4 cm)
digits.[^ds18] Three colour options are sold: all red, all amber, or amber and red mixed.[^ds18][^ctsdc]
An ambient light sensor adjusts brightness to the surroundings, and the horn is mounted
inside the enclosure.[^f985]

The radio and its antenna are also internal. F985 calls the radio certified but, unlike the
[slim pace clock](slim-pace-clock.md) guide, prints no FCC identifier for it.[^f985] The
clock's control board, with its DIP switches, sits behind the left-hand large digit, under a
weather cover held by nine screws.[^f985]

## Display modes

What the clock shows depends on whether scoreboard data is arriving.

| Condition | Upper row (5 in) | Lower row (10 in) |
|---|---|---|
| Receiving scoreboard data | Game time | Shot time |
| No data, default | Hours and minutes | Seconds |
| No data, time shifted | Minutes and seconds | Blank |
| Driven by a segment timer | Rep time | Rep number |

In time-of-day mode, deck clocks that share a channel and PAN ID keep one time between them.
The shared time also reaches CTS slim pace clocks and scoreboards on those settings.[^f985]
One clock is made the leader and holds the time; every other clock is set as a follower.
F985 warns that the followers will misbehave if more than one leader is set. A new time
entered on the leader goes out to the followers once its menu is closed.[^f985] The leader
and follower roles are a later addition. The 2015 edition of the guide has no such setting:
every clock carries the hour and minute menus, and a time changed on any one of them is
passed to the rest.[^f985a]

The upper row can be switched to show minutes and seconds, which leaves the large digits
dark. Brightness has three fixed steps plus an automatic mode that follows the light
sensor.[^f985] A [WTTC-1](../scoreboard-control/wttc-1.md) or a System 6 can override the
sensor and set a fixed brightness.[^f985]

## Wireless link and addressing

The clock listens on the CTS 2.4 GHz scoreboard network. A controller and the displays it
drives must share a channel (0–11) and a PAN ID (0–15). The controller must also have each
display's module address switched on.[^f985] Displays sharing all three settings show
identical data. Two controllers sharing all three settings garble the displays.[^f985] CTS
multiplies the 12 channels by the 16 networks and says one facility can run 192 games at
once.[^cat15] Factory settings are module 1, channel 4 and PAN 0.[^f985]

All three settings can be made either from a single push button or on DIP switches. Holding
the button for two seconds opens a nine-item menu:[^f985]

1. Leader or follower
2. 12- or 24-hour format (leader only)
3. Hours (leader only)
4. Minutes (leader only)
5. Time shifting: the upper row shows HH:MM or MM:SS
6. Intensity: low, medium, high, or ambient light
7. Channel, 0–11, with a further step that turns the radio off
8. PAN ID, 0–15
9. Module address, 1–6

Settings take effect only when the menu is exited.[^f985] The 2015 edition lists eight
items, the same as above without the first.[^f985a]

The DIP switches reach further than the menu. Switch bank S1 sets the module address in
hexadecimal, and F985 lists `01` through `1E` as valid, with `1F` as a test mode. That is
thirty addresses where the push button offers six. Bank S2 sets the channel on its first
four switches and the PAN ID on the other four.[^f985] F985 does not explain the
difference. In practice the controllers CTS pairs with the clock address modules 1–6.[^f1050]

## Connection to controllers and consoles

F985 names four sources of data, and later CTS documents add a fifth.

- Tabletop controller. The [WTTC-1](../scoreboard-control/wttc-1.md) sends game and shot time
  once it shares the clock's channel, PAN and module. It also sets the horn's tones and
  volumes.[^f985] The current WTTC's two scoreboard ports can also drive a deck clock by
  cable.[^f1071]
- Handheld controller. The [WHC-1](../scoreboard-control/whc-1.md) sends game and shot time
  on the same terms.[^f985]
- Sports timing console. A [System 6](../../swimming/timers/system-6.md) or a
  [System 5](../../swimming/timers/system-5.md) with its water polo program loaded can feed
  the clock. Two of the console's scoreboard channels must be at their factory defaults, channel 1
  shown on module 1 and channel 2 on module 3; the console's Define Module submenu restores
  both in one step. On a System 6 the game setup must also be set not to show running
  tenths.[^f985] The console reaches the clock either through an `R-xxDC` data cable or
  wirelessly through a [WA-2](../scoreboard-control/wa-2.md) adapter set for multisport
  scoreboards.[^f985][^ds18] The [WA-3](../scoreboard-control/wa-3.md) guide covers the same
  job: it lists deck clocks among the MS- multisport boards and requires them to be at address
  1 in that mode.[^f1045]
- Gen7 timer. A [Gen7](../../swimming/timers/gen7-legacy.md) timer sharing the clock's channel
  and PAN sends the time of day only.[^f985]
- Segment timer. The [WHC-2](whc-2.md), released after F985 was printed, runs interval sets on
  deck clocks.[^f1050]

F985 names both the System 6 and the System 5. The 2015 catalogue and the current product
page name only the System 6.[^f985][^cat15][^ctsdc]

## Power and batteries

The clock runs on two Powersonic PS1270 sealed gel-cell batteries or on mains power. F985
gives the internal supply as 150 W, accepting 100–240 V at 50/60 Hz and at most 2 A. The
datasheets describe the same input as 120/240 VAC, autosensing.[^f985][^ds18]

Mains power is allowed only indoors and away from water. F985 requires battery operation
outdoors or anywhere near a pool deck, and says the clock should be charged only indoors.[^f985]
The clock charges whenever it is plugged in, shows green indicators while charging, and
switches to a trickle charge once the cells are full. CTS asks for at least eight hours of
charging after every use and recommends leaving the clock plugged in during storage. The
clock turns itself off before the cells discharge far enough to be damaged.[^f985] The 2015
edition gives the thresholds: a red battery lamp on the front comes on once the two cells in
series have fallen to 22 V, and the clock powers down at 20 V.[^f985a] None of the CTS
documents cited here gives a run time.

The clock ships with the batteries' red leads disconnected, and they must be connected
before first use.[^f985] Replacement cells are CTS part `R-420-003`. They are always
replaced as a pair, and are reached from under covers at the clock's feet.[^f985] CTS sells
the same part as the battery for its start systems.[^ctsdc]

## Documentation and availability

Two editions of the user guide are known. F985 Rev. 201505 (©2015) is the earlier. It has the
eight-item menu, gives the battery thresholds, and ends with a European declaration of
conformity.[^f985a] F985 Rev. 202007 (©2020) is the edition CTS hosts. It adds the leader and
follower setting and a section on the Gen7 timer, and it drops the European
declaration.[^f985] Both editions give the same three MS- model numbers.[^f985a][^f985]

The European declaration in the 2015 edition is not specific to the deck clock. It covers the
CTS multisport scoreboard family as a whole, with the model given only as `MS-XXXX`. It was
signed in Loveland on 17 January 2013 and cites the EU low voltage, electromagnetic
compatibility and RoHS directives then in force.[^f985a] Its date is therefore not evidence
that the deck clock existed in 2013.

CTS lists the clock under three product pages: as a deck clock for training, as a game and
shot clock for water polo, and in a water polo package with the `WP-1700` portable
scoreboard.[^ctsdc][^ctswp][^ctspkg] None of them shows a price. The company's online shop has
listed a factory-refurbished single clock as `DC-1500.S` at US$1,760, reduced from US$2,350,
with a one-year limited warranty.[^ctsshop] Two dealers checked in September 2026 sold new
clocks only in pairs, KAP7 at US$4,900 a pair and Recreonics at US$5,140.99.[^kap7][^recreonics]

## Specifications

| | |
|---|---|
| Type | Portable multisport game, shot and pace clock |
| Part number | `DC-1500`, `DC-1501`, `DC-1502`[^ds18][^ctsdc]; model numbers `MS-0043`, `MS-0044`, `MS-0045`[^f985] |
| Upper digits | Four, 5 in (12.7 cm): game time, or time of day[^ds18] |
| Lower digits | Two, 10 in (25.4 cm): shot time, or seconds[^ds18] |
| Digit colour | Mixed red and amber, all red, or all amber[^ds18] |
| Brightness | Low, medium, high, or ambient light sensor[^f985] |
| Wireless | 2.4 GHz; channel 0–11, PAN ID 0–15[^f985] |
| Module address | 1–6 by push button; `01`–`1E` by DIP switch, `1F` test mode[^f985] |
| Factory settings | Channel 4, PAN 0, module 1[^f985] |
| Horn | Internal; tones and volumes set per function from the tabletop controller[^f985] |
| Dimensions | 32 × 18.5 × 12 in (81.3 × 47 × 30.5 cm)[^ds18] |
| Weight | 30 lb (13.6 kg)[^ds18] |
| Enclosure | Polyethylene[^f985] |
| Power | 150 W supply, 100–240 V, 50/60 Hz, 2 A max[^f985]; datasheet: battery or 120/240 VAC autosensing[^ds18] |
| Batteries | Two Powersonic PS1270 gel cells, UL recognized (MH20845)[^f985] |
| Low battery | Red lamp at 22 V; shutdown at 20 V[^f985a] |
| Standards | UL 48; CAN/CSA C22.2 No. 207; FCC 47 CFR 15 Subpart B, Class A; ICES-003[^f985] |
| Manufacture | Loveland, Colorado[^ds18] |

## Part numbers and accessories

CTS has used two sets of numbers for the clock. The 2018 and 2023 datasheets and the 2026
product page use ordering numbers that follow digit colour.[^ds18][^ds23][^ctsdc] Both
editions of the user guide, from 2015 and 2020, use three model numbers in the MS- series, which CTS uses for its multisport
displays and prints on each unit's serial label.[^f985a][^f985][^f1045] Neither set of documents refers
to the other, and none of them says which MS- number matches which DC- number.

- `DC-1500`, mixed red and amber digits[^ds18]
- `DC-1501`, all red digits[^ds18]
- `DC-1502`, all amber digits[^ds18]
- `DC-1500.S`, factory-refurbished clock[^ctsshop]
- `MS-0043`, `MS-0044`, `MS-0045`, model numbers from F985, colours not stated[^f985]
- `R-420-003`, replacement battery (Powersonic PS1270), used in pairs[^f985][^ctsdc]
- `WTTC-1`, wireless tabletop controller[^ds18]
- `WHC-1`, wireless handheld controller[^ds18]
- `WHC-2`, wireless handheld segment timer[^f1050]
- `WA-2`, 2.4 GHz wireless adapter for a timing console[^f985]
- `R-xxDC`, data cable from a timing console[^f985]

## See also

- [Pace clocks](index.md): the pace clocks overview
- [Slim pace clocks](slim-pace-clock.md): the wall-mounted clocks it keeps time with
- [Handheld segment timer](whc-2.md): the interval controller that drives it in training
- [WTTC-1](../scoreboard-control/wttc-1.md): the tabletop controller for water polo
- [WHC-1](../scoreboard-control/whc-1.md): the handheld scoring controller
- [WA-2](../scoreboard-control/wa-2.md) and [WA-3](../scoreboard-control/wa-3.md): wireless adapters for console data
- [Multisport portable scoreboard](../scoreboard/multisport-portable-scoreboard.md): the scoreboard it is sold alongside for water polo
- [System 6](../../swimming/timers/system-6.md): the timing console that can feed it water polo data
- [Water polo equipment](../../water-polo/index.md): the water polo equipment section
- [Colorado Time Systems](../../../vendors/colorado-time-systems.md): the manufacturer

## References

[^f985]: [Colorado Time Systems, Deck Clock User Guide (F985 Rev. 202007)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Multisport%20Electronic%20Scoreboards/LED%20Scoreboards/Deck_Clock_User_Guide_F985.pdf).
[^f985a]: Colorado Time Systems, Deck Clock User Guide (F985 Rev. 201505, ©2015).
[^ds18]: Colorado Time Systems, Deck Clock datasheet (Rev 05/18).
[^ds23]: Colorado Time Systems, Water Polo: Colorado Time Systems' Deck Clocks datasheet (Rev 07/23).
[^ctsdc]: [Colorado Time Systems, Deck Clock for Training (DC-1500)](https://coloradotime.com/products/deck-clock-for-training-dc-1500) (current listing, as of 2026).
[^ctswp]: [Colorado Time Systems, Game/Shot Clock for Water Polo (DC-1500)](https://coloradotime.com/products/gameshot-clock-for-water-polo-dc-1500).
[^ctspkg]: [Colorado Time Systems, Wireless Portable Scoreboard and Shot Clocks (WP-1700 / DC-1500)](https://coloradotime.com/products/wireless-portable-scoreboard-and-shot-clocks-wp-1700-dc-1500).
[^ctsshop]: [Colorado Time Systems shop, Deck Clock / Pace Clock (DC-1500.S), Refurbished](https://shop.coloradotime.com/products/deck-clock-pace-clock-dc-1500-s-refurbished) (September 2026).
[^kap7]: [KAP7 International, Colorado Wireless Shotclock Pair](https://www.kap7.com/products/wireless-shotclock-pair) (September 2026).
[^recreonics]: [Recreonics, Colorado Time Systems Wireless Deck Clocks, pair](https://www.recreonics.com/product/colorado-time-systems-wireless-deck-clocks-pair/) (September 2026).
[^cat15]: Colorado Time Systems, Complete Timing, Scoring, Training and Display Solutions catalogue (2015).
[^arch]: Colorado Time Systems, Gen7 Legacy Architectural Guidelines (©2026), water polo shot clocks.
[^f1045]: Colorado Time Systems, 2.4 GHz Wireless Adapter WA-3 User Guide (F1045 Rev. 202007), multisport boards.
[^f1050]: Colorado Time Systems, Wireless Handheld Segment Timer Controller User Guide (F1050 Rev. 202103, ©2021).
[^f1071]: Colorado Time Systems, WTTC Water Polo User Instructions (F1071 Rev 202501), scoreboard ports.
[^wacr]: [World Aquatics, Competition Regulations](https://resources.fina.org/fina/document/2026/02/18/e6815ecc-06d9-4f0b-98e9-4c441cf5e6a3/2026-02-18_World-Aquatics_CR-Final.pdf), Part Six, 9 and 21.12.
[^nfhs]: NFHS, Swimming, Diving and Water Polo Rules Book 2012-13, Water Polo Rule 1-2 (Clocks, Score).

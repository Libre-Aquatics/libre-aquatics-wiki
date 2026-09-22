---
title: Colorado Time Systems Handheld Segment Timer
description: >-
  The handheld segment timer, WHC-2, is a Colorado Time Systems wireless controller
  that runs interval sets on slim pace clocks, deck clocks and portable scoreboards.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Handheld Segment Timer
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Part number
    value: '`WHC-2`'
  - label: Type
    value: Wireless handheld interval controller
  - label: Capacity
    value: 10 sets of up to 50 reps
  - label: Wireless
    value: 2.4 GHz; channel 0–11, PAN ID 0–15, module address 1–6
  - label: Radio
    value: 'Certified module, FCC ID `OUR-XBEEPRO` or `MCQ-XBEE3`'
  - label: Power
    value: Two AA batteries, about 8 hours
  - label: Status
    value: Current
  - label: Manual
    value: Wireless Handheld Segment Timer Controller User Guide (F1050 Rev. 202103)
---

<!--
Research notes, handheld segment timer. Built out from a stub in September 2026.

Held sources and what each supports. F1050 (Rev. 202103, ©2021, under
sources/vendors/colorado-time-systems/pace-clocks/) is the spine: product description,
quick start, menu, interval timing, signal loss troubleshooting and both conformity
declarations. The earlier stub had read only the product description; everything in this
article beyond the capacity figures and the battery comes from the sections it skipped.

F972, the slim pace clock user guide (Rev. 202509, ©2025), is the second source and the stub
did not know about it. It is the only held document besides F1050 that prints the string
WHC-2: its power-on routine lists the four things a clock will take data from, the WTTC-1
tabletop controller, the WHC-1 handheld controller, the WHC-2 segment timer, and a CTS
console (System 6, System 5 or System 4000), and it carries a Segment Timer subsection
telling the operator to match channel, PAN and module. It also supplies the display side:
model numbers MS-0037 through MS-0040, the four- and six-digit split, and factory defaults
of channel 4, PAN 0, module address 1.

Supporting: F985 (deck clock, Rev. 202007), F1045 (WA-3 adapter), F970 (WHC-1), F904 and
F910 (wireless pro, portable and standard pace clocks), F941 (900 MHz wireless judging),
and the 2015 CTS catalogue.

The radio, which is the article's one genuinely independent line of evidence. F1050's North
American conformity block names FCC ID OUR-XBEEPRO or MCQ-XBEE3 and IC 4214-XBEEPRO or
1846A-XBEE3. Those are registered to MaxStream and to Digi International respectively, for
the XBee-PRO and the XBee 3; Digi bought MaxStream in 2006, so the pair spans the two ends
of one module family rather than naming two unrelated parts. That is consistent with the
controller's own T-Level menu item, which reports which radio version is fitted. Note what
is the vendor's and what is ours. CTS names the modules itself: F1050, F970, F972 and F1045
all print "Contains: Model xBeePRO Radio" and "xBee3 Radio" on the line after the FCC ID, so
the XBee identification is CTS's own and needs no inference. What is inferred is the rest,
the attribution of the registrations to MaxStream and Digi and the conventional spellings
XBee-PRO and XBee 3, which come from the FCC and IC registers rather than from CTS.

Why the signal scale runs backwards, which no CTS document explains. F1050 puts the
received signal strength on the scoreboard rather than on the controller, gives its range as
24 to 64 hexadecimal, and says a lower number is the stronger signal. Digi documents its DB
command as returning the last packet's RSSI as the absolute value of a negative dBm figure
in hex, so 0x24 is about -36 dBm and 0x64 about -100 dBm and the direction follows. Treat
the mapping as inference from Digi's documentation of the module, which is how the body puts
it. Note also that CTS describes the same readout differently in F1071, the WTTC water polo
instructions, where it is called a measure of noise rather than of strength: same direction,
no range given. The Gen7 guides F1034 and F1058 mention the feature without a range either.

The same radio, four products. The identical FCC and IC block appears in F1050 (WHC-2),
F970 (WHC-1), F1045 (WA-3) and F972 (slim pace clocks). A different module, FCC ID
Q7V-3F090003X, appears in F904 and F910, the wireless pro and portable pace clocks, and in
F941, which is titled for 900 MHz and identifies that part as a Wi.232DTS. So CTS ran two
wireless lines at once and they do not interoperate. This is the basis for the statement
that a WHC-2 cannot drive a pace clock converted by the K-PCW-1 upgrade kit (F917); no CTS
document says so in one place, and F917 itself gives no band, no PAN and no module, only a
mechanical retrofit and an FCC label part number. The inference is from the band.

Module 1-6 is a limit of the controller, not of the displays. Both F972 and F985 expose 1-6
at the clock's push-button menu, but F985's DIP table accepts 01 to 1E hexadecimal with 1F
reserved for a test mode. So a deck clock can hold an address a handheld cannot reach. Worth
checking against a WTTC-1 manual, which this pass did not read, to see whether the tabletop
controller reaches further.

Discrepancies recorded rather than resolved. The WA-3 exposes PAN 0 to 7 on three DIP
switches and its datasheet claims eight networks per channel, where F972, F985, F970 and
F1050 all give 0 to 15 and the 2015 catalogue claims sixteen. Twelve channels times sixteen
networks is the catalogue's 192 figure, and it matches the channel and PAN ranges exactly,
so the adapter is the outlier and reaches half the network space. Separately, the slim pace
clock datasheet (Rev 03/14) gives 15 and 20 lb for the four- and six-digit clocks where F972
gives 20 and 28 lb; that belongs on the slim pace clock page and is recorded there.

Dating. F1050 is Rev. 202103, March 2021. Its European declaration is dated 28 January 2019
and covers model WHC-X, the same wildcard F970 declares, which is the cleanest evidence that
CTS treats the WHC-1 and WHC-2 as one platform. F970's own declaration is dated 17 January
2013 while citing directives issued in 2014, an inconsistency that belongs in whc-1.md
rather than here.

Availability, checked this pass. CTS lists the product at
coloradotime.com/products/wireless-handheld-segment-timer, offers the F1050 guide and a
video from that page, and describes the radio as 2.4 GHz integrated wireless. The central
manuals index at coloradotime.com/support/manuals does not list F1050, though it lists F970,
F972 and F985, so the guide is reachable only from the product page. Dealers including
SwimOutlet and Recreonics carry the product.

A stale note retired. The previous version of this comment said whc-1.md wrongly treated
F1050 as a WHC-1 source and asked for that to be fixed. It does not: whc-1.md cites F970,
and F1050 appears nowhere in it. Either the note was written against an earlier draft or the
fix landed without this page being updated. Do not go looking for that error again.

Still to research: the physical dimensions and weight, which F1050 gives nowhere; the part
numbers of anything supplied with it; the operating range, which the 2015 catalogue claims
as 1,000 ft for the tabletop and handheld controllers but which F1050 does not state;
whether the WTTC-1 reaches module addresses above 6; what the rep-order move function is for
in practice; and the multisport portable scoreboard, which is named as a target display here
and has no manual or model number in the collection.
-->

The handheld segment timer, `WHC-2`, is a
[Colorado Time Systems](../../../vendors/colorado-time-systems.md) (CTS) wireless controller
that stores interval sets and runs them on a pace clock or a scoreboard over a 2.4 GHz radio
link.[^f1050] It holds ten sets of up to fifty repeats each and reaches any CTS multisport
display that shows four digits of time, with no cable between the controller and the display
and no timing console in the loop.[^f1050][^f972]

## Role in training

The segment timer holds the workout and the display only shows it. The
[pace clocks overview](index.md) sets out the alternatives, which are a clock programmed at
the unit itself, a timing console running a pace clock program, and the wired
[pace clock controller](upc-c.md) that preceded this one. Two things separate the segment
timer from that console: its link needs no cable, and it fits in one hand.

When the controller is switched off, a clock that is still powered falls back to showing the
time of day, which the segment timer can also set.[^f1050]

## Design and controls

The controller is a battery-powered handheld with a screen and a keypad built around four
arrow keys with an enter key at their center. Paging keys move the rep list a screen at a
time, a plus and minus pair changes whichever value is highlighted, and separate start, stop,
reset and cancel keys run a set. Power-on is a press and hold of the minus key; power-off
lives in the menu and has no key of its own.[^f1050]

Two AA cells run it for about eight hours, and CTS recommends rechargeables.[^f1050]

The menu opens from a label above the rep display, highlighted with the arrow keys and
confirmed with enter, and holds three items: the time-of-day setting, the wireless connection
parameters, and power-off. It cannot be opened while a set is running, so the clock has to be
stopped first.[^f1050]

## Sets and reps

A set is a list of repeats, and the controller stores ten of them. Each set holds up to
fifty reps, and every rep carries its own interval, so a set need not run one time over and
over.[^f1050]

Every rep carries four settings:[^f1050]

- a duration entered as hours, minutes and seconds, with the hours field running to 99 and
  the minute and second fields to 59
- a direction, so that an individual rep counts up or counts down
- a beep of 0 to 9 seconds
- a position, since a rep can be moved up or down the order after it has been entered

At the set level the controller copies, pastes and clears, so a session built once can be
duplicated into the other nine slots and edited from there.[^f1050] Running a set means
selecting its first rep and pressing start; reset restarts the current rep rather than the
whole set.[^f1050]

The capacity is far below the [pace clock controller](upc-c.md)'s fifty workouts of thirty
sets, and the two are sold alongside each other, neither having replaced the
other.[^f901][^ctspc][^ctsstp]

## Displays it drives

Any CTS multisport display carrying four digits of time will take the segment timer's
data.[^f1050] What appears on it depends on the digit count. Four digits carry the current
rep as a minute and second figure. Six give room for the rep number alongside it, so the
swimmer reads the position in the set as well as the time running.[^f1050]

CTS names three display types: the slim pace clocks in both digit counts, the deck clocks,
and the multisport portable scoreboards.[^f1050] These are one addressable family rather
than three unrelated products. The [WA-3](../scoreboard-control/wa-3.md) guide defines it by
part number: a multisport board is one whose part number opens with `MS-`, a class that
takes in the deck clocks, the portable scoreboards and the multisport mini scoreboards. A
label at the right-hand end of the enclosure carries it.[^f1045] The
[slim pace clock](slim-pace-clock.md) guide confirms the arrangement from the other end,
listing the segment timer beside the [WTTC-1](../scoreboard-control/wttc-1.md) tabletop
controller, the [WHC-1](../scoreboard-control/whc-1.md) handheld controller and a CTS
console as the four sources a clock will accept.[^f972]

One class of CTS pace clock is out of reach. The wireless pro, portable and standard pace
clocks, and any clock converted by the `K-PCW-1` upgrade kit, run on a radio with a
front-panel channel switch and no network or module addressing at all.[^f904][^f910] Neither
of those guides gives a band: they print only the FCC ID `Q7V-3F090003X`. The band comes
from F941, which is titled for 900 MHz, identifies that same part as a Wi.232DTS, and
reserves its channels 1 to 8 because CTS wireless pace clocks use them.[^f941] Nothing
in the CTS documentation states the consequence in one place, but a controller on 2.4 GHz
cannot reach a clock on 900 MHz, so the segment timer and those clocks do not work together.

## Wireless link

Three settings have to agree between the controller and every display it drives: the radio
channel, 0 to 11; the PAN ID, which is the network number, 0 to 15; and the module address,
1 to 6, which picks out one display on that network.[^f1050][^f972] A
display announces all three when it is powered up, cycling them after a segment test, so the
operator reads the values off the clock and enters the same ones on the
controller.[^f1050][^f972] Mismatch any of the three and the display receives nothing.[^f1050]

The channel and PAN ranges are the figures behind CTS's marketing arithmetic: twelve
channels and sixteen networks on each is the 192 simultaneous games the company advertises
for this equipment.[^cat15] The [WA-3](../scoreboard-control/wa-3.md) adapter is the
exception, exposing eight networks on its switches where the rest of the equipment gives
sixteen.[^f1045][^wa3sheet]

Module 1 to 6 is a limit of the controller rather than of the displays. A
[deck clock](deck-clock.md)'s own switch bank accepts addresses from `01` to `1E` in
hexadecimal, so a board can be set to an address no handheld can select.[^f985]

Three further items sit on the connection screen. A field labeled `T-Level` reports which
generation of radio is fitted, a `Version` field gives the firmware level, and a program mode
puts the controller into a state where its firmware can be replaced over the air, which CTS
says to use only when its technicians ask for it.[^f1050]

## Signal strength and troubleshooting

Opening the connection screen turns on a signal-strength readout, and the number appears on
the scoreboard rather than on the controller. CTS gives its range as 24 to 64 in
hexadecimal, so letters can appear among the digits, and says that a lower number is the
stronger signal.[^f1050]

That reads backwards until the radio is identified. Digi documents the `DB` command on the
XBee modules as returning the last packet's received strength as the absolute value of a
negative dBm figure, expressed in hexadecimal, so `24` corresponds to roughly -36 dBm and
`64` to roughly -100 dBm.[^digidb] On that reading the controller is displaying the module's
own diagnostic register unchanged, and the scale counts upward as the signal weakens. CTS
does not say this; it follows from the module's documented behavior. The company describes
the same readout as a measure of noise rather than of strength in its water polo
instructions for the tabletop controller, keeping the direction but changing the
explanation.[^f1071]

When no number appears at all the fault is in the addressing, and CTS sends the operator
back to the channel and PAN settings at both ends. A number that is high, or that stops
updating, points at distance, interference, a damaged antenna on the receiving board, or the
angle between the two units; the remedies CTS offers are to close the distance, to move both
ends to a different channel and preferably to one end of the range, to check the antenna,
and to reorient one of the units.[^f1050]

## Radio and conformity

The controller does not hold an FCC grant of its own. It contains a certified module, and
the manual names two: FCC ID `OUR-XBEEPRO` or `MCQ-XBEE3`, with the Canadian equivalents
`4214-XBEEPRO` and `1846A-XBEE3`.[^f1050] CTS also names the modules itself on the following
line, as an xBeePRO or an xBee3 radio.[^f1050] The registrations behind those names belong
to MaxStream and to Digi International, for the XBee-PRO and the XBee 3, both 2.4 GHz
modules on IEEE 802.15.4.[^fccpro][^fcc3] Digi bought MaxStream in 2006, so the two identifiers bracket one
module family across its generations.[^digi06] That matches the connection screen's radio-version field, which exists
because either generation may be fitted.

The same pair of identifiers appears in the manuals for the
[WHC-1](../scoreboard-control/whc-1.md), the [WA-3](../scoreboard-control/wa-3.md) adapter
and the slim pace clocks, so one radio runs across the controllers, the adapter and at least
some of the displays.[^f970][^f1045][^f972] It is not the only radio CTS uses: the 900 MHz
pace clocks and the 900 MHz wireless judging equipment carry a different module
entirely.[^f904][^f941]

The European declaration of conformity names model `WHC-X` where the product itself is the
`WHC-2`, and the WHC-1's manual carries the same wildcard, which is the clearest indication
that CTS builds the two as one platform.[^f1050][^f970] The declaration is dated January
2019 and cites the low-voltage, electromagnetic compatibility, hazardous-substances and
waste-equipment directives.[^f1050]

## Documentation and availability

CTS lists the segment timer as a current product and supplies the F1050 guide and an
instructional video from the product page.[^ctsstp] The guide is not on the company's
manuals index, which carries F970, F972 and F985 but neither F1050 nor the pace clock
controller's F901, so a buyer who looks in the obvious place will not find it.[^manuals] The
infobox names the document without linking it for that reason.

## Specifications

| | |
|---|---|
| Type | Wireless handheld interval controller |
| Part number | `WHC-2`[^f1050] |
| Capacity | 10 sets; up to 50 reps per set[^f1050] |
| Rep duration | Hours 0–99, minutes 0–59, seconds 0–59[^f1050] |
| Rep beep | 0–9 s[^f1050] |
| Count direction | Set per rep, up or down[^f1050] |
| Wireless | 2.4 GHz[^f1050][^ctsstp] |
| Channel | 0–11[^f1050] |
| PAN ID | 0–15[^f1050] |
| Module address | 1–6[^f1050] |
| Signal readout | 24–64 hexadecimal, shown on the display; lower is stronger[^f1050] |
| Radio module | FCC ID `OUR-XBEEPRO` (MaxStream XBee-PRO) or `MCQ-XBEE3` (Digi XBee 3)[^f1050][^fccpro][^fcc3] |
| Power | Two AA batteries, about 8 hours[^f1050] |
| Manufacture | Loveland, Colorado[^f1050] |

## See also

- [Pace clock controller](upc-c.md): the wired controller that does the same job at greater capacity
- [Slim pace clocks](slim-pace-clock.md): the clocks it most often drives
- [Deck clock](deck-clock.md): the multisport clock that doubles as a pace clock
- [Multisport portable scoreboard](../scoreboard/multisport-portable-scoreboard.md): the third display type it addresses
- [WHC-1](../scoreboard-control/whc-1.md): the scoring handheld built on the same platform
- [WTTC-1](../scoreboard-control/wttc-1.md): the tabletop controller for the same boards
- [WA-3](../scoreboard-control/wa-3.md): the adapter that puts console data on the same radio
- [Pace clocks](index.md): the pace clocks overview
- [Colorado Time Systems](../../../vendors/colorado-time-systems.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^f1050]: Colorado Time Systems, Wireless Handheld Segment Timer Controller User Guide (F1050 Rev. 202103, ©2021).
[^f972]: [Colorado Time Systems, Slim Pace Clock User Guide (F972 Rev. 202509)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Training%20Tools/Pace%20Clocks/Slim_Pace_Clock_User_Guide_F972.pdf).
[^f985]: [Colorado Time Systems, Deck Clock User Guide (F985 Rev. 202007)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Multisport%20Electronic%20Scoreboards/LED%20Scoreboards/Deck_Clock_User_Guide_F985.pdf).
[^f970]: [Colorado Time Systems, Wireless Handheld All Scoreboards Controller User Guide (F970 Rev. 202103)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Multisport%20Electronic%20Scoreboards/Multisport%20Controllers/WHC_All_Scoreboards_User_Guide_F970.pdf).
[^f1045]: Colorado Time Systems, 2.4 GHz Wireless Adapter WA-3 User Guide (F1045 Rev. 202007, ©2020), multisport board identification.
[^wa3sheet]: Colorado Time Systems, WA-3 Wireless Scoreboard Adapter datasheet (12 channels, 8 networks per channel).
[^f904]: Colorado Time Systems, Wireless Pro Pace Clock and Shot Clock User Guide (F904 Rev. 202507).
[^f910]: Colorado Time Systems, Wireless Portable and Standard Pace Clock and Shot Clock User Guide (F910 Rev. 202008).
[^f941]: Colorado Time Systems, Wireless Judging 900 MHz Frequency User Guide (F941 Rev. 20110720).
[^f1071]: Colorado Time Systems, WTTC Water Polo User Instructions (F1071), scoreboard signal readout.
[^f901]: Colorado Time Systems, Pace Clock Controller User Guide (F901 Rev. 1007, ©2007).
[^cat15]: Colorado Time Systems, Complete Timing, Scoring, Training and Display Solutions catalogue (2015).
[^digidb]: [Digi International, DB (Last Packet RSSI)](https://www.digi.com/resources/documentation/Digidocs/90001477/reference/r_cmd_db.htm), returned as the absolute value in hexadecimal.
[^fccpro]: [FCC ID OUR-XBEEPRO, MaxStream XBee-PRO OEM RF module](https://fccid.io/OUR-XBEEPRO) (2.4 GHz ISM band).
[^fcc3]: [FCC ID MCQ-XBEE3, Digi International XBee 3](https://fccid.io/MCQ-XBEE3) (2.4 GHz, IEEE 802.15.4; IC 1846A-XBEE3).
[^digi06]: [Digi International, Form 10-K for fiscal 2006](https://www.sec.gov/Archives/edgar/data/0000854775/000095013706013293/c10387e10vk.htm), MaxStream acquisition.
[^ctsstp]: [Colorado Time Systems, Wireless Handheld Segment Timer](https://coloradotime.com/products/wireless-handheld-segment-timer) (current listing, as of 2026).
[^ctspc]: [Colorado Time Systems, Pace Clocks and Shot Clocks](https://coloradotime.com/pace-clocks-shot-clocks).
[^manuals]: [Colorado Time Systems, Manuals](https://coloradotime.com/support/manuals) (F970, F972 and F985 listed; no F1050 or F901).

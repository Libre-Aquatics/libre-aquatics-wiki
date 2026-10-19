---
title: Colorado Time Systems Slim Pace Clock
description: >-
  The slim pace clocks are Colorado Time Systems wall-mounted LED clocks in four- and
  six-digit forms, driven wirelessly or run as synchronized time-of-day clocks.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Slim Pace Clock
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Part number
    value: '`SP-1400`/`SP-1401` (4-digit), `SP-1600`/`SP-1601` (6-digit); manual model numbers `MS-0037`–`MS-0040`'
  - label: Type
    value: Wall-mounted LED pace clock
  - label: Digits
    value: 13 in (33 cm), red or amber; four or six
  - label: Wireless
    value: 2.4 GHz; channel 0–11, PAN ID 0–15, module address 1–6
  - label: Controllers
    value: '[WHC-2](equipment/common/pace-clock/whc-2.md), [WTTC-1](equipment/common/scoreboard-control/wttc-1.md), [WHC-1](equipment/common/scoreboard-control/whc-1.md)'
  - label: Dimensions
    value: 19.25 × 42.25 × 2.8 in (4-digit), 19.25 × 63 × 2.8 in (6-digit), H × W × D
  - label: Weight
    value: 20 lb (9 kg) and 28 lb (12.7 kg) per the 2025 manual; 15 and 20 lb per the 2014 datasheet
  - label: Power
    value: 150 W supply, 100–240 V, 50/60 Hz, max 2 A
  - label: Introduced
    value: By March 2014
  - label: Status
    value: Current
  - label: Manual
    value: Slim Pace Clock User Guide (F972 Rev. 202509)
    href: 'https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Training%20Tools/Pace%20Clocks/Slim_Pace_Clock_User_Guide_F972.pdf'
---

<!--
Research notes, slim pace clocks. Stub created while building out whc-2.md; built out to a full
article 2026-10-19.

Held and read in full:
- F972, Slim Pace Clock User Guide Rev. 202509, (c)2025, under
  sources/vendors/colorado-time-systems/pace-clocks/. Manufacturer given as Everlast Climbing
  Industries, Inc. DBA Colorado Time Systems.
  - Identification and radio: model numbers MS-0037 to MS-0040; a 150 W supply rated
    100-240 V, 50/60 Hz, 2 A maximum; FCC ID OUR-XBEEPRO or MCQ-XBEE3; IC 4214-XBEEPRO or
    1846A-XBEE3.
  - Display and enclosure: the four-digit clock shows hours and minutes or minutes and seconds;
    the six-digit shows hours, minutes and seconds. Metal enclosure for indoor or outdoor use,
    digits behind a clear plastic cover, antenna inside.
  - Factory defaults: channel 4, PAN 0, module 1.
  - Mounting: keyhole slots 0.359 in at the bottom and 0.172 in at the top; slot spacing 48 in
    (6-digit) and 36.75 in (4-digit); weights 28 lb (12.7 kg) and 20 lb (9 kg).
  - Power cord: a recessed cord leaves the left end through a strain relief and must reach an
    outlet (120 or 230 V) within 6 ft; outdoors it needs an outdoor-rated receptacle.
  - Hard wiring is for an electrician: the terminal block sits behind the second digit from the
    left, with knockouts on both ends. A cable cover, sold as an option, screws on at either
    end to hide the power lead.
  - Power-on routine: all LEDs on, then each digit shows its position, then the firmware
    version, then the address, channel and PAN (A01, C08, P00 style) cycled at least three
    times. Err1 means the control board's coin cell is low (CR1632, CTS R-420-014).
  - Data sources named: WTTC-1, WHC-1, WHC-2, and a CTS sports console (System 6, System 5 or
    System 4000).
  - Leader and follower: one leader only; more than one breaks the followers.
  - Menu: hold 2 s to enter, hold 1 s to advance. Items are leader/follower, 12/24 h, hours,
    minutes, time shifting, intensity, channel, PAN and module. Followers skip the time items,
    and settings save on exit. 12 h p.m. shows as the fourth digit's decimal point.
  - Channel and module ranges: channel 0-11, then "--" for wireless off; PAN 0-15; module 1-6,
    which the text says wraps to 0.
  - Exiting the menu zeroes the seconds, and followers can take up to a minute to agree.
  - The WTTC-1 can override the light sensor with a fixed brightness.
  - DIP alternative: power off, remove the weather cover (quarter-turn studs) and the second
    digit. Channel is on S2 switches 1-4 and PAN on S2 switches 5-8, binary with switch 1 the
    low bit. S1 switches 6-8 must not be changed; S1 switches 1-5 do nothing on this clock.
  - Standards: UL 48, CSA C22.2 No. 207, FCC Part 15 subpart B class A, ICES-003.
- Datasheet "Slim Pace Clocks", Rev 03/14 (file held as cts-slim-pace-clocks-sp-1400-sp-1601;
  the same PDF is still served on coloradotime.com and its metadata says it was made
  20 March 2014).
  - Part numbers: SP-1400/SP-1401 four-digit and SP-1600/SP-1601 six-digit, red/amber.
  - Size and weight: 1.6 ft x 3.52 ft x 2.8 in and 15 lb; 1.6 ft x 5.25 ft x 2.8 in and 20 lb.
  - Display and power: 13 in digits; 120/240 VAC autosensing.
  - Construction: powder-coated aluminium enclosure, conformal-coated digits and boards, and
    a patch antenna on a digit behind the Lexan cover.
  - Radio and clock: 12 radio channels; a real-time clock chip; made in Loveland.
- CTS 2014 scoreboard catalogue (reference/cts-web/): lists SP-1400 and SP-1600 only, with the
  same figures (W x H order). Its four-digit entry says hours and minutes only.
- CTS Complete Timing, Scoring, Training and Display Solutions 2015 catalogue: the same wording
  as the datasheet, on the page with the deck clock.
- F1050 (segment timer guide): the four-digit slim clock shows rep minutes and seconds; the
  six-digit adds the rep number.
- F985 (deck clock guide): has module switches on S1 1-5 (01-1E). The slim clock lacks these.

Web (fetched 2026-10-19):
- CTS product page "Slim Pace Clocks for Training" (coloradotime.com/products/...).
  - Dimensions: 19.25 x 42.25 x 2.8 in and 19.25 x 63 x 2.8 in.
  - Weights: 15 and 20 lb, still the 2014 figures.
  - Claims "visible from up to 500 ft".
  - Brands CTS as "A Playcore Company".
  - No price is shown.
- CTS "Pace/Shot Clock Guide" PDF (made 11 February 2021). It compares PC-STANDARD,
  PCW-STANDARD, PC-PORTABLE, PC-PRO-R, PCW-PRO, SP-1400, SP-1600 and DC-1500. For the slim
  clocks it lists time of day, wireless, basic pace clock and the WHC-2 only (no WTTC or WHC-1,
  unlike F972), AC only with no battery, and 13 in red or amber digits.
- CTS shop listing for a refurbished 6-digit (SP-160x.S) returned 404.
- Search snippets for Kiefer gave $1,795 and $1,878.50 for a red four-digit clock (SKU
  LTFSP-1400R). Both pages returned 404 when fetched, so these prices are unverified and are not
  used.

Discrepancies:
- Weight, which is real and unresolved. The 2014 datasheet (still on the product page) gives
  15 lb and 20 lb; F972 gives 20 lb and 28 lb for the four- and six-digit clocks.
- Numbering: SP- part numbers versus MS- model numbers. Which MS number is which variant is not
  stated.
- Controllers: the 2021 guide names only the WHC-2, while F972 names five sources.

Still to research: the MS-to-SP mapping; price; how the System 4000/5/6 consoles reach the clock
(presumably through a WA-2 or WA-3 wireless adapter, not stated in F972); the introduction date
before 2014.
-->

The slim pace clocks are wall-mounted LED clocks made by
[Colorado Time Systems](../../../vendors/colorado-time-systems.md) (CTS) in four-digit and
six-digit versions.[^f972] Left alone they show the time of day, kept in step over a 2.4 GHz
radio link with the other clocks in the building. Driven by a CTS wireless controller they show a
swim set or game time.[^f972] The enclosure is 2.8 in deep, from which the line takes its name,
and the digits are 13 in tall.[^datasheet] A CTS datasheet for the line dates from March
2014, and the clocks were still sold in 2026.[^datasheet][^product]

## Role in training

This section places the slim clocks among CTS pace clocks; the class as a whole is covered in
the [pace clocks overview](index.md). CTS presents the slim clock as a fixed wall display for both time of day and
pacing.[^f972] Without a controller it runs as a time-of-day clock. With the
[handheld segment timer](whc-2.md) it shows the reps and sets of a programmed workout. A
four-digit clock shows each rep's minutes and seconds, and a six-digit clock adds the rep
number.[^f1050] CTS's portable alternatives for the deck are the
[deck clock](deck-clock.md) and the [pace clock/shot clock](pace-clock-shot-clock.md), both
with batteries and horns that the slim clock lacks.[^guide]

## Models and naming

This section covers the four variants and the two numbering schemes CTS uses for them. The
2014 datasheet and the current product page give four part numbers:[^datasheet][^product]

| | Red digits | Amber digits |
|---|---|---|
| Four-digit | `SP-1400` | `SP-1401` |
| Six-digit | `SP-1600` | `SP-1601` |

The 2025 user guide does not use these numbers. It identifies the product as model numbers
`MS-0037` through `MS-0040`, the same `MS-` series CTS uses for its other multisport wireless
displays.[^f972] Four model numbers match four variants, but the guide does not say which is
which.[^f972]

The menu sets a four-digit clock to show the time as hours with minutes, or as minutes with
seconds. A
six-digit clock shows hours, minutes and seconds.[^f972] CTS's 2014 scoreboard catalogue lists
only the red `SP-1400` and `SP-1600`, and describes the four-digit clock as showing hours and
minutes.[^catalog2014]

## Design and hardware

The enclosure is powder-coated aluminium, rated for indoor or outdoor use, with a clear Lexan
weather cover over the digits.[^datasheet][^f972] CTS conformal-coats the digit boards and the
control board against corrosion.[^datasheet] Each digit is a separate board, screwed in place and
cabled to the control board, so a single digit can be taken out. The control board sits behind
the second digit from the left.[^f972]

The radio's patch antenna is mounted flat on one of the LED digits, behind the weather
cover.[^datasheet] Time is kept by a real-time clock chip, and the control board carries a coin cell whose
charge the clock checks at start-up.[^datasheet][^f972] Settings are made with a single push
button on the clock.[^f972] An ambient-light setting adjusts brightness to the room, and a
[WTTC-1](../scoreboard-control/wttc-1.md) tabletop controller can switch that off and set a
fixed brightness instead.[^f972]

## Installation and mounting

This section covers hanging and powering the clock. The clock hangs on screws through keyhole
slots in its back. The guide leaves the choice of fixings and the strength of the wall to the
installer.[^f972]

| | Four-digit | Six-digit |
|---|---|---|
| Keyhole spacing | 36.75 in | 48 in |
| Weight (2025 guide) | 20 lb (9 kg) | 28 lb (12.7 kg) |
| Weight (2014 datasheet) | 15 lb (6.8 kg) | 20 lb (9.1 kg) |

The two CTS documents disagree on weight by 5 to 8 lb, and the product page still carries the
2014 figures.[^f972][^datasheet][^product] Either the enclosure changed between 2014 and 2025 or
one document is wrong. The 2025 guide is the newer and more specific of the two, but neither
source explains the difference.

The clock ships with a power cord coiled inside the left end. It must reach a standard outlet
within 6 ft, and an outdoor clock needs an outdoor-rated outlet.[^f972] For a permanent
connection an electrician can remove the cord and wire mains directly to the terminal block
behind the second digit, entering through a knockout at either end.[^f972] An optional cover
hides a surface-run power cable on either side of the clock.[^f972] The power supply is rated at
150 W, accepting 100–240 V at 50 or 60 Hz.[^f972]

## Operation

This section covers what the clock does when switched on and how it is set up.

### Power-on

At power-up the clock lights every segment and has each digit show its own position number. It
then shows its firmware version, followed by its module address, channel and PAN, each repeated
at least three times (for example A01, C08 and P00).[^f972] Err1 at this stage means the coin
cell on the control board is low. The guide gives it as a CR1632, CTS part
`R-420-014`.[^f972]

### Time of day and synchronization

Clocks on the same channel and PAN keep the same time of day without a controller.[^f972] One
clock is designated the leader and holds the time. Every other clock is a follower. Setting the
time on the leader sends it to the followers when the leader's menu is closed. The guide warns
that a second leader on the same network stops the followers from working properly.[^f972]
Closing the menu also resets the seconds to zero, and a follower may take up to a minute to
match its leader.[^f972]

### Push-button menu

Holding the push button for two seconds opens a menu of nine items. A click changes the value
shown and holding for a second moves to the next item. Settings are saved only when the menu
closes.[^f972]

1. Leader or follower.
2. 12- or 24-hour format. In 12-hour format, the decimal point after the fourth digit marks
   p.m.
3. Hours.
4. Minutes.
5. Time shifting: whether a four-digit clock shows hours with minutes, or minutes with seconds. The guide
   says the minutes-and-seconds setting does not suit a six-digit clock.
6. Brightness: low, medium, high, or ambient light.
7. Channel, 0–11. A further step shows two dashes, which switches the radio off.
8. PAN ID, 0–15.
9. Module address, 1–6.

Items 2 to 4 appear only on the leader.[^f972] Format, time shifting, brightness, channel, PAN
and module are set on each clock separately, so that clocks in sun and shade can differ.[^f972]
Out of the box a clock is on channel 4, PAN 0, module 1.[^f972]

### DIP switches

Channel and PAN can also be set on DIP switch bank S2 on the control board, reached by
unplugging the clock and removing the weather cover and the second digit.[^f972] Switches 1–4
set the channel and 5–8 the PAN, as binary numbers with switch 1 as the lowest bit. On bank S1,
switches 6–8 must be left alone, and 1–5 have no function on this clock.[^f972] The module
address can therefore be set only from the menu.[^f972]

### Data sources

To show anything but the time of day, the clock must share a channel and PAN with a controller,
and the controller must have the clock's module number enabled.[^f972] The 2025 guide names
these sources:[^f972]

- the [handheld segment timer (WHC-2)](whc-2.md), for workout sets and reps
- the [WTTC-1](../scoreboard-control/wttc-1.md) wireless tabletop controller, for game time
- the [WHC-1](../scoreboard-control/whc-1.md) wireless handheld controller, for game time
- a CTS sports console: [System 6](../../swimming/timers/system-6.md),
  [System 5](../../swimming/timers/system-5.md) or [System 4000](../../swimming/timers/system-4000.md)

The guide does not say how a console reaches the clock. CTS's 2021 comparison of its pace and
shot clocks lists only the segment timer as a controller for the slim clocks.[^guide]

## Wireless

The radio is an XBee-PRO or XBee 3 module on 2.4 GHz.[^f972] The segment timer's guide lists the
same two modules.[^f1050] CTS's other 2.4 GHz products, such as the
[WA-3](../scoreboard-control/wa-3.md) wireless adapter, are covered on their own pages. CTS describes the band as having 12 operating channels, matching
the menu's 0 to 11.[^datasheet][^f972] A clock and its controller must share both channel and PAN, and the
controller turns on each display by its module address.[^f972] CTS's product page
says the digits can be read from up to 500 ft.[^product]

## Compared with the deck clock

The [deck clock](deck-clock.md) shares the slim clock's radio settings, menu and leader and
follower scheme. They differ in housing, power and the module switches.[^f972][^f985][^guide]

| | Slim pace clock | Deck clock |
|---|---|---|
| Mounting | Wall[^f972] | Free-standing on the deck[^f985] |
| Enclosure | Powder-coated aluminium[^datasheet] | Polyethylene[^f985] |
| Power | Mains only[^guide] | Mains or internal battery[^f985] |
| Horn | None[^guide] | Built in[^f985] |
| Module address by DIP switch | No; menu only[^f972] | Yes, S1 switches 1–5[^f985] |
| Digits | 13 in, four or six[^datasheet] | 5 in upper row, 10 in lower row[^guide] |

## Specifications

| | Four-digit | Six-digit |
|---|---|---|
| Part number | `SP-1400` red, `SP-1401` amber[^datasheet] | `SP-1600` red, `SP-1601` amber[^datasheet] |
| Display | Hours and minutes, or minutes and seconds[^f972] | Hours, minutes and seconds[^f972] |
| Digit height | 13 in (33 cm)[^datasheet] | 13 in (33 cm)[^datasheet] |
| Dimensions (H × W × D) | 19.25 × 42.25 × 2.8 in (48.9 × 107.3 × 7.1 cm)[^product] | 19.25 × 63 × 2.8 in (48.9 × 160 × 7.1 cm)[^product] |
| Weight | 20 lb (9 kg)[^f972]; 15 lb (6.8 kg) in 2014[^datasheet] | 28 lb (12.7 kg)[^f972]; 20 lb (9.1 kg) in 2014[^datasheet] |
| Keyhole spacing | 36.75 in[^f972] | 48 in[^f972] |
| Power | 150 W supply, 100–240 V, 50/60 Hz, 2 A max[^f972] | Same[^f972] |
| Radio | 2.4 GHz XBee-PRO or XBee 3; channel 0–11, PAN 0–15, module 1–6[^f972] | Same[^f972] |
| Standards | UL 48; CSA C22.2 No. 207; FCC Part 15 Class A; ICES-003[^f972] | Same[^f972] |

## Part numbers and accessories

This section lists the parts CTS names for the slim clocks.

- `SP-1400` and `SP-1401`, the four-digit clock in red and amber.[^datasheet]
- `SP-1600` and `SP-1601`, the six-digit clock in red and amber.[^datasheet]
- `MS-0037` to `MS-0040`, the model numbers in the 2025 guide.[^f972]
- `R-420-014`, the CR1632 coin cell on the control board.[^f972]
- An optional power-cable cover, for either end of the clock.[^f972]

## See also

- [Handheld segment timer](whc-2.md): the controller that runs workouts on it
- [Deck clock](deck-clock.md): the portable CTS clock on the same radio network
- [Pace clock/shot clock](pace-clock-shot-clock.md): the older CTS portable pace clock
- [WTTC-1](../scoreboard-control/wttc-1.md) and [WHC-1](../scoreboard-control/whc-1.md): the CTS controllers that send it game time
- [Pace clocks](index.md): the pace clocks overview
- [Colorado Time Systems](../../../vendors/colorado-time-systems.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^f972]: [Colorado Time Systems, Slim Pace Clock User Guide (F972 Rev. 202509)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Training%20Tools/Pace%20Clocks/Slim_Pace_Clock_User_Guide_F972.pdf) (2025).
[^datasheet]: [Colorado Time Systems, Slim Pace Clocks datasheet](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Datasheets/Slim_Pace_Clock.pdf) (Rev 03/14).
[^product]: [Colorado Time Systems, Slim Pace Clocks for Training](https://coloradotime.com/products/slim-pace-clocks-for-training).
[^guide]: [Colorado Time Systems, Pace/Shot Clock Guide](https://www.coloradotime.com/hubfs/CTS%20Website%20%20Assets/Datasheets/Pace%20Shot%20Clock%20Guide.pdf) (2021).
[^catalog2014]: Colorado Time Systems, scoreboard catalogue (2014), p. 19.
[^f1050]: Colorado Time Systems, Wireless Handheld Segment Timer Controller User Guide (F1050), product description.
[^f985]: Colorado Time Systems, Deck Clock User Guide (F985 Rev. 202007).

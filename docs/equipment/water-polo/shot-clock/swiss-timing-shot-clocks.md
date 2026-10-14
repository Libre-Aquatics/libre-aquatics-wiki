---
title: Swiss Timing water polo shot clocks
description: >-
  Swiss Timing's water polo shot clocks are free-standing LED displays with 24 cm digits,
  sold in kits of two or four with a power and horn unit and run from the Calypso WPO console.
tags:
  - Equipment
  - Timing
  - Water polo
infoboxTitle: Swiss Timing water polo shot clocks
infobox:
  - label: Manufacturer
    value: Swiss Timing
  - label: Part number
    value: '`3403.790` (shot clock with game time); kits `3403.950.CA` (two), `3403.951.CA` (four)'
  - label: Type
    value: Portable LED water polo shot clock
  - label: Display
    value: 24 cm red shot-time digits; 15 cm white game-time digits on the game-time model
  - label: Connection
    value: Harting 5-pin, RS-485 data and 24 V DC from the power and horn unit
  - label: Dimensions
    value: 600 × 600 × 92 mm (game-time model)
  - label: Weight
    value: 5.8 kg (shot time only); 6.8 kg (with game time)
  - label: Power
    value: 24 V DC from a 115/230 V AC power and horn unit
  - label: Console
    value: '[Calypso WPO console](equipment/water-polo/console/calypso-wpo-console.md); ARES'
  - label: Manual
    value: '[WPO Shot Clocks User''s Manual (3403.514.02)](https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3403.514.02_WPO_GT_Shotclock_User_Manual.pdf)'
---

<!--
Research notes, Swiss Timing water polo shot clocks. Surfaced while building out calypso.md;
built out 2026-10-13.

Held and read in full (sources/vendors/swiss-timing/pace-clocks/), with pages rendered by
PyMuPDF to read the drawings:
  - swiss-timing-wpo-shotclock-user-manual-3403.511: Water polo Shot Clocks, English and
    French. The cover says version 1.2, March 2014; the page footers say version 1.1. Kit of two
    LED displays, a power supply with horn, 30 m and 70 m cable winders, and the cable from the
    power unit to a Saturn console or an ARES. Power unit on 115/230 V AC, selected by moving a
    brown wire inside; clocks on 24 V DC from the unit; horn sounds when the clocks reach zero.
    Angled wide-based case; 24 cm digits. Mains equipment at least 3.5 m from the pool edge,
    2 m with a residual current device of 30 mA or less; the manual cites the standard as
    "IEC 60634-7-702" (the IEC swimming-pool installation standard is numbered 60364-7-702;
    flagged as a probable misprint). Two-clock layout: console data into the power unit, data
    out to the next device (scoreboard), one clock at the near end on the 30 m reel and one at
    the far end on the 70 m reel. Drawings show two red digits under an OMEGA mark. Power unit
    connectors: POWER Tuchel 3-pin male (L, N, earth); DATA IN and DATA OUT Tuchel 7-pin female,
    each with a +12 V output limited to 40 mA and a data pair; DATA OUT for the shot clock,
    Harting 5-pin male, pins TRx-, TRx+ (RS-485), GND, +24 V DC. Unit 6.2 kg, up to 350 VA,
    horn 114 dB. Clock: Harting 5-pin data in and out, same pinout; 5.8 kg. DIP switches: all
    eight off for normal mode; switch 4 on for test mode.
  - swiss-timing-wpo-gt-shotclock-user-manual-3403.514.02: WPO Shot Clocks, version 1.1,
    September 2023 (1.1 changed the screws for the floor stand). Kit: two or four clocks
    showing game time (white LEDs) and shot time (red LEDs), one power supply box with horn, one
    or two 30 m cables and 70 m cables, a cable to the WPO Saturn console, floor-standing kits.
    Clock 3403.790: 600 x 600 x 92 mm, 6.8 kg, game-time digits 15 cm white, shot-time digits
    24 cm red, black RAL 9005 housing; two fixing holes 260 mm apart, the lower 40 mm from the
    base; floor stand 3500.786, two transparent side feet fixed with M8 x 20 screws. Same 3.5 m
    and 2 m rule. Four-clock drawing (rendered): power box at the officials' table; each of its
    two shot-clock outputs runs 30 m (cable 3403.674) to a clock at one end of the field, which
    passes on 70 m (cable 3403.675) to a clock at the other end; power cable 1874.005 (5 m),
    console cable 1871.010 (10 m), a DATA OUT to the scoreboard. Same connector table. Power box
    6.2 kg, 350 VA max, 114 dB; the clock is also given as 350 VA max, which looks copied from
    the power box line.
  - The drawing of 3403.790 shows a decimal point in the shot-time digits.

Web (October 2026):
  - Swiss Timing, Calypso LED Shot Clocks datasheet, DOCM_WP_CalypsoShotClock_1020_EN.pdf (code
    Calypso_Shot Clocks/10-2015, PDF dated 6 October 2020), downloaded and read: clock follows
    the referee's start/stop through the Saturn water polo controller; two-digit 30 s shot time
    and four-digit game time; tenths on the game time in the last minute and on the shot time in
    the last 5 s; horn at zero; 24 V DC from an external power module; DC-DC converter for steady
    brightness (vendor feature list); 110 degree viewing angle; IP54; CE and RoHS. Power module
    380 x 200 x 310 mm, 6.2 kg, 300 VA at 115-230 V, 114 dB pneumatic horn. Kits for two and four
    clocks include a start/stop button for the controller and AC cables 3403.990 (two-clock kit)
    and 3403.991 (four-clock kit). Clocks described as 30/20 s.
  - AVK Group, "Shot clock Omega Calypso" (https://www.avkgroup.at/catalog/3403.951.CA/):
    3403.951.CA four, 3403.950.CA two; 50 x 35 x 53 cm, 5.8 kg, 24 cm digits, 24 V DC from the
    power and horn module, 30 VA max, work -10 to +50 C, store -20 to +80 C. The 5.8 kg and the
    size match the earlier shot-time-only clock, not 3403.790. Dealer claims FINA compliance.
  - Swiss Timing instruction-manuals page lists both 3403.511 and 3403.514.02 (October 2026).
  - Power and horn unit vs the Coyote horn: see coyote-horn.md. Same connector set; AVK gives the
    Coyote 210 x 350 x 225 mm, 7.8 kg, 113 dB; the manuals and datasheet give 6.2 kg and 114 dB,
    and the datasheet 380 x 200 x 310 mm. Unresolved; the article says only that the connectors
    match.

Discrepancies kept in the text: power 350 VA (manuals) vs 300 VA (datasheet) for the power
unit; the clock's own draw 350 VA (2023 manual) vs 30 VA (AVK); 30/20 s (datasheet) vs the
current 28/18 s rule (handled on the console page); the 2014 version number.

Still to research: part number of the shot-time-only clock; dates of the game-time model
(it is in the October 2015 datasheet, so not new in 2023); named events where these clocks were
used; whether the power unit is the Coyote.
-->

Swiss Timing makes free-standing LED shot clocks for water polo, sold under the Omega and
Calypso names. They are supplied in kits of two or four, with a power and horn unit that feeds
the clocks with 24 V DC and data from the match console.[^m2014][^m2023][^ds] The earlier clock
shows the possession time alone, in red digits 24 cm high. The current model, `3403.790`, adds
a four-digit game clock in 15 cm white digits above it.[^m2014][^m2023] When the shot time runs
out, the horn in the power unit sounds.[^m2014]

## Role in the scoring system

This section places the clocks in a Swiss Timing water polo setup; shot clocks in general are
covered in the [water polo shot clocks overview](index.md).

The clocks do no timing of their own. The match is run from a console at the officials' table,
which the documents call the Saturn or WPO Saturn console. This wiki covers it as the
[Calypso WPO console](../console/calypso-wpo-console.md).[^m2023][^ds] The 2014 manual also
names Swiss Timing's [ARES](../../swimming/timers/ares-21.md) timing system as a source.[^m2014]
The console sends data to the power and horn unit, which passes it to the clocks and onward to a
scoreboard.[^m2014][^m2023] Swiss Timing describes the clocks as following the referee's start
and stop commands through the console.[^ds]

A two-clock kit places one clock at each end of the pool; the four-clock kit doubles that to
two per end.[^m2014][^m2023] Swiss Timing's own [Montreal shot clocks](montreal-shot-clocks.md)
are a larger alternative, with 40 cm digits.[^montreal]

## Models

This section sets out the two clocks the manuals describe.

| | Shot clock | Shot clock with game time |
|---|---|---|
| Part number | Not given | `3403.790`[^m2023] |
| Display | Two red digits, 24 cm[^m2014] | Two red shot-time digits, 24 cm; four white game-time digits, 15 cm[^m2023][^ds] |
| Weight | 5.8 kg[^m2014] | 6.8 kg[^m2023] |
| Size | 50 × 35 × 53 cm (dealer)[^avk] | 600 × 600 × 92 mm[^m2023] |
| Mounting | Free-standing angled case[^m2014] | Floor stand `3500.786`[^m2023] |
| Documented in | Manual 3403.511, 2014[^m2014] | Datasheet, October 2015; manual 3403.514.02, 2023[^ds][^m2023] |

The earlier clock has an angled case on a wide base, which Swiss Timing says keeps it steady on
the deck.[^m2014] The game-time model is a flat square panel in a black housing. It stands on a
floor kit of two clear side feet, each fixed with a pair of M8 screws.[^m2023] The game-time
model already appears in Swiss Timing's datasheet coded October 2015, so the 2023 manual is not
its first documentation.[^ds] According to that datasheet, both displays switch to tenths of a
second near the end: the game clock in its last minute and the shot clock in its last five
seconds.[^ds]

## Power and horn unit

This section describes the unit that drives the clocks.

The power and horn unit runs on 115 or 230 V AC. The voltage is chosen inside the case by moving
a wire.[^m2014] The unit has five connectors:[^m2014][^m2023]

- POWER, a 3-pin Tuchel plug for the mains supply.
- DATA IN, a 7-pin Tuchel socket for the cable from the console.
- DATA OUT, a 7-pin Tuchel socket that passes the data on to a scoreboard.
- Two Harting 5-pin outputs to the shot clocks, each carrying an RS-485 data pair, ground and
  24 V DC.

Both 7-pin sockets also offer a 12 V output limited to 40 mA.[^m2014] The unit weighs 6.2 kg and
its horn is rated at 114 dB.[^m2014][^m2023][^ds] Its power rating differs between sources: the
two manuals give 350 VA at most, and the 2015 datasheet gives 300 VA.[^m2014][^m2023][^ds]

The unit's connector set matches that of the [Coyote horn](coyote-horn.md), which a Swiss Timing
dealer sells with these clocks. The Coyote's listed size, weight and loudness are different,
however, and no Swiss Timing document links the two names.[^avkcoyote][^m2023]

## Connections

This section covers the cabling between the unit and the clocks.

Each clock has a single Harting 5-pin connector that carries data both in and out, with the same
pin layout as the unit's outputs.[^m2014] The clocks are chained. In the four-clock kit, each of
the unit's two outputs runs 30 m (cable `3403.674`) to a clock at one end of the field. That
clock passes the feed 70 m (cable `3403.675`) to a clock at the far end.[^m2023] The two-clock
kit uses one 30 m and one 70 m reel in the same way.[^m2014] The unit itself takes a 5 m mains
cable, `1874.005`, and a 10 m console cable, `1871.010`.[^m2023]

## Installation and siting

This section covers placing the clocks and the mains unit.

Because the power and horn unit runs on mains voltage, both manuals require it to stand at least
3.5 m from the pool edge. That falls to 2 m if the unit is protected by a residual current device
rated at 30 mA or less, and national rules may differ.[^m2014][^m2023] The manuals attribute the
rule to "IEC 60634-7-702". The IEC standard for swimming-pool electrical installations is
numbered 60364-7-702, so the manuals' number appears to be a misprint.[^m2014] The clocks
themselves run on 24 V DC from the unit.[^m2014]

## Care and maintenance

This section covers the clock's configuration switches.

Each clock has a bank of eight DIP switches. All eight are off for normal operation. Turning
switch 4 on puts the clock into a test mode.[^m2014]

## Specifications

| | |
|---|---|
| Manufacturer | Swiss Timing, Corgémont, Switzerland[^m2023] |
| Shot-time digits | 2, red LED, 24 cm[^m2014][^ds] |
| Game-time digits | 4, white LED, 15 cm (`3403.790`)[^m2023][^ds] |
| Tenths | Shot time in the last 5 s; game time in the last minute[^ds] |
| Viewing angle | 110°[^ds] |
| Clock power | 24 V DC from the power and horn unit[^m2014][^ds] |
| Clock power draw | 30 VA maximum (dealer); the 2023 manual gives 350 VA[^avk][^m2023] |
| Clock connector | Harting 5-pin: RS-485 pair, ground, 24 V DC[^m2014] |
| Protection | IP54[^ds] |
| Dimensions | 600 × 600 × 92 mm (`3403.790`)[^m2023] |
| Weight | 5.8 kg (shot time only); 6.8 kg (`3403.790`)[^m2014][^m2023] |
| Power and horn unit | 115/230 V AC; 300 VA (datasheet) or 350 VA (manuals); 114 dB; 6.2 kg; 380 × 200 × 310 mm[^m2014][^ds] |
| Operating temperature | −10 to +50 °C (dealer)[^avk] |
| Certifications | CE, RoHS[^ds] |

## Part numbers and accessories

This section lists the parts the manuals, datasheet and dealer name.

| Part | Description |
|---|---|
| `3403.790` | Shot clock with game time[^m2023] |
| `3403.950.CA` | Kit of two shot clocks (dealer)[^avk] |
| `3403.951.CA` | Kit of four shot clocks (dealer)[^avk] |
| `3500.786` | Floor-standing kit[^m2023] |
| `3403.674` | Shot clock cable, 30 m[^m2023] |
| `3403.675` | Shot clock cable, 70 m[^m2023] |
| `1871.010` | Console cable, 10 m[^m2023] |
| `1874.005` | Mains cable for the power unit, 5 m[^m2023] |
| `3403.990`, `3403.991` | AC power cables in the two-clock and four-clock kits[^ds] |

The datasheet's kits also include a start/stop button for the console.[^ds] Swiss Timing's
2015 datasheet describes the clocks as 30 s and 20 s clocks, the possession limits of the time.
The [Calypso WPO console](../console/calypso-wpo-console.md) article covers setting the
console to the current World Aquatics limits.[^ds]

## See also

- [Montreal shot clocks](montreal-shot-clocks.md): Swiss Timing's larger shot clock with game clock
- [Coyote horn](coyote-horn.md): the horn and power unit sold with these clocks
- [Calypso WPO console](../console/calypso-wpo-console.md): the console that runs them
- [Water polo shot clocks](index.md): the water polo shot clocks overview
- [Swiss Timing](../../../vendors/swiss-timing.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^m2014]: [Swiss Timing, Water polo Shot Clocks User's Manual (3403.511, March 2014)](https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3403.511_WPO_Shotclock_User_Manual.pdf).
[^m2023]: [Swiss Timing, WPO Shot Clocks User's Manual (3403.514.02, v1.1, September 2023)](https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3403.514.02_WPO_GT_Shotclock_User_Manual.pdf).
[^ds]: [Swiss Timing, Calypso LED Shot Clocks datasheet](https://www.swisstiming.com/fileadmin/Resources/Data/Datasheets/DOCM_WP_CalypsoShotClock_1020_EN.pdf) (Calypso_Shot Clocks/10-2015).
[^montreal]: [Swiss Timing, Montreal LED Shot Clocks datasheet](https://www.swisstiming.com/fileadmin/Resources/Data/Datasheets/DOCM_WP_MontrealLEDshotClocks_0913_EN.pdf) (2013).
[^avk]: [AVK Group, Shot clock Omega Calypso (3403.951.CA)](https://www.avkgroup.at/catalog/3403.951.CA/) (dealer listing, October 2026).
[^avkcoyote]: [AVK Group, Coyote Horn (3435.900)](https://www.avkgroup.at/catalog/3435.900/).

---
title: ALGE E-START
description: >-
  The E-START is the ALGE-Timing hand-held electronic starting device with a push button and a
  four-LED strobe flash, made in a cabled version and a radio version, the E-START W.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: E-START
infobox:
  - label: Manufacturer
    value: '[ALGE-Timing](vendors/alge-timing.md)'
  - label: Part number
    value: '`E-START` (cable); `E-START W` (radio)'
  - label: Type
    value: 'Electronic starting device'
  - label: Connection
    value: 'Fixed 2 m cable with DIN plug (`E-START`); [WTN](equipment/swimming/accessories/alge-wtn.md) radio, 2.4 GHz (`E-START W`)'
  - label: Dimensions
    value: '265 × 150 × 35 mm (manuals, catalogues); 150 × 250 × 35 mm (system manual); 300 × 175 × 45 mm and 295 × 175 × 30 mm (product pages)'
  - label: Weight
    value: '`E-START` about 0.3 kg (manual), 328 g (product page); `E-START W` about 0.4 kg (manual), 0.5 kg (catalogues), 278 g (product page)'
  - label: Power
    value: '6–12 V DC from the host device (`E-START`); built-in Li-Ion battery, 3.6 V / 10.4 Wh (`E-START W`)'
  - label: Introduced
    value: 'By July 2014 (`E-START` declaration of conformity)'
  - label: Status
    value: 'Current'
  - label: Manual
    value: '[e-Start manual (E23-10-31)](https://alge-timing.com/downloads/userGuides/e-Start-BE.pdf)'
---

<!--
Research notes, ALGE E-START.

Surfaced 2026-11-04 while building out alge-tm-swim.md. Built out 2026-11-19.

Product pages: four power LEDs in a strobe, -20 to 45 C. Cabled unit on a 2 m lead with DIN plug.
W version has WTN radio, a Li-Ion battery, no cable option, ships with PS12A and a small screwdriver.
Manual 5.8 gives 150 x 250 x 35 mm and 0.3 kg, powered from the TM-SWIM at 12 V, which differs from
the page. Plugs into the SU3's DIN socket (SU3 manual, 11 V supply on pin 4). The 2026 catalogue says
the flash aids hand timing and swimmers with impaired hearing. ALGE lists E-START for the 8-lane and
10-lane systems and E-START W for semi-automatic. ALGE's pages class it as a start gun.

Sources:
  - ALGE-Timing product page (alge-timing.com/en/product/752/e-start, read 2026-11-04)
  - ALGE-Timing product page (alge-timing.com/en/product/753/e-start-w, read 2026-11-04)
  - ALGE-Timing, Swimming Timing System manual (Version E24-08-29, published at alge-timing.com/downloads/userGuides/Swimming-BE.pdf)
  - ALGE-Timing, Start Unit SU3 manual (Version E-23-11-02)
  - ALGE-Timing, Aquatic Sports catalogue, June 2026 (alge-timing.com/downloads/leaflets/Swimming_KE.pdf)
  - ALGE-Timing swimming page (alge-timing.com/en/sports/aquatics/swimming, read 2026-11-04)

Build-out, 2026-11-19:

Dedicated manuals found linked from the product page (user guides e-Start-BE, e-Start-W-BE,
e-Start-BD) and filed under sources/vendors/alge-timing/start-systems/. All three are Version
E23-10-31 or D23-10-31, PDFs created 31 October 2023, eight pages each. Read in full.
  - Cabled e-Start manual: declaration of conformity signed 12 July 2014 (earliest date found
    for the product). Needs 6 to 12 V DC and at least 450 mA from whatever it plugs into; lists
    Timy, Timy2 and Timy3 (only when the Timy itself runs on external power), TdC8001/TdC8000,
    OPTIc2, OCD2 distribution box, SU2/SU3 (power comes from the timer through the start unit),
    SV4/SM speech amplifier and BANG. Turns on when plugged in. Status LED: green blinking ready,
    orange blinking no ready signal (only with an SU3), red blinking start line shorted. Output is
    an NPN open collector, active low, limits 250 mW, 14 V, 100 mA. DIN pins 1 C0, 2 status,
    3 ground, 4 supply in, 5 unused. 265 x 150 x 35 mm, about 0.3 kg.
  - e-Start W manual: declaration dated 12 November 2016, citing EN 300 328 v1.9.1 of February
    2015, so it postdates the 2015 brochure that already lists the W; probably a re-declaration
    against newer radio standards, not the launch date. Team switch has 15 positions in use
    (1-9 separate, A-F joint, 0 factory test), while the spec table in the same manual says 16
    frequencies; the 2015 brochure says 16 frequencies, the 2017 catalogue 15 teams, and the WTN
    page records the same 15/16 split between the Timy3 leaflet and manual. Radio power 10 mW
    factory, up to 100 mW (EU limit 10, USA 100), changeable only from a WTN or Timy3. Channel C0
    default; C1 to C4 by holding the button at switch-on and counting presses; a 10 s hold at
    switch-on resets to C0. The 35-minute auto-off was disabled from November 2017. Radio LED
    shows signal strength to the nearest partner device. Battery 4 h charge with PS12A, only
    between 0 and 45 C; about 45 h at 22 C and 23 h at -20 C at one impulse a minute. Weight
    about 0.4 kg (1.1 lb) here, against 0.5 kg (1.1 lb) in the 2015 brochure and 2017 catalogue
    (1.1 lb is 0.5 kg, so the manual's kilogram figure looks like the error) and 278 g on the
    product page.
  - Both manuals: second press within 5 s gives another C0 impulse plus three quick flashes as a
    false-start signal; works only with a short channel delay on the timer (0.1 s given as the
    example); a delay of 5 s or more suppresses it. Both carry boilerplate saying WTN works at
    4.2 GHz, a typo for 2.4 GHz (the W spec table and every other ALGE document say 2.4).
  - German cabled manual D23-10-31: same figures and declaration date.
ALGE, Start Devices for Track and Field, V1510.1 (PDF 1 November 2015, Split Second Timing copy):
read end to end. Earliest dated document naming both models. e-Start compatible-device list adds
Start Judge SJ, TimeManager TM, Timy3 W/WP and the Timer S4. Drawings show the e-Start on an SU3
feeding a BANG CW and Start Judge, and the e-Start W with a BANG W, BANG-HS headset and Timy3 WP.
ALGE general catalogue 2017 (alge-timing.fi copy), start devices pp16-20 read: same dimensions;
flash recommended for hearing-impaired athletes or more precise hand timing; e-Start also drawn in
cycling, short track, speed skating and cross-country systems.
ALGE swimming catalogue V1.113 (2013): no e-Start; the system drawings show a separate FLASH unit
beside the SU start unit. So the e-Start reaches the swimming literature after 2013; the TM-SWIM
system manual E24-08-29 lists E-START in its declaration of conformity as a TM-SWIM accessory.
Timy3 General E25-03-10, 9.3.1: start channel C0 delay defaults to 1.00 s; times received over WTN
are corrected for the 0.1 s radio delay, and a channel must be set to the E-START W correction for
radio times to be passed out as impulses. Timy TrackTimer E23-11-02: the E-START W cannot be set
as a WTN socket device and always runs in standard mode, which ALGE says keeps BANG triggering
right.

Inferred, not stated by ALGE: that the e-Start replaced the separate FLASH in ALGE's swimming
drawings (they appear in successive catalogues in the same position); that the 1.00 s Timy3
default delay would swallow a second press, so the false-start flash needs the delay shortened.

Dead ends: Wayback Machine offline all day (2026-11-19), so no first-capture date for product
pages 752/753; no independent review or press item found (searches return Swiss Timing,
FinishLynx and Freelap products instead); one reseller listing (eternytime.store) returned 404.

Not stubbed: TdC8001/TdC8000, OPTIc2, OCD2, SV4/SM, Start Judge SJ/SJ2 (athletics and multi-sport
devices, referred to generically in the body, as on alge-su3.md). Stubbed: PS12A.
-->

The E-START is a hand-held electronic starting device made by
[ALGE-Timing](../../../vendors/alge-timing.md) of Lustenau, Austria. It has a push button and a
flash of four high-power LEDs. Pressing the button fires the flash and sends a start impulse to
the timing equipment.[^manual] ALGE makes it in two models: the `E-START`, which connects by a
fixed cable, and the `E-START W`, which carries its own radio and battery.[^manual][^manualw] ALGE
sells it as a replacement for the starting pistol in athletics, cycling and skating as well as
swimming. Its own literature calls it an electronic start gun.[^athl2015][^cat2017][^product] In
ALGE's swimming systems the cabled model plugs into the [SU3](alge-su3.md) start unit at the
starter's position.[^cat2026][^su3]

See the [start-systems overview](index.md) for the shared background that applies to every start
system, including the rules on visual start signals.

## Naming and product line

This section covers the two models and the dates found for them. ALGE writes the name both as
`E-START` and as `e-Start`. The radio model carries a `W` suffix, as do other ALGE devices that use
its [WTN](../accessories/alge-wtn.md) radio network.[^manual][^product] The cabled model's declaration of
conformity is dated 12 July 2014, the earliest date found for either model.[^manual] ALGE's
athletics start-devices brochure of November 2015 lists both models.[^athl2015] The radio model's
declaration is dated November 2016. It cites radio standards published in 2015, so it is probably
a later re-declaration rather than a launch date.[^manualw]

ALGE's 2013 swimming catalogue does not list the E-START. Its system drawings show a separate
start flash next to the [SU](alge-su.md) start unit.[^cat2013] The E-START appears in the
declaration of conformity of the [TM-SWIM](../timers/alge-tm-swim.md) system manual, and it is
drawn in the TM-SWIM system in ALGE's 2026 aquatics catalogue.[^system][^cat2026] ALGE does not
say whether the E-START replaced the earlier flash.

The current English manuals for both models are version E23-10-31, from October 2023, and a German
edition of the cabled manual has the same date.[^manual][^manualw][^manualde] The radio model's
manual records one change in use: its automatic switch-off after 35 minutes without a trigger has
been disabled since November 2017.[^manualw]

## Design and hardware

The E-START is a flat hand-held unit. On its face are the four-LED flash, a status LED and the push
button that triggers the start.[^manual] ALGE rates both models for use from −20 to 45 °C.[^manual][^manualw]

The cabled model has no battery or switch. Its 2 m cable ends in a DIN plug, and the unit takes its
power through that cable from the device it is plugged into.[^manual] The radio model adds a
second LED for radio signal strength, a rotary team switch set with a small screwdriver, a
charging socket for ALGE's [PS12A](../accessories/alge-ps12a.md) power supply and a built-in
lithium-ion battery. It cannot be connected by cable.[^manualw][^productw]

ALGE's documents give four sizes and several weights. The two manuals, the 2015 brochure and the
2017 catalogue give 265 × 150 × 35 mm for both models. The TM-SWIM system manual gives
150 × 250 × 35 mm, and the product pages give 300 × 175 × 45 mm for the cabled model and
295 × 175 × 30 mm for the radio model.[^manual][^manualw][^athl2015][^cat2017][^system][^product][^productw]
The cabled model weighs about 0.3 kg in the manuals and catalogues and 328 g on its product
page.[^manual][^system][^product] For the radio model the figures are 0.5 kg in the brochure and
catalogue, about 0.4 kg in its manual and 278 g on the product page. The manual also gives 1.1 lb,
which is the 0.5 kg figure, so its kilogram value is probably the error.[^athl2015][^cat2017][^manualw][^productw]

## Operation

This section describes how the device is used and how the timer must be set for it. Pressing the
button sends an impulse on the start channel, C0, and fires the flash at the same moment. A second
press within five seconds sends another impulse and makes the flash strobe three times in quick
succession as a false-start signal.[^manual][^manualw] Whether the timer records that second
impulse depends on the delay set for its start channel, which is the time a channel ignores further
impulses after one has arrived. According to ALGE's manuals, a short delay is needed for the false-start signal to register
(0.1 second is their example), and one of five seconds or more prevents it.[^manual] The Timy3
sets the start-channel delay to 1.00 second by default.[^timy3] On ALGE's BANG speaker systems the
same five-second rule produces a gunshot sound for the first press and a false-start sound for the
second.[^athl2015][^cat2017]

The cabled model turns on as soon as it is plugged in. Its status LED blinks green when it is ready,
orange when the timing device is not signalling that it is ready, and red when the start line is
shorted. The orange indication works only through an SU3.[^manual]

The radio model is switched on by holding the button until the status LED turns from red to green,
and off by holding it for about five seconds.[^manualw] All WTN devices that are to work together
need the same team number, set on each unit's switch. The switch has nine separate teams, which use
different radio frequencies, and six joint teams, which share one.[^manualw] The radio model sends
on C0 by default and can be set to C1 to C4 by holding the button at switch-on and counting further
presses; a ten-second hold at switch-on resets it to C0.[^manualw] After a press, its status LED
shows the battery level as green, orange or red, and the radio LED indicates how strong the signal is from the
nearest WTN device.[^manualw]

Radio timing in ALGE's WTN network carries a fixed transmission delay of 0.1 second, which the
Timy3 removes automatically from times it receives. To pass a radio time on to other equipment as an
electrical impulse, a Timy3 channel must be set to the E-START W correction.[^timy3] ALGE's
TrackTimer manual adds that the radio model cannot be configured as a WTN socket device and always
runs in standard mode, which ALGE says keeps BANG speakers triggering correctly.[^tracktimer]

## Use in swimming

ALGE's 2026 aquatics catalogue draws the E-START in three swimming systems:[^cat2026]

| System | Start equipment shown |
|---|---|
| Fully automatic pool system | E-START on an SU3, with a [FLASH XL](../accessories/alge-flash-xl.md), all connected to a TM-SWIM |
| Open-water finish | E-START and SU3 with a [Timy](../timers/alge-timy.md) Timy3 WP, an [MC9](../accessories/alge-mc9.md) and a [BANG2](../external-speaker/alge-bang.md) speaker |
| Semi-automatic radio system | E-START W with a BANG2, a radio headset and a Timy3 WP |

The catalogue says the flash allows more exact hand timing and lets swimmers with a hearing
impairment see the start.[^cat2026] ALGE's 2017 catalogue makes the same two points for athletes
in general.[^cat2017] The start tone in ALGE's pool systems comes from the TM-SWIM through the lane
speakers, not from the E-START.[^system]

## Connections

The cabled model's DIN plug carries four signals:[^manual]

| Pin | Signal |
|---|---|
| 1 | Start impulse, channel C0 |
| 2 | Ready status from the timing device |
| 3 | Ground |
| 4 | Supply in, 6–12 V DC |
| 5 | Not used |

The start output is an open-collector transistor that pulls the line low, rated at no more than
14 V, 100 mA and 250 mW. The host must supply at least 450 mA.[^manual] The SU3's socket for a start
device uses the same assignment for pins 1 to 4 and supplies 11 V on pin 4.[^su3] The TM-SWIM
system manual describes the E-START as powered from the TM-SWIM at 12 V, which in that system
reaches it through the SU3.[^system][^su3]

The cabled manual lists the devices that can power it: the Timy, Timy2 and Timy3 (only when the
Timy itself runs from an external supply), the SU2 and SU3 start units (passing power on from the
timing device), BANG speakers, and several ALGE athletics and photo-finish devices.[^manual] ALGE's
2015 brochure also lists the [Timer S4](../timers/alge-timer-s4.md) as compatible.[^athl2015]

The radio model works with any device on ALGE's WTN network, including the Timy3 W and WP timers,
the WTN radio unit and BANG W speakers.[^manualw] Its radio settings are:[^manualw][^athl2015]

| Setting | Value |
|---|---|
| Band | 2.4 GHz |
| Teams | 15 (9 separate, 6 joint); 16 frequencies in the specification tables |
| Output power | 10 mW as delivered; up to 100 mW, set only from a WTN unit or a Timy3 |
| Timing channels | C0 (start, default), C1 (finish), C2, C3, C4 |
| Range | About 350 m in line of sight |

The manual notes that 10 mW is the maximum allowed in the EU and 100 mW in the United
States.[^manualw] The count of radio settings differs between ALGE's documents: the radio manual's
team switch and the 2017 catalogue give 15, while the manual's own specification table and the 2015
brochure give 16.[^manualw][^cat2017][^athl2015] Both manuals also state in their general notes that
WTN works at 4.2 GHz, which conflicts with the 2.4 GHz given in their specifications and in every
other ALGE document.[^manual][^manualw]

## Specifications

| Specification | `E-START` | `E-START W` |
|---|---|---|
| Flash | 4 high-power LEDs | 4 high-power LEDs |
| Connection | Fixed 2 m cable, DIN plug | WTN radio, 2.4 GHz |
| Start output | Open collector, active low; max. 14 V, 100 mA, 250 mW | Radio impulse, channel C0–C4 |
| Power | 6–12 V DC from host, at least 450 mA | Li-Ion battery, 3.6 V / 10.4 Wh, built in |
| Charging | Not applicable | About 4 hours with PS12A, at 0–45 °C |
| Running time | Not applicable | About 45 hours at 22 °C, 23 hours at −20 °C (one impulse per minute) |
| Operating temperature | −20–45 °C | −20–45 °C |
| Dimensions | 265 × 150 × 35 mm (manual) | 265 × 150 × 35 mm (manual) |
| Weight | About 0.3 kg (manual); 328 g (product page) | About 0.4 kg (manual); 0.5 kg (catalogues); 278 g (product page) |

Figures are from the two manuals unless marked; see Design and hardware for the other sizes ALGE
gives.[^manual][^manualw][^product][^productw]

## Part numbers and accessories

This section lists the E-START's companion parts that have articles here.[^product][^productw]

| Item | Part number | Article |
|---|---|---|
| Electronic starting device, cable | `E-START` | This article |
| Electronic starting device, radio | `E-START W` | This article |
| Power supply and charger for `E-START W` | `PS12A` | [PS12A](../accessories/alge-ps12a.md) |
| Start unit | `SU3` | [SU3](alge-su3.md) |
| Speaker start system | `BANG2` | [BANG](../external-speaker/alge-bang.md) |
| Connection cable | `199-20` | [Swimming cable sets](../deck-cabling/alge-swim-cable-sets.md) |
| Radio network | `WTN` | [WTN](../accessories/alge-wtn.md) |

## See also

- [SU3](alge-su3.md): the start unit the cabled model plugs into
- [FLASH XL](../accessories/alge-flash-xl.md) and [SM8 start microphone](../accessories/alge-sm8.md): other ALGE start devices
- [TM-SWIM](../timers/alge-tm-swim.md): ALGE's swimming timing console
- [Start systems](index.md): the start-systems overview
- [ALGE-Timing](../../../vendors/alge-timing.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^manual]: [ALGE-Timing, e-Start manual](https://alge-timing.com/downloads/userGuides/e-Start-BE.pdf) (Version E23-10-31).
[^manualw]: [ALGE-Timing, e-Start W manual](https://alge-timing.com/downloads/userGuides/e-Start-W-BE.pdf) (Version E23-10-31).
[^manualde]: [ALGE-Timing, e-Start Bedienungsanleitung](https://alge-timing.com/downloads/userGuides/e-Start-BD.pdf) (Version D23-10-31; in German).
[^product]: [ALGE-Timing, E-START](https://alge-timing.com/en/product/752/e-start) (product page, as of November 2026).
[^productw]: [ALGE-Timing, E-START W](https://alge-timing.com/en/product/753/e-start-w) (product page, as of November 2026).
[^system]: [ALGE-Timing, Swimming Timing System Manual](https://alge-timing.com/downloads/userGuides/Swimming-BE.pdf) (Version E24-08-29), 5.8.
[^su3]: [ALGE-Timing, Start Unit SU3 manual](https://alge-timing.com/downloads/userGuides/SU3_BE.pdf) (Version E-23-11-02), 6.1.1.
[^timy3]: [ALGE-Timing, Timy3 General](https://alge-timing.com/downloads/userGuides/Timy3-Allgemein-BE.pdf) (version E25-03-10), 9.3.1.
[^tracktimer]: [ALGE-Timing, Timy TrackTimer](https://alge-timing.com/downloads/userGuides/Timy-TrackTimer-BE.pdf) (version E23-11-02).
[^athl2015]: [ALGE-Timing, Start Devices for Track and Field](https://www.splitsecond.com.au/brochures/Athletics-Start-Devices-KE.pdf) (V1510.1, 2015).
[^cat2017]: [ALGE-Timing, The Sports Timing Experts](https://www.alge-timing.fi/images/ALGE-yleisesite_eng.compressed.pdf) (general catalogue, 2017).
[^cat2013]: [ALGE-Timing, The Specialist for Swimming](https://www.freker.se/dokument/ALGE%20Swimming-KE-1.PDF) (catalogue V1.113, 2013).
[^cat2026]: [ALGE-Timing, Aquatic Sports](https://alge-timing.com/downloads/leaflets/Swimming_KE.pdf) (catalogue, June 2026).

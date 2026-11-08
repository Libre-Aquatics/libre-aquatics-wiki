---
title: ALGE SU3 start unit
description: >-
  The SU3 is the ALGE-Timing hand unit for the starter, with a start button, microphone and
  speech amplifier, powered over its cable from a TM-SWIM or BANG.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: SU3
infobox:
  - label: Manufacturer
    value: '[ALGE-Timing](vendors/alge-timing.md)'
  - label: Part number
    value: '`SU3`'
  - label: Type
    value: 'Start unit'
  - label: Connection
    value: 'Cable `199-xx` to a [TM-SWIM](equipment/swimming/timers/alge-tm-swim.md), FLASH XL or BANG; DIN sockets for a start device and a headset'
  - label: Dimensions
    value: '127 × 73 × 37 mm (SU3 manual); 125 × 75 × 35 mm (product page); 75 × 120 × 35 mm (system manual)'
  - label: Weight
    value: '0.25 kg (SU3 manual); 213 g (product page); 150 g (system manual)'
  - label: Power
    value: 'From the connected device; no battery'
  - label: Introduced
    value: 'By November 2015 (earliest document found)'
  - label: Status
    value: 'Current'
  - label: Manual
    value: '[Start Unit SU3 manual (E-23-11-02)](https://alge-timing.com/downloads/userGuides/SU3_BE.pdf)'
---

<!--
Research notes, ALGE SU3 start unit.

Surfaced 2026-11-04 while building out alge-tm-swim.md. Built out 2026-11-07.

SU3 manual, read in full: has start, talk and mute buttons, volume up and down; status LED blinks
green when the system is ready; volume LED goes red, orange, green; microphone gain by a small
rotary control, howl if set too high. Pinouts on p7: 6-pin DIN (C0 start, status, ground, 11 V out
for e-Start or SM8), headset 5-pin, 199-xx socket (C0, talk, ground, +12 V in, status). Connects to
a TM-SWIM, Start Judge, TimeManager, BANG or BANG CW. Says nothing about the start tone itself, which
comes from the device downstream. Numbering of the rotary control is inconsistent in the manual
(12 and 13). Three size and weight figures disagree as in the infobox.

Predecessor: SU2 in the 2013 catalogue and on the 199-20 cable page; no SU2 document held.

Sources:
  - ALGE-Timing, Start Unit SU3 manual (Version E-23-11-02)
  - ALGE-Timing product page (alge-timing.com/en/product/2129/su3, read 2026-11-04)
  - ALGE-Timing, Swimming Timing System manual (Version E24-08-29, published at alge-timing.com/downloads/userGuides/Swimming-BE.pdf)
  - ALGE-Timing, The Specialist for Swimming, catalogue V1.113, PDF dated 2 September 2013 (freker.se/dokument/ALGE%20Swimming-KE-1.PDF)
  - ALGE-Timing product page (alge-timing.com/en/product/2069/199-20, read 2026-11-04)

Build-out, 2026-11-07:

Manual, second reading with pages 4 and 5 rendered (PyMuPDF). PDF created 2 November 2023,
matching the version string. ALGE publishes the identical file at
alge-timing.com/downloads/userGuides/SU3_BE.pdf (text compared, same creation date). The device
drawing settles the numbering: 12 is the screwdriver-adjusted microphone gain, a small hole beside
the two DIN sockets; 13 is the round socket for the 199-xx cable on the bottom edge. The parts list
is therefore right, and sections 3.3 and 6.1.3, which call that socket (12), are wrong. Section 5.3
also calls the volume LED (6), where the drawing and list have 8. The p5 athletics example shows the
SU3 with an e-Start and a "Headset HS3-2" feeding a BANG CW over cable 199-20; the swimming example
shows an E-START on the SU3, the SU3 on a TM-SWIM in the timing room, a P5-8 printer and two PCs
(timing, evaluation). Case described as rugged plastic with a yellow rubber cover.

Other documents:
  - German SU3 manual, Version D-221012 (8 pp.), on ManualsLib.de (manual/965187), excerpt view
    only: same 127 x 73 x 37 mm and 0.25 kg; yellow silicone cover. Shows a German edition by
    12 October 2022. Not downloaded (Cloudflare).
  - ALGE-Timing, Swimming Timing System manual E24-08-29, section 2 and 5.7: SU3 and FLASH XL at the
    starter's position; 199-20 cable or KT199Z10 reel from the TM-SWIM to the FLASH XL and/or the
    SU3; 5.7 says the starter can set the feedback with a small potentiometer to suit local needs,
    and gives 75 x 120 x 35 mm, 150 g, functions start, announcement, ready display. The TM-SWIM's
    socket list has a "Start Unit SU3" socket.
  - ALGE-Timing, Start Devices for Track and Field, V1510.1 (PDF created 1 November 2015; Split
    Second Timing copy, filed under sources/vendors/alge-timing/catalogs-brochures/): lists "Start
    Unit SU3" as an amplifier for a communication headset and "Headset HS3-2" usable with the SU3,
    BANG and BANG CW; SU3 drawn in the athletics BANG CW system. Earliest dated SU3 document found.
    The same brochure lists the Timer S4 among compatible ALGE timing devices.
  - ALGE-Timing general catalogue "The Sports Timing Experts" (200 pp., PDF created 24 October 2017;
    copy hosted by the Finnish distributor at alge-timing.fi, filed as alge-general-catalogue-2017):
    "START UNIT SU3", amplifier for talk via a speakerphone; with an SU3, the starter can talk to the
    timekeeper and announce over the start system's speakers. Searched for the SU entries, not read
    in full.
  - ALGE-Timing, Aquatic Sports catalogue, June 2026: start commands reach the BANG2 from the SU3 or a
    BANG-HS radio headset; system drawing places e-Start, SU3 and FLASH XL on the TM-SWIM.
  - ALGE-News 10/2024 (alge-timing.com/en/news/detail/8160, dated 2 October 2024): SU3s made since
    September 2024 have clearer sound, very low noise and no "plop" when switching to announcement.
    No serial-number cut-off given.
  - ALGE product pages (read November 2026): su3 (125 x 75 x 35 mm, 213 g; delivered with tool
    F-WERKZ. 1; accessories HS4-1, HS4-2, 199-20, E-START, TM-SWIM, BANG2, SJ2); 199-20 (20 m) and
    199-30 (30 m), LTW F plugs; KT199Z10 reel (100 m, 6.1 kg).
  - ALGE-Swim USA solutions page: the Start Unit is the starter's device; its microphone is used for
    announcements to swimmers and it can trigger the start.
  - Timing Ireland shop (shop.timingireland.ie, read 2026-11-07): SU3 at EUR 429 excluding VAT
    (EUR 527.67 with 23 % VAT), out of stock with a pre-order label; product-page dimensions.

Lineage, inferred from roles and dates only: SA1 Start Acoustic (Timer S4 system, drawings 1994,
guide 1997) -> SU (SWIM 2000, 2002) -> SU2 (2013 catalogue) -> SU3 (2015 on). No ALGE text states
any step. The SU had a switch between headset talk to the operator and announcements over the lane
speakers (Split Second Australia page); the SU3 does the same with TALK and MUTE keys.

Dead ends: no SU, SU2 or SU3 manual under other filenames on alge-timing.com (SU2-BE, SU3-BE, SU-BE,
SU-SWIM-BE and lower-case variants all 404); Wayback Machine unreachable all day; no independent
review or user report found; Nevco page not checked for the SU3 specifically.

Not stubbed: Start Judge SJ2 and TimeManager TM (athletics and multi-sport devices, referred to
generically in the body); WTN-DB and BANG-HS (not named in the body); P5-8 (named only in these notes).
-->

The SU3 is the start unit made by [ALGE-Timing](../../../vendors/alge-timing.md) of Lustenau,
Austria: a hand-held box for the starter that combines a start button and a microphone with its
own speech amplifier.[^manual] In swimming it plugs into the [TM-SWIM](../timers/alge-tm-swim.md) timing
console, and in athletics into ALGE's [BANG](alge-bang.md) speaker start systems or other ALGE
timing devices. It has no battery and draws its power from whichever device it is connected
to.[^manual][^system]

## Naming and product line

This section covers the SU3's predecessors and revisions. ALGE has given its swimming systems a
separate start unit since at least 1994. The [Timer S4](../timers/alge-timer-s4.md) system used
the [Start Acoustic SA1](alge-sa1.md), which drove the start horns directly.[^s4] The
[SWIM 2000](../timers/alge-swim-2000.md) system of 2002 had a start unit called the
[SU](alge-su.md), with a start button and microphone, and ALGE's 2013 swimming catalogue shows the
[SU2](alge-su2.md) in the same role.[^swim2000][^cat2013] The SU3 appears in ALGE's athletics
start-devices brochure of November 2015 and its 2017 general catalogue, neither of which lists the
SU2, although ALGE's cable pages still name the SU2 as a unit the cables
fit.[^athl2015][^cat2017][^cable] ALGE does not say that each unit replaced the one before; the sequence
is inferred from their roles and dates.

The English manual is version E-23-11-02, from November 2023, and a German edition is dated
October 2022.[^manual][^manualde] ALGE reported in October 2024 that units made from September 2024
on have clearer sound, very little background noise and no audible pop when switching to
announcements.[^news]

## Design and hardware

The SU3 is built in a plastic case with a yellow rubber cover.[^manual] Its front carries a green
START button, a grille over the microphone, TALK and MUTE keys, and volume keys marked + and −.
Three LEDs sit across the top: one shows when the microphone is live, one shows that the timing
system is ready, and one shows the volume setting.[^manual] Two DIN sockets and a small adjustment
hole for microphone gain are on the top edge, and the socket for the main cable is on the bottom
edge.[^manual]

ALGE's three documents give three sizes and weights for the unit: 127 × 73 × 37 mm and 0.25 kg in
the SU3 manual, 125 × 75 × 35 mm and 213 g on the product page, and 75 × 120 × 35 mm and 150 g in
the TM-SWIM system manual.[^manual][^product][^system] The manual's own item numbers also disagree
in places: its text calls both the microphone-gain control and the main cable socket item 12, while
its drawing and parts list number the cable socket 13, and it refers to the volume LED as item 6
where the drawing has 8.[^manual]

## Operation

This section describes the controls in use. Pressing START sends a start impulse to the timing
device; an external trigger such as an [E-START](alge-e-start.md) or an
[SM8 start microphone](alge-sm8.md) can be used instead.[^manual] The status LED blinks green when
the timing system is ready to accept a start.[^manual]

The starter uses the microphone both for announcements to the competitors and for talking to the
timing operator.[^manual] TALK turns the microphone on only while it is held down, and MUTE turns it
on or off with each press; either way the microphone LED lights while it is live.[^manual] Plugging
in a headset switches the internal microphone off. The + and − keys set the volume of the external
speaker or headset, and the volume LED changes from red through orange to green as the level
rises.[^manual] Microphone gain is set separately with a small screwdriver; turned too high, it
causes feedback howl.[^manual] ALGE's system manual describes the same control as a potentiometer
that the starter sets to suit local conditions.[^system]

The SU3 does not make the start tone. In ALGE's swimming system the tone is generated by the
TM-SWIM and played through the lane speakers; see the [start-systems overview](index.md) for ALGE's
tone settings.[^system]

## Connections

The SU3 has three sockets:[^manual]

| Socket | Use |
|---|---|
| DIN socket for a start device | An E-START or SM8, which the SU3 supplies with 11 V DC |
| DIN socket for a headset | A headset, for the starter's announcements and for speaking to the timing operator |
| Socket for cable `199-xx` | The TM-SWIM, a BANG or BANG CW, or another ALGE timing device; carries the start channel, the talk line, the ready status and the SU3's 12 V supply |

In a swimming installation the SU3 and a [FLASH XL](alge-flash-xl.md) stand at the starter's
position. A `199-20` cable or the `KT199Z10` cable reel runs from the TM-SWIM to the FLASH XL, the
SU3 or both.[^system] ALGE's cable pages list the 20 m `199-20` and the 30 m `199-30` for this link,
and the 100 m `KT199Z10` reel; see [swimming cable sets](../deck-cabling/alge-swim-cable-sets.md).[^cable]
ALGE currently lists the [HS4-1 and HS4-2](../timers/alge-hs4-1.md) headsets as SU3 accessories.
Its 2015 brochure and the SU3 manual's wiring example show an earlier
[HS3-2](../timers/alge-hs3-2.md) headset instead.[^product][^athl2015][^manual]

## Specifications

| Specification | Value |
|---|---|
| Controls | START, TALK, MUTE, volume + and −; screwdriver-set microphone gain |
| Indicators | Microphone LED, status LED (green, blinking when ready), volume LED (red, orange, green) |
| Sockets | DIN for start device; DIN for headset; socket for cable `199-xx` |
| Power | 12 V DC from the connected device over cable `199-xx`; no battery |
| Output to start device | 11 V DC |
| Case | Plastic with yellow rubber cover |
| Dimensions | 127 × 73 × 37 mm (manual); 125 × 75 × 35 mm (product page); 75 × 120 × 35 mm (system manual) |
| Weight | 0.25 kg (manual); 213 g (product page); 150 g (system manual) |
| Price | €429 excluding VAT (Irish dealer, November 2026)[^dealer] |

Figures are from the SU3 manual, the product page and the TM-SWIM system manual as
marked.[^manual][^product][^system]

## Part numbers and accessories

This section lists the SU3's companion parts that have articles here.[^product][^cable][^system]

| Item | Part number | Article |
|---|---|---|
| Start unit | `SU3` | This article |
| Electronic start trigger | `E-START` | [E-START](alge-e-start.md) |
| Start microphone | `SM8` | [SM8](alge-sm8.md) |
| Headsets | `HS4-1`, `HS4-2` | [HS4 headsets](../timers/alge-hs4-1.md) |
| Connection cables and reel | `199-20`, `199-30`, `KT199Z10` | [Swimming cable sets](../deck-cabling/alge-swim-cable-sets.md) |
| Start flash | `FLASH XL` | [FLASH XL](alge-flash-xl.md) |
| Speaker start system | `BANG2` | [BANG](alge-bang.md) |

## See also

- [SU2](alge-su2.md), [SU](alge-su.md) and [Start Acoustic SA1](alge-sa1.md): earlier ALGE start units
- [TM-SWIM](../timers/alge-tm-swim.md): the swimming console the SU3 connects to
- [Start systems](index.md): the start-systems overview
- [ALGE-Timing](../../../vendors/alge-timing.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^manual]: [ALGE-Timing, Start Unit SU3 manual](https://alge-timing.com/downloads/userGuides/SU3_BE.pdf) (Version E-23-11-02).
[^manualde]: [ALGE-Timing, Start Unit SU3 Bedienungsanleitung](https://www.manualslib.de/manual/965187/Alge-Timing-Start-Unit-Su3.html) (Version D-221012; in German; ManualsLib copy).
[^product]: [ALGE-Timing, SU3 Start Unit](https://alge-timing.com/en/product/2129/su3) (product page, as of November 2026).
[^system]: [ALGE-Timing, Swimming Timing System Manual](https://alge-timing.com/downloads/userGuides/Swimming-BE.pdf) (Version E24-08-29), 2.1 and 5.7.
[^cable]: ALGE-Timing product pages: [199-20](https://alge-timing.com/en/product/2069/199-20); [199-30](https://alge-timing.com/en/product/2070/199-30); [KT199Z10](https://alge-timing.com/en/product/2117/kt199z10).
[^news]: [ALGE-Timing, ALGE-News 10/2024](https://alge-timing.com/en/news/detail/8160) (October 2024).
[^athl2015]: [ALGE-Timing, Start Devices for Track and Field](https://www.splitsecond.com.au/brochures/Athletics-Start-Devices-KE.pdf) (V1510.1, 2015).
[^cat2017]: [ALGE-Timing, The Sports Timing Experts](https://www.alge-timing.fi/images/ALGE-yleisesite_eng.compressed.pdf) (general catalogue, 2017).
[^cat2013]: [ALGE-Timing, The Specialist for Swimming](https://www.freker.se/dokument/ALGE%20Swimming-KE-1.PDF) (catalogue V1.113, 2013).
[^swim2000]: [ALGE, SWIM2000](https://www.splitsecond.com.au/brochures/swim2000-pe.pdf) (brochure, 2002; Split Second Timing copy).
[^s4]: [ALGE, Swimming System installation guide, Timer S4](https://alge-timing.com/downloads/userGuides/s4-schwimmen-installation-be.pdf) (Version E-97-03-24).
[^dealer]: [Timing Ireland, SU3 Start Unit by Alge Timing](https://shop.timingireland.ie/products/su3-start-unit-by-alge-timing).

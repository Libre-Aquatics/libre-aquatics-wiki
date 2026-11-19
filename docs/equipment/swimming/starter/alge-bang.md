---
title: ALGE BANG speaker systems
description: >-
  BANG is the ALGE-Timing series of portable amplified speakers that sound the start and
  false-start signals; the current BANG2 combines cable and WTN radio triggering.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: BANG
infobox:
  - label: Manufacturer
    value: '[ALGE-Timing](vendors/alge-timing.md)'
  - label: Part number
    value: '`BANG2`; earlier `BANG`, `BANG W`, `BANG CW`'
  - label: Type
    value: 'Speaker start system'
  - label: Connection
    value: 'Two LTW sockets for cable `199-xx`; banana start output; [WTN](equipment/swimming/timers/alge-wtn.md) radio, 2.4 GHz'
  - label: Speaker
    value: '80 W max / 50 W RMS two-way: 20 cm woofer, 2.5 cm tweeter'
  - label: Dimensions
    value: '`BANG2` 305 × 510 × 265 mm (manual, leaflet); 530 × 270 × 300 mm (product page). `BANG` 300 × 470 × 230 mm'
  - label: Weight
    value: '`BANG2` about 14.8 kg (manual), 12.5 kg (leaflet), 15.4 kg (product page). `BANG` 11.2 kg'
  - label: Power
    value: '100–240 V mains or two built-in 12 V lead-gel batteries'
  - label: Introduced
    value: '`BANG`, `BANG W`, `BANG CW` by 2015; `BANG2` by June 2020'
  - label: Status
    value: 'Current (`BANG2`)'
  - label: Manual
    value: '[Speaker System BANG2 manual (E23-11-14)](https://alge-timing.com/downloads/userGuides/BANG2-BE.pdf)'
---

<!--
Research notes, ALGE BANG speaker systems.

Surfaced 2026-11-04 while building out alge-tm-swim.md. BANG is named in the SU3 manual. Built out
2026-11-19.

Original stub notes: 2026 catalogue has BANG2 as an 80 W speaker and amplifier in one case that
fires the start over a cable or its built-in WTN radio, taking commands from an SU3 or the BANG-HS
radio headset; semi-automatic packages use it with a Timy3 WP. SU3 manual names BANG and BANG CW as
devices that power an SU3 over cable 199-xx and calls BANG the external speaker for MUTE and TALK.
Cable pages (199-20, KT199Z10) name Bang, Bang CW and BANG2. ALGE-Swim USA repeats the 80 W figure.

Build-out sources, all read in full unless noted:
  - ALGE-Timing, Speaker System BANG2 manual, Version E23-11-14 (16 pp., PDF 14 November 2023),
    downloaded from alge-timing.com/downloads/userGuides/BANG2-BE.pdf and filed under
    sources/vendors/alge-timing/start-systems/. Declaration of conformity 12 November 2016. States
    the BANG2 has both cable and built-in WTN and replaces all three earlier BANG models. Start
    always on C0; a second C0, or a pulse on the false-start ("recall") channel, within 5 s gives
    the false-start sound; a false start needs a preceding start. Recall channel default C4. Three
    start modes: Wired (blocks radio C0, start not sent over WTN), Wireless (start by radio C0,
    can also output start and false start as a cable pulse) and Wired C0 (cable start also sent
    over WTN, for a radio link to the finish; ALGE advises avoiding it because an SJ2's WTN module
    can feed it back as an immediate false start). Mixing cable start and radio false start is
    allowed; a cabled e-Start into a wireless false-start system is not. Sounds Off, Bang (pistol
    imitation), Beep (1.8 kHz) and Siren; defaults Bang for start and Siren for false start; each
    has a level setting, normally 100 %. Start and false-start channel delays default 0.1 s, set in
    1/100 s steps, and are shared with other WTN units. OLED display sleeps after 30 s and shows
    whether the last start came by cable or WTN, and a not-ready state when an SJ2 is not ready or
    the start line is shorted. Front-panel list: two LTW sockets, banana start output (green/black;
    listed as NOC open collector on p5, normally open contact on p15), MIC IN XLR/6.3 mm 6 mV, LINE
    IN cinch 800 mV, LINE OUT 1 V mono mix (unaffected by MASTER, affected by tone controls),
    SPEAKER jack min 8 ohm, headset receiver switch. Up to eight BANG SPK passive speakers (about
    10 W each, fixed 12 m cable, cinch socket to chain the next). Mains 100-240 V, 50-60 Hz, 2 A;
    2 x 12 V/5.2 Ah lead-gel, about 3-5 h; charging automatic on mains, works while charging;
    ALGE recommends a full 12 h charge at least monthly because the batteries can be ruined by deep
    discharge, including when the unit is left on mains permanently. 0-40 C; indoor use only
    without the BANG2-BAG cover, which must stay on in rain or snow; the earlier BANG-BAG cover is the wrong size.
    BANG-TRI tripod via a stand sleeve. 80 W max/50 W RMS, 70-16000 Hz, 305 x 510 x 265 mm
    (w x h x d), about 14.8 kg. WTN 2.4 GHz, 16 teams, 10 mW, about 300 m. BANG-HS receiver PLL
    diversity, 863.1-864.9 MHz in 16 channels, about 30 m.
  - German edition D23-11-15 (PDF 15 November 2023, BANG2-BD.pdf): same data; declaration dated
    13 January 2020. Compared section by section.
  - ALGE-Timing, Startspeaker System BANG2 leaflet, V 200601 (4 pp., PDF 1 June 2020,
    alge-timing.com/downloads/leaflets/BANG2_PE.pdf): earliest dated BANG2 document found. Gives
    20-20000 Hz and 12.5 kg against the manual's 70-16000 Hz and 14.8 kg. Tripod 107-157 cm.
  - ALGE-Timing product page 757 (read 2026-11-19): two size/weight pairs on the same page,
    305 x 510 x 265 mm / 14.8 kg in the overview and 530 x 270 x 300 mm / 15.4 kg under technical
    data; says the BANG2 replaces all three BANG versions; not compatible with the BANG-BAG.
  - ALGE, Start Devices for Track and Field V1510.1 (PDF 1 November 2015, Split Second Timing copy),
    pp4-5: BANG (cable), BANG W (WTN radio only, no cable trigger) and BANG CW (cable start plus WTN
    receiver for a false-start impulse, no BANG-HS). Shared data: 80 W max/50 W RMS, 20-20000 Hz,
    mains 90-265 V 47-63 Hz 150 VA, 2 x 12 V/3 Ah, 0-40 C, 300 x 470 x 230 mm (L x H x W),
    11.2 kg, two 7-pin LTW sockets, 5-pin DIN socket, banana socket, BANG-HS receiver 863.1-864.9
    MHz, about 30 m. Up to 4 BANG SPK.
  - ALGE general catalogue 2017 (alge-timing.fi copy), pp16-18: same three versions and data; up
    to 8 BANG-SPK.
  - ALGE Aquatic Sports catalogue, June 2026: BANG2 in the cabled semi-automatic system (Timy3 WP,
    MC8-S2, start button 023-10, finish buttons 023-02, BANG-HS) and the radio one (e-Start W,
    WTN-PB, WTN-DB), and in the open-water system (Timy3 WP, MC9, e-Start, SU3, ASC3).
  - e-Start and e-Start W manuals E23-10-31; SU3 manual E-23-11-02; Timy TrackTimer E23-11-02
    (e-Start W stays in standard mode so BANGx triggers correctly).

Older BANG manuals not obtained: search snippets show a "Speaker System BANG" manual, version
E150528, covering the BANG W (snippet figures: 70-16000 Hz, 230 V/50 Hz/150 VA, 2 x 12 V/3 Ah),
and a BANG CW manual, version E160211, on manualshive.com and manuals.online; both sites refused
automated access (bot wall, HTTP 403), so neither is read or cited. alge-timing.com has no BANG,
BANG W or BANG CW guide under the obvious filenames (BANG-BE.pdf returns an error page served as
a PDF; the others 404). No product pages for BANG-HS, BANG-SPK, BANG-TRI or BANG2-BAG among IDs
745-770.

Discrepancies: frequency range 20-20000 Hz (2015, 2017, 2020 leaflet) vs 70-16000 Hz (BANG2
manual); BANG2 weight 12.5 / 14.8 / 15.4 kg; BANG2 size 305 x 510 x 265 vs 530 x 270 x 300 mm;
BANG SPK limit 4 (2015) vs 8 (2017 on); WTN range 300 m here vs 350 m in the e-Start W manual;
banana output called open collector and normally open contact in the same manual.

Tone: the BANG2 beep is 1.8 kHz, the same figure as the TM-SWIM default the start-systems overview
uses for its ALGE tone recordings. Not evidence that those recordings came from a BANG2.

Inferred, not stated by ALGE: that the BANG2 appeared between 2017 (catalogue still shows the
three BANG versions) and June 2020 (leaflet); the 2016 declaration date may be carried over.

Not stubbed: SJ2 Start Judge and SJS2 sensors (athletics false-start system, referred to
generically), PR1a/PR1aW photocells, SV4/SM and SV4-S speech amplifiers, BANG-TRI tripod, BANG-BAG
and BANG2-BAG covers (named only in the table and notes as accessories of this page). Stubbed:
BANG-HS radio headset, BANG SPK passive speaker.
-->

BANG is a series of portable amplified loudspeakers made by
[ALGE-Timing](../../../vendors/alge-timing.md) of Lustenau, Austria, for starting races without a
pistol. When the start impulse arrives, the speaker plays a simulated gunshot or a tone, and a
second impulse within five seconds makes it play a false-start signal.[^manual][^athl2015] The
same box also amplifies the starter's spoken commands. The current model is the `BANG2`, which ALGE
says replaces the three earlier versions: the cabled `BANG`, the radio `BANG W` and the combined
`BANG CW`.[^manual][^product] ALGE sells the BANG mainly for athletics, cycling and skating; in
swimming it gives the start in ALGE's [semi-automatic](../semi-automatic/index.md) and open-water
systems.[^cat2017][^cat2026]

See the [start-systems overview](index.md) for the shared background that applies to every start
system.

## Models and naming

This section sets out the four models. ALGE's 2015 athletics start-devices brochure and its 2017
general catalogue list three BANG versions with the same speaker and case:[^athl2015][^cat2017]

| Model | Start trigger | False-start trigger | Radio headset |
|---|---|---|---|
| `BANG` | Cable | Cable | Supported |
| `BANG W` | WTN radio only; no cable trigger | WTN radio | Supported |
| `BANG CW` | Cable | Cable or WTN radio | Not supported |

The `BANG2` has both a cable input and a built-in [WTN](../timers/alge-wtn.md) radio module, so a
start mode setting takes the place of the three hardware versions.[^manual] The earliest dated
BANG2 document found is a leaflet of June 2020. The 2017 catalogue still lists the three earlier
versions, so the BANG2 appeared between those dates, although its English manual carries a
declaration of conformity dated November 2016.[^leaflet][^cat2017][^manual] The current English
manual is version E23-11-14, from November 2023, and the German edition is dated a day
later.[^manual][^manualde]

## Design and hardware

The BANG2 is an active speaker box: a two-way speaker system with a 20 cm woofer and a 2.5 cm
tweeter, driven by an amplifier rated at 80 W peak and 50 W RMS.[^manual] Its control panel has a
small OLED status display with three buttons for the settings, separate volume controls for the
microphone, line and auxiliary inputs, a master volume, bass and treble controls, a battery gauge,
and a switch for the radio headset receiver.[^manual] It can stand on its own or sit on the
`BANG-TRI` tripod, which ALGE gives as adjustable from 107 to 157 cm.[^manual][^leaflet]

The unit runs from the mains or from two built-in 12 V lead-gel batteries, and charges itself
whenever it is plugged in, including while in use.[^manual] ALGE rates it for 0–40 °C and for indoor
use unless it is fitted with the `BANG2-BAG` weather cover, which must stay on whenever it is
raining or snowing. The cover made for the earlier BANG models does not fit the
BANG2.[^manual][^product]

ALGE's figures for the BANG2's size and weight disagree. The manual and leaflet give
305 × 510 × 265 mm. The manual gives about 14.8 kg and the leaflet 12.5 kg. The product page gives
both 305 × 510 × 265 mm with 14.8 kg and 530 × 270 × 300 mm with 15.4 kg.[^manual][^leaflet][^product]
The earlier BANG models measured 300 × 470 × 230 mm and weighed 11.2 kg.[^athl2015][^cat2017] The
frequency range also differs: 20–20,000 Hz in the 2015 brochure, the 2017 catalogue and the BANG2
leaflet, but 70–16,000 Hz in the BANG2 manual.[^athl2015][^cat2017][^leaflet][^manual]

## Operation

This section describes how the BANG2 handles starts and false starts. The start always arrives on
timing channel C0. A second C0 impulse within five seconds, or an impulse on a separate false-start
channel (C4 by default), makes the speaker play the false-start sound. The BANG2 ignores a
false-start impulse that has no start before it, so a recall cannot sound by
accident.[^manual] Each channel has a delay of 0.1 second by default to suppress contact bounce,
adjustable in hundredths of a second, and the BANG2 passes the setting on to the other WTN devices
in its team.[^manual] After a start, the display shows whether it came by cable or by radio. It also
shows when a connected false-start system is not ready or the start line is shorted, and no start
can be given in that state.[^manual]

The start mode must match the installation:[^manual]

| Mode | Use |
|---|---|
| Wired | Cabled start system. Start impulses from the radio network are blocked, and the start is not sent out over the radio. |
| Wireless | Radio start system. The start arrives over WTN, and the start and false-start signals can also be passed to a cable output, for example when the link to the finish is wired. |
| Wired C0 | Cabled start whose impulse is also sent over WTN, for a radio link to the finish. ALGE advises avoiding it where possible, because a connected false-start system with its own radio can feed the signal back as an immediate false start. |

ALGE says a system should normally be all cable or all radio. The one mixture it allows is a cabled
start with a radio false-start button. A cabled [E-START](alge-e-start.md) must not be connected to a
radio false-start system.[^manual]

For spoken commands, the starter can use the microphone of an [SU3](alge-su3.md) start unit or an
[HS3-2](../timers/alge-hs3-2.md) headset connected through it, or the
[BANG-HS](../timers/alge-bang-hs.md) radio headset, which the BANG2 receives on its own UHF
receiver.[^manual][^cat2026] Through the SU3 the starter can also talk to the timing operator over
the start cable.[^manual]

## Audio

The start and false-start sounds are chosen separately from four settings: off, a simulated pistol
shot, a 1.8 kHz beep, and a siren. The pistol shot is the default start sound and the siren the
default false-start sound. Each has its own level, which ALGE suggests leaving at 100 % and setting
the overall volume with the master control instead.[^manual] The beep's 1.8 kHz frequency is the
same as the default start tone of ALGE's TM-SWIM swimming system, discussed on the
[start-systems overview](index.md).[^manual][^system]

Other audio connections:[^manual]

| Connection | Use |
|---|---|
| MIC IN (XLR or 6.3 mm jack, balanced, 6 mV) | Wired microphone |
| LINE IN (cinch, 800 mV) | Music or other line-level source |
| LINE OUT (cinch, 1 V) | Mono mix to a recorder or a second BANG2; follows the tone controls but not the master volume |
| SPEAKER (6.3 mm jack, at least 8 Ω) | Passive [BANG SPK](../timers/alge-bang-spk.md) speakers |

Up to eight BANG SPK speakers can be chained from the SPEAKER socket. Each is a passive speaker of
about 10 W with a fixed 12 m cable and a socket for the next one.[^manual][^leaflet] ALGE's 2015
brochure gave the limit as four.[^athl2015]

## Use in swimming

ALGE's 2026 aquatics catalogue uses the BANG2 in three swimming systems, each built around a
[Timy](../timers/alge-timy.md) Timy3 WP timer rather than the TM-SWIM console:[^cat2026]

| System | Start equipment shown |
|---|---|
| Cabled semi-automatic | BANG2 with a BANG-HS headset; a [023-10 push button](../semi-automatic/pushbutton/alge-023-02.md) gives the start; [MC8](../deck-cabling/alge-mc8.md) lane cabling |
| Radio semi-automatic | BANG2 with a BANG-HS headset and an E-START W; one WTN push button per lane |
| Open water | BANG2 with an E-START, an SU3, an [MC9](../timers/alge-mc9.md) and a start clock |

In ALGE's fully automatic pool system the start tone comes from the
[TM-SWIM](../timers/alge-tm-swim.md) through lane speakers, and the BANG2 is not part of the
drawing.[^cat2026][^system]

## Connections

The BANG2's timing connections are two LTW sockets and a pair of banana sockets.[^manual]

| Connection | Use |
|---|---|
| Two LTW sockets | Cable `199-xx` to an SU2 or SU3, a [FLASH XL](alge-flash-xl.md), a TM-SWIM, another BANG2, or ALGE's athletics false-start system |
| Banana sockets (green and black) | Start output to a timing device; also where a speech amplifier with headset connects |
| WTN radio | False-start devices, and the start in wireless mode |

ALGE's manual lists these starting devices for the cable input: the E-START, the SU2 and SU3 start
units, the [SM8 start microphone](alge-sm8.md) with a speech amplifier and headset, the 023-02 and
023-10 push buttons, and a photocell. By radio it accepts the E-START W, the WTN-PB push button, a
WTN unit and a radio photocell.[^manual] The manual describes the banana output both as an open
collector and as a normally open contact.[^manual] Every WTN device in one system needs the
same team number; a BANG2 leaves the factory on team 1.[^manual]

The earlier BANG models had the same two 7-pin LTW sockets and banana socket, plus a 5-pin DIN
socket.[^athl2015][^cat2017] ALGE's cable pages list the 20 m `199-20` cable and the
100 m `KT199Z10` reel for linking a BANG, BANG CW or BANG2 to the timing device or to another
BANG.[^cable]

## Specifications

| Specification | `BANG2` | `BANG`, `BANG W`, `BANG CW` |
|---|---|---|
| Amplifier | 80 W max / 50 W RMS | 80 W max / 50 W RMS |
| Speakers | 20 cm woofer, 2.5 cm tweeter | 20 cm woofer, 2.5 cm tweeter |
| Frequency range | 70–16,000 Hz (manual); 20–20,000 Hz (leaflet) | 20–20,000 Hz |
| Tone controls | Bass ±15 dB at 100 Hz; treble ±10 dB at 10 kHz | Same |
| Mains | 100–240 V, 50–60 Hz, 2 A | 90–265 V, 47–63 Hz, 150 VA |
| Batteries | 2 × 12 V / 5.2 Ah lead-gel | 2 × 12 V / 3 Ah |
| Battery running time | About 3–5 hours | Not given |
| Operating temperature | 0–40 °C | 0–40 °C |
| Timing radio | WTN, 2.4 GHz, 16 teams, 10 mW, about 300 m | WTN (`BANG W`, `BANG CW`) |
| Headset receiver | 863.1–864.9 MHz, 16 channels, about 30 m | 863.1–864.9 MHz, 16 frequencies, about 30 m (not `BANG CW`) |
| Dimensions | 305 × 510 × 265 mm (manual); 530 × 270 × 300 mm (product page) | 300 × 470 × 230 mm |
| Weight | About 14.8 kg (manual); 12.5 kg (leaflet); 15.4 kg (product page) | 11.2 kg |

BANG2 figures are from its manual unless marked; earlier-model figures are from the 2015 brochure
and 2017 catalogue.[^manual][^leaflet][^product][^athl2015][^cat2017]

## Care and maintenance

ALGE warns that the lead-gel batteries can be damaged by deep discharge, either when the BANG2 sits
uncharged for a long period or when it is left permanently on mains power. It recommends a full
charge of 12 hours at least once a month, for example with a time switch on the mains supply
during the off-season.[^manual] A blinking power switch shows that the batteries are nearly flat,
and the unit switches itself off before they are fully discharged.[^manual]

## Part numbers and accessories

This section lists the BANG2 and its companion parts.[^manual][^leaflet][^product]

| Item | Part number | Article |
|---|---|---|
| Speaker start system | `BANG2` | This article |
| Earlier speaker start systems | `BANG`, `BANG W`, `BANG CW` | This article |
| Radio headset | `BANG-HS` | [BANG-HS](../timers/alge-bang-hs.md) |
| Passive extension speaker | `BANG SPK` | [BANG SPK](../timers/alge-bang-spk.md) |
| Tripod | `BANG-TRI` | None |
| Weather cover | `BANG2-BAG` (earlier models: `BANG-BAG`) | None |
| Start unit | `SU3` | [SU3](alge-su3.md) |
| Electronic starting device | `E-START`, `E-START W` | [E-START](alge-e-start.md) |
| Connection cable and reel | `199-20`, `KT199Z10` | [Swimming cable sets](../deck-cabling/alge-swim-cable-sets.md) |

## See also

- [E-START](alge-e-start.md) and [SU3](alge-su3.md): the starting devices most often connected to a BANG
- [STB1 Startbeep](alge-stb1.md): ALGE's smaller battery start horn
- [WTN](../timers/alge-wtn.md): the radio network of the BANG W, BANG CW and BANG2
- [Start systems](index.md): the start-systems overview
- [ALGE-Timing](../../../vendors/alge-timing.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^manual]: [ALGE-Timing, Speaker System BANG2 manual](https://alge-timing.com/downloads/userGuides/BANG2-BE.pdf) (Version E23-11-14).
[^manualde]: [ALGE-Timing, Lautsprechersystem BANG2 Bedienungsanleitung](https://alge-timing.com/downloads/userGuides/BANG2-BD.pdf) (Version D23-11-15; in German).
[^leaflet]: [ALGE-Timing, Startspeaker System BANG2](https://alge-timing.com/downloads/leaflets/BANG2_PE.pdf) (leaflet, V 200601, June 2020).
[^product]: [ALGE-Timing, BANG2](https://alge-timing.com/en/product/757/bang2) (product page, as of November 2026).
[^athl2015]: [ALGE-Timing, Start Devices for Track and Field](https://www.splitsecond.com.au/brochures/Athletics-Start-Devices-KE.pdf) (V1510.1, 2015).
[^cat2017]: [ALGE-Timing, The Sports Timing Experts](https://www.alge-timing.fi/images/ALGE-yleisesite_eng.compressed.pdf) (general catalogue, 2017).
[^cat2026]: [ALGE-Timing, Aquatic Sports](https://alge-timing.com/downloads/leaflets/Swimming_KE.pdf) (catalogue, June 2026).
[^system]: [ALGE-Timing, Swimming Timing System Manual](https://alge-timing.com/downloads/userGuides/Swimming-BE.pdf) (Version E24-08-29).
[^cable]: ALGE-Timing product pages: [199-20](https://alge-timing.com/en/product/2069/199-20); [KT199Z10](https://alge-timing.com/en/product/2117/kt199z10).

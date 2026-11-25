---
title: ALGE SM8 start microphone
description: >-
  The SM8 is the ALGE-Timing start microphone that mounts on a blank-firing pistol and turns its
  report into a start impulse, powered through an SV4/SM speech amplifier or an SU3.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: SM8
infobox:
  - label: Manufacturer
    value: '[ALGE-Timing](vendors/alge-timing.md)'
  - label: Part number
    value: '`SM8`'
  - label: Type
    value: 'Start microphone'
  - label: Connection
    value: 'DIN plug to an [SV4/SM](equipment/swimming/accessories/alge-sv4.md) speech amplifier or an [SU3](equipment/swimming/starter/alge-su3.md)'
  - label: Power
    value: '6–15 V DC from the host device'
  - label: Introduced
    value: 'By October 2010 (manual E101007)'
  - label: Succeeded by
    value: '[SM9](equipment/swimming/accessories/alge-sm9.md)'
  - label: Status
    value: 'Superseded; ALGE now calls it an old start microphone'
  - label: Manual
    value: '[Start Gun, Start Microphone, Speech Amplifier, Headset (E101007)](https://alge-timing.com/downloads/userGuides/SM8-SV4-HS2-BE.pdf)'
---

<!--
Research notes, ALGE SM8 start microphone.

Surfaced 2026-11-04 while building out alge-tm-swim.md. Built out 2026-11-19.

Original stub notes: the SU3 manual names the SM8 as an external start device beside the e-Start,
on the same DIN socket with 11 V supply; the SU3 product page repeats the name. Open questions were
how it triggers, its size, and whether swimming uses it.

Build-out sources (all read in full unless noted):
  - ALGE-Timing, Start Gun, Start Microphone, Speech Amplifier, Headset manual, Version E101007
    (8 pp., PDF 7 October 2010), alge-timing.com/downloads/userGuides/SM8-SV4-HS2-BE.pdf, linked
    from the HS4-1 product page; filed under start-systems/. The shot makes a microphone in the
    front of the SM8 give an electrical impulse. Mount it so the muzzle blast passes close to the
    microphone, with the cable running back toward the grip and clear of the flash, which can burn
    it. Keep the pistol clean so nothing blocks the muzzle; blanks dry and less than a year old.
    SM8 plug: pin 1 open-collector output, max 12 V / 50 mA, low pulse about 100 ms; pin 2 unused;
    pin 3 ground; pin 4 +6 to 15 V, 0.6 mA (from the SV4/SM); pin 5 +5 V stabilized, 0.4 mA
    "of ODB1" (ODB1 not identified anywhere else in the corpus). SV4 comes as SV4-S (no start
    microphone socket) and SV4-SM (with one); the SM8 runs from the SV4/SM's 9 V battery; about
    150 h at 20 C and 25 h at -20 C with the SM; low-battery beep below 5.5 V. Two-wire line to
    the timer (e.g. KT300 reel); polarity right when the SV4/SM LED blinks. Headsets HS2-2 (two
    earpieces, 2 or 5 m) and HS2-1 (one earpiece, 2 m). Lists SV4, Timer S4, TdC and OPTIc as
    receivers in the ALGE speech system. No SM8 dimensions or weight.
  - ALGE-Timing, Communication System manual, Version E250108 (12 pp., PDF 8 January 2025): SV4-S,
    SV4/SM, SV5-BT and headsets; nothing new on the SM8.
  - ALGE-Timing, Startmicrophone SM9 manual, Version E23-11-14 (4 pp.): the successor, see
    alge-sm9.md.
  - ALGE product pages (read 2026-11-19): SV4/SM page says it is for the E-Start as a start
    device and "for old start microphones SM8 or older", and points SM9 users to the SV4-S; SV4/SM
    125 x 75 x 40 mm, 186 g, 9 V, 150 h. SM9 page: no SV4/SM needed, not suitable for the SU3.
    No SM8 product page in alge-timing.com/sitemap.products.xml. SU3 page still names the SM8.
  - ALGE, Start Devices for Track and Field V1510.1 (2015), p6: SM8 for every sport started with a
    pistol (it names cycling, cross-country, athletics, short track, triathlon and speed skating); pistol uses
    9 mm blanks; the SM8 is fastened to it; SM8 into SV4/SM, then two-core banana cable to the
    timer; a headset on the SV4/SM shares that two-wire line with the start impulse. Drawing names
    the pistol "Startgun STP" and the headset HS3-2.
  - ALGE general catalogue 2017, p20 and p17: same text; SM8 listed among BANG accessories and as
    an impulse source for the TED radio link.
  - ALGE-Timing, Start Unit SU3 manual E-23-11-02: DIN socket (10) for an e-Start or SM8; pin 1 C0,
    2 status, 3 ground, 4 11 V out. Pins 1, 3 and 4 line up with the SM8 plug. The SU3's start
    button is an alternative to the external device.
  - ALGE-Timing, Speaker System BANG2 manual E23-11-14: SM8 with SV4/SM and HS3-2 among the cable
    start devices.
  - ALGE-Timing, Timer S4 manual E-06-04-18, p12: start impulse from a start microphone over a
    one-pair cable reel to an "SV3/SM6"; polarity right when the SM6 LED blinks. Taken as the
    predecessor pair (SV3 amplifier, SM6 microphone); ALGE does not state the succession.
  - ALGE Aquatic Sports catalogue, June 2026: no SM8 or SM9 in any swimming system.

Dates: SM6 in the S4 manual (version dated 2006; the S4 system goes back to the 1990s); SM8 manual
October 2010; SM8 in 2015 and 2017 literature; SM9 manual November 2023 and product page ID 4820,
where the SM8 is called old. SM8 introduction date not found.

Discrepancies: SV4 size 120 x 73 x 40 mm, about 100 g without battery (manuals) vs 125 x 75 x 40
mm, 186 g (product page); SM8 output limit 12 V / 50 mA (SM8 manual) vs the SU3 feeding it 11 V.
None material.

Not established: SM8 size, weight, cable length, sensitivity or rejection of other noise, price,
end of sale. No independent review found.

Not stubbed: STP start pistol, KT300 reel, ODB1, HS2 headsets (older ALGE headsets; named only in
these notes), SV3 (named in the SV4 stub). Stubbed: SV4 speech amplifier, SM9, SM6.
-->

The SM8 is a start microphone made by [ALGE-Timing](../../../vendors/alge-timing.md) of Lustenau,
Austria. It clips onto a blank-firing starting pistol, and the sound of the shot makes it send an
electrical impulse that starts the timing device.[^manual][^athl2015] It needs a supply from the
device it plugs into: normally an SV4/SM speech amplifier, which also links the starter's headset
to the timing operator, or the [SU3](../starter/alge-su3.md) start unit.[^manual][^su3] ALGE sold it for
sports started with a pistol, such as athletics, triathlon, cycling, speed skating and
cross-country skiing.[^cat2017] It has since been replaced by the [SM9](alge-sm9.md), and ALGE now
refers to the SM8 as an old start microphone.[^sv4sm]

See the [start-systems overview](../starter/index.md) for the shared background that applies to every start
system.

## Naming and product line

This section covers the SM8's place among ALGE's start microphones. The earliest ALGE start
microphone found in the sources is the [SM6](alge-sm6.md), which the Timer S4 manual shows paired
with an SV3 speech amplifier on a cable reel to the timer.[^s4] The SM8's own manual is version
E101007, from October 2010, and the SM8 appears in ALGE's 2015 athletics start-devices brochure and
its 2017 general catalogue.[^manual][^athl2015][^cat2017]

ALGE's current product pages list the SM9 instead. The SV4/SM speech amplifier page describes the
SV4/SM as suited to "old start microphones SM8 or older" and tells SM9 users to choose the SV4-S,
and there is no SM8 product page.[^sv4sm][^sm9] ALGE does not state when the SM8 was introduced or
withdrawn, and does not say in so many words that each microphone replaced the one before.

## Design and hardware

The SM8 is a housing with a microphone in its front end and a cable ending in a DIN plug. It
is fastened to the pistol so that the blast from the muzzle passes close to the microphone, with
the cable running back toward the grip.[^manual] ALGE warns that the cable must be kept away from
the muzzle flash, which can burn through it.[^manual] None of the sources found give the SM8's size,
weight or cable length.

The microphone has no battery. It draws about 0.6 mA at 6–15 V from the device it is plugged into.
Its output is an open-collector transistor, rated at 12 V and 50 mA, which pulls the line low for
about 100 milliseconds when the shot is detected.[^manual]

## Operation

This section describes how the SM8 is used. The starter fires a pistol loaded with blanks, and the
report triggers the start impulse.[^manual][^athl2015] ALGE's 2015 brochure describes the pistol as
using 9 mm blanks.[^athl2015] For reliable triggering, ALGE's manual asks for the pistol to be kept
clean so that nothing obstructs the muzzle, and for blank cartridges to be kept dry and used within
a year.[^manual]

When the SM8 is connected to an SV4/SM, the amplifier's single two-wire cable to the timer carries
both the start impulse and the conversation between the starter's headset and the timing operator.
The polarity of that cable matters: ALGE says it is correct when the SV4/SM's LED blinks at regular
intervals.[^manual][^athl2015] The SV4/SM switches itself on when a headset is plugged in, and powers
the SM8 from its own 9 V battery. ALGE advises unplugging the headset and the microphone after an
event so that the amplifier switches off and the battery is not drained.[^manual]

## Use in swimming

In swimming the SM8's documented role is as an alternative start trigger on ALGE's SU3 start unit.
The SU3 manual names the SM8 and the [E-START](../starter/alge-e-start.md) as the external devices that can
plug into its DIN socket in place of its own start button, and supplies them with 11 V on that
socket.[^su3] The SU3 sits at the starter's position in ALGE's [TM-SWIM](../timers/alge-tm-swim.md)
pool system.[^su3] ALGE's swimming catalogues of 2013 and 2026 do not show a start microphone in any
system, and its current swimming system drawings use the E-START.[^cat2013][^cat2026]

See the [start-systems overview](../starter/index.md) for how swimming starts are signalled and the rules
that apply to them.

## Connections

The SM8's DIN plug has five pins:[^manual]

| Pin | Signal |
|---|---|
| 1 | Start impulse: open collector, max. 12 V / 50 mA, low for about 100 ms |
| 2 | Not used |
| 3 | Ground |
| 4 | Supply in, 6–15 V, about 0.6 mA (from the SV4/SM) |
| 5 | Stabilized 5 V supply, about 0.4 mA, from another ALGE device |

Pins 1, 3 and 4 match the SU3's socket for a start device, which carries the start channel C0,
ground and an 11 V supply on those pins.[^su3][^manual] ALGE's BANG2 speaker manual lists the SM8,
with an SV4/SM and a headset, among the cable starting devices a [BANG](../external-speaker/alge-bang.md) speaker
accepts.[^bang2]

## Specifications

| Specification | Value |
|---|---|
| Trigger | Sound of a blank-pistol shot |
| Output | Open collector, active low, about 100 ms; max. 12 V / 50 mA |
| Supply | 6–15 V DC from the host device, about 0.6 mA |
| Connector | DIN plug |
| Hosts | SV4/SM speech amplifier; SU3 start unit |

Figures are from the 2010 manual.[^manual] The manual gives no size or weight for the SM8.

## Part numbers and accessories

This section lists the SM8's companion parts.[^manual][^sv4sm][^su3]

| Item | Part number | Article |
|---|---|---|
| Start microphone | `SM8` | This article |
| Speech amplifier for a start microphone | `SV4/SM` | [SV4 speech amplifier](alge-sv4.md) |
| Start unit | `SU3` | [SU3](../starter/alge-su3.md) |
| Headsets | `HS3-2`, `HS4-1`, `HS4-2` | [HS3-2](alge-hs3-2.md); [HS4 headsets](alge-hs4-1.md) |
| Successor | `SM9` | [SM9](alge-sm9.md) |
| Predecessor | `SM6` | [SM6](alge-sm6.md) |

## See also

- [SM9](alge-sm9.md) and [SM6](alge-sm6.md): ALGE's later and earlier start microphones
- [E-START](../starter/alge-e-start.md): ALGE's electronic starting device, which replaces the pistol
- [SU3](../starter/alge-su3.md): the start unit the SM8 can plug into
- [Start systems](../starter/index.md): the start-systems overview
- [ALGE-Timing](../../../vendors/alge-timing.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^manual]: [ALGE-Timing, Start Gun, Start Microphone, Speech Amplifier, Headset](https://alge-timing.com/downloads/userGuides/SM8-SV4-HS2-BE.pdf) (manual, Version E101007).
[^sv4sm]: [ALGE-Timing, SV4/SM](https://alge-timing.com/en/product/2128/sv4/sm) (product page, as of November 2026).
[^sm9]: [ALGE-Timing, SM9](https://alge-timing.com/en/product/4820/sm9) (product page, as of November 2026).
[^su3]: [ALGE-Timing, Start Unit SU3 manual](https://alge-timing.com/downloads/userGuides/SU3_BE.pdf) (Version E-23-11-02).
[^bang2]: [ALGE-Timing, Speaker System BANG2 manual](https://alge-timing.com/downloads/userGuides/BANG2-BE.pdf) (Version E23-11-14).
[^athl2015]: [ALGE-Timing, Start Devices for Track and Field](https://www.splitsecond.com.au/brochures/Athletics-Start-Devices-KE.pdf) (V1510.1, 2015).
[^cat2017]: [ALGE-Timing, The Sports Timing Experts](https://www.alge-timing.fi/images/ALGE-yleisesite_eng.compressed.pdf) (general catalogue, 2017).
[^cat2026]: [ALGE-Timing, Aquatic Sports](https://alge-timing.com/downloads/leaflets/Swimming_KE.pdf) (catalogue, June 2026).
[^cat2013]: [ALGE-Timing, The Specialist for Swimming](https://www.freker.se/dokument/ALGE%20Swimming-KE-1.PDF) (catalogue V1.113, 2013).
[^s4]: [ALGE-Timing, Timer S4 manual](https://alge-timing.com/downloads/userGuides/s4-be.pdf) (Version E-06-04-18).

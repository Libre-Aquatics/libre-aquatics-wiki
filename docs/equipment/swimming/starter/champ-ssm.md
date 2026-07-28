---
title: Championship Start System (CHAMP-SSM)
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Championship Start System (CHAMP-SSM)
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Part number
    value: '`CHAMP-SSM` (also cataloged `SSM`)'
  - label: Type
    value: Deck-wired swimming start system (legacy)
  - label: Models
    value: Championship
  - label: Dimensions
    value: 13.25 × 17 × 4 in (33.7 × 43.2 × 10.2 cm)
  - label: Weight
    value: 20 lb (9.1 kg)
  - label: Power
    value: Two internal 12 V gel-cell batteries; external AC charger
  - label: Introduced
    value: Pre-2005
  - label: Status
    value: Discontinued
  - label: Succeeded by
    value: >-
      [Championship Start
      System](equipment/swimming/starter/championship-start-system.md) (`SS`)
  - label: Manual
    value: F875 Rev. 0604 (©2004)
---

CHAMP-SSM is the part-number label carried by an earlier, pre-2005 generation of
[Colorado Time Systems](../../../vendors/colorado-time-systems.md)'
deck-wired Championship start system. The unit is badged simply "Championship
Start System", the same as the current-era
[Championship Start System](championship-start-system.md) (part number `SS`), so
the two are distinguished mainly by their part numbers and their era. The earlier
generation is documented by the 2004 revision of the CTS instruction guide,
F875 Rev. 0604, the same document number whose later revisions cover the current
generation.[^f875-0604] This page describes the earlier generation from that
period manual and from independent period sources.

This article covers it separately only because it is the earlier hardware
generation of the Championship, not a distinct product line; the
[start-systems overview](index.md) places it in the full CTS lineup.

## Naming and product line

CTS does not use the `CHAMP-SSM` (or `SSM`) designation in its own documentation:
the 2004 manual is titled simply "Championship Start", and the current
documentation uses `SS`. What ties the label to this generation:

- The Championship start system was on the market by 2004: CTS advertised it by
  name, with a photograph of the white-cased unit, in *Swimming Technique*
  magazine that year.[^advert]
- The 2004 revision of the instruction guide (F875 Rev. 0604, ©2004) documents a
  unit that differs physically from the current `SS` model (see
  [Compared with the current generation](#compared-with-the-current-generation)
  below).[^f875-0604]
- CTS's current power-supply compatibility list, alongside the `SS`/`SSF`/`WSS`/
  `WSSF` Championship variants, names two legacy start systems, `SS-01` and
  `SS-02`, which may be this earlier generation; the listed power supply fits
  start systems that, like this one, run from an external supply. The numbering
  also matches CTS's earlier `SS-1`/SS2 loudspeaker start systems, documented
  in the [SS2 Electronic Start System](ss2.md) article, so the identification is
  uncertain.[^psu]
- CTS's manual library still includes "Championship Start System Legacy Tripod
  Mounting Instructions" (document `TR-2`), separate from the current `TR-3`
  tripod; the 2004 manual specifies the `TR-2` as the unit's optional
  tripod.[^manuals][^f875-0604]
- CTS's legacy Spanish-language site hosts the 2004 manual in its manuals
  directory under the short name "ChampStart"; the current revision of the
  instruction guide uses the same name for the unit.[^f875-0604][^f875]
- In the current Championship manual (F875 Rev. 202202), the configuration
  diagrams label the start module `CHAMP-SS`.[^f875]

Because CTS treats these as catalog- and era-specific labels for the Championship
start system rather than as separate products, the CHAMP-SSM is best understood
as the earlier generation of the
[Championship Start System](championship-start-system.md), not a different model.

## Design and hardware

The 2004-era unit is a rectangular case 13.25 in high, 17 in wide, and 4 in
deep, weighing 20 lb, placed on a tabletop or on the optional `TR-2` tripod (CTS
specifies not to use a standard camera tripod).[^f875-0604] The front panel
carries two identical wired-microphone inputs, each with an independent volume
control, a green power LED, a red low-battery LED, the on/off switch, and an
auxiliary-speaker connector with its own volume control. The rear panel carries
the external-power connector for the AC converter, three fuses (one per battery
plus one for the AC-converter circuit, all 5 × 20 mm, 5 A slow-blow), a connector
for the optional wireless-microphone receiver, and a 10-pin military-style
wallplate connector that bundles the timer-start, lane-speaker audio,
external-strobe, and speedlight lines for in-deck wiring.[^f875-0604]

Like the current generation, the unit contains no built-in speaker: all start
and public-address audio sounds through the deck-wired external speakers, on
two speaker circuits. The main circuit drives up to twelve 6-watt, 45-ohm
moisture-resistant reflex speakers mounted under the starting blocks; its start
tone is fixed at full volume. The
auxiliary circuit drives up to two 10-watt, 8-ohm compression speakers, for
example on a backstroke pole, with an adjustable start-tone volume. The system
also supports an optional underwater speaker, for underwater recall and for
addressing swimmers in training. The unit also drives the speedlights on CTS
relay-judging platforms in up to 12 lanes, and a 360-degree strobe that flashes
with the start tone and needs about 30 seconds between flashes to recharge. The
manual directs officials, coaches, and spectators to start stopwatches from the
strobe or speedlight flash rather than the start tone, because the speed of
sound delays the tone for observers at any distance from the
speakers.[^f875-0604]

Power comes from two internal 12 V rechargeable gel-cell batteries; CTS presents
battery operation as a safety feature that keeps AC power away from the pool
deck. The external AC converter (110 VAC, 60 Hz) recharges the batteries in 12 to
24 hours, whether the unit is switched on or off, and the unit can operate
while charging.[^f875-0604]

## Operation

The starter's microphone, wired or wireless, carries a push-to-talk switch and a
start button. Holding push-to-talk and pressing the start button fires the start:
a 0.25-second dual-tone blast, a simultaneous strobe and speedlight flash, and a
start pulse to the timer. Releasing the start button and pressing it again
signals a false-start recall, a repeating dual tone from all connected speakers,
including any underwater speaker. When multiple microphones are connected, the
unit sees all start buttons as a single button, so every button must be
released before any is pressed again to recall. CTS also presents the system as
a limited public-address system: pressing push-to-talk alone carries the
starter's voice to the speakers without firing a start. The microphone volume
controls affect only this public-address audio.[^f875-0604]

The optional wireless-microphone kit consists of a belt-clipped transmitter and
a receiver that plugs into the rear panel; the receiver's model designation,
`RXR`, appears on its FCC identification label. The receiver carries squelch and
channel-select controls and an indicator LED that lights when it is receiving
the transmitter. The link offers eight selectable channels, a second microphone
must be set at least two channels away from the first, and CTS states a range of
up to 350 ft (107 m). The transmitter runs on a 9 V battery and reports its
charge when push-to-talk is released: a blinking low-battery LED means the
battery is good, and a steady one means it needs replacement.[^f875-0604]

## Connections

The timer-start output emits a normally-open (N.O.) pulse and nothing else; a timer
expecting a normally-closed pulse means sending the unit back for factory
modification. The manual names
CTS's System 5 and [System 6](../timers/system-6.md) as the timers the system
starts, connected through a start jumper cable, models `SJ-50` through `SJ-200`.
Deck wiring reaches the unit from one end of the pool or the other, either lane 1 or
whichever lane is the final one, be that 6, 8, 10 or 12. The manual gives both on-deck and
in-deck configurations.[^f875-0604]

## Compared with the current generation

Comparing the 2004 manual with the current revision (F875 Rev. 202202) shows how
the generations differ:[^f875-0604][^f875]

- Case: the 2004 unit is 13.25 × 17 × 4 in and 20 lb; the current `SS` unit
  is 13.25 × 13 × 5.75 in and 17.4 lb.
- Connector layout: the 2004 unit puts its connectors on the front and rear
  panels, with the wireless receiver and wallplate connectors on the rear; the
  current unit spreads them across the front, left, and right panels.
- Tripod: the 2004 unit uses the legacy `TR-2`; the current unit uses the
  `TR-3` (and adds wall and flagpole mounts).
- Auxiliary circuit: the 2004 manual rates the auxiliary output for up to two
  speakers; the current manual describes one.

The speaker architecture, start and recall tones, strobe, speedlight drive, and
normally-open timer output are otherwise the same across both generations; see
the [Championship Start System](championship-start-system.md) article for the
current generation.

## Specifications

| | |
|---|---|
| Dimensions (H × W × D) | 13.25 × 17 × 4 in (33.7 × 43.2 × 10.2 cm) |
| Weight | 20 lb (9.1 kg) |
| Power | Two internal 12 V gel-cell batteries; 110 VAC 60 Hz converter |
| Charging | 12 to 24 hours; operates while charging |
| Fuses | One per battery plus AC circuit; all 5 × 20 mm, 5 A slow-blow |
| Built-in speaker | None; audio through the external speakers |
| Lane speakers | Up to 12 × 6 W, 45 Ω under-block reflex speakers |
| Auxiliary speakers | Up to 2 × 10 W, 8 Ω compression speakers (adjustable volume) |
| Speedlights | Drives relay-judging-platform speedlights in up to 12 lanes |
| Microphones | 2 wired inputs plus optional wireless kit (`RXR` receiver) |
| Wireless range | Up to 350 ft (107 m), 8 channels |
| Start output | Normally-open pulses; N.C. by factory modification |
| Start tone | 0.25 s dual-tone blast with simultaneous strobe/speedlight |
| Strobe | 360°, about 30 s recharge between flashes |
| Mounting | Tabletop or `TR-2` tripod |

## See also

- [SS2 Electronic Start System](ss2.md): the 1990s loudspeaker start system
  that preceded the Championship line
- [Championship Start System](championship-start-system.md): the current-era
  generation
- [Championship Elite Start System](championship-elite-start-system.md): the
  current top-line Championship model
- [System 6](../timers/system-6.md): a timing console of the same era
- [Colorado Time Systems lane speakers](../external-speaker/cts.md): the
  under-block speakers this start system drives
- [Start systems](index.md): the full CTS start-system lineup
- [Colorado Time Systems](../../../vendors/colorado-time-systems.md): the
  manufacturer

## References

[^f875-0604]: [Colorado Time Systems, Championship Start Instruction Guide, F875 Rev. 0604 (©2004)](https://spanish.coloradotime.com/manuals/ChampStart_0604.pdf), hosted as "ChampStart" on the CTS Spanish-language site; the current generation is covered by later revisions of the same document number (see F875 Rev. 202202 below).
[^advert]: Colorado Time Systems advertisement, "Tips for Training with the Championship Start System," *Swimming Technique* 41(1), April–June 2004, p. 16 (©2004 Colorado Time Systems). [Issue PDF](https://www.swimmingworldmagazine.com/premium/samples/200404st.pdf).
[^psu]: [Colorado Time Systems shop, Start System Power Supply (R-920-059)](https://shop.coloradotime.com/products/start-system-power-supply-920-029), compatibility list covering `SS`/`SSF`/`WSS`/`WSSF`, `INF-SSM`/`INF-SSMF`, and legacy `SS-01`/`SS-02`.
[^manuals]: [Colorado Time Systems, Manuals library](https://coloradotime.com/support/manuals) (lists "Championship Start System Legacy Tripod Mounting Instructions," document TR-2).
[^f875]: [Colorado Time Systems, Championship Start Instruction Guide (F875 Rev. 202202)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Start%20Systems/Champ_Start_User_Guide_F875.pdf).

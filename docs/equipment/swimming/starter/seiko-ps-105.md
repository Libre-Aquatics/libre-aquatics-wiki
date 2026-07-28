---
title: Seiko PS-105 Electronic Starter
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Seiko PS-105 Electronic Starter
infobox:
  - label: Manufacturer
    value: Seiko
  - label: Part number
    value: '`PS-105` (system); `PS-70`, `PS-60`, `PS-50` (components)'
  - label: Type
    value: Portable electronic starting device
  - label: Speaker
    value: 'Separate battery-powered speaker box `PS-50`, 6 W rated, 10 W maximum'
  - label: Flash
    value: Xenon strobe in the pistol
  - label: Start output
    value: 'Make contact, closed while the trigger is held'
  - label: Power
    value: 'Dry cells only: 4 × AA (pistol), 4 × C (speaker box)'
  - label: Manufactured
    value: To 1997
  - label: Succeeded by
    value: PS-107
  - label: Status
    value: Discontinued
  - label: Manual
    value: Seiko R-I3002
    href: >-
      https://www.seiko-stc.co.jp/products/uploads/ps105.pdf
---

The Seiko PS-105 is a discontinued portable electronic starter made by
[Seiko](../../../vendors/seiko.md) Time Systems Inc. of Tokyo, the earliest documented
member of the company's
エレクトロニックスタータ line that leads to the current
[PS-110J](seiko-electronic-starting-system.md). Pulling the trigger of its pistol
fired a xenon strobe, sounded a simulated pistol shot through a separate
battery-powered speaker box, and closed a contact that could start a connected
timer.[^manual] Like every unit in this line it is general sports equipment rather
than swimming-specific. Seiko lists it under multi-timing rather than swimming and
publishes no governing-body certification for it, where its poolside
[PS-1200](seiko-ps-1200.md) generator of the same period was listed as conforming to
FINA rules and certified by the Japan Swimming Federation.[^discidx][^ps1200] This
article is a starting point; the [start-systems overview](index.md) covers the shared
background that applies to every starter.

## Models and naming

Seiko manufactured the PS-105 until 1997 and replaced it with the
[PS-107](seiko-ps-107.md).[^discidx] The company does not publish a parts-support end
date for it; its general policy is that repair and parts supply for a discontinued
product run, as a rule, for seven years from the end of production, with the caveat
that they may not be possible for the whole of that period.[^discpolicy]

The system shipped as three part-numbered components, the starter pistol `PS-70`, the
headset microphone `PS-60` and the speaker box `PS-50`, together with a cable with box
that the manual does not give a model number or a length, four AA cells and four C
cells.[^manual] The manual is Japanese only and carries the document number `R-I3002`.

## Design and hardware

The pistol is moulded ABS in grey, 205 W × 156 D × 38 H mm, and weighs about 250 g
without batteries or cable. It runs on two lines of two AA cells. The strobe is a
xenon lamp.[^manual]

The speaker box is ABS resin with an aluminium plate, in ivory, 266 W × 92 D × 176 H mm
and about 1.5 kg without cells, powered by four C cells at 6 V.[^manual]

The headset microphone is a condenser type of 160 W × 170 D × 68 H mm weighing about
45 g including its cable, the same unit Seiko carried forward unchanged into the
[PS-107](seiko-ps-107.md) and [PS-109](seiko-ps-109.md).[^manual]

## Operation

The PS-105 offers one start sound. Its power switch has three labelled positions, OFF,
S and S&F, and at S&F pulling the trigger produces the pistol sound, the strobe flash
and the contact signal together.[^manual] The manual glosses both OFF and S as 電源 切,
power off, which appears to be a misprint, since it gives the S position no other
function. Later units in the line added a second, electronic tone.

A separate whistle switch on the speaker box sounds a whistle at a fixed level that the
volume control does not affect.[^manual]

## Audio

The speaker box is rated at 6 W with a maximum of 10 W, and its practical sound
pressure level is 93 dB at 10 m. Its audio input is rated at -20 dB into 100 kΩ. The
pistol delivers its microphone input at -50 dB and its pistol and microphone output at
-10 dB.[^manual]

Seiko states that the speaker box can be used on its own, in multiples, or connected to
other equipment, but the manual sets no limit on the number of boxes and gives no
maximum cable length. Those limits appear only in the later
[PS-110](seiko-electronic-starting-system.md) manual and must not be read back onto
this unit.[^manual]

The manual gives the speaker-box cell life against manganese cells as 91 dB at 10 m
after about 3,000 pistol flashes, and the pistol's strobe life as about 350 flashes,
counted as the cumulative number of flashes at 30-second intervals for as long as the
charge-complete lamp still relights within 30 seconds.[^manual]

## Connections

The start signal is a make contact of 0.2 Ω or less rated at DC 30 V and 0.5 A, output
between pins 1 and 3 of a Hoshiden `TCS0250-01-0301` connector, with `TCP0556-01-0201`
as the mating cable-side part. The contact is closed for as long as the trigger is
held.[^manual]

The [PS-107](seiko-ps-107.md) and [PS-109](seiko-ps-109.md) replaced this mechanical
contact with a semiconductor relay output synchronised to the electronic sound, while
keeping the same Hoshiden connector part numbers. The later PS-110 changed the
connector as well, to a Marushin `MJ-192`.[^ps110man]

## Specifications

Starter pistol (`PS-70`):

| | |
|---|---|
| Power | DC 3 V (2 × AA cells) × 2 lines |
| Strobe | Xenon lamp |
| Strobe life | Approx. 350 flashes (manganese cells) |
| Audio battery life | Approx. 300 hours (continuous use at normal temperature) |
| Start signal | Make contact, 0.2 Ω or less, DC 30 V / 0.5 A |
| Microphone input | -50 dB |
| Pistol and microphone output | -10 dB |
| Current draw | Max. approx. 11 mA (audio); max. approx. 3 A (strobe) |
| Enclosure | ABS resin, grey |
| Dimensions | 205 W × 156 D × 38 H mm |
| Weight | Approx. 250 g (excluding cells and cable) |
| Operating temperature | -5 to +50 °C |
| Storage temperature | -15 to +60 °C |

Speaker box (`PS-50`):

| | |
|---|---|
| Power | 6 V (4 × C cells) |
| Current draw | Approx. 3 A on pistol sound; approx. 150 mA silent |
| Battery life | 91 dB at 10 m after approx. 3,000 pistol flashes (manganese cells) |
| Audio input | -20 dB (100 kΩ) |
| Rated output | 6 W (10 W maximum) |
| Sound pressure | 93 dB at 10 m |
| Enclosure | ABS resin and aluminium plate, ivory |
| Dimensions | 266 W × 92 D × 176 H mm |
| Weight | Approx. 1.5 kg (excluding cells) |
| Operating temperature | -5 to 40 °C |
| Storage temperature | -15 to 50 °C |

Headset microphone (`PS-60`):

| | |
|---|---|
| Type | Condenser microphone |
| Output impedance | 1.6 kΩ ±30% |
| Sensitivity | -68 dB ±3 dB |
| Dimensions | 160 W × 170 D × 68 H mm |
| Weight | Approx. 45 g (including cable) |

The manual makes no statement about weather protection, and names no other Seiko
equipment.

## See also

- [Seiko PS-107 Electronic Starter](seiko-ps-107.md): the successor
- [Seiko Electronic Starting System](seiko-electronic-starting-system.md): the current
  unit in the same line
- [PS-1200 Electronic Start Sound Generator](seiko-ps-1200.md): the swimming-certified
  generator of the same period
- [Start systems](index.md): the start-system overview and governing-body requirements
- [Seiko](../../../vendors/seiko.md): the manufacturer
- [Equipment](../../index.md): the wider equipment reference

## References

[^manual]: [Seiko Time Systems, エレクトロニックスタータ PS-105 取扱説明書](https://www.seiko-stc.co.jp/products/uploads/ps105.pdf) (document R-I3002, Japanese).
[^discidx]: [Seiko Time Creation, discontinued multi-timing products](https://www.seiko-stc.co.jp/support/discontinued_product/sports/multitiming/) (製造時期 ～1997年).
[^discpolicy]: [Seiko Time Creation, discontinued products](https://www.seiko-stc.co.jp/support/discontinued_product/) (repair and parts supply run, as a rule, for seven years from the end of production).
[^ps1200]: [Internet Archive, Seiko swimming products index, 18 April 2009 snapshot](http://web.archive.org/web/20090418201441if_/http://www.seiko-sts.co.jp/products/sports/cat01/001.html) (the PS-1200's FINA and Japan Swimming Federation certification lines).
[^ps110man]: [Seiko Time Creation, Electronic Starting System PS-110 Operating Manual](https://www.seiko-stc.co.jp/products/uploads/pdf/st_ps-110.pdf) (the MJ-192 connector on the later model).

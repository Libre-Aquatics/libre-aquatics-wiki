---
title: Seiko PS-107 Electronic Starter
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Seiko PS-107 Electronic Starter
infobox:
  - label: Manufacturer
    value: Seiko
  - label: Part number
    value: '`PS-107` (system); `PS-77`, `PS-60`, `PS-50`, `PS-80` (components)'
  - label: Type
    value: Portable electronic starting device
  - label: Speaker
    value: 'Separate battery-powered speaker box `PS-50`, 6 W rated, 10 W maximum'
  - label: Flash
    value: Xenon strobe in the pistol
  - label: Start output
    value: 'Photo-MOS relay, 10 Ω or less on-resistance'
  - label: Power
    value: 'Dry cells only: 4 × AA (pistol), 4 × C (speaker box)'
  - label: Manufactured
    value: 1997–2002
  - label: Predecessor
    value: PS-105
  - label: Succeeded by
    value: PS-109
  - label: Status
    value: Discontinued
  - label: Manual
    value: Seiko R-I3003
    href: >-
      https://www.seiko-stc.co.jp/products/uploads/pdf/ps107.pdf
---

The Seiko PS-107 is a discontinued portable electronic starter made by
[Seiko](../../../vendors/seiko.md) Time Systems Inc. of Tokyo, the second documented
member of the company's
エレクトロニックスタータ line. It replaced the [PS-105](seiko-ps-105.md) and introduced
two changes that the rest of the line kept: a second selectable start sound, and a
semiconductor relay in place of the earlier mechanical start contact.[^manual] Like
every unit in this line it is general sports equipment rather than swimming-specific.
Seiko lists it under multi-timing rather than swimming and publishes no governing-body
certification for it, where its poolside [PS-1200](seiko-ps-1200.md) generator of the
same period was listed as conforming to FINA rules and certified by the Japan Swimming
Federation.[^discidx][^ps1200] This article is a starting point; the
[start-systems overview](index.md) covers the shared background that applies to every
starter.

## Models and naming

Seiko manufactured the PS-107 from 1997 to 2002.[^discidx] It replaced the
[PS-105](seiko-ps-105.md) and was replaced by the [PS-109](seiko-ps-109.md). The
company does not publish a parts-support end date for it; its general policy is that
repair and parts supply for a discontinued product run, as a rule, for seven years
from the end of production.[^discpolicy]

The system shipped as the starter pistol `PS-77`, the headset microphone `PS-60`, the
speaker box `PS-50` and a 5 m cable with box, `PS-80`, with four AA cells, four C
cells, the manual and a warranty card.[^manual] The manual is Japanese only and carries
the document number `R-I3003`.

The headset microphone and the speaker box are carried over unchanged from the
PS-105.[^manual] The pistol is new.

## Design and hardware

The pistol is moulded ABS in dark grey, 207 W × 153 D × 38 H mm, and weighs about 250 g
without batteries or cable. It runs on two lines of two AA cells and its strobe is a
xenon lamp.[^manual] It is dimensionally close to the `PS-70` it replaced but not
identical, and it is a different unit again from the aluminium pistols Seiko later used
on the [PS-110](seiko-electronic-starting-system.md).

The speaker box is ABS resin with an aluminium plate, in ivory, 266 W × 92 D × 176 H mm
and about 1.5 kg without cells, powered by four C cells at 6 V.[^manual]

The headset microphone is a condenser type of 160 W × 170 D × 68 H mm weighing about
45 g including its cable.[^manual]

## Operation

The PS-107 offers two start sounds, selected on the pistol's power switch. At its
centre position the unit produces an electronic beep with the strobe flash and the
start signal; at the ON position it produces a simulated pistol shot with the same
flash and signal.[^manual] The [PS-105](seiko-ps-105.md) before it had only the one
simulated shot.

A separate whistle switch on the speaker box sounds a whistle at a fixed, loud level
that the volume control does not affect, which Seiko warns to bear in mind when
operating it.[^manual]

## Audio

The speaker box is rated at 6 W with a maximum of 10 W and a practical sound pressure
level of 93 dB at 10 m, with an audio input of -20 dB into 100 kΩ. The pistol takes its
microphone input at -50 db, produces the simulated pistol sound at -18 db, and passes
microphone audio at up to -5 db at full volume.[^manual]

Seiko states that the speaker box can be used on its own, in multiples, or connected to
other equipment, but the manual sets no limit on the number of boxes and gives no
maximum total cable length; the supplied cable is 5 m. It does treat cable length as a
fault condition, listing a long, high-resistance cable among the causes of a start
signal failing to appear.[^manual] The ten-box and 20 m limits appear only in the later
[PS-110](seiko-electronic-starting-system.md) manual.[^ps110man]

Against manganese cells the manual gives the speaker box about 3,000 pistol sounds,
measured until the sound pressure falls below 91 dB at 10 m, and the pistol's strobe
about 480 flashes, counted at one-minute intervals for as long as the ready lamp still
takes under a minute to relight.[^manual]

## Connections

The start signal is a Photo-MOS relay output with an on-resistance of 10 Ω or less,
rated for a load of no more than 100 V AC or DC and no more than 0.1 A. It appears
between pins 1 and 3 of a Hoshiden `TCS0250-01-0301` connector, with
`TCP0556-01-0201` as the mating cable-side part, and Seiko notes that the signal
duration is essentially the same as the duration of the electronic sound.[^manual]

This replaced the make contact of the [PS-105](seiko-ps-105.md), which stayed closed
for as long as the trigger was held. The connector part numbers are unchanged between
the two.

## Specifications

Starter pistol (`PS-77`):

| | |
|---|---|
| Power | DC 3 V (2 × AA cells) × 2 lines |
| Strobe | Xenon lamp |
| Strobe life | Approx. 480 flashes (manganese cells) |
| Audio battery life | Approx. 125 hours (continuous use at normal temperature) |
| Start signal | Photo-MOS relay, 10 Ω or less; AC/DC 100 V, 0.1 A maximum |
| Microphone input | -50 db |
| Simulated pistol sound | -18 db |
| Microphone audio at full volume | -5 db |
| Current draw | Max. 50 mA or less (audio); max. approx. 3 A (strobe) |
| Enclosure | ABS resin, dark grey |
| Dimensions | 207 W × 153 D × 38 H mm |
| Weight | Approx. 250 g (excluding cells and cable) |
| Operating temperature | -10 to +50 °C |
| Storage temperature | -15 to +60 °C |

Speaker box (`PS-50`):

| | |
|---|---|
| Power | 6 V (4 × C cells) |
| Current draw | Approx. 3 A on pistol sound; approx. 150 mA silent |
| Battery life | Approx. 3,000 pistol sounds (manganese cells) |
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

- [Seiko PS-105 Electronic Starter](seiko-ps-105.md): the predecessor
- [Seiko PS-109 Electronic Starter](seiko-ps-109.md): the successor
- [Seiko Electronic Starting System](seiko-electronic-starting-system.md): the current
  unit in the same line
- [Start systems](index.md): the start-system overview and governing-body requirements
- [Seiko](../../../vendors/seiko.md): the manufacturer
- [Equipment](../../index.md): the wider equipment reference

## References

[^manual]: [Seiko Time Systems, エレクトロニックスタータ PS-107 取扱説明書](https://www.seiko-stc.co.jp/products/uploads/pdf/ps107.pdf) (document R-I3003, Japanese).
[^discidx]: [Seiko Time Creation, discontinued multi-timing products](https://www.seiko-stc.co.jp/support/discontinued_product/sports/multitiming/) (製造時期 1997年～2002年).
[^discpolicy]: [Seiko Time Creation, discontinued products](https://www.seiko-stc.co.jp/support/discontinued_product/) (repair and parts supply run, as a rule, for seven years from the end of production).
[^ps1200]: [Internet Archive, Seiko swimming products index, 18 April 2009 snapshot](http://web.archive.org/web/20090418201441if_/http://www.seiko-sts.co.jp/products/sports/cat01/001.html) (the PS-1200's FINA and Japan Swimming Federation certification lines).
[^ps110man]: [Seiko Time Creation, Electronic Starting System PS-110 Operating Manual](https://www.seiko-stc.co.jp/products/uploads/pdf/st_ps-110.pdf) (the ten-box and 20 m limits).

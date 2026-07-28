---
title: Seiko PS-109 Electronic Starter
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Seiko PS-109 Electronic Starter
infobox:
  - label: Manufacturer
    value: Seiko
  - label: Part number
    value: '`PS-109` (system); `PS-77`, `PS-60`, `PS-55`, `PS-80` (components)'
  - label: Type
    value: Portable electronic starting device
  - label: Speaker
    value: 'Separate battery-powered speaker box `PS-55`, 6 W rated, 10 W maximum'
  - label: Flash
    value: Xenon strobe in the pistol
  - label: Start output
    value: 'Photo-MOS relay, 10 Ω or less on-resistance'
  - label: Power
    value: 'Dry cells only: 12 × AA (4 pistol, 8 speaker box)'
  - label: Manufactured
    value: 2002–2008
  - label: Predecessor
    value: PS-107
  - label: Succeeded by
    value: PS-110
  - label: Status
    value: Discontinued
  - label: Manual
    value: Seiko R-I3001
    href: >-
      https://www.seiko-stc.co.jp/products/uploads/pdf/ps109.pdf
---

The Seiko PS-109 is a discontinued portable electronic starter made by
[Seiko](../../../vendors/seiko.md) Time Systems Inc. of Tokyo, the third documented
member of the company's
エレクトロニックスタータ line. It kept the pistol and headset of the
[PS-107](seiko-ps-107.md) unchanged and replaced the speaker box, moving the whole
system onto a single cell size and introducing the taller off-white enclosure that the
PS-110 went on to use.[^manual][^ps110man] Like every unit in this line it is general
sports equipment rather than swimming-specific. Seiko lists it under multi-timing
rather than swimming and publishes no governing-body certification for it, where its
poolside [PS-1200](seiko-ps-1200.md) generator of the same period was listed as
conforming to FINA rules and certified by the Japan Swimming
Federation.[^discidx][^ps1200] This article is a starting point; the
[start-systems overview](index.md) covers the shared background that applies to every
starter.

## Models and naming

Seiko manufactured the PS-109 from 2002 to 2008.[^discidx] The company does not publish
a parts-support end date for it; its general policy is that repair and parts supply for
a discontinued product run, as a rule, for seven years from the end of
production.[^discpolicy] It replaced the [PS-107](seiko-ps-107.md) and was replaced by
the PS-110, covered in the
[Seiko Electronic Starting System](seiko-electronic-starting-system.md) article.

The system shipped as the starter pistol `PS-77`, the headset microphone `PS-60`, the
speaker box `PS-55` and a 5 m cable with box, `PS-80`, with twelve AA cells, the manual
and a warranty card.[^manual] The manual is Japanese only and carries the document
number `R-I3001`. Seiko's document numbers do not run in model order: the PS-109 manual
is `R-I3001` while the earlier PS-105 and PS-107 manuals are `R-I3002` and `R-I3003`,
so they cannot be used to infer which was published first.

## Design and hardware

The pistol and the headset microphone are the same parts as the PS-107 and carry
identical published specifications.[^manual] The pistol is moulded ABS in dark grey,
207 W × 153 D × 38 H mm, about 250 g without batteries or cable, on two lines of two AA
cells, with a xenon strobe.

The change is the speaker box. The `PS-55` replaced the ivory `PS-50` with an off-white
ABS enclosure of 102 W × 216 D × 258 H mm weighing about 1.6 kg without cells, and moved
from four C cells at 6 V to eight AA cells at 12 V.[^manual] That put the whole system
on one cell size: twelve AA cells in total, four for the pistol and eight for the
speaker box, where the PS-105 and PS-107 had needed both AA and C cells.

The `PS-55` is also the enclosure Seiko carried forward. The `PS-56` supplied with the
later PS-110 quotes the same dimensions and the same 1.6 kg
weight.[^manual][^ps110man]

The manual adds a tripod note that the two earlier manuals do not: the speaker box has
an M8 tripod socket, and Seiko suggests, for reference, a tripod whose legs describe a
circle 1,300 mm across when opened and whose stand height is 1,000–1,600 mm.[^manual]

## Operation

The PS-109 offers two start sounds, selected on the pistol's power switch. At its
centre position the unit produces an electronic beep with the strobe flash and the
start signal; at the ON position it produces a simulated pistol shot with the same
flash and signal.[^manual]

A separate whistle switch on the speaker box sounds a whistle at a fixed, loud level
that the volume control does not affect, which Seiko warns to bear in mind when
operating it.[^manual] The manual also warns that the headset microphone must be plugged into
the pistol and not directly into the speaker box, or no audio will be
produced.[^manual]

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
about 480 flashes at one-minute intervals.[^manual] The `PS-56` that followed is rated
at about 8,000 sounds on alkaline cells, so the figures are not directly
comparable.[^ps110man]

## Connections

The start signal is a Photo-MOS relay output with an on-resistance of 10 Ω or less,
rated for a load of no more than 100 V AC or DC and no more than 0.1 A. It appears
between pins 1 and 3 of a Hoshiden `TCS0250-01-0301` connector, with
`TCP0556-01-0201` as the mating cable-side part, and the signal duration is essentially
the same as the duration of the electronic sound.[^manual] This is unchanged from the
[PS-107](seiko-ps-107.md).

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

Speaker box (`PS-55`):

| | |
|---|---|
| Power | 12 V (8 × AA cells) |
| Current draw | Approx. 3 A on pistol sound; approx. 150 mA silent |
| Battery life | Approx. 3,000 pistol sounds (manganese cells) |
| Audio input | -20 dB (100 kΩ) |
| Rated output | 6 W (10 W maximum) |
| Sound pressure | 93 dB at 10 m |
| Enclosure | ABS resin, off-white |
| Dimensions | 102 W × 216 D × 258 H mm |
| Weight | Approx. 1.6 kg (excluding cells) |
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

- [Seiko PS-107 Electronic Starter](seiko-ps-107.md): the predecessor
- [Seiko Electronic Starting System](seiko-electronic-starting-system.md): the PS-110
  that succeeded it, and the current PS-110J
- [Start systems](index.md): the start-system overview and governing-body requirements
- [Seiko](../../../vendors/seiko.md): the manufacturer
- [Equipment](../../index.md): the wider equipment reference

## References

[^manual]: [Seiko Time Systems, エレクトロニックスタータ PS-109 取扱説明書](https://www.seiko-stc.co.jp/products/uploads/pdf/ps109.pdf) (document R-I3001, Japanese).
[^discidx]: [Seiko Time Creation, discontinued multi-timing products](https://www.seiko-stc.co.jp/support/discontinued_product/sports/multitiming/) (製造時期 2002年～2008年).
[^discpolicy]: [Seiko Time Creation, discontinued products](https://www.seiko-stc.co.jp/support/discontinued_product/) (repair and parts supply run, as a rule, for seven years from the end of production).
[^ps1200]: [Internet Archive, Seiko swimming products index, 18 April 2009 snapshot](http://web.archive.org/web/20090418201441if_/http://www.seiko-sts.co.jp/products/sports/cat01/001.html) (the PS-1200's FINA and Japan Swimming Federation certification lines).
[^ps110man]: [Seiko Time Creation, Electronic Starting System PS-110 Operating Manual](https://www.seiko-stc.co.jp/products/uploads/pdf/st_ps-110.pdf) (PS-56 dimensions, weight and battery life).

---
title: Championship Elite Start System
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Championship Elite Start System
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Part number
    value: '`SSE`'
  - label: Type
    value: Deck-wired swimming start system
  - label: Interface
    value: Wired microphone; LCD menu; start output to timer
  - label: Dimensions
    value: 6.5 × 6.5 × 14.0 in (16.5 × 16.5 × 35.6 cm)
  - label: Weight
    value: 19.6 lb (8.9 kg)
  - label: Power
    value: Two 12 V gel-cell batteries; 24 VDC charger
  - label: Certifications
    value: 'cULus, FCC, CE, RoHS'
  - label: Manual
    value: CTS F1064
    href: >-
      https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Start%20Systems/Elite/Championship%20Elite%20Starter_F1064.pdf
---

The Championship Elite Start System (part number `SSE`) is the current
deck-wired electronic start system for swimming made by
[Colorado Time Systems](../../../vendors/colorado-time-systems.md) (CTS). It is
the successor to the
[Championship Start System](championship-start-system.md) (`SS`). It drives the
same under-block lane speakers, underwater speakers, and speedlights on
relay-judging platforms as that system, and adds an LCD menu, programmable start
tones and messages, a training mode, and an integrated Visual Start Signaling
(VSS) system that presents the whole start sequence on multi-colored external
indicators for athletes who are deaf or hard of hearing. CTS announced it in
February 2024.[^f1064][^datasheet][^swimmingworld]

## Naming and product line

The Elite is the deck-wired member of the CTS start line and the current model
in the Championship family; the portable
[Infinity](infinity-pro-start-system.md) family is the smaller alternative. For
the full lineup and a side-by-side comparison, see the
[start-systems overview](index.md).

Compared with the older
[Championship Start System](championship-start-system.md) (`SS`), the Elite
has a smaller, taller enclosure and roughly the same weight, but replaces
the older unit's fixed knobs and switches with an LCD menu, and drives more
peripherals: a ceiling of 12 speedlights on relay-judging platforms, 13 External
Visual Indicators (EVIs) or EXTSTROBE+ units, and either 20 auxiliary block
speakers or 2 underwater ones.[^datasheet][^f1064] CTS's European declaration of conformity
lists the product under the model names "Elite" and "SSE."[^f1064]

## Design and hardware

The start system is about 14 in long and 6.5 in on a side, weighing 19.6 lb, with a
360° strobe dome and a carrying handle on top and a single control panel on the
front. The panel has a backlit LCD, a power button, a status-indicator LED,
four-way navigation controls, and the connectors: charging port, microphone,
VSS, wallplate, start, lane-speaker, and external-visual-indicator/speedlight.
Two microphone rests flank the panel, and either can be swapped for a VSS
controller holder or a Dolphin adapter.[^f1064]

The built-in speaker is a 40-watt, 8-ohm moisture- and corrosion-resistant
reflex speaker with its own volume setting in the audio menu; the manual does
not identify the speaker's manufacturer. Beyond it the manual gives two
alternatives: as many as 12 further 45-ohm lane speakers (`R-SP-6-45`) together
with a single 8-ohm external unit (`R-SP-125` or `R-SP-200`), or a pair of 8-ohm
externals on their own. The datasheet lists the `SP-UND` underwater speaker among the
accessories.[^f1064][^datasheet] The system runs on two internal 12 V, 7.0 Ah
gel-cell lead-acid batteries (PowerSonic PS-1270, CTS part `R-420-003`), charged
by a 24 VDC supply. CTS rates the pack at over 15 hours in ordinary use with
neither EVIs nor VSS running; EVIs, higher intensity settings, longer VSS times,
or working the microphone as a public-address system all cut into that. As on the Infinity, the unit will
not operate while charging, to
keep AC power off the deck. A status LED and an on-screen percentage show the
battery state, and battery-protection logic locks the start function and then
powers the unit down if the battery falls too low.[^f1064]

## Operation

The starter presses push-to-talk with either of the microphone's two start
buttons to fire the start: a 0.25-second dual-tone blast, a simultaneous flash on
the internal 360° strobe and any connected external strobes and speedlights, and
a start pulse to the timer. Pressing a start button again within the recall
window signals a false-start recall; the recall window is 15 seconds by default
and settable from 5 to 25 seconds. Menu settings cover the start-tone volume
(low, medium, or high; CTS notes high exceeds 120 dB and is for outdoor use
only), a choice of the classic CTS beep or a shorter alternate tone for both
start and recall, strobe and lane-indicator intensity, and start-signal
polarity.[^f1064]

A training mode plays a recorded "take your marks" message and then, after a
randomized 1.5–2.5-second delay, the start tone and strobe. The random delay
keeps swimmers from anticipating the start. It repeats at a settable interval
(5–45 seconds, or 15–45 seconds when VSS is used), and a custom "take your marks"
recording of up to two seconds can be recorded through the microphone.[^f1064]

As with the other CTS start systems, officials and spectators are meant to start
from the strobe or speedlights rather than the horn. World Aquatics rules
require the starter's commands and the starting signal to be heard equally and
simultaneously at each block; see the [start-systems overview](index.md) for the
reason and the governing-body rules.[^f1064][^wacr]

### Visual Start Signaling (VSS)

The Elite's integrated VSS presents the full start sequence visually, so that
all athletes, including those who are deaf or hard of hearing, get the same
information the audible commands carry. It uses the multi-colored LEDs of the
External Visual Indicators, driven from a three-button pendant controller
operated by the referee and starter. In a forward start the indicators blink red
(call to block), go steady red (step up), turn yellow ("take your marks"), and
flash green at the start; a backstroke sequence adds steps for the swimmers
entering the water. Two of the up-to-13 indicators can instead be set as white
strobes. CTS is the official timing and scoring partner of USA Deaf
Swimming.[^f1064][^datasheet][^vss]

This addresses the same need that governing-body rules formalize: USA Swimming's
rules for swimmers with a disability require a visual starting signal placed where
the swimmer can see it, and allow lane reassignment and a false-start rope so a
deaf or hard-of-hearing swimmer can see the start.[^usas105] The World Aquatics
swimming rules likewise provide for a visual start for deaf and hard-of-hearing
swimmers.[^warules] Pairing a start signal with a visual display for deaf
swimmers is long-established: a 1992 Seiko patent for a swimming-race timing
system describes the same combination.[^seiko]

## Connections

A start jumper cable (`R-INF-SJxx`) connects the Elite's start output to a deck
plate, wall plate, cable harness, or the back of a Gen7 timer. The Elite can generate both
normally-open (N.O.) and normally-closed (N.C.) start pulses, selectable in the
menu. Normally-open works with all CTS timers, while Swiss Timing systems use
normally closed; CTS warns that setting the polarity wrong for a given timer
makes the recorded times inaccurate.[^f1064] For older installations
the wallplate connector carries the start, audio, speedlight, and strobe lines to
a legacy wall plate through a `CMP-WPxx` cable, and a Gen7 starter cable
(`R-015-706-xx`) connects the Elite to a Gen7 in-deck TDPI-S2 node.[^f1064] The
unit mounts on a tabletop, the `TR-3` tripod, or a flagpole
(`START-FPM-2`).[^f1064]

## Specifications

| | |
|---|---|
| Dimensions (H × W × D) | 6.5 × 6.5 × 14.0 in (16.5 × 16.5 × 35.6 cm) |
| Weight | 19.6 lb (8.9 kg) |
| Operating temperature | 0–45 °C; humidity 90% non-condensing |
| Charger | 24 VDC at 2.5 A (recharge only; no operation while charging) |
| Battery | Two 12 V 7.0 Ah gel cells (PowerSonic PS-1270); >15 h use; ~90% in ~4 h |
| Fuses | Two 10 A time-lag, 5 × 20 mm |
| Speaker (internal) | 40 W, 8 Ω reflex (manufacturer not identified); output max 75 W at 4 Ω |
| Lane speakers | Up to 12 × 45 Ω lane speakers plus 1 × 8 Ω external (`R-SP-125`/`R-SP-200`), or 2 × 8 Ω external |
| Visual indicators | Up to 13 EVIs/EXTSTROBE+ and up to 12 speedlights |
| Start signaling | Normally-open or normally-closed; polarity-independent input |
| Start tone | 0.25 s dual-tone blast with simultaneous strobe/speedlight |
| Certifications | cULus (UL 863/UL 1492, file E190097), FCC Part 15, CE, RoHS |

## Part numbers and accessories

- `SSE`, Championship Elite Start System.[^datasheet]
- `M2-xx`, Championship-series microphone; the suffix is the cable length (15,
  25, 50, 100, 150, or 200 ft).[^datasheet]
- `R-INF-SJ-xx`, start jumper cable to the timer or deck plate; lengths 10, 25,
  50, 75, 100, 165, or 264 ft.[^datasheet]
- `CMP-WPxx`, Elite-to-wallplate cable (start, speaker, speedlight, strobe),
  25 ft or 50 ft.[^datasheet]
- `R-015-706-xx`, Gen7 starter cable to a TDPI-S2/WPI-S2 node, 8 m or 15 m.[^f1064]
- `R-LS40-x`, lane-speaker cable harness for 6, 8, or 10 lanes; `R-SP-6-45`,
  6-watt, 45-ohm lane speaker with 26 ft cable; `R-SP-xxx`, external 40 W
  speaker, 125 ft or 200 ft; `SP-UND`, underwater speaker.[^datasheet]
- `EVI`, External Visual Indicator; `EVI-FPM`, its pole mount;
  `R-015-747-xx`, EVI connection cable (15, 33, 125, or 165 ft);
  `R-015-752`, Y-splitter to run EVIs and legacy speedlights together;
  `R-015-755`, Elite-to-legacy-speedlight adapter.[^datasheet][^f1064]
- `R-420-003`, replacement battery (PowerSonic PS-1270); `R-920-061`,
  replacement power supply; `TR-3`, tripod; `START-FPM-2`, flagpole mount.[^f1064]

## See also

- [Championship Start System](championship-start-system.md): the model it
  replaced
- [Infinity Start System](infinity-start-system.md) and
  [Infinity Pro Start System](infinity-pro-start-system.md), the portable CTS
  start family
- [Colorado Time Systems lane speakers](../external-speaker/cts.md): the
  under-block speakers this start system drives
- [Gen7 Serial Timer](../timers/gen7-serial.md): the timing console the start
  system triggers
- [Colorado Time Systems](../../../vendors/colorado-time-systems.md): the
  manufacturer

## References

[^f1064]: [Colorado Time Systems, Championship Elite Start System User Instructions (F1064 Rev. 202606)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Start%20Systems/Elite/Championship%20Elite%20Starter_F1064.pdf). Figures cited from the local copy, revision 202606; an earlier revision (202509) is also in circulation.
[^datasheet]: [Colorado Time Systems, Elite Start System datasheet (Rev. 05/24)](https://coloradotime.com/hubfs/Products/Elite/Elite_Start_System.pdf).
[^swimmingworld]: [Swimming World, Colorado Time Systems Introduces New Championship Elite Start System](https://www.swimmingworldmagazine.com/news/colorado-time-systems-introduces-new-championship-elite-start-system/) (press release, 13 February 2024).
[^vss]: [Colorado Time Systems, Visual Start Signaling (VSS)](https://coloradotime.com/products/visual-start-signaling-vss).
[^usas105]: [USA Swimming, Article 105: officiating swimmers with a disability](https://www.usaswimming.org/docs/default-source/disabilitydocuments/article-105.pdf).
[^warules]: [World Aquatics, Swimming Technical Rules](https://resources.fina.org/fina/document/2023/01/04/65961a45-bde5-4217-b666-ca1f5dc2d1f0/1_Swimming-Technical-Rules.04.01.2023.pdf).
[^wacr]: [World Aquatics, Competition Regulations (Part Two: Swimming Rules)](https://resources.fina.org/fina/document/2026/02/18/e6815ecc-06d9-4f0b-98e9-4c441cf5e6a3/2026-02-18_World-Aquatics_CR-Final.pdf), article 15.16.3 (loudspeakers at each starting block; false-start detection equipment required).
[^seiko]: [Google Patents, EP0557888B1, Timing system for swimming race](https://patents.google.com/patent/EP0557888B1/en) (Seiko Instruments; start-signal detection with a visual display for deaf swimmers; priority 1992).

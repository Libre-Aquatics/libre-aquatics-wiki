---
title: StartTime V
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: StartTime V
infobox:
  - label: Manufacturer
    value: Swiss Timing
  - label: Part number
    value: '`3481.930` (microphone unit), `3481.931` (e-gun)'
  - label: Type
    value: Electronic starting device
  - label: Speaker
    value: Built-in high fidelity loudspeaker and amplifier
  - label: Amplifier
    value: 'Up to 2 x 20 W; external load 3.2 to 16 Ω'
  - label: Flash
    value: 'Integrated optical flash (e-gun flash 0.1 s, sun-visible >200 m)'
  - label: Dimensions
    value: 395 × 192 × 160 mm
  - label: Weight
    value: 5.8 kg
  - label: Power
    value: 'Integrated 12 V, 7 Ah lead-acid battery'
  - label: Protection
    value: IP43 (main unit); IP64 (e-gun)
  - label: Manual
    value: Swiss Timing 3481.560.02
    href: >-
      https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3481.560.02_STV_Egun_User_Manual.pdf
---

The StartTime V is an electronic starting device made by Swiss Timing Ltd of
Corgémont, Switzerland, for swimming, athletics, and speed skating. It generates
the start signal for the race: a sound through its built-in high fidelity
loudspeaker and any connected external loudspeakers, an optical flash, and a
start pulse to the timing console.[^datasheet] It is sold in two versions, with
a start and microphone unit (article 3481.930) or with an e-gun trigger (article
3481.931); neither the e-gun nor the microphone unit is compatible with the
earlier [StartTime IV](starttime-iv.md).[^datasheet] This article is a starting
point; the [start-systems overview](index.md) covers the shared background that
applies to every starter.

## Design and hardware

The main unit measures 395 by 192 by 160 mm, weighs 5.8 kg, and is protected to
IP43. Setup is menu-driven through an LCD and keypad, and power comes from an
integrated 12 volt, 7 Ah lead-acid battery with an indoor-only charger; the
battery holds its charge for up to 12 months when not in use, and a battery
indicator shows four levels of charge. The operating range is -10 to +50 degrees
C, the storage range -20 to +70 degrees C, and the unit is rated for 20 to 80
percent relative humidity, non-condensing.[^datasheet]

In the microphone-unit version, the starter gives the start from the start and
microphone unit (SMU) while the microphone amplifies the verbal commands; in
the e-gun version, pulling the trigger of the electronic gun plays the sound,
fires the flash, and sends the start pulse, and a second pull within a
programmable delay plays the false-start sound. The e-gun replaces the
traditional powder gun, which Swiss Timing notes is difficult or prohibited to
import in most countries.[^datasheet]

### E-gun and microphone unit

The two trigger heads are interchangeable but not sold together: the unit runs
with the e-gun or the microphone unit depending on the sport and the client's
needs.[^datasheet]

The e-gun measures 280 by 35 by 140 mm, weighs 820 g with its cable, and carries
a 7 m cable. It takes a 7 to 18 volt DC input and is protected to IP64, a higher
rating than the main unit. Its integrated flash lasts 0.1 s, is visible in
sunlight beyond 200 m, and radiates 360 degrees horizontally and 90 degrees
vertically.[^datasheet]

The start and microphone unit measures 118 by 25 by 80 mm without its buttons,
weighs 650 g with its cable, carries a 7 m cable, and is protected to IP43. It
holds the START push button, the SPEAK connector for the microphone, the READY 1
and READY 2 indicators, and a LOW BATTERY warning.[^datasheet][^manual]

The e-gun is the current form of Swiss Timing's electronic start gun, a flash gun
the company introduced to replace the powder pistol and its transducer. Swiss
Timing first used the electronic gun at the 2010 Vancouver Winter Olympic Games,
initially with the earlier StartTime IV; the StartTime V succeeds that unit, which
is why its e-gun and microphone unit are not compatible with the
StartTime IV.[^egunds][^datasheet] Independent coverage of the design notes that
the gun makes no report of its own and sounds only through the loudspeakers, so
that every athlete hears the start at the same instant rather than as the sound
reaches them across the pool or track.[^core77][^swisswatches]

## Operation

At power-on the unit runs a self-test: the LOW BAT (red), READY 1, and READY 2
(green) indicators light in sequence and the display shows the Swiss Timing
logo. Setup is menu-driven, with presets for swimming, athletics, and speed
skating; changing any value within a preset switches the sport selection to a
custom mode (CUS).[^manual]

By default the start sound is a bang, the false-start sound is a bang followed by
a whistle, and the false-start timeout, the window in which a second trigger pull
is read as a recall, is 4 seconds; the timeout is programmable.[^manual] An
optional Wireless Recaller module adds wireless false-start recall; the recall
menu entry and function appear only when the module is fitted.[^manual]

## Audio

The StartTime V contains a high fidelity loudspeaker and an enhanced internal
amplifier, with a public-address output of up to 2 x 20 W. A SPEAKER connection
drives external loudspeakers, and a LINE OUT feeds an external amplifier with
its own speakers; internal speaker, external speaker, headset, line out, and
microphone levels are adjusted separately.[^datasheet][^manual]

The user manual specifies the limits for external speakers: the recommended
load per amplifier is between 3.2 and 16 ohms, and any speaker combination
inside that range is acceptable; a 2 ohm load is possible but, the manual says,
results in increased distortion and loss of output power. Speaker polarity must
be kept consistent or sound quality degrades. Loudspeaker cables can be
extended to 30 m with 0.75 mm² cable or 50 m with 1 or 1.5 mm² cable, and the
microphone cable to 30 m.[^manual]

In swimming, the external outputs drive Swiss Timing's
[in-block lane speakers and mobile loudspeaker sets](../external-speaker/swiss-timing.md),
sited so the start reaches every swimmer at the same instant.[^datasheet]

## Connections

The unit connects to Swiss Timing's Quantum timing console, and its rear panel
carries connections for the microphone or e-gun, timer, external flash,
speakers, line out, and charger.[^datasheet][^manual] A cable on winder (article
1865.050) links the StartTime V to the timing device over a 50 m cable.[^datasheet]

The OMEGA Flash Start, a visual start signal for athletes who are deaf or hard
of hearing, is powered by the StartTime and connects with a 25 m cable (article
3481.951.25); a variant with an extension cable is also sold (article
3481.951.05).[^datasheet]

## Care and maintenance

The unit is fused by a fast fuse F1 (10 A) and a slow fuse F3 (5 A), and spare
fuses are supplied. Swiss Timing directs that only the supplied charger, or one
it has approved, be used, to avoid damaging the battery.[^manual]

## Specifications

Main unit:

| | |
|---|---|
| Part numbers | 3481.930 (microphone unit), 3481.931 (e-gun) |
| Dimensions | 395 × 192 × 160 mm |
| Weight | 5.8 kg |
| Speaker | Built-in high fidelity loudspeaker and amplifier |
| Public address output | Up to 2 x 20 W |
| External speaker load | 3.2 to 16 Ω recommended; 2 Ω with increased distortion |
| Speaker cable runs | 30 m at 0.75 mm²; 50 m at 1 or 1.5 mm² |
| Battery | Integrated 12 V, 7 Ah lead-acid; self-discharge 12 months |
| Battery indicator | 4 levels |
| Operating temperature | -10 to +50 C |
| Storage temperature | -20 to +70 C |
| Relative humidity | 20 to 80%, non-condensing |
| Protection | IP43 |
| Certifications | CE, RoHS |

E-gun and microphone unit:

| | E-gun | Microphone unit |
|---|---|---|
| Dimensions | 280 × 35 × 140 mm | 118 × 25 × 80 mm (without buttons) |
| Weight | 820 g (with cable) | 650 g (with cable) |
| Cable length | 7 m | 7 m |
| Power | 7 to 18 V DC input | (from main unit) |
| Flash | 0.1 s; sun-visible >200 m; 360° horizontal, 90° vertical | (none) |
| Protection | IP64 | IP43 |

## See also

- [StartTime IV](starttime-iv.md): the predecessor electronic starting device
- [Start systems](index.md): the start-system overview and governing-body
  requirements
- [Swiss Timing lane speakers](../external-speaker/swiss-timing.md): the
  in-block and mobile loudspeakers this device drives
- [Timers](../timers/index.md): timing consoles generally

## References

[^datasheet]: [Swiss Timing, StartTime V Electronic Starting Device datasheet (10-2015)](https://www.swisstiming.com/fileadmin/Resources/Data/Datasheets/DOCM_MS_StartTimeV_1015_EN.pdf).
[^manual]: [Swiss Timing, StartTime V User's Manual (3481.560.02, Version 1.2, March 2018)](https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3481.560.02_STV_Egun_User_Manual.pdf).
[^egunds]: [Swiss Timing, e-GUN Electronic Starting System datasheet (EGUN_3434_1303, 09-2013)](https://www.swisstiming.com/fileadmin/Resources/Data/Datasheets/DOCM_MS_EgunStartingSystem_0913_EN.pdf) (the e-gun as a new-generation flash gun replacing the powder gun and its transducer, debuting at the Vancouver Winter Games and run from the earlier StartTime IV).
[^core77]: [Core77, Omega's Olympic Electronic Starting Pistol Redesign](https://www.core77.com/posts/23073/omegas-olympic-electronic-starting-pistol-redesign-23073) (the electronic gun debuted at the 2010 Vancouver Olympics, makes no report of its own, and sounds only through speakers wired behind each competitor).
[^swisswatches]: [Swisswatches Magazine, To a Millionth of a Second: How Omega's Timekeeping Lab Revolutionised Olympic Timing](https://swisswatches-magazine.com/omegas-timekeeping-lab/) (the electronic starting pistol replaced the traditional revolver at the 2010 Vancouver Winter Olympics, first for short track and speed skating, with loudspeakers behind each starting block so all competitors hear the start simultaneously).

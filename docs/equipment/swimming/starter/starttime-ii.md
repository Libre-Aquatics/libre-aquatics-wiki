---
title: StartTime II
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: StartTime II
infobox:
  - label: Manufacturer
    value: Swiss Timing
  - label: Type
    value: Electronic starting device (acoustic start system)
  - label: Speaker
    value: Built-in loudspeaker with two integrated amplifiers
  - label: Amplifier
    value: 'Up to 2 x 19 W; external load 3.2 to 16 Ω'
  - label: Flash
    value: 'Integrated optical flash; optional auxiliary flash'
  - label: Configuration
    value: DIP switches (SW1 to SW8)
  - label: Dimensions
    value: 400 × 205 × 160 mm (main unit)
  - label: Power
    value: 'Integrated 12 V, 6.5 Ah sealed lead-acid battery'
  - label: Protection
    value: IP41
  - label: Introduced
    value: c. 2007
  - label: Succeeded by
    value: StartTime III (c. 2009)
  - label: Manual
    value: Swiss Timing 3399.502.02
---

The StartTime II is an electronic starting device made by Swiss Timing Ltd of Corgémont,
Switzerland, and carrying the Omega Electronics brand on its front panel. It generates
the start signal for a race: a sound through its built-in loudspeaker and any connected
external loudspeakers, an optical flash, and a start pulse to the timing device.[^manual]
The flash and the loudspeaker are built into the same case, and the starter gives the
start from a microphone unit or from the device itself; the unit predates the electronic
e-gun trigger, which Swiss Timing introduced with the later
[StartTime IV](starttime-iv.md), and it is set up with a bank of DIP switches rather than
the menu-driven display of the later units.[^manual][^siblings] It is the earliest
documented member of the StartTime family and the predecessor of the
[StartTime III](starttime-iii.md). Swiss Timing no longer publishes the manual for the
discontinued device online, so this article cites it by document number rather than
hosting a copy.[^manual] This article covers the StartTime II specifically; the
[start-systems overview](index.md) covers the shared background that applies to every
starter.

## Design and hardware

The main unit measures 400 by 205 by 160 mm without its connectors and is protected to
IP41. The front panel carries two rotary controls, one for the microphone volume and one
for the start volume, a combined start and power button with power and ready indicator
lights, and a cover over the setup switches, alongside the Omega Electronics logo. Power
comes from a built-in 12 volt, 6.5 Ah sealed lead-acid battery with a charger; Swiss
Timing rates the battery for 24 hours or 1000 starts, after which the unit stays operable
for about another hour, and the battery self-discharges over roughly 12 months when not
in use. An external 12 volt lead-acid battery can be connected to the charger input to
extend the running time, and a low-battery alarm warns when the battery runs down. The
operating range is -10 to +65 degrees C, the storage range -20 to +65 degrees C, and the
unit is rated for 20 to 80 percent relative humidity, non-condensing.[^manual]

The panel carries connections for the microphone (an 8-pin DIN 45326 connector), the ARES
timing device (a 4-pin Tuchel connector), the flash (4-pin Tuchel), the speaker (4-pin
Tuchel), and the charger (3-pin Tuchel). The unit is fused by four 5 by 20 mm fuses: F1
1 A slow (logic and microphone), F2 1 A slow (charger input), F3 6.3 A slow (amplifiers),
and F4 6.3 A slow (on the battery cable).[^manual]

### Microphone unit

The starter gives the start from a microphone unit that holds a TALK button, which
connects the internal microphone to amplify the verbal commands, and a START button, which
begins the race; the volume of the verbal commands is set on the main unit. Two indicators
show the system status, a power light for "device switched on" and a READY light driven by
the timing device. The microphone unit measures 30 by 66 by 131 mm and carries a 10 m
cable. The unit can also be run without the microphone unit; the starter then gives the
start from the device's own button.[^manual]

### Configuration

The StartTime II is configured with a bank of DIP switches under a cover on the front
panel, the feature that most distinguishes it from the menu-driven StartTime III and IV.
The switches set the number of false-start signals the unit sounds (SW1 and SW2, one to
four, factory setting four); the start sound (SW3, a sampled gunshot or a modulated tone);
the READY interlock (SW5, whether the unit requires the ARES timing device to be cleared
before it will start, or can always start for PowerTime use); the false-start
announcement (SW6, allowed or never); the microphone button layout (SW7, normal or the
TALK and START buttons swapped); and automatic power saving (SW8, standby after 15 minutes
and power-off after 90 minutes). SW4 is reserved. Two jumpers on the main board, J1 for
the ARES output and J2 for the flash, set those relay outputs to a normally-open or
normally-closed contact.[^manual]

## Operation

The StartTime II runs in one of three modes. In ARES mode it connects to a Swiss Timing
ARES 21 timing device; the READY indicator shows whether the timing operator has cleared
the system for a start, and the unit can be set to announce a false start if it is
triggered without that clearance. In PowerTime mode the unit runs on its own without an
external timing device. In its independent mode the unit is used without the microphone
unit, with the start given from the device's own button.[^manual]

A second press of the start within 10 seconds of the start signals a false-start recall
and plays the false-start sound a configurable number of times; after the 10 second window
the system resets for a new start. SW1 and SW2 set the number of signals, SW6 enables the
announcement, and SW3 chooses the start sound, a sampled gunshot or a modulated
tone.[^manual]

## Audio

The StartTime II contains a built-in loudspeaker driven by two integrated amplifiers with
independent outputs. The recommended external load is 3.2 to 16 ohms per amplifier; a 2 ohm
load is possible but increases distortion and reduces output power. At 13.2 volts into 3.2
ohms at 1 kHz the amplifiers deliver a typical 2 x 13 W at less than 1 percent distortion
and a maximum 2 x 19 W at 10 percent distortion. Speaker polarity must be kept consistent
or sound quality degrades, and the manual warns never to connect the two speaker outputs
together or to ground, which can damage the amplifiers. A SPEAKERS output drives a chain of
loudspeakers so that the start signal reaches each athlete as closely and simultaneously as
possible.[^manual] In swimming, those outputs drive Swiss Timing's
[in-block and mobile lane speakers](../external-speaker/swiss-timing.md), positioned so
that all swimmers hear the start at the same instant.[^manual]

## Connections

The microphone cable can be extended to 30 m, and the loudspeaker cables to 30 m with
0.75 mm² cable or 50 m with 1 or 1.5 mm² cable.[^manual] An auxiliary flash connects
directly to the unit and can be positioned near an athlete who is deaf or hard of hearing.
An external loudspeaker (article 2850.712) and mobile loudspeaker harness sets (articles
3399.902 through 3399.910, carrying two to ten speakers on 1.5 mm² cable) place a speaker
near each starting block for portable installations, and extension cables (articles
3399.630, 3399.631, and 3399.632 at 6, 10, and 20 m) join the harnesses.[^manual] These
3399-series peripherals carried forward to the later
[StartTime III](starttime-iii.md).[^siblings]

## Compared with the later units

The StartTime II was succeeded by the StartTime III and then the StartTime IV, and it
shares the overall approach of every StartTime: a built-in loudspeaker, an integrated
flash, and outputs for per-lane loudspeakers. It differs from the later units in several
respects. It is configured with DIP switches rather than the menu-driven LCD of the
StartTime III and IV; its main unit measures 400 by 205 by 160 mm, larger in footprint
than the 376 by 215 mm of the III and IV; it carries a 12 volt, 6.5 Ah battery against the
7 Ah of the later units; and its microphone unit is larger, 30 by 66 by 131 mm on a 10 m
cable, against the 118 by 25 by 80 mm unit on a 7 m cable used from the StartTime III on.
Like the III, its start comes from a microphone unit or the device's own button, and it
predates the electronic e-gun that the StartTime IV introduced.[^manual][^siblings]

## Specifications

Main unit:

| | |
|---|---|
| Dimensions (main unit) | 400 × 205 × 160 mm (without connectors) |
| Dimensions (microphone unit) | 30 × 66 × 131 mm |
| Microphone cable | 10 m |
| Connections | Microphone (DIN 45326 8-pin), ARES timing device, flash, speaker, charger (all 4-pin Tuchel except the 3-pin charger) |
| Amplifiers | Two integrated; external load 3.2 to 16 Ω |
| Output power | 2 x 13 W typical (<1% distortion); 2 x 19 W max (10% distortion) at 13.2 V, 3.2 Ω, 1 kHz |
| Battery | Built-in 12 V, 6.5 Ah sealed lead-acid |
| Battery autonomy | 24 hours or 1000 starts, then about 1 hour reserve |
| Low battery | Alarm |
| Fuses | F1 1 A, F2 1 A, F3 6.3 A, F4 6.3 A (5 × 20 mm), all slow |
| Charger | Max initial current 1.0 A; dry environment only |
| Cable extension | Microphone to 30 m; speaker to 30 m at 0.75 mm² or 50 m at 1 to 1.5 mm² |
| Configuration | DIP switches SW1 to SW8; J1/J2 relay jumpers (NO/NC) |
| Operating temperature | -10 to +65 C |
| Storage temperature | -20 to +65 C |
| Relative humidity | 20 to 80%, non-condensing |
| Protection | IP41 |

## See also

- [StartTime III](starttime-iii.md): the successor electronic starting device
- [StartTime IV](starttime-iv.md): the later unit that introduced the e-gun
- [StartTime V](starttime-v.md): the current-generation electronic starting device
- [Start systems](index.md): the start-system overview and governing-body
  requirements
- [Swiss Timing lane speakers](../external-speaker/swiss-timing.md): the
  in-block and mobile loudspeakers this device drives
- [Swiss Timing](../../../vendors/swiss-timing.md): the manufacturer

## References

[^manual]: Swiss Timing, StartTime II User's Manual (document 3399.502.02, Version 2.1, July 2007).
[^siblings]: [Libre Aquatics Wiki, StartTime III](starttime-iii.md) and [StartTime IV](starttime-iv.md).

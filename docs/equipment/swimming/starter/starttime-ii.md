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
A single case houses both the light and the sound source, and the starter gives the
start from a microphone unit or from the device itself. The unit predates the electronic
e-gun trigger, which Swiss Timing introduced with the later
[StartTime IV](starttime-iv.md), and it is set up with a bank of DIP switches rather than
the menu-driven display of the later units.[^manual][^stiii][^stiv] It is the earliest
documented member of the StartTime family and the predecessor of the
[StartTime III](starttime-iii.md). Swiss Timing no longer publishes the manual for the
discontinued device online, so this article cites it by document number rather than
hosting a copy.[^manual] Although this wiki treats the unit as swimming equipment,
Swiss Timing did not sell it that way: its 2007 product catalogue files the StartTime II
as an acoustic start device for swimming and running alike.[^cat2007] This article
covers the StartTime II specifically; the
[start-systems overview](index.md) covers the shared background that applies to every
starter.

## Design and hardware

The main unit measures 400 by 205 by 160 mm without its connectors and is protected to
IP41. The front panel carries two rotary controls, one for the microphone volume and one
for the start volume, a combined start and power button with power and ready indicator
lights, and a cover over the setup switches, alongside the Omega Electronics logo. A
sealed lead-acid cell of 12 volts and 6.5 Ah sits inside the case and has its
own charger; Swiss Timing rates the battery for 24 hours or 1000 starts, after which the
unit stays operable
for about another hour, and the battery self-discharges over roughly 12 months when not
in use. An external 12 volt lead-acid battery can be connected to the charger input to
extend the running time, and a low-battery alarm warns when the battery runs down. The
operating range is -10 to +65 degrees C, the storage range -20 to +65 degrees C, and the
unit is rated for 20 to 80 percent relative humidity, non-condensing.[^manual]

The panel has connections for the microphone (an 8-pin DIN 45326 connector), the ARES
timing device (a 4-pin Tuchel connector), the flash (4-pin Tuchel), the speaker (4-pin
Tuchel), and the charger (3-pin Tuchel). Four 5 by 20 mm fuses protect the unit: F1
1 A slow (logic and microphone), F2 1 A slow (charger input), F3 6.3 A slow (amplifiers),
and F4 6.3 A slow (on the battery cable).[^manual]

### Microphone unit

The starter gives the start from a microphone unit that holds a TALK button, which
connects the internal microphone to amplify the verbal commands, and a START button, which
begins the race; the volume of the verbal commands is set on the main unit. Two indicators
show the system status: a power light for "device switched on" and a READY light driven by
the timing device. The microphone unit measures 30 by 66 by 131 mm and has a 10 m
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
external timing device. In its independent mode the unit runs without the microphone
unit, and the starter gives the start from the device's own button.[^manual]

A second press within 10 seconds of the start signals a false-start recall
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
or sound quality degrades. The manual prohibits bridging the pair of speaker outputs or
tying either of them to ground, because either risks destroying the amplifiers. A SPEAKERS
output feeds a daisy-chain of loudspeakers, so that a sound source sits as close as
possible to every athlete.[^manual] In swimming, those outputs drive
Swiss Timing's [in-block and mobile lane speakers](../external-speaker/swiss-timing.md),
one to a starting block.[^manual]

The rules oblige an installation to spread the sound this way. World Aquatics requires
both the starter's microphone and the pistol transducer to feed loudspeakers at every
starting block, so that commands and the starting signal arrive at each swimmer with
equal loudness and at the same moment.[^wafr][^wacr] A single sound source puts the far
lanes at a measurable disadvantage. Sound moves through air at about 343 m/s, so it needs
roughly 3 milliseconds to cover each metre of the course. In a study of sprint
starts at the 2004 Olympics, reaction times climbed with a competitor's distance from
the starter, averaging 160 ms in the lane nearest him against a range running to 185 ms
in the farthest. The same work measured a second effect: a quieter signal slows
reaction on its own, independently of travel time. A speaker at each position therefore
corrects the bias only where it supplies all of the sound and does not merely reinforce
a pistol. Its authors relay Omega's own claim that the signal has reached competitors
through a speaker behind each of them since 1984.[^brown]
Swiss Timing gives the same account of its own equipment, and a 2010 version of its
site put a figure on the distribution, claiming the system reaches every loudspeaker
within a thousandth of a second and so removes any advantage the speed of sound would
otherwise give across the pool.[^stswim][^st2010]

Olympic organisers documented the arrangement well before this device existed. The
official report of the 1972 Munich Games records loudspeakers installed in the
individual starting blocks to carry the starting shot, adopted so that distance from the
starter no longer disadvantaged a swimmer and so that the timing stayed objective;
those blocks also carried a false-start check that showed an early start on a
lamp.[^munich72] The report names no supplier, so the arrangement at Munich should not
be credited to any particular manufacturer.[^munich72] Athletics reached the same
solution: at Los Angeles in 1984, where Swiss Timing supplied the timing, the starter's
commands were amplified out to speakers fixed to the starting blocks.[^la84] The
reports of the 1960 and 1964 Games, by contrast, describe a starter's pistol wired into
the timing apparatus and mention no loudspeakers at all.[^rome60][^tokyo64]

The technique belongs to no single manufacturer. A 1972 United States patent, granted
to the individual inventor William T. MacCreadie rather than to a timing company,
already described a combined sound-and-flash starter for swimming and track that sited
loudspeakers between adjacent lanes so every competitor received the signal at one
moment.[^maccreadie] Neither Swiss Timing, Omega Electronics, nor their former parent
SSIH appears as the assignee of any patent covering acoustic start systems or
loudspeakers at the blocks; the in-block loudspeaker was instead patented in 1993 by
Swiss Timing's competitor Seiko.[^seiko] The StartTime II therefore implements common
practice in the sport rather than an invention of its own maker.

Distributed loudspeakers do not settle the question by themselves. The official report
of the 1976 Montreal Games records that even with amplification behind every block,
the sprinter nearest the starter reacted as much as 0.2 s ahead of the one farthest
away, because athletes were taking their cue from the louder direct report of the gun
rather than from the speaker at their back.[^montreal76] Officiating literature makes
the same complaint of the 1996 Games, adding that a competitor can mistake the
late-arriving airborne sound for a recall.[^zemper] Both observations describe a
system in which a pistol fires alongside the speakers. Neither transfers directly to a
device such as this one, whose sound exists only as a generated tone or sample
reproduced through the loudspeakers, so there is no separate report for an athlete to
hear.

## Connections

The microphone cable can be extended to 30 m, and the loudspeaker cables to 30 m with
0.75 mm² cable or 50 m with 1 or 1.5 mm² cable.[^manual] An auxiliary flash connects
directly to the unit and can be positioned near an athlete who is deaf or hard of hearing.
An external loudspeaker (article 2850.712) and mobile loudspeaker harness sets (articles
3399.902 through 3399.910, carrying two to ten speakers on 1.5 mm² cable) place a speaker
near each starting block for portable installations, and extension cables (articles
3399.630, 3399.631, and 3399.632 at 6, 10, and 20 m) join the harnesses.[^manual] These
3399-series peripherals carried forward to the later
[StartTime III](starttime-iii.md).[^stiii]

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
predates the electronic e-gun that the StartTime IV introduced.[^manual][^stiii][^stiv]

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
[^stiii]: Swiss Timing, StartTime III User's Manual (document 3399.504.02, Version 1.1, August 2009).
[^stiv]: Swiss Timing, StartTime IV Electronic Starting Device datasheet (document 3481.0511-01).
[^wafr]: [World Aquatics, Facilities Rules 2021–2025](https://resources.fina.org/fina/document/2022/02/08/77c3058d-b549-4543-8524-ad51a857864e/210805-Facilities-Rules_clean.pdf), FR 2.3.3.3 (loudspeakers at each starting block).
[^wacr]: [World Aquatics, Competition Regulations](https://resources.fina.org/fina/document/2026/02/18/e6815ecc-06d9-4f0b-98e9-4c441cf5e6a3/2026-02-18_World-Aquatics_CR-Final.pdf), 15.16.3 Starting devices.
[^brown]: [Brown, Kenwell, Maraj and Collins, "Go" Signal Intensity Influences the Sprint Start](https://sites.ualberta.ca/~dcollins/Articles/Brown2008.pdf), Medicine & Science in Sports & Exercise 40(6), 2008 (PMID 18460990).
[^stswim]: [Swiss Timing, Swimming](https://www.swisstiming.com/sports/swimming/), the company's account of distributing the start signal across loudspeakers to offset the speed of sound.
[^maccreadie]: [US Patent 3,665,452, Starting-timing device for swimming, track and field](https://patents.google.com/patent/US3665452A/en) (William T. MacCreadie, filed 1970, granted 1972; loudspeakers between adjacent lanes).
[^seiko]: [US Patent 5,349,569, Timing system for swimming race](https://patents.google.com/patent/US5349569A/en) (Seiko Instruments, Hiroshi Tanaka, filed 1993; loudspeaker enclosed within the starting block).
[^zemper]: [Eric D. Zemper, Starters](https://www.pausatf.org/wp-content/uploads/2019/08/2019-Starters-Monograph.pdf) (2019 edition), citing Julin and Dapena on the 1996 Games; athletics rather than swimming.
[^cat2007]: [Swiss Timing, product list](https://web.archive.org/web/20070503012617/http://products.swisstiming.com/sports/products-list.shtml) (archived 3 May 2007), START TIME II as an acoustic start device for swimming and running.
[^st2010]: [Swiss Timing, Swimming](https://web.archive.org/web/20100401114330/http://www.swisstiming.com:80/Swimming.493.0.html) (archived 1 April 2010), the company's claim of distribution to the loudspeakers within 1/1000 second.
[^munich72]: [Organising Committee, The Games of the XXth Olympiad Munich 1972, Official Report, volume 1](https://digital.la84.org/digital/collection/p17103coll8/id/24816/) (loudspeakers in the starting blocks to remove the sound-travel disadvantage).
[^la84]: [Los Angeles Olympic Organizing Committee, Official Report of the Games of the XXIIIrd Olympiad, volume 1](https://digital.la84.org/digital/collection/p17103coll8/id/39503/), page 776 (Swiss Timing supplied the timing; in athletics the starter's commands were amplified to speakers fixed to the starting blocks).
[^montreal76]: [Organising Committee, Games of the XXI Olympiad Montréal 1976, Official Report, volume 1](https://digital.la84.org/digital/collection/p17103coll8/id/28063/) (up to 0.2 s between the nearest and farthest lanes despite per-block amplification; athletics).
[^rome60]: [Organising Committee, The XVII Olympiad Rome 1960, Official Report, volume 1](https://digital.la84.org/digital/collection/p17103coll8/id/19376/) (Omega Swim-O-Matic; starter's pistol wired to the apparatus).
[^tokyo64]: [Organizing Committee, The Games of the XVIII Olympiad Tokyo 1964, Official Report, volume 1](https://digital.la84.org/digital/collection/p17103coll8/id/27446/) (pistol wired to the order-of-arrival apparatus and touch board).

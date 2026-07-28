---
title: SS2 Electronic Start System
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: SS2 Electronic Start System
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Part number
    value: '`SS2-1`, `SS2-2`, `SS2-6`, `SS2-8`, `SS2-10`'
  - label: Type
    value: Loudspeaker swimming start system
  - label: Dimensions
    value: 13.25 × 18 × 4 in (33 × 45 × 10 cm)
  - label: Weight
    value: 17 lb (7.7 kg)
  - label: Power
    value: Internal 12 VDC gel-cell battery; external DC charger
  - label: Introduced
    value: '1990s'
  - label: Status
    value: Discontinued
  - label: Manual
    value: CTS F503
    href: 'https://spanish.coloradotime.com/manuals/StartSystem2-man.pdf'
---

The SS2 Electronic Start System is a discontinued loudspeaker start system for
swimming made by
[Colorado Time Systems](../../../vendors/colorado-time-systems.md)
(CTS) during the 1990s. It consists of a battery-powered start module with a
built-in strobe light, a hand-held starter's microphone, and one or more
loudspeakers, and it doubles as a limited public-address system. CTS's
contemporary System 5 documentation names the SS2 as the standard start system
supplied with its swimming timing packages.[^f503][^f506] Its role in the CTS
line later passed to the deck-wired
[Championship](championship-start-system.md) family and the portable
[Infinity](infinity-start-system.md) family.

## Models and naming

The instruction guide (F503 Rev. 0897, first issued 1993) covers five
configurations, which differ only in the speakers supplied with the same start
module:[^f503]

- `SS2-1`, the base system: start module with built-in strobe, one 40-watt
  corrosion-resistant speaker, a microphone with 25-foot cable, internal
  gel-cell battery, and external battery charger.
- `SS2-2`, which adds a second 40-watt speaker with a 125-foot cable and a
  backstroke-flag-pole mounting kit, for starting the far lanes.
- `SS2-6`, `SS2-8`, and `SS2-10`, which add six, eight, or ten 6-watt
  under-block speakers with the matching `LS40-6`, `LS40-8`, or `LS40-10`
  lane-speaker cable harness.

The SS2 was the middle member of a series. The System 5 swimming software
guide of 1998 states that CTS made three kinds of electronic start systems,
the `SS-1`, the SS2, and the LS systems, alongside the `ST-15` start-pistol
transducer, and the SS2 manual's warranty covers the "Model SS-xx Series"
start-system modules as a family.[^f506][^f503] The name outlived the product:
the current System 6 swimming software guide still gives "a CTS Infinity,
ChampStart or SS-2" as its examples of loudspeaker start systems.[^f890]

CTS's current power-supply compatibility list names two legacy start systems,
`SS-01` and `SS-02`, without describing them. The
[Championship Start System (CHAMP-SSM)](champ-ssm.md) article reads these as
labels for the pre-2005 Championship generation, but the `SS-1`/SS2 series
documented here is another plausible referent. The sources do not settle it: the
numbering matches the SS2 era, while the listed power supply matches start
systems that run from an external supply, and the SS2 instead uses a dedicated
DC battery charger and cannot operate while charging.[^psu][^f503]

## Design and hardware

The start module is an open-frame unit 13.25 in high, 18 in wide, and 4 in
deep, weighing 17 lb. Its circuit board sits behind a sliding polycarbonate
weather cover secured to the frame with hook-and-loop straps, and all
connections are made directly on the board: two identical speaker jacks,
three identical microphone jacks, two timer-start outputs, a backup
button-start connector, and the strobe, battery, and recharge connectors. A
single volume control on the board sets the public-address level; the start
and recall tones always sound at full volume. A microphone rest is built into
the back panel. The module sits on a tabletop or mounts through a standard
1/4-20 tripod bracket or an optional wall-mount kit; the manual's setup
chapter names the optional tripod `TR-1` while its specifications page names
the `TR-2`, and it does not explain the difference.[^f503]

The module itself contains no built-in speaker: every speaker plugs into one
of the two speaker jacks on the circuit board. The base speaker is a 40-watt,
8-ohm moisture- and corrosion-resistant reflex speaker; the multi-lane
configurations use 6-watt under-block speakers on an `LS40` cable harness, and
the system can be expanded to a total of 20 speakers and three microphones. CTS
leaves permanent speaker installation to the customer because of the variety of
starting-block types.[^f503]

Power comes from an internal 12 VDC rechargeable gel-cell battery. CTS presents that as a
safety decision, the point being that no mains supply need reach the deck at all. The
external charger (115 VAC, three-prong grounded) charges the battery only
with the module switched off, and the SS2 does not operate while charging;
CTS therefore advises recharging overnight after each day's use. A full
charge runs the system for one to two days of typical use, and heavy
public-address use shortens that; an idle battery loses about 20
percent of its charge in two to three months. The optional `BP-3` external
battery pack matches the internal battery's capacity and extends operating
time, but cannot recharge the internal battery. The battery circuit is fused
with a 4 A automotive blade fuse.[^f503]

## Operation

The starter's microphone carries a push-to-talk switch on its side and a
start button on top. Pressing push-to-talk alone carries the starter's voice
to the speakers as a public-address system. Holding push-to-talk and pressing
the start button fires the start: a 0.5-second dual-tone blast, a
simultaneous strobe flash, and a start pulse to the timer. Pressing the start
button a second time within five seconds signals a false-start recall, a
repeating dual tone; after five seconds the module resets and accepts another
start. With more than one microphone connected, a recall fails if two
starters press their buttons at the same time, so the manual directs that one
starter be designated to control recalls.[^f503]

The camera-type strobe flashes automatically with every start pulse and needs
about 30 seconds between flashes to recharge; a start given before the strobe
circuit has recharged sounds the tone without a flash. The manual directs
coaches, officials, and spectators to start stopwatches from the strobe
rather than the tone, because the speed of sound delays the tone for
observers at any distance from the speakers, and notes that the strobe also
gives fair starts to athletes who are deaf or hard of hearing; see the
[start-systems overview](index.md) for the governing-body rules behind this
practice.[^f503] A weaker or longer start tone indicates a low battery.[^f503]

## Connections

The SS2 provides two timer-start outputs on its circuit board: a
normally-open (N.O.) output used by all CTS timers, such as the
[System 5](../timers/system-5.md) Sports Timer, and a normally-closed (N.C.)
output for other manufacturers' timers. The later
[Championship](championship-start-system.md) dropped the built-in N.C.
output, which on that system requires factory modification.[^f503][^f875]
The start connection runs through a start jumper cable, model `SJ-25`
(25-foot) or `SJ-50M` (50-metre), to the timer's cable harness or to an
in-deck wiring plate; in System 5 installations it plugs into the start
connector of the touchpad-and-button-A cable harness.[^f503][^f506] An
optional manual pushbutton connects to the button-start connector as a backup
to the microphone start button.[^f503]

The manual specifies placing the module at least 10 feet (3 m) from the pool
edge, positioned so that officials and spectators can see the strobe.[^f503]

## Specifications

| | |
|---|---|
| Dimensions (H × W × D) | 13.25 × 18 × 4 in (33 × 45 × 10 cm) |
| Weight | 17 lb (7.7 kg) |
| Power | Internal 12 VDC gel-cell battery; 115 VAC external charger |
| Charging | Module must be off; does not operate while charging |
| Battery life | One to two days typical; about 20% self-discharge in 2 to 3 months idle |
| Fuse | Automotive blade, 4 A |
| Built-in speaker | None; speakers connect to the two board jacks |
| Speakers | 1 or 2 × 40 W, 8 Ω reflex, or 6/8/10 × 6 W under-block; expandable to 20 |
| Microphones | Up to 3, on identical interchangeable jacks |
| Start outputs | Normally-open (CTS timers) and normally-closed (other timers) |
| Start tone | 0.5 s dual-tone blast with simultaneous strobe flash |
| Recall | Repeating dual tone, within 5 s of the start pulse |
| Strobe | Camera strobe, about 30 s recharge between flashes |
| Mounting | Tabletop, 1/4-20 tripod bracket, or wall-mount kit |

## Part numbers and accessories

- `SS2-1` / `SS2-2` / `SS2-6` / `SS2-8` / `SS2-10`, the five sold
  configurations.[^f503]
- `LS40-6` / `-8` / `-10`, lane-speaker cable harness; the number is the lane
  count. The naming continues on the later Championship, which uses `LS40-6`
  through `LS40-12`.[^f503][^f875]
- `SP-125`, additional 40 W speaker with 125-foot cable for far-lane starting;
  `SMK-1`, backstroke-flag mounting kit for it.[^f503]
- `M-50` / `M-100` / `M-200`, replacement microphones; the number is the cable
  length in feet.[^f503]
- `SJ-25` / `SJ-50M`, start jumper cable to the timer (25 ft or 50 m).[^f503]
- `BP-3`, external battery pack.[^f503]
- `TR-1` / `TR-2`, optional tripod (the manual names both); wall-mount
  kit.[^f503]
- Factory replacement parts: circuit board, speakers, cables, strobe, battery,
  battery charger, and front panel.[^f503]

## See also

- [Championship Start System (CHAMP-SSM)](champ-ssm.md): the pre-2005
  deck-wired generation that followed the SS series
- [Championship Start System](championship-start-system.md) and
  [Championship Elite Start System](championship-elite-start-system.md): the
  current deck-wired line
- [Infinity Start System](infinity-start-system.md): the portable CTS start
  family
- [System 5](../timers/system-5.md): the timing console of the SS2's era
- [Colorado Time Systems lane speakers](../external-speaker/cts.md): the
  under-block speakers this system drives
- [Start systems](index.md): the full CTS start-system lineup
- [Colorado Time Systems](../../../vendors/colorado-time-systems.md): the
  manufacturer

## References

[^f503]: [Colorado Time Systems, Electronic Start System Model SS2 Instruction Guide (F503 Rev. 0897, ©1993)](https://spanish.coloradotime.com/manuals/StartSystem2-man.pdf), hosted on the CTS Spanish-language legacy site.
[^f506]: [Colorado Time Systems, Swimming 5 for the System 5 Sports Timer user guide (F506, Rev. 0698)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/System5/System5swim-man.pdf), hardware-setup chapter (the SS2 as the standard package start system) and start-system appendix (the `SS-1`/SS2/LS series).
[^f890]: [Colorado Time Systems, Swimming 6 for the System 6 Sports Timer user guide (F890)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/System6/System_6_Swimming_Manual_F890.pdf), timing-corrections section ("a CTS Infinity, ChampStart or SS-2").
[^psu]: [Colorado Time Systems shop, Start System Power Supply (R-920-059)](https://shop.coloradotime.com/products/start-system-power-supply-920-029), compatibility list covering `SS`/`SSF`/`WSS`/`WSSF`, `INF-SSM`/`INF-SSMF`, and legacy `SS-01`/`SS-02`.
[^f875]: [Colorado Time Systems, Championship Start Instruction Guide (F875 Rev. 202202)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Start%20Systems/Champ_Start_User_Guide_F875.pdf).

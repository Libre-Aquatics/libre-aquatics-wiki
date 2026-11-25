---
title: ALGE STB1 Startbeep
description: >-
  The STB1 Startbeep is the ALGE-Timing battery-powered horn that sounds timed countdowns or a
  single start signal and closes a contact to start a timer.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: STB1 Startbeep
infobox:
  - label: Manufacturer
    value: '[ALGE-Timing](vendors/alge-timing.md)'
  - label: Part number
    value: '`STB1`'
  - label: Type
    value: 'Start horn and countdown timer'
  - label: Connection
    value: 'Banana jacks for start output and external button; 6-pin DIN for charger or external switch'
  - label: Speaker
    value: 'Built-in swivelling horn loudspeaker'
  - label: Dimensions
    value: '132 × 205 × 88 mm'
  - label: Weight
    value: '1 kg'
  - label: Power
    value: 'One 9 V battery (alkaline or NiCd), or external 10–15 V'
  - label: Introduced
    value: 'By March 2011 (Timy2 SWIM TRAINER manual)'
  - label: Status
    value: 'Current'
  - label: Manual
    value: '[Startbeep STB1 manual (E23-11-02)](https://alge-timing.com/downloads/userGuides/STB1-BE.pdf)'
---

<!--
Research notes, ALGE STB1 startbeep. Surfaced 2026-11-11 while building out alge-timy.md. Built
out 2026-11-19.

Original stub sources:
- ALGE swimming catalogue V1.113 (2013), held, page 3: in the semi-automatic system the start
  can be given by the startbeep STB1; it appears in the system drawing beside the Timy2 PXE.
  Verified.
- ALGE-Timing, Timy2 SWIM TRAINER manual E110330 (held, timers-consoles/): a race is started
  by a C0 impulse, for example from a push button with a startbeep STB1 acting as the horn.
  Verified.
- ALGE Aquatic Sports catalogue (June 2026), held: the semi-automatic system gives the start on
  the BANG2 speaker instead; no STB1 listed. Verified absence.

Build-out sources (all read in full):
- ALGE-Timing, Startbeep STB1 manual, Version E23-11-02 (8 pp., PDF 2 November 2023),
  alge-timing.com/downloads/userGuides/STB1-BE.pdf, filed under start-systems/. Answers the
  stub's open questions: it is a self-contained countdown timer with a horn loudspeaker, powered
  by one 9 V cell. Rotary switch with off and 15 functions: 1-9 fixed intervals (10, 15, 20, 30,
  40, 45, 60, 90, 150 s), A one user interval of 6 s to 99:59 min (minutes set at C, seconds at
  D, lost at power-off), B a second user interval until July 2017, then a 3 s speed-climbing
  countdown (silent, low, low, high), and from November 2020 B with the button held gives a 3 s
  parallel-slalom countdown for the SSD1 start door (low, low, low, high); older units need a
  new EPROM for these. E horn (sounds while the button is held), F one countdown per button
  press. Optional 10 s pre-warning tone, enabled by holding the button at switch-on, only for
  intervals longer than 10 s (so not position 1). Interval can be changed on the fly and
  confirmed with the button. The timer start falls at the beginning of the last, high beep.
  Sockets: white banana pair, reed relay, normally open, max 12 V / 0.5 A, to start a timer;
  green/black banana pair for synchronizing with other timers and for an external hand switch;
  6-pin DIN (pin 1 external button, 3 ground, 4 external supply 10-15 V) for the NGL13 charger or
  an external switch. Quartz 4.608 MHz; -25 to 45 C (storage -40 to 65 C); 2 mA idle, 150 mA when
  sounding; NiCd charge 14 h, not over 16 h. Runtime at a 30 s countdown: alkaline 80 h, or 40 h
  with pre-warning; NiCd 20 h, or 10 h with pre-warning. Item numbering conflicts: parts list
  gives the push button as 1 and the rotary switch as 2; the text calls them switch (1) and red
  button (2).
- Spanish edition STB1-BES (PDF 19 October 2020): compared for figures only; says not to charge
  over 14 h where the English says 16 h. Not filed.
- ALGE-Timing STB1 leaflet (1 p., PDF 7 March 2025, alge-timing.com/downloads/leaflets/STB1_PE.pdf),
  filed under catalogs-brochures/: same text as the 2017 catalogue; prints the programmable range
  as "6 and 99:59 minutes" (6 s in the manual). Up to 80 h.
- ALGE, Start Devices for Track and Field V1510.1 (2015), p7: two programmable intervals (matches
  the pre-July-2017 firmware), 9 V alkaline or 9 V NiMH or an external 12 V battery, 80 h without
  and 10 h with the warning signal on alkaline at 30 s (manual: 40 h), CMOS microprocessor,
  4.608 MHz, -25 to 45 C, 1 kg, 132 x 205 x 88 mm; sockets lettered A start contact, B external
  key, C external supply, D on/off, E internal key. Product line drawing calls it a
  microprocessor-controlled acoustic start-command transmitter (ALGE's words, paraphrased).
- ALGE general catalogue 2017, p15 and system drawings: one programmable interval; STB1 used for
  rowing and canoe (horn from a push button, several along the start line), speed climbing (3 s
  countdown, through an MC9 and Timy3 WP; ALGE says IFSC recommends its system), the SSD1 start
  door, alpine and cross-country skiing (STB1 or the ASC3 start clock), and listed as an impulse
  source for the TED radio link.
- ALGE product page 2342 (read 2026-11-19): 132 x 205 x 88 mm, 1 kg; "start gun function with
  acoustic signal (track&field or swimming)"; 9 V or external 12 V battery; sports listed are
  skiing, snowboard, canoe, rowing and speed climbing (swimming not in the category list);
  accessories 000-05 banana cable, 023-02 push button, ASC3 start clock. Guides in five languages.

Discrepancies: alkaline runtime with pre-warning 10 h (2015) vs 40 h (manual); one vs two user
intervals (firmware change, July 2017); programmable range printed in minutes in the leaflet and
catalogue; maximum NiCd charge 16 h (English) vs 14 h (Spanish); external supply 12 V battery
(brochure, product page) vs 10-15 V on the DIN pin (manual); NiMH (2015) vs NiCd (manual) for the
rechargeable 9 V cell.

Not established: tone frequencies of the low and high beeps; sound level; introduction date
before 2011; whether the 1990s ALGE start devices (SA1) are related. No independent review found.

Not stubbed: ASC3 start clock, SSD1 start door, TED radio link, contact mats (non-swimming, named
only here). Stubbed: NGL13 charger.
-->

The STB1 Startbeep is a portable start horn made by
[ALGE-Timing](../../../vendors/alge-timing.md) of Lustenau, Austria. It runs repeating countdowns
at fixed or programmed intervals, ending each with a high beep, or sounds a single horn signal when
a button is pressed. At the moment of the start it closes a contact that can start a timing
device.[^manual] ALGE describes it as a universal start device and sells it mostly for sports with
interval starts, such as skiing, rowing, canoeing and speed climbing.[^cat2017][^product] In
swimming, ALGE's 2013 catalogue uses it as the start horn of a semi-automatic push-button system,
and its 2011 Timy2 swim-training manual names it in the same role.[^cat2013][^trainer]

See the [start-systems overview](index.md) for the shared background that applies to every start
system.

## Naming and product line

This section covers the name and the dates found. ALGE writes the name as Startbeep STB1 or
STB1.[^manual] The earliest dated mention found is the Timy2 SWIM TRAINER manual of March 2011,
which assumes the device is already available.[^trainer] It appears in ALGE's 2013 swimming
catalogue, its 2015 athletics start-devices brochure and its 2017 general catalogue, and ALGE
still lists it in 2026.[^cat2013][^athl2015][^cat2017][^product]

The STB1's programs have changed over time. Until July 2017 it had two user-programmable
intervals. From July 2017 the second was replaced by a three-second countdown for speed climbing,
and from November 2020 a second three-second countdown was added for parallel slalom. Units built
before those dates need a new EPROM chip to gain the new programs.[^manual][^athl2015] The current
English manual is version E23-11-02, from November 2023.[^manual]

## Design and hardware

The STB1 is a compact box with a swivelling horn loudspeaker, in a case of glass-fibre
reinforced polyamide. It hangs from a post or other support by a chain on a screwed
hook.[^manual][^leaflet] Its only controls are a rotary switch with an off position and 15
function positions, and a red push button.[^manual] The manual numbers these parts
inconsistently: its parts list gives the push button as item 1 and the rotary switch as item 2,
while its text calls them switch (1) and button (2).[^manual]

It runs from one 9 V battery, alkaline or rechargeable NiCd, or from an external supply. It draws
about 2 mA while idle and 150 mA while sounding.[^manual] ALGE gives it a size of
132 × 205 × 88 mm and a weight of 1 kg in every document found, and rates it for −25 to
45 °C.[^manual][^athl2015][^leaflet][^product]

## Operation

This section describes the programs. The rotary switch selects one of these functions:[^manual]

| Position | Function |
|---|---|
| 0 | Off |
| 1–9 | Repeating countdown every 10, 15, 20, 30, 40, 45, 60, 90 or 150 seconds |
| A | Repeating countdown at a user-set interval of 6 seconds to 99 minutes 59 seconds |
| B | Three-second speed-climbing countdown (before July 2017: a second user interval) |
| B with button | Three-second parallel-slalom countdown (from November 2020) |
| C and D | Set the minutes and seconds of the user interval |
| E | Horn, which keeps sounding while the button is held down |
| F | Single countdown each time the button is pressed |

A repeating countdown begins when the button is pressed after the switch has been turned to the
chosen position. The interval can be changed while it runs by turning the switch and pressing the
button again.[^manual] The user interval is set by pressing the button once per minute at position
C and once per second at position D, then storing it at position A. It is lost when the unit is
switched off.[^manual]

Any countdown can be preceded by a warning tone, sounded ten seconds ahead. It is turned on by holding
the button while switching the unit on, and works only with intervals longer than ten
seconds.[^manual] The two climbing and slalom programs run a fixed three-second countdown: two or
three low tones a second apart, then a high tone at the start. They can be triggered from the
button or by an impulse on the external-button input.[^manual][^cat2017]

In horn mode the STB1 serves as a start signal in place of a starting pistol.[^athl2015][^leaflet]
ALGE's product page describes this as a start-gun function for athletics or swimming.[^product]

## Use in swimming

ALGE's 2013 swimming catalogue shows the STB1 in its semi-automatic timing system, with a Timy2 PXE
[timer](../timers/alge-timy.md), a [023-02 push button](../semi-automatic/pushbutton/alge-023-02.md)
for each lane on an `MC8-SWIM` cable, and a display board.[^cat2013] The Timy2 SWIM TRAINER manual
of 2011 starts a race with a C0 impulse and gives a push button with an STB1 as the horn as its
example.[^trainer] In that arrangement the push button sends the start impulse to the timer and
the STB1 supplies the sound.

ALGE's 2026 aquatics catalogue no longer shows the STB1. Its semi-automatic swimming systems give
the start through a [BANG2](../external-speaker/alge-bang.md) speaker instead.[^cat2026] See the
[semi-automatic timing overview](../semi-automatic/index.md) for how push-button timing works.

## Connections

The STB1 has three sets of connections:[^manual]

| Connection | Use |
|---|---|
| White banana jacks | Start output to a timing device: a reed relay contact, normally open, rated at 12 V and 0.5 A |
| Green and black banana jacks | Input for synchronizing with other timing devices, and for an external hand switch that triggers a countdown or the horn |
| 6-pin DIN socket | The [NGL13](../accessories/alge-ngl13.md) charger, an external supply of 10–15 V, or an external switch with a DIN plug |

The start contact closes at the beginning of the final high beep, so a timer connected to it
starts with the audible start signal.[^manual] The DIN socket uses pin 1 for the external button,
pin 3 for ground and pin 4 for the external supply; the other pins are unused.[^manual] ALGE's
2015 brochure describes the external supply as a 12 V battery, as does the current product
page.[^athl2015][^product]

## Specifications

| Specification | Value |
|---|---|
| Controls | Rotary switch (off and 15 functions); push button |
| Fixed intervals | 10, 15, 20, 30, 40, 45, 60, 90 and 150 s |
| User interval | 6 s to 99 min 59 s |
| Warning tone | 10 s before the start (optional) |
| Sound | Swivelling horn loudspeaker |
| Start output | Reed relay, normally open, max. 12 V / 0.5 A |
| Clock | Quartz, 4.608 MHz |
| Power | One 9 V battery (alkaline or NiCd), or external 10–15 V |
| Current draw | 2 mA idle; 150 mA while sounding |
| NiCd charging | 14 hours |
| Running time, 30 s countdown | Alkaline 80 h (40 h with warning tone); NiCd 20 h (10 h with warning tone) |
| Operating temperature | −25–45 °C (storage −40–65 °C) |
| Case | Glass-fibre reinforced polyamide; chain fastening |
| Dimensions | 132 × 205 × 88 mm |
| Weight | 1 kg |

Figures are from the 2023 manual.[^manual] ALGE's 2015 brochure gives 10 hours rather than 40 for
an alkaline battery with the warning tone, and names a 9 V NiMH cell rather than NiCd as the
rechargeable option.[^athl2015] The Spanish edition of the manual says not to charge a NiCd cell for
more than 14 hours, where the English says 16.[^manuales][^manual] The leaflet and the 2017
catalogue print the user interval as "6 and 99:59 minutes"; the manual gives the lower limit as
6 seconds.[^leaflet][^cat2017][^manual]

## Part numbers and accessories

This section lists the STB1's companion parts.[^manual][^product]

| Item | Part number | Article |
|---|---|---|
| Startbeep | `STB1` | This article |
| Charger | `NGL13` | [NGL13](../accessories/alge-ngl13.md) |
| Push button | `023-02` | [023-02 push button](../semi-automatic/pushbutton/alge-023-02.md) |
| Banana cable | `000-05` | None |

## See also

- [BANG](../external-speaker/alge-bang.md): the ALGE speaker start system that replaced the STB1 in its swimming drawings
- [E-START](alge-e-start.md): ALGE's hand-held electronic starting device with a flash
- [Timy](../timers/alge-timy.md): the timer the STB1 starts in ALGE's semi-automatic systems
- [Start systems](index.md): the start-systems overview
- [ALGE-Timing](../../../vendors/alge-timing.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^manual]: [ALGE-Timing, Startbeep STB1 manual](https://alge-timing.com/downloads/userGuides/STB1-BE.pdf) (Version E23-11-02).
[^manuales]: [ALGE-Timing, Startbeep STB1 manual](https://alge-timing.com/downloads/userGuides/STB1-BES.pdf) (in Spanish, 2020).
[^leaflet]: [ALGE-Timing, Startbeep STB1](https://alge-timing.com/downloads/leaflets/STB1_PE.pdf) (leaflet, 2025).
[^product]: [ALGE-Timing, STB1](https://alge-timing.com/en/product/2342/stb1) (product page, as of November 2026).
[^athl2015]: [ALGE-Timing, Start Devices for Track and Field](https://www.splitsecond.com.au/brochures/Athletics-Start-Devices-KE.pdf) (V1510.1, 2015).
[^cat2017]: [ALGE-Timing, The Sports Timing Experts](https://www.alge-timing.fi/images/ALGE-yleisesite_eng.compressed.pdf) (general catalogue, 2017).
[^cat2013]: [ALGE-Timing, The Specialist for Swimming](https://www.freker.se/dokument/ALGE%20Swimming-KE-1.PDF) (catalogue V1.113, 2013).
[^cat2026]: [ALGE-Timing, Aquatic Sports](https://alge-timing.com/downloads/leaflets/Swimming_KE.pdf) (catalogue, June 2026).
[^trainer]: [ALGE-Timing, Timy2 SWIM TRAINER](https://alge-timing.com/downloads/userGuides/Timy2-SWIM-Trainer-BE.pdf) (version E110330).

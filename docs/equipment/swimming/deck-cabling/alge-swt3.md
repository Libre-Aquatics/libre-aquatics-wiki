---
title: ALGE SWT3 swim terminal
description: >-
  The SWT3 is the ALGE-Timing lane terminal, sold since about 2017, that chains on a bus to the
  TM-SWIM and takes a touchpad, three push buttons and a starting-block sensor for its lane.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: SWT3
infobox:
  - label: Manufacturer
    value: '[ALGE-Timing](vendors/alge-timing.md)'
  - label: Part number
    value: '`SWT3`; terminator `SWT-END`'
  - label: Type
    value: 'Swim lane terminal'
  - label: Connection
    value: 'Bus cable `200-04` terminal to terminal, `200-20` to the [TM-SWIM](equipment/swimming/timers/alge-tm-swim.md)'
  - label: Dimensions
    value: '160 × 85 × 60 mm (product page); 159 × 84 × 59 mm (manual)'
  - label: Weight
    value: '577 g (product page); 0.3 kg (manual)'
  - label: Power
    value: '12 V from the TM-SWIM over the bus'
  - label: Introduced
    value: 'Between 2013 and April 2017'
  - label: Status
    value: 'Current'
---

<!--
Research notes, ALGE SWT3 swim terminal. Surfaced 2026-11-04 while building out alge-tm-swim.md.
Built out 2026-11-23.

Original stub notes:
  Manual 5.5: all terminals identical, any lane, five peripherals (dual-edge touchpad, three manual
  buttons, one relay sensor), 1/10,000 s precision, sits behind the lane or inside an SO4 or SO5.
  Silicone grease on contacts. Product page: sealed; SWT-END on the last unit; a system must not
  combine it with the earlier SWT or SWT2. Generation order: SWT, SWT2 (2013 catalogue, same five
  channels), SWT3.
  SWT-DP: the SwimTime log of February 2025 adds a touchpad failure pre-warning for it, and the TMS
  log of December 2024 describes extended SWT hardware reporting low pad resistance on channel 5.
  Whether SWT-DP is a separate product or a revision is not established; no page found.
  Manual 3.1 still says to connect an SWT2 during installation, a leftover.

Re-read 2026-11-23 (sources/vendors/alge-timing/):
  - timers-consoles/alge-swimming-timing-system-manual-e24-08-29, TM-SWIM manual: 2 setup: one SWT3
    behind each lane or inside an SO4/SO5; 2.1: every ALGE cable has its number printed at both
    ends and the plugs differ by device so they cannot be mixed up; screw-lock connectors to be
    tightened only finger-tight ("force of 2 fingers"); 200-04 links terminals, 200-20 or cable reel
    KT200Z10 links the terminal nearest the TM-SWIM, SWT-END on the last terminal; SwimTime shows
    the number of lanes connected on start-up, and when that count and the terminals disagree, check
    the cabling and restart the software. 3.1 install: "connect at least one SWT2" (leftover).
    4.5.1.2.3/4: settings for which lane number is first on the finish/main bus and on the turn
    bus, plus a 10-lane numbering type; wrong settings misallocate lanes. 4.5.1.2.7: number of
    lanes set by the hardware when a timer is connected. 5.1 TM-SWIM technical data: connectors
    "SWT3 Line S (bus system start side)" and "SWT3 Line Turn". 5.5 (p. 38, rendered): terminals
    identical, any lane, auto-detected, cable set SWCBLxx; five devices: one touchpad (dual-edge
    trigger), three manual buttons, one relay take-off sensor; 12 V from the TM-SWIM; 1/10,000 s;
    159 x 84 x 59 mm; 0.3 kg; dry-cloth cleaning; silicone grease on contacts. Photo: grey box with
    "Swim Terminal SWT3" label, a row of five banana-socket pairs (blue, three red, green) and a
    round screw-lock bus connector at each end. Colour-to-channel mapping not stated.
  - catalogs-brochures/alge-swimming-catalogue-v1.113-2013, pp. 4-7: SWT2 per lane, identical, not
    numbered internally, TMS detects and numbers them by its settings; five independent channels;
    one cable terminal to terminal; SWT-END on the last; sockets for one touchpad, up to three
    023-02 buttons and one start block. Verified.
  - catalogs-brochures/alge-general-catalogue-2017, p. 101: SWIM Terminal SWT3 linked by a cable,
    SWT-END on the last, no fixed numbering, connections for one TP1890/2400 touchpad, three 023-02
    buttons and one starting block or relay pad. p. 102 and the April 2017 SO5/SWR7 leaflet: jump
    duration can be measured with the SO5 "in conjunction with the latest SWT3". Verified.
  - catalogs-brochures/alge-aquatic-sports-catalogue-swimming-ke-2026, pp. 4, 6 and 22: one SWT3 per
    lane and side; identical, not internally numbered; numbered by the TM-SWIM at power-on; five
    independent channels; one per lane and touch side. Verified.
  - website-archive/alge-product-pages-2026-11, swt3.html: sockets for one touchpad, three push
    buttons, one starting block; sealed for poolside use; a warning that SWT3s must not share a system with old SWT or SWT2
    terminals; 160 x 85 x 60 mm; 577 g; accessories TM-SWIM, SWT-END, SWIM-SIM10, 200-04, SO,
    TPxxxC. Verified.
  - software/alge-tms-firmware-change-log-v25.71: V 24.C1 (4 December 2024): SWT hardware extended so
    that a touchpad going low-resistance produces a held pulse on channel 5, which is now passed on to the
    PC. V 15.91 (15 September 2015): terminal polling reorganised; reaction-time measurement
    redesigned; a fault in the two-edge query fixed (fits the manual's "dual edge trigger").
    software/alge-swimtime-change-log-v2.5.4.1: V2.5.2.1 (13 February 2025) "Support for SWT-DP
    touchpad failure pre-warning". Verified.
  - First generation SWT (SWIM 2000) and its details: see alge-swt.md.
Web: no SWT3 leaflet or archived V2 page found. Independent sources: none found.
Not established: exact SWT3 introduction date; whether SWT-DP is a separate model or a revision of
the SWT3; channel colour mapping; IP rating behind "sealed".

Sources:
  - ALGE-Timing, Swimming Timing System manual, Version E24-08-29 (https://alge-timing.com/downloads/userGuides/Swimming-BE.pdf)
  - ALGE-Timing, The Specialist for Swimming, catalogue V1.113, 2013 (https://www.freker.se/dokument/ALGE%20Swimming-KE-1.PDF)
  - ALGE-Timing, General catalogue 2017 (held locally)
  - ALGE-Timing, Starting Block leaflet, 2017 (https://alge-timing.com/downloads/leaflets/Startsockel%20SO5-PE.pdf)
  - ALGE-Timing, Aquatic Sports catalogue, 2026 (https://alge-timing.com/downloads/leaflets/Swimming_KE.pdf)
  - ALGE-Timing, SWT3 product page (https://alge-timing.com/en/product/2229/swt3)
  - ALGE-Timing, History file for Time Manager Swim (https://alge-timing.com/alge/download/uC/Change_TMS.txt)
  - ALGE-Timing, History file for SwimTime (https://alge-timing.com/alge/download/software/Change_SwimTime.txt)
-->

The SWT3 is the lane terminal of the [TM-SWIM](../timers/alge-tm-swim.md) swimming timing system
made by [ALGE-Timing](../../../vendors/alge-timing.md) of Lustenau, Austria. One terminal sits at
each lane end and takes that lane's touchpad, up to three backup push buttons and the sensor of its
starting block or relay take-off plate. The terminals are chained one to the next on a bus cable back to the TM-SWIM, which also supplies
their power.[^manual][^cat2026] All SWT3 units are
identical; the TM-SWIM counts and numbers them when it starts up.[^manual][^cat2026] ALGE's 2017
catalogue calls the SWT3 its latest terminal, and it followed the SWT2 of 2013 and the SWT of the
SWIM 2000 system.[^cat2017][^cat2013]

See the [deck cabling overview](index.md) for the shared background that applies to every deck
cabling system.

## Role in the timing system

The terminal is the junction between the sensors at the pool edge and the timer. Each one has five
independent timing channels: one for the [touchpad](../touchpad/index.md), three for
[023-02 push buttons](../semi-automatic/pushbutton/alge-023-02.md), and one for a starting
platform such as the [SO5](../starting-blocks/alge-so5.md) or a relay pad such as the
[SWR7](../relay-judging/alge-swr7.md).[^manual][^cat2017] Each lane needs one SWT3 at each end where
touches are timed, so a pool timed at both ends has two chains, one on the TM-SWIM's start-side bus
and one on its turn-side bus.[^cat2026][^manual]

The TM-SWIM manual lets the terminal sit behind its lane or inside an ALGE SO4 or SO5 starting
block.[^manual]

## History and generations

This section covers the three terminal generations. The first, the [SWT](alge-swt.md), served the
SWIM 2000 system of the early 2000s, with the same five inputs and the same chained bus ending in
an SWT-END.[^swim2000] ALGE's 2013 swimming catalogue shows the SWT2 with the TM-SWIM: identical,
unnumbered terminals detected and numbered by the timer, with five channels each.[^cat2013] The
SWT3 appears in the 2017 general catalogue and in an April 2017 leaflet, which says the SO5 can
measure jump duration "in conjunction with the latest SWT3".[^cat2017][^leaflet17] ALGE's product
page says an SWT3 must not share a system with the older SWT or SWT2 terminals.[^product]

The TM-SWIM manual of 2024 still tells installers to "connect at least one SWT2" when setting up
the software, a line apparently carried over from an earlier edition.[^manual]

In December 2024 ALGE's TM-SWIM firmware history recorded that the terminal hardware had been
extended to warn when a touchpad's resistance drops, reporting the fault as a held pulse on channel
5 and passing it to the PC.[^tms] SwimTime added support for this "SWT-DP touchpad failure
pre-warning" in February 2025.[^swimtime] Whether SWT-DP names a new model or a revision of the SWT3
is not stated.

## Design and construction

The SWT3 is a small grey box, about 160 × 85 × 60 mm, which ALGE describes as sealed for use around
pools.[^product][^manual] The figures differ slightly between sources: 159 × 84 × 59 mm and 0.3 kg
in the manual, 160 × 85 × 60 mm and 577 g on the product page.[^manual][^product] A photo in the
manual shows a row of five colour-coded pairs of banana sockets on the front, one blue, three red
and one green, and a round screw-lock bus connector at each end.[^manual] The manual says the
touchpad input uses a dual-edge trigger system.[^manual]

The terminal has no battery or mains input; it takes 12 V from the TM-SWIM along the bus. ALGE
gives its timing precision as 1/10,000 s.[^manual]

## Wiring and installation

All terminals on a side are joined in a chain. Short `200-04` cables link one terminal to the next,
a `200-20` cable or a `KT200Z10` cable reel links the nearest terminal to the TM-SWIM, and an
`SWT-END` terminator plugs into the last terminal.[^manual] The manual refers to
these as the [SWCBL cable sets](alge-swim-cable-sets.md).[^manual] Each ALGE cable has its
number printed at both ends, and each device uses a different plug, so cables cannot be connected to
the wrong device. The manual asks for the screw-lock connectors to be tightened by hand only, with
the force of two fingers.[^manual]

Because the terminals carry no number, the TM-SWIM numbers them by their position on the bus. In
SwimTime the operator sets which lane is first on the finish bus and on the turn bus, and for ten
lanes which numbering scheme applies; the manual warns that a wrong setting assigns times to the
wrong lanes.[^manual] When the TM-SWIM is connected, the number of lanes is taken from the hardware.
If SwimTime shows fewer lanes than terminals, the manual says to check the cabling and restart the
software.[^manual]

## Testing and troubleshooting

ALGE lists its [SWIM-SIM10](../timers/alge-swim-sim10.md) lane simulator as an accessory of the
SWT3.[^product] Firmware
changes have also touched the terminal side: a 2015 TM-SWIM release reorganised how the timer polls
the terminals and fixed an error in its two-edge impulse check.[^tms] Since late 2024 the terminals
can flag a touchpad whose resistance is falling before it fails.[^tms][^swimtime]

## Care and maintenance

The manual recommends wiping the terminal with a dry cloth from time to time and putting a little
silicone grease on the contacts to keep them from corroding.[^manual]

## Specifications

| Item | Value |
|---|---|
| Inputs | 1 touchpad (dual-edge), 3 push buttons, 1 starting block or relay pad |
| Connectors | Banana-socket pairs for the inputs; two screw-lock bus connectors |
| Power | 12 V from the TM-SWIM over the bus |
| Precision | 1/10,000 s |
| Dimensions | 160 × 85 × 60 mm (product page); 159 × 84 × 59 mm (manual) |
| Weight | 577 g (product page); 0.3 kg (manual) |
| Housing | Sealed for poolside use (ALGE) |

Sources: TM-SWIM manual and product page.[^manual][^product]

## Part numbers and accessories

| Item | Part number | Notes |
|---|---|---|
| Swim terminal | `SWT3` | One per lane per timed end |
| Bus cable | `200-04` | Terminal to terminal |
| Bus cable | `200-20`, reel `KT200Z10` | First terminal to the TM-SWIM |
| Terminator | `SWT-END` | On the last terminal |
| Cable sets | [`SWCBL8S`, `SWCBL10S`, `SWCBL10T`](alge-swim-cable-sets.md) | Terminal cabling for 8 or 10 lanes |
| Simulator | [`SWIM-SIM10`](../timers/alge-swim-sim10.md) | Tests up to ten lanes |

Sources: TM-SWIM manual, product page and cable-set page.[^manual][^product]

## See also

- [ALGE SWT](alge-swt.md): the first-generation terminal of the SWIM 2000
- [ALGE swimming cable sets](alge-swim-cable-sets.md): the bus cables and terminators
- [ALGE TM-SWIM](../timers/alge-tm-swim.md): the timer the terminals connect to
- [ALGE SO5](../starting-blocks/alge-so5.md) and [SWR7](../relay-judging/alge-swr7.md): the block and relay pad it reads
- [Deck cabling](index.md): the deck cabling overview
- [ALGE-Timing](../../../vendors/alge-timing.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^manual]: [ALGE-Timing, Swimming Timing System](https://alge-timing.com/downloads/userGuides/Swimming-BE.pdf) (manual, Version E24-08-29), 2, 3.1, 4.5.1.2, 5.1 and 5.5.
[^cat2013]: [ALGE-Timing, The Specialist for Swimming](https://www.freker.se/dokument/ALGE%20Swimming-KE-1.PDF) (catalogue V1.113, 2013), pp. 4–7.
[^cat2017]: ALGE-Timing, General catalogue (2017), pp. 101–102.
[^cat2026]: [ALGE-Timing, Aquatic Sports](https://alge-timing.com/downloads/leaflets/Swimming_KE.pdf) (catalogue, June 2026), pp. 4, 6 and 22.
[^leaflet17]: [ALGE-Timing, Starting Block](https://alge-timing.com/downloads/leaflets/Startsockel%20SO5-PE.pdf) (SO5 and SWR7 leaflet, April 2017).
[^product]: [ALGE-Timing, SWT3](https://alge-timing.com/en/product/2229/swt3) (product page, as of November 2026).
[^tms]: [ALGE-Timing, History file for Time Manager Swim](https://alge-timing.com/alge/download/uC/Change_TMS.txt) (versions 15.91 to 25.71, 2015–2025).
[^swimtime]: [ALGE-Timing, History file for SwimTime](https://alge-timing.com/alge/download/software/Change_SwimTime.txt) (version 2.5.2.1, February 2025).
[^swim2000]: [ALGE, SWIM2000](https://www.splitsecond.com.au/brochures/swim2000-pe.pdf) (brochure, 2002; Split Second Timing copy).

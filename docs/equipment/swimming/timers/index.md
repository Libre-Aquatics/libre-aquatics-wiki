---
title: Timers
tags:
  - Equipment
  - Timing
  - Swimming
---

A swim timing console, or timer, is the head end of a
timing system: the unit that collects the finish
signals from each lane's [touchpad](../touchpad/index.md) and backup
pushbuttons, runs the race clock,
receives the start pulse from the [start system](../starter/index.md), and
drives the scoreboard.

## History and development

The current platform from
[Colorado Time Systems](../../../vendors/colorado-time-systems.md) (CTS), Gen7,
replaced the earlier [System 5](system-5.md) and [System 6](system-6.md) consoles;
CTS first announced Gen7 in April 2017, beginning with the Serial in-deck system, and
launched it more broadly later that year.[^launch2][^launch] Where those consoles were self-contained
units operated from a built-in keypad, the Gen7 timers move the operator interface
to a Windows laptop or tablet connected over Ethernet and keep all timing data on
the console itself, so a race finishes even if the interface drops.[^f1058]

Daktronics' current console, the [OmniSport 2000](omnisport-2000.md), succeeded the
company's [OmniSport 1000](omnisport-1000.md) and [OmniSport 6000](omnisport-6000.md)
consoles of the 1990s; the lineage is covered in the OmniSport 2000 article's
[history section](omnisport-2000.md#history-and-predecessors).

## How a swim timing console works

In a fully automatic officiating setup the console is the
component that actually measures each lane's time; the operator's computer and any
meet-management software sit alongside it but do not do the timing.

## Governing-body requirements

Under World Aquatics rules, competition times are recorded to a hundredth of a
second, and championship swimming is timed by automatic officiating equipment,
touchpads at both ends of each lane, backed up by pushbuttons, reporting to a
console of this kind.[^warules]

## Products

This section catalogs the swim timing consoles made by Colorado Time Systems and
Daktronics.

Gen7 ships in two consoles that share the same enclosure, software, and price-list
accessories but differ in how they cable to the deck:

| Product | Part number | Deck cabling | Lanes | Status |
|---|---|---|---|---|
| [Gen7 Serial Timer](gen7-serial.md) | `GEN7-TMR` | Connect-hub bus: keyed, colour-coded, wet-pluggable titanium connectors | Up to 20 | Current |
| [Gen7 Legacy Timer](gen7-legacy.md) | `GEN7-TMR-L` | A facility's existing CTS multi-pin lane harnesses and display boards | Up to 12 | Current |

The two are aimed at different installations. The Serial timer is built around CTS's
newer connect-hub cabling and suits new construction; the Legacy timer is a direct
replacement for an existing CTS console that drives a facility's current multi-pin
lane hardware and scoreboards without rewiring the deck.[^blog]

Separate from its consoles, CTS also makes the
[Dolphin Wireless Stopwatch Timing System](../semi-automatic/dolphin.md), in which each
lane timer holds a wireless stopwatch reporting to a base unit on the meet computer. Its
[Dolphin Starter Unit](../starter/dolphin-starter-unit.md) can start every watch
together, either by hand or from an electronic start system.

Daktronics makes one aquatics console, the multi-sport
[OmniSport 2000](omnisport-2000.md), which times swimming and also runs diving,
water polo, track, and pace clock programs from swappable sport inserts. Consoles
shipped from June 2013 carry an Ethernet jack and are marketed as the OmniSport
2000e.

| Product | Part number | Deck cabling | Lanes | Status |
|---|---|---|---|---|
| [OmniSport 2000](omnisport-2000.md) | `0A-1240-0096` (2000e kit) | On-deck lane modules or in-deck deck plates | Up to 10 | Supported; Pro software interfaces discontinued |

Each article covers one console in full (its specifications, connections, and
part-number variants) and how it differs from the others; this page is the shared
overview they refer back to.

## See also

- [Start systems](../starter/index.md): the starter's equipment that
  triggers the timer
- [Colorado Time Systems](../../../vendors/colorado-time-systems.md) and
  [Daktronics](../../../vendors/daktronics.md): the manufacturers
- [Equipment](../../index.md): the equipment reference

## References

[^warules]: [World Aquatics, Swimming Technical Rules](https://resources.fina.org/fina/document/2023/01/04/65961a45-bde5-4217-b666-ca1f5dc2d1f0/1_Swimming-Technical-Rules.04.01.2023.pdf), competition times are recorded to a hundredth of a second, timed by automatic officiating equipment.
[^launch]: [Aquatics International, Colorado Time Systems Launches Gen7](https://www.aquaticsintl.com/products/colorado-time-systems-launches-gen7_o) (December 2017).
[^launch2]: [Aquatics International, Colorado Time System Introduces Gen7 Swim Timing and Scoring](https://www.aquaticsintl.com/products/colorado-time-system-introduces-gen7-swim-timing-and-scoring_o) (April 2017; Serial in-deck system, up to 20 lanes).
[^f1058]: [Colorado Time Systems, Gen7 Legacy Timer User Guide (F1058)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Gen7/Gen7LegacyTimerUserGuide_F1058.pdf).
[^blog]: [Colorado Time Systems, Serial or Legacy, Which Gen7 Timer is Right for You?](https://coloradotime.com/blog/serial-or-legacy-which-gen7-timer-is-right-for-you).

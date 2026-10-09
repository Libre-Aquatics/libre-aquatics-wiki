---
title: Water polo shot clocks
seoTitle: Water polo shot clocks and horns
description: >-
  Water polo shot clocks: the deck displays that show the possession time and often the game
  time at each end of the pool, the horn units that power them, and the models from each
  manufacturer.
tags:
  - Equipment
  - Timing
  - Water polo
---

<!--
Research notes, water polo shot clocks overview. Written 2026-10-08 when the water polo section
got its first articles (Swiss Timing shot clocks, Montreal shot clocks and Coyote horn, moved
from common/pace-clock/).

Rules: World Aquatics Competition Regulations 2026, Part Six, 9.1 (28 s), 9.10 (18 s after
certain restarts), 9.5.1 (kept by the timekeepers, displayed on a shot clock), 21.12 (one or
more shot clocks visible to officials and players). Local copy
sources/rules/world-aquatics/wa-competition-regulations-2026.
Hardware facts come from the articles in the table: Swiss Timing manuals 3403.511 (2014) and
3403.514.02 (2023) and the Calypso and Montreal datasheets; the CTS deck clock and Pace
Clock/Shot Clock pages and their CTS sources. The 30 s and 20 s figures in the 2013-2015 Swiss
Timing datasheets reflect the possession rule of the time, not the current one.

Not covered yet: Daktronics, Seiko and ALGE shot clocks.
-->

A water polo shot clock is the display that shows how long the team with the ball has left to
shoot. World Aquatics allows 28 seconds of possession, or 18 seconds after certain restarts,
and requires the time to be shown on one or more clocks that the officials and players can
see.[^wacr] In practice a shot clock stands at each end of the pool, and current models also show the game
time above the possession time.[^st2023][^deckclock] The clocks take their time from the
[water polo console](../console/index.md) at the officials' table.

## How a shot clock works

A shot clock is a slave display. The console counts the time and sends it to the clocks, so
that every display shows the same value and the clocks follow the timekeeper's start, stop and
reset.[^calypsods][^deckclock] Two ways of connecting them are in use:

- Wired, as with Swiss Timing's clocks. A power and horn unit beside the pool takes the
  console's data and supplies data and 24 V DC to each clock over cable reels of 30 m and
  70 m, and it sounds the horn when the possession time runs out.[^st2014][^st2023]
- Wireless, as with Colorado Time Systems' deck clocks, which take the time over a 2.4 GHz link
  from a controller or timing console, or by data cable.[^deckclock]

Because the clocks stand on the deck, electrical safety governs where the mains-powered parts
go. Swiss Timing cites the IEC standard for swimming pools, IEC 60364-7-702 (its manuals misprint
the number as 60634-7-702), in asking for its 115/230 V power and horn unit to be
kept at least 3.5 m from the pool edge, or 2 m if it is protected by a residual current device
of 30 mA or less, subject to national rules.[^st2014][^st2023]

## Governing-body requirements

The rules set the possession times the clocks display, not the clocks themselves. Under World
Aquatics' 2026 rules a team may keep the ball for 28 seconds, and for 18 seconds after a penalty
throw that does not change possession, a corner throw, and some throw-ins from the side line.
The timekeepers keep the time with any reliable device, and it must be shown on at least one
clock visible to officials and players.[^wacr] Older equipment and documents often give 30 and
20 seconds, the possession times in force when they were written.[^calypsods]

## Products

The water polo shot clocks and horn units on this wiki are listed below. Each article covers its
product in full, and this page is the shared overview they refer back to.

| Article | Manufacturer | Display | Connection |
|---|---|---|---|
| [Swiss Timing water polo shot clocks](swiss-timing-shot-clocks.md) | Swiss Timing | 24 cm shot-time digits; game time on the 2023 model | Wired, from a power and horn unit |
| [Montreal shot clocks](montreal-shot-clocks.md) | Swiss Timing | 40 cm shot-time digits and game clock | Wired, from a battery-backed power and horn unit |
| [Coyote horn](coyote-horn.md) | Swiss Timing | Horn and power unit | Feeds the shot clocks |
| [Deck Clock](../../common/pace-clock/deck-clock.md) | Colorado Time Systems | 10 in shot-time and 5 in game-time digits | 2.4 GHz wireless or cable; also a pace clock |
| [Pace Clock/Shot Clock](../../common/pace-clock/pace-clock-shot-clock.md) | Colorado Time Systems | 10 in digits | Wired or wireless; also a pace clock |

The two Colorado Time Systems clocks double as training pace clocks and are filed with the
[pace clocks](../../common/pace-clock/index.md).

## See also

- [Water polo consoles](../console/index.md): the controllers that drive the shot clocks
- [Pace clocks](../../common/pace-clock/index.md): training clocks, some of which double as shot clocks
- [Water polo equipment](../index.md): the water polo equipment overview
- [Equipment](../../index.md): the equipment reference

## References

[^wacr]: [World Aquatics, Competition Regulations](https://resources.fina.org/fina/document/2026/02/18/e6815ecc-06d9-4f0b-98e9-4c441cf5e6a3/2026-02-18_World-Aquatics_CR-Final.pdf), Part Six, 9 and 21.12.
[^st2014]: [Swiss Timing, Water polo Shot Clocks User's Manual (3403.511)](https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3403.511_WPO_Shotclock_User_Manual.pdf) (March 2014).
[^st2023]: Swiss Timing, WPO Shot Clocks User's Manual (3403.514.02, version 1.1, September 2023).
[^calypsods]: [Swiss Timing, Calypso LED Shot Clocks datasheet](https://www.swisstiming.com/fileadmin/Resources/Data/Datasheets/DOCM_WP_CalypsoShotClock_1020_EN.pdf) (Calypso_Shot Clocks/10-2015).
[^deckclock]: [Colorado Time Systems, Deck Clock User Guide (F985 Rev. 202007)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Multisport%20Electronic%20Scoreboards/LED%20Scoreboards/Deck_Clock_User_Guide_F985.pdf).

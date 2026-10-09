---
title: Water polo consoles
seoTitle: Water polo game and shot-clock consoles
description: >-
  Water polo consoles: the controllers at the officials' table that run the game clock, the
  shot clock, exclusions and timeouts together, and the models from each manufacturer.
tags:
  - Equipment
  - Timing
  - Scoring
  - Water polo
---

<!--
Research notes, water polo consoles overview. Written 2026-10-08 when the water polo section
got its first articles (the Calypso WPO console and its team-name module, moved from
common/scoreboard-control/).

Rules (local copy sources/rules/world-aquatics/wa-competition-regulations-2026, Part Six):
4.1 four 8-minute periods, counted in actual play; 4.2 the clock halts for each stoppage and
resumes once the thrower releases the ball; 4.3 intervals of 2, 5 and 2 minutes; 4.4.2
penalty shootout for a tie; 5.1 and 5.3 two 1-minute timeouts per team per match; 9.1 28 s of
possession, 9.10 18 s after certain restarts; 9.5.1 timekeepers keep possession time with any
reliable device, shown on a shot clock; 10.5.2.1 exclusions end after 18 s of actual play;
21.12 shot clocks visible to officials and players.
Product facts are from the articles listed in the table, each with its own sources: the Calypso
WPO console (Swiss Timing manual 3403.504.02), the WTTC-1 (CTS F1071 and F980), and ARES Water
Polo (ARES 21 datasheets).

Not covered yet: Daktronics, Seiko and ALGE water polo controllers; manual table equipment
(exclusion flags, possession indicators).
-->

A water polo console is the controller at the officials' table that runs a match's clocks.
Water polo is timed in actual play: the game clock halts whenever play stops and runs again
only once the ball is back in play, and a separate shot clock limits how long a team can keep the
ball without shooting.[^wacr] The console runs both clocks together, along with the score,
exclusions and timeouts, and sends them to the scoreboard and to shot clocks at each end of the
pool. This page covers the consoles; the clocks they drive are on the
[water polo shot clocks overview](../shot-clock/index.md).

## How a water polo console works

The console carries three kinds of timing at once:[^wacr]

- The game clock, counting four periods of eight minutes of actual play, plus the intervals
  between them and any timeout.
- The shot clock, which restarts for each new possession at the full possession time, or at a
  shorter one after certain restarts.
- Exclusion clocks, one for each excluded player, each running until the player may return.

Because the game clock stops and starts many times a period, consoles give the timekeeper a
start/stop switch or key, and most also accept external switches so that a second or third
official can run the game clock or reset the shot clock from elsewhere on the
deck.[^wpo][^wttc] The console also keeps team fouls and timeouts, sounds the horn when a period
ends and when possession time runs out, and can usually record which player scored or
was excluded.[^wpo][^wttc]

Consoles are built in two ways. Some are dedicated to water polo, such as Swiss Timing's
[Calypso WPO console](calypso-wpo-console.md). Others are multisport scoreboard controllers
with a water polo mode, such as Colorado Time Systems'
[WTTC-1](../../common/scoreboard-control/wttc-1.md), which also runs other sports.[^wpo][^wttc]
A swimming timing system can also run water polo: Swiss Timing's ARES 21 had its own
[water polo program](../../../software/ares-water-polo.md).[^ares]

## Governing-body requirements

World Aquatics sets the times the console has to keep but not the equipment that keeps them.
In its 2026 rules a match has four periods of eight minutes, with intervals of two, five and
two minutes, and ends in a penalty shootout if level. Each team may take two one-minute
timeouts. Possession is limited to 28 seconds, or 18 seconds after a penalty throw, a corner
throw and some other restarts, and an excluded player may return after 18 seconds of actual
play. The rules leave the possession time to the timekeepers using any reliable device, with
shot clocks placed where officials and players can see them.[^wacr] A console's factory
settings do not always follow the current rules, so they need checking before a match. The
Calypso WPO console's defaults, for example, are 25 and 15 seconds of
possession.[^wpo]

## Products

The water polo consoles and controllers on this wiki are listed below. Each article covers its
product in full, and this page is the shared overview they refer back to.

| Article | Manufacturer | Type | Sports |
|---|---|---|---|
| [Calypso WPO console](calypso-wpo-console.md) | Swiss Timing | Wired keypad console | Water polo |
| [Team-name module (3400.740)](calypso-team-name-module.md) | Swiss Timing | Console option | Water polo |
| [WTTC-1](../../common/scoreboard-control/wttc-1.md) | Colorado Time Systems | Wireless tabletop controller | Water polo and other sports |
| [Run-stop-reset units](../../common/scoreboard-control/rsr.md) | Colorado Time Systems | Hand switches for the WTTC-1 | Water polo and other sports |
| [ARES Water Polo](../../../software/ares-water-polo.md) | Swiss Timing | Timing-system software | Water polo |

## See also

- [Water polo shot clocks](../shot-clock/index.md): the clocks these consoles drive
- [Scoreboard control](../../common/scoreboard-control/index.md): controllers and adapters shared with other sports
- [Water polo equipment](../index.md): the water polo equipment overview
- [Equipment](../../index.md): the equipment reference

## References

[^wacr]: [World Aquatics, Competition Regulations](https://resources.fina.org/fina/document/2026/02/18/e6815ecc-06d9-4f0b-98e9-4c441cf5e6a3/2026-02-18_World-Aquatics_CR-Final.pdf), Part Six, 4, 5, 9, 10 and 21.12.
[^wpo]: Swiss Timing, Calypso WPO Console Instructions for Use (3403.504.02, version 2.7, January 2026).
[^wttc]: [Colorado Time Systems, WTTC Water Polo Quick Reference (F980)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Multisport%20Electronic%20Scoreboards/Multisport%20Controllers/WTTC_Water_Polo_Quick_Reference_F980.pdf).
[^ares]: Swiss Timing, ARES 21 Timing Device datasheet (3330.525.02.RA), sport programs.

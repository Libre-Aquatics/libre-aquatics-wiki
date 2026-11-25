---
title: Meet management
seoTitle: Swim meet management programs
description: "Meet management for aquatic competitions: the workflow from entries to results, and the programs that build, seed, run and score a swimming meet."
updated: 2026-11-25
tags:
  - Software
  - Meet management
---

Meet management is the work of planning and running a competition end to end,
turning a list of entries into a scheduled, seeded, scored, and published event.
Meet-management software builds and seeds a competition, scores it, and reads finish
times from the timing equipment.

## What lives here

The work falls into three stages:

- Before: building the event program, collecting and processing entries,
  seeding, and generating heat sheets / start lists.
- During: running the session order, recording results from the
  timing system, and handling scratches, DQs, and
  re-swims.
- After: scoring the competition, producing results and awards, and reporting
  results and records upward.

The articles cover the programs that do this for swimming. Programs for judged events are
under [diving and artistic swimming software](../diving-artistic-swimming/index.md).

## Articles

The three programs below are the ones Colorado Time Systems names as able to read results
from a
[Dolphin Wireless Stopwatch Timing System](../../equipment/swimming/semi-automatic/dolphin.md).[^f912]

| Program | Vendor | Notes |
|---|---|---|
| [Hy-Tek Meet Manager](hy-tek-meet-manager.md) | [Hy-Tek Sports Software](../../vendors/hy-tek.md), part of [The Active Network](../../vendors/active-network.md) since 2008 | Advertised since 1986 and the program most American consoles were built to talk to; reads Dolphin `DO3` and `DO4` files as either the primary or the backup source |
| [SwimTopia Meet Maestro](meet-maestro.md) | SwimTopia | Integrates with the Dolphin directly, and also sends event and heat detail back into the Dolphin software |
| [Splash Meet Manager](splash-meet-manager.md) | [Splash Software](../../vendors/splash-software.md), Spiegel bei Bern | Compulsory for meets in Switzerland and distributed through federation agreements in Europe and Quebec; reads Dolphin result files |

### Hy-Tek and The Active Network

- [The Interface](the-interface.md): a disk and cable announced in 1988 that connected Meet
  Manager to timing consoles.
- [Computerized Swim League](computerized-swim-league.md): a package published by Hy-Tek,
  Ltd. and attested once, in 1984.
- [ACTIVEWorks Swim Manager](activeworks-swim-manager.md): The Active Network's web product
  for club and meet administration, which hands a meet host its entries as an HY3 file.

### ALGE-Timing

- [SwimTime](swimtime.md): operates the
  [TM-SWIM](../../equipment/swimming/timers/alge-tm-swim.md) console. ALGE lists
  [SPORTSYSTEMS](sportsystems.md) and [Orpheus](orpheus.md) among the meet programs it works
  with.
- [SWIM-Manager](alge-swim-manager.md): the meet program of the earlier
  [SWIM 2000](../../equipment/swimming/timers/alge-swim-2000.md) package.

### Other programs

- [Easy Meet](easy-meet.md), from EasyWare, and
  [Championship Meet Management](championship-meet-management.md), from Championship
  Technologies: rivals and predecessors that the swimming press names.
- [LSA SwimMeet and SwimTeam](lsa-swimmeet.md): IBM PC programs advertised from 1985.
- [SwimMeet Manager](swimmeet-manager.md): from Hy-Point Software, advertised in 2000 and
  2001.
- [Aquabec](aquabec.md): written in 1984 and spread to clubs across Quebec through the
  provincial federation.
- [WinSwim](winswim.md): moves entries and results between teams and programs as
  [SDIF](../file-formats/sdif.md).
- [Swimcloud Meet](swimcloud-meet.md) and [TeamUnify TouchPad](teamunify-touchpad.md):
  exchange files with the [SST timing software](../timing/sst-timing-software.md) through a
  shared folder.
- [EasyWk](easywk.md), [Swimify](swimify.md) and [CPS-Schwimm](cps-schwimm.md): European
  programs that the Swimrankings wiki lists as supporting
  [Lenex](../file-formats/lenex.md).

## See also

- [Team management](../team-management/index.md): the club side that entries and
  rosters come from
- [Live results and rankings](../live-results/index.md): where a meet's results are published
- [File formats](../file-formats/index.md): the files that carry entries and results
- [Software](../index.md): the other programs a meet runs on

See everything tagged [Meet management](../../categories.md).

## References

[^f912]: [Colorado Time Systems, Dolphin User Guide (F912)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Dolphin/Dolphinextendedinstructions-F912.pdf) (Rev. 202412), which names the three meet-management programs.

---
title: ALGE cable 033
description: >-
  Cable 033 is the ALGE-Timing Amphenol cable that links display boards to each other and to an
  NGAZ/R power supply, carrying both supply and data.
tags:
  - Equipment
  - Scoring
  - Swimming
infoboxTitle: Cable 033
infobox:
  - label: Manufacturer
    value: '[ALGE-Timing](vendors/alge-timing.md)'
  - label: Part number
    value: '`033-01`, `033-10` (`033-xx`)'
  - label: Type
    value: 'Display-board link cable'
  - label: Connection
    value: 'Amphenol sockets on GAZ4, GAZc and GAZ5 boards'
---

<!--
Research notes, ALGE cable 033. Surfaced 2026-11-22 while building out
equipment/common/scoreboard/alge-gaz4.md.

What the held documents say:
  - GAZ4 manual E-98-06-22 (sources/vendors/alge-timing/scoreboards-displays/), section 2: two
    GAZ4 boards (for example bib/rank beside time) are joined with cable 033-01, and then only one
    needs a PP4, PS4 or battery; a PS4 can feed up to two boards this way. Section 9: a ranking
    board uses several 033-01 cables between boards and 033-10 cables. Section 7.6: each board has
    two Amphenol sockets wired 1 +11-20 V, 2 0 V, 3 unused, E data, so the cable carries supply
    and data. Verified.
  - GAZ4 manual E100930 and GAZ5 manual E120911: same use, drawn as "cable 033-XX". Verified.
  - ALGE Swimming System installation guide, Timer S4, E-97-03-24, page 9: each ranking board
    connects to the NGAZ/R with "cable 033 (Amphenol cable)". Verified.
  - ALGE numbering elsewhere on the wiki suggests the suffix is a length in metres (010-10 is a
    10 m cable); for 033 this is inferred, not stated.
Not established: lengths, wire count, connector part number.

Sources:
  - ALGE, Display Board GAZ4 manual, Version E-98-06-22 (https://www.splitsecond.com.au/manuals/gaz4-be.pdf)
  - ALGE-Timing, GAZ5 manual, Version E120911 (https://alge-timing.com/downloads/userGuides/GAZ5-BE.pdf)
  - ALGE, Swimming System installation guide, Timer S4, Version E-97-03-24 (https://alge-timing.com/downloads/userGuides/s4-schwimmen-installation-be.pdf)
-->

This article is a stub. `033-01` and `033-10` are [ALGE-Timing](../../../vendors/alge-timing.md)
Amphenol cables that join [GAZ4](../scoreboard/alge-gaz4.md) display boards to each other
or to an [NGAZ/R](alge-ngaz-r.md) supply, carrying power and data on the same lead.

See the [timers overview](../../swimming/timers/index.md) for the shared background that applies to every timing
console.

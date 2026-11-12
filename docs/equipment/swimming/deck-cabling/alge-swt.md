---
title: ALGE SWT swim terminal
description: >-
  The SWT is the ALGE-Timing lane terminal of the SWIM 2000 system, chained on an RS485 bus to the
  SWC controller, with sockets for a touchpad, three push buttons and a relay sensor.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: SWT
infobox:
  - label: Manufacturer
    value: '[ALGE-Timing](vendors/alge-timing.md)'
  - label: Part number
    value: '`SWT`; terminator `SWT-END`'
  - label: Type
    value: 'Swim lane terminal'
  - label: Connection
    value: 'RS485 bus to the [SWC](equipment/swimming/timers/alge-swc.md); `200-xx` cable terminal to terminal'
  - label: Power
    value: 'From the SWC'
  - label: Status
    value: 'Discontinued'
---

<!--
Research notes, ALGE SWT swim terminal (first generation). Surfaced 2026-11-11 while building out
equipment/swimming/timers/alge-swim-2000.md.

What the sources say:
  - ALGE SWIM2000 brochure (2002, Split Second copy; held at sources/vendors/alge-timing/
    catalogs-brochures/alge-swim2000-brochure-2002): a single cable links each terminal to the next, an
    SWT-END on the last, all units identical and unnumbered; each has sockets for one touchpad, up
    to three 023-02 push buttons and one SO 2 block or SWR 2 pad. Verified.
  - ALGE SWIM 2000 component and technical pages (alge-timing.com, Wayback captures of January
    2001): one SWT per lane per end; two buses on the SWC with up to 10 SWT each; powered from the
    SWC; synchronized to the SWC's 1/10,000 s clock; 5 x 2 banana sockets plus RS485 in and out.
    Verified. The ten-per-bus limit conflicts with the twelve-lane figure elsewhere.
  - SWIM2000 manual E-020222 and German edition D-020222 (held at sources/vendors/alge-timing/
    timers-consoles/): the timing software asks which end of the chain is lane 1, since the
    terminals carry no number; the German edition calls the SWT completely waterproof and lists
    bus in, bus out, touchpad, three hand buttons and a false-start socket. The manual's
    schematics label the terminal-to-terminal cable 200-xx. Verified.
  - Lineage: the 2013 ALGE swimming catalogue shows the SWT2 with the same five inputs; the SWT3 is
    current, and ALGE warns against mixing the SWT3 with the SWT or SWT2 (see alge-swt3.md). That
    the SWT2 directly followed this SWT is inferred from the names.
Not established: dimensions, weight, connector type on the 2002 units, dates of the SWT2 change.

Sources:
  - ALGE, SWIM2000 brochure (https://www.splitsecond.com.au/brochures/swim2000-pe.pdf)
  - ALGE-Timing, Components of the SWIM 2000 System (https://web.archive.org/web/20010126234700/http://www.alge-timing.com/alge/swim2000-03-e.htm)
  - ALGE-Timing, SWIM 2000 technical data (https://web.archive.org/web/20010127003600/http://www.alge-timing.com/alge/swim2000-05-e.htm)
  - ALGE-Timing, SWIM2000 Manual, Version E-020222 (https://web.archive.org/web/20030323112316/http://alge-timing.com/alge/download/manual/swim2000/swim2000-be.pdf)
  - ALGE-Timing, SWIM2000 Bedienungsanleitung, Version D-020222 (https://web.archive.org/web/20041014223020/http://www.alge-timing.com/alge/download/manual/swim2000/swim2000-bd.pdf)
  - ALGE-Timing, The Specialist for Swimming, catalogue V1.113, 2013 (https://www.freker.se/dokument/ALGE%20Swimming-KE-1.PDF)
-->

This article is a stub. The `SWT` is the [ALGE-Timing](../../../vendors/alge-timing.md) lane
terminal of the [SWIM 2000](../timers/alge-swim-2000.md) system, chained on an RS485 bus to the
[SWC](../timers/alge-swc.md) controller with an `SWT-END` on the last unit, and the forerunner of
the [SWT3](alge-swt3.md).

See the [deck-cabling overview](index.md) for the shared background on lane wiring.

---
title: Hy-Tek Workout Manager
description: >-
  Workout Manager is the training-side Hy-Tek program, which writes an interval session
  that a Colorado Time Systems or Daktronics pace clock can play back.
tags:
  - Software
  - Timing
  - Swimming
---

<!--
Research notes, Hy-Tek Workout Manager.

Surfaced while building out Meet Manager. It already has a section on upc-c.md but no page.

Announced under the fuller name "Swim Workout Manager" in November 1989
(sources/periodicals/swimming-world/198911.txt:1037-1049), where the pitch is tracking
swimmers' workouts and making physiology methods such as anaerobic threshold, cruise
interval and maxVO2 easier to apply; reported shipping in September 1990
(swimming-world/199009.txt:888-890). The Swim prefix was dropped, as it was for Swim
Business Manager announced in the same column. It has its own entry in the August 1991
computer survey (swimming-world/199108.txt:3053-3061).

What it actually computed, from the November 1990 feature, which is the only description of
the program in use. Bob Mroz describes it keeping a running time as the coach builds a
session on screen so the length is visible while it is being written, keeping a running
total of yardage, working out percentages of energy level, and projecting slower sets so
that a whole lane finishes together while each swimmer works at the same effort
(swimming-technique/199011.txt:757).

The Polar connection, which belongs here and on the vendor page. The same feature reports
Hy-Tek working with Polar on the first heart monitor able to read a swimmer's rate while
actually stroking, rather than only after touching the wall, and linking it to software that
stored and analysed the data and could pull out at-rest and recovery figures and expand part
of a session for closer examination (swimming-technique/199011.txt:746). It credits a Dr
Robert Trafene of Queensland University with the earlier in-pool reading; that is almost
certainly Robert Treffene, an Australian swimming physiologist, and the spelling should be
checked before the name is used in body text.

Why this wiki cares: CTS pace clock equipment takes a workout from it. F901 documents the
download into the pace clock controller and defers entirely to Hy-Tek's own instructions for
the procedure, and it records a vocabulary difference worth knowing, that what CTS calls a
repeating set Workout Manager calls a circuit set. The Daktronics OmniSport 2000 accepts a
downloaded workout over its results port, capped at fifty steps per lane across ten lanes.

The attribution problem, now resolved. Earlier passes recorded a conflict: CTS F901 and the
Daktronics aquatics brochure credit Workout Manager with the pace-clock export, while the
Daktronics PC-2001 manual and a Hy-Tek guide credit TEAM MANAGER. Both are right, for
different eras, and two sources settle it. The PC-2001 manual (ED-13737:1169) says the clock
interfaces with "Hy-Tek TEAM MANAGER with WORKOUT MANAGER software" and that "The TEAM
MANAGER must have the Workout Manager Basic option configured", with the workout reached
from Team Manager's own menu at Workouts > Pace Clock > Daktronics. Hy-Tek's Team Manager 8
guide agrees from the other side, stating that the Pace Clock feature is a product option
for TM. So Workout Manager began as a standalone program in the DOS era, as the 1989 and
1990 press describes it, and survives as a licensed module inside Team Manager. Do not
reintroduce the conflict.

Hy-Tek's own Team Manager guide gives the current reach: the export targets CTS 4, CTS 5 and
CTS 6 consoles and the Daktronics OmniSport 2000, OmniSport 6000 and PC 2000, over a serial
port, except for the OmniSport 6000 which takes the workout on a floppy disk.

Still to research: whether the module is still sold, since Active's current product list
names neither it nor Team Manager's options; the physiological model behind the anaerobic
threshold, cruise interval and maxVO2 settings advertised from 1986; whether the Polar
monitor was ever a Hy-Tek product or only a collaboration; and the difference between the
Workout Manager Basic option the Daktronics manual names and any fuller tier.
-->

This article is a stub. Hy-Tek Workout Manager is the training-side member of the Hy-Tek
family, announced in 1989 as a program of its own, which builds an interval session and
sends it to a pace clock or a timing console rather than to a meet.

It is no longer separate: Hy-Tek now sells the pace-clock export as a licensed option within
[Team Manager](hy-tek-team-manager.md), which is why some documents credit the workout
download to one product and some to the other. See the
[pace clock controller](../equipment/common/pace-clock/upc-c.md) for that download from the
clock's side, and the [software overview](index.md) for what this section covers.

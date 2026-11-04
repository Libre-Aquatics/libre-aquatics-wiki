---
title: Generic network file sharing
description: >-
  Generic network file sharing is the Hy-Tek Meet Manager timing interface that exchanges a
  generic.sch schedule and race result files through a shared folder.
tags:
  - Software
  - Timing
  - Swimming
---

<!--
Research notes, generic network file sharing. Surfaced 2026-11-03 while writing
sst-timing-software.md.

Source: SST Operation Manual, current edition, pp. 20-22 and 60. In Meet Manager the option is
listed under the Timing Console Interface as Generic Network File Sharing For: IST / Take Your
Mark / ALGE Timy / SST Timing, and the Run menu then shows Timer (GNET). Download Events to GNET
writes generic.sch; Select Data Set Stored from GNET sets the folder and dataset. The timing
program writes a results file per race to that folder and Get Times imports them. Splits errors
arise when the far-pad setting differs between generic.sch and the timing program (knowledge
base). take-your-mark.md also records generic.sch.
SST's own Event Manager writes .SCH schedules as well.
Active Network's article on the interface (read 2026-11-03) names IST, Take Your Mark, ALGE Timy and
SST Timing, plus other consoles set up for it. Each race is saved as a file; the two computers are
networked with shared folders; each meet or session is a numbered Data Set; Update Data Location
sets the folder. Get Times (F3) matches event, heat and round, and Race # (F2) finds a file by race
number, starting at 1 in each Data Set. It oddly also mentions a serial cable from the console.
The file's layout and the results file format are not documented in any source read. Sample files
would allow a format page.
-->

This article is a stub. Generic network file sharing is a timing interface in
[Hy-Tek Meet Manager](hy-tek-meet-manager.md) that writes the event schedule to a `generic.sch`
file in a shared folder, where a timing program such as
[SST](sst-timing-software.md) reads it and leaves its results.

See the [software overview](index.md) for the other interchange methods this wiki covers.

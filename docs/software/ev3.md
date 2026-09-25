---
title: EV3 file format
schemaType: none
description: >-
  EV3 is the newer of Hy-Tek's two event-list formats, carrying a meet's schedule to
  Team Manager with the sanction, altitude and entry limits HYV could not hold.
tags:
  - Software
  - Meet management
  - Reference
---

<!--
Research notes, EV3.

Created because the HY3 and HYV pages both name it and CLAUDE.md requires a page for
anything an article names. It is the last of the four Hy-Tek extensions to get one.

What Hy-Tek states, which is the whole of the solid ground here
(hytek.active.com/user_guides_html/swmm8/exporteventfortm.htm, read September 2026): the
event export is always a zip containing both the older HYV and the newer EV3, and the
cutover is by program version, HYV for Team Manager before 4.0G and EV3 for 4.0G and later,
exactly as CL2 and HY3 are paired and split. The company lists what EV3 adds over HYV: the
sanction number, the altitude, the entry eligibility date, the low age for an open event,
maximum entries per athlete per meet and per session, the session number for each event,
the course for each session, and division codes and names when the meet is set up as
divisions by event.

That list is the useful part, because it dates the format by what it needed to carry.
Sanction numbers, altitude and per-session entry limits are administrative requirements
that grew up around championship meets; HYV predates them.

Hy-Tek's warning on the same page, worth repeating wherever this export is described: it is
built to send events to Team Manager and not to move events between Meet Manager databases.
Save As is the route for that.

Not verified here, unlike HY3. A checksum algorithm for EV3 appears in the TypeScript
library swimlib, described as summing every character code, computing a value from it and
emitting a four-digit code with the digits rearranged. That would explain a trailing code
that Walsh was asked about in 2018 and could not account for. No EV3 sample was obtained on
this pass, so unlike the HY3 checksum, which was reproduced against real files, this one is
unconfirmed. Do not present it as established.

The HYV-or-EV3 question is settled and should not be reopened. Volunteers argued about
which was newer for years, with DeLano, Walsh and Bob Goudreau all taking positions. The
vendor's own guide says plainly that EV3 is the newer, which agrees with Goudreau.

Still to research: the record layout, which nothing read gives; whether the checksum
description in swimlib holds against a real file; whether EV3 is fixed-width like HY3 or
delimited like HYV, which nothing read states and which should not be guessed; and whether
Hy-Tek intends to retire HYV.
-->

This article is a stub. EV3 is the newer of the two event-list formats Hy-Tek ships in
every event export from [Meet Manager](hy-tek-meet-manager.md), paired with the older
[HYV](hyv.md) and read in preference by [Team Manager](hy-tek-team-manager.md) releases
from 4.0G onward.

It exists because HYV could not carry what championship administration came to require: a
sanction number, the pool altitude, an entry eligibility date, limits on how many events an
athlete may enter per meet and per session, and the session and course each event belongs
to; see the [software overview](index.md) for what this section covers.

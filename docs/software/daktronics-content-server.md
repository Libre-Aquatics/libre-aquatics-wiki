---
title: Daktronics Content Server
description: >-
  Daktronics Content Server (DCS) is Daktronics software that takes data feeds, including
  scoring files from aquatics programs, and passes them to its display players.
tags:
  - Software
  - Scoring
---

<!--
Research notes, Daktronics Content Server (DCS). Surfaced 2026-11-10 while building out
omnisport-pro-synchro.md. No Daktronics manual for DCS is held; everything below comes from
Daktronics support articles found through search, and only KB 000004257 was fetched and read.

Sources:
- Daktronics KB 000004257 (also under DD4120777), "OmniSport Pro software: How to Integrate Swiss
  Timing Diving and Synchro Swim with a Video Display" (fetched 2026-11-10): install DCS 4.2 or
  later, ideally on the computer running the Swiss Timing diving and synchro software; create a
  File-type input port pointing at the .txt or .xml standings file, encoding System, Key-Value
  Mode on, template SwissTiming-Diving.itf or SwissTiming-Synchronised Swimming.itf (fetched from
  the Dakfiles ITF site into the Input Templates folder under Daktronics Common if missing); add a
  matching output port on an open network port; join them on the Data Flow tab; then add the data
  to Content Studio, with .DID and .DSRC files for DMP-8000 players or .ITF files for DMP-7000
  players. Verified (read).
- Daktronics KB 000020755, DMP-8000 File RTD with Key-Value Mode in DCS (search summary only):
  key-value mode needs DCS 4.2.2.0 or later. Note the version differs from the 4.2 in KB
  000004257; unverified.
- Daktronics KB DD3319826, DMP-8000 File RTD in text mode in DCS (search summary only).
- Daktronics quick guide on standard RTD inputs (search summary only, seen on manuals.plus): .itf
  for DMP-7000 and Venus 7000 players, .did for the Show Control database, .dsrc for DMP-8000
  players. Unverified.
Still to research: how DCS relates to Show Control and Venus Control Suite, when it
first shipped, its version history, and whether it reads OmniSport real-time data directly.
-->

This article is a stub. The Daktronics Content Server (DCS) is [Daktronics](../vendors/daktronics.md)
software that reads data inputs, such as the standings files written by Swiss Timing's diving
and artistic swimming scoring programs, and passes them through input templates to Daktronics
display players.

Daktronics names it as the route for putting those results on a video display after the
discontinuation of [OmniSport Pro Synchro](omnisport-pro-synchro.md); see also
[Venus](venus.md), the company's display-control software.

---
title: DIV Scoring Manager
description: >-
  DIV Scoring Manager is the Swiss Timing diving competition program, written by Integrated
  Sports Systems, that runs events, takes judges' scores and drives scoreboards.
tags:
  - Software
  - Diving
  - Scoring
---

<!--
Research notes, DIV Scoring Manager.

Surfaced while building out calypso.md.

Held: sources/vendors/swiss-timing/software/swiss-timing-dv-scoring-manager-3480.513.02
("Aquatics - DIV Scoring Manager User's Manual", 3480.513.02, v1.9, January 2022) and
swiss-timing-dv-scoring-manager-quickstart-3480.514 (v1.1, July 2014). Not yet read in full.
Facts so far:
  - Also written "DV Scoring Manager" (installation folder "Swiss Timing Ltd.\DV Scoring
    Manager"); the software comes from Integrated Sports Systems (ISS) Inc. for Swiss Timing.
  - Windows; a competition setup wizard, timetable, participants, dive lists; Run Event is the
    module that scores an event (up to four events open at once, more with extra instances).
  - Judges' input from Omega MTE keypads (wired or wireless) or from ISS i-Judge consoles on a
    network.
  - Run Event drives the Omega Calypso scoreboard over a serial port with the UNT4 protocol, with
    layouts for 5 judges, 7 judges, 7-judge synchro, 9-judge synchro and 11-judge synchro.
  - Results saved to XML in the FINA format; reports, letterhead and point systems.
  - Companion "Display Results" (3480.516.02, v11.0, January 2015, ISS for Swiss Timing) shows
    events on projectors, TVs or LED walls; it names "Omega DV Scoring Manager" and "Omega SY
    Scoring Manager" (artistic swimming). An "AS Scoring Manager" is mentioned on the manual's
    title page.
  - The tracker's DV Scoring Manager quick start row lists Omega MTE keypads.

Still to research: read both manuals in full; versions; the SY/AS Scoring Manager; whether ISS
sells the same program under its own name; Omega MTE keypads (no page yet).
-->

This article is a stub. DIV Scoring Manager is a Windows program for running diving competitions,
written by Integrated Sports Systems for Swiss Timing, which takes judges' scores from keypads or
networked consoles, calculates results, and drives a [Calypso](../equipment/common/scoreboard/calypso.md)
scoreboard over a serial link.

See the [software overview](index.md) for the other programs the wiki covers.

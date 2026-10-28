---
title: Run Event
description: >-
  Run Event is the Integrated Sports Systems program that scores a diving event on the scoring
  table, used with ISS MMS Diving and Swiss Timing's DIV Scoring Manager.
tags:
  - Software
  - Diving
  - Scoring
---

<!--
Research notes, Run Event. Named throughout div-scoring-manager.md; stubbed 2026-10-28 while
building out display-results.md.

  - Swiss Timing, DIV Scoring Manager manual (3480.513.02, v1.9, January 2022, held): the event
    program, runevent32.exe, usually installed in c:\_dive\RunEvent; takes EVT event files from
    the manager and returns results and start-list EVT files; runs on a primary and a backup
    computer; up to four events open at once; makes cuts with carry-over choices; reads Omega MTE
    keypads (19,200 baud, cabled through the INT 131 or wireless by XBee, second port for split
    panels) and ISS i-Judge tablets (TCP port 8963); drives a Calypso scoreboard over serial with
    UNT4; writes the standings file Display Results reads and Standing.xml for custom boards. A
    stand-alone Run Event (Run_Event_452.msi, from an integratedsports.net "Omega" path) exists.
    Version history: 1.1 (July 2014) gave Run Event an announcer view; 1.7 (November 2019) put
    the ISS SCB controller in it.
  - Display Results manual (3480.516.02, v11.0, January 2015, held): Run Event required for
    diving; usually in c:\_dive\run event; its Function menu copies the Standing.txt location;
    a stand-alone version is available; Calypso connects from Run Event directly.
  - integratedsports.net/diving.asp and new_diving.asp (read 2026-10-28): "Diving Run Event"
    version 5.07, 2 March 2026; part of the ISS MMS suite with Display Results and the dive sheet
    generators; release note for Run Event 5.01 adds a "Gender Inclusive" display on the
    scoreboard interface; ISS MMS 4.43 added XML scoreboard integration with Run Event.
Still to research: first release, the stand-alone version's licensing, and whether it is used
outside Canada and Swiss Timing installations.
-->

This article is a stub. Run Event is the Integrated Sports Systems program that runs a diving
event at the scoring table, taking event files from [DIV Scoring Manager](div-scoring-manager.md)
or ISS's own meet program, collecting judges' awards from keypads or [i-Judge](i-judge.md)
tablets, and feeding [Display Results](display-results.md) and the scoreboard; ISS listed version
5.07 in March 2026.

See the [software overview](index.md) for the other programs the wiki covers.

---
title: DIV Scoring Manager
description: >-
  DIV Scoring Manager is the Swiss Timing diving competition program, written by Integrated
  Sports Systems, that sets up meets, runs events from judges' keypads or tablets, and feeds
  scoreboards, video displays and results files.
updated: 2026-10-07
tags:
  - Software
  - Diving
  - Scoring
---

<!--
Research notes, DIV Scoring Manager. Stub created October 2026 while building out calypso.md;
built out the same month.

Held and read in full (sources/vendors/swiss-timing/):
  - software/swiss-timing-dv-scoring-manager-3480.513.02: "Aquatics - DIV Scoring Manager User's
    Manual", 3480.513.02, v1.9, January 2022, 41 pp. The title page also carries "AS Scoring
    Manager Aquatics User Manual", left over from the artistic swimming manual's template.
    Version history: 1.0 24 April 2014; 1.1 July 2014 (cabled keypad support; Run Event gains an
    announcer view); 1.2 January 2015 (two-port wired keypads for the 50 m end); 1.3 April 2015 (team
    event); 1.4 November 2016 (penalties in export files); 1.5 March 2017 (international
    characters to the MTE fixed); 1.6 October 2018 (team event); 1.7 November 2019 (ISS SCB
    Controller in Run Event, richer XML for custom scoreboards); 1.8 June 2020 (team event in the
    SCB interface, Excel reports, more import/export); 1.9 January 2022 (Excel reporting, i-Judge).
    Installs to "Swiss Timing Ltd.\DV Scoring Manager" (Windows XP to 8 paths given). Modules:
    the manager itself (checklist with calendar, competition title, timetable, competitors and
    dive lists, financial, points, medals, judges, events/EVT generation, reports, settings),
    Display Results (free download from ISS), the video scoreboard interface (ISS_SCB_Diving),
    i-Judge consoles, a stand-alone Run Event (Run_Event_452.msi from an integratedsports.net
    "Omega" path). Timetable fields: code, live flag, day, start, sex (M, F, X), group (A-F, Open,
    Other), board (1 m, 3 m, platform), type (prelims, semi A/B, semis, finals), rounds, judges,
    cuts, after round, cut to. Typical formats given: cup (11 dives, cut after 6 to 12, prelims,
    semi A, semi B, finals), Olympic (11 dives, cut after 6 to 18; prelim list repeated in
    finals), junior (6 dives, no cuts). Dive sheets: automatic DD lookup with override; electronic
    dive sheets from the Dive Sheet Generators dragged in; exhibition, points exception, visitor
    (does not displace locals) and "no dive list" flags; synchro A/B lists; copy/paste between
    partners. Rules files per group (DD totals of limited dives, how many dive groups must be
    covered, total dives); dive groups front, back, reverse, inward, twist, armstand; special
    Canadian junior-qualifying and senior rules checked in the rules report; E-group fixed DD and
    Tier II fixed DD options (not both). Fees with late fees; up to four points systems, up to
    twelve places scored (example 3-2-1 medals table). Judges: referees, judges, alternates, two
    panels; Excel import/export of entries and judges. EVT files (named like m3op.evt: sex,
    board incl. 1/3/10 m synchro, group, phase) copied to primary and backup computers; results
    and start-list EVT files imported back after each phase; merge events (the one with most
    dives first) though Run Event can open up to four events at once. Reports to PDF, RTF, Excel,
    HTML; a custom-report text editor; letterhead builder (three, two or no graphics; set image
    ratios; 720 x 50 footer); referee signature line; event duration estimate (about 35 s per dive
    suggested). Computer layouts: standalone with no network (EVT files on floppy A:); a single scoring
    table with primary and backup PCs; or two such tables running two events together. Results booklet with bookmarks (one per session). Safety
    backups every 15 minutes (meetinfo.mdsdpc with timestamp). XML results "following the FINA
    standard", described as used by the FINA Technical Diving Committee. Scoreboard: a main.txt
    live file with a Controller window (ISS SCB) for video-board software; Standing.xml rewritten
    on every accepted score (the manual's sample is from the 2019 FINA Coupe Canada Cup, women's
    3 m preliminary, with seven judges' scores). Run Event (runevent32.exe): up to four events open;
    cuts with carry-over options; Omega MTE keypads at 19,200 baud 8N1, wireless via an XBee
    connector or cabled through Swiss Timing's INT 131 converter, with a second port used when the
    panel is split across the pool; ISS i-Judge on Windows computers or tablets over the network (TCP
    port 8963), up to one console per judge, showing power level; Omega Calypso scoreboard over
    serial with UNT4, configurations for 5, 7, 7-synchro, 9-synchro and 11-synchro panels.
    Competition workflow checklists; mixed synchro added after FINA introduced it in February
    2015; team event (one woman and one man) set up like synchro. Licence note: Canadian clubs
    must export sanctioned meets' results to an address at rezman.net.
  - software/swiss-timing-dv-scoring-manager-quickstart-3480.514: "DV Scoring Manager Quick
    Start", v1.1, July 2014, English and French; screenshot walk-through; MTE keypads wired or
    wireless.
  - scoreboards-displays/swiss-timing-dv-sy-software-user-manual-3480.516.02: in fact "Display
    Results by Integrated Sports Systems (ISS) Inc. Enhanced for Swiss Timing Ltd.", v11.0,
    January 2015. Requires ISS MMS (diving or synchro), "Omega DV Scoring Manager" or "Omega SY
    Scoring Manager", Run Event; reads the standings file over a shared folder; projector, TV or
    LED wall; spectator, commentator (12 divers), finals (6 divers), number board and countdown
    screens; FINA 12 x 32 character scoreboard for synchro; most functions only in the paid
    version; signed by Michael Morris, ISS.
  - software/swiss-timing-swa-scoring-manager-3480.512.02: SWA Scoring Manager (artistic
    swimming), v2.8, February 2026; same first date (24 April 2014) and the same ISS
    architecture; Coach Card, i-Judge, Display Results; World Aquatics 2022-2025 and 2026 rules.
    See swa-scoring-manager.md.

Web (October 2026):
  - integratedsports.net: ISS MMS Diving v5.21 (February 2026), i-Judge Diving, Diving Run Event,
    Dive Sheet Generator for coaches and divers in Canada; ISS MMS Artistic Swimming, Coach Card;
    lists Dexstar Communications Inc. as official distributor for Swiss Timing; Canadian national
    events among its users.
  - USA Artistic Swimming news, 31 August 2021: renewed partnership with ISS; Mike Morris named
    chief programmer and director of ISS. https://www.usaartisticswim.org/news/features/2021/august/31/usaas-renews-partnership-with-iss-scoring
  - Diving Plongeon Canada meet package, 2026 Saskatchewan provincials: "We will be using the
    Rezman scoring system", with dive sheets prepared in the Dive Sheet Generator at rezman.net.
    https://diving.ca/wp-content/uploads/2025/12/SK-Provincials-2026-MeetPackage.pdf
    Rezman is evidently tied to ISS's Canadian diving software (the DIV licence names a
    rezman.net address), but no source states the relationship; not asserted in the body.

Not found: a Swiss Timing product page; prices for the Swiss Timing edition; which
international events used it; the relationship between the Swiss Timing version numbers (1.x)
and ISS MMS Diving's (5.x).
-->

DIV Scoring Manager is a Windows program for running diving competitions, sold by
[Swiss Timing](../vendors/swiss-timing.md) and written for it by
[Integrated Sports Systems](../vendors/integrated-sports-systems.md) (ISS).[^manual][^iss] It covers
a meet from entries and dive sheets to final results. A separate scoring program, Run Event,
takes judges' awards from Omega keypads or networked tablets, and the results go to
scoreboards, video displays, reports and an XML file in the FINA format.[^manual] Its first version
is dated April 2014, and the current manual, version 1.9, January 2022.[^manual]

## Naming and authorship

This section sets out the program's names and its relationship to ISS's own software.

Swiss Timing's documents call the program both DV and DIV Scoring Manager. The 2014 quick start
and the installation folder use "DV"; the 2022 manual's title uses "DIV".[^quick][^manual] The
companion display program refers to it in 2015 as Omega DV Scoring Manager, beside an Omega SY
Scoring Manager for synchronised swimming.[^display] Swiss Timing's current artistic swimming program
is [SWA Scoring Manager](swa-scoring-manager.md); the two share a first release date of
24 April 2014.[^manual][^swa]

The program is ISS's diving meet management software in a Swiss Timing edition. Its manual calls
the suite ISS MMS in several places, sends users to ISS's website for the companion programs, and
gives an ISS address for support.[^manual] ISS sells its own ISS MMS Diving, at version 5.21 in
February 2026, and lists a Swiss Timing distributor on its site.[^iss] How the Swiss Timing
version numbers relate to ISS's own is not documented.

## Competition setup

This section covers what the program manages before an event is run.

A setup wizard records the competition's dates, language and country, the age groups and boards
in use, and the computer arrangement.[^manual] The country chooses the dive sheet template, and a
degree-of-difficulty (DD) file supplies each dive's name and value, with alternative names for
other languages.[^manual]

The timetable lists every event by day, sex, group, board, phase, number of rounds, number of
judges, and whether and when cuts are made. Swiss Timing gives three typical layouts:[^manual]

| Layout | Dives | Cuts |
|---|---|---|
| Cup | 11 | After 6 dives to 12, through preliminaries, two semi-finals and a final |
| Olympic | 11 | After 6 dives to 18, through preliminaries, semi-final and final, with the preliminary list repeated |
| Junior | 6 | None |

Divers and their dive lists can be typed in, imported from Excel, or dragged in as electronic dive
sheets prepared by clubs with ISS's dive sheet generators.[^manual] The program looks up each dive's
DD automatically and checks the list against a rules file. A rules file can limit the DD total of
certain dives and require dives from a given number of the six dive groups. There are also options
for Canadian qualifying rules and for fixed DDs in the youngest groups.[^manual] A diver can be
entered as an exhibition entry, outside the points, or as a visitor who does not displace local
divers from points or medals.[^manual]

The program also keeps entry fees, up to four points systems and medal tables, and assigns
referees and judging panels to each phase.[^manual]

## Running an event

This section covers Run Event and the judges' input devices.

For each event phase the manager generates an event (EVT) file. That file is copied to a primary
and a backup scoring computer, each running Run Event, and returned to the manager after the phase
for results and the next start list.[^manual] The program supports a single computer with no
network, one scoring table, or two tables running two events at once.[^manual] Run Event can hold
up to four events open together, makes cuts with a choice of whether scores carry over, and handles
late entries and scratches.[^manual]

Judges enter awards on one of two kinds of device:[^manual][^quick]

- [Omega MTE keypads](../equipment/diving/omega-mte-keypads.md), cabled through a Swiss Timing converter or linked by a wireless XBee
  connector, on a serial port at 19,200 baud. A second port is used when the panel is split
  across the pool.
- [i-Judge](i-judge.md), ISS's scoring program, on Windows computers or tablets connected to the
  Run Event computer over a network, one per judge.

The operator accepts the awards with Enter, and Run Event moves to the next diver.[^manual][^quick]
Team events (one woman and one man) are set up like synchronised events, and the mixed synchronised
event was added after FINA introduced it in February 2015.[^manual]

## Scoreboards and displays

This section lists the program's display outputs.

| Output | What it does |
|---|---|
| [Calypso](../equipment/common/scoreboard/calypso.md) scoreboard | Driven from Run Event over a serial port using the UNT4 protocol, with layouts for 5- and 7-judge panels and for synchronised panels of 7, 9 or 11 judges[^manual] |
| Video boards | A live text file, controlled from a scoreboard controller window, for the board's own software[^manual] |
| Custom scoreboards | An XML standings file rewritten each time scores are accepted[^manual] |
| [Display Results](display-results.md) | ISS's program for projectors, televisions, LED walls and live Internet results, reading the standings over a network[^display] |

Display Results offers a spectator leader board, a television commentator screen showing twelve
divers, a six-diver finals screen, a number board and a countdown clock. ISS gives it away free, but
most of its functions need the paid version.[^display]

## Results and data exchange

This section covers reports and file exports.

Reports cover start lists, announcer and recorder sheets, summary and detailed results, rules
checks, fees, points and medals. They can be saved as PDF, RTF, HTML or Excel, and a results booklet
with bookmarks can be built for the whole meet.[^manual] A letterhead builder adds sponsor graphics,
and each report can carry a line for the referee's signature.[^manual]

Closing a detailed results report writes an XML file, which Swiss Timing describes as following the
FINA standard and as used by FINA's technical diving committee.[^manual] Whole competitions, dive
lists, entries and judges can be exported and imported, and Swiss Timing advises exporting the
results to the national federation after the meet.[^manual] The licence requires Canadian clubs to
send the results of sanctioned meets to an address at rezman.net.[^manual] A 2026 Diving Plongeon
Canada meet package names a "Rezman scoring system" and sends clubs to a dive sheet generator on
that site.[^dpc]

## Related programs

This section compares the program with its artistic swimming sister.

SWA Scoring Manager applies the same structure to artistic swimming: a competition manager with a
timetable, registration, judges and draws, scoring through i-Judge or Omega keypads, and output to
Display Results.[^swa] Where DIV Scoring Manager's last listed change is in 2022, SWA Scoring
Manager has been revised through February 2026 to follow World Aquatics' rule changes for that
sport.[^manual][^swa]

## See also

- [SWA Scoring Manager](swa-scoring-manager.md): the artistic swimming program built the same way
- [Display Results](display-results.md) and [i-Judge](i-judge.md): ISS's companion programs
- [Calypso](../equipment/common/scoreboard/calypso.md): the Swiss Timing scoreboard it drives
- [Gen7 wired judging](../equipment/diving/gen7-wired-judging.md): Colorado Time Systems' diving judging system
- [Diving equipment](../equipment/diving/index.md): the diving equipment overview
- [Software](index.md): the software overview
- [Swiss Timing](../vendors/swiss-timing.md) and [Integrated Sports Systems](../vendors/integrated-sports-systems.md): the vendor and the developer

## References

[^manual]: Swiss Timing, Aquatics DIV Scoring Manager User's Manual (3480.513.02, version 1.9, January 2022).
[^quick]: Swiss Timing, DV Scoring Manager Quick Start (3480.514, version 1.1, July 2014).
[^display]: Integrated Sports Systems, Display Results, enhanced for Swiss Timing (3480.516.02, version 11.0, January 2015).
[^swa]: Swiss Timing, Aquatics SWA Scoring Manager User's Manual (3480.512.02, version 2.8, February 2026).
[^iss]: [Integrated Sports Systems](https://www.integratedsports.net/) (ISS MMS Diving 5.21; Swiss Timing distributor; as of October 2026).
[^dpc]: [Saskatoon Diving Club, 2026 SK Provincial Championships meet package](https://diving.ca/wp-content/uploads/2025/12/SK-Provincials-2026-MeetPackage.pdf) (Diving Plongeon Canada).

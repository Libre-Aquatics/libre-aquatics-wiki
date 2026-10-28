---
title: Display Results
description: >-
  Display Results is the Integrated Sports Systems program that shows diving and artistic
  swimming events in progress on projectors, televisions and scoreboards, and posts them to live
  Internet results pages.
updated: 2026-10-28
tags:
  - Software
  - Diving
  - Artistic swimming
  - Scoring
---

<!--
Research notes, Display Results. Stub created while building out div-scoring-manager.md; built
out 2026-10-28.

Held and read in full: sources/vendors/swiss-timing/scoreboards-displays/
swiss-timing-dv-sy-software-user-manual-3480.516.02 (the filename suggests a DV/SY manual; page
one reads "Display Results by Integrated Sports Systems (ISS) Inc. Enhanced for Swiss Timing
Ltd.", 3480.516.02, version 11.0, January 2015, 8 pp., closing signature of ISS's Michael
Morris). All seven content pages rendered with PyMuPDF, because the screens are images.
  - Page 1 lists its uses as live event display on projectors, televisions and LED video boards,
    sponsor graphics, a countdown, the current dive and diver, and the FINA synchro board.
  - Needs one of the scoring programs (ISS's own MMS for diving or synchro, or the Omega-branded
    DV and SY managers), plus Run Event for diving (also sold stand-alone), on networked computers. The
    manual's networking test is to create and save a text file in the other PC's shared folder.
    Run Event usually sits in c:\_dive\run event, holding the .evt files; that folder is shared.
    Each accepted score rewrites a standings file, which Display Results reads; its location is
    copied from the scoring program (synchro: Competition menu, Standings.txt; diving: Run Event
    Function menu, Standing.txt) and pasted into Display Results.
  - Facility display either over the network or by extending the scoring computer's desktop.
    Options: sport and display language; tabs for font colour, size and background, screen size
    and position, optional background image. Most functions are not in the free version.
  - Diving: a Calypso discrete-digit board connects from Run Event directly, not through
    Display Results. Spectator screen (leader board; screenshot shows round, next diver with club
    and rank, dive code, DD and dive name, rank as current with previous in brackets, an asterisk
    for those yet to dive in the round, the last dive's judges' awards and score). Commentator
    screen, fixed size, for TV, twelve divers (screenshot adds a row of the points and score the
    next diver needs to reach each place from 1st to 12th). Images (event logo between events).
    Finals screen, fixed size, for TV, six divers (same "needs" table for six places). Number
    board (current diver's name and dive code in large type). Countdown (current clock time, or time left until a chosen hour).
  - Synchro: Spectator screen, which adapts to each routine type (highlight, combo, team, duet,
    solo) (screenshot shows execution, impression and elements per team, total, next and current
    teams); Images; a FINA scoreboard of 12 lines by 32 characters, 28 point font suggested,
    freezable to keep pace with the announcer, with pages Order (start list), Results
    (unofficial, switchable to official), Presentation (next or in-water routine, routine clock
    started and stopped from it, the next required element, re-presentation while scores are
    awaited; with a DC204 Sports Timer the clock and required elements are run remotely), Score
    (board frozen until scores are in), Champ (championship totals including carried-over
    technical routine or figures scores) and Standings (team standings typed in by the operator).
    Sample screens are of international events of about 2014 (named athletes and nations; not
    reproduced here).
Other held sources:
  - DIV Scoring Manager manual (3480.513.02, v1.9, January 2022): Display Results is a free
    download from integratedsports.net; the export folder holds an exported timetable and
    competitor list for Display Results to import; pre-competition steps for going live to the
    Internet are to export the timetable and the competitors and import both into Display
    Results; Display Results is installed when a projector, TV or scoreboard is used and pointed
    at the primary or the backup Run Event machine; during an event it must be running with
    Standby off for live Internet results, and the start list is uploaded when Standby is
    unchecked; when a phase ends, it goes back to Standby and uploads that phase's results before
    cuts are made. Its glossary entry gives it three jobs: live web results, in-house projection,
    and the link to scoreboard software (which ISS supplies on request).
  - SY Scoring Manager 3480.512.02 v1.9 (July 2017), SWA Scoring Manager v2.2 (January 2022) and
    v2.8 (February 2026): Display Results described as the free scoreboard interface (2017, 2022)
    and used for FINA (2026: AQUA) results screens and the leader board; while a score is being
    edited, the scoring program can hold back its data file from Display Results or any
    scoreboard link; a scoreboard menu inside the scoring program can drive a board with no Display
    Results; version 1.2 (14 October 2014) added "scoreboard interface with Display Results";
    2026 lists Display Results among companion installs from integratedsports.net.
  - The 2026 SWA manual's scoreboard section names a separate "ISS MMS Scoreboard Interface";
    the 2022 edition gives ISS_SCB_Synchro.zip and the DIV manual ISS_SCB_Diving.zip as video
    board interfaces. These are distinct from Display Results.
Web (read 2026-10-28):
  - integratedsports.net/diving.asp: the ISS MMS Competition Management Suite for diving is ISS
    MMS, Display Results, Run Event and the Canadian dive sheet generators.
  - integratedsports.net/new_diving.asp: latest-versions table gives "Display Results Sept 2018",
    with no number; the only date found for any version after 2015.
  - integratedsports.net/synchro.asp: the artistic swimming download list names ISS MMS, Coach
    Card, Scoreboard Display, i-Judge and user manuals, without Display Results; whether
    Scoreboard Display is the same program is not stated. new_synchro.asp has no Display Results
    entry; ISS MMS 6.8.0 makes Standings.xml and scoreboard.xml UTF-8.
  - Live results: integratedsports.net/synchro/synchroLiveResults61/ISSTVDISPLAY.htm, titled
    "ISS TV", a frameset with a 260-pixel navigation frame and a results frame (ISSTV.html),
    reloading every 150 s with caching disabled; the results frame (October 2026) showed a
    youth 13-15 team free final with rank, club, element, artistic impression and difficulty
    columns, routine and combined scores, the previous and next routines, and "Powered by
    Integrated Sports Systems (ISS) Inc." No source says this page is Display Results output;
    the DIV manual's account of Display Results posting live results makes it likely. Inferred.
  - integratedsports.net/products.asp: no Display Results; "instant score display" and "live
    on-line results and streaming video" listed under ISS meet management services. The DC 204
    Sports Timer is listed there, linking to Dexstar's page (see dc-204-sports-timer.md).
Discrepancy, flagged: the scoring manuals call it a free download; its own manual says most
functions need the paid version.
Not found: prices; version history between 11.0 (2015) and September 2018; whether it is still
developed; whether the 2026 ISS MMS still uses it for live results.
-->

Display Results is a program from
[Integrated Sports Systems](../vendors/integrated-sports-systems.md) (ISS) that shows a diving or
artistic swimming event while it is being scored. It usually runs on a separate computer, reads the
standings file that the scoring program rewrites after every score, and puts the event on
projectors, televisions and video scoreboards.[^manual] It also sends start lists and results
to a live Internet results page.[^div] ISS includes it in its diving competition suite. Swiss
Timing supplies an edition for use with [DIV Scoring Manager](div-scoring-manager.md) and
[SWA Scoring Manager](swa-scoring-manager.md), whose manuals describe it as a free
download.[^manual][^iss][^div][^swa]

## Naming and editions

This section sets out the program's editions and its place in ISS's software.

The Swiss Timing manual, version 11.0 of January 2015, presents the program as Display Results
by ISS, "enhanced for Swiss Timing", and closes with the signature of ISS's director. It works
with ISS's own meet management program, ISS MMS, in its diving or synchronized swimming form. It
also works with the Swiss Timing programs, which it calls Omega DV Scoring Manager and Omega SY
Scoring Manager, and for diving with the scoring program [Run Event](run-event.md).[^manual]
The Swiss Timing programs were later renamed DIV and SWA Scoring Manager.[^div][^swa]

ISS lists Display Results with ISS MMS, Run Event and its Canadian dive sheet generators as the
parts of its diving suite. Its table of current versions dates the program to September 2018
without a version number.[^iss][^issnew] ISS's artistic swimming page lists a "Scoreboard
Display" download in its place and does not name Display Results.[^isssynchro]

## Setup

This section covers how the program reaches the scoring computer and the screens.

Display Results does not score anything. Each time a score is accepted, the scoring program
rewrites a standings file, and Display Results reads that file to show the event as it stands.
The operator copies the file's location from the scoring program and pastes it into Display
Results. In diving the file is written by Run Event; in artistic swimming by the meet management
program itself.[^manual] The folder holding it has to be shared over the network with the
computer running Display Results. ISS's manual suggests checking the network by saving a text
file into the shared folder from the other machine.[^manual] A diving meet usually runs Run
Event on a primary and a backup computer, and Display Results is pointed at one of them.[^div]

A facility display can be run in two ways. Display Results can run on a separate networked
computer, or the scoring computer's desktop can be extended onto the projector or television.[^manual]
The operator chooses the sport and display language and sets the font, colours, background
image, and size and position of the screen.[^manual]

The scoring programs have a matching control. While a score is being corrected, the operator can
freeze the data file that Display Results reads, so that the public screens do not show the
correction in progress.[^swa][^sy]

## Diving screens

This section lists the screens the program offers for diving.

| Screen | What it shows |
|---|---|
| Spectator | The leader board, the next diver and the last diver's result. The sample screen shows the round, each diver's current and previous rank, the next dive's code, degree of difficulty and name, and the last dive's judges' awards.[^manual] |
| Commentator | A fixed-size television layout listing twelve divers. Above the list, a row shows the points and score the next diver needs to reach each place.[^manual] |
| Finals | The same television layout for a final of six divers[^manual] |
| Number board | The current diver's name and dive code in large type[^manual] |
| Countdown | The current clock time, or the time remaining until a chosen hour[^manual] |
| Images | An event logo shown between events[^manual] |

A [Calypso](../equipment/common/scoreboard/calypso.md) discrete-digit scoreboard does not go
through Display Results. Run Event drives it directly.[^manual][^div]

## Artistic swimming screens

This section lists the screens for artistic swimming, then called synchronized swimming.

The spectator screen is a leader board that rearranges itself for solo, duet, team, combination
and highlight routines. In the sample, each routine's execution, impression and elements scores
appear beside its total.[^manual] An images screen shows an event logo between events.[^manual]

The program also drives a scoreboard laid out to the FINA standard of 12 lines of 32 characters,
for which the manual suggests a 28-point font. The operator can freeze the board at any point to
keep it in step with the announcer.[^manual] The board has several pages:

- Order, the start list, and Results, the standings, which can be switched from unofficial to
  official. Both page on when the list is long.
- Presentation, which names the routine about to swim or in the water and shows the next
  required element. From it the operator starts and stops the routine clock, and can re-present
  the routine at the end while the scores are awaited.
- Score, which is normally held frozen until the judges' scores are ready and then released.
- Champ, a championship total that includes scores carried over from a technical routine or
  from figures.
- Standings, a team table that the operator types in.[^manual]

With a [DC 204 Sports Timer](../equipment/swimming/relay-judging/dc-204-sports-timer.md)
connected, the routine clock and the required elements can be controlled remotely.[^manual] The
SWA Scoring Manager manuals name Display Results as the source of the leader board and of the
results screens laid out to FINA's standard. The 2026 edition calls them World Aquatics screens.[^sy][^swa]

## Live Internet results

This section covers the program's role in posting results online.

The DIV Scoring Manager manual gives Display Results the job of sending results to the Internet.
Before the meet, the timetable and competitor list are exported from the meet program and
imported into Display Results. During each event it must be running with its standby setting
off, at which point it uploads the start list. When a phase ends, it is put on standby and posts
that phase's results before the cuts are made.[^div] The same manual defines the program as the
one that publishes results live, runs the in-house projectors and connects to the scoreboard
software.[^div]

ISS hosts live results pages of this kind. A Canadian artistic swimming page carries ISS's
credit and reloads itself every 150 seconds. Its October 2026 snapshot showed the ranking of a
youth team final, with element, artistic impression and difficulty scores, a combined total, and
the routines just finished and next to swim.[^isstv] The page does not name the program that
produced it.

## Free and paid versions

The scoring programs' manuals describe Display Results as a free download from ISS's
website.[^div][^sy] Its own manual says that most of its functions are not available in the free
version, without listing which.[^manual] No price was found.

## Related programs

This section separates Display Results from the other ISS display tools.

Display Results is not the only route from ISS's scoring to a board. The scoring programs write a
live text file for video board software and an XML standings file for graphics systems. ISS also
supplies separate video board interfaces, and the artistic swimming program can drive a
scoreboard from its own menu with no Display Results at all.[^div][^swa][^sy] Swiss Timing added a
link to Display Results to its artistic swimming program in version 1.2, in October 2014.[^swa]

## See also

- [DIV Scoring Manager](div-scoring-manager.md) and [SWA Scoring Manager](swa-scoring-manager.md): the Swiss Timing scoring programs it displays
- [ISS MMS Artistic Swimming](iss-mms-artistic-swimming.md), [Run Event](run-event.md) and [i-Judge](i-judge.md): ISS's own programs
- [DC 204 Sports Timer](../equipment/swimming/relay-judging/dc-204-sports-timer.md): the timer it can control during a routine
- [Calypso](../equipment/common/scoreboard/calypso.md): the scoreboard Run Event drives directly
- [Software](index.md): the software overview
- [Integrated Sports Systems](../vendors/integrated-sports-systems.md): the developer

## References

[^manual]: Integrated Sports Systems, Display Results, enhanced for Swiss Timing (3480.516.02, version 11.0, January 2015).
[^div]: Swiss Timing, Aquatics DIV Scoring Manager User's Manual (3480.513.02, version 1.9, January 2022).
[^swa]: Swiss Timing, Aquatics SWA Scoring Manager User's Manual (3480.512.02, version 2.8, February 2026).
[^sy]: [Swiss Timing, SY Scoring Manager User Manual](https://web.archive.org/web/20170919050815/http://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3480.512.02.pdf) (3480.512.02, version 1.9, July 2017).
[^iss]: [Integrated Sports Systems, Diving](https://www.integratedsports.net/diving.asp) (ISS MMS competition management suite).
[^issnew]: [Integrated Sports Systems, What's new with the ISS MMS (diving)](https://www.integratedsports.net/new_diving.asp) (latest versions table).
[^isssynchro]: [Integrated Sports Systems, Artistic Swimming](https://www.integratedsports.net/synchro.asp).
[^isstv]: [Integrated Sports Systems, ISS TV live results](https://www.integratedsports.net/synchro/synchroLiveResults61/ISSTVDISPLAY.htm) (Canadian artistic swimming; as of October 2026).

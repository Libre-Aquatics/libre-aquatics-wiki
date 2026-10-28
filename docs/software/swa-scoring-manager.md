---
title: SWA Scoring Manager
description: >-
  SWA Scoring Manager, formerly SY Scoring Manager, is the Swiss Timing artistic swimming
  competition program, written by Integrated Sports Systems, that runs meets from registration
  and draws through scoring, displays and results under each World Aquatics rule set since 2014.
updated: 2026-10-28
tags:
  - Software
  - Artistic swimming
  - Scoring
---

<!--
Research notes, SWA Scoring Manager. Stub created October 2026 while building out
div-scoring-manager.md; built out 2026-10-28.

Held and read in full (sources/vendors/swiss-timing/software/):
  - swiss-timing-swa-scoring-manager-3480.512.02: "Aquatics - SWA Scoring Manager User's Manual",
    3480.512.02, v2.8, February 2026, 30 pp. Title page also prints "AS Scoring Manager Aquatics
    User Manual". The version table was laid out again from page geometry with PyMuPDF, because
    the text extraction runs the version, date and change columns together. Correct pairing:
    1.0 24/04/14 first release; 1.1 01/07/14 wired keypads; 1.2 14/10/14 better judge calling for
    technical routines, officials screen, report footer, Display Results scoreboard link, Tricaster
    link; 1.3 15/01/15 two-port wired keypads at a 50 m pool; 1.4 17/05/15 figures may take zero scores
    and practice judges; 1.5 25/05/16 results booklet as PDF, report evaluating judges; 1.6 30/06/16
    international event changes; 1.7 21/11/16 reports to FINA standards, penalties in output
    files; 1.8 18/03/17 fix for international characters sent to the MTE; 1.9 29/07/17 number
    setting fixes, reports; 2.0 23/10/17 FINA 2017-2021 figures; 2.1 13/09/18 Excel and XML
    registration import, DSQ, advance to finals, video scoreboard and XML results interfaces;
    2.2 01/01/22 Excel reporting, i-Judge, additive registration import; 2.3 23/12/22 World
    Aquatics 2022-2025 scoring rules; 2.4 05/04/23 i-Judge for the new rules, Coach Card; 2.5
    09/06/23 scoreboard interface for the new rules, Coach Card validation, judge chits; 2.6
    01/01/24 resizable announcer screen, 2023 figures list, AQUA declared-difficulty rules of
    December 2023, men's solo, reports; 2.7 14/05/24 apnoea bonus, STC deductions above 99,
    reports, judge slips, gender on start lists and results; 2.8 03/02/26 apnoea bonus removed,
    2026 World Aquatics rules, i-Judge 3.02, more reports, revised judge slips.
    The earlier stub said the 2022-2025 rules came in 2.2; that was a misreading of the
    extraction, and 2.3 is right.
    Content: Windows Vista to 11; companion downloads from ISS (Coach Card, i-Judge, Display
    Results, a scoreboard display program); setup wizard; registration by Excel via the clipboard
    or an ISS XML template; officials import/export; language English or French (French
    unfinished), reports in either or both; entry by club or by nation; age-group sets Canada,
    Masters, Australia, Canada QC, AQUA, USA, Masters/USA; per-country rule variants (Canada Learn
    to Train, Asst. Judge; Jamaica no longer distinct; US honorary [H] for visitor and a quarter-point
    short-team deduction instead of a half; World Aquatics practice-judge evaluations, team
    representation); optional automatic short-team penalty (under 8) for the team event only;
    figures per age group, with a "Get from AQUA" button; letterhead builder (BMP only, footer
    720 x 50); safety backups every 15 minutes. Timetable: event code, age group, event/phase,
    judge panels (uneven allowed, figures always four panels, new system written as judges per
    panel plus STC, e.g. 2x5+3, and a DTC count), carry-over with percentage (above 100 applies a
    factor, e.g. 180), merged events, new-system flag with element/hybrid/acrobatic counts and
    factors (auto for AQUA events), 3-panel system with technical element DDs. Events and draws:
    entry flags (scratch, disqualified, visitor, late entry, exhibition, pre-swimmer, virtual); saved
    draws; routine types: solo (women, men), duet (women, mixed), trio, team (mixed), combo,
    highlight, acrobatic and mixed, besides figures; merged-club routines need duplicate entries;
    Advance button for finals. Coach Cards dragged onto the team builder, checked against the
    timetable counts, incomplete cards fail the missing elements, two editors (old rules and 2024
    on), files in a Coach Card\Sheets folder. Scoring: two-keystroke entry, quarter points by
    0/2/5/7 or the keypad's / * - +; entry ordered per judge or per element; failed element replaces
    the DD with the base mark; both DDs on the detailed report; DTC/DATC calls (pass, fail,
    review, review-pass, review-fail) recorded for judge evaluation only; announcer and officials
    screens (officials screen holds 2 minutes after validation); display freeze while editing;
    practice scores; event export/import for scoring on another computer; figures via Excel.
    i-Judge: up to 20 Windows computers or tablets, TCP 8963, a role per console (referee,
    timer, DTC, DATC, elements, artistic impression, synchronization errors). Outputs: main.txt with a
    Controller window, a live Scoreboard.xml, Standings.xml on every accepted score (sample dated
    13 September 2018, FINA Artistic Swimming World Series, Surrey, BC), a separate ISS MMS
    Scoreboard Interface download, XML results in the FINA format on closing a detailed results
    report. Section heading says the new system covers 2022-2025; the timetable section says
    2022-2026.
  - swiss-timing-sy-scoring-manager-3480.512.02-rev-1.9 (filed 2026-10-28 from the Wayback
    Machine capture of 19 September 2017; extracted with PyMuPDF): "SY Scoring Manager, Aquatics
    User Manual", v1.9, July 2017, 23 pp. Same document number. Calls the program a Synchro Meet
    Management Suite; installs to an "SY Scoring Manager" folder; Windows Vista to 10. Three
    computer layouts (basic, enhanced, and an elaborate one normally provided only by ISS),
    drawn as diagrams. Membership download for Canadian synchro only. Age-group sets Canada,
    Canada SK, Masters, Canada BC, Canada QC, United States. Under FINA rules figures score to four
    decimals, otherwise three shown as four. 3-award system (three aspects with set percentages)
    and a 3-panel system dated November 2013. MTE chapter: 19,200 baud 8N1, XBee wireless or
    Swiss Timing cables with the INT 131 converter, a secondary port when judges sit on both sides
    of a cabled pool; for wireless, present the routine, call judges near the end of the music,
    and wait 2 s between the five calls of a technical routine. The manual calls itself "ISS MMS"
    in places. Its version table prints 1.9 as 29/07/11; the 2022 and 2026 editions give 29/07/17.
  - swiss-timing-swa-scoring-manager-3480.512.02-rev-2.2 (filed 2026-10-28 from the capture of
    15 March 2023): "Aquatics - SWA Scoring Manager User's Manual", v2.2, January 2022, 26 pp.
    First edition seen under the SWA name ("Artistic Swimming Meet Management Suite"). Adds
    i-Judge (up to 15 consoles; download iJudgeAS1.8.msi), an ISS video board interface
    (ISS_SCB_Synchro.zip), an ISS Figures Viewer (named, not described), and an ISS program that
    copies Standings.xml to another location. Keeps the MTE chapter and still dates the 3-panel
    system to November 2013.
  The 2026 edition labels that 3-panel system "2017-2021"; the 2017 and 2022 editions date it to
  November 2013. Both may be right (introduced 2013, still in use through 2021); the body
  gives both. A capture of the same URL from August 2024 is truncated at 1 MiB and unreadable.
  The live swisstiming.com URL returns 404 (checked 2026-10-28).

Also held: Display Results (3480.516.02, v11.0, January 2015), which names "Omega SY Scoring
Manager" and describes the synchro screens; DIV Scoring Manager manual (3480.513.02), whose
changes in January 2015, November 2016, March 2017 and January 2022 match SWA's on the same dates.

Web (October 2026):
  - integratedsports.net: ISS MMS Artistic Swimming (World Aquatics 2026) v6.8.0, 16 October 2026
    (6.7.23 in June 2026 per the earlier ISS page notes); Coach Card 2026 v4.0.0, 13 October 2026;
    Coach Card 2024 International v3.0.5, 16 December 2025; i-Judge Artistic Swimming (World
    Aquatics 2022-2026) v3.04, 12 May 2026; USA Synchro scoring renewals for 2026-27; Dexstar
    Communications Inc. named as Swiss Timing's official distributor. No location given.
  - USA Artistic Swimming, 31 August 2021: ISS renewed as scoring partner; i-Judge scorecards;
    Mike Morris chief programmer and director. Paper scoring before ISS.
  - AVK Group catalogue, STSY: Swiss Timing synchro scoring package of MTE terminals with
    competition software, up to two panels of 5 or 7, Calypso or video display. Does not name
    the software.
  - Artistic Swimming Australia, 28 September 2022: 2022-2025 cycle changes awaiting the FINA
    Technical Congress of 3-5 October 2022; Coach Card per routine listing elements, DD and base
    mark; artistic impression in 0.25 steps; difficulty and synchronization controller groups
    of three each. The STC in the manual's panel notation is read here as the synchronization
    controllers; the manual does not expand STC, DTC or DATC. Inferred.
  - Inside Synchro, 8 March 2024: from 1 March 2024 World Aquatics changed free-hybrid DD and set
    apnoea maximums for junior, youth and 12-and-under, with a 40-point bonus for routines inside
    them, first at the World Junior Championships. Inside Synchro, 28 January 2026: refers to the
    40-point apnoea bonus as part of the 2024 season; 2026 changes are factors and difficulty
    tweaks. Neither says when World Aquatics dropped the bonus; the manual dates its removal
    from the software to February 2026.
  - Wikipedia, Synchronized swimming: renamed artistic swimming by FINA in July 2017.

Not found: a Swiss Timing product page or price; which World Aquatics events have used the Swiss
Timing edition rather than ISS's own; whether the 2026 edition still drives MTE keypads (the
chapter was dropped, nothing says support ended); how SWA version numbers map to ISS MMS
Artistic Swimming's 6.x; any link to ARES Synchronized Swimming.
-->

SWA Scoring Manager is a Windows program for running artistic swimming competitions, sold by
[Swiss Timing](../vendors/swiss-timing.md) and written with
[Integrated Sports Systems](../vendors/integrated-sports-systems.md) (ISS).[^manual][^iss] It holds
a meet's timetable, entries, judging panels and draws, scores routines from judges' tablets or
manual entry, and sends the results to reports, scoreboards, video displays and an XML file in the
FINA format.[^manual] Version 1.0 is dated 24 April 2014. The current manual, for version 2.8, is
dated February 2026. Several releases since 2017 implement changes to the World Aquatics
scoring rules.[^manual]

## Naming and authorship

This section sets out the program's names and its relationship to ISS's own software.

The program was first called SY Scoring Manager. The 2017 manual uses that name throughout,
describes the product as a meet management suite for synchro, and installs it to a folder of
the same name.[^sy2017] By the January 2022 edition the program had become SWA Scoring Manager,
described as an artistic swimming suite, and the title pages of the 2022 and 2026 editions also
print the name AS Scoring Manager.[^swa2022][^manual] FINA had renamed synchronized swimming
as artistic swimming in July 2017.[^wiki] A 2015 Display Results manual refers
to the program as Omega SY Scoring Manager.[^display]

The software is ISS's meet management program in a Swiss Timing edition. Every edition gives
an ISS address for support and samples, and the manuals call the program ISS MMS in several
places. In the 2022 and 2026 editions the scoring computer is listed under that name when
judges' tablets connect to it.[^sy2017][^swa2022][^manual] ISS sells its own edition as
[ISS MMS Artistic Swimming](iss-mms-artistic-swimming.md), at version 6.8.0 for the 2026 World
Aquatics rules in October 2026.[^iss] The manuals do not say how Swiss Timing's version numbers
relate to ISS's.

## Competition setup

This section covers what the program manages before an event is scored.

A setup wizard records the competition's dates and location, its language (English, or French,
which the manual calls unfinished), the report language, and whether competitors are listed by
club or by nation.[^manual] Ready-made sets of age groups cover Canada, Quebec, Australia, the
United States, World Aquatics international categories and masters, and any group can be
renamed. A country option adjusts a few rules. The United States setting marks an honorary
entry as [H] rather than a visitor as [V], and it deducts a quarter point instead of a half from
a team of fewer than eight swimmers. The World Aquatics setting evaluates practice judges by
federation.[^manual] The 2017 edition also downloaded club, swimmer, coach and judge lists from
the Canadian synchro membership database.[^sy2017]

Entries can be typed in, marked present in a "Who's Here" roster, imported from an Excel sheet
pasted through the clipboard, or loaded from an XML template that ISS supplies on request.
Officials can be imported and exported the same way.[^manual] The program also keeps entry fees,
medal tables and figures assignments by age group, and it can fetch the World Aquatics figures
for a group directly.[^manual] Reports carry a letterhead built from up to three sponsor images
and a footer.[^manual]

The timetable drives everything else. Each entry sets the event and phase, the age group, the
judging panels and the times of each part of the routine.[^manual] Panels may be uneven, and a
figures event always uses four. Under the rules in force since 2022 a panel is written as the
number of judges in each panel plus the number of technical controllers, for example `2x5+3`.
The entry also records how many required elements, hybrids and acrobatic movements the routine
must contain, and the factor for each scoring component. The program fills in the factors itself
for World Aquatics events.[^manual] A timetable entry can carry scores over from another event or
from figures at a set percentage, and a value above 100 applies a factor. Events can also be
merged so that two are scored together but ranked separately.[^manual]

## Draws, routines and Coach Cards

This section covers how routines are built and checked before they are scored.

Routines are assembled in the events section by choosing a club, the swimmers and a coach.
The 2026 edition lists women's and men's solo, women's and mixed duet, mixed team,
combination, trio, highlight, mixed and acrobatic routines, plus figures.[^manual] Draws are made by hand or
generated electronically, and several can be saved so that one can be picked at random or a
preliminary draw reused for the final. Any entry can be flagged as a scratch, a disqualification,
a late entry, a visitor, an exhibition swim or a pre-swimmer.[^manual] An Advance command builds the final
from a preliminary's results.[^manual]

The 2022–2025 rules made each coach declare a routine in advance on a Coach Card, listing its
elements in order with their degree of difficulty (DD) and base mark.[^asa] The manual calls the
card an essential part of those rules. [Coach Card](coach-card.md) is a separate ISS program,
and support for it arrived in version 2.4 in April 2023.[^manual] A card is dragged onto the
routine in the program. The program warns if the card's count of elements, hybrids or acrobatic
movements differs from the timetable. Elements missing from an incomplete card are scored as
failed.[^manual]

## Scoring

This section covers score entry and the two scoring systems the program supports.

The 2026 manual describes two systems side by side. It labels the older three-panel system as
the 2017–2021 rules; the 2017 and 2022 editions date that system to November 2013.[^manual][^sy2017][^swa2022]
Under the older system the operator enters the DDs of a technical routine's elements in the
timetable.[^manual] The newer system, for the rules adopted in 2022, scores elements against
their declared difficulty.[^manual][^asa]

Scores entered by hand take two keystrokes each. Judges in the current system award in steps of
a quarter point, so the second digit is 0, 2, 5 or 7 for .00, .25, .50 or .75, and the
`/ * - +` keys of a numeric keypad stand in for the same four values.[^manual][^asa] The operator
can enter a routine's marks one judge at a time or one element at a time. When an element is failed, the operator swaps
its DD for the base mark rather than entering zeros, and the detailed results show both
values.[^manual] The program can also record the technical controllers' rulings on each element (the
manual's DTC and DATC), as passed, failed, or under review with either outcome. These do not change the score but feed the
judge evaluation reports.[^manual]

Other scoring tools include an announcer window and a second-monitor screen for officials,
which holds for two minutes after scores are validated. Practice judges can be scored and
their marks later cleared. The data sent to displays can be frozen while a score is corrected,
and an event can be exported to be scored on another computer.[^manual]

## Judging devices

This section covers how judges' awards reach the program.

- [i-Judge](i-judge.md), ISS's scoring program, runs on Windows computers or tablets, one per judge,
  sharing a network with the scoring computer, and connects over TCP port 8963. Each console
  is assigned a role: elements, artistic impression, synchronization errors, the difficulty
  controllers (DTC and DATC), the timer or the referee.[^manual] i-Judge arrived in version 2.2 in January 2022
  with a limit of 15 consoles; the 2026 edition allows 20.[^swa2022][^manual] USA Artistic
  Swimming describes ISS's i-Judge scorecards in use at its national events.[^usaas]
- [Omega MTE keypads](../equipment/diving/omega-mte-keypads.md) connect wired or by an XBee
  radio link, and wired keypads were added in version 1.1 in July 2014. A wired panel connects through the
  [INT131](../equipment/swimming/timers/swiss-timing-int131.md) converter at 19,200 baud, with a
  second port for judges seated on the far side of a 50 m pool.[^sy2017][^manual] For a wireless
  panel the 2017 manual advises calling the judges as the music ends and pausing two seconds
  between the five calls a technical routine needs.[^sy2017] The keypad chapter is in the 2017 and
  2022 editions but not in the 2026 one, which mentions the keypads only in its version
  history.[^sy2017][^swa2022][^manual] A dealer lists a Swiss Timing artistic swimming package of
  MTE keypads with competition software, for up to two panels of five or seven judges.[^avk]

## Scoreboards and displays

This section lists the program's display outputs.

| Output | What it does |
|---|---|
| Scoreboard controller | Writes a live text file, `main.txt`, for third-party scoreboard software, with a window from which the scorer sets what the board shows[^manual] |
| `Scoreboard.xml` | A live XML version of the scoreboard data for web pages and broadcast graphics[^manual] |
| `Standings.xml` | Rewritten each time scores are accepted; the manual's sample comes from the FINA Artistic Swimming World Series in Surrey, British Columbia, in September 2018[^manual] |
| ISS scoreboard interface | A separate ISS download for video boards that cannot read `main.txt`[^manual] |
| [Display Results](display-results.md) | ISS's program for results screens and the leader board on televisions, projectors and LED walls[^manual][^display] |
| [TriCaster](tricaster.md) | A link to the live video production system, added in version 1.2 in 2014[^manual] |

## Results and data exchange

This section covers reports and file exports.

Reports are grouped on three tabs and can be saved as PDF, and summary and detailed results
can also be saved as Excel files.[^manual] They include start lists, judge slips and recorder
sheets, championship results combining figures and routines, medallists by club and judge
evaluations. A results booklet can be produced as a single PDF.[^manual] Any report can be edited
as text for a single printing.[^manual] Closing an event's detailed results report writes an XML
results file, which the manual describes as following the FINA standard.[^manual] The program
saves a safety backup every 15 minutes, and the manual's closing advice is to export the whole
competition and keep it safe.[^manual]

## Version history and rule changes

This section traces the program's releases against the scoring rules they implement.

| Version | Date | Main changes |
|---|---|---|
| 1.0 | 24 April 2014 | First release |
| 1.1–1.3 | July 2014 – January 2015 | MTE keypads, wired, then on two ports for a 50 m pool; officials screen; Display Results and TriCaster links |
| 1.4–1.9 | May 2015 – July 2017 | Zero scores and practice judges in figures, a report evaluating judges, a PDF results booklet, international events, reports to FINA standards |
| 2.0 | 23 October 2017 | FINA figures for 2017–2021 |
| 2.1 | 13 September 2018 | Excel and XML registration, disqualifications, advance to finals, video scoreboard and XML results interfaces |
| 2.2 | 1 January 2022 | Excel reporting, i-Judge |
| 2.3 | 23 December 2022 | World Aquatics 2022–2025 scoring rules |
| 2.4–2.5 | April–June 2023 | i-Judge and scoreboard for the new rules, Coach Card support and validation, judge chits |
| 2.6 | 1 January 2024 | Declared-difficulty rules of December 2023, men's solo, 2023 figures list |
| 2.7 | 14 May 2024 | Apnoea bonus, STC deductions above 99, each competitor's gender shown in results and start lists |
| 2.8 | 3 February 2026 | Apnoea bonus removed, 2026 World Aquatics rules, i-Judge 3.02 |

All dates are from the 2026 manual.[^manual] The 2017 edition prints the date of version 1.9 as
29 July 2011, which falls before the program's first release. The 2022 and 2026 editions give
29 July 2017.[^sy2017][^swa2022][^manual]

The scoring system that version 2.3 implements was put to the FINA Technical Congress in October
2022.[^asa] The apnoea bonus in version 2.7 follows a World Aquatics change in force from
1 March 2024. That change set maximum breath-hold times for free hybrids at junior, youth and
12-and-under level and awarded 40 points to routines that stayed within them.[^is2024] A 2026
review of that season's rule changes refers to the bonus as a rule of the 2024 season.[^is2026]
The manual dates its removal from the software to February 2026.[^manual]

## Related programs

This section compares the program with its diving sister and with other artistic swimming
software.

[DIV Scoring Manager](div-scoring-manager.md) applies the same ISS structure to diving. The two
share a first release date, and several changes reached both on the same day: the two-port
keypad support of January 2015, penalties in output files in November 2016, an MTE fix in
March 2017, and i-Judge in January 2022.[^manual][^div] SWA Scoring Manager has been
revised several times since then, while the diving program's last listed version is from 2022.[^manual][^div]

Swiss Timing's earlier artistic swimming software,
[ARES Synchronized Swimming](ares-synchronized-swimming.md), ran on the ARES 21 timing system.
No source found describes SWA Scoring Manager as its successor. Colorado Time Systems' artistic
swimming programs are [SynchroMM](synchromm.md) and [Gen7 Artistic
Swimming](gen7-artistic-swimming.md), and Daktronics' is
[OmniSport Pro Synchro](omnisport-pro-synchro.md).

## See also

- [DIV Scoring Manager](div-scoring-manager.md): the diving program built the same way
- [ISS MMS Artistic Swimming](iss-mms-artistic-swimming.md): ISS's own edition of the program
- [Coach Card](coach-card.md), [i-Judge](i-judge.md) and [Display Results](display-results.md): ISS's companion programs
- [Omega MTE keypads](../equipment/diving/omega-mte-keypads.md): the judges' keypads of earlier versions
- [ARES Synchronized Swimming](ares-synchronized-swimming.md): Swiss Timing's earlier synchronized swimming program
- [Software](index.md): the software overview
- [Swiss Timing](../vendors/swiss-timing.md) and [Integrated Sports Systems](../vendors/integrated-sports-systems.md): the vendor and the developer

## References

[^manual]: Swiss Timing, Aquatics SWA Scoring Manager User's Manual (3480.512.02, version 2.8, February 2026).
[^swa2022]: [Swiss Timing, Aquatics SWA Scoring Manager User's Manual](https://web.archive.org/web/20230315150630/https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3480.512.02.pdf) (3480.512.02, version 2.2, January 2022).
[^sy2017]: [Swiss Timing, SY Scoring Manager User Manual](https://web.archive.org/web/20170919050815/http://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3480.512.02.pdf) (3480.512.02, version 1.9, July 2017).
[^display]: Integrated Sports Systems, Display Results, enhanced for Swiss Timing (3480.516.02, version 11.0, January 2015).
[^div]: Swiss Timing, Aquatics DIV Scoring Manager User's Manual (3480.513.02, version 1.9, January 2022).
[^iss]: [Integrated Sports Systems](https://www.integratedsports.net/) (ISS MMS Artistic Swimming 6.8.0, Coach Card, i-Judge; as of October 2026).
[^usaas]: [USA Artistic Swimming, USAAS renews partnership with ISS scoring](https://www.usaartisticswim.org/news/features/2021/august/31/usaas-renews-partnership-with-iss-scoring) (31 August 2021).
[^avk]: [AVK Group, Scoring and timing systems for synchro swimming](https://www.avkgroup.at/catalog/STSY/) (dealer listing, STSY).
[^asa]: [Artistic Swimming Australia, What is changing with the new artistic swimming rules](https://www.artisticswimming.org.au/news/what-is-changing-with-the-new-artistic-swimming-rules) (28 September 2022).
[^is2024]: [Inside Synchro, Updates to the free hybrid difficulty and apnea time limits](https://insidesynchro.org/2024/03/08/updates-to-the-hybrid-difficulty-and-apnea-time-limits/) (8 March 2024).
[^is2026]: [Inside Synchro, Rule updates for the 2026 season](https://insidesynchro.org/2026/01/28/rule-updates-for-the-2026-season-whats-changing-and-what-isnt/) (28 January 2026).
[^wiki]: [Wikipedia, Synchronized swimming](https://en.wikipedia.org/wiki/Synchronized_swimming).

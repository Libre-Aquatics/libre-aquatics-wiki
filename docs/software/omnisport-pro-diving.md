---
title: Daktronics OmniSport Pro Diving
description: >-
  OmniSport Pro Diving is Daktronics' discontinued Windows diving scoring program, which works
  through an OmniSport 2000 timing console to collect judges' marks and drive scoreboards.
tags:
  - Software
  - Diving
  - Scoring
  - Meet management
---

<!--
Research notes, OmniSport 2000 Pro Diving. Stub surfaced 2026-10-22 while building out
rc-100.md; built out to a full article the same day.

Held under sources/vendors/daktronics/software/, both read in full:
- OmniSport 2000 Pro Diving Software Installation & Operation Manual, DD3109489 Rev 0 (cover
  3 August 2015, inner page 1 August 2015; product 1240; 34 pages; covers version 3.0.0 or
  later).
  - Section 1: works with the OmniSport 2000 to take scores from judge consoles and to feed
    scoreboards and displays; multiple meets and events; unlimited divers; up to 99 rounds;
    synchronized diving; import and export with DiveMeets.com and E-dive; does not check dive
    sheets. Without a console it can still score an event, but cannot reach judge consoles or
    displays. Windows XP or later (7 and 8 from 2.0.5.0, 32- and 64-bit); Internet Explorer 6
    or later. Optional: Ethernet, or a serial port (USB adapter allowed) and a straight-through
    9-pin cable; 2 to 11 judge consoles, RC-100 wireless or JC-100 wired.
  - Section 2: downloaded from a dakfiles.daktronics.com folder as an installer; 30-day trial;
    then the version and a lock code are emailed to Daktronics, which sends a licence file on
    proof of purchase; a new licence is needed for each computer.
  - Section 3.1: splash screen with schedule, recent meets, tips, news, and tasks (resume, open,
    create a meet, run reports, import, export, configure scoreboard, view manual, connect).
    Create-a-meet wizard: meet name and date; events with title, rounds 1-13, gender, and
    external number/section/alpha fields to match Hy-Tek Meet Manager; synchronized checkbox;
    judges 2, 3, 5, 7 or 9, or 7, 9 or 11 for synchronized; a scoring formula choice for 7 or 9
    judges in individual events; board 1 m, 3 m or platform; position letters A-D or S-F; half-
    or tenth-point scoring; a DD table (FINA by default); roster entry. Reports open as HTML:
    overall and detailed results, dive sheets with or without scores, dive orders, announcer
    script, DD table.
  - Section 3.2: Ethernet (UDP, through a router to the console's ETHERNET jack) or serial (to
    the console's J4 EXPANSION port), with the console in 2-DIVING; the console then reads
    "CONTROLLED BY PRO DIVING"; a green or red link indicator; a red box under each judge
    console that is not connected. Display settings: matrix boards (diver name format,
    affiliation full or abbreviated, 2-10 leaderboard lines, page time); fixed-digit boards
    (multisport or not, show lead, 1-10 lines, 12/24 h, dimming in 10% steps); ports (meet
    manager protocol Omni 2000, Omni 6000 or CTS; RTD or CTS real-time data; scoreboard
    Multiline, Multidrop, Omega or Multicast; RTD offset 5,000/10,000/15,000 for several
    timers); keep or replace dives on import; console printer logging of each round.
  - Section 3.3: main screen with current and next diver, judge scores (Next, Accept, Fail,
    Balk), a "score to take place" calculator, event order (make active, add, insert, remove,
    edit scores, names, dive lists, move, cut and uncut), rounds advance automatically, ranking
    tab with cut and uncut tools.
  - Section 3.4: ribbon tabs. Manage Meets (create, open, edit, delete, copy with divers, dive
    lists and scores, or as finals of uncut divers with or without scores; combined events that
    interleave rounds of several events). In Meet (dive order, edit and clear scores,
    leaderboard with auto paging). Reports (announcer, DD, orders, sheets, a judging report of
    how often each judge was high or low, standard and detailed results). Share (XML import and
    export of meets, DD tables and rosters). Setup (connect; a Data Monitor for port traffic;
    display settings; DD table editor with new, copy, delete, and per-dive edits, the FINA table
    protected; text-to-speech of diver details and scores with voice and rate; web results by
    FTP, HTTP or local file at a set interval; colour schemes). Help and keyboard shortcuts.
  - Appendix A revision history: 1.0.2.0 (9 November 2003) first diving release; 1.0.3.0
    (4 December 2003) high/low drop fix, XML output, starting scores, database password;
    1.0.3.1 (17 December 2003) a test of the Hy-Tek interface to the console; 1.0.3.2 (26
    February 2004) fix for 7 or 9 judges, Windows NT 4.0 install; 1.0.3.3 (16 March 2004) name
    formats, final results printout; 1.0.5.0 (23 May 2004) synchronized diving, DD table and
    event import/export; 1.0.5.1 and 1.0.5.2 (December 2005) fixes; 2.0.0.0 (11 January 2009)
    beta; 2.0.1 (6 May 2009) Vista and Windows 7 database location, FINA table update, voice
    options; 2.0.2 (dated 9 October 2010, but listed before 2.0.3) packet-rate fix; 2.0.3 (1 May
    2010) synchro diving with 7, 9 or 11 judges and its reports, console version check,
    low-score fix, web scoreboard and press monitor for 11 judges; 3.0.0 listed with no date or
    notes. The 2.0.2 date is probably a slip for 2009; recorded as printed.
- OmniSport Pro Diving Quick Start Guide, ED-16444 Rev 4 (4 February 2011), 4 pages: the same
  trial and licensing (then by email to a DakStats address), COM-port connection, meet wizard,
  and scoring loop.
Other held sources:
- OmniSport 2000 manual ED-13312 Rev 16, section 7: 2, 3, 5, 7 or 9 judges for diving and
  synchro; 7, 9 or 11 for synchronized diving; the Pro Diving program can be set for 7, 9 or 11
  in synchronized diving.
- RC-100 manual ED-15133 and RC-200 manual DD3572889 (see those articles).
- Daktronics Aquatics Solutions brochure DD1565872 Rev 07 (2018): eDive and DiveMeets.com named.
- World Aquatics Competition Regulations 2026, Part Four: individual and team events judged by
  seven judges, or five; synchronized by eleven, or nine (5 and 7.x); seven-judge panels drop
  the two highest and two lowest, five-judge panels one of each; synchronized panels drop the
  highest and lowest execution and synchronization awards (article 9, calculating the score).
Web (2026-10-22):
- Daktronics Diving Software support page: Pro Diving connects to the OmniSport 2000 by serial or
  Ethernet; unlimited divers, 99 rounds; web-ready printouts; real-time data to Daktronics
  scoreboards.
- Daktronics Swimming Software support page: the ProDiving, ProSyncro and ProSwimming interfaces
  can no longer be bought and are discontinued; customers are pointed to Professional Services.
- KB DD2212249: dive sheets reach an OmniSport 2000 by entry before or during the meet, or by
  download from a results program such as E-dive or DiveMeets.com.
- KB DD2706566: new FINA DD tables are fetched from a Download Now link in the program's News
  area.
- KB DD2674209 (fetched 2026-10-19 for rc-200.md): eleven-judge synchronized diving needs
  OmniSport 2000 11.7.20 or later and ProDive or DiveMeets.
- KB 000019974: lists DD3109489 and the quick start guide as the program's documents.
- KB 000014371 (fetched for rc-200.md): OmniSport timing system end-of-life plan as of fall 2023.
Still to research: the date and contents of version 3.0.0 and any later release; price.
-->

OmniSport Pro Diving is a Windows program from [Daktronics](../vendors/daktronics.md) for scoring
diving meets. It runs on a computer linked to an
[OmniSport 2000](../equipment/swimming/timers/omnisport-2000.md) timing console, which passes it
the marks from wired [JC-100](../equipment/diving/jc-100.md) or wireless
[RC-100](../equipment/diving/rc-100.md) judge consoles and carries its results to
scoreboards.[^manual] The first release came in November 2003.[^manual] Daktronics no longer
sells it.[^swsupport]

## History and versions

This section summarizes the release history the manual gives. Version 1.0.2.0, dated
9 November 2003, was the first diving release. Point releases over the next few months fixed
how the highest and lowest marks were dropped, added XML output and starting scores, and added
synchronized diving in version 1.0.5.0 in May 2004.[^manual] Version 2.0.0.0 went to beta testing
in January 2009. Version 2.0.1 in May 2009 moved the database for Windows Vista and Windows 7 and
updated the FINA difficulty table.[^manual] Version 2.0.3, dated May 2010, added synchronized
diving panels of 7, 9 or 11 judges with their own reports, and a check on the console's software
version.[^manual] The history lists version 2.0.2 with a date of October 2010, after its
successor, which looks like a misprint. It names a version 3.0.0, which the 2015 manual covers,
but gives no date or changes for it.[^manual]

## Role in the scoring system

This section places the program between the judges and the displays. The judge consoles
connect to the OmniSport 2000, not to the computer. The console relays their marks to Pro Diving
and sends the program's results on to the scoreboards.[^manual][^os2000] Without a console, the
program can still score an event from marks typed in, but it then has no link to judge consoles
or displays.[^manual] Daktronics also published Pro Synchro for synchronized swimming on the same
console, as a separate program.[^swsupport]

## Setup and connection

The program connects to the console either over Ethernet, through a network router to the
console's Ethernet jack, or over a serial cable to its J4 expansion port.[^manual] The console is
put in its diving mode first. Once linked, its display reports that it is controlled by Pro
Diving, and the program shows a green indicator. Any judge console that is not connected is
marked in red.[^manual]

The 2015 manual lists Windows XP or later as the requirement, with Windows 7 and 8 supported
from version 2.0.5.0.[^manual] A trial runs for 30 days. After that the user sends the
program's version number and a lock code to Daktronics, which returns a license file once the
purchase is confirmed. Each computer needs its own license.[^manual][^quickstart]

## Meets, events and divers

This section covers how a meet is set up. A wizard creates the meet and its events. Each event
has these settings:[^manual]

- a title, a number of rounds from 1 to 13, and the gender
- whether it is synchronized
- the number of judges: 2, 3, 5, 7 or 9, or 7, 9 or 11 for synchronized events
- for 7 or 9 judges in individual events, the formula for dropping marks
- the board: 1 m springboard, 3 m springboard or platform
- position letters A–D or S–F, and half-point or tenth-point marks
- the table of degrees of difficulty, which defaults to the FINA table

Each event also has fields to match its numbering in
[Hy-Tek Meet Manager](hy-tek-meet-manager.md).[^manual] Divers are
added to a roster, with dive lists entered from the difficulty table. During the meet they can be
reordered, cut and restored.[^manual] A meet can be copied as a finals meet holding only the divers
who were not cut. Several events can be combined so that their rounds alternate.[^manual] The
manual states that the program does not check dive sheets.[^manual]

## Scoring

This section covers how marks are entered and totaled. The operator makes a diver active and
opens scoring. Marks from the judge consoles fill in on their own, or can be typed in, and the
operator then accepts them or records a failed dive or a balk.[^manual]
Rounds advance automatically once every diver has gone.[^manual] A ranking tab lists the
standings. A calculator shows what score a diver would need to reach a chosen place.[^manual]

The program offers more panel sizes than the current World Aquatics rules use. World Aquatics
judges individual events with seven judges, or five when seven are not available, and
synchronized events with eleven, or nine.[^wa] A seven-judge panel loses its top two
and bottom two marks before the total is taken, and a five-judge panel one at each end. Synchronized panels drop the highest
and lowest of the execution marks and of the synchronization marks.[^wa] The manual does not say
which rules its 2-judge and 3-judge panels, or its choice of formula for 7 or 9 judges, are meant
for.[^manual] For eleven-judge synchronized diving, Daktronics support says the console needs
software 11.7.20 or later, and the judging has to run through Pro Diving or
[DiveMeets](divemeets.md).[^kbsync]

## Scoreboard output

This section covers what the program sends to scoreboards. On a matrix board the program sets how diver names
and affiliations appear and how many leaderboard lines show, with automatic paging.[^manual] For
fixed-digit boards it sets the number of lines, whether the leader is shown, the clock format and
the dimming level.[^manual] Port settings choose the protocol sent to meet management software
(OmniSport 2000, OmniSport 6000 or Colorado Time Systems) and the real-time data format. They
also choose the scoreboard protocol: multiline, multidrop, Omega or multicast. An offset keeps
real-time data apart when several timers send at once.[^manual] Daktronics describes the
real-time data as feeding its aquatics scoreboards and message displays.[^divsupport]

## Reports and data exchange

This section covers printouts and file exchange. Reports are written as HTML for printing from
a web browser:[^manual]

- overall and detailed results
- dive sheets, with or without scores
- dive orders and an announcer's script
- the difficulty table in use
- a judging report counting how often each judge gave the high or low mark

Meets, difficulty tables and rosters can be imported and exported as XML.[^manual] Daktronics
names DiveMeets.com and [eDive](edive.md) as the results programs it exchanges data with. Its
support also lists downloading dive sheets from either one as a way of loading them before a
meet.[^manual][^kbsheets] New FINA difficulty tables are fetched from a link in the program's news
panel.[^kbdd] The program can also read out diver details and marks by text-to-speech. It can
post live results to a web server by FTP or HTTP at a set interval.[^manual]

## Status

As of 2026, Daktronics states that its Pro Diving, Pro Synchro and Pro Swimming programs have
been discontinued and can no longer be bought. It refers customers to its professional services
group for newer systems.[^swsupport] The OmniSport 2000 they depend on is itself being withdrawn,
under an end-of-life plan dated fall 2023.[^kbeol]

## See also

- [OmniSport Pro Synchro](omnisport-pro-synchro.md): the synchronized swimming program for the same console
- [OmniSport 2000](../equipment/swimming/timers/omnisport-2000.md): the timing console it works through
- [JC-100](../equipment/diving/jc-100.md), [RC-100](../equipment/diving/rc-100.md) and [RC-200](../equipment/diving/rc-200.md): the judge consoles
- [DiveMeets](divemeets.md) and [eDive](edive.md): the results programs it exchanges data with
- [Daktronics](../vendors/daktronics.md): the publisher
- [Software](index.md): the software overview

## References

[^manual]: Daktronics, OmniSport 2000 Pro Diving Software Installation and Operation Manual (DD3109489 Rev 0, 2015).
[^quickstart]: Daktronics, OmniSport Pro Diving Quick Start Guide (ED-16444 Rev 4, February 2011).
[^os2000]: [Daktronics, OmniSport 2000 Timing Console Operation Manual (ED-13312 Rev 16, 2019)](https://www.daktronics.com/web-documents/customer-service-manuals/ed13312.pdf), section 7.
[^divsupport]: [Daktronics support, Diving Software](https://www.daktronics.com/en-us/support/components/diving-software).
[^swsupport]: [Daktronics support, Swimming Software](https://www.daktronics.com/en-us/support/components/swimming-software).
[^kbsheets]: [Daktronics support, DD2212249, Entering dive sheets into an OmniSport 2000 before a dive meet](https://www.daktronics.com/en-us/support/kb/DD2212249).
[^kbdd]: [Daktronics support, DD2706566, Pro Diving, downloading a new degree of difficulty table](https://www.daktronics.com/en-us/support/kb/DD2706566).
[^kbsync]: [Daktronics support, DD2674209, Synchronized diving with 11 RC-100/RC-200 judges](https://www.daktronics.com/en-us/support/kb/DD2674209).
[^kbeol]: [Daktronics support, 000014371, Wireless judges' consoles with the OmniSport 2000](https://www.daktronics.com/en-us/support/kb/000014371).
[^wa]: [World Aquatics, Competition Regulations](https://resources.fina.org/fina/document/2026/02/18/e6815ecc-06d9-4f0b-98e9-4c441cf5e6a3/2026-02-18_World-Aquatics_CR-Final.pdf), Part Four, 5 and 9.

---
title: Daktronics OmniSport Pro Synchro
description: >-
  OmniSport Pro Synchro is Daktronics' discontinued Windows program for scoring synchronized
  swimming, which works through an OmniSport 2000 timing console set to its synchro mode.
tags:
  - Software
  - Artistic swimming
  - Scoring
---

<!--
Research notes, OmniSport 2000 Pro Synchronized Swimming. Stub surfaced 2026-10-22 while
building out rc-100.md; built out to a full article 2026-11-10.

Held under sources/vendors/daktronics/software/ and read in full:
- OmniSport 2000 Pro Synchronized Swimming Software Installation & Operation Manual, DD3109495
  Rev 0 (3 August 2015; product 1240; 23 pages; covers version 1.0.1.1). The .txt extraction
  beside the PDF stops partway through section 4.3 (after Back to Next). Pages 16 to 23 were
  read with PyMuPDF instead: Edit Options, Rank, Roster, Affiliations and a disabled Test tab,
  section 4.4 configurations, section 4.5 typical operation and Appendix A. The extraction has
  not been regenerated; a fuller one would help the copying check.
  - Section 1: the console alone cannot score synchro and must be in 5-SYNCHRO SWIM; some
    console menu settings are in Appendix C of ED-13312. Requirements: Windows XP or later, CPU
    and RAM at the operating system minimum, Internet Explorer 5.0 or later. Optional: a serial
    port or USB-serial adapter, a straight-through 9-pin male to female cable, the console, and
    RC-100 or JC-100 judge consoles, minimum 2, maximum 18.
  - Section 2: installer "OmniSport Pro Synchro.exe" from a dakfiles.daktronics.com folder under
    OmniSport 2000/Pro/Synchro; Start menu entry Daktronics > OmniSport Pro > Synchro; 30-day
    demo, then the serial number is emailed to Daktronics' sport software address with the
    organization and contract number, and a registration code is returned on proof of purchase;
    a second computer needs a new code.
  - Section 3: the program can run alone (manual score entry, scoring and reports). Console needed
    for displays and to link judge consoles; it then only relays. Equipment table: paper pin-up =
    computer and printer; numeric display = add the console and judge consoles; matrix display =
    add a Daktronics display control computer. Cable to the console's J4 EXPANSION PORT;
    Options > Communications > Setup to pick the COM port; Options > Communications > Monitor
    shows received data on top and sent data below; green indicator, flashing on data, red when
    not connected; console LCD reads "Controlled by Pro Sync Swim". Also a note that some
    computers sold with the software had a four-port Rocket serial card numbered from COM 5. Not
    used in the body.
  - Section 4.1 main screen: Tech/Free routine buttons; competitor name, affiliation and swimmers
    remaining; each judge's two marks plus totals, with green/red connection bars;
    results; connection icon and Routine, Deck and Team timers; penalty drop-downs, filled in
    automatically when a timer shows a penalty; scoreboard buttons for Technical/Execution,
    Artistic/Overall Impression, Total or Blank.
  - Section 4.2 events: name, event type, date, time, age groups; percentages for Figures,
    Technical and Free; technical and free routine pages with time limit, penalty, number of
    judges and panels; a routine set to None cannot be configured; open, edit, copy, delete.
  - Section 4.3 tabs: Event Order (current swimmer highlighted yellow or green by mode; Up/Dn;
    add, insert, remove; Next and Accept modes, Back to Next to abort an entry; edit score, age
    group, draw number, names), Rank (uses the percentages), Roster (affiliation, first and last
    name, event type), Affiliations (team name and abbreviation). The manual says five tabs; a
    fifth, Test, is marked disabled.
  - Section 4.4: Timer Configuration (number of scoreboard lines, time-of-day mode, multisport
    display, show lead swimmer, console printer logging, brightness, Meet Manager Port protocol
    Omni 2000/Omni 6000/CTS on J6, RTD Port protocol RTD/CTS on J5, Scoreboard Port Multidrop or
    Multiline on J2/J3). Communications: enable, type COM Port, encryption off; 38400 baud, 8
    data bits, no parity, not to be changed; HTTP and Standard/Enhanced RTD left unchecked.
    Display Options: name format for swimmers and teams.
  - Section 4.5: before the meet check configurations (re-sync if changed while disconnected),
    test judge consoles with a test event, console test [Menu]>[3]>[3]; scores typed or from
    judge consoles, formula from the percentages, Accept moves on; reports via Reports > View
    Reports: Technical by draw and by rank, Free by draw and by rank, Total, Starting List,
    Figures; written as HTML for printing or a website.
  - Appendix A: one entry only, version 1.0.1.1 dated May 2007 as the first synchro release.
Other held sources:
- OmniSport 2000 Timing Console Operation Manual ED-13312 Rev 16 (23 May 2019), sources/vendors/
  daktronics/timers-consoles/. Section 3 says the console can front the Pro Diving and Pro
  synchro programs. Section 7: diving and synchro panels of 2, 3, 5, 7 or 9;
  console asks each judge console for a judge number on first connection; synchro has one or two
  panels, the second numbered after the first (two panels of five: 6 to 10), at most two panels
  of nine or 18 judges; one panel gives both marks, two panels one each; technical routine marks
  are execution (E) and overall impression (OI), free routine marks technical merit (TM) and
  artistic impression (AI). Appendix C synchro menu: judges, panels, beeper, numeric scoreboard
  lines, page time, multisport, RTD offset, port protocols (scoreboard outputs also offer OMEGA),
  printer, time of day, network including "NETWK PRO/MMR". Appendix D: RTD at 19,200 baud,
  Enhanced protocol; template OS2-Sync Swim.itf for synchronized swimming.
- All Sport & OmniSport Revision Histories DD3679410 Rev 06 (5 November 2024), same folder:
  OmniSport 2000 4.10.28 (28 October 2004) doubled the synchro judge limit to 18, added
  wireless handheld judge consoles, and lists "first release of program" under Synchronized
  Swimming; 9.4.6 (6 April 2009) the console takes the RTD offset and dimming settings sent by
  the synchro program; 13.7.18 (18 July 2013) network communication with Pro Swim and Meet
  Manager, listed under Swimming and Diving only.
  Discrepancy 1: the 2004 firmware entry predates the program's own 2007 first release. Possibly
  the console's synchro mode, possibly an earlier unrecorded program; not resolved.
  Discrepancy 2: ED-13312 lists a network Pro option in the synchro menu, but the firmware notes,
  DD3109495 and the support page describe serial only. Not resolved.
- RC-100 manual ED-15133 and RC-200 manual DD3572889: both point back to ED-13312 for diving and
  synchro handheld operation (RC-200 sport insert LL-2606).
- JC-100 product specification SL-05775 (2014): wired CAN-bus handheld whose uses include synchro,
  diving, synchro diving and rodeo.
- Daktronics Aquatics Solutions brochure DD1565872 Rev 07 (2018): a single line pointing to a Pro
  program for synchro.
- CTS System 6 Synchronized Swimming software guide F874 (Rev 0604): the System 6 routines
  program also scores technical merit and artistic merit, which supports the two-mark model of
  the period.
- Swiss Timing SWA Scoring Manager manual 3480.512.02 v2.8 (2026), via swa-scoring-manager.md:
  three-panel routine judging dated to November 2013 in the 2017 and 2022 editions.
- OmniSport Pro Swimming manual DD3109473 Rev 1 (2016): used for the new stub, not here.
Web (2026-11-10):
- Daktronics Synchronized Swimming Software support page: technical and free routine scoring,
  web-friendly printouts, RTD to aquatics scoreboards and message displays, serial link to the
  OmniSport 2000. No status statement and no documents listed without a login.
- Daktronics Swimming Software support page: End of Sale Notification naming ProDiving,
  ProSyncro and ProSwimming as discontinued and not for sale; refers to Professional Services.
- KB 000004257 (also DD4120777): Pro Synchronized Swimming is no longer in production and has
  reached end of life; describes feeding Swiss Timing diving and synchro standings (.txt or .xml)
  through Daktronics Content Server 4.2 or later with SwissTiming-Diving.itf and SwissTiming-
  Synchronised Swimming.itf templates, then Content Studio, for DMP-7000 and DMP-8000 players.
  The title names OmniSport Pro; the body does not.
- KB DD2485913: Windows 8 needs Pro Swimming 1.2.3 or Pro Diving 2.0.5; Windows 8.1 not
  compatible; Windows 10 qualified only from Pro 4.x. Synchro not mentioned.
- KB 000014371: OmniSport timing system end-of-life plan as of fall 2023 (from rc-200.md work).
- Artistic Swimming Australia, 28 September 2022: 2022-2025 rules with declared difficulty.
- Wikipedia, Synchronized swimming: FINA renamed it artistic swimming in July 2017.
Still to research: any version after 1.0.1.1; whether figures can be scored in the program;
price; how many installations there were.
-->

OmniSport Pro Synchro is a Windows program from [Daktronics](../vendors/daktronics.md) for
scoring synchronized swimming. It runs on a computer linked to an
[OmniSport 2000](../equipment/swimming/timers/omnisport-2000.md) timing console. The console has
a synchronized swimming mode but cannot work out the sport's scores itself. It relays marks from
wired [JC-100](../equipment/diving/jc-100.md) or wireless [RC-100](../equipment/diving/rc-100.md)
judge consoles to the program and carries the program's results to scoreboards.[^manual] The
manual dates the first release, version 1.0.1.1, to May 2007.[^manual] Daktronics has
discontinued the program and no longer sells it.[^swsupport][^kbswiss]

## History and versions

This section covers the release record. The manual, DD3109495 Rev 0 of August 2015, describes
version 1.0.1.1. Its revision history has a single entry, the initial
release in May 2007.[^manual] Synchro support in the console is older. Daktronics' firmware history for the
OmniSport 2000 lists a first release of the synchronized swimming program in version 4.10.28,
dated October 2004. The same release raised the number of judge consoles allowed for the sport
from 9 to 18 and added wireless handheld judge consoles.[^revhist] A console release of April
2009 let the console accept real-time data offset and dimming settings sent by the synchro
program.[^revhist] The sources do not explain the three-year gap between the 2004 firmware entry
and the program's own 2007 first release. The 2004 entry may refer to the console's synchro mode
rather than to the Windows program. Daktronics' published documentation names no version after
1.0.1.1.

## Role in the scoring system

This section places the program between the judges, the console and the displays. Daktronics
states that synchronized swimming can be scored only with the Pro program. The console has to be
set to its `5-SYNCHRO SWIM` mode but does not calculate results in it.[^manual] The program can
also be used with no console at all. An operator then types in each judge's marks, and the
program still totals them and produces reports.[^manual] The console is needed once judge
consoles or displays are involved. It is the only route from the judges' handsets to the
computer and from the computer to the scoreboard, and in that arrangement it does no scoring of
its own.[^manual]

The manual sets out three levels of equipment:[^manual]

- results posted on paper: the computer running the program and a printer
- a numeric scoreboard: the same, plus an OmniSport 2000 and judge consoles
- a matrix display: all of the above, plus a Daktronics display control computer

Daktronics published two sibling programs for the same console:
[OmniSport Pro Diving](omnisport-pro-diving.md) and
[OmniSport Pro Swimming](omnisport-pro-swimming.md).[^swsupport]

## Setup and connection

This section covers installation, licensing and the link to the console. The 2015 manual asks
for Windows XP or later on a computer that meets the operating system's minimum specification,
with Internet Explorer 5.0 or later.[^manual] Daktronics' support note on Windows 8 and later
gives minimum versions for the swimming and diving programs but does not mention the synchro
program.[^kbwin] The installer was downloaded from a Daktronics file server. A trial runs for 30
days. After that the user emails the program's serial number to Daktronics and, once the
purchase is confirmed, receives a registration code. Installing on another computer needs a new
code.[^manual]

The program connects to the console by serial cable only. A straight-through 9-pin cable runs
from a COM port on the computer, or a USB-to-serial adapter, to the console's J4 expansion
port.[^manual][^sssupport] The port runs at a fixed 38,400 baud, 8 data bits and no parity; the
operator picks only the COM port number.[^manual] A communications monitor shows the data
arriving from the console in one pane and the data being sent in another. While the link works,
an indicator in the program shows green and flashes as data arrives; it turns red when the link
drops. The console's display meanwhile reports that it is under the program's control.[^manual]

The 2019 OmniSport 2000 manual lists a menu item for enabling Pro software over the network in
the console's synchro mode.[^os2000] The other sources do not support a network link for this
program. The firmware history adds network communication with the Pro software in July 2013,
but only under swimming and diving. Both the 2015 synchro manual and Daktronics' support page
for the program describe a serial connection only.[^revhist][^manual][^sssupport]

## Events and competitors

This section covers how an event is defined and how swimmers are entered. A wizard creates each
event. Its first page takes a name, an event type, the date and time, any age groups, and the
percentage weight given to figures, the technical routine and the free routine in the final
result.[^manual] Two more pages, one for the technical routine and one for the free routine,
set the time limit, the penalty for exceeding it, the number of judges and the number of
panels. A routine whose weight is set to none cannot be configured.[^manual] Events can be
opened, edited, deleted, or copied to serve as the starting point for a similar
event.[^manual]

Swimmers are kept in a roster, each assigned to an affiliation that has a team name and
abbreviation. A swimmer already entered in one event can be picked from a list when building
another.[^manual] An event order tab holds the swim order. There the operator can add, insert,
remove and reorder swimmers, and correct an age group, draw number, name or score. A rank tab
lists the swimmers from first to last on the weighted result.[^manual]

## Scoring

This section covers how marks reach the program and how they are combined. The operator either
types the marks in or takes them from judge consoles, of which the program handles 2 to
18.[^manual] The console manual describes the judging side. A judge console asks for a judge
number when it is first connected. An event can use one panel or two, each of up to nine
judges, and a panel can be 2, 3, 5, 7 or 9 judges.[^os2000] With one panel, every judge gives
both marks for a routine. With two, the second panel takes the judge numbers that follow the
first, so two panels of five are judges 1–5 and 6–10, and each panel gives one of the two
marks.[^os2000] A technical routine is marked for execution and for overall impression. A free
routine is marked for technical merit and for artistic impression.[^os2000]

The main screen shows each judge's marks with a bar under them, green when that judge console is
connected and red when it is not.[^manual] It also shows routine, deck and team timers. Penalties
chosen from drop-down lists are taken off the score, and a penalty is filled in automatically
when a timer shows that one was incurred.[^manual] The operator accepts the marks to move to the
next swimmer. While the program waits for acceptance, marks can still arrive, but the order and
scores are locked. A Back to Next command abandons the entry so that a different swimmer can be
made current.[^manual] The
result is calculated from the percentages set for the event.[^manual] The manual includes a
figures weight and a figures results report, but it does not describe how figure scores are
entered.[^manual]

The program's two marks per routine follow the judging of its period, which divided a routine
between a technical score and an artistic score. Colorado Time Systems' synchro program for its
[System 6](../equipment/swimming/timers/system-6.md) console, documented in 2004, uses the same
split.[^f874] International judging later moved away from it. Swiss Timing's scoring manual dates
a three-panel system for routines to November 2013, and the rules adopted for 2022–2025 score
each element against a declared difficulty.[^swa][^asa] FINA, now World Aquatics, renamed the
sport artistic swimming in 2017.[^wiki] The 2015 manual still describes version 1.0.1.1 with a
limit of two panels, and Daktronics' documentation records no update for either rule
change.[^manual]

## Scoreboard output

This section covers what the program sends to displays. Buttons on the main screen choose what a
scoreboard shows: the technical or execution marks, the artistic or overall impression marks,
the totals, or a blank board.[^manual] A display options window controls the format of names for
swimmers and teams.[^manual]

The program also sets several console options from the computer. These are the number of lines
on a numeric scoreboard, the time-of-day format, whether a multisport scoreboard is fitted,
whether the leading swimmer is shown, logging to the console's built-in printer, and display
brightness.[^manual] It also chooses the format sent from each of the console's three
outputs:[^manual]

- results port J6, for meet management software: OmniSport 2000, OmniSport 6000 or Colorado Time
  Systems format
- real-time data port J5: Daktronics real-time data or Colorado Time Systems format
- scoreboard outputs J2 and J3: multidrop or multiline

If a setting changes while the program and console are apart, the program asks to bring the two
back into line when they reconnect.[^manual] For matrix displays the console sends real-time data
at 19,200 baud. Daktronics publishes an input template for the synchro mode, `OS2-Sync Swim.itf`,
for adding that data to a display sequence.[^os2000] The support page for the program describes
it as feeding real-time data to Daktronics aquatics scoreboards and message displays.[^sssupport]

## Reports

This section covers printouts. After an event the program writes reports as HTML files, which
can be printed or posted on a website:[^manual]

- technical routine results, by draw order and by rank
- free routine results, by draw order and by rank
- total results
- the start list
- figures results

## Status

As of 2026, Daktronics lists its ProSyncro interface, with ProDiving and ProSwimming, as
discontinued and no longer for sale. It refers customers to its professional services group for
newer systems.[^swsupport] A Daktronics support article states that Pro Synchronized Swimming is
no longer produced and has reached end of life.[^kbswiss] The same article describes another way
to put diving and synchro results on a Daktronics video display. Standings files from the Swiss
Timing programs, [SWA Scoring Manager](swa-scoring-manager.md) and
[DIV Scoring Manager](div-scoring-manager.md), are read by the
[Daktronics Content Server](daktronics-content-server.md), version 4.2 or later, through input
templates written for those programs.[^kbswiss] The OmniSport 2000 the program depends on is
itself being withdrawn, under an end-of-life plan dated fall 2023.[^kbeol]

## See also

- [OmniSport Pro Diving](omnisport-pro-diving.md) and [OmniSport Pro Swimming](omnisport-pro-swimming.md): the sibling programs for the same console
- [OmniSport 2000](../equipment/swimming/timers/omnisport-2000.md): the timing console it works through
- [JC-100](../equipment/diving/jc-100.md), [RC-100](../equipment/diving/rc-100.md) and [RC-200](../equipment/diving/rc-200.md): the judge consoles
- [SWA Scoring Manager](swa-scoring-manager.md) and [SynchroMM](synchromm.md): other synchronized swimming scoring programs
- [Daktronics](../vendors/daktronics.md): the publisher
- [Software](index.md): the software overview

## References

[^manual]: [Daktronics, OmniSport 2000 Pro Synchronized Swimming Software Installation and Operation Manual](https://www.daktronics.com/web-documents/customer-service-manuals/dd3109495.pdf) (DD3109495 Rev 0, 2015).
[^os2000]: [Daktronics, OmniSport 2000 Timing Console Operation Manual (ED-13312 Rev 16, 2019)](https://www.daktronics.com/web-documents/customer-service-manuals/ed13312.pdf), sections 7 and appendices C–D.
[^revhist]: [Daktronics, All Sport & OmniSport Revision Histories (DD3679410, Rev 06, 5 November 2024)](https://www.daktronics.com/web-documents/customer-service-manuals/dd3679410.pdf), OmniSport 2000.
[^sssupport]: [Daktronics support, Synchronized Swimming Software](https://www.daktronics.com/en-us/support/components/synchronized-swim-software).
[^swsupport]: [Daktronics support, Swimming Software](https://www.daktronics.com/en-us/support/components/swimming-software).
[^kbswiss]: [Daktronics support, 000004257, Integrating Swiss Timing diving and synchro with a video display](https://www.daktronics.com/en-us/support/kb/000004257).
[^kbwin]: [Daktronics support, DD2485913, OmniSport Pro compatibility with Windows 8, 8.1 and 10](https://www.daktronics.com/en-us/support/kb/DD2485913).
[^kbeol]: [Daktronics support, 000014371, Wireless judges' consoles with the OmniSport 2000](https://www.daktronics.com/en-us/support/kb/000014371).
[^f874]: Colorado Time Systems, Synchronized Swimming for the System 6 Sports Timer Software User Guide (F874 Rev 0604).
[^swa]: [Swiss Timing, Aquatics SWA Scoring Manager User's Manual](https://web.archive.org/web/20230315150630/https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3480.512.02.pdf) (3480.512.02, version 2.2, January 2022).
[^asa]: [Artistic Swimming Australia, What is changing with the new artistic swimming rules](https://www.artisticswimming.org.au/news/what-is-changing-with-the-new-artistic-swimming-rules) (28 September 2022).
[^wiki]: [Wikipedia, Synchronized swimming](https://en.wikipedia.org/wiki/Synchronized_swimming).

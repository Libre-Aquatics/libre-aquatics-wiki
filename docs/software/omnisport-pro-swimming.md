---
title: Daktronics OmniSport Pro Swimming
description: >-
  OmniSport Pro Swimming is Daktronics' discontinued Windows program for running swim races
  through an OmniSport 2000 timing console, storing results and passing them to meet
  management software and displays.
tags:
  - Software
  - Swimming
  - Timing
---

<!--
Research notes, OmniSport 2000 Pro Swimming. Stub surfaced 2026-11-10 while building out
omnisport-pro-synchro.md; built out to a full article 2026-11-11.

Held under sources/vendors/daktronics/software/ and read in full:
- OmniSport 2000 Pro Swimming Software Installation & Operation Manual, DD3109473 Rev 1
  (31 March 2016; 32 pages; covers version 3.0.0 or later). Extraction checked complete.
  - Section 1: requirements Windows XP or later (Windows 7 and 8 only from 1.2.2, 32- and
    64-bit), 2.26 GHz CPU, 2 GB RAM, Internet Explorer 5.0 or later, an Ethernet jack or a
    serial port (a USB adapter allowed). Daktronics expected most buyers to take the computer
    from it.
  - Section 2: installer OmniPROSwimmingInstall.exe from a dakfiles folder; 30-day demo; the
    serial number is emailed to Daktronics with organization and contract details, and a license
    file comes back on proof of purchase and is loaded from the registration window; each extra
    computer needs its own license file.
  - Section 3.1: network (Cat5 through a router to the console's ETHERNET jack; type UDP/IP) or
    serial (straight-through 9-pin to J4 EXPANSION PORT; COM Port type, 38400 baud). Console in
    1-SWIMMING. Monitor window: received data top, sent data bottom. Some Daktronics-supplied
    computers had a four-port Rocket serial card numbered from COM 5 (not used in the body).
  - Section 3.2: "Cannot Detect Console" message when unlinked; Comm Status indicator green,
    flashing on data, orange when not connected (the synchro manual says red). Several network
    consoles: a chooser lists them and the chosen name shows on screen. Settings conflict: keep
    the console's (recommended) or the program's defaults. The console sends its event order on
    connection and the program offers to save it as a file; console holds 500 events, the
    program stores several such lists for reuse.
  - Section 3.3 main screen: per-lane on/off (F1, F2 ... keys), current lengths with up/down,
    near/far arming indicator (split armed, finish armed, finished, arming delay countdown 1-99,
    lane problem, overly active input, RTOP battery), arming buttons. Event data area with
    elapsed time; event, heat, length and round from the event order but adjustable, and the
    operator advances them by hand; edits here are not saved back to the event order file.
    STORE PRINT and RESET (RESET also stores and prints if STORE PRINT was not used). Five
    buttons: Edit Start Time, Disqualify, Split Arm All, Finish Arm All, Race Log File. Tabs:
    Current Race (edit name, affiliation, time; DQ; a Start button that marks the start source
    as keyboard, i.e. unofficial), Stored Races (pick database file, title, race, event, heat,
    length, date; edit, print, save; right-click Edit, DQ, Use Backup, Lane Log), Scoreboards
    (display off, time of day, dimming slider; matrix requests for start list, event results,
    heat results, women's, men's or combined scores; team score boxes), Test (battery, lane
    module inputs with a one-person mode that turns the monitor to the deck, scoreboard cycle,
    driver address and digit tests).
  - Section 3.4 configuration (mirrors console settings in ED-13312 section 5): Pool (1-10
    lanes, normal or reversed order, labels 1-10 or 0-9, 25 yd, 25 m or 50 m); Timer (arming
    delay, typically 15-20 s; flag time comparing pad and backup; start input N.O. for Daktronics
    Horn Start 100/200, N.C. for other makes; primary time touchpad or buttons; lane inputs near
    only or near and far; 1/100 or 1/1000 precision; relay take-off platform type none,
    Button/Daktronics or Omega, input button 1-3, arm time 0.1-1.5 s); Console Printer (results,
    race log, by lane or place, backups, splits none/cumulative/subtractive, up to 5 copies);
    Pro Printer (ordered list of printout formats with and without backups, splits, exchanges,
    page breaks; at most ten per event; two-line header; race log; goes to the PC's default
    printer); SCBD (numeric: lines, split hold and finish page time 1-99 s default 5, lane or
    place order, DQ only or DQ and time, subtractive splits, reaction time; matrix adds places
    on splits and an RTD offset of 5,000/10,000/15,000 for several pools on one display);
    Results tab disabled; Event Order (set active, view, edit: add, edit, delete, print, save
    as); Comm Ports (J6 results protocol Omni 2000, Omni 6000 or CTS; J5 RTD or CTS; J2/J3
    Multidrop, Multiline, Multicast or Omega; interface port configure and monitor).
  - Section 3.5: lane colours, alternating mode, colours in the grids.
  - Section 3.6 typical operation: print console settings from the console as a backup; test the
    start (tone, strobe, both clocks run) and each lane; set the event order; check the console
    is on the right race; check pool length; always-ready start recovers a missed start after
    reset, or a start time can be typed in (for example from a parallel second console's
    printout); after a race STORE PRINT, RESET, and advance event or heat by hand.
  - Appendix A, 25 entries: 1.00 (25 October 2002) first release; 1.10-1.12 betas November-
    December 2002 (event order printouts, registration on Windows XP, Omni 6000-style database
    files offered to the meet manager); 1.13 (January 2003) when a heat exists twice, Meet Manager
    gets the latest copy; 1.14 (February 2003) Hy-Tek race request fix; 1.15 (July
    2003) storage and printing fixes, backup times printed without a pad time; 1.16 (September
    2003); 1.17 (19 November 2003) DLStreams communications library, one installer for swimming,
    diving and synchro, data moved to Documents and Settings; 1.18 (March 2004) separate installers
    again; 1.19 (July 2004); 1.1.10 (October 2004) Hy-Tek fix; 1.1.11 (16 November 2004) start
    reaction and relay exchange times; 1.1.12 (January 2005) multiple languages, German; 1.1.13
    (February 2005) Traditional Chinese, exchange printout; 1.1.14 (February 2005) relays 4-6
    removed; 1.1.16 (May 2006); 1.1.17 (June 2006); 1.1.18 (19 January 2007) team scores,
    relay take-off arm time, scoreboard test patterns, new display settings; 1.2.1 (15 October
    2009) lane status icons, per-lane test filtering, Multicast scoreboard protocol and auto
    dimming, UI action logging, RTD item offset, French and Greek, 12/24 h clock, single
    protection level; 1.2.2 (29 December 2009) Vista/7 configuration location, modem ports
    skipped; 1.2.3 (23 October 2012) edit finish time in Flagged Times, flashing red missed-touch
    warning, Visual Studio 2010; 3.0.0 (15 November 2013) UDP network link, Softlocx licensing
    replaced by Sentinel, PC/console clock check (warning over 15 minutes); 3.0.1 (18 February
    2015) only swimming-mode consoles listed; 3.0.2 (22 February 2016) lane inputs touchpad or
    buttons; 3.0.3 (29 March 2016) flag time always on, also used for disagreeing button times.
    No version 2.x is listed.
- OmniSport 2000, Pro Swimming, & Hy-Tek Software Quick Guide ED-13876 Rev 5 (19 August 2013),
  6 pages, read in full: Meet Manager downloads event orders (up to 500 events numbered 1-999Z
  with a letter suffix and a round, plus the top record time) to the console and pulls back pad,
  button, split, reaction and exchange times by event and heat or race number; Meet Manager
  sends the current start list to Pro Swimming. Serial: Meet Manager on J6 (console results
  protocol OMNI 2000), Pro Swimming on J4 at 38400, RTD on J5. Network: a hub or router;
  console NETWORK, NETWORK PRO and NETWORK MMR set ON, which disables serial J4 and J6
  respectively; Pro Swimming set to UDP/IP with the port filled in automatically; default
  console addresses 192.168.0.55-58 for OMNI1-OMNI4. Meet Manager menu names Timer (DAK2).
Other held sources:
- OmniSport 2000 manual ED-13312 Rev 16 (2019): J4 or Ethernet carries two-way traffic with the
  Pro software; Ethernet needs Pro Swimming 3.0 or later and Meet Manager 5.0 or later; event
  orders come from Meet Manager, from the Pro software, or are keyed in; about 50 races held in
  the console, and when Pro Swimming connects every stored race is copied to the computer and
  deleted from the console; an unset console clock is filled in from the PC;
  RTOP settings can be made from the Pro Timer tab with Pro Swimming 1.1.18 or later.
- All Sport & OmniSport Revision Histories DD3679410 Rev 06: OmniSport 2000 13.7.18 (18 July
  2013) network link to Pro Swim and Meet Manager, Omni ID selection 1-4, standard IP addresses.
  Matches Pro Swimming 3.0.0 (November 2013).
Web (2026-11-11):
- Daktronics Swimming Software support page: serial or Ethernet to the OmniSport 2000; collects
  touchpad, button, relay exchange and start reaction times; gets event order and named start lists
  from a results program, Meet Manager being the example given; RTD to aquatics scoreboards and
  message displays; End of Sale Notification for ProSwimming, ProDiving and ProSyncro;
  Professional Services referral.
- KB DD2485913: Windows 8 needs Pro Swimming 1.2.3 or later (the manual says 1.2.2 for 7 and 8:
  discrepancy, flagged in the body); 8.1 not compatible; Windows 10 qualified only for Pro 4.x
  and later, a version no held document describes; sunset of OmniSport as of fall 2023.
- KB DD2635125: Pro Swimming 3.0 or later fails to reach an Ethernet OmniSport 2000 when the
  PC's wireless adapter outranks the wired one; fix is the adapter binding order.
- KB DD3302734: same cause on the Hy-Tek computer stops start lists and alpha data reaching Pro
  Swimming; Meet Manager 5.x with the alpha scoreboard plug-in.
- KB 000011916: an OmniSport 2000E will not connect if the UDP port was changed in the program;
  clearing the port lets it negotiate again.
- KB 000014371: OmniSport end-of-life plan as of fall 2023 (from rc-200.md work).
Named but not stubbed: a Rocket-brand multi-port serial card, DLStreams library, Softlocx and Sentinel
licensing (all mentioned only in the manual's notes and history; left out of the body).
Still to research: version 4.x (date, changes), price, and how many sites ran it.
-->

OmniSport Pro Swimming is a Windows program from [Daktronics](../vendors/daktronics.md) that
runs swim races alongside an
[OmniSport 2000](../equipment/swimming/timers/omnisport-2000.md) timing console. It shows each
race as the console times it, lets the operator correct lanes and times, stores the results on
the computer, and prints and displays them.[^manual] Touchpad, button, relay exchange and
reaction times reach meet management software such as
[Hy-Tek Meet Manager](hy-tek-meet-manager.md) through the console.[^swsupport][^hytek] The first
release came in October 2002.[^manual] Daktronics no longer sells the program.[^swsupport]

## History and versions

This section summarizes the release history in the 2016 manual, which lists 25 versions. Version
1.00 came out on 25 October 2002, followed by three beta releases before the end of that
year.[^manual] Several early releases fixed how race data was handed to Hy-Tek Meet Manager.
Version 1.17 of November 2003 briefly combined the swimming, diving and synchro programs in a
single installer, and the next release split them again.[^manual] Version 1.1.11 of November
2004 added start reaction and relay exchange times, and early 2005 brought German and
Traditional Chinese text.[^manual] Version 1.1.18 of January 2007 added team scores and new
scoreboard settings. Version 1.2.1 of October 2009 added more lane status warnings and the
multicast scoreboard protocol.[^manual]

The numbering jumps from 1.2.3, of October 2012, to 3.0.0, of November 2013. Version 3.0.0 added
the network link to the console, changed the licensing system, and warns the operator when the
two clocks, the computer's and the console's, are more than 15 minutes apart.[^manual] The network
link matches an OmniSport 2000 firmware release of July 2013, which added communication with the
Pro program and with Meet Manager over Ethernet.[^revhist] The last version in the manual is
3.0.3, of March 2016.[^manual] Daktronics support refers to a version 4.x as the only one tested
on Windows 10. The 2016 manual does not cover that version.[^kbwin][^manual]

## Role in the timing system

This section places the program between the console, the meet software and the displays. The
console does the timing. The [HS-200](../equipment/swimming/starter/hs-200.md) start system
starts its clock. Split and finish times come from
[touchpads](../equipment/swimming/touchpad/t-7000.md) and backup buttons through the lane
modules.[^manual] The program connects to the console's
expansion port or network jack and exchanges data in both directions.[^os2000] It mirrors the
race on screen, and it takes over the console's race memory. The console holds about 50 races,
and when the program connects, every race stored in the console is copied to the computer and
erased from the console.[^os2000]

Meet Manager connects to the console separately. It downloads the event order to the console
and asks for times back, naming either the event and heat or the race number. It also sends the start list for
the current heat to the Pro program, which uses it for swimmer names and
affiliations.[^hytek][^swsupport] Results and display data still leave from the console's own
ports, whose formats the program sets.[^manual]

## Setup and connection

This section covers installation, licensing and the link to the console. The 2016 manual asks
for Windows XP or later, a 2.26 GHz processor, 2 GB of memory and Internet Explorer 5.0 or
later. It notes that most customers bought the computer from Daktronics.[^manual] The two
sources disagree on Windows 8. The manual supports Windows 7 and 8 from version 1.2.2, while
Daktronics' support note asks for version 1.2.3. The support note also says Windows 8.1 is not
compatible.[^manual][^kbwin] A trial runs for 30 days. After that the user emails the program's
serial number to Daktronics and receives a license file once the purchase is confirmed; each
computer needs its own file.[^manual]

The program reaches the console in one of two ways:[^manual][^hytek]

- serial: a straight-through 9-pin cable from the computer, or a USB-to-serial adapter, to the
  console's J4 expansion port, at 38,400 baud
- network, from version 3.0: the console's Ethernet jack and the computer both cabled to a
  router or hub, with the program set to UDP and the port number set automatically

On a network the console's settings for Pro software and for Meet Manager must both be on, and
switching each on disables the matching serial port.[^hytek] Up to four consoles can share a
network under the names OMNI1 to OMNI4, with default addresses 192.168.0.55 to 192.168.0.58. When
the program finds more than one, it asks which to use.[^hytek][^manual] Daktronics support
describes two network faults. If the wireless adapter on the Pro computer or the Meet Manager
computer takes priority over the wired one, the program may not reach the console or receive
start lists. A UDP port changed by hand also stops the program
connecting.[^kbenet][^kbalpha][^kbudp]

A status indicator on the main screen shows green when the link works and flashes as data
arrives.[^manual] On connection the console sends its event order, which the program offers to
save as a file. The console holds 500 events, and the program can keep several such lists for
reuse.[^manual] If the program's settings and the console's differ, the operator chooses which to
keep; the manual recommends the console's.[^manual]

## Running a race

This section covers the main screen during a meet. A row for each lane shows whether it is on,
how many lengths have been swum, and whether the near and far ends are armed for a split or a
finish.[^manual] The operator can switch a lane off, correct its length count after a missed or
accidental touch, and re-arm it. Icons warn of an arming delay still counting down, a lane fault,
an input firing too often, and a low battery in a relay take-off platform.[^manual] Buttons above
the lanes edit the start time, disqualify lanes, arm every lane for a split or a finish, and open
the race log.[^manual]

The event order supplies the event and heat numbers, the round and the race length. The operator advances them by hand
between heats, and changes made here are not written back to the event order file.[^manual]
After a race, a store-and-print command saves and prints the results, and a reset clears the
clock for the next race, saving the race first if it was not already stored.[^manual] If the
console was not reset before a start, the console's always-ready start feature lets the operator
accept the recorded start after resetting. A start time can also be typed in, for example from the
printout of a second console run in parallel.[^manual]

Four tabs sit below the lanes:[^manual]

- current race: names, affiliations and times for the race in progress, editable, with a
  disqualification control
- stored races: earlier races chosen by file, event, heat or date, which can be edited,
  reprinted, or given a backup time in place of a touchpad time
- scoreboards: display on or off, time of day, dimming, team scores, and requests for a start
  list, results or scores on a matrix display
- test: battery level, lane inputs and scoreboard test patterns, with a mode for testing alone
  by turning the monitor to face the deck

## Configuration

This section covers the settings the program holds, most of which are also console
settings.[^manual] The pool settings take the number of lanes (1–10), whether lane order is
reversed, whether lanes are numbered 1–10 or 0–9, and a pool length of 25 yards, 25 metres or 50
metres. The timer then works out how many touches each race needs.[^manual] The timer settings
cover:[^manual]

- the arming delay that keeps a pad inactive after a touch, usually 15–20 seconds so a relay
  swimmer can leave the water
- the flag time, the largest difference allowed between a pad time and a backup time before the
  result is marked
- normally open start input for Daktronics horn starts, normally closed for other makes
- touchpads or buttons as the primary time, near end only or both ends, and hundredths or
  thousandths
- [relay take-off platforms](../equipment/swimming/relay-judging/index.md): none, Daktronics or
  button type, or Omega, with an arming time of 0.1–1.5 seconds

The program also configures printing, both on the printer built into the console and on the computer's
default printer. Printouts can list finishers in lane or place order, with or without backup times, with
cumulative or lap splits, and with relay exchange times, up to ten formats per event.[^manual]
An event order editor adds, changes and deletes events and saves the list as a file.[^manual]

## Scoreboard and data output

This section covers what goes to displays and meet software. For numeric scoreboards the program
sets the number of lines, how long splits and finishes hold (1–99 seconds), results in lane or
place order, how a disqualification is shown, and whether lap splits and reaction times
appear.[^manual] Matrix displays add places on splits and an offset of 5,000, 10,000 or 15,000
for the real-time data, used when two or more pools feed one display.[^manual] The program also
chooses the format for each of the console's outputs:[^manual]

- results port J6, for meet management software: OmniSport 2000, OmniSport 6000 or Colorado
  Time Systems
- real-time data port J5: Daktronics real-time data or Colorado Time Systems
- scoreboard outputs J2 and J3: multidrop, multiline, multicast or Omega

Meet Manager can also act as the source for matrix display content. On request the console
fetches team scores, start lists, and heat or event results from it, so the display shows the
lane assignments current in the meet software.[^hytek]

## Status

As of 2026, Daktronics lists its ProSwimming interface, with ProDiving and ProSyncro, as
discontinued and no longer for sale. It refers customers to its professional services group for
newer systems.[^swsupport] The OmniSport 2000 the program depends on is itself being withdrawn,
under an end-of-life plan dated fall 2023.[^kbeol][^kbwin]

## See also

- [OmniSport Pro Diving](omnisport-pro-diving.md) and [OmniSport Pro Synchro](omnisport-pro-synchro.md): the sibling programs for the same console
- [OmniSport 2000](../equipment/swimming/timers/omnisport-2000.md): the timing console it works through
- [Hy-Tek Meet Manager](hy-tek-meet-manager.md): the meet management program it exchanges data with
- [HS-200 Horn Start](../equipment/swimming/starter/hs-200.md), [T-7000 Series Touchpad](../equipment/swimming/touchpad/t-7000.md) and [Daktronics RTOP](../equipment/swimming/relay-judging/daktronics.md): the start, finish and relay equipment it reads
- [Daktronics](../vendors/daktronics.md): the publisher
- [Software](index.md): the software overview

## References

[^manual]: [Daktronics, OmniSport 2000 Pro Swimming Software Installation and Operation Manual](https://www.daktronics.com/web-documents/customer-service-manuals/dd3109473.pdf) (DD3109473 Rev 1, 2016).
[^hytek]: Daktronics, OmniSport 2000, Pro Swimming and Hy-Tek Software Quick Guide (ED-13876 Rev 5, 19 August 2013).
[^os2000]: [Daktronics, OmniSport 2000 Timing Console Operation Manual (ED-13312 Rev 16, 2019)](https://www.daktronics.com/web-documents/customer-service-manuals/ed13312.pdf).
[^revhist]: [Daktronics, All Sport & OmniSport Revision Histories (DD3679410, Rev 06, 5 November 2024)](https://www.daktronics.com/web-documents/customer-service-manuals/dd3679410.pdf), OmniSport 2000.
[^swsupport]: [Daktronics support, Swimming Software](https://www.daktronics.com/en-us/support/components/swimming-software).
[^kbwin]: [Daktronics support, DD2485913, OmniSport Pro compatibility with Windows 8, 8.1 and 10](https://www.daktronics.com/en-us/support/kb/DD2485913).
[^kbenet]: [Daktronics support, DD2635125, Pro Swimming will not connect to an Ethernet OmniSport 2000](https://www.daktronics.com/en-us/support/kb/DD2635125).
[^kbalpha]: [Daktronics support, DD3302734, Pro Swim, Hy-Tek alpha data not showing](https://www.daktronics.com/en-us/support/kb/DD3302734).
[^kbudp]: [Daktronics support, 000011916, OmniSport 2000E will not connect to Pro Swimming](https://www.daktronics.com/en-us/support/kb/000011916).
[^kbeol]: [Daktronics support, 000014371, Wireless judges' consoles with the OmniSport 2000](https://www.daktronics.com/en-us/support/kb/000014371).

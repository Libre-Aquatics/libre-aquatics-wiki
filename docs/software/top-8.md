---
title: TOP-8
description: >-
  TOP-8 is the Omega and Swiss Timing program for the PowerTime and PowerTime II hand-held timers
  that times up to eight lanes from judges' pushbuttons, or a single finish line by bib number, in
  swimming and athletics.
updated: 2026-11-16
tags:
  - Software
  - Swimming
  - Timing
---

<!--
Research notes, TOP-8. Surfaced 2026-10-19 while building out powertime-ii.md; built out to a
full article 2026-11-16.

Manuals (all read in full; the two short ones were rendered with PyMuPDF to read the key icons):
- Swiss Timing, User Manual TOP-8, 3462.511.02, version 3.2, English, 2 sheets (6 small pages).
  Held: sources/vendors/swiss-timing/timers-consoles/swiss-timing-powertime-ii-top-8-user-manual-3462.511.02.
  PDF metadata: title "Mode d'emploi Top-8 (ANG)", made from Word on 15 September 2025, so the
  file date says nothing about the program. Verified from it: lane mode up to 8 lanes, one judge
  and pushbutton per lane; non-lane mode with one pushbutton and one judge (marathon, 1500 m as
  examples); event and heat 0-199 chosen with the up/down keys and ENTER, printed; start armed
  on entry, the ON/OFF key disarms it; the cursor goes to lane 1 at the start; lane status shows
  X while the arming delay runs, then a dash; keys 1-8 move the cursor, 0 disarms every lane,
  9 rearms every lane and drops their times; each finish prints time of day and race time; the
  screen then shows that lane's time and place, and its number appears in the status field;
  ESC once gives continue / send results / reset, ESC again returns to the selection screen with
  the heat number advanced; a stray press is cleared with lane number then the correction key,
  "?clear" prompt, ENTER clears and rearms, ESC leaves it; a double press is fixed from the
  CORRECTION screen, "buffer" entry, scrolling impulse times of day, ENTER, printed with the word
  correction, race time recalculated. Non-lane: rank shown, each armed stop impulse stored,
  displayed and printed as time of day; bib typed then ENTER prints bib with time of day and the
  race time on the next line; ON/OFF arms and disarms the finish so a photocell does not count
  passers-by. Initialization: scoreboard type rollertime (standard) or multiline (up to 8 lanes
  of numeric boards, Omega GEMINI as example); page time and non-lane settings "for Top 8 version
  3.2 or higher"; non-lane settings are automatic numbering of finishes and keeping the running
  time on the board after the first finisher; "dh run time" on also sends running time to the
  computer output. Parts table: 9-box swimming harness 3361.611, 9-input box (T&F) 3361.609.
  Refers to the general manual 3462.501 for everything else.
- Swiss Timing, Mode d'emploi TOP-8, 3462.511.01, version 3.2, French (fetched from
  https://www.swisstiming.com/pdfs/3462.511.01.pdf on 2026-11-16, not filed in sources/). PDF
  created 2 February 2010, so version 3.2 existed by then. Same content as the English edition,
  including "3.2 et plus" for page time and non-lane settings. Its parts table is longer: adds
  OIT3 pushbutton 3 m coiled 2872.003 and SCB + PC output adaptor 3361.616.
- Omega Electronics, User Manual TOP-8, 3361-511-02, version 2.0 (ManualZilla copy, original not
  obtained). Omega Electronics, Biel/Bienne. General manual 3361-501. Same two modes and the same
  procedures; page time and non-lane settings marked "version 3.0 or higher"; UNT6 given as the
  numeric-scoreboard example for multiline. Parts: 3361-611, 3361-609, OIT8 pushbutton 5 m
  2872-008, OIT3 pushbutton 3 m coiled 2872-003, SCB+PC adaptor 3361-616. Undated.
- Swiss Timing, PowerTime II General User's Manual, 3462.501.02, TIM022, v1.0 (held). Programs
  are loaded from a PC with Swiss Timing's installer (Standard, Ski, Top-8 as examples); PC line
  RS-232 9600 8N1, scoreboard line RS-422/RS-485; multiline 1-8 lines (Calypso or UNT7 as
  examples); scoreboard resolution can be set or turned off; resolution 1/1000-1 s; arming delay
  0-99 s; accessories list 3361.628 as the dual SCB and PC adaptor and 3361.611 as "swimming
  harness 1x Start, 8x Stop".
- Swiss Timing, User Manual Swim Training, 3462.502.02, v2.0 (fetched from swisstiming.com/pdfs,
  PDF created 24 February 2010): a separate PowerTime II program, now its own stub
  (powertime-swim-training.md).

Version history, from the Wayback Machine (omega-electronics.ch, hyphenated; the unhyphenated
domain searched for powertime-ii.md has nothing):
- http://www.omega-electronics.ch/sports/powertime.shtml, capture 11 May 2002 (page "last update
  24 April 2002"): TOP-8 user manual version 1.1 (file 3361-511-02_Top-8_1-1.pdf); TOP-8
  latest version 2.0, whose new feature was rearming all lanes after the finishes so that each
  lap can be timed; Standard 2.0, Ski 1.4, Dual 1.1; Program Disk 1.9 for a floppy, loaded with
  Pwtime.exe on the PC with the timer on its mains adaptor; boot program 2.3 adds a two-key
  power-on (ENTER + START) against accidental switch-on in the bag; a "PC Output protocol"
  document offered so users can write their own data-handling program.
- Capture 25 October 2002 (page "last update 17th of July 2002"; program zip PT170702.zip):
  TOP-8 3.0 listed, adding page-by-page results on the board and "auto bib" in non-lane mode;
  Dual 1.3. Version 2.1 described as fixing the serial settings at 9600,N,8,1 so that data
  handling such as Splash or Meet Manager can connect.
- Captures from February 2003 (page "last update 9th of December 2002") to August 2009: TOP-8
  user manual version 2.0 offered; TOP-8 3.0 still the latest. No 3.2 seen on the Omega pages.
- The archived manual PDFs and zips themselves were not captured.
So: 1.x before April 2002; 2.0 by 24 April 2002; 2.1 and 3.0 by 17 July 2002 (3.0 at the
latest by the October 2002 capture); 3.2 by February 2010 (French manual).

Discrepancy, flagged in the text: Omega's 2.0 manual and Omega's download page tie page time
and automatic numbering to 3.0; both Swiss Timing 3.2 editions say 3.2. The Omega page is a
dated, independent statement, so 3.0 is the better-supported reading. A plausible explanation,
not confirmed, is that 3.2 changed these options and the later manual reset the note.
Minor tension: Omega says 2.0 lets all lanes be rearmed after the finishes so laps can be
timed; the 3.2 manual says key 9 rearms every lane but drops the times already taken. Both may
be true if the dropped times stay on the printout; not tested.

Third-party documents:
- Hy-Tek Meet Manager 6 guide, omegapowertime.htm: choose Omega PowerTime as the timing
  console interface and open the COM port; RS-232 cable, phone-jack plug at the timer's left
  side and 9-pin at the PC, sold by Omega; on the timer pick PC from the send-results menu;
  results are captured in the background and fetched per race with Get Times; finish times
  only, no splits; TOP-8 must not be version 2.0, with a link to the Omega page above.
- Hy-Tek guide omegapowertime2.htm: open water module downloads PowerTime times (ESC, send
  results, PC, then ENTER on the timer after Start Download in MM).
- Splash Meet Manager 11 FAQ (October 2011): Swiss Timing Powertime, one-way serial.
- Piccolo White datasheet (10-2015): Piccolo works with a PowerTime loaded with TOP-8 for
  swimming.
- Daktronics SW-2000 manual ED-12156 Rev 14 (held): PowerTime address drawing A-118395, July
  1999, protocol 1, lines 1-8. Daktronics All Sport 5000 manual ED-11976 Rev 32 (held): code 8602
  via a Venus 7000 computer, PowerTime set to multi-line with one line. Neither names TOP-8; both
  match its multiline output.
- Swiss Timing instruction-manual list (read 2026-11-16): PowerTime II manuals General
  3462.501.01/.02/.03, Swim Training 3462.502.01/.02/.03, TOP-8 3462.511.01/.02, Standard
  3462.512.01/.02/.03, Ski & Time Trial 3462.513.01/.02/.03. No TOP-8 German edition listed. The
  older .../Instruction_Manuals/3462.511.02_PowerTime2_TOP8.pdf link now returns 404; the
  current link is https://www.swisstiming.com/pdfs/3462.511.02.pdf.

Named things and their pages: GEMINI (gemini.md), UNT6 (unt6.md), OIT8 (oit8.md) and Swim
Training (powertime-swim-training.md) stubbed 2026-11-16. Standard, Ski / Ski & Time Trial and
Dual are general or winter-sport programs outside this wiki's scope, named here only.

Not established: release date of any version earlier than 2.0; whether TOP-8 is still offered
as a download; what changed in 3.1 or 3.2; whether the PC output format of the "PC Output
protocol" document is the one Hy-Tek and Splash read.
-->

TOP-8 is a timing program for the [PowerTime](../equipment/swimming/timers/powertime.md) and
[PowerTime II](../equipment/swimming/timers/powertime-ii.md) hand-held timers, first published
by Omega Electronics and later by [Swiss Timing](../vendors/swiss-timing.md). It covers
athletics and swimming. In lane mode it takes one finish per lane for up to eight lanes, each
from a judge's pushbutton; in non-lane mode one judge records every finisher on a single line
and the operator adds bib numbers afterwards.[^top8] The timer prints every finish, can drive a
scoreboard, and sends results to a PC, where [Hy-Tek Meet Manager](hy-tek-meet-manager.md) and
[Splash Meet Manager](splash-meet-manager.md) can read them.[^top8][^hytek][^splashfaq]

## History and versions

This section traces the program's versions through Omega's download page and the manuals.

TOP-8 began as an Omega Electronics program for the original PowerTime, distributed on a
floppy program disk and loaded into the timer from a PC.[^omega02] In April 2002 Omega's
download page listed version 2.0 as current. Its new feature let the operator rearm every lane
after the finishes so that each lap could be timed, and the matching user manual was then at
version 1.1.[^omega02] By the page's update of July 2002 it listed version 3.0, with results shown page by page
on the scoreboard and automatic bib numbering in non-lane mode. It also recorded a version 2.1
that fixed the serial settings at 9600 baud, no parity, 8 data bits and 1 stop bit, so that
Splash or Meet Manager could connect.[^omegaoct02] From December 2002 Omega offered version 2.0
of the user manual, document 3361-511-02, which describes the same two modes.[^omega03][^top8old]

Swiss Timing carried the program over to the PowerTime II. Its manual, document 3462.511, is at
version 3.2 in both the English (`.02`) and French (`.01`) editions; the French file dates from
February 2010.[^top8][^top8fr] The manuals disagree on when two options arrived. Omega's manual
says the scoreboard page time and the non-lane settings need version 3.0 or later, and Omega's
2002 download page lists them under 3.0; both Swiss Timing editions say 3.2.[^top8old][^omegaoct02][^top8][^top8fr]
The dated Omega page supports 3.0.

## Role in the timing system

This section places TOP-8 among the equipment it works with.

TOP-8 is one of several programs for the PowerTime family. The operator chooses which to load,
and Swiss Timing's installer copies it from a PC over the timer's serial cable.[^general] Other
programs offered for the timers include Standard and Ski on both models, Dual on the
original, and [Swim Training](powertime-swim-training.md) on the PowerTime II, which is meant
for practice rather than races.[^omega02][^stlist]

For a swimming race the timer takes its start from a start system or its own START/STOP key and
its finishes from judges' pushbuttons. The pushbuttons plug into the
[PowerTime swimming harness](../equipment/swimming/deck-cabling/powertime-swimming-harness.md)
(`3361.611`), which joins the timer's extension socket; athletics uses a nine-input box
(`3361.609`) instead.[^top8][^general] The manuals list the
[OIT3 pushbutton](../equipment/swimming/semi-automatic/pushbutton/swiss-timing.md) on a 3 m
coiled cable (`2872.003`), and Omega's edition adds the
[OIT8](../equipment/swimming/semi-automatic/pushbutton/oit8.md) on a 5 m cable
(`2872.008`).[^top8old][^top8fr] None of the TOP-8 manuals mentions touchpads; the inputs
they describe are pushbuttons, and a photocell for athletics.[^top8][^top8old]

## Setting up a race

This section covers the steps before the start in both modes.

Most settings are shared with the timer's other programs and are described in the general
manual: contact types, an arming delay of 0–99 s, resolution from 1/1000 s to 1 s, the rounding
rule, the printer, and the scoreboard format.[^general][^top8] TOP-8 adds a few of its own,
covered in the scoreboard section below.

Each race opens on a selection screen. The operator sets the event and heat, each from 0 to 199,
moving between the two with the arrow keys, and confirms with ENTER. The choice is printed, and
the race screen replaces the selection screen.[^top8] The start input is now armed. The ON/OFF
key takes it out of the armed state if needed.[^top8]

## Lane mode

This section describes the mode used for races in lanes, such as a 100 m.

The race screen shows the event and heat, a status mark for each of the eight lanes, the start
status, the running time and a cursor.[^top8] When the start arrives the clock runs on the
display and the cursor drops to lane 1. Each lane shows an X while the arming delay runs; once
the delay ends the X becomes a dash and the lane will accept a finish.[^top8]

A press on a lane's input records that lane's finish. The printer logs the time of day and the
race time, and the display shows the lane's time and place, with the lane's number replacing
the dash in the status line.[^top8] During the race the number keys act on the lanes:

| Key | Effect |
|---|---|
| 1–8 | Move the cursor to that lane |
| 0 | Disarm every lane |
| 9 | Rearm every lane and discard their times |

Once every lane has a time, one press of ESC offers three choices: return to the race, send the
results out, or clear the race. A second press of ESC goes back to the selection screen with
the heat number already advanced by one.[^top8]

## Non-lane mode

This section describes the mode for one finish line and one judge, such as a marathon or a
1500 m.

The operator picks the event and heat as in lane mode. After the start the clock runs, the
cursor sits on the first result line, and the screen shows the place the next finisher will
take.[^top8] Each impulse on the armed stop input is stored, shown and printed as a time of day.
The operator then types the bib number for the time under the cursor and presses ENTER; the
printer adds a line with the bib and time of day, followed by that competitor's race
time.[^top8]

The ON/OFF key arms and disarms the finish line during the race. Swiss Timing suggests
disarming it while no competitor is due, so that a photocell on the line does not record
other people crossing it.[^top8] From version 3.0 (3.2 in Swiss Timing's manual) two settings
apply to this mode: whether each finish is numbered automatically, and whether the running
time stays on the scoreboard after the first finisher.[^top8][^omegaoct02]

## Corrections

This section covers the two faults the manual describes and how each is repaired.

If a judge presses by mistake after the start, the operator keys that lane's number and then
the correction key. The bottom line of the display asks "?clear"; ENTER deletes the lane's
time and arms it again, and ESC leaves it unchanged.[^top8]

If a judge presses twice and the second press is the true finish, TOP-8 has already used the
first as the official time. The second press is kept in the store of received impulses. From the correction key the operator opens the CORRECTION screen, chooses the buffer, and
scrolls through the stored times of day until the right one appears, then confirms it with
ENTER. The timer recalculates the lane's race time, and the printer records the change marked
as a correction.[^top8] The PowerTime II also marks every corrected or hand-entered time with an
asterisk on the printout.[^general] In non-lane mode the same correction screen applies.[^top8]

## Scoreboard and data output

This section covers the program's scoreboard settings and how results reach a computer.

The PowerTime II has a scoreboard line and a separate RS-232 PC line, which runs at 9600 baud,
8 data bits, 1 stop bit and no parity.[^general] TOP-8 offers two scoreboard types:

- RollerTime, which Swiss Timing calls its standard scoreboard protocol.
- Multiline, which shows up to eight lanes at once on numeric boards. Swiss Timing's manual
  gives its [GEMINI](../equipment/common/scoreboard/gemini.md) board as the example, Omega's
  manual the [UNT6](../equipment/common/scoreboard/unt6.md), and the PowerTime II general manual
  the [Calypso](../equipment/common/scoreboard/calypso.md).[^top8][^top8old][^general]

Where the board has fewer than eight lines, a page time setting cycles through the results one
page at a time and sets how long each page stays up.[^top8] A "dh run time" setting, when on,
sends the running time to the PC output as well as to the board.[^top8]

Equipment from other makers also takes PowerTime output. Daktronics drew the address settings for its SW-2000 lane displays to take a PowerTime in July 1999, and
its [All Sport 5000](../equipment/common/scoreboard-control/all-sport-5000.md) controller reads
PowerTime data through a Venus 7000 computer, with the timer set to a one-line multiline
board.[^sw2000][^as5000] Swiss Timing lists its
[Piccolo](../equipment/common/scoreboard/piccolo.md) swimming board for use with a PowerTime
running TOP-8.[^piccolo]

Results go to a PC through the send-results choice at the end of a race.[^top8] In 2002 Omega
also offered a description of the PC output so that users could write their own
data-handling programs.[^omega02]

## Meet-management software

This section lists the meet programs documented to read TOP-8 results.

[Hy-Tek Meet Manager](hy-tek-meet-manager.md) treats the PowerTime as a timing console. It uses
an RS-232 cable with a phone-jack plug at the timer and a 9-pin plug at the computer. After each
race the operator chooses PC under send results on the timer, Meet Manager stores the data as
it arrives, and the operator fetches each race's times when ready.[^hytek] Only finish times
transfer, not splits. Hy-Tek warns that TOP-8 version 2.0 will not work and points users to a
later version.[^hytek] Omega's note that version 2.1 fixed the serial settings for Splash and
Meet Manager is the likely reason.[^omegaoct02] Meet Manager's open water module can also
download times from the timer.[^hytekow]

[Splash Meet Manager](splash-meet-manager.md) lists the Swiss Timing PowerTime among its timing
interfaces, over a one-way serial link.[^splashfaq] Neither program's guide names the PowerTime
model or the TOP-8 version it was tested with.

## See also

- [PowerTime II](../equipment/swimming/timers/powertime-ii.md): the current timer that runs it
- [PowerTime](../equipment/swimming/timers/powertime.md): the original Omega timer
- [Swim Training](powertime-swim-training.md): the PowerTime II's training program
- [PowerTime swimming harness](../equipment/swimming/deck-cabling/powertime-swimming-harness.md):
  the eight-lane pushbutton harness
- [Software](index.md): the software overview
- [Swiss Timing](../vendors/swiss-timing.md): the publisher

## References

[^top8]: [Swiss Timing, User Manual TOP-8 (3462.511.02, version 3.2)](https://www.swisstiming.com/pdfs/3462.511.02.pdf).
[^top8fr]: [Swiss Timing, Mode d'emploi TOP-8 (3462.511.01, version 3.2)](https://www.swisstiming.com/pdfs/3462.511.01.pdf) (French, 2010).
[^top8old]: [Omega Electronics, User Manual TOP-8 (3361-511-02, version 2.0)](https://manualzilla.com/doc/5821748/user-manual-top-8) (ManualZilla copy).
[^general]: [Swiss Timing, PowerTime II General User's Manual (3462.501.02, version 1.0)](https://www.swisstiming.com/pdfs/3462.501.02.pdf).
[^stlist]: [Swiss Timing, Instruction manuals](https://www.swisstiming.com/download/instruction-manuals/), PowerTime II.
[^omega02]: [Omega Electronics, Sports downloads: Power Time](https://web.archive.org/web/20020511021258/http://www.omega-electronics.ch:80/sports/powertime.shtml) (April 2002, archived).
[^omegaoct02]: [Omega Electronics, Sports downloads: Power Time](https://web.archive.org/web/20021025204243/http://www.omega-electronics.ch/sports/powertime.shtml) (July 2002, archived).
[^omega03]: [Omega Electronics, Sports downloads: Power Time](https://web.archive.org/web/20030224061121/http://www.omega-electronics.ch/sports/powertime.shtml) (December 2002, archived).
[^hytek]: [Hy-Tek, Meet Manager 6 guide, Omega PowerTime](https://hytek.active.com/user_guides_html/swmm6/omegapowertime.htm).
[^hytekow]: [Hy-Tek, Meet Manager 6 guide, Omega Power Time open water download](https://hytek.active.com/user_guides_html/swmm6/omegapowertime2.htm).
[^splashfaq]: [Splash Software, Splash Meet Manager 11 FAQ](https://wiki.swimrankings.net/images/4/45/Meet_Manager_FAQ.pdf) (October 2011).
[^piccolo]: [Swiss Timing, Omega Piccolo White swimming scoreboard datasheet (10-2015)](https://www.swisstiming.com/fileadmin/Resources/Data/Datasheets/DOCM_AQ_PiccoloWhite_1015_EN.pdf).
[^sw2000]: Daktronics, SW-2000 Series 10" Numeric Digit Display Manual (ED-12156, Rev 14, May 2015), drawing A-118395.
[^as5000]: Daktronics, All Sport 5000 Series Control Console Operation Manual (ED-11976, Rev 32, November 2024), track.

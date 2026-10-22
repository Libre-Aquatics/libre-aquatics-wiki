---
title: Daktronics All Sport 5000
description: >-
  The All Sport 5000 series is the Daktronics keyboard console for fixed-digit scoreboards,
  released in 2000, which runs water polo, a practice segment timer and some twenty other
  sports through interchangeable keypad inserts.
tags:
  - Equipment
  - Scoring
  - Water polo
infoboxTitle: All Sport 5000
infobox:
  - label: Manufacturer
    value: Daktronics
  - label: Part number
    value: '`0A-1196-0001` (5010); `0A-1196-0005` (5020); `0A-1196-0068` (5012)'
  - label: Type
    value: Scoreboard control console
  - label: Models
    value: All Sport 5010 (120 V AC), 5020 (230 V AC), 5012 (12 V DC)
  - label: Display
    value: 2-line, 16-character LCD
  - label: Connection
    value: Three 1/4 in phone current-loop outputs; 25-pin main port; optional 2.4 GHz radio
  - label: Power
    value: 120 or 230–240 V AC, or 12 V DC; 5 W
  - label: Introduced
    value: '2000'
  - label: Manual
    value: '[ED-11976](https://www.daktronics.com/web-documents/customer-service-manuals/ed11976.pdf)'
---

<!--
Research notes, Daktronics All Sport 5000. Stub created October 2026 while building out
pc-2001.md; built out 2026-10-21.

Held sources, read:
  - sources/vendors/daktronics/timers-consoles/daktronics-all-sport-5000-series-control-
    console-operation-manual-p1196-ed-11976 (ED-11976 Rev 32, 4 November 2024, copyright
    2003-2024). Read: introduction and safeguards; Basic Operation (whole); Segment Timer
    (whole); Water Polo (whole); the track external timer codes; the event counter and
    pitch-and-speed notes on RTD; Appendix A drawings (page images rendered with PyMuPDF for
    the two that the extraction drops); Appendix B insert list; Appendix C code tables (skimmed
    for aquatic boards, none listed beyond the segment timers); Appendix E bootload procedure
    ED-18728 Rev 3 (8 February 2018). Other sport chapters skimmed only for insert and code
    numbers.
    Facts used:
    - Face: 2x16 LCD, number and menu keypads, horn and clock keys with LEDs, insert slot on the
      left. Inserts slide in from the left and pull out by a tab; a printout of the Appendix B
      drawing stands in for a lost insert. Dotted keys want a number then ENTER; arrow keys
      light a team indicator; +1/+2/+3/-1 keys step a field.
    - Insert list (22 rows): water polo 0G-178439, segment timer LL-2475, team name LL-2441
      (printed on the keypad of newer consoles), basketball LL-2433, hockey/lacrosse/handball
      LL-2436, and so on. Track insert LL-2439 with code label sheet LL-2458.
    - Start-up: rear power switch; self-test shows AS-5000 version and standard software number
      ED-11544; resume-game prompt with last code; SELECT CODE (four digits); radio prompt if a
      transmitter is fitted. Code 99 is the multi-purpose timer (2-, 4-, 6-digit, also time of
      day); code 100 the dedicated segment timer for 2- and 6-digit displays; codes 0000 and 0001
      are test codes (revision history).
    - Standard keys: START/STOP (green LED), ENTER/YES, CLEAR/NO (escape), EDIT, MENU, SET MAIN
      CLOCK (current, period, break, overtime, pre-game, post-game), COUNT UP/DOWN, AUTO HORN
      (amber LED), HORN.
    - Menu: new game, new code, dimming 0-9 in 10% steps (outdoor LED only; indoor LED and
      incandescent have one 50% level), display menu (segment timer, blank board, radio sync,
      clock captions, RTD offset of 5000/10000/15000 for several consoles feeding matrix
      displays, radio test, driver download), time of day (12/24 h, show TOD instead of game
      clock, optionally blank the rest).
    - Switch output (relay): 0 disabled, 1 clock = 0 (default), 2 clock stopped, 3 main horn.
    - Remote switches: main clock start/stop/horn switch on J4 (rocker plus horn button);
      shot clock start/stop switch on J7 (rocker plus reset button(s); reset loads the reset
      value and holds; release restarts). Part numbers from DWG-124686 and DWG-124688: main
      clock switch 0A-1166-0003; shot clock control 0A-1196-0031 (replaced 0A-1166-0004; the
      revision date is unclear because the extraction scrambles the revision blocks); dual 1/4 in phone J-box with shunt jack
      0A-1196-0013 (MAIN and AUXILIARY jacks; a console in MAIN runs both boards, a second
      console in AUXILIARY splits them); signal cords W-1340 10 ft, W-1236 20 ft, W-1238 30 ft,
      W-1237 50 ft, W-1381 100 ft; signal cable W-1077 one pair 22 AWG shielded.
    - DWG-102142 "Rear View, A/S 5010 Connector Assignments", drawn 27 April 1998, rev 3
      5 October 2001 adds the 5012. Rear panel: J1-J3 1/4 in phone scoreboard outputs (tip +,
      ring -, sleeve ground, current loop); J4 6-pin start/stop/horn (switch inputs 1-2, relay);
      J5 computer I/O port (not used on the model drawn); J6 25-pin main output and input port
      (RS-232 receive and transmit, current loop outputs 1-4, current loop input, switch input,
      relay, 10 V AC/DC input); J7 6-pin shot/play clock (switch inputs 3-5); J8 switch inputs
      (not used); S1 power switch. Usual tasks: SW1 main clock start/stop, SW2 horn, SW4 shot
      clock stop, SW5 shot clock reset, CL OUT 1-3 scoreboard, CL OUT 4 data stream. Model
      table: 5010 120 V standard programming, 5020 230 V standard programming. Label examples:
      5010 assy 0A-1196-0001, 120 V AC, 5 W; 5012 assy 0A-1196-0068, 12 V DC, power and
      current-loop signal through P41; 5020 assy 0A-1196-0005, 230 V AC via IEC inlet J41.
      The assembly numbers are from the drawing's example labels; whether later consoles kept
      them is unverified.
    - Manual text: 8 ft three-prong cord to a 120 or 240 VAC outlet; optional battery pack;
      fuses 1/8 A 250 V (120 V models) and 1/16 A 250 V (240 V models); some consoles have
      internal battery backup. The drawing says 230 V; the text says 240 V. Flagged in text.
    - DWG-128429 current loop output specs (drawn 26 February 2000, rev 3 October 2021): up to
      2000 ft from the console to the last display; up to six parallel loads on one output;
      redriven runs up to 2000 ft each and up to six redrives for clocks in one venue; series
      wiring allowed but not preferred; with a radio fitted, output 1 feeds the radio so wired
      boards should hang off output 2.
    - Radio: Gen IV/V/VI; see gen-vi-radio.md. Radio diagnostics from v4.0.9.
    - Water polo: insert 0G-178439, code 4498, drawings DWG-178439 (insert) and DWG-124689
      (hockey block diagram, shared). Keys: TIME OUT ON/OFF (official's timeout clock), PENALTY
      TIME, ENABLE/DISABLE PENALTY CLOCKS (EN/DS on LCD), PERIOD +1, SHOT TIME (current, reset 1,
      reset 2), RECALL SHOT TIME, SCORE +1/-1, team TIME OUT (full and partial), PLAYER PENALTY
      START (cap number, penalty number; starts at once), DELETE PENALTY, CLEAR ALL PENALTIES.
      Roster menu: team name to 15 characters, abbreviation to 10, via the team name insert.
      Settings: tenths under a minute; period, break, overtime lengths; shot reset 1 (used by
      the remote reset button); sync shot with main; auto blank when shot time >= game time
      (and resets/stops it so the horn cannot sound); shot zero stops main; default penalty
      time; number and length of full timeouts; show timeout on main clock; shot horn combined
      or independent; switch output. Defaults: tenths yes, period 15:00, break 10:00, OT 5:00,
      shot reset 0:35, sync yes, auto blank yes, zero stops main no, penalty 0:20, one full
      timeout of 1:00, show on main no, horn independent, switch output clock = 0.
      Timeouts for overtime must be entered by hand.
    - Segment timer: insert LL-2475, drawing DWG-129357; 99 segments; first and last segment;
      interval time between segments (can show on guest score digits; segment number flashes
      during it); copy range; auto stop at each / at last segment; reset to first; reset current;
      current +1; warning time (segment number flashes); values kept through power-off and
      shared across sports. Defaults first 1, last 99, warning 00:00, display interval no,
      stop each no, stop at last yes. Reached from any sport's display menu with the clock
      stopped, or code 100 on dedicated displays. The manual's example: 5-minute segments on
      1-10 for one sport and 10-minute on 11-20 for another.
    - External timer codes (track): 8601 manual; 8602 PowerTime via a Venus 7000 at 9600 baud
      (PowerTime set to multi-line, 1 line); 8603 OmniSport 1000 or 6000 at 12800 baud; 8604
      Hawkeye or FinishLynx at 9600. Not linked in text beyond PowerTime and the OmniSports.
    - RTD: real-time data goes out in the Enhanced RTD form used by Venus 4600 and 7000 (a few
      sport codes can also send the older Venus 1500 form).
    - ED-18728 bootload: the console relays a field update from DakLoader2 on a PC to MultiCast
      (0P-1388-0100) or Gyrus (0A-1782-0100) scoreboard drivers; needs All Sport 5000 v4.1.5+
      (or 5500 v1.0.5+); PC to J5 COMPUTER PORT (9-pin cable W-1267) or J6 I/O PORT (9-to-25
      cable W-1249); USB-serial adapter A-2221.
    - DSTI (Daktronics Scoring-Timing Interface, ED-13009) can feed stats into basketball,
      football, volleyball and baseball codes and lock the matching keys. Not used in text.
    - Appendix C has a table of 5000 codes that replace "2500 series" codes; whether 2500 was a
      console or a board series is not clear from the manual (the revision history speaks of
      2500 series basketball boards). Not used in text.
  - sources/vendors/daktronics/timers-consoles/daktronics-all-sport-omnisport-revision-
    histories-dd-3679410 (DD3679410 Rev 06, 2024). All Sport 5000: 1.0 3 January 2000;
    1.0.1 added battery-backup indication and 50 Hz time of day; 1.0.5 March 2000 track;
    1.0.6 17 March 2000 segment timer; 1.1.0 2 May 2000 tennis and pitch-speed; 2.0.0
    15 January 2003 water polo code 4498 and a water polo shot clock test, plus Gen IV radio
    group/channel; 2.1.0 2 February 2005 water polo gains three penalty timers on two added driver
    addresses; 2.1.1 10 March 2005 horn command bit sent with the water polo shot clock horn;
    2.1.3 9 August 2005 MS-2013 output for water polo; 2.2.9 8 August 2008 mode to relay MDP
    data from COM1 over the radio; 2.3.0 11 November 2008 separate water polo shot clock horn;
    4.0.0 30 March 2011 RTD offset, serial EEPROM; 4.0.1 May 2011 a test code (201) for checking swim
    modules; 4.0.2 August 2011 shot clock tenths; 4.0.3 February 2012 eight broadcast groups;
    4.0.9 March 2014 radio diagnostics; 4.1.5 August 2015 driver download; 4.2.5 May 2019
    All Sport Pro and K-Stats support; latest listed 4.3.2, 16 October 2024. Standard software
    ED-11544, a second build ED-11543. All Sport 5500: 1.0.0 8 January 2007; Dakloader driver
    download 1.0.5 June 2007; 4.0.9 March 2023.
Web, October 2026:
  - Daktronics All Sport 5000 support page (daktronics.com/en-us/support/controllers/
    all-sport-5000): "designed for intermediate and large scoring systems"; "the most common
    control console in use" (vendor claim, quoted in text); replacement antennas shared with the
    3000, 1600 and OmniSport 2000.
  - Daktronics discontinued-products page: All Sport 2000 1986-1995 (ED-10102), All Sport 3000
    2000-2008 (ED-12126), All Sport 5500 2006-2024 (ED-16809), All Sport Junior 1993-1998,
    All Sport 100 2003-2020, All Sport CG 2006-2024; WP-2101 and WP-2102 LED water polo boards
    1999-2014 "Gen II" (ED-13769). The All Sport 5000 is not listed. A search snippet gave the
    5500 as 2006-2022; the page itself, fetched, says 2006-2024.
  - Daktronics WP-2101 and WP-2102 product pages: water polo scoreboard and penalty module,
    PanaView digits, All Sport 5000 named as the controller.
  - Daktronics KB DD2482613: an All Sport 5000 or 3000 can run a ColorSmart board with an
    MCAST driver in red only, unqualified; clock and score known to work, horn does not, shot
    clock unknown, may void warranty.
  - Sports Video Group, 2 September 2025: All Sport Pro (browser software) extended to select
    fixed-digit boards, which had relied on All Sport consoles. Does not name the 5000.
  - scorebox-consoles 1.2.0 (PyPI, December 2021, third-party Python library): reads an All
    Sport 5000 from the I/O port J6 through a DB25-to-DB9 cable; lists water polo among its
    sports. Independent corroboration that J6 carries the data stream; not cited.
  - The Daktronics blog post "Introduction to the All Sport 5000" points to a training video;
    not used.
Still to research: the ED-12126 (All Sport 3000) and ED-16809 (5500) manuals; the battery pack
part number; the console's dimensions and weight (none in any held source); whether the 5100
named in Appendix C (code 8000) is a separate model; the All Sport 2000 lineage.
-->

The All Sport 5000 series is a Daktronics keyboard console that operates fixed-digit
scoreboards, shot clocks and timers.[^manual] Its first software release is dated January
2000.[^revhist] One console covers many sports. The operator slides a printed insert for the
sport over its keypad and enters a four-digit code that matches the board.[^manual] Water polo
was added in 2003.[^revhist] A segment timer for timed practice blocks has been part of the
console since 2000, and it can also feed pace clocks such as the
[PC-2001](../pace-clock/pc-2001.md).[^revhist][^kbtenths] Daktronics' support page calls the
series "the most common control console in use".[^support]

## Role in the scoring system

This section places the console between the operator and the board; the
[scoreboard control overview](index.md) covers the other ways a board is fed.

The All Sport 5000 is itself the data source. Nothing upstream feeds it in normal use: the
scorer keys in goals, periods and penalties, and the console keeps the game clock, shot clock
and penalty timers and sends the result to the board over a signal cable or by
radio.[^manual] A timing console such as the
[OmniSport 2000](../../swimming/timers/omnisport-2000.md) works the other way, taking its
results from touchpads. Daktronics names the
All Sport 5000 as the controller for its WP-2101 water polo scoreboard and the WP-2102 penalty
module that attaches to it.[^wp2101][^wp2102]

The console also has inputs. Remote switches can start and stop its clocks, and in track it
can take results from an external timer such as an [Omega PowerTime](../../swimming/timers/powertime.md)
or a Daktronics [OmniSport 1000](../../swimming/timers/omnisport-1000.md) or
[OmniSport 6000](../../swimming/timers/omnisport-6000.md).[^manual]

## History and models

This section sets out the console's dates and the models built under the name.

The revision history starts the All Sport 5000 software at version 1.0 on 3 January 2000, with
the segment timer added that March.[^revhist] The rear-panel drawing is older: it was first drawn in
April 1998, for the All Sport 5010.[^manual] Releases have continued since, and version 4.3.2 of October 2024 is the latest the history records.[^revhist]

Three models appear on the rear-panel drawing:[^manual]

- All Sport 5010, for 120 V AC mains.
- All Sport 5020, for 230 V AC mains, with a detachable IEC power inlet.
- All Sport 5012, for 12 V DC. This one takes power and returns its current-loop signal
  through a single cable. It was added to the drawing in October 2001.

Daktronics built other consoles alongside it. The [All Sport 3000](all-sport-3000.md) was made
from 2000 to 2008, and the [All Sport 5500](all-sport-5500.md), for Daktronics' ColorSmart
scoreboards, from 2006 to 2024.[^discontinued] The 5000's wiring drawings were revised to cover
the 3000 in April 2000 and the 5500 in August 2011.[^manual] The smaller
[All Sport 1600](all-sport-1600.md) followed in December 2000.[^revhist] Unlike the 3000 and
the 5500, the All Sport 5000 does not appear on Daktronics' list of discontinued products, and its
support page remains current as of 2026.[^discontinued][^support] From 2019 the console
supports [All Sport Pro](../../../software/all-sport-pro.md), the browser-based scoring software
that Daktronics extended to some fixed-digit boards in 2025.[^revhist][^svg]

## Design and hardware

This section describes the console's face, its sport inserts and its rear panel.

The face carries a two-line, 16-character LCD, a number pad, menu and arrow keys, the horn and
clock keys with LED indicators, and an opening on the left for the sport insert.[^manual] The
LCD normally shows the game clock and its direction on the top line and the two scores
below.[^manual] An insert is a printed overlay that labels the keys for one sport; pressing a
labelled key usually changes the board at once. Keys marked with a dot ask for a number
followed by ENTER. Keys with arrows light an indicator for the team the arrow points to. Keys
marked +1, +2, +3 or -1 step a field up or down.[^manual] If an insert is lost, a printout of
its drawing from the manual's appendix can serve until a replacement comes.[^manual]

The manual lists 22 inserts. The aquatic ones are:[^manual]

| Insert | Part | Code |
|---|---|---|
| Water polo | `0G-178439` | 4498 |
| Segment timer | `LL-2475` | Reached from any sport, or 100 for dedicated displays |
| Team name | `LL-2441` | Used inside a sport's roster menu |

Newer consoles print the team-name layout on the keypad itself, so no insert swap is
needed.[^manual]

The console runs from an 8 ft (2.44 m) three-prong cord. The manual gives the outlet as 120 or
240 V AC and states fuse ratings for each voltage, while the rear-panel drawing labels the
international model 230 V AC.[^manual] An optional external battery pack is available, and some
consoles have internal battery backup; from its first release the software shows a message when
mains power is lost.[^manual][^revhist] The drawing gives each model a maximum draw of
5 W.[^manual] The game in progress is kept through a power loss. At switch-on the console
offers to resume the last game under its previous code.[^manual]

The rear panel has these connectors:[^manual]

| Jack | Form | Purpose |
|---|---|---|
| J1, J2, J3 | 1/4 in phone | Scoreboard outputs 1–3 (current loop) |
| J4 | 6-pin modular | Main clock start/stop and horn switch; relay output |
| J5 | Port | Computer port (fitted only on some consoles) |
| J6 | 25-pin | Main port: RS-232, current-loop outputs 1–4, a current-loop input, relay, low-voltage power input |
| J7 | 6-pin modular | Shot or play clock start/stop and reset switch |
| S1 | Rocker | Power |

## Operation

This section covers the functions common to every sport code.

At switch-on the console runs a self-test and shows its software version. It then offers the
last game. Declining leads to a code prompt, and a console with a radio then asks which
broadcast group and channel to use.[^manual] START and STOP run the main clock. SET MAIN CLOCK edits
the running time and, on further presses, the stored period, break, overtime, pre-game and
post-game lengths; selecting one loads it into the clock. COUNT UP/DOWN chooses which way the clock counts,
AUTO HORN sounds the horn when a period ends, and HORN sounds it by hand. EDIT followed by
another key corrects that field, and CLEAR/NO backs out of an entry.[^manual]

The menu holds settings shared by most sports:[^manual]

- New game, which clears the current game, and new code, which changes sport.
- Dimming in ten steps. The steps apply to outdoor LED boards; indoor LED and incandescent
  boards have a single 50% level.
- A display menu, which starts the segment timer, blanks the board, sets clock captions, sets an
  RTD offset and opens the radio tests.
- Time of day, in 12- or 24-hour form, which can replace the game clock on the board.

A relay, the switch output, can drive outside equipment. It can stay open, close when the
main clock hits zero (the default), close while the clock is stopped, or close while the
main horn sounds.[^manual] Code 99 turns the console into a general count-up or count-down
timer for 2-, 4- and 6-digit displays.[^manual]

## Water polo

This section covers the water polo program, code 4498.

The water polo program was added in version 2.0.0, released in January 2003. Later releases
added two driver addresses carrying three penalty timers (February 2005), output for a
further board model (August 2005) and a choice of a separate shot clock horn (November
2008).[^revhist]

The water polo insert carries keys for:[^manual]

- score up or down and period up;
- team timeouts, full and partial, which count down the team's allowance and run a timeout
  clock, and a separate key for an official's timeout;
- the shot clock: show or edit its current time and its two reset values, and recall the time
  left before the last reset;
- penalties. One key starts a penalty timer at once and then takes the player's cap number and
  a penalty number. Others delete one penalty or clear a team's penalties, and penalty clocks can
  be set to run or not run with the main clock.

For boards with team-name displays, a roster menu stores each
team's name (15 characters at most) and a short form (10 at most).[^manual]

The settings menu decides how the clocks relate to each other:[^manual]

- Tenths: below one minute, a counting-down game clock shows tenths of a second.
- Sync with main: the shot clock stops and restarts with the game clock. Otherwise it runs only
  from the remote shot clock switch.
- Auto blank: the shot clock goes blank once its time is not less than the game time, and it
  is reset and stopped so its horn cannot sound by accident.
- Zero stops main: an expired shot clock also halts the game clock.
- Shot clock horn: sounds by itself or together with the main horn.
- Timeouts: how many full timeouts each team has and how long they last, and whether the
  timeout clock appears on the board's clock digits. Overtime allowances are entered by hand.

The factory settings are 15-minute periods, a 10-minute break, 5-minute overtime, a 35-second
shot reset, a 20-second penalty and one full timeout of one minute per team.[^manual] The manual
gives them as defaults, with a table for recording an installation's own values, and does not
tie them to any rulebook.[^manual] The remote shot clock switch loads the first reset
value when its reset button is pressed and holds it until the button is released.[^manual]

## Segment timer

This section covers the practice timer that every sport code can reach.

The segment timer counts down a series of up to 99 stored segments, with an optional interval
between them.[^manual] The operator sets a first and a last segment, so that one range can hold
one team's practice plan and another range a different plan. The manual's example puts
5-minute blocks on segments 1–10 and 10-minute blocks on 11–20.[^manual] At the end of the
range the timer goes back to the first segment and either waits or starts again, as the
auto-stop setting dictates. It can also be set to pause after every segment. A copy-range key fills a
block of segments with one time, and a warning time makes the segment number flash as a block
nears its end.[^manual] The stored segments survive power-off and are shared by every
sport.[^manual]

On a scoreboard the timer is opened from the sport's display menu while the clock is stopped.
Displays built only for segment timing use code 100 instead.[^manual] The segment timer takes
whole seconds. To time drills in tenths on a PC-2001, Daktronics advises running the main clock
under a sport code with tenths enabled.[^kbtenths]

## Connections

This section covers the wired and wireless links to displays and the other ports.

Each scoreboard output is a current loop on a 1/4 in phone jack. Daktronics recommends one
pair of 22 AWG shielded cable per board, and sells signal cords of 10 to 100 ft from console to
wall box.[^manual] Its output specification allows 2000 ft of cable from the console to
the farthest display and up to six displays in parallel on one output. Display drivers can
re-send the signal for longer runs.[^manual] A
[dual phone-jack junction box](daktronics-dual-phone-jack-junction-box.md) with MAIN and
AUXILIARY jacks lets one console drive a main and an auxiliary board together. A second console
plugged into the AUXILIARY jack runs the auxiliary board on its own.[^manual]

The [main clock switch](daktronics-main-clock-switch.md), a rocker with a horn button, plugs
into J4. The [shot clock control](daktronics-shot-clock-control.md), a rocker with reset
buttons, plugs into J7.[^manual] Both let a second official run a clock away from the
console.[^manual] An [RC-200](../../diving/rc-200.md) base station plugged into either jack lets
the RC-200 handheld do the same without a cable: on J4 its horn key sounds the main
horn.[^rc200]

With a radio transmitter fitted, the console talks to receivers in the boards over the
Daktronics [Gen VI radio](gen-vi-radio.md) link, or the Gen IV and Gen V links before it. When
a radio is fitted, output 1 also feeds the transmitter, so further wired boards go on output
2.[^manual] Radio diagnostics arrived in version 4.0.9 of March 2014.[^revhist] Channel and
broadcast-group setup and the radio tests are described on the Gen VI radio page.

The console sends real-time data in Daktronics' [Enhanced RTD](../../../software/ertd.md) form
for [Venus](../../../software/venus.md) display systems. An RTD offset separates the data of
several consoles feeding the same matrix display.[^manual] A computer on the J5 or J6 port can
also use the console to load new firmware into some scoreboard drivers, from version 4.1.5
(August 2015).[^bootload][^revhist] Daktronics says the console can run a ColorSmart board in red
only, as an unsupported fallback: the clock and score work, the horn does not, and how the shot
clock behaves is unknown.[^kbcolor]

## Specifications

| | |
|---|---|
| Manufacturer | Daktronics, Brookings, South Dakota[^manual] |
| Models | 5010 (120 V AC), 5020 (230 V AC), 5012 (12 V DC)[^manual] |
| Display | 2 lines × 16 characters, LCD[^manual] |
| Power | 120 or 240 V AC per manual text, 230 V AC per drawing; 12 V DC (5012); 5 W[^manual] |
| Scoreboard outputs | Three current-loop outputs on 1/4 in phone jacks, a fourth on the main port[^manual] |
| Cable run | 2000 ft to the last display; six parallel loads per output[^manual] |
| Remote inputs | Main clock and horn (J4); shot or play clock and reset (J7)[^manual] |
| Relay | One switch output, four modes[^manual] |
| Data | RS-232 and Enhanced RTD on the main port[^manual] |
| Radio | Optional; Gen IV, Gen V and Gen VI receivers[^manual] |
| Segment timer | 99 segments[^manual] |
| First software release | 3 January 2000 (version 1.0)[^revhist] |

## Part numbers and accessories

This section lists the parts the manual names.

- `0A-1196-0001`, `0A-1196-0005` and `0A-1196-0068`, the assembly numbers shown on the
  drawing's labels for the 5010, 5020 and 5012.[^manual]
- `0G-178439`, water polo insert; `LL-2475`, segment timer insert; `LL-2441`, team name
  insert.[^manual]
- `0A-1166-0003`, main clock start/stop/horn switch.[^manual]
- `0A-1196-0031`, shot clock control, which replaced `0A-1166-0004`.[^manual]
- `0A-1196-0013`, dual 1/4 in phone junction box with shunt jack.[^manual]
- `W-1340`, `W-1236`, `W-1238`, `W-1237` and `W-1381`, signal cords of 10, 20, 30, 50 and
  100 ft.[^manual]
- `W-1077`, one-pair 22 AWG shielded signal cable.[^manual]
- `W-1267` (9-pin to 9-pin) and `W-1249` (9-pin to 25-pin), serial cables for driver
  updates; `A-2221`, USB-to-serial adapter.[^bootload]

## See also

- [All Sport 1600](all-sport-1600.md), [All Sport 3000](all-sport-3000.md) and
  [All Sport 5500](all-sport-5500.md): other All Sport consoles
- [Gen VI radio](gen-vi-radio.md): the wireless link to the boards
- [WP-2101](../scoreboard/wp-2101.md) and [WP-2102](../scoreboard/wp-2102.md): Daktronics water
  polo scoreboard and penalty module
- [PC-2001](../pace-clock/pc-2001.md): a pace clock the console can drive
- [All Sport Pro](../../../software/all-sport-pro.md): Daktronics' browser-based scoring software
- [Scoreboard control](index.md): the scoreboard control overview
- [Daktronics](../../../vendors/daktronics.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^manual]: [Daktronics, All Sport 5000 Series Control Console Operation Manual (ED-11976 Rev 32, 2024)](https://www.daktronics.com/web-documents/customer-service-manuals/ed11976.pdf), with drawings.
[^bootload]: Daktronics, Scoreboard Driver Bootload Update Procedure (ED-18728 Rev 3, 2018), appendix E of ED-11976.
[^revhist]: Daktronics, All Sport & OmniSport Revision Histories (DD3679410 Rev 06, 2024).
[^support]: [Daktronics, All Sport 5000 Series Controller Support](https://www.daktronics.com/en-us/support/controllers/all-sport-5000).
[^discontinued]: [Daktronics, Discontinued Products](https://www.daktronics.com/en-us/support/discontinued-products-resources).
[^wp2101]: [Daktronics, WP-2101](https://www.daktronics.com/en-us/products/sports/WP-2101) (product page).
[^wp2102]: [Daktronics, WP-2102](https://www.daktronics.com/en-us/products/sports/WP-2102) (product page).
[^kbtenths]: [Daktronics knowledge base, Using the PC-2001 to Function as a Tenths of a Second Timer (DD2317485)](https://www.daktronics.com/en-us/support/kb/DD2317485).
[^kbcolor]: [Daktronics knowledge base, Can I use an All Sport 5000 console to control a ColorSmart scoreboard? (DD2482613)](https://www.daktronics.com/en-us/support/kb/DD2482613).
[^rc200]: [Daktronics, Remote Control System RC-200 All Sport Operation Manual (DD3572889 Rev 03, 2023)](https://www.daktronics.com/web-documents/customer-service-manuals/dd3572889.pdf), section 14.
[^svg]: [Sports Video Group, Daktronics introduces All Sport Pro for fixed-digit scoreboards](https://www.sportsvideo.org/2025/09/02/daktronics-introduces-all-sport-pro-for-fixed-digit-scoreboards/) (September 2025).

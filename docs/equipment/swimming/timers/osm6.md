---
title: Omega OSM6
description: >-
  The OSM 6 is the Omega Electronics swim timing console of the 1980s, a briefcase unit with a
  keyboard, a liquid crystal display and a built-in printer, used at the 1984 Olympic Games and
  still in club service two decades later.
updated: 2026-10-07
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: OSM6
infobox:
  - label: Manufacturer
    value: Omega Electronics
  - label: Type
    value: Portable printing swim timing console
  - label: Lanes
    value: 1–10
  - label: Programs
    value: AUTO, AUTO FD (relay take-off), MANUAL
  - label: Resolution
    value: 1/1000 or 1/100 s, selectable
  - label: Display
    value: 16-character liquid crystal display
  - label: Printer
    value: Built-in electrosensitive printer, 21 characters per line
  - label: Connection
    value: Omega lane harness; 20 mA current-loop scoreboard and data handling outputs
  - label: Dimensions
    value: 480 × 380 × 150 mm
  - label: Weight
    value: 5.8 kg
  - label: Power
    value: 12 V NiCd or lead-acid battery
  - label: Introduced
    value: By 1983
  - label: Status
    value: Discontinued
  - label: Manual
    value: OSM 6 User's manual (3085-503); data sheet E 0013-0141
---

<!--
Research notes, Omega OSM6. Stub created October 2026 while building out ocp5.md; built out the
same month.

Primary documents (sources/vendors/swiss-timing/):
  - timers-consoles/swiss-timing-omega-osm6-user-manual-3085.503: Omega Electronics, "OSM 6
    User's manual 3085-503", 85 pages, undated. A scan with its own OCR layer, found at
    https://www.electronica-pt.com/images/fbfiles/files/OSM60001.pdf (a third-party copy; the PDF
    was assembled in April 2006). Read in full; the data sheet pages were read from the rendered
    page because the OCR jumbled the tables. The worked examples are dated 9 February 1983 (date
    entry), 20, 27 and 29 April 1983, 2 May 1983 and 26 April 1984, so the manual is from about
    1983-84 and the console existed by early 1983 (inferred from the dates; no source states an
    introduction date). Pages 54-59 are the same two pages scanned three times.
    Content: a timing computer for swimming, 25 m, 50 m and other pools, up to 10 lanes,
    individual and relay races. Black portable case: control panel with sockets, 39 keys in five
    groups (numeric, lane control, race parameters, correction, printout), a 16-character
    seven-segment LCD, an electrosensitive printer of 21 characters a line, a circuit with two
    microprocessors, an optional plug-in module. Three resident programs: AUTO (touchpad, one
    backup button), AUTO FD (touchpad, backup button, starting block for relay take-offs), MANUAL
    (three buttons; official time is the median of three, the second of two, the only one of one;
    inputs more than 2 s apart from the same event are not recorded). Harness module inputs 1-3
    per lane. Arming time 1-99 s, 0 means manual arming; recommended 15 s for 25 m and 45 s for
    50 m pools. Event number three digits, heat two digits, heat steps up on each NEXT START.
    Laps 1-100 (00 means 100), default 15. Initialisation at switch-on only: board type (1-line
    "Best Time" or multi-line up to 10 lines, place or lane order: four codes SCb 1-4), lanes,
    time base (1/1000 or 1/100), date (three free two-digit fields; the unit has no calendar),
    time of day, then synchronisation by holding TEST and pressing START. Every contact is
    stored even when a lane is unarmed, so corrections can recover a missed start or a wrong
    split: INS, MOD, ERASE; LANE ON + START is NEXT START; LANE OFF + START goes back to the
    last race. Print flags: M (manual impulse from the keyboard), * (inserted time), D (block
    lane in AUTO FD, printed as block minus pad, negative for a false take-off), FD (relay false
    start), T (MANUAL program, a button missing). Results printable for the current and the
    previous race, with or without backup times. Board output every 0.1 s: running time, lap
    times held 10 s, final times; 1-line board shows the leader at each lap and can cycle all
    results at 4 s each; SCb 4 shows the time of day during breaks. Electromechanical boards
    show seconds, lamp boards tenths. Plug-in module sits under the printer cover, 8 KB, needed
    only for other sports or extra functions; the three swim programs are built in. Setup: one
    numbered connection module beside each lane, a 24 m lead cable to the nearest module,
    intermodule cables and an end plug; start transducer to START IN; battery by clips. Printer
    fuse 1.5 A slow, 5 x 20 mm. Printer paper: metallized, 60 mm, 30 m roll, Bosch RMP 8146-24V,
    Silverno 890-2B, Omega 9051-6002. The printed heading reads "OMEGA SWIM-O-MATIC OSM 6"
    (spelled SWIMM-O-MATIC once). The manual cites data sheet E 0013-0140; the bound-in data
    sheet is E 0013-0141.
  - Data sheet E 0013-0141 (pages 81-85 of the same PDF; SSIH copyright on the cover; Omega
    Electronics SA, Bienne): 480 x 380 x 150 mm, 5.8 kg; 0 to 50 C operating, -40 to 70 C storage,
    85 % RH at 30 C; 12 V NiCd or lead battery, 10.8-14.4 V, 0.7 A average, 1.5 A peak while
    printing, about 12 h at 20 C on a 9.5 Ah battery; 0.8 A fuse; quartz 6.144 MHz; range
    23:59:59.999; accuracy +/-3 x 10^-6 at 20 C, +/-10 x 10^-6 typical over 0-50 C, ageing
    +/-2 x 10^-6 a year; LCD characters 12.7 mm; 29 function keys plus 10 numeric. Sockets, all
    four-pole plastic: battery (3085-506), start (3085-508), arrival harness (3085-507; up to
    184 m from the console to the first module), start out (3085-511), display board (ASCII
    20 mA loop at 9600 baud, 3085-509; up to 300 m on 0.6 mm twisted shielded pair, 3085-510),
    data handling (same as board, or set by the plug-in module). Last page: board and data
    handling output is 1 start, 7 data, 1 parity, 1 stop bit; a 24-character message every 0.1 s
    (clear, running time, stop time). Multi-line boards show tenths in running time except the
    UNT 4, which shows seconds only.
  - Internal conflict: manual 2.7.1 says that in 1/1000 mode swimmers tie when equal to 1/100
    (FINA); manual 5.4 and the data sheet say they tie only when equal to 1/1000. Both are in the
    article.
  - relay-judging/swiss-timing-relay-break-detection-official-communication-307.225: Swiss
    Timing Ltd, Saint-Imier, Official Communication No 307.225, V002, 22 October 2001, found at
    aquaticsgb.com/documents/350. Dates Omega's first automatic relay break detection to Los
    Angeles in 1984, after Omega Electronics tests in 1982-84 (pressure sensors, infrared
    cells, photo finish); OSB-6 and OSB-7 blocks sense force through a contact in the top of the
    platform; the tests found the contact released 0.024-0.027 s before the toes left; Omega and
    FINA agreed a 0.03 s allowance; OSM-6 and ARES print the net take-over time without adding
    it. LEN approved the method in 1995 and FINA on 4 May 1998. The manual's flag rule (block
    + 9 ms) does not match the later 0.03 s allowance; the article reports both without
    reconciling them.

Magazines (run the copying check with the periodicals on):
  - Swimming Technique, November 1983 to November 1984: Sportyme of Hatboro, PA advertises Omega
    as "the world's finest electronic sports timing and scoring equipment" and as official Olympic
    timekeeper (Sarajevo 84); no model named.
  - Swim News n106 (SWIM Canada, January 1985) and Swimming World, December 1984: the new
    Pickering, Ontario pool advertises OSM-6 timing for the March 1985 Ontario Masters
    championships. Earliest facility mention found.
  - Swimming Technique, February-May 1985, p. 23: Sportyme ad pairing the OSM 6 with CSL
    swimming software. Omega column: one to three button timing, touchpads, split memory, false
    start and training programs, 1/100 or 1/1000, high-speed printer, 10-character LCD,
    36-piece keyboard. CSL column: rosters, progress charts, qualifying and record times, scoring,
    seeding, team and league administration, evaluation disks $10, systems from $195. The ad's
    10 characters and 36 keys conflict with the manual's 16 and 39. CSL is probably Hy-Tek's
    Computerized Swim League (June 1984), which would make this its second attestation; the ad
    does not expand the initials (inferred).
  - Swimming World, June and October 1985: Sportyme cuts Omega prices; complete systems as used
    at the Olympics from $4,995.
  - Swimming World, November 1985: Sportyme announces FINA's permission to call the 1984 Games
    equipment "FINA Approved": OSM6 console, OCP5 pads, OSB6 relay take-off blocks, ORA2 start
    systems, UNT4 scoreboards and results computers.
  - Swimming World, May 1988 to August 1990 (most months): Kiefer Sports Timing Systems,
    Northfield, IL, "exclusive U.S. agents for Omega Electronics", runs "It's called the OSM-6.
    And Kiefer has it for you." The May 1988 version (page 22, read from the page image) shows a
    printout headed OMEGA SWIM-O-MATIC OSM 6, event 4 heat 6, dated 15/07/85, eight lanes with
    place, lane and lap columns, every time suffixed M (so keyboard impulses: a demonstration
    strip), a FINA Approved roundel, and the tag timekeeping, display, data handling. Body copy
    describes the attache case and offers documentation on request.
  - Swimming World, April 1989, p. 33: full-page "What perfect timing!" ad, photo of the case
    (printer at left, display above the keys, "OSM 6" on the panel), "new lower prices",
    Kiefer as exclusive US distributor, and "the official timer of the XXIV Olympics" (Seoul
    1988; Omega's claim, not a claim that the OSM 6 was used there).
  - Swimming World, June 1989: Kiefer and Omega Electronics held the first US agents' seminar
    for Omega and Longines timing; Adolph Kiefer promises price and trade-in promotions.
  - Swim Canada, April 1991 (n167): Saint John, NB (Eastern Canada Cup) and Regina, SK (Swim
    Saskatchewan long course championships) both advertise OSM-6 timing.
  - Swimming World, August 1991, p. 33: equipment survey. Omega (via Kiefer): OSM6 with the
    optional Data Handling Module sends results into Hy-Tek Meet Manager; the operator can send
    the current race, a previous race or any split. Also claims Omega offered the first
    computerized aquatics data handling at Montreal 1976 (vendor claim, not used). Kiefer ad on
    the same page: lifetime touchpad warranty, computerized meet management. Hy-Tek's entry
    lists the OSM6 among consoles The Interface supports.
  - Swimming World, March 2003 classified: OSM 6 with seven large Omega pads and a six-line
    board, $5,000. December 2003: working OSM 6 system with console, eight 5 ft pads, six
    speakers and microphone, strobe, cables, ten backup buttons, repair kit, spare manuals and
    paper, $4,500.

Web:
  - Hy-Tek Meet Manager 8 guide, "Omega OSM 6 or ARES 21"
    (hytek.active.com/user_guides_html/swmm8/omegaosm6.htm): needs an "OSM 6 Marc II" with
    data handling module DH-1, cabled from the DH port (Omega Tuchel plug; pins 1 and 2 to pins
    25 and 23 of a DB-25) through a 20 mA to RS-232 converter; 9600 E 7 1; one way only; the
    ARES 21 in OSM 6 mode (ARES software 2.14 or later) sometimes needs 9600 N 8 1. Same page in
    the Meet Manager 6 guide.
  - Splash Meet Manager FAQ (October 2011): "Swiss Timing OSM 6" and "OSM 6 No Modul", both one
    way over a serial port; OSM 5 also listed. Splash howto and brochure list OSM 6. Read as
    evidence that the console was used both with and without the DH module.
  - Hy-Tek timing-console vendor contacts still list OSM 6 under Omega.
  - MSECM Austria (msecm.at/en/event-management/timing, read October 2026) offers Omega ARES 21
    or OSM-6 timing for events. Not cited in the body by name.
  - Daktronics SW-2000 series manual (ED-12156 Rev 14, May 2015): address table "Omega OSM6 or
    Scan'O'Vision", protocol 1, and drawing A-118396 for OSM6 LED driver addressing.
  - Swiss Timing StartTime II (3399.502.02) and III (3399.504.02) manuals: the start system can
    be blocked from starting when the ARES or OSM6 is not cleared.
  - Swatch Group and aBlogtoWatch: Omega's 1984 false-start detection claims concern track
    starting blocks; not used for swimming.
  - Omega Swimming page: touchpads 1967; no OSM dates.

Not found: introduction and withdrawal dates; whether "OSM" expands to Omega Swim-O-Matic (the
printed heading pairs them; no source spells it out); what distinguishes the Marc II from the
first build; the DH-1 part number in Omega's own documents; prices for the console alone; the
US distributor between Sportyme (last seen 1985) and Kiefer (first seen May 1988).
-->

The OSM 6 is a portable swim timing console made by Omega Electronics, the Swiss sports-timing
company whose work is now carried on by [Swiss Timing](../../../vendors/swiss-timing.md).[^manual][^ds]
It is housed in a black briefcase with a keyboard, a liquid crystal display and a built-in
printer, and times individual and relay races in pools of up to ten lanes from touchpads,
pushbuttons and starting blocks.[^manual] Omega supplied it as part of its swimming timing for the
1984 Olympic Games.[^sw8511] Swiss Timing's later systems still offer an output in its serial
results format, called OSM6 mode.[^ares][^sw]

## Models and naming

This section covers the name and the variants found in the sources.

Omega's documents write the name as OSM 6 or OSM6, and its American distributors' advertising
as OSM-6.[^manual][^sw8805] The console prints "Omega Swim-O-Matic OSM 6" at the head of every
results strip. Swim-O-Matic is the name Omega had used for its swim timing systems since the
1960s, but no source says outright that OSM stands for it.[^manual][^sw8805][^sw7305]
The model followed the [OSM-5](osm-5.md) of 1975.

Two variants appear in software documentation. Hy-Tek's guide for its Meet Manager interface
asks for an "OSM 6 Marc II" fitted with a DH-1 data handling module.[^hytek] Splash Meet Manager
lists the OSM 6 twice, once as standard and once with no module, both as one-way serial
connections.[^splashfaq] Neither source says what else separates the Marc II from earlier
units.

## Role in the timing system

This section places the OSM 6 in an Omega installation; the general background on timing
consoles is on the [timers overview](index.md).

The console is the centre of an installation that also needs a watertight lane harness, a
start system and a means of detecting arrivals.[^manual][^ds] Omega's 1984 Games equipment
paired it with [OCP5](../touchpad/ocp5.md) touchpads, [ORA2](../starter/ora2.md) start
systems, [OSB6](../relay-judging/osb6.md) starting blocks for relay take-off detection and
[UNT4](../../common/scoreboard/unt4.md) scoreboards.[^sw8511] An installation can add a one-line
or multi-line scoreboard, an audible start signal, a feed for television, and a data handling
computer.[^manual][^ds]

## History

This section traces the console from its first appearances to its later use.

The manual's worked examples carry dates from February 1983 to April 1984, so the console was
in use by early 1983.[^manual] Omega's United States agent at the time,
[Sportyme](../../../vendors/sportyme.md) of Hatboro, Pennsylvania, advertised it in 1985
alongside CSL swimming software, probably Hy-Tek's
[Computerized Swim League](../../../software/computerized-swim-league.md).[^st8502] In the
same year Sportyme cut its prices and offered complete Omega systems of the type used at the Olympics from $4,995.[^sw8506] It also announced that FINA had given Omega
permission to describe its 1984 Games swimming equipment, the OSM 6 included, as "FINA
Approved".[^sw8511]

Omega introduced automatic relay take-off detection at the Los Angeles Games in 1984, after
tests by Omega Electronics in 1982, 1983 and 1984. Swiss Timing later explained that the OSM 6
prints the net take-over time between the touchpad and the starting block, without adjusting
it.[^relay]

By May 1988 [Kiefer Sports Timing Systems](../../../vendors/kiefer.md), of Northfield,
Illinois, had become Omega's exclusive agent in the United States. Kiefer advertised the
console in Swimming World in most months until 1990, presenting the briefcase unit as suited to
every level of competition, from club meets to the Olympics.[^sw8805][^sw8904] A 1988 advertisement shows a sample
results strip and a FINA Approved mark.[^sw8805] In 1989 Kiefer and Omega held their first seminar for
Omega's American sales agents and promised lower prices and trade-in offers.[^sw8906]

Canadian pools advertised OSM-6 timing for their meets, the new Pickering pool in Ontario for
the 1985 provincial masters championships, and pools in Saint John and Regina for
championships in 1991.[^sn106][^sn167] In 2003 used OSM 6 systems were still offered for sale
in Swimming World, with touchpads, scoreboards, speakers and backup buttons, for $4,500 and
$5,000.[^sw0303][^sw0312] As of 2026 an Austrian event-services company still lists OSM-6
timing among the systems it can supply.[^msecm]

## Design and hardware

This section describes the console's physical construction.

Everything is built into one black portable case: a control panel with the connection sockets,
a keyboard, a display, a printer and a circuit board with two microprocessors.[^manual] The case
measures 480 × 380 × 150 mm and weighs 5.8 kg.[^ds] The lid props open on supports, and Omega
advises setting the console within sight of the finish, shaded from sun and kept clear of spray
from the starting blocks.[^manual]

The keyboard has 39 water-protected keys: ten digits and 29 function keys. The function keys
are grouped into lane control, race parameters, corrections and printing.[^manual][^ds] The
display is a 16-character, seven-segment reflective liquid crystal display with 12.7 mm
characters. It shows the state of every lane (unused, armed, unarmed, touched or finished),
the current lap and the leading lane, along with power and low-battery indicators.[^manual][^ds]

The printer is electrosensitive. It prints 5 × 7 dot characters, 21 to a line, at about two
lines a second, on a metallized paper roll 60 mm wide and 30 m long, enough for about 6,000
lines.[^manual][^ds] A plug-in module with 8 KB of memory fits under the printer cover and can
be changed without tools. The three swimming programs are built in, so the module is needed
only for extra functions or for other sports.[^manual]

Timing comes from a 6.144 MHz quartz oscillator. Omega gives its accuracy as ±3 × 10⁻⁶ at
20 °C.[^ds] The console runs from an external 12 V nickel-cadmium or lead-acid battery, drawing
0.7 A on average and 1.5 A while printing. A 9.5 Ah battery lasts about twelve hours at
20 °C.[^ds]

## Connectivity

This section covers the sockets and the deck wiring.

The control panel has six four-pole plastic sockets, each with its own Omega wiring document:[^ds]

| Socket | Use |
|---|---|
| Battery | 12 V supply, by a cable with clips |
| Start | Start transducer; a contact opening starts the timing |
| Arrival | Omega lane harness carrying touchpad, pushbutton and block signals |
| Start out | Repeats the start impulse to an audible start device or backup timer |
| Display board | ASCII on a 20 mA current loop at 9600 baud |
| Data handling | As the board output, or as set by the plug-in module |

On deck, a numbered connection module sits beside each lane. A 24 m cable runs from the
console to the nearest module, short cables link the modules, and an end plug closes the
last one.[^manual] Each module has three inputs, used differently by each program (see below).[^ds]
The data sheet allows up to 184 m between the console and the first module, and up to 300 m of
twisted, shielded cable to a scoreboard.[^ds]

The scoreboard and data handling outputs use seven data bits, one parity bit and one stop bit.
A 24-character message goes out every tenth of a second, to clear the board, show the running
time or post a time.[^ds] At the console the operator chooses a one-line "Best Time" board or a
multi-line board of up to ten lines, in place or lane order.[^manual] During a race the board
shows the running time and holds each lap time for ten seconds. A one-line board shows the
leader at each lap and can cycle through every finisher at four seconds each.[^manual] A
separate mode shows the time of day during breaks.[^manual] Multi-line boards show tenths in
the running time, except the UNT 4, which shows whole seconds.[^ds]

## Software and operation

This section covers the three timing programs and the operator's controls.

The OSM 6 has three resident programs:[^manual][^ds]

| Program | Lane inputs | Official time |
|---|---|---|
| AUTO | Touchpad; one backup pushbutton | Touchpad |
| AUTO FD | Touchpad; one backup pushbutton; starting block | Touchpad, with each relay take-off printed against it |
| MANUAL | Three pushbuttons | Median of three; the second of two; the only one of one |

Settings made at switch-on cannot be changed without switching the console off. They are the
scoreboard type, the number of lanes, the resolution, the date and the time of day.[^manual]
The operator then synchronises the clock to the time of day by holding TEST and pressing
START.[^manual]

Each race is defined by its program, an arming time of 1–99 seconds, a three-digit event
number, a two-digit heat number and a lap count of up to 100. The heat number steps up by one
at each new start until the event changes.[^manual][^ds] A lane is disarmed after each touch
and rearms when the arming time has passed. Omega suggests 15 seconds in a 25 m pool and 45 in
a 50 m pool. An arming time of zero leaves arming to the operator.[^manual]

In 1/1000 s mode the console prints and displays thousandths but sends hundredths to the
scoreboard.[^manual][^ds] The manual contradicts itself on ties in this mode: one section says
swimmers tie when their times match to the hundredth, following FINA, while another section and
the data sheet say they tie only when they match to the thousandth.[^manual][^ds]

In AUTO FD the console prints, for each relay take-off, the block time minus the touchpad
time. A negative figure marks an early take-off, and the result is flagged FD when the block
time plus 9 ms falls short of the touchpad time.[^manual][^ds] Swiss Timing's 2001 account of
the method describes a 0.03 s allowance agreed between Omega and FINA after the 1982–1984
tests. The sources do not explain the difference between the two figures.[^relay]

The console stores every contact, including those on unarmed lanes and after a race has
finished. These stored times are not printed, but the operator can recall them to correct the
record.[^manual][^ds] Three correction keys insert a missing time, replace a time with another
stored one or a keyed value, and erase a spurious one, such as a touch from a swimmer leaning
over the pad.[^manual] A false start can be erased, and a start missed because the console was
not ready can be recovered from memory.[^manual] The printout flags anything out of the
ordinary: an asterisk marks a keyed-in time, M a start or arrival given from the keyboard, and T
a lane where a MANUAL-program pushbutton was missed.[^manual][^ds] Results print in finishing order, with or
without backup times, for the current race or the one before it.[^manual]

## Meet-management software

This section covers how results left the console for a computer.

With the optional Data Handling Module, the OSM 6 sent its results to
[Hy-Tek Meet Manager](../../../software/hy-tek-meet-manager.md). The operator could send the
race just finished, an earlier race, or individual splits.[^sw9108] Hy-Tek's
[Interface](../../../software/the-interface.md) package listed the OSM6 among the consoles it
supported in 1991.[^sw9108] Hy-Tek's later guide specifies the connection: an OSM 6 Marc II with
a [DH-1](dh-1.md) module, cabled from the data handling socket through a converter from 20 mA to RS-232, at 9600 baud, even parity, seven
data bits and one stop bit.[^hytek] The link is one way, so Meet Manager cannot test it as it
does a two-way console.[^hytek]

[Splash Meet Manager](../../../software/splash-meet-manager.md) also reads the OSM 6 over a
serial port.[^splashfaq]

## The OSM6 protocol in later equipment

This section covers the console's output format as other systems adopted it.

Swiss Timing's later [ARES 21](ares-21.md) can send results in an OSM6 mode at the
same 9600 baud, seven bits and even parity. Hy-Tek supports it under the same entry as the
OSM 6.[^ares][^hytek] [Quantum Aquatics](quantum.md) keeps a one-way OSM6 data handling
output for results systems.[^sw] Daktronics' SW-2000 scoreboards have an address setting for
the OSM6 protocol.[^dak] Swiss Timing's [StartTime II](../starter/starttime-ii.md) start system
can be set to refuse a start until an ARES or OSM6 has been cleared.[^st2]

## Specifications

This section gives the figures from Omega's manual and data sheet.

| Item | Value |
|---|---|
| Lanes | 1–10[^manual] |
| Pools | 25 m, 50 m and others[^manual] |
| Programs | AUTO, AUTO FD, MANUAL[^manual] |
| Resolution | 1/1000 or 1/100 s[^ds] |
| Range | 23 h 59 min 59.999 s[^ds] |
| Time base | 6.144 MHz quartz; ±3 × 10⁻⁶ at 20 °C, ±10 × 10⁻⁶ typical over 0–50 °C, ±2 × 10⁻⁶ a year ageing[^ds] |
| Keyboard | 39 keys (29 function, 10 numeric)[^ds] |
| Display | 16-character seven-segment liquid crystal display, 12.7 mm characters[^ds] |
| Printer | Electrosensitive, 5 × 7 dots, 21 characters a line, about 2 lines a second[^ds] |
| Paper | Metallized, 60 mm × 30 m[^ds] |
| Outputs | Scoreboard and data handling, ASCII 20 mA current loop, 9600 baud[^ds] |
| Plug-in module memory | 8 KB[^manual] |
| Power | 12 V NiCd or lead-acid battery, 10.8–14.4 V; 0.7 A average, 1.5 A peak[^ds] |
| Battery life | About 12 h at 20 °C on 9.5 Ah[^ds] |
| Dimensions | 480 × 380 × 150 mm[^ds] |
| Weight | 5.8 kg[^ds] |
| Operating temperature | 0–50 °C[^ds] |
| Storage temperature | −40 to +70 °C[^ds] |

Sportyme's 1985 advertisement gave a 10-character display and a 36-key keyboard. The manual
and data sheet give 16 characters and 39 keys.[^st8502][^manual][^ds]

## Part numbers and accessories

This section lists the numbers named in Omega's documents and the software guides.

| Item | Number |
|---|---|
| User's manual | `3085-503`[^manual] |
| Data sheet | `E 0013-0141` (the manual cites `E 0013-0140`)[^manual][^ds] |
| Wiring documents: battery, harness, start, board output, board cable, start out | `3085-506`, `3085-507`, `3085-508`, `3085-509`, `3085-510`, `3085-511`[^ds] |
| Printer paper | Omega `9051-6002`; Bosch `RMP 8146-24V`; Silverno `890-2B`[^manual] |
| Printer fuse | 1.5 A slow-blow, 5 × 20 mm[^manual] |
| Data handling module | [DH-1](dh-1.md)[^hytek] |

## See also

- [OSM-5](osm-5.md): the Omega console before it
- [ARES 21](ares-21.md) and [Quantum Aquatics](quantum.md): the Swiss Timing systems that kept its protocol
- [Swim-O-Matic](swim-o-matic.md): the name on its printouts
- [OCP5 touchpad](../touchpad/ocp5.md): the Omega touchpad used with it
- [Timers](index.md): the timers overview
- [Swiss Timing](../../../vendors/swiss-timing.md): the manufacturer's successor
- [Equipment](../../index.md): the equipment reference

## References

[^manual]: Omega Electronics, OSM 6 User's manual (3085-503; worked examples dated 1983–1984).
[^ds]: Omega Electronics, OSM 6 Data Sheet (E 0013-0141), bound with the user's manual.
[^relay]: [Swiss Timing, Relay break detection in swimming](https://aquaticsgb.com/documents/350/Swiss_Timing_Relay_Break_Detection_Communication.pdf) (official communication 307.225, October 2001).
[^hytek]: [Hy-Tek, Meet Manager 8 guide, Omega OSM 6 or ARES 21](https://hytek.active.com/user_guides_html/swmm8/omegaosm6.htm).
[^splashfaq]: [Splash Software, Splash Meet Manager 11 FAQ](https://wiki.swimrankings.net/images/4/45/Meet_Manager_FAQ.pdf) (October 2011).
[^ares]: Swiss Timing, Concept ARES 21 Swimming User's Manual (3330.560.02, version 3.30, April 2008).
[^sw]: Swiss Timing, Quantum-Swimming User's Manual (3480.509.02, version 1.4, October 2019), DH_OSM6.
[^st2]: Swiss Timing, StartTime II User's Manual (document 3399.502.02, Version 2.1, July 2007).
[^dak]: Daktronics, SW-2000 Series 10" Numeric Digit Display Manual (ED-12156, Rev 14, May 2015).
[^msecm]: [MSECM Austria, Timing](https://www.msecm.at/en/event-management/timing).
[^sw7305]: Seagull Enterprises, Omega Swim-O-Matic advertisement, Swimming World, May 1973.
[^st8502]: Sportyme, "The Omega OSM 6 goes on-line with CSL swimming software", Swimming Technique, February–May 1985.
[^sw8506]: Sportyme, Omega timing systems price advertisement, Swimming World, June 1985.
[^sw8511]: Swimming World, November 1985, news item on FINA approval of Omega's 1984 Games equipment.
[^sw8805]: Kiefer Sports Timing Systems, "It's called the OSM-6", advertisement, Swimming World, May 1988.
[^sw8904]: Kiefer Sports Timing Systems, "What perfect timing!", OSM-6 advertisement, Swimming World, April 1989.
[^sw8906]: Swimming World, June 1989, Swim Biz News, "Kiefer and Omega to attack U.S. market".
[^sn106]: Pickering Blue Dolphins Masters, 1985 Ontario Masters Championships notice, SWIM Canada, January 1985.
[^sn167]: Meet notices for Saint John and Regina, Swim Canada, April 1991.
[^sw9108]: Swimming World, August 1991, timing equipment survey, Omega and Hy-Tek entries.
[^sw0303]: Classified advertisement, Swimming World, March 2003.
[^sw0312]: Classified advertisement, Swimming World, December 2003.

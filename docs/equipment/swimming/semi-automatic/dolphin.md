---
title: Colorado Time Systems Dolphin Wireless Stopwatch Timing System
description: >-
  The Colorado Time Systems Dolphin is a 2.4 GHz wireless stopwatch timing
  system used as a semi-automatic or backup timing system in swimming.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Dolphin Wireless Stopwatch Timing System
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Part number
    value: '`R-1004-0505` (base), `R-1004-0506` (watch), `R-1004-0507` (starter)'
  - label: Type
    value: Wireless stopwatch timing system
  - label: Radio
    value: '2.4 GHz, 16 channels, spread spectrum'
  - label: Lanes
    value: 'Up to 10, each with 1, 2, or 3 watches (A, B, C)'
  - label: Starter
    value: '[Dolphin Starter Unit](equipment/swimming/starter/dolphin-starter-unit.md)'
  - label: Dimensions
    value: '6.06 × 2.69 × 1.06 in (15.3 × 6.8 × 2.7 cm), watch'
  - label: Weight
    value: '6.9 oz (195 g), watch'
  - label: Power
    value: '9 V battery per unit, about 40 hours'
  - label: Introduced
    value: '2006'
  - label: Status
    value: Current
  - label: Manual
    value: Dolphin User Guide (F912)
    href: >-
      https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Dolphin/Dolphinextendedinstructions-F912.pdf
---

<!-- Research notes (do not publish):
  Local sources, under sources/vendors/colorado-time-systems/ (t-c =
  timers-consoles/, sw = software/, s-s = start-systems/, sb = scoreboards-displays/,
  c-b = catalogs-brochures/):

  Primary: t-c/cts-dolphin-user-guide-f912.pdf, F912 Rev 202412, 35 pp, "For Dolphin
  version 5 and later". Read end to end 2026-09-17. Everything else held is a one- or
  two-page derivative of it. Only source for: the FCC module IDs; minimum firmware
  (watch and base 1.51, starter 1.31) and the "Dolphin Update v1.5" bulletin
  prerequisite; the firmware file taxonomy (.DBC/.DB2 base, .DTC/.DT2 timer,
  .DSC/.DS2 starter, .DDC/.DD3 scoreboard adapter); the five logging formats; the
  data-set concept; lane numbering 1-10 or 0-9 with watches renumbering themselves;
  lane blanking; the five software sub-screens and their hotkeys; the TCP/IP API and
  its command list; the Events screen's splits field; Otter scoreboards having the
  adapter built in.

  Setup sheets: t-c/cts-dolphin-wireless-stopwatch-setup-f911.pdf (Rev 0707, 2007) and
  -f911-rev-201905.pdf (Rev 201905). The -f911-alt.pdf extracts byte-identical to the
  0707 sheet and is a redundant scan, not a third revision. The revision pair dates
  three changes: Hy-Tek-only launching gave way to standalone or meet-management
  launching; USB cable R-015-569 became R-015-606; case R-045-011 became R-5000-0362
  (27 watches) and R-5000-0363 (36). Spanish sibling sw/cts-sistema-dolphin.es.pdf
  adds button-hold durations the English sheet omits (Reset 3 s to power, 1 s to enter
  the menu).

  Computer Operator sheet: t-c/cts-el-dolphin.es.pdf, F922 rev 0607, Spanish only. The
  English original is not held anywhere in the collection. Valuable because it records
  the 2007 commercial arrangement: Meet Manager's primary-mode Dolphin interface was
  included at no charge, while Dolphin Backup Mode was a separate Hy-Tek purchase. It
  also gives the two retrieval paths of that era, Get Times in primary mode against
  Ctrl-F3 in backup, with Ctrl-B to expose the backup columns. Current Hy-Tek
  documentation instead makes both modes paid options, so the commercial terms have
  changed since; that shift is stated in the article as a change over time, not as a
  contradiction between sources.

  Marketing series, read in date order: sw/cts-wireless-stopwatch-timing-system-dolphin
  (Rev 08/12), sw/cts-dolphin-wireless-stopwatch-system-dolphin (Rev 03/14),
  t-c/...-dolphin-2 (Rev 10/20), t-c/...-dolphin (Rev 09/22). Catalogues:
  c-b/cts-making-time-count-...-complete (2008), and the 2011 and 2015 editions of
  "Complete Timing, Scoring, Training and Display Solutions", both filed under s-s/
  rather than c-b/, which is easy to miss.

  Spec drift across that series, which is the main thing the catalogue sequence
  establishes:
    2007 F911        - "Patent Pending"; no watch dimensions given
    2008 catalogue   - watch 2.75 x 4.5 x 1 in, 5.8 oz (165 g); no patents; no splits
    2011 catalogue   - same small watch; splits present; still no patents; RoHS and CE
    2012 brochure    - watch 6.06 x 2.69 x 1.06 in, 6.9 oz (195 g); splits "NEW!!";
                       patent 7,821,876 only
    2014 brochure    - large watch; both patents
    2015 catalogue   - both patents, but the watch block still shows the small 2008
                       dimensions and gives 4.8 oz against 165 g
    2020, 2022       - large watch, both patents, unchanged
  So the watch was redesigned between the 2011 and 2012 documents and splits arrived
  around 2012. The 2015 catalogue page is stale on dimensions and self-inconsistent on
  weight: 165 g is 5.8 oz, not 4.8 oz, and 5.8 oz is what 2008 and 2011 both give.
  Treated in the article as a catalogue error, with 5.8 oz taken as the small watch's
  weight, and flagged rather than silently dropped.

  Other local documents that mention Dolphin without being Dolphin documents:
  sb/cts-mini-scoreboard-user-guide-f927 (Rev 201202) has a "Connect to a Dolphin
  system" section and, more usefully, gives the module addressing for Dolphin data,
  01-09 for lanes 1-9 and 0A for lane 10; sb/cts-mini-led-scoreboard-datasheet;
  s-s/cts-electronic-start-system-championship-start-instruction-guide-f875;
  c-b/cts-enhanced-support-options, which puts the Dolphin at a one-year warranty
  against two years for consoles, start systems and touchpads, batteries excluded;
  case-studies/cts-project-summary-grosse-pointe-south-... (revised 08/12), the only
  site-level deployment evidence held, a 12-lane 2008 natatorium running a System 6
  with the Dolphin alongside it.

  Rules corpus: no rulebook held names the Dolphin. Every "dolphin" hit in
  sources/rules/ is the dolphin kick. The governing apparatus is generic and already
  lives on the semi-automatic overview, so this page cites it only where a
  Dolphin-specific point needs it.

  Periodicals: checked and deliberately skipped. Over a thousand .txt files match
  "dolphin", and all of them are a club name (Canadian Dolphins, Pacific Dolphin),
  the stroke, or the animal. The corpus predates the product. npm run
  check:copying:all will therefore surface ordinary-English collisions from magazine
  OCR on this page; those are noise.

  Independent sources used (all verified against the primary record, not just cited):
    - patents.google.com US 7,821,876 B2 and US 8,085,623 B2, plus US 8,111,588 B2
      which lapsed for unpaid maintenance fees. All three name Frederick E. Frantz,
      priority 2006-02-27, assignee Cool River Systems LLC, not CTS. The
      specifications use competitive swimming as the worked example.
      Discrepancy worth recording: CTS's own /patent-summary page lists neither
      number, although the Dolphin product page and every sheet since 2012 cite them.
      Not resolvable from public sources; the article states the assignee plainly and
      does not call them CTS patents.
    - fccid.io for TFB-FREESTAR (Laird/LS Research FreeStar, granted 2005-08-01,
      2405-2480 MHz, proprietary spread spectrum) and X8WBT840F (Fanstel BT840F,
      granted 2019-10-01, 2402-2480 MHz, Bluetooth 5.0 and 802.15.4). Independent
      corroboration of the two hardware generations that F912's dual FCC ID implies.
    - USA Swimming Rules & Regulations Committee memo, 2020-10-03, Clark R. Hammond
      and Lisa Olack, hosted by Arizona Swimming. The single most useful non-vendor
      document found. Waives Rule 102.24.3 for the synchronized-start mode only, to
      2021-08-31, while data was gathered. Reasons that the rulebook's "buttons"
      presuppose a hardwired console whereas the Dolphin distributes the clock across
      devices. Explicitly declines to treat the manual synchronized start as
      semi-automatic, and treats the fully manual mode as ordinary watches. Cites
      102.24.2 B, 102.24.3 A(2), 102.24.3 B(2), 102.17.3, 102.17.3 B, 102.24.4,
      202.4.13. Note the rule numbering: USA Swimming later renumbered 102.24 to
      102.23, so the memo's citations do not match the current rulebook.
    - wiki.swimrankings.net for the DO3 and DO4 filename grammar and the warning that
      splits carry no positional marker, so a missing split shifts the rest. Also the
      Meet Manager build 21044 floor. Independent of CTS and of Hy-Tek.
    - Hy-Tek's own interface documentation for the mode split and the paid options;
      SwimTopia's help centre for Meet Maestro.

  Dead ends and gaps:
    - No price appears in any locally held CTS document, for the Dolphin or anything
      else. The shop figures in the article are a dated snapshot from the CTS store.
    - F912 refers to per-role sheets for the Computer Operator, Starting Official,
      Lane Timers, and a "Dolphin Basics" sheet. Only the Starting Official sheet
      (F923) is held in English; the Computer Operator sheet is held only in Spanish;
      the Lane Timer and Dolphin Basics sheets are not held at all.
    - The "Dolphin Update v1.5" engineering bulletin is referenced by F912 but not
      held. It matters because F912 makes it a prerequisite for later updates.
    - CTS publishes no dimensions or weight for the base unit or the starter unit.
      The only physical figures on any datasheet are the watch's.
    - The 2023 hardware refresh is documented only on the CTS download page, not in
      any manual revision held.
  Still open: whether the Dolphin base unit was ever sold under a part number other
  than R-1004-0505; what the scoreboard adapter's v3 hardware changed; whether the
  Swimming Australia and Swimming NSW approvals CTS claimed in 2011 and 2015 were ever
  published by those bodies.

  Related pages: ../starter/dolphin-starter-unit.md holds the starter detail, the
  K-DSS kits, and the patents' synchronization mechanism. index.md holds the
  semi-automatic background and the rulebook hierarchies.
-->

The Dolphin Wireless Stopwatch Timing System is a swimming timing system made by
[Colorado Time Systems](../../../vendors/colorado-time-systems.md) (CTS) in which each
lane timer holds a handheld wireless stopwatch rather than a
[backup button](pushbutton/cts.md) wired to a console.[^ctspage][^datasheet] The
watches report their times by radio to a base unit (`R-1004-0505`) plugged into the
meet computer, where a Windows program writes each heat to a result file for a
meet-management program to read.[^f912] A pool can run up to ten lanes with as many as
three watches in each, and the watches can be started together from the
[Dolphin Starter Unit](../starter/dolphin-starter-unit.md) or run independently as
ordinary stopwatches.[^datasheet][^f912] CTS introduced the system in 2006 and still
sells it.[^blog][^shop]

## Role in the timing system

Depending on how it is started, the Dolphin serves either as a semi-automatic timing
system in its own right or as the backup layer beneath touchpads and buttons. See the
[semi-automatic timing overview](index.md) for the shared background: what
semi-automatic timing is, how the rulebooks rank primary, secondary and tertiary
systems, and how multiple times for one lane resolve into an official time.

What distinguishes the Dolphin from a wired button is where the clock sits. With
buttons, one console holds the clock and the buttons merely close a circuit; with the
Dolphin, every watch is its own timer, so the system has to keep those timers in
agreement. The USA Swimming committee that reviewed the system in 2020
counted at least twelve microprocessors collecting times in a six-lane pool running two
watches per lane, and noted that the starter, the base and the watches all continue to
synchronize over the air while a race is running.[^usas2020]

Where a [timing console](../timers/index.md) and touchpads are the primary system, the
Dolphin runs entirely separately from them and does not substitute for a pad or a
button during a race; the two sets of times meet only in the meet-management
software.[^f912]

## History

CTS introduced the Dolphin in 2006, and by 2023 said it had been used by more than
1,600 teams.[^blog] A setup sheet from 2007 carries a patent-pending notice, names
Hy-Tek Meet Manager as the only way to open the software, and lists a single carrying
case.[^f911r0707]

Two patents cover the synchronization method, both titled "Synchronization of a
plurality of devices in a wireless sensor arrangement" and both naming Frederick E.
Frantz as inventor with a priority date of February 27, 2006. They are assigned to Cool
River Systems rather than to CTS, so they are licensed into the product rather than
being the manufacturer's own; a third member of the same family, US 8,111,588, lapsed
for unpaid maintenance fees.[^pat876][^pat623][^pat588] CTS began printing the first
number on its sheets in 2012 and both from 2014.[^bro12][^bro14] The
[Dolphin Starter Unit](../starter/dolphin-starter-unit.md) article describes the
mechanism the patents claim.

The stopwatch itself was redesigned early in the product's life. The 2008 and 2011
catalogues give a watch of 2.75 × 4.5 × 1 in (7 × 11.4 × 2.5 cm) weighing 5.8 oz
(165 g); from the 2012 brochure onward every sheet gives the larger body still sold
today, 6.06 × 2.69 × 1.06 in (15.3 × 6.8 × 2.7 cm) at 6.9 oz (195 g).[^cat08][^cat11][^bro12]
Split timing arrived at about the same point, flagged as new in the 2012
brochure and absent from the 2008 catalogue.[^bro12][^cat08] Sources disagree on the
older watch's weight: the 2015 catalogue still printed the superseded dimensions three
years after the brochures had moved on, and gave 4.8 oz against the same 165 g, which
is self-inconsistent and contradicts the 5.8 oz of the two earlier
catalogues.[^cat15][^cat08][^cat11]

A hardware revision followed much later. CTS replaced the radio module in 2023, and
firmware for the newer units is not interchangeable with firmware for the older
ones.[^dlpage] The user guide reflects this by listing two certified modules for the
same products.[^f912]

## System components

A complete system is three kinds of device plus a Windows program.[^datasheet]

The base unit (`R-1004-0505`) connects to the meet computer over a standard USB cable
and is the system's link to the software; it receives from the starter and from every
watch, and its radio channel is set from the software rather than on the
device.[^f912][^f911] Without it, the software reports that no base is
attached.[^f912]

The wireless stopwatch (`R-1004-0506`) is the unit a lane timer holds. Reset sits on
the front and a Start/Stop button on each side, so either hand suits.[^f911] Holding
Reset powers it on or off; holding Reset and pressing a side button opens a four-item
menu covering the lane number, the timer letter within that lane (A, B or C), whether
manual starting is permitted, and the radio channel.[^f911][^f912] Turning manual
start off stops a lane timer starting a watch by hand in the modes where the starter is
meant to do it.[^f912]

The [Dolphin Starter Unit](../starter/dolphin-starter-unit.md) (`R-1004-0507`) starts
every watch at once, either from its own button or from a pulse cabled out of an
electronic [start system](../starter/index.md). It is covered in its own article.

All three device types share one radio channel, numbered 0 to 15; a unit left on a
different channel simply never appears in the software.[^f911][^f912] Each takes
a single 9 V battery, which CTS rates at upwards of 40 hours; the software shows signal
strength and battery level per unit, and CTS advises replacing any battery reading
below half before a meet begins.[^f911][^f912]

## Modes of operation

CTS describes three modes, and the distinction between them is what determines how the
resulting times may be used.[^datasheet][^f912]

In semi-automatic timing, the starter unit is cabled to an electronic start system, the
start pulse launches every watch at once, and each lane timer stops their own. In the
manual synchronized mode the cable is absent and an official presses the starter's
button as the start is given, which again launches all the watches together. In the
fully manual mode the starter is not used at all and is left in the case; each timer
starts, stops and resets their own watch exactly as they would an ordinary
stopwatch.[^f912][^datasheet]

The three are not equivalent under the rules, although only the first involves a
cable. Reviewing the system in 2020, USA Swimming
accepted the electronically started mode as semi-automatic timing, declined to treat
the hand-started synchronized mode as semi-automatic, and regarded the fully manual
mode as no different from conventional watches.[^usas2020] CTS's own sheets present the
fully manual mode as the one intended for collecting backup times at large meets, and
state that it satisfies the backup-timing requirements of World Aquatics (given as FINA
on sheets before 2022), the NCAA, USA Swimming, the NFHS and the YMCA; that compliance
claim is the vendor's.[^datasheet][^bro12]

## Software and operation

The Dolphin software runs on Windows 7 or later, is downloaded from the CTS site rather
than shipped on media, and installs its own copy of the manual alongside
itself.[^f912][^dlpage] It must stay open for the length of a session, though it may be
minimized, because nothing arriving from the watches is recorded while it is
closed.[^f912]

Five sub-screens divide the program.[^f912] A live screen shows each active watch,
whether it is running, stopped or reset, and the finishing time for each lane once all
of that lane's watches have stopped. Here the software resolves multiple watches
itself: one watch stands alone, two are averaged, and with three the fastest and
slowest are dropped and the middle time kept. A signals screen carries the per-unit
radio and battery readings. An events screen holds up to 999 events, each with a
number, a name, a round, a heat count and a split count. Each watch is told its
event's split count beforehand, which is how it distinguishes a press at a lap from the
press that ends the race, and the figure can be typed in or loaded from a CSV file that
meet-management software can generate. A settings screen covers printing, the base,
logging, the scoreboard and general preferences. A log screen replays earlier races and prints them.

Lane numbering can run 1 to 10 or 0 to 9, and changing the setting makes each watch
renumber itself rather than requiring the deck to be rewalked.[^f912] A timer with no
swimmer can blank the lane by pressing Reset after the start, which shows dashes and
tells the operator the lane is empty; pressing a side button resumes timing without
having lost any accuracy.[^f912]

Writing a result file is tied to the reset, not to the finish. When the starter unit is
in use, the official's Start/Stop followed by Reset is what writes the file; without
it, the file is written only once every lane timer has stopped and reset their own
watch, so one timer who forgets will hold up the heat until the operator forces a reset
from the software.[^f912] A forced reset issued too early costs any watch still
running its final time, although whatever splits it has already sent are kept.[^f912]

Up to ten splits can be recorded per swimmer per race, taken by pressing a side button
at each touch.[^datasheet][^f912]

Logging must be switched on before anything is saved, and up to five formats can be
written at once: plain text, CSV, XML, and the `DO3` and `DO4` formats meant for
meet-management software, the latter adding splits.[^f912] Files default to
`C:\CTSDolphin`.[^f912] Their names begin with a three-digit number identifying the
data set, which is how a program distinguishes one session of a multi-day meet from
another.[^f912] The rest of the name encodes the event, the heat, the round and a race
number, giving a form such as `001-002-001T0003.do4`.[^swimrankings]

Beyond files, the software opens a TCP/IP socket on any of five ports, with a command
set that lets a connected program push event information in, read race times back out,
choose whether splits are included, and reset the timers.[^f912] This is the path by
which meet-management software drives the system live rather than watching a folder.

Firmware for the base, the watches, the starter and the scoreboard adapter is loaded
through the software over the radio, one device type at a time and with the base always
first.[^f912] The file extensions distinguish the generations: `.DBC` and `.DB2` for
the base, `.DTC` and `.DT2` for the watches, `.DSC` and `.DS2` for the starter, and
`.DDC` and `.DD3` for the scoreboard adapter.[^f912] CTS requires watches and base to
be at 1.51 or above and the starter at 1.31 or above before any later update, and
directs operators to an engineering bulletin for systems below that
level.[^f912]

## Meet-management software

The Dolphin does not score a meet; it hands times to a program that
does.[^f912] CTS names [Hy-Tek Meet Manager](../../../software/hy-tek-meet-manager.md),
[SwimTopia Meet Maestro](../../../software/meet-maestro.md) and
[Splash](../../../software/splash-meet-manager.md) in its current
documentation, and refers operators to each vendor for the details.[^f912]

Meet Manager is the longest-standing of the three and treats the Dolphin in two
ways.[^hytekmm] Run as the primary system, it pulls watch times straight into
the results. Run in backup mode behind a console, it opens the watch times in a window
next to whatever the console has already recorded for that heat, so an operator can
weigh the two before accepting.[^f912][^hytekbackup] Averaging follows the same
arithmetic as the Dolphin's own live screen, with one addition: where two watches for a
lane differ by three tenths of a second or more, Meet Manager declines to average them
and flags the lane for the operator to judge.[^f912]

The commercial arrangement has changed over the years. In 2007 CTS documented the
primary-mode interface as included in Meet Manager with backup mode sold separately by
Hy-Tek;[^f922] Hy-Tek now treats both as purchasable options, and CTS's troubleshooting
notes that the backup-mode setting stays greyed out until the option is
bought.[^hytekmm][^f912] Support for the `DO3` and `DO4` formats also requires a recent
enough build.[^swimrankings]

In the result file the splits are a bare sequence, with nothing marking which length
each belongs to, so a split a timer failed to take shifts every later one out of
position rather than leaving a gap.[^swimrankings]

## Scoreboards

Dolphin results can drive a CTS numeric scoreboard without a console in the loop. Most
boards need the [Dolphin Scoreboard Adapter](dolphin-scoreboard-adapter.md) between
them and the system, while CTS's [Otter](../../common/scoreboard/otter.md) swimming scoreboards
have the adapter built in.[^f912] The software controls the display directly: whether
the board is enabled, whether results are ordered by lane or by place, how many lines
the board has and how many lanes the pool has, how quickly results scroll when there
are more lanes than lines, brightness, and the clock format.[^f912]

On a [mini scoreboard](../../common/scoreboard/mini-scoreboard.md), Dolphin data is addressed by
module code, using 01 through 09 for lanes 1 to 9 and 0A for lane 10.[^f927]

## Governing-body recognition

USA Swimming changed its treatment of the system twice, first by waiver and then by
rule.

In October 2020 the chairs of the Rules & Regulations and Times & Recognition
committees issued a waiver. Their difficulty was that the rules described
semi-automatic timing in terms of buttons, and a button was understood to be hardwired
to a console; the Dolphin instead spread the timing across many devices that
synchronize by radio, which raised the question of whether its times were consistent
enough to stand as official.[^usas2020] Satisfied on that point, they waived the
relevant requirement for the synchronized-start mode only, initially through August 31,
2021, while times collected on the system were reviewed with a view to amending the
rules.[^usas2020] The memo cited the rule as 102.24.3; USA Swimming has since
renumbered that part of the rulebook to 102.23, so the memo's numbering no longer
matches the current text.

The rule change followed. Since April 13, 2023, wireless systems of this kind may
be used as semi-automatic timing in USA Swimming sanctioned competition without a
waiver, provided they are operated within the rulebook and to the manufacturer's
specifications.[^blog]

Other claims rest on the vendor alone. Two catalogue editions, 2011 and 2015, list
approvals from three bodies: Swimming NSW, Swimming Australia, and USA
Swimming.[^cat11][^cat15] Governing-body rulebooks set requirements for classes of
equipment rather than naming approved products, so a claim of that kind cannot be
checked against the rules themselves.

## Specifications

Figures below are the system's and the watch's; CTS publishes no dimensions or weight
for the base unit or the starter unit.

| | |
|---|---|
| Type | Wireless stopwatch timing system |
| Lanes | Up to 10[^datasheet] |
| Watches per lane | 1, 2, or 3, designated A, B, and C[^datasheet][^f911] |
| Radio | 2.4 GHz, 16 channels, spread spectrum[^datasheet] |
| Radio module | FCC ID `TFB-FreeStar` or `X8WBT840F`[^f912] |
| Watch dimensions (L × W × D) | 6.06 × 2.69 × 1.06 in (15.3 × 6.8 × 2.7 cm)[^datasheet] |
| Watch weight | 6.9 oz (195 g)[^datasheet] |
| Earlier watch | 2.75 × 4.5 × 1 in (7 × 11.4 × 2.5 cm), 5.8 oz (165 g)[^cat08][^cat11] |
| Battery | One standard 9 V per unit, upwards of 40 hours[^datasheet][^f911] |
| Splits | Up to 10 per swimmer per race[^datasheet] |
| Computer | Windows 7 or later, USB[^f912] |
| Result formats | Text, CSV, XML, `DO3`, `DO4`[^f912] |
| Compliance | RoHS; CE listed in the 2011 catalogue[^datasheet][^cat11] |
| Warranty | One year, batteries excluded[^warranty] |
| Patents | US 7,821,876; US 8,085,623 (both assigned to Cool River Systems)[^pat876][^pat623] |
| Status | Current[^shop] |

## Part numbers and accessories

Systems are sold by lane count and watches per lane, each package comprising the
watches, a base unit, a starter unit and the software.[^datasheet]

| Lanes | 1 watch per lane | 2 watches | 3 watches |
|---|---|---|---|
| 6 | `WTS-D1061` | `WTS-D1062` | `WTS-D1063` |
| 8 | `WTS-D1081` | `WTS-D1082` | `WTS-D1083` |
| 10 | `WTS-D1101` | `WTS-D1102` | `WTS-D1103` |

Separate parts and accessories:

- `R-1004-0505`, base unit; `R-1004-0506`, wireless stopwatch, listed in the CTS store
  as `R-1004-0506-L`; `R-1004-0507`, starter unit. All three are sold individually, and
  the store also carries refurbished base units, watches and scoreboard
  adapters.[^f911][^shop]
- `R-015-606`, the USB cable between base unit and computer. The 2007 sheet listed
  `R-015-569` for the same purpose.[^f911][^f911r0707]
- `K-DSCB`, the [Dolphin Scoreboard Adapter](dolphin-scoreboard-adapter.md) kit,
  comprising the adapter and its mounting hardware.[^flyer22]
- `K-DSS-1` and `K-DSS-2`, the cable and holster kits joining the starter unit to a CTS
  start system; see the
  [Dolphin Starter Unit](../starter/dolphin-starter-unit.md).[^flyer22]
- `R-5000-0362`, a hard-sided case sized for 27 watches, and `R-5000-0363`, sized for
  36. The 2007 sheet listed a single case, `R-045-011`, of the smaller capacity.[^f911][^f911r0707]
- A lanyard, a spare watch and a portable LED scoreboard are listed as
  accessories.[^datasheet]

CTS also markets a fuller package pairing a system with an
[Infinity](../starter/infinity-start-system.md) or
[Championship](../starter/championship-start-system.md) start system, a tripod, the
start-system cable set, a two-line portable scoreboard, the scoreboard adapter and a
case.[^flyer22]

## See also

- [Semi-automatic timing](index.md): the semi-automatic timing overview
- [Colorado Time Systems Dolphin Starter Unit](../starter/dolphin-starter-unit.md): the
  wireless start trigger that starts the watches together
- [Dolphin Scoreboard Adapter](dolphin-scoreboard-adapter.md): the link from the system
  to a CTS numeric scoreboard
- [Colorado Time Systems Pushbutton](pushbutton/cts.md) and
  [Pushbuttons](pushbutton/index.md): the wired alternative to a wireless stopwatch
- [Hy-Tek Meet Manager](../../../software/hy-tek-meet-manager.md),
  [SwimTopia Meet Maestro](../../../software/meet-maestro.md) and
  [Splash](../../../software/splash-meet-manager.md): the meet-management programs that
  read Dolphin result files
- [Timers](../timers/index.md): the timing consoles the Dolphin backs up
- [Colorado Time Systems](../../../vendors/colorado-time-systems.md): the manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^f911]: [Colorado Time Systems, Dolphin Wireless Stopwatch Timing System Set Up (F911)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Dolphin/Dolphin-F911.pdf) (Rev. 201905; part numbers, device settings, battery).
[^f911r0707]: Colorado Time Systems, Dolphin Wireless Stopwatch Timing System Set Up (F911 Rev. 0707), the 2007 revision; earlier cable and case part numbers.
[^f912]: [Colorado Time Systems, Dolphin User Guide (F912)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Dolphin/Dolphinextendedinstructions-F912.pdf) (Rev. 202412, for Dolphin version 5 and later).
[^f922]: Colorado Time Systems, El Dolphin como sistema de cronometraje primario (F922 rev 0607), the Computer Operator sheet, held only in Spanish.
[^f927]: [Colorado Time Systems, Mini Scoreboard User Guide (F927)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Scoreboards/Mini_Scoreboard_F927.pdf) (Rev. 201202; Dolphin module addressing).
[^datasheet]: [Colorado Time Systems, Dolphin Wireless Stopwatch System datasheet](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Datasheets/Dolphin_2.pdf) (Rev. 10/20; modes, components, specifications).
[^flyer22]: Colorado Time Systems, Dolphin Wireless Stopwatch System flyer (Rev. 09/22); `K-DSCB` and `K-DSS-x` kits, package contents.
[^bro12]: Colorado Time Systems, Wireless Stopwatch Timing System brochure (Rev. 08/12); splits introduced, redesigned watch, first patent cited.
[^bro14]: Colorado Time Systems, Dolphin Wireless Stopwatch System brochure (Rev. 03/14); both patents cited.
[^cat08]: Colorado Time Systems, Making Time Count (2008 catalogue), Dolphin page; original watch dimensions.
[^cat11]: Colorado Time Systems, Complete Timing, Scoring, Training and Display Solutions (2011), Dolphin page; approval claims, CE marking.
[^cat15]: Colorado Time Systems, Complete Timing, Scoring, Training and Display Solutions (2015), Dolphin page; carries a stale watch weight and dimensions.
[^warranty]: Colorado Time Systems, Enhanced Support Options; Dolphin systems carry a one-year warranty, batteries excluded.
[^ctspage]: [Colorado Time Systems, Dolphin Wireless Stopwatch Swim Timing](https://coloradotime.com/products/dolphin-wireless-stopwatch-swim-timing).
[^shop]: [Colorado Time Systems, Dolphin Wireless Stopwatch Timing collection](https://shop.coloradotime.com/collections/dolphin-wireless-stopwatch-timing) (current parts, including refurbished units).
[^dlpage]: [Colorado Time Systems, Dolphin Software Download](https://coloradotime.com/dolphindownload) (software version; firmware levels for the two hardware generations).
[^blog]: [Colorado Time Systems, Great News for Dolphin Users](https://coloradotime.com/blog/great-news-for-dolphin-users) (introduced 2006; over 1,600 teams; USA Swimming semi-automatic use effective April 13, 2023).
[^usas2020]: [USA Swimming Rules & Regulations Committee, Use of the Dolphin Timing System](https://www.azswimming.org/azswimming/UserFiles/File/Meet%20Management/waiver-dolphin-timing-system-10-31-2020_051947.pdf) (memo of October 3, 2020; waiver of Rule 102.24.3 to August 31, 2021).
[^pat876]: [US Patent 7,821,876 B2, Synchronization of a plurality of devices in a wireless sensor arrangement](https://patents.google.com/patent/US7821876B2/en) (Frederick E. Frantz; priority February 27, 2006; granted October 26, 2010).
[^pat623]: [US Patent 8,085,623 B2, Synchronization of a plurality of devices in a wireless sensor arrangement](https://patents.google.com/patent/US8085623B2/en) (continuation; granted December 27, 2011; assigned to Cool River Systems).
[^pat588]: [US Patent 8,111,588 B2, Synchronization of a plurality of devices in a wireless sensor arrangement](https://patents.google.com/patent/US8111588B2/en) (same family; lapsed for unpaid maintenance fees).
[^hytekmm]: [Hy-Tek, Colorado Time Systems Dolphin](https://hytek.active.com/user_guides_html/swmm8/coloradotimesystemsdolphin.htm) (standalone and backup modes; both are purchased options).
[^hytekbackup]: [Hy-Tek Swimming Support, Interface with CTS Dolphin in Backup Mode](https://activenetwork.my.salesforce-sites.com/hytekswimming/articles/en_US/Article/Interface-with-CTS-Dolphin-in-Backup-Mode) (watch times shown beside pad and button times).
[^swimrankings]: [Swim Wiki, Meet Manager: Timing System Colorado Dolphin Wireless](https://wiki.swimrankings.net/index.php/Meet_Manager:Timing_System_Colorado_Dolphin_Wireless) (`DO3` and `DO4` file naming; unmarked splits; minimum Meet Manager build).

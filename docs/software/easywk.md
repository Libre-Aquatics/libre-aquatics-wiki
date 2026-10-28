---
title: EasyWk
description: >-
  EasyWk is German meet-management software for swimming, written by Björn Stickan and first
  sold in 2000, which runs entries, heats, timing-system links, results and DSV-Standard and
  Lenex files for German meets.
updated: 2026-10-28
tags:
  - Software
  - Meet management
  - Swimming
---

<!--
Research notes, EasyWk. Stub created while building out lenex.md; built out 2026-10-28.

Held: sources/vendors/easywk/software/easywk-dokumentation-2016.de (the author's manual,
"Dokumentation EasyWk – DAS Schwimmwettkampfprogramm", status 12 March 2016, (c) 2006-2016
Björn Stickan, 165 pp., German; downloaded 2026-10-28 from https://www.easywk.de/doc/DokuEasyWk.pdf,
extracted with PyMuPDF). Read in full: contents, introduction (registration numbers, the rule on
substitutions), general functions, settings (input aids, display and print options, e-mail,
PDF, timing system, other), event setup (pool, sessions, ENM rules), definition files and the
entry program, entries and entry files, seeding, HTML projects, the timing system chapter,
data exchange by heat and the ZES99, DIGI-Timer and Omega database imports, the DSV and Lenex
export chapter, update, Lenex result import, version 3 conversion, licences and network
functions. Skimmed: certificates, points tables, multi-event, DMSJ, JMK and KMK chapters, CSV
export detail.
  - Timing systems (2016): Colorado, Daktronics OmniSport 1000 and 2000, Omega OSM6 and ARES 21,
    all by RS-232. Colorado and OmniSport 2000 are polled: the operator asks for a heat's times
    (any time later, as long as the console stays on) and can send the event list to the
    console (some Colorado timers time out; it can take minutes). Omega and OmniSport 1000 push
    times as they happen; the dialog must stay open all meet, times land in a buffer that is
    lost if the dialog closes, and each buffered race can be applied to any heat (with a warning
    if the console's event and heat numbers differ). Number of splits follows from pool length
    and whether pads are at both ends; all splits stored, 50 m splits can be suppressed in the
    protocol. Functions: status per lane, record flags (world, European, German, German age,
    own), backup time to final time (Ctrl+lane), DQ text, edit times.
  - File imports: ZES99, a timing system used mainly in finswimming, one text file per heat,
    all-or-nothing import; DIGI Sport timer, one file per heat, one split per two lengths;
    Omega database file LSTRSLT.TXT, written continuously by the Omega system with all results
    and splits so far, read from disk or network, not from the console.
  - Entries: DSV Format 5 files, Lenex .lxf and .lef, Excel with column mapping, and files from
    the free entry program ewkmelde.exe, which a host ships to clubs with an EXCHANGE.EW2 data
    file (EasyWk can zip both). Swimmers matched first by DSV registration number, then by name
    and year. No substitutions (Ummeldung): the absent swimmer is DNS and the replacement is a
    late entry, which the author ties to the WB requirement that every entered swimmer appear in
    the protocol.
  - Definition files in DSV and Lenex formats; DSV exports (definition, club entries, club
    results per club or all clubs, by e-mail, competition results for the DSV best-times
    administrator); Lenex exports (definition, entry list with lanes, results), the manual
    calling Lenex the European counterpart of the DSV format, more complete, standard in
    Switzerland, the Netherlands, Sweden and Hungary; mentions EasyBest as a German best-times
    program that reads Lenex (maker not stated). CSV exports. HTML projects of the entry list and
    protocol (one page per club and per event, index.html, upload by FTP); example given was the
    2006 North German championships in Bremen. A Lenex results file can be turned into entries.
  - ENM (late-entry surcharge for missing a qualifying time): text, triggers (withdrawn, DNS,
    DQ, abandoned), birth-year and place exemptions, proof dates for the DSV definition file.
  - Seeding per WB, ties drawn at random, so re-seeding can move swimmers; A/B instead of L/R
    for two swimmers per lane; finals seeded through a separate menu.
  - Network (from 4.06): a paid add-on; running EasyWk itself on several PCs on one data set is
    not allowed; extra programs NetSpeaker (announcer view) and NetEdit (heat-by-heat result
    entry) connect to the one PC running EasyWk.
  - Version 3 data converts to version 4 with ewkkonvert.exe; certificates do not carry over.
  - Built in Delphi with Indy and ZipMaster components.
Web (read 2026-10-28):
  - easywk.de home page: versions EasyWk 5.38 and EasyClub 1.38 (16 Sep 2026), EasyVis 1.06
    (11 Oct 2024), EasyFW 1.03 (18 Dec 2019), EasyAnzeige 1.04 (22 Jul 2026). Author: Björn
    Stickan of Erding, self-employed; former competitive swimmer and coach; referee since 1991,
    DSV referee panel from 2004, Bavarian association chief referee from late 2021, World
    Aquatics referee list since 2021; program planned 1999, released October 2000, best-times
    management added December 2003. EasyClub maintained but not developed and not sold to new
    users since 1 December 2024, WebClub (webclub.app) its browser successor. Other projects:
    swrevent.de (online entries, from March 2025, EUR 23.80 per event), kampfclub.app,
    webkurs.app. Licences in a separate shop; a licence covers all of a club's computers;
    updates free within a major version; demos free. News items for 2024-2026 as in the
    version notes below; EasyAnzeige launched 12 April 2025; finswimming, apnoea and Special
    Olympics support announced with 5.29 (5 April 2025), while the version list puts the seven
    new finswimming and apnoea strokes in 5.30 (7 April 2025).
  - easywk.de/easywk.php: features; meet types (standard, open water, DMS, DMS-J, masters DMS,
    Jugend trainiert, swimming multi-events, the DSV youth multi-event, the LSN children's
    multi-event); points by DSV, World Aquatics, masters tables and own 1000-point times;
    timing: Omega Quantum, ARES 21, OSM6 (serial or file; serial gives live timing), Daktronics
    OmniSport 1000 and 2000 (serial), Colorado System 5, System 6, System 4000A (serial) and
    Dolphin (file), ALGE (shared network folder, live timing by UDP), Sportronic (network
    messages), DIGI Sport-Event-Timer (semi-automatic, file), Superior Swim Timing (file);
    DSV 6 and 7, Lenex 3.0; fully networked by sharing the data folder; Windows 7 to 11,
    1024x600 minimum; claims use at German championships.
  - easywk.de/ewk5version.php (first 100,000 characters read): entries from 5.12 (11 Feb 2019)
    to 5.38 (16 Sep 2026). Selected: 5.13 Dolphin software 5; 5.14 DBS (para) events, Dolphin 5
    import; 5.16 Colorado scoreboard interface readable, live results page reloads every 60 s;
    5.17 SFTP; 5.19 first EasyAnzeige exports; 5.21 (6 Dec 2022) DSV7 definition export and
    DSV7 entry import, Daktronics GDP end-of-race by UDP; 5.25 (24 Mar 2024) Time Drops; 5.26
    RaceResult files; 5.27 ALGE UDP; 5.30 Omega LST export changes; 5.31 more tolerant DSV7
    relay import from Splash files; 5.35 (22 Jul 2026) DSV8 with all DSV7 functions, new Para
    add-on (WPS seeding, para records and minimum times); 5.36 (11 Aug 2026) upper-case
    extensions .DSV7/.DSV8/.DSV8z required by the DSV database; 5.37 DSV8z attachment fix.
  - Sportronic (sportronic-gbr.de): German maker of pool timing (STM-11 control unit,
    touchpads) and transponder lap counting; see sportronic.md.
  - Swimrankings wiki, Lenex page: lists "EasyWk Software für den Schwimmsport (Björn Stickan)"
    among Lenex programs.
  - sources/samples/dsv/2026-11-14-Coesfeld-Wk.dsv7: a DSV7 definition list written by EasyWk
    5.25 (24 March 2024) on 14 July 2026.
Discrepancies, flagged: networking (2016 paid add-on and single-PC rule vs 2026 full network
use); DSV formats (2016 imports Format 5; site lists 6 and 7, later 8); finswimming version.
Not found: prices; version 5 release date (earliest seen 5.12, February 2019); user numbers;
independent reviews.
-->

EasyWk is a Windows program for running swimming meets, written and sold by Björn Stickan of
Erding, Germany. It covers a meet from the invitation and entries through heat sheets, timing
and results to certificates and data files for the German federation.[^manual][^site] Stickan
began it in 1999 and first sold it in October 2000. The current version, 5.38, dates from
September 2026.[^site] EasyWk reads and writes both the German
[DSV-Standard](dsv-standard.md) and [Lenex](lenex.md), and a German club's published definition file
for a November 2026 meet is one it wrote.[^product][^coesfeld][^wiki]

## History

This section traces the program and its author.

Stickan is a former competitive swimmer and coach from Bremen, and has refereed since 1991. He
joined the German federation's referee panel in 2004 and the World Aquatics referee list in
2021, according to his website. He planned EasyWk in 1999, put it on sale in October 2000, and
added a best-times program for clubs in December 2003.[^site] The 2016 manual describes version
4. A converter program carried data over from version 3, though certificate layouts had to be
redone.[^manual] Version 5 was current by February 2019. Its release notes since then run to
5.38 in September 2026, with updates for each new DSV format and point table.[^versions]

The program is written in Delphi.[^manual] Stickan also offers results services at meets, and
the family of programs around EasyWk has grown to cover club administration, open water timing
and display screens.[^site]

## Meet setup and entries

This section covers how a meet is defined and how entries come in.

A meet is built from sessions and an event list. Session times can be given as clock times or
as hours after the previous session ends. A pause between heats can also be set so that the
program estimates a realistic timetable.[^manual] Events can carry qualifying times and points
from the German, World Aquatics, masters or Rudolph tables, or from times the host sets.[^manual][^product]
The program also handles the German late-entry surcharge (ENM) charged to swimmers who miss a
qualifying time. The host chooses which outcomes trigger it and can exempt birth years or the
medal places.[^manual]

The host can publish the meet in advance as a DSV or Lenex definition file, which clubs load into
their own software instead of retyping it. Alternatively, the host can send clubs a free entry
program with the meet's data file.[^manual] Entries arrive as DSV or Lenex files, from the entry
program, from Excel sheets with the columns mapped, or by hand.[^manual] Swimmers are matched
first by their DSV registration number and only then by name and year of birth, so a misspelled
name still finds the right swimmer.[^manual]

The author follows the German competition rules strictly on substitutions. A swimmer who swims
in another's place is not simply renamed in the heat. The entered swimmer is marked as not
starting and the substitute is added as a late entry, so that both appear in the results as the
rules require.[^manual]

## Heats and running the meet

This section covers seeding and finals.

The heat sheet is seeded according to the German rules, with equal entry times placed by
lot, so seeding again can move swimmers.[^manual] Two swimmers sharing a lane can be marked A
and B rather than left and right, which suits starts from the turn end.[^manual] Semi-finals
and finals are seeded from a separate menu once the qualifying heats are done.[^manual] Start
cards, entry confirmations by e-mail and the heat sheet as a set of linked web pages come from
the same data.[^manual]

The program also scores the special formats of German swimming. These include the team
championships (DMS) for seniors, juniors and masters, the federation's youth multi-event with
its dryland tests, and the children's multi-event of the Lower Saxony association.[^manual][^product]
Para events under the German disabled sports association's rules were added in 2019. A paid Para
add-on with World Para Swimming seeding and para records followed in 2026.[^versions]

## Timing system interfaces

This section lists the consoles EasyWk reads and how it reads them.

The 2016 manual supports five consoles over a serial cable and treats them in two groups. The
Colorado consoles and the [OmniSport 2000](../equipment/swimming/timers/omnisport-2000.md) are
polled. The operator asks the console for a finished heat's times, at any point while it stays
switched on, and EasyWk can also send the meet's event list to the console. The Omega
[OSM6](../equipment/swimming/timers/osm6.md) and [ARES 21](../equipment/swimming/timers/ares-21.md)
and the [OmniSport 1000](../equipment/swimming/timers/omnisport-1000.md) send times as they
happen. EasyWk has to keep its timing window open for the whole meet, collecting each race in a
buffer from which the operator applies it to a heat. Anything left in the buffer is lost if the
window closes.[^manual]

The number of splits follows from the pool length and whether touchpads are at both ends, and
every split the console sends is stored. Within the timing window the operator sets each lane's
status, flags records, disqualifies, corrects times, and can promote a lane's backup time to the
official time.[^manual]

The 2026 product page lists a wider range:[^product]

| Maker | Systems | Link |
|---|---|---|
| Omega ([Swiss Timing](../vendors/swiss-timing.md)) | [Quantum](../equipment/swimming/timers/quantum.md), ARES 21, OSM6 | Serial cable (with live timing) or file import |
| [Daktronics](../vendors/daktronics.md) | OmniSport 1000, OmniSport 2000 | Serial cable |
| [Colorado Time Systems](../vendors/colorado-time-systems.md) | [System 5](../equipment/swimming/timers/system-5.md), [System 6](../equipment/swimming/timers/system-6.md), [System 4000A](../equipment/swimming/timers/system-4000.md) | Serial cable |
| Colorado Time Systems | [Dolphin](../equipment/swimming/semi-automatic/dolphin.md) | File import |
| [ALGE-Timing](../vendors/alge-timing.md) | ALGE swimming systems | Shared network folder; live timing by network messages |
| [Sportronic](../vendors/sportronic.md) | Sportronic systems | Network messages |
| [Superior Swim Timing](../vendors/superior-swim-timing.md) | SST | File exchange |
| [DIGI Sport-Event-Timer](../equipment/swimming/semi-automatic/digi-sport-event-timer.md) | Semi-automatic timer | File import |

[Time Drops](../vendors/time-drops.md) support followed in March 2024.[^versions] Files written
by other systems can also be read heat by heat. The 2016 manual lists the
[ZES99](../equipment/swimming/timers/zes99.md), a system used mainly in finswimming, and the
results file that Omega's database writes during a meet.[^manual]

## Displays and live results

This section covers what EasyWk shows to spectators.

EasyWk itself prints and exports. Its results can be uploaded by FTP, or by SFTP since 2021, as
a live results page that reloads itself every minute.[^versions] Spectator screens are left to
two companion programs. [EasyVis](easyvis.md) provides an announcer screen, award ceremony slides
and a projector display of Omega timing data. [EasyAnzeige](easyanzeige.md), launched in April
2025, drives a video scoreboard as a second screen over HDMI, linked to the timing system.[^site]
Since 2020 EasyWk can also read the scoreboard output of a Colorado console for these
displays.[^versions]

## Results and data exchange

This section covers the results files the program writes.

The results protocol includes the lists the German rules ask for, such as the participating
clubs and a description of the pool.[^manual] From it EasyWk writes DSV files for each club, sent
by e-mail if wanted, and a meet-wide results list. The meet-wide list is the file that goes to
the federation's best-times administrator.[^manual] It writes the same content as Lenex
invitation, entry and results files. The 2016 manual describes Lenex as the more complete
European counterpart of the German format.[^manual] CSV, Excel, PDF and HTML exports cover the
rest.[^manual][^product]

The program's DSV support has followed each version of the standard. The 2016 manual reads
Format 5 entry files. Version 5.21, of December 2022, added Format 7 definition and entry files
ahead of that format coming into force in January 2023. Version 5.35, of July 2026, added
Format 8.[^manual][^versions][^dsv] A month later 5.36 changed the file extensions to upper case,
`.DSV7`, `.DSV8` and `.DSV8z`, because the federation's database required it.[^versions]

## Networking and licensing

The 2016 manual did not allow several computers to work on one meet's data. A paid add-on,
introduced with version 4.06, let other computers connect to the one running EasyWk: NetSpeaker
for the announcer and NetEdit for entering results heat by heat.[^manual] The 2026 product page
describes EasyWk 5 instead as fully networked, with any number of computers sharing the data
folder.[^product]

Licences are sold through the author's online shop, and one licence covers all of a club's
computers. Updates within a major version are free, a new major version may be charged as an
upgrade, and demonstration versions are free. No prices are published on the main site.[^site]
The program runs on Windows 7 to 11, and the author reports that it also runs under Windows
emulation on Mac and Linux, without guaranteeing it.[^product]

## Related programs

This section lists the author's other programs.

| Program | Purpose | Version (2026) |
|---|---|---|
| [EasyClub](easyclub.md) | Club administration and best times; no longer sold to new users since December 2024, with the browser-based WebClub as its successor | 1.38 |
| [EasyVis](easyvis.md) | Announcer, award and timing-data screens | 1.06 |
| [EasyFW](easyfw.md) | Stand-alone PC timing for open water, exporting finish times to EasyWk | 1.03 |
| [EasyAnzeige](easyanzeige.md) | Video scoreboard control | 1.04 |

Versions are from the author's website.[^site]

## See also

- [DSV-Standard](dsv-standard.md): the German exchange format EasyWk reads and writes
- [Lenex](lenex.md): the European XML format it also supports
- [Splash Meet Manager](splash-meet-manager.md) and [CPS-Schwimm](cps-schwimm.md): other meet programs used in Germany
- [Software](index.md): the software overview

## References

[^manual]: Björn Stickan, [Dokumentation EasyWk – DAS Schwimmwettkampfprogramm](https://www.easywk.de/doc/DokuEasyWk.pdf) (status 12 March 2016; in German).
[^site]: [EasyWk, Software für den Schwimmsport](https://www.easywk.de/) (home page: versions, author, products; as of October 2026; in German).
[^product]: [EasyWk, EasyWk 5](https://www.easywk.de/easywk.php) (features, timing systems, requirements; in German).
[^versions]: [EasyWk, version history of EasyWk 5](https://easywk.de/ewk5version.php) (5.12 to 5.38, 2019–2026; in German).
[^coesfeld]: [SC Coesfeld, Volksbank Westmünsterland-Cup 2026 definition list](https://sccoesfeld.org/files/cup2026/2026-11-14-Coesfeld-Wk.dsv7) (written by EasyWk 5.25, July 2026).
[^wiki]: [Swimrankings, Lenex](https://wiki.swimrankings.net/index.php/swimrankings:Lenex) (software list).
[^dsv]: [Deutscher Schwimm-Verband, DSV Standard, Format 7](https://www.dsv.de/download-file?file_code=b991de636e&file_id=1258) (31 August 2022; in German).

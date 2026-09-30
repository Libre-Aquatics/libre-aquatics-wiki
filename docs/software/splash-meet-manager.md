---
title: Splash Meet Manager
description: >-
  Splash Meet Manager is a Swiss Windows program for running swimming competitions, required
  for sanctioned meets in Switzerland and licensed nationally by several European federations.
tags:
  - Software
  - Meet management
  - Swimming
---

<!--
Research notes, Splash Meet Manager. Built out from a stub in September 2026.

The local sources/ corpus was empty in the checkout this pass was written from, so every
source below was read on the web. Plain-text copies were saved under
sources/reference/splash/ so the copying check has something to compare against.

What the stub left open, and what this pass settled:

  Company. The GeoLogix question is resolved. Splash began as Christian Kaufmann's own
  business in Berne. In January 2002 the website moved to splash.swimnews.com under a joint
  venture with the Canadian magazine SwimNews; the home page of that site says the software
  had by then been in use in Switzerland for more than ten years. An archived "About us" page
  (last edited April 2007, captured June 2010) says GeoLogix AG of Berne took over support,
  maintenance and development in November 2003, with Kaufmann as a shareholder and staff
  member. The splash-software.ch footer reads "by GeoLogix AG" from at least February 2004.
  Moneyhouse gives GeoLogix AG as registered 14 March 2002, still active, with Kaufmann on its
  board. Splash Software GmbH, Spiegel bei Bern, was entered in the commercial register on
  7 December 2015 with Kaufmann as sole manager and shareholder; a new licence-registration
  system started on 1 January 2015, and old serial numbers were still handled through
  helpdesk.geologix.ch. The current site credits Kaufmann, at Splash Software GmbH, with both
  writing and supporting it. Whether GeoLogix still has any role is not stated
  anywhere read; the article says only what the dates show.

  Swim Wiki status. The wiki's main page presents it as the help site for Kaufmann's own
  swimming products, so it is vendor documentation, not independent. Cited as Swim Wiki.

  Founding year. The 2026 site says the software has been built in Switzerland since 1988.
  Older material gives round spans instead: more than ten years in Switzerland (January
  2002), more than fifteen years of experience (page last edited April 2007), more than
  twenty-five years (brochure, April 2018). These do not contradict 1988, but none of them
  names a year, so the article attributes 1988 to the vendor.

Versions. The 2002 site lists Meet Manager 2002.14 (May 2002) and says users of any 7.xx
  Splash product could update free until end of March 2002, so a 7.x line preceded the
  year-numbered one. Year numbering: 2004.79 (February 2004), 2006.138 (July 2006). The
  site announced "Splash Meet Manager 2007" on 3 August 2007 after long testing. In April
  2010 the site's version box still read Meet Manager 2007.7735, while the release-notes page
  archived two months later lists build 7735 of 8 April 2010, and the How-to-start guide
  dated May 2010 and the FAQ of October 2011 both call the program Meet Manager 11. So the
  "2007" and "11" names cover the same line, with a build counter that kept running. That
  identification is an inference from the shared build number; no page says it in words.
  The Swim Wiki release notes start at 11.34686 (5 January 2015) and run to 11.85099
  (11 August 2026), with a preview build 85299 of 13 September 2026 on the downloads list.
  Installer sizes: about 10 MB (2010 guide), about 20 MB (current installation page), setup
  files of 13-17 MB on the download list.

Platform. Win32; Windows 10 or 11 named, back to Windows 8 without guarantee. Uses the
  Microsoft Jet engine and Access .mdb meet files by default. An Enterprise Edition can
  instead open a .ini describing a connection to a database server (Firebird, Microsoft SQL
  Server, MySQL, Oracle and PostgreSQL are the values listed), creating its tables on first
  connection. The 2011 FAQ mentions an embedded Firebird engine limited to local files at
  that time. Multi-user access over a network is supported; event-structure changes are
  advised in single-user mode. There is no separate backup format: copying the .mdb is the
  backup, with a "concurrent" backup option when several users are connected. Not named in
  the article body because none of the database products is in this wiki's scope.

Timing interfaces, by date:
  - 2002 SwimNews-era ads (see splash-software.md): Omega, Daktronics, Colorado, ALGE,
    Longines.
  - May 2010 guide: Omega ARES 21, OSM 6, OSM 5, Powertime; ALGE Swim2000 and S4; Colorado
    System 5; Daktronics OmniSport 1000 and 2000. Plus an integrated test timing system.
  - April 2010 release notes: ALGE SwimTime interface added (build 7735); Hy-Tek database
    3.0 import added in the same build; Dolphin decimal-separator handling February 2010.
  - October 2011 FAQ table: bidirectional ALGE SwimTime (file messages), Colorado Dolphin
    Wireless (files), Colorado System 5 (serial), Daktronics OmniSport 2000 (serial), Swiss
    Timing ARES 21 (file messages); unidirectional ALGE S4 and Swim2000, OmniSport 1000,
    OSM 6 (two variants), OSM 5, Powertime (all serial). Colorado System 6 listed with no
    implementation state. Unidirectional results are buffered in the meet database, so they
    survive a crash and can be read in any order and more than once.
  - April 2018 brochure: adds Colorado System 6 and Seiko PT-8000 to the list; Macsha named
    among supported makers in the feature bullets.
  - Swim Wiki pages: Omega Quantum Aquatics from build 20948 (shared directory, the "DH
    Splash protocol" selected in Quantum); Stramatel AquaSwim V from build 29062, last
    corrected in 31517 (meet.xml written by Meet Manager, per-heat result files named by
    internal heat id, polled every second); ALGE SwimTime via splash_send.txt and
    splash_receive.txt in a shared folder.
  - Release notes: Seiko PT-8000 (July 2016, fixes February 2023); Omega ARES 21 finals fix
    and Stramatel final-event export (January 2016); Colorado Dolphin events file (October
    2020); Swiss Timing Quantum Interface 2.0 over UDP/TCP instead of shared files (January
    2021); Wylas split and backup times (March 2022) and a first-lane fix (December 2024);
    Time Drops interface (January 2023); Swimster touchpad mode (April 2024); Quantum "Splash
    V2" with Quantum 6.1.19 or later (August 2024); generic JSON REST API over an integrated
    HTTP server (February 2025); Colorado Gen7 reaction-time fix and .scb start-list export
    (August 2025).
  - 2026 site: ALGE, Colorado, Daktronics, Macsha, Omega, Seiko, StramaTel and Time-Drops;
    video graphics StreamlineTek and Sport in a Box. The vendor spells Time Drops with a
    hyphen; the company itself writes Time Drops.
  Not named in the body, because each would need a stub and none had enough behind it:
  ARES 21, OSM 5, OSM 6, Powertime, Swim2000, S4, SwimTime, PT-8000, AquaSwim V,
  Swimster, StreamlineTek, Sport in a Box, Leverade (a data-exchange interface added in
  2021). Worth stubbing on a later pass.

Data exchange. SPLASH/Lenex, SDIF and DSV import and export (DSV 5 in the 2018 brochure's
  first page, DSV 6 on its feature page, DSV 7 from December 2022 for import and February
  2023 for export). Hy-Tek: .ev3 export for Hy-Tek Team Manager (January 2017), .hy3 entry
  import alongside .cl2 (May 2024). A semicolon CSV entries format is documented on the
  wiki. Records import and export in Lenex or Excel.

Live results. Added in build 2007.87, announced 26 August 2008. Publishes PDF and HTML to
  a local folder and uploads by FTP (TLS 1.2 from October 2023, SFTP from December 2024), or
  to the swimrankings.net calendar for federations holding that licence; the 2011 FAQ
  advised against the calendar option for big meets because availability was not
  guaranteed. The 2018 brochure says the calendar was then used by Portugal and
  Switzerland. SplashMe (iOS and Android) reads data Meet Manager publishes; it needs a
  swimrankings.net calendar id and athletes synchronised to swimrankings ids. The App Store
  listing gives the developer as Manuel Roth. A 2006 news item describes publishing entries
  and results to an Online Viewer at results.swimrankings.net, an earlier mechanism.

Licensing and prices. 2002 (CAD): Meet Manager 595, Team Manager 195, with USD and EUR
  approximations; Entry Editor and Result Viewer free; a free Meet Manager version offered.
  2026 (CHF): Meet Manager 495, Team Manager 195, both 595, one-time, with a year of
  updates; afterwards 70 a year ongoing or 110 for a single year (Meet Manager). Demo
  version expires and restricts printing. KNZB (February 2023): first licence EUR 150 per
  club and EUR 75 per start community, then annual maintenance; licence may be installed on
  any number of club computers; sharing it with a third party is fined EUR 500.

Adoption, with what each source supports:
  - Swiss Aquatics (competition page, read September 2026): Meet Manager compulsory for all
    meet organisers in Switzerland; Team Manager compulsory for entering swimmers; results
    go to swimrankings through the calendar function. Independent of the vendor.
  - KNZB (February 2023): Splash in use by many clubs since 2006, over 300 clubs at the
    time; support routed through KNZB. Independent.
  - FPN Portugal: global agreement announced on the Splash site 11 October 2006. Vendor.
  - Quebec (FNQ): adopted Meet and Team Manager for all clubs from 2003/04; Canadian Open
    2003 in Quebec City run on it. Vendor news items of December 2003 and January 2004.
    This answers the Aquabec stub's open question in part.
  - Swimming Canada: a February 2025 clinic deck names Hy-Tek and Splash as meet software
    used in Canada; the record-application page supplies Splash record files. Swim Ontario
    lists Hy-Tek, Splash or other. Independent.
  - 2010 customers page: global agreements for Tirol (Austria), the Quebec federation,
    Luxembourg, KNZB and NCS (Netherlands), Portugal, Serbia and Swiss Swimming; single
    club licences in Germany, Iceland, Poland and elsewhere in Canada. Vendor.
  - 2026 site testimonials and list: RFEN (Spain), Swimming Canada, Slovak federation, FPN,
    Swiss Aquatics, KNZB, Malta, B-Swim (Spanish para swimming). Vendor.
  - Current support page lists federation support contacts for Tirol, Vienna, FFBN and VZF
    (Belgium), Quebec, Estonia, Iceland, Luxembourg, KNZB, NCS, Portugal, Russia, Slovakia,
    Slovenia, Swiss Swimming and Turkey. Vendor.
  Swimming Canada is on the vendor's federation list, but Swimming Canada's own documents
  present Splash as one of two options, not a national standard. The article says so.

Sources (all read in full unless noted):
  splash-software.ch/en/ (2026); wiki.swimrankings.net Main Page, Support, and Meet Manager
  pages for Installation, FAQ, Release Notes, Update from before 2015, Database Connections,
  Data Access Storage and Backup, Timing System pages (ALGE SwimTime, Omega Quantum
  Aquatics, Stramatel AquaSwimV, Generic Txt Heat Files, Colorado Dolphin Wireless), Export
  and Import Formats, SplashMe, and the downloads template; Meet_Manager_How-to-start.pdf
  (May 2010); Meet_Manager_FAQ.pdf (October 2011); swimrankings.net/files/MeetManager.pdf
  (April 2018); Wayback captures of splash.swimnews.com (June 2002: home, products, order)
  and splash-software.ch (February 2004, August 2006, May 2009, April 2010, June 2010: about
  us, customers, release notes); Moneyhouse extracts for Splash Software GmbH and GeoLogix
  AG; Swiss Aquatics Wettkampfbetrieb page; KNZB Splash software page (February 2023);
  Swimming Canada Meet Manager clinic (February 2025) and record-application page; Swim
  Ontario meet manager role page; time-drops.com; App Store listing for SplashMe.
  swimrankings.net itself served a bot challenge and was not read directly.

Still open: when Meet Manager first ran on Windows; what the 7.x line was; whether GeoLogix
retains any role after 2015; any use at World Aquatics or European Aquatics championships
(nothing found; those events publish Swiss Timing results); a proper history of the Entry
Editor, Result Viewer and Points Calculator, the free companion programs of the 2000s.
-->

Splash Meet Manager is a Windows program for running swimming competitions. It builds the
event programme, takes entries, seeds heats, collects times from the timing equipment,
applies scoring and records, and prints and publishes start lists and results.[^site][^howto]
It is written in Switzerland by Christian Kaufmann and sold by
[Splash Software](../vendors/splash-software.md) of Spiegel bei Bern, and it is tied closely to
the [Swimrankings](swimrankings.md) results database and the [Lenex](lenex.md) exchange
format, both of which Kaufmann also maintains.[^site][^wikimain]

The program is compulsory for meet organisers in Switzerland and is distributed through
federation agreements in the Netherlands, Portugal, Quebec and several other countries.[^swissaq][^knzb][^support]
Splash says it has been built in Switzerland since 1988.[^site]

## Naming and versions

The name has changed with the program's distributors, and the version numbering has changed
twice.

In 2002 the program was sold as SwimNews Splash Meet Manager, and later simply as Splash Meet
Manager.[^sn2002][^ss2004] The publisher named in its documentation has changed in step: Splash Software on its own, then Splash Software and GeoLogix AG, then Splash Software
GmbH (see History).[^howto][^brochure]

The earliest numbering on record is a 7.x series, which the 2002 order page mentions only as
the version whose users could update for free until the end of March 2002.[^sn2002ord] Releases
from then on were numbered by year, with a build count after the point: 2002.14 in May 2002,
2004.79 in February 2004 and 2006.138 in July 2006.[^sn2002][^ss2004] Splash announced
Meet Manager 2007 in August 2007 as a completely rewritten program, which kept each meet in a
single file and could exchange data with the 2006 version only through Lenex.[^ss2010][^mm2007]

The 2007 program and Meet Manager 11 appear to be the same product. In April 2010 the Splash
website listed the current release as 2007.7735, while the release notes of the same period
list build 7735 of 8 April 2010, and the user guide dated the following month calls the
program Meet Manager 11.[^ss2010][^ssrel][^howto] The build counter has run on without a reset
since then. Current releases carry version numbers of the form 11.85099, where the part after
the point is the build; 11.34686 was issued in January 2015 and 11.85099 in August
2026.[^relnotes]

## Role in a meet

Meet Manager holds the structure of a competition and everything recorded against it. Timing
is done by other equipment. The console on deck measures the race and Meet Manager reads the
times back from it.[^faq]

The work is divided into modules that follow the order of a meet: an events module for
sessions, events and age groups; an entries module for athletes, clubs, relay teams and
seeding; a results module for times, splits and disqualifications; a records module; and a
clubs module for synchronising athletes with Swimrankings.[^howto][^splashme] All import and
export functions sit in a single Transfer menu.[^faq]

Each meet is one database file, by default a Microsoft Access file, which also holds the
meet's report settings, so copying the file moves or backs up the whole meet. Several
computers can work on the same file over a network, although Splash advises making changes
to the event structure with only one user connected. An Enterprise Edition can store the meet
on a database server instead.[^backup][^dbconn]

A new meet can be started blank or from a template downloaded from the Splash server.
Federations with a national agreement can keep their own sets of templates there.[^howto]

## Event structure, seeding and results

Meet Manager builds a meet as sessions, events and age groups, and later rounds are added
beneath the first round of an event. A timed final or preliminary event can be followed by
semi-finals, finals, swim-offs, a fastest-heat event and a medal ceremony, and A, B and C
finals are supported.[^howto][^site] Custom disciplines can be defined, and combined
classifications can add up to twelve results by time or by points.[^brochure] The vendor says
the program handles all para-swimming and lifesaving events.[^site] Later releases added a
relay stroke for fin swimming (2025), a time-trial event type that is never counted toward
medals or points (2023), and separate heat events so that heats of one event can be swum at
different points in the schedule (2024).[^relnotes]

Seeding skips entries marked as withdrawn, did not start or rejected. Entries with equal entry
times are placed in random order, and a re-seed can therefore produce a different start list.
The automatic seeding can be edited by hand in the results module.[^howto] Recent releases
added options to rank final lanes by World Para Swimming (WPS) points rather than by
preliminary time, to exclude swimmers flagged as not advancing, and to use swim-off results
when proposing a final.[^relnotes]

Times are entered by hand or read from a timing system. A heat is then set to official. Places
appear on a result list only once every heat of the event is official; before that the results
are marked as provisional.[^howto][^faq]

Team scores are calculated either from placings or by converting times to points with a
points table.[^howto] The release notes record World Aquatics points tables as they are
published each year, under the names FINA Points and, from 2025, AQUA Points. They also record
German masters and Rudolph tables, Canadian para points and user-defined tables. Since 2025 a
second points score can be shown next to the first.[^relnotes]

Records are imported from a file or downloaded from Swimrankings before the meet. During the
meet they are updated as they fall and marked on the result lists.[^howto][^brochure] Swimming
Canada supplies its national and masters record lists as Splash files for this
purpose.[^swcrecords]

Reports go to a printer, PDF or HTML, and their column layouts can be edited.[^howto] The
interface is available in eleven languages. Splash notes that a result list can be printed in a
different language from the one the operator is using, for international meets.[^site]

## Data exchange

Meet Manager reads and writes entries and results in three families of format: Lenex (which
Splash writes as SPLASH/Lenex), the American [SDIF](sdif.md), and the German
[DSV-Standard](dsv-standard.md).[^site] The DSV support has followed that format's versions: the
2018 brochure lists DSV 5 in one place and DSV 6 in another, and the release notes add DSV 7
import in December 2022 and export in February 2023.[^brochure][^relnotes]

Hy-Tek files are also handled. Meet Manager has written [EV3](ev3.md) event files for
[Hy-Tek Team Manager](hy-tek-team-manager.md) since January 2017, and it imports Hy-Tek entries
from [HY3](hy3.md) files as well as from the earlier [CL2](cl2.md) route.[^relnotes] Splash also
documents a plain CSV layout for entries, and record lists can be exchanged as Lenex or Excel
files.[^exports]

The link to Swimrankings is built in. From within the program an operator can check athletes
and entry times against the database, download records and qualifying times, and, where a
federation has a calendar agreement, publish the meet's invitation, entries and results to the
Swimrankings calendar.[^site][^brochure][^ssrel] Swiss Aquatics has meet organisers enter
results into the national rankings through that calendar function.[^swissaq]

## Connections to timing systems

All timing systems share one interface in the results module, and more than one system can be
connected to a meet at the same time. The 2011 documentation divides the interfaces into two
kinds.[^faq] A bidirectional interface lets the operator select a heat and request its results
from the console. A unidirectional one receives whatever the console sends, and Meet Manager
stores the incoming data in the meet database, so that it survives a program crash and heats
can be read in any order and more than once.[^faq]

In 2010 the supported consoles came from [ALGE-Timing](../vendors/alge-timing.md),
[Colorado Time Systems](../vendors/colorado-time-systems.md),
[Daktronics](../vendors/daktronics.md) and [Swiss Timing](../vendors/swiss-timing.md) under the
Omega name. The Colorado and Daktronics consoles were the
[System 5](../equipment/swimming/timers/system-5.md) and the
[OmniSport 1000](../equipment/swimming/timers/omnisport-1000.md) and
[OmniSport 2000](../equipment/swimming/timers/omnisport-2000.md), connected over a serial
port.[^howto][^faq] The 2011 list adds the
[Dolphin Wireless Stopwatch Timing System](../equipment/swimming/semi-automatic/dolphin.md),
which Meet Manager reads from the result files the Dolphin software writes, and it names the
[System 6](../equipment/swimming/timers/system-6.md) without yet showing it as
implemented.[^faq][^dolphin] By 2018 the System 6 and a [Seiko](../vendors/seiko.md) console
were on the list.[^brochure]

Newer interfaces mostly exchange files or network messages rather than using a serial cable.
The link to Swiss Timing's [Quantum](../equipment/swimming/timers/quantum.md) console began
as a shared data folder that both programs read and write. Since January 2021 a second version
exchanges data over the network instead.[^omega][^relnotes] [Stramatel](../vendors/stramatel.md)
systems work through files: Meet Manager writes the session's heats to an XML file and polls
every second for the result file of each heat.[^stramatel] The release notes add interfaces
for [Time Drops](../vendors/time-drops.md) in 2023 and further work on
[Wylas Timing](../vendors/wylas-timing.md) in 2022 and 2024, and in 2025 a
[Colorado Time Systems](../vendors/colorado-time-systems.md) fix for reaction times on the
[Gen7](../equipment/swimming/timers/gen7-serial.md) and export of start lists in the Gen7's
own file format.[^relnotes] Splash's current list also includes
[Macsha](../vendors/macsha.md).[^site]

For equipment with no dedicated interface, Meet Manager reads plain text files, one per heat,
with a row per lane holding the finish time, split times, reaction times and backup
times.[^generic] Since February 2025 it also offers a generic interface over a built-in web
server, through which a timing system can fetch the entries and return results.[^relnotes] A
built-in test timing system simulates a race for practice.[^faq]

## Live results and publishing

Live results were added in 2008. While they are active, Meet Manager regenerates start and result
lists and its other documents in the background as heats are seeded or made official, and
uploads them to a web server by FTP.[^ss2010][^faq] SFTP upload was added in December
2024.[^relnotes] Federations with a Swimrankings calendar agreement can instead publish to the
Swimrankings servers, though the 2011 documentation warned against relying on that for large
meets because the servers' availability was not guaranteed.[^faq]

The same data feeds [SplashMe](splashme.md), a mobile application for iOS and Android that shows
live start lists and results. To appear in it, a meet must be registered in the Swimrankings
calendar and its athletes matched to their Swimrankings identifiers.[^splashme] Splash also
provides an interface that third-party displays and broadcast graphics can read.[^site]

## History

Splash Software began as Christian Kaufmann's own business in Berne. In January 2002 the
website moved to splash.swimnews.com under a joint venture with the Canadian magazine SwimNews, and the site then said the software had been in use in Switzerland for more
than ten years.[^sn2002] Prices on that site were set in Canadian dollars.[^sn2002ord]

In November 2003 GeoLogix AG, an IT services company in Berne, took over the program's
support, maintenance and development, with Kaufmann as a shareholder and member of its
staff.[^ssabout] By February 2004 the Splash website carried
GeoLogix's name, and its news page reported that the Quebec swimming federation had chosen
Splash for all its clubs and meets from the 2003–2004 season, and that the 2003 Canadian Open
in Quebec City had been run on it.[^ss2004] A national agreement with Portugal's federation was
announced in October 2006, and live results followed in 2008.[^ss2010]

Splash moved to a new registration system on 1 January 2015, and every licence holder needed a
new user number to activate updates from that date.[^update2015] Splash Software GmbH was
entered in the Swiss commercial register in December 2015, with Kaufmann as its sole manager
and shareholder.[^register] GeoLogix AG is still registered, with Kaufmann on its board, but the
current Splash website describes the program as developed and supported by Kaufmann at Splash
Software GmbH and does not mention GeoLogix.[^geologix][^site]

## Licensing

Meet Manager is sold for a one-time licence fee, either to a single club or through an agreement
that covers every club in a federation.[^brochure] Bought directly in 2026, a Meet Manager
licence costs CHF 495, a Team Manager licence CHF 195 and the two together CHF 595. Each
includes a year of updates, after which updates are paid for yearly.[^site] In 2002 the
prices were 595 and 195 Canadian dollars.[^sn2002ord]

The program must be activated online with a Splash user number and password on first launch. A
demo version is available, which expires and restricts printing.[^install]

Where a federation holds an agreement, the federation sells the licences and answers first-line
support questions, and Splash's support page directs such users to their federation.[^support]
The Dutch federation, the KNZB, charges a club 150 euros for its first licence and a yearly
maintenance fee after that. A club may install its licence on any number of its own computers.
The KNZB fines a club 500 euros for passing the licence to anyone outside it.[^knzb]

## Adoption

Adoption is broadest in countries whose federation has made Splash part of its own system. Swiss Aquatics requires Meet Manager for every competition held in Switzerland and
[Splash Team Manager](splash-team-manager.md) for entering swimmers.[^swissaq] The KNZB says many Dutch clubs have used
Splash since 2006, and put the number at over 300 in February 2023.[^knzb] Splash's support page
lists federation support contacts in thirteen countries, including Belgium, Estonia,
Iceland, Luxembourg, Portugal, Slovakia, Slovenia and Turkey.[^support]

Quebec adopted Splash for all its clubs from the 2003–2004 season, and Splash names Swimming
Canada among its users.[^ss2004][^site] Swimming Canada's own training material for
meet managers presents Splash as one of two programs used in the country, alongside
[Hy-Tek Meet Manager](hy-tek-meet-manager.md), and Swim Ontario lists both.[^swcclinic][^swimontario]

Splash names the Spanish, Slovak, Portuguese, Swiss, Dutch and Maltese federations among its
users, a list that is the vendor's own.[^site] The American timing maker Time Drops lists it among
the meet programs its equipment supports.[^timedrops]

## See also

- [Splash Team Manager](splash-team-manager.md): the club-side program from the same developer
- [SplashMe](splashme.md): the mobile application that shows Meet Manager's live results
- [Hy-Tek Meet Manager](hy-tek-meet-manager.md): the American program it is used alongside in Canada
- [Lenex](lenex.md) and [Swimrankings](swimrankings.md): the exchange format and results
  database maintained by the same author
- [Software](index.md): the software overview
- [Splash Software](../vendors/splash-software.md) and [GeoLogix](../vendors/geologix.md): the
  publisher and its former partner

## References

[^site]: [Splash Software, Meet Manager and Team Manager for swimming](https://splash-software.ch/en/).
[^wikimain]: [Swim Wiki, Main Page](https://wiki.swimrankings.net/index.php/Main_Page).
[^relnotes]: [Swim Wiki, Meet Manager: Release Notes](https://wiki.swimrankings.net/index.php/Meet_Manager:Release_Notes).
[^install]: [Swim Wiki, Meet Manager: Installation](https://wiki.swimrankings.net/index.php/Meet_Manager:Installation).
[^update2015]: [Swim Wiki, Meet Manager: Update from before 2015](https://wiki.swimrankings.net/index.php/Meet_Manager:Update_from_before_2015).
[^backup]: [Swim Wiki, Meet Manager: Data Access, Storage and Backup](https://wiki.swimrankings.net/index.php/Meet_Manager:Data_Access,_Storage_and_Backup).
[^dbconn]: [Swim Wiki, Meet Manager: Database Connections](https://wiki.swimrankings.net/index.php/Meet_Manager:Database_Connections).
[^exports]: [Swim Wiki, Meet Manager: Export and Import Formats](https://wiki.swimrankings.net/index.php/Meet_Manager:Export_and_Import_Formats).
[^generic]: [Swim Wiki, Meet Manager: Timing System Generic Txt Heat Files](https://wiki.swimrankings.net/index.php/Meet_Manager:Timing_System_Generic_Txt_Heat_Files).
[^omega]: [Swim Wiki, Meet Manager: Timing System Omega Quantum Aquatics](https://wiki.swimrankings.net/index.php/Meet_Manager:Timing_System_Omega_Quantum_Aquatics).
[^stramatel]: [Swim Wiki, Meet Manager: Timing System Stramatel AquaSwimV](https://wiki.swimrankings.net/index.php/Meet_Manager:Timing_System_Stramatel_AquaSwimV).
[^dolphin]: [Swim Wiki, Meet Manager: Timing System Colorado Dolphin Wireless](https://wiki.swimrankings.net/index.php/Meet_Manager:Timing_System_Colorado_Dolphin_Wireless).
[^splashme]: [Swim Wiki, Meet Manager: SplashMe](https://wiki.swimrankings.net/index.php/Meet_Manager:SplashMe).
[^support]: [Swim Wiki, Support](https://wiki.swimrankings.net/index.php/Support).
[^howto]: [Splash Software, Meet Manager 11: How to Start](https://wiki.swimrankings.net/images/8/83/Meet_Manager_How-to-start.pdf) (GeoLogix AG, May 2010).
[^faq]: [Splash Software, Splash Meet Manager 11 FAQ](https://wiki.swimrankings.net/images/4/45/Meet_Manager_FAQ.pdf) (October 2011).
[^brochure]: [Splash Software, Splash Meet Manager](https://www.swimrankings.net/files/MeetManager.pdf) (product brochure, April 2018).
[^sn2002]: [SwimNews Splash Software, Home](https://web.archive.org/web/20020608160140/http://splash.swimnews.com/index.php?s=home) (archived June 2002).
[^sn2002ord]: [SwimNews Splash Software, Prices](https://web.archive.org/web/20020608161211/http://splash.swimnews.com/index.php?s=ord) (archived June 2002).
[^ss2004]: [Splash Software, Home](https://web.archive.org/web/20040207215347/http://www.splash-software.ch/index.php?nav=&new_lang=en) (archived February 2004).
[^ss2010]: [Splash Software, Home](https://web.archive.org/web/20100421014046/http://www.splash-software.ch/index.php?nav=,home,A) (archived April 2010; news items from 2006 to 2009).
[^ssabout]: [Splash Software, About Splash Software and GeoLogix AG](https://web.archive.org/web/20100623045638/http://www.splash-software.ch/index.php?nav=,home,B) (archived June 2010).
[^ssrel]: [Splash Software, Release notes](https://web.archive.org/web/20100623045701/http://www.splash-software.ch/index.php?nav=,home,C) (archived June 2010).
[^mm2007]: [GeoLogix AG, Splash Meet Manager 2007](https://web.archive.org/web/20100525012839/http://www.splash-software.ch/files/MM_2007_Release-en.pdf) (release notice, August 2007).
[^register]: [Moneyhouse, Splash Software GmbH](https://www.moneyhouse.ch/en/company/splash-software-gmbh-4601353321) (commercial register extract).
[^geologix]: [Moneyhouse, GeoLogix AG](https://www.moneyhouse.ch/en/company/geologix-ag-11727041011) (commercial register extract).
[^swissaq]: [Swiss Aquatics, Wettkampfbetrieb](https://www.swiss-aquatics.ch/leistungssport/swimming/wettkampfbetrieb/) (competition operations; in German).
[^knzb]: [KNZB, Splash software](https://www.knzb.nl/kennisartikelen/splash-software) (February 2023; in Dutch).
[^swcclinic]: [Swimming Canada, Meet Manager clinic](https://www.swimming.ca/wp-content/uploads/2025/02/Meet-Manager-Clinic-20FEB2025-Q.pdf) (February 2025).
[^swcrecords]: [Swimming Canada, Canadian Record Application Procedure](https://www.swimming.ca/canadian-record-application-procedure/).
[^swimontario]: [Swim Ontario, Meet Manager role](https://www.swimontario.com/officials/roles/meet-manager-role/).
[^timedrops]: [Time Drops, Wireless Swim Timing System](https://time-drops.com/).

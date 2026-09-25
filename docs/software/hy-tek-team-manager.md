---
title: Hy-Tek Team Manager
description: >-
  Team Manager is the club-side half of the Hy-Tek pair, holding a team's roster and
  best times and producing the entries that Meet Manager seeds a competition from.
tags:
  - Software
  - Team management
  - Swimming
---

<!--
Research notes, Hy-Tek Team Manager. Built out from a stub in September 2026.

Primary source for the current program: Hy-Tek's own TEAM MANAGER 8.0 for Swimming user
guide, published as HTML at hytek.active.com/User_Guides_HTML/SwTM8/HTML/ and read page by
page for this pass (contents, introduction, system requirements, product packages, TM Lite,
evaluation edition, getting started, FAQ, database conversion, export meet entries, import
meet results, export registration, SDIF conversion, SWIMS and USA-S imports, pace clock,
Team Connect Online, Team Stats Online, Pro SWIMMER import, licence management, Masters,
BCSSA). The guide is a help project carried forward from release to release and it shows:
the TM 8 introduction still calls the program the seventh generation, the default install
path it gives is c:\Hy-Sport\TM7, the import page unzips into a folder called TM6Temp, the
Pro SWIMMER page speaks of TM 6.0, and the options page tells a user to delete TM4.bmp.
Treat any single sentence of it as possibly a release or two stale.

The generation count, and the discrepancy the body flags. The database-conversion page is
the only source that lays the whole lineage out, and it numbers it: DOS-TM first, WIN-TM 1.6
second, TEAM MANAGER II Release 2 or 3 third, TM 4.0 fourth, TM 5.0, 6.0 and 7.0 fifth to
seventh. That makes 8.0 the eighth, while the introduction on the same guide calls 8.0 the
seventh. The introduction is almost certainly a sentence carried over from TM 7; the
conversion page is the more specific source and the body prefers it, but says so.

Dates, each from a dated Hy-Tek page unless marked:
  1986-10 swimming-world/198610.txt:14742-14755  earliest firm attestation, paired with Meet
          Manager; see hy-tek-meet-manager.md for why October and not August 1986.
  1989-05 swimming-technique/198905.txt:663  family advertisement, IBM-PC.
  1990-09 swimming-world/199009.txt:888-891  Workout Manager released; Team Manager among
          the programs updated with over fifty enhancements (company figure).
  1990-11 swimming-technique/199011.txt:757-760  editorial survey; modem transfer between
          teams; competitors Easy Team Manager (Easy Meet) and ProGrams' Team 1000.
  1991-08 swimming-world/199108.txt:2834-2860  Team Manager product copy in the Special
          Section: Computer. The column is interleaved with Easy Team Manager's copy and must
          be read line by line. Hy-Tek's list, reordered: records at team, pool and league
          level; best or full time lists; time standards, with the USS set bundled; rosters
          of several kinds; attendance; mailing and award labels; entries printed as a report
          or as labels; graphs; results prediction; and conversion between yards and short
          and long course metres.
  1998-01 swimming-technique/199801.txt:1561  TEAM MANAGER for Windows advertised as
          available now. Also swimming-world/199812.txt:7655.
  1998-04 Hy-Tek newsletter August 2000 (Wayback 20010719031554): WIN-TM released April
          1998, 16-bit, Windows 3.1/95/98/NT/2000; current web release 1.6R; TM II announced
          as a full 32-bit rewrite, scheduled for the first quarter of 2001, about 40 new
          features. Group-discount price $74.25 for qualifying LSCs and provinces.
  2000-02 Wayback 20000302155944 whatsnew: WIN-TM 1.6P, 18 February 2000.
  2001-04 Wayback 20011214083428 whatsnew: TM II shipping 30 April 2001; "true 32 bit";
          over 50 new features against WIN-TM; upgrade $69; TM II Lite free to meet hosts.
          The August 2000 newsletter said about 40 new features and the shipping notice says
          over 50; both are company figures for the same release and neither is in the body.
  2001-04 swimming-world/200104.txt:3503  TM II for Windows advertised as new for 2001,
          with the Lite edition offered for sending entries (Lite called free from 2002).
  2002-10 Wayback 20050101161310 whatsnew: TEAM MANAGER Online, 5 October 2002, with a
          two-week free trial. The magazines first carry it in November 2002
          (swimming-world/200211.txt:2080). The team-manager-online.md stub had April 2003
          as the first date; this is six months earlier.
  2002-10 same page: WORKOUT MANAGER for Windows shipping, 29 October 2002; advertised
          as "TEAM MANAGER II and Workout Manager" from November 2002.
  2002-12 TEAM MANAGER 3.0B with TEAM Signup Online, 16 December 2002; 3.0C with
          ProSWIMMER 3.0, 17 March 2003. So TM II's releases were numbered 2.x and 3.x, which
          is why the guide calls the third generation "TEAM MANAGER II Release 2 or 3".
  2004-03 TEAM MANAGER 4.0, 12 March 2004, "over a hundred" new features (company figure);
          4.0F in July 2004 for USA Swimming's 2005 registration; TM Online 2.0 in September
          2004; 4.0J in July 2005 with a points report for USA Swimming's IM Xtreme
          challenge; 4.0Ra in July 2007 for 2008 registration. Advertised in
          swimming-world/200406.txt:1644.
  2008-04 Wayback 20090207143511 whatsnew: TM 5.0 beta 22 February 2008, production 7 April
          2008. Three months before the Active acquisition of 8 July 2008.
  2015-12 TM 8.0, 15 December 2015 (store page and the release notes' first entry, 8.0Ca).
  2026-06 8.0Gf, 23 June 2026, the latest in the release notes as of September 2026.
TM 6.0 and 7.0 are undated here. A search result claimed TM 6.0 support ended 15 July 2012;
that was a search-engine summary and was not verified, so it is not used.

Prices, from hytek.active.com/store/swim/TM8.html as of September 2026: Bronze $170, Silver
$395, Gold $570; upgrade from 7.0 or earlier $59; replacement $25; advancing Bronze to Silver
$225, Silver to Gold $175, Bronze to Gold $400. CD delivery withdrawn; web delivery link valid
two years. The store page carries two versions of the link-validity note, one commented out
saying one year; the live text says two.

The pace-clock option, a naming discrepancy flagged in the body. The TM 8 packages page puts
three Workout Manager options in Gold: Basic, Training and Pace Clock, and describes the
Pace Clock option as the one that moves workouts to a timing machine. The Daktronics PC-2001
manual (ED-13737 Rev 09, 7 August 2023, line 1171) instead names Workout Manager Basic as
the option Team Manager must have. Both could be true if the Pace Clock option depends
on Basic, but neither source says so. Daktronics cable 0A-1153-0036, 20 ft, quarter-inch
stereo phone plug to DB9; the Daktronics procedure selects a PC-2000 button in Team Manager
and downloads lane 1 only.

Web services. Team Connect Online is a hosted copy of the team database that several users
reach remotely, sold as a subscription and bundled free with TM 8; the FAQ also refers to a
feature called TM.Net for the same purpose, probably the older name, which is inferred. Team
Stats Online publishes a team's data for browsing. A finding worth recording: the address
sports-tek.active.com/TMOnline/index.asp now serves "Hy-Tek's Team Stats Online Version
2.0C", and Hy-Tek released TEAM MANAGER Online Version 2.0 in September 2004. The path and
the version sequence both suggest Team Stats Online is Team Manager Online renamed. That is
inferred from the URL and the numbering; no source states it. Recorded on
hy-tek-team-manager-online.md too.

SWIMS. A search-engine summary asserted that Active chose not to integrate Team Manager with
USA Swimming's SWIMS 3.0 database. The USA Swimming third-party vendor page it pointed at was
fetched twice and names no vendor at all, so the claim is unverified and not in the body.
What is verified is the TM 8 guide's own SWIMS Roster and SWIMS Results imports, both of
which take an HY3 downloaded from SWIMS.

Competitors, verified. SwimTopia's help centre documents migrating a Team Manager database by
exporting it from Team Manager as a Generic MS Access file (GenericData*.mdb), with meets
grouped into seasons by date; SwimTopia's HY-TEK compatibility page says its Team product can
replace Team Manager while still swapping files with Meet Manager. TeamUnify facts are on
teamunify.md. Easy Team Manager is on easy-meet.md. ProGrams Sports Software's Team 1000 is
named once, in the 1990 survey, and has no page.

SwimNews, which is Canadian evidence and independent of Hy-Tek. Job advertisements ask for
Hy-Tek software skills from December 1994 (swimnewsn204.txt:3598) through 2003 and 2006
(swimnewsn264.txt:180, swimnewsn274.txt:266, swimnewsn289.txt:8193); Team Manager is named
specifically in April 2006 (swimnewsn289.txt:7940). The earlier stub said "1995 to 2006";
the first ad is December 1994 and names only HY-TEK software, not Team Manager. SwimNews's
own TOP (Tiny Olympic Prospects) programme moved to Team Manager entry files for its
February 2007 round (swimnewsn294.txt:200, :226).

Naming caution. Splash Software sells a program also called Team Manager (Splash Team
Manager), which is a different product from a different company; see
splash-team-manager.md. A grep for "Team Manager" in the SwimNews extractions also returns
dozens of hits for the human role of team manager, which have nothing to do with software.

Not repeated here because other pages carry it: the HY3, CL2 and HYV formats (their own
pages), the Commlink diskette era (commlink.md), the Workout Manager history
(hy-tek-workout-manager.md), and the clock-side pace-clock procedure (upc-c.md and the
Daktronics pages).

Still to research: release dates for TM 6.0 and 7.0; when Team Connect Online and TM.Net
began; whether TM II Lite and today's TM Lite are one continuous product (the guide's
description matches the 2001 notice closely); and whether Active Swim Manager is meant to
succeed Team Manager, which nothing found says.
-->

Hy-Tek Team Manager is a Windows program in which a swimming club keeps its roster, its
swimmers' results and best times, and the entries it sends to meets.[^howto][^product] It is
the club-side counterpart of [Hy-Tek Meet Manager](hy-tek-meet-manager.md): a club declares
its entries in Team Manager and exports them to the meet host, the host seeds and runs the
meet in Meet Manager, and the results file comes back to update each swimmer's
times.[^tmlite][^importres] The two programs have been advertised as a pair since
1986.[^sw8610]

Hy-Tek Sports Software publishes it, and The Active Network has owned the company since
2008.[^active08] The current version is Team Manager 8.0, released on 15 December 2015 and
still receiving maintenance updates in 2026.[^store][^relnotes]

## Role in a club

Team Manager is the program a club, school or league runs between meets, and nearly
everything in it serves that cycle. Its records are teams, coaches and athletes; meets with
their events; results; time standards; records; and, as an option, workouts.[^guide] Hy-Tek
intends one person to be able to carry most of a team's administration with it: keeping the
roster and contact details, making entries, loading results after a meet, and producing
reports for coaches, swimmers and parents.[^howto]

Because every
result is stored against an athlete, the best times used for entries and the times in the
reports come from the same records. The reports are the program's
main output: top times, seasonal spreadsheets, improvement and goal tracking, time-standard
and record matching, meet eligibility, split sheets, attendance, and mailing and award
labels.[^guide][^faq] Hy-Tek's 1991 advertising lists most of the same items, which suggests
the program's scope has changed little since its DOS versions.[^sw9108]

The program is not limited to USA Swimming clubs. It supports high school, college,
Masters and age-group teams, and the guide carries dedicated setups for Masters, which uses
five-year age groups for records and rankings, and for the British Columbia Summer Swimming
Association, whose divisions and registration numbers the program builds
automatically.[^masters][^bcssa] A British club can load historical times extracted from
British Swimming's rankings database.[^importres]

## History

The earliest firm record of Team Manager is an October 1986 advertisement pairing it with
Meet Manager, and by May 1989 Hy-Tek was selling it as one of six programs for the IBM-PC and
compatibles.[^sw8610][^st8905] A survey in Swimming Technique in November 1990, editorial
rather than advertising, describes what the combination made possible: team and meet data
passed between computers by modem in one telephone call, after which a swimmer's times could
be graphed, ranked, and checked against records and standards. The same article names the
competing club programs of the time, Easy Meet's Easy Team Manager and the Team 1000 from
ProGrams Sports Software.[^st9011] Entries in that period travelled by
[Commlink](commlink.md), Hy-Tek's own exchange product, usually on a posted diskette.[^sw9108c]

The move to Windows came in two steps. The first Windows version, WIN-TM, was a 16-bit
program for Windows 3.1, 95, 98, NT and 2000.[^news0008] Its release date is recorded
inconsistently: a Hy-Tek advertisement in the January 1998 Swimming Technique offers Team
Manager for Windows as available then, while Hy-Tek's newsletter of August 2000 dates the
release to April 1998.[^st9801][^news0008] WIN-TM reached release 1.6R before Hy-Tek
replaced it with a complete 32-bit rewrite, Team Manager II, which began shipping on 30 April
2001. Hy-Tek priced the upgrade from WIN-TM at $69 and gave away a cut-down edition, TM II
Lite, so that clubs without the program could still send entries to a meet
electronically.[^news0008][^whatsnew01]

Team Manager II went through releases numbered 2 and 3, the third out by December 2002, and
was followed by Team Manager 4.0 in March 2004, which Hy-Tek said added over a hundred
features.[^whatsnew05][^convert] Over the same period the company
added web services around the desktop program. Team Manager Online, a hosted copy of a team's
data, opened in October 2002, and a Windows Workout Manager shipped the same month and was
then advertised together with Team Manager II.[^whatsnew05][^sw0211] Team Manager 5.0 went into production on 7 April 2008, three months before the Active
acquisition.[^whatsnew09][^active08]

Team Manager 8.0 was released on 15 December 2015 and remains the current version. Its
updates have mostly tracked outside changes, such as new World Aquatics points tables and
revised USA Swimming motivational standards, along with bug fixes.[^relnotes]

## Versions

Hy-Tek's guide counts Team Manager in generations and lists the conversion path from
each.[^convert]

| Generation | Version | Platform | Released |
|---|---|---|---|
| 1 | Team Manager for DOS | DOS | by October 1986 |
| 2 | WIN-TM, releases to 1.6 | 16-bit Windows | 1998 |
| 3 | Team Manager II, releases 2 and 3 | 32-bit Windows | 30 April 2001 |
| 4 | Team Manager 4.0 | Windows | 12 March 2004 |
| 5–7 | Team Manager 5.0, 6.0, 7.0 | Windows | 5.0 on 7 April 2008 |
| 8 | Team Manager 8.0 | Windows | 15 December 2015 |

The dates come from Hy-Tek's advertising and its own dated release announcements.[^sw8610][^st9801][^news0008][^whatsnew01][^whatsnew05][^whatsnew09][^store]

The count contains a small conflict. The conversion page places versions 5.0 to 7.0 in the
fifth to seventh generations, which makes 8.0 the eighth, but the introduction to the same
guide calls 8.0 the seventh generation.[^convert][^intro] The introduction appears to have
been carried over from the 7.0 guide, and this article follows the conversion page.

Upgrading is not always possible. A TM 8.0 program opens any database from 5.0 onward
unchanged and converts one from 4.0 or Team Manager II automatically, backing up the old
file first. A WIN-TM database can move only by exporting its swimmers and results and
importing them again, and Hy-Tek offers no route at all from the DOS program. The conversion
cannot be undone: a converted database is stored in a newer Microsoft Access format that
earlier versions cannot open, so every computer sharing a team's data has to be upgraded at
once.[^convert]

## Entries and results

The exchange with a meet host is the part of Team Manager other software has to
accommodate. The meet host usually starts it by exporting the meet's event list from Meet
Manager and sending it to each team. The team imports that file, marks which swimmers are
swimming which events, and exports the entries back.[^tmlite] With the full program an
athlete's entry time is filled in from the best times already in the database; the free
Lite edition has no history to draw on, so each entry time has to be typed.[^tmlite]

The entry export is a single zip archive named for the team and the meet, which holds two
files describing the same entries: an [HY3](hy3.md) and a [CL2](cl2.md). Hy-Tek includes
both so that whatever program the meet host uses can read one of them. Its own current
programs read the HY3, which carries more,
including pre-assigned heats and lanes and longer names, while most other meet software
reads the CL2.[^exportent] A team whose meet host wants the published standard can convert
an exported CL2 to an [SDIF](sdif.md) file, with Hy-Tek's warning that SDIF was designed
for USA Swimming meets and drops fields its own formats keep.[^sdifconv]

Results come back the same way in reverse. Team Manager reads HY3, CL2 and zipped files from
Hy-Tek programs, and SDIF files from other meet software.[^importres][^faq] When it imports
a file it identifies each swimmer by registration number first, confirming the match against
gender and surname, and otherwise by full name, gender and team. A swimmer entered under a
different name at the meet, such as a nickname, does not match and appears on an exception
report instead. Splits, reaction times and disqualification codes come across when the meet
file contains them.[^importres]

## Registration and governing bodies

Team Manager also carries a club's paperwork to its governing body. Its registration module
is built around the way USA Swimming registers swimmers nationally: it tracks each swimmer's status as new,
renewed, changed, deleted or upgraded, and exports those who have changed since the last
batch as a numbered SDIF file for the club's registration chair.[^exportreg] Hy-Tek says
the module is meant only for USA Swimming teams and tells summer leagues to use custom
fields instead.[^faq] Several 4.0 updates between 2004 and 2007 were released only to follow
USA Swimming's registration changes for the next year.[^whatsnew05][^whatsnew09]

Data also flows back from the governing body. Team Manager 8.0 imports a team's roster and
results from USA Swimming's SWIMS database, and national-meet entries from USA Swimming's
online entry system, each as an HY3 file that USA Swimming supplies for download.[^swims]

## Packages and editions

Team Manager 8.0 is sold in three packages, and a club's licence records which one it
bought.[^packages] As listed in 2026:

| Package | Price | Adds |
|---|---|---|
| Bronze | $170 | the base program: roster, entries, results, reports, and the two web services |
| Silver | $395 | records and time standards, results prediction, a journal and recruiting notes, entry and award labels, graphs, and a multi-user network option |
| Gold | $570 | the Workout Manager options: workouts, training paces, and export to pace clocks |

The prices are from Hy-Tek's store and the contents from the package descriptions in its guide.[^store][^packages]

An upgrade from 7.0 or earlier costs $59, and moving up a package afterwards costs the
difference in steps, from $175 to $400.[^store] The results-prediction option simulates a
meet from the best times of two teams in the database, which Hy-Tek aims at high school and
college dual meets.[^packages]

The free edition, TM Lite, continues what TM II Lite began in 2001. It is the full program
with limits: three meets, two teams and a hundred athletes, three of the program's exports with
the entry export among them, and printing of the entry report only.[^tmlite][^whatsnew01] It doubles as the
evaluation copy.[^eval]

A licence belongs to a team rather than a computer, and the program prints the licence name
on every report. A volunteer keeping records for two clubs on one laptop has to switch
between the two licences inside the program, because Windows will not install it
twice.[^licmgmt] In 2026 Hy-Tek added a warning before a licence expires; the release notes
for June 2026 show that a program whose licence lapses is reduced to the Lite
edition.[^relnotes]

## Web services

Two online services come free with Team Manager 8.0.[^packages] Team Connect Online keeps a
master copy of a team's database on Hy-Tek's server, so coaches and volunteers on different
computers can download it and send back their edits under permissions an administrator
sets. Hy-Tek recommends broadband for it and requires every user to be on the same program
version.[^teamconnect][^convert] Team Stats Online publishes a team's rosters, top times,
graphs, results, upcoming entries, standards and records for swimmers and parents to browse,
sort and filter.[^teamstats]

Team Stats Online appears to be the earlier [Team Manager Online](hy-tek-team-manager-online.md)
under a new name. Hy-Tek released Team Manager Online 2.0 in September 2004, and the service's
old address still serves a page headed Team Stats Online version 2.0C. No source states the
rename, so it is an inference from the address and the version number.[^whatsnew05][^tmonline]
The separate [Team Connect Online](hy-tek-team-connect-online.md) service has its own page.

## Pace clock export

With the Gold package, Team Manager sends workouts written in its Workout Manager module to a
pace clock, so a coach does not re-key a session into the clock. Hy-Tek lists the supported
targets as the Colorado Time Systems equipment it calls CTS 4, CTS 5 and CTS 6, and the
Daktronics OmniSport 2000, OmniSport 6000 and PC 2000. Transfers use a serial port with a straight RS-232
cable, except to the OmniSport 6000, which takes the workout on a floppy disk.[^paceclock]

The two vendors name the required option differently. Hy-Tek's package list puts a separate
Workout Manager Pace Clock option in the Gold package, while the Daktronics PC-2001 manual
makes the Workout Manager Basic option the prerequisite.[^packages][^dakpc] Both statements may be true if the pace-clock option depends
on the basic one, but neither source says so. Daktronics specifies a 20-foot cable with
a DB9 serial connector at the computer and a stereo phone plug at the clock.[^dakpc]

[Workout Manager](hy-tek-workout-manager.md) began in 1990 as a separate program, which is
why some documents credit the download to Workout Manager and others to Team
Manager.[^sw9009][^dakpc] The [pace clock controller](../equipment/common/pace-clock/upc-c.md)
article covers the download from the clock's side.

## Adoption

No independent count of Team Manager users exists. The figures available are Hy-Tek's, for
the company as a whole, and are covered in the
[Meet Manager](hy-tek-meet-manager.md#adoption) article.

Other people's documents show how widely it was used. Canadian clubs advertising for coaches
in SwimNews asked for experience with Hy-Tek software from December 1994, and a 2006
advertisement names Team Manager specifically.[^swn9412][^swn0604] In 2007 SwimNews moved
its own Tiny Olympic Prospects programme onto entry files exported from Team
Manager.[^swn0702] Governing bodies also rely on its file format. USA Swimming distributes
rosters and results to clubs as HY3 files that Team Manager imports directly, and local
policy manuals that require Hy-Tek entry files are described in the Meet Manager
article.[^swims]

Competing products are built around it as well. SwimTopia documents a migration from Team
Manager and describes its team product as a replacement for it that still exchanges files
with Meet Manager.[^swtimport][^swtcompat] Active's own web product,
[ACTIVEWorks Swim Manager](activeworks-swim-manager.md), sits alongside Team Manager rather
than replacing it: Team Manager's release notes include fixes for importing Swim Manager
entry files and for synchronising with it.[^relnotes]

## Compared with other club software

Team Manager is a desktop program with a local database. The club web services that
compete with it keep a team's data online and add registration, billing and communication
with families, which Team Manager covers only through its separate web services and
Active's other products.[^teamconnect][^swtcompat]

- [TeamUnify](teamunify.md), founded in 2007 in Bend, Oregon, and bought by SportsEngine
  in 2016, gave its own reach then as 4,000 swimming organizations.[^teamunify]
- [SwimTopia](swimtopia.md) was started by a swim-team parent and imports a Team Manager
  database directly.[^swtabout][^swtimport]
- [Splash Team Manager](splash-team-manager.md), from Splash Software, has the same name
  but is a different program from a different company.

## See also

- [Hy-Tek Meet Manager](hy-tek-meet-manager.md): the meet-side counterpart
- [Hy-Tek Workout Manager](hy-tek-workout-manager.md): the training module sold inside it
- [Hy-Tek Team Connect Online](hy-tek-team-connect-online.md): the shared online database
- [Hy-Tek Team Manager Online](hy-tek-team-manager-online.md): the web database, now Team Stats Online
- [Hy-Tek Pro SWIMMER](hy-tek-pro-swimmer.md): the discontinued Palm OS companion
- [Commlink](commlink.md): the diskette and modem exchange of the DOS era
- [HY3](hy3.md), [CL2](cl2.md) and [SDIF](sdif.md): the entry and result formats it writes
- [ACTIVEWorks Swim Manager](activeworks-swim-manager.md): Active's web product for clubs
- [TeamUnify](teamunify.md) and [SwimTopia](swimtopia.md): competing club software
- [Easy Meet](easy-meet.md): whose Easy Team Manager competed with it from 1990
- [Hy-Tek Sports Software](../vendors/hy-tek.md): the publisher
- [The Active Network](../vendors/active-network.md): its owner since 2008
- [Software](index.md): the software reference

## References

[^guide]: [HY-TEK, TEAM MANAGER 8.0 for Swimming user guide](https://hytek.active.com/User_Guides_HTML/SwTM8/HTML/hmcontent.htm) (contents).
[^intro]: [HY-TEK, TEAM MANAGER 8.0 introduction](https://hytek.active.com/User_Guides_HTML/SwTM8/HTML/introduction.htm).
[^howto]: [HY-TEK, How to get started](https://hytek.active.com/User_Guides_HTML/SwTM8/HTML/howtogetstarted.htm).
[^faq]: [HY-TEK, TEAM MANAGER frequently asked questions](https://hytek.active.com/User_Guides_HTML/SwTM8/HTML/frequentlyaskedquestions.htm).
[^convert]: [HY-TEK, Convert database to TM 8.0](https://hytek.active.com/User_Guides_HTML/SwTM8/HTML/convertdatabase.htm) (the generations).
[^packages]: [HY-TEK, TM product packages](https://hytek.active.com/User_Guides_HTML/SwTM8/HTML/productoptions.htm).
[^tmlite]: [HY-TEK, TEAM MANAGER Lite](https://hytek.active.com/User_Guides_HTML/SwTM8/HTML/teammanagerlite.htm).
[^eval]: [HY-TEK, Evaluation edition](https://hytek.active.com/User_Guides_HTML/SwTM8/HTML/evaluationedition.htm).
[^exportent]: [HY-TEK, Export meet entries](https://hytek.active.com/User_Guides_HTML/SwTM8/HTML/exportmeetentries.htm).
[^importres]: [HY-TEK, Import meet results](https://hytek.active.com/User_Guides_HTML/SwTM8/HTML/importmeetresults.htm).
[^sdifconv]: [HY-TEK, Convert Hy-Tek export file to SDIF](https://hytek.active.com/User_Guides_HTML/SwTM8/HTML/converthy-tekexportfileto.htm).
[^exportreg]: [HY-TEK, Export registration](https://hytek.active.com/User_Guides_HTML/SwTM8/HTML/exportregistration.htm).
[^swims]: [HY-TEK, Import SWIMS roster or NCAA roster](https://hytek.active.com/User_Guides_HTML/SwTM8/HTML/importswims.htm) (HY3 from USA Swimming).
[^masters]: [HY-TEK, Masters](https://hytek.active.com/User_Guides_HTML/SwTM8/HTML/masters.htm).
[^bcssa]: [HY-TEK, BCSSA](https://hytek.active.com/User_Guides_HTML/SwTM8/HTML/bcssa.htm).
[^licmgmt]: [HY-TEK, License management](https://hytek.active.com/User_Guides_HTML/SwTM8/HTML/licensemaintenance.htm).
[^teamconnect]: [HY-TEK, Team Connect Online](https://hytek.active.com/User_Guides_HTML/SwTM8/HTML/teamconnectonline.htm).
[^teamstats]: [HY-TEK, Team Stats Online](https://hytek.active.com/User_Guides_HTML/SwTM8/HTML/teamstatsonline.htm).
[^paceclock]: [HY-TEK, Export pace clock](https://hytek.active.com/User_Guides_HTML/SwTM8/HTML/exportpaceclock.htm).
[^product]: [HY-TEK, Team Manager for Swimming](https://hytek.active.com/swimming-management-software.html) (product page).
[^store]: [HY-TEK, Team Manager 8.0 store page](https://hytek.active.com/store/swim/TM8.html) (release date and prices, as of 2026).
[^relnotes]: [HY-TEK, TEAM MANAGER 8.0 service pack release notes](https://hytek.active.com/swim/tmII/TM8ReleaseNotes/current_update.htm) (8.0Ca 2015 to 8.0Gf 2026).
[^tmonline]: [HY-TEK, Team Stats Online team selection](https://sports-tek.active.com/TMOnline/index.asp) (Version 2.0C, at the TMOnline address).
[^news0008]: [Hy-Tek swim newsletter, August 2000](https://web.archive.org/web/20010719031554/http://www.hy-tekltd.com/swim/newsaug00/newsau00main.html) (WIN-TM April 1998; TM II planned).
[^whatsnew01]: [Hy-Tek, What's new, November 2001](https://web.archive.org/web/20011214083428/http://www.hy-tekltd.com/whatsnew.htm) (TM II shipping 30 April 2001; TM II Lite).
[^whatsnew05]: [Hy-Tek, What's new, 2002–2005](https://web.archive.org/web/20050101161310/http://www.hy-tekltd.com/whatsnew.htm) (TM Online, TM 3.0 and 4.0).
[^whatsnew09]: [Hy-Tek, What's new, 2006–2008](https://web.archive.org/web/20090207143511/http://www.hy-tekltd.com/whatsnew.htm) (TM 4.0Ra; TM 5.0 on 7 April 2008).
[^active08]: [The Active Network, Acquisition of HY-TEK Sports Software Businesses](https://info.activenetwork.com/news-and-events/active-press-releases/archive/the-active-network-establishes-leadership-position-in-swimming-and-track-and-field-markets-with-acquisition-of-hy-tek-sports-software-business) (8 July 2008).
[^dakpc]: Daktronics, PC-2001 Pace Clock System Display Manual (ED-13737 Rev 09, August 2023), Team Manager workout download.
[^swtimport]: [SwimTopia, Team Manager time history and roster import (.mdb)](https://help.swimtopia.com/hc/en-us/articles/360035351952-Team-Manager-Team-Roster-Time-History-Import-mdb).
[^swtcompat]: [SwimTopia, HY-TEK compatibility](https://www.swimtopia.com/tour/hy-tek-compatibility/) (vendor page).
[^teamunify]: [SportsEngine, SportsEngine acquires TeamUnify](http://www.prweb.com/releases/2016/07/prweb13565404.htm) (21 July 2016).
[^swtabout]: [SwimTopia, About](https://www.swimtopia.com/about/) (vendor page).
[^sw8610]: Hy-Tek advertisement, *Swimming World*, October 1986 (Team Manager and Meet Manager).
[^st8905]: Hy-Tek advertisement, *Swimming Technique*, May 1989 (six programs for the IBM-PC).
[^sw9009]: Swim Biz News item, *Swimming World*, September 1990 (Workout Manager released; updates across the line).
[^st9011]: Swim software survey, *Swimming Technique*, November 1990 (modem transfer; competing team programs).
[^sw9108]: Hy-Tek Team Manager product copy, *Swimming World*, August 1991 (Special Section: Computer).
[^sw9108c]: Hy-Tek Commlink advertisement, *Swimming World*, August 1991 (entries by diskette to the meet director).
[^st9801]: Hy-Tek advertisement, *Swimming Technique*, January 1998 (Team Manager for Windows).
[^sw0211]: Hy-Tek advertisement, *Swimming World*, November 2002 (Team Manager Online; Team Manager II and Workout Manager).
[^swn9412]: Coaching vacancy advertisement, *SwimNews*, December 1994 (proficiency with Hy-Tek software).
[^swn0604]: Coaching vacancy advertisement, *SwimNews*, April 2006 (knowledge of Hy-Tek Team Manager).
[^swn0702]: TOP programme notice, *SwimNews*, February 2007 (entries by Hy-Tek files from Team Manager).

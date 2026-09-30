---
title: Splash Team Manager
description: >-
  Splash Team Manager is the Windows club program from Splash Software that keeps members,
  meet entries, results and records, and is compulsory for entering swimmers in Switzerland.
tags:
  - Software
  - Team management
  - Swimming
---

<!--
Research notes, Splash Team Manager. Built out from a stub in September 2026, straight after
the Splash Meet Manager pass, and sharing most of its sources. The company history (Kaufmann,
the SwimNews joint venture, GeoLogix, Splash Software GmbH) is set out in the comment on
splash-meet-manager.md and in geologix.md; it is not repeated here.

Naming caution, kept from the stub: Hy-Tek's Team Manager (written TEAM MANAGER in Hy-Tek's
own material) is an American Windows program from a different company. Neither vendor's
documentation mentions the other product. Splash Team Manager does read some Hy-Tek files
(see below), which is the only contact between the two.

Versions and dates:
  - 2002 SwimNews-era site: Team Manager 2002.7 (13 May 2002). A news item of April 2002 says
    the IPS point system was in the newest version, 2002.5. The order page offered free
    updates to users of any 7.xx Splash product until end of March 2002. The "About" page
    (March 2002) says every Splash product had been a true 32-bit Windows program since 1998,
    and credits Splash with 15 years of experience; the home page of the same site says more
    than ten years in Switzerland; the 2026 site says since 1988. All three are the vendor's.
  - Records white paper (PDF created January 2004, on the Swim Wiki): record handling was
    rebuilt in Team Manager 2003 compared with 2002; minimum version 2004.36.
  - splash-software.ch captures: 2004.40 (2 February 2004); a warning in January 2004 against
    builds 36 and 37, whose databases (TEAM.MDB) had to be sent in for repair; 2006.95
    (1 July 2006); a news item of 4 March 2009 announcing Team Manager 2009 as a major update
    needing a manual install; 2009.7403 (5 March 2010) in the version box. The 2009 update
    PDF the news item linked was not archived.
  - Archived 2009-2010 release notes (nav=,home,C,team2009) run from the "Version 2009"
    header through builds 2003 (February 2009) to 7403 (March 2010). They include imports of
    Team Manager 2006 databases, Hy-Tek event files (entry fees, April and October 2009),
    Hy-Tek invitation files, German DSV invitations, and a Belgian system called TopSwim
    (CSV and MySQL result import, XLS entry export, 2009). TopSwim is not named in the body
    because it would need a page and nothing else about it was found.
  - Swim Wiki release notes: version 10 line, 10.34686 (5 January 2015) to 10.85101
    (11 August 2026). The FAQ puts the database in a "Team Manager 10" data folder and the
    update page names the file Team10.mdb. No page read says when "2009" became "10".
  - Shared build counter: Meet Manager and Team Manager releases carry the same build
    numbers on the same days (34686 on 5 January 2015; 83082 on 13 October 2025) and nearly
    the same (85099 and 85101 on 11 August 2026). The article states the observation; that
    the two products are built from one tree is an inference and is not stated.

Platform: 2002, Windows 95 to XP, Pentium 166 MHz, 32 MB, about 10 MB of disk; 2008 page,
Windows 98 to XP, 500 MHz, 64 MB, about 20 MB, with data in an MS Access database that other
programs can read and use over a network; 2026, Windows 10 or 11, back to 8 without
guarantee, Jet engine, activation online. Backup by copying the .mdb with the program
closed, or with a built-in backup that makes a smaller file but restores more slowly.

Functions, by source:
  - 2002 feature page: member groups, selection criteria, member reports, form letters,
    labels, email from the program, Word mail-merge export; import event structure from a
    SPLASH/Lenex invitation; entry forms and qualifier lists; proposed entry times based
    on each swimmer's bests, with relay times derived the same way; SPLASH/Lenex and SDIF entry export; results by
    hand or from Lenex or SDIF files; club and age-group records; rankings; personal bests;
    period summaries; IPS points ("same points used by FINA", the vendor's gloss) and a
    points calculator; nine interface languages, switchable while running; manual as Windows
    help and PDF in German and English.
  - 2008 feature page adds DSV 4 to the formats, club and role as member filters, and
    emailing each swimmer's schedule automatically.
  - 2018 brochure (swimrankings.net/files/TeamManager.pdf): eleven languages (Dutch,
    English, French, German, Icelandic, Italian, Polish, Portuguese, Russian, Slovenian and
    Spanish); DSV 5; Unicode; results downloaded directly from swimrankings.net.
    Discrepancy: two passages in the brochure are carried over from the Meet Manager
    brochure. One says all data for one meet sits in a single file, which describes Meet
    Manager, not Team Manager's single club database; another credits record tracking to
    "Meet Manager". Neither passage is used.
  - 2026 site: members sorted into user-defined groups and roles; entries from Lenex event
    structures and personal bests; results from swimrankings.net or Lenex, SDIF, DSV 6/7;
    records, personal bests and rankings; mail merge, labels, email, Word export; printer,
    PDF and HTML output.
  - Release notes 2015-2026: member import and sync from CSV (requested by VZF Belgium) and
    officials and coaches exported with entries (January 2015); Hy-Tek invitation import
    reads nation, province and 25-yard standards (May 2015); DSV 6 (January 2016); a grade
    field for officials, exported in Lenex (January 2016); a fee-paid filter (April 2016);
    linear or squared percentage option for entry times (August 2020); SMTP over TLS 1.2
    (September 2021); ignore-course option for entry times (December 2022); DSV 7 import
    (December 2022) and export with nationality and para classification (February 2023);
    member merge (November 2024); points tables each year (FINA to 2022, AQUA from 2025,
    German Rudolph, DSV masters, Dutch IPC and para). Finswimming strokes added in 2015.
  - Swiss specifics: Kidsligue stroke ids and a reorganise function (FAQ); Swiss team
    championship team editing (release notes).

Licensing: 2002, CAD 195 (USD 130, EUR 145 approximate); Entry Editor free for clubs without
Team Manager. 2026, CHF 195 alone or CHF 595 with Meet Manager, one-time with a year of
updates, then CHF 30 a year ongoing or CHF 50 for one year. Demo expires and restricts
printing. Swiss clubs get access codes through a registered club contact, changed via Swiss
Aquatics. Portugal's 2006 agreement gave FPN clubs Team Manager at a reduced price (vendor).

Adoption and independent sources:
  - Swiss Aquatics competition page: Team Manager compulsory for entering swimmers in Swiss
    competitions. Independent.
  - KNZB page: Team Manager and Meet Manager downloads offered to Dutch clubs; the club
    licence and pricing are in the Meet Manager comment. Independent.
  - Quebec 2003/04: both programs for all clubs (vendor news).
  - February 2004 vendor news: the German developer of WinClub stopped work on it and
    recommended Splash Team Manager to his users. WinClub is not named in the body, for the
    same reason as TopSwim.

Sources: splash-software.ch/en/ (2026); Swim Wiki pages Team Manager Release Notes, FAQ,
Installation, Update from before 2015, Documents; Team_Manager_Records_Management.pdf;
swimrankings.net/files/TeamManager.pdf (April 2018); Wayback captures of splash.swimnews.com
(2002: home, about, products, Team Manager features, prices) and splash-software.ch (2004,
2008 Team Manager product page, 2009-2010 home and Team Manager release notes); Swiss
Aquatics Wettkampfbetrieb; KNZB Splash software page.

Still to research: the 7.x and earlier DOS history; what "TM1" and "TM2" mean in the January
2015 Hy-Tek import fix; club counts outside Switzerland and the Netherlands.
-->

Splash Team Manager is a Windows program for swimming clubs. It keeps the club's members,
prepares their entries for meets, and stores their results, personal bests and club
records.[^site][^tmbrochure] It is the club-side counterpart to
[Splash Meet Manager](splash-meet-manager.md) and comes from the same developer,
[Splash Software](../vendors/splash-software.md) of Spiegel bei Bern, Switzerland.[^site]

The two programs pass entries and results between them as [Lenex](lenex.md)
files.[^snfeatures][^site] Swiss Aquatics requires clubs to use Team Manager to enter
swimmers in competitions in Switzerland.[^swissaq]

The program has no connection to [Hy-Tek Team Manager](hy-tek-team-manager.md), an American
product, beyond the name.

## Naming and versions

The version numbering has followed the same pattern as Meet Manager's.

Releases in 2002 were numbered by year and build: Team Manager 2002.5 in April 2002 and
2002.7 in May.[^sn2002] An earlier 7.x series is known only from the 2002 order page, which
offered its users a free update until the end of March 2002.[^sn2002ord] Later year versions
include 2004.40 in February 2004, 2006.95 in July 2006, and a 2009 release that Splash
described as a major update and that had to be installed by hand.[^ss2004][^ss2010] Release
2009.7403 followed in March 2010.[^ss2010]

Current releases are numbered 10.x. They run from 10.34686 in January 2015 to 10.85101 in
August 2026, and the program's data folder and database file carry the 10 in their
names.[^tmrelnotes][^tmfaq][^tmupdate2015] The documentation does not say when the numbering
changed from years to 10.

The build number after the point is shared with Meet Manager. Releases of the two programs on
the same day carry the same number, as 34686 on 5 January 2015 and 83082 on 13 October 2025
do.[^tmrelnotes][^mmrelnotes]

## Platform

Splash says every one of its programs has been a 32-bit Windows application since
1998.[^snabout] The 2002 version ran on Windows 95 through XP and needed about 10 MB of
disk.[^snfeatures] The current version names Windows 10 and 11 as supported and says it may
run on Windows 8 without a guarantee. It needs an internet connection to activate.[^tminstall]

The club's data is kept in one Microsoft Access database, which other programs can read and
which can be used across a network.[^ssprod2008][^tmfaq] It can be backed up by copying the
file with the program closed, or through a built-in backup that makes a smaller file but is
slower to restore.[^tmfaq]

## Members

The member list is the base of the program. Each member can belong to several groups, and the
list can be narrowed by age, gender, club, location, swimmer ID, role or group.[^ssprod2008]
Team Manager prints member lists and user-defined reports, form letters and address labels. It
sends email to members directly and exports addresses for a Word mail merge.[^ssprod2008][^site]

Later releases added a grade field for officials, which is exported with entries, a filter for
members who have paid their fees, import and synchronisation of members from a CSV
export of another membership system, and the merging of two member records.[^tmrelnotes]

## Meet entries

An entry starts from the meet's invitation file, which gives Team Manager
the event list and any qualifying times once imported.[^ssprod2008][^tmrelnotes] The program then
prints entry forms and lists of the swimmers who have made the standards. It proposes each
swimmer's entry time from their personal bests and works out relay entry times from the bests
of the relay's swimmers.[^ssprod2008]

Entry times can be chosen within a date range. Since 2022 an option can ignore the course and
take the fastest time from either pool length.[^tmrelnotes] Team Manager prints entry
summaries and each swimmer's schedule, and it can email the schedules to the swimmers. The
finished entries are exported as a file for the meet host.[^ssprod2008] Since 2015 the file
also carries the club's officials and coaches.[^tmrelnotes]

## Results, records and rankings

Results come into Team Manager by hand, from a result file, or downloaded directly from
[Swimrankings](swimrankings.md).[^snfeatures][^tmbrochure] From them the program builds each
swimmer's personal bests, rankings filtered by gender, age and group, and summaries of a meet
or of a period.[^ssprod2008]

Records are held in record lists, each with its own age and club filters, so a club can keep
one open list and separate lists for each age group. A record is stored as a reference to a
result already in the database, not as a separate time. The program can search the existing
results to fill a new list, and it marks new records as results are imported.[^tmrecords] This
arrangement dates from Team Manager 2003, when record handling was rebuilt.[^tmrecords]

Results can be scored with points tables. The 2002 version included the IPS system, and the
release notes record the World Aquatics tables year by year under the names FINA Points and,
from 2025, AQUA Points. German Rudolph and masters tables and Dutch para-swimming tables are
also included.[^sn2002][^tmrelnotes]

## Data exchange

Team Manager reads and writes Lenex, the American [SDIF](sdif.md) and the German
[DSV-Standard](dsv-standard.md).[^site] DSV support has followed the format's versions, with
DSV 4 listed in 2008, DSV 5 in 2018, DSV 6 from January 2016 and DSV 7 from the end of
2022.[^ssprod2008][^tmbrochure][^tmrelnotes] The DSV 7 entry export of February 2023 carries
each athlete's nationality and para-swimming classification.[^tmrelnotes]

The program also reads Hy-Tek files. Its release notes show Hy-Tek event and invitation files
being imported by 2009, and in 2015 the import was extended to read the meet's nation and
province and its 25-yard qualifying times.[^tmrel2009][^tmrelnotes] Qualifying times are read
from [EV3](ev3.md) files as well as from Lenex.[^tmrelnotes]

## Licensing

Team Manager is sold for a one-time fee. In 2026 it costs CHF 195 on its own or CHF 595
together with Meet Manager, with a year of updates included. After that, updates cost CHF 30 a
year on a continuing subscription or CHF 50 for a single year.[^site] In 2002 the price was
195 Canadian dollars.[^sn2002ord] A demo version expires after a set time and restricts
printing.[^tminstall]

In 2002 Splash also offered a free Entry Editor for clubs without Team Manager, so that they
could fill in electronic entry files.[^snprod] Where a federation holds a Splash agreement, clubs
obtain the program through the federation. In Switzerland a registered contact at each club
holds its access codes, and a change of contact goes through Swiss Aquatics.[^swissaq] Portugal's
2006 agreement gave clubs of the national federation Team Manager at a reduced
price.[^ss2010]

## Adoption

Switzerland has made the program part of its entry system: Swiss Aquatics requires Team Manager
for entering swimmers in any competition in the country.[^swissaq] The Dutch federation, the
KNZB, supplies Team Manager and Meet Manager to its clubs.[^knzb] In Canada, Splash reported
that the Quebec federation chose both programs for all its clubs from the 2003–2004
season.[^ss2004]

The vendor says clubs on three continents use it: Europe, Asia and North America.[^tmbrochure]

## See also

- [Splash Meet Manager](splash-meet-manager.md): the meet program it exchanges entries and
  results with
- [Hy-Tek Team Manager](hy-tek-team-manager.md): the unrelated American program with the same
  name
- [Lenex](lenex.md) and [Swimrankings](swimrankings.md): the exchange format and results
  database it relies on
- [Software](index.md): the software overview
- [Splash Software](../vendors/splash-software.md): the publisher

## References

[^site]: [Splash Software, Meet Manager and Team Manager for swimming](https://splash-software.ch/en/).
[^tmbrochure]: [Splash Software, Splash Team Manager](https://www.swimrankings.net/files/TeamManager.pdf) (product brochure, April 2018).
[^tmrelnotes]: [Swim Wiki, Team Manager: Release Notes](https://wiki.swimrankings.net/index.php/Team_Manager:Release_Notes).
[^mmrelnotes]: [Swim Wiki, Meet Manager: Release Notes](https://wiki.swimrankings.net/index.php/Meet_Manager:Release_Notes).
[^tmfaq]: [Swim Wiki, Team Manager: Frequently Asked Questions](https://wiki.swimrankings.net/index.php/Team_Manager:Frequently_Asked_Questions_(FAQ)).
[^tminstall]: [Swim Wiki, Team Manager: Installation](https://wiki.swimrankings.net/index.php/Team_Manager:Installation).
[^tmupdate2015]: [Swim Wiki, Team Manager: Update from before 2015](https://wiki.swimrankings.net/index.php/Team_Manager:Update_from_before_2015).
[^tmrecords]: [Splash Software, Team Manager: Management of records](https://wiki.swimrankings.net/images/c/cb/Team_Manager_Records_Management.pdf) (white paper, January 2004).
[^sn2002]: [SwimNews Splash Software, Home](https://web.archive.org/web/20020608160140/http://splash.swimnews.com/index.php?s=home) (archived June 2002).
[^sn2002ord]: [SwimNews Splash Software, Prices](https://web.archive.org/web/20020608161211/http://splash.swimnews.com/index.php?s=ord) (archived June 2002).
[^snprod]: [SwimNews Splash Software, Products](https://web.archive.org/web/20020608161135/http://splash.swimnews.com/index.php?s=prod) (archived June 2002).
[^snabout]: [SwimNews Splash Software, About SwimNews and Splash Software](https://web.archive.org/web/20020608154215/http://splash.swimnews.com/index.php?b=B) (archived June 2002).
[^snfeatures]: [SwimNews Splash Software, Features of Team Manager](https://web.archive.org/web/20021127083531/http://splash.swimnews.com/index.php?s=prod&b=C) (archived November 2002).
[^ss2004]: [Splash Software, Home](https://web.archive.org/web/20040207215347/http://www.splash-software.ch/index.php?nav=&new_lang=en) (archived February 2004).
[^ss2010]: [Splash Software, Home](https://web.archive.org/web/20100421014046/http://www.splash-software.ch/index.php?nav=,home,A) (archived April 2010; news items from 2006 to 2009).
[^ssprod2008]: [Splash Software, SPLASH Team Manager](https://web.archive.org/web/20080616025925/http://www.splash-software.ch/index.php?nav=,prod,C&new_lang=en) (archived June 2008).
[^tmrel2009]: [Splash Software, Team Manager release notes](https://web.archive.org/web/20100626092056/http://www.splash-software.ch/index.php?nav=,home,C,team2009) (archived June 2010; builds of 2009 and 2010).
[^swissaq]: [Swiss Aquatics, Wettkampfbetrieb](https://www.swiss-aquatics.ch/leistungssport/swimming/wettkampfbetrieb/) (competition operations; in German).
[^knzb]: [KNZB, Splash software](https://www.knzb.nl/kennisartikelen/splash-software) (February 2023; in Dutch).

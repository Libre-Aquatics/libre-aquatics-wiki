---
title: Lenex
description: >-
  Lenex is the XML data exchange format for swimming maintained by Christian Kaufmann
  since 1999, the recommended format for European Aquatics rankings and the European
  counterpart to United States Swimming's fixed-width SDIF.
tags:
  - Software
  - Meet management
  - Reference
---

<!--
Research notes, Lenex.

Built out from the stub in September 2026. The stub rested on the Swimrankings wiki's summary
page and had not read the technical documentation. Its open questions were the documentation
itself, any plans for a version 4, the relationship to European Aquatics, and whether any
American software reads or writes the format. All are answered below, except that no
version 4 plan was found anywhere; that is recorded as a negative result, not as evidence
that none exists.

The specification. "Lenex 3.0 - Technical documentation", subtitled "An international data
exchange format for swimming", by Christian Kaufmann, Switzerland, published from
wiki.swimrankings.net/images/6/62/Lenex_3.0_Technical_Documentation.pdf. Three revisions are
now held locally under sources/reference/lenex/, with an extraction beside each:
  - 31 January 2015, 31 pages, the copy southeastswimming.org hosts (PDF metadata author
    "kf", created April 2015).
  - 27 October 2021, 31 pages, the MediaWiki archive copy of the same file
    (images/archive/6/62/20211102213537!Lenex_3.0_Technical_Documentation.pdf).
  - 4 March 2025, 35 pages, the current file at the wiki URL as of September 2026.
All three call themselves version 3.0. The date on page one is the revision date, and the
version history at the back is a dated change log running from 25 November 2008 to the
revision in hand. The stub knew of two datestamps; the 2025 one is new.

Differences between the revisions, checked by comparing the extractions:
  - Only the 2025 revision carries the history before 3.0 (1.0 in September 1999, 2.0 in
    February 2004, and the list of what 2.0 and 3.0 each changed). The 2015 and 2021
    revisions start their history at 3.0.
  - The 2025 revision inserts a new chapter 2 on updates and versions, which pushes the later
    chapters down by one. Its internal cross-references were not updated: several attributes
    still say to see section 5.4 for course codes, but course codes are now section 6.4.
  - The 2025 revision swaps FINA and LEN for World Aquatics and European Aquatics in running
    text, keeps the old names inside identifiers (FINA_POINTS), and moves the nation,
    country, currency and judge-role tables out to a separate spreadsheet at
    swimrankings.net/files/LenexCodes.xlsx. That spreadsheet was not fetched.
  - The 2025 revision documents MEET.touchpadmode; neither earlier revision mentions touchpad
    installation at all.

What the documentation establishes (all verified against the 2025 text):
  - A Lenex file is XML with extension .lef; normally zipped, with extension .lxf. The
    document says outright that some constraints cannot be expressed in an XSD schema,
    which is why it is written as prose tables. No official XSD or DTD was found; the
    open-source libraries checked do not claim one either.
  - Six conventional file roles: invitation, entries, start list, results, records, time
    standards. Any file may mix them.
  - Root LENEX with required CONSTRUCTOR (name, version, and a CONTACT whose email is
    required in that context) and a required version attribute, current value 3.0. Optional
    created timestamp (added 2 December 2024) and revisiondate (added 10 December 2024).
  - Three kinds of tree item: element, collection (plural name, holds one element type),
    attribute. Element names upper case, attribute names lower case. Any element can carry
    an id attribute named for the element; some are mandatory because they are the targets
    of references across sub trees.
  - Main sub trees: MEETS/MEET (SESSIONS, CLUBS), RECORDLISTS, TIMESTANDARDLISTS. Under
    MEET: SESSION > EVENT > AGEGROUP > RANKING, EVENT > HEAT, EVENT > SWIMSTYLE; CLUB >
    ATHLETES > ATHLETE > ENTRIES / RESULTS > SPLITS; CLUB > RELAYS > RELAY with
    RELAYPOSITIONS pointing back at athletes by athleteid; COACHES; OFFICIALS.
  - References by id: ENTRY and RESULT carry eventid (required) and heatid; RANKING carries
    resultid; RELAYPOSITION carries athleteid; JUDGE carries officialid; EVENT carries
    preveventid to its prelim; TIMESTANDARDREF carries timestandardlistid.
  - Places live in RANKING elements under AGEGROUP, not on RESULT (3.0 change; the old
    place attribute on RESULT is deprecated). Exhibition swims are results with no RANKING.
  - Data types: currency in cents; date YYYY-MM-DD; daytime HH:MM; 32-bit signed integer;
    string (XML escapes, &#10; for line ends); "string international" limited to ASCII
    32-127; swim time fixed HH:MM:SS.ss or NT; timestamp ISO 8601; reaction time signed
    hundredths ("+14"), "0" for zero; unique id (letter plus number, issued by
    swimrankings.net); uuid.
  - Course codes: LCM, SCM, SCY, SCM16, SCM20, SCM33, SCY20, SCY27, SCY33, SCY36, OPEN.
  - Strokes: BACK, BREAST, FLY, FREE, IMRELAY, MEDLEY, UNKNOWN, plus a set of fin-swimming
    values (APNEA, BIFINS, DYNAMIC and variants, IMMERSION, MULTIPLE, SPEED_APNEA,
    SPEED_ENDURANCE, STATIC, SURFACE). Relay distance is per swimmer; relaycount 1 means an
    individual event. MEDLEY order follows World Aquatics: fly-back-breast-free individually,
    back-breast-fly-free for relays. technique values for kids' events (DIVE, GLIDE, KICK,
    PULL, START, TURN).
  - Rounds: TIM default, FHT, FIN, SEM, QUA, PRE, SOP, SOS, SOQ, TIMETRIAL.
  - Splits are stored cumulatively.
  - Encoding: from 3.0, UTF-8 is the preferred default; an ANSI code page is still allowed
    provided the XML prolog declares it.
  - Federation extensions are prefixed by IOC nation code and a dot (GER.RES re-swim,
    GER.APH stroke, SUI.STARTSUISSE athlete status; record-list types such as SUI.RZW).
  - Timing attribute values AUTOMATIC, SEMIAUTOMATIC, MANUAL3, MANUAL2, MANUAL1; touchpadmode
    ONESIDE / BOTHSIDE.
  - The document itself says that almost everything since 2008 has been an extension and
    that breaking changes have been rare and small, and that some names (FINA, LEN,
    handicap) survive only to avoid breaking files. Removals in the change log that are in
    fact breaking: middlename removed everywhere (6 November 2012), AGEGROUP type removed
    (30 March 2011), POOL name removed (10 November 2016), MEET maxentries removed
    (21 October 2016).

Pre-3.0 history (2025 revision only): 1.0 introduced September 1999. 2.0 in February 2004,
based on 1.0 but not directly compatible, with the same basic structure for events,
entries and results; added record-list and time-standard sub trees, renamed keywords for
clearer English and to drop short unclear identifiers, removed country-specific separators
from data types, and moved all basic types into attributes, leaving entities for complex
types. 3.0 introduced 25 November 2008, based on 2.0 with compatibility "more or less"
ensured: HEATS, RANKINGS, the .en English-language attribute variants, AGEGROUP type renamed
calculate, FEES collection, swrid ids on MEET, CLUB and ATHLETE, UTF-8 default. The document
promises a fuller 1.0-to-2.0 change list at its end; the 2025 revision does not contain one.
Dead end, recorded so it is not repeated.

The sample files. The wiki links four: example-entries, example-startlist, example-results
and example-records, each an .lxf at swimrankings.net/files/. All four were downloaded and
unzipped (scratch only, not kept in sources/; they carry real athletes' names and
licence numbers and must not be quoted on this page). Each zip holds one .lef of the same
name, dated 1 December 2024. Entries, start list and results describe one meet, the 2024
Canadian Olympic and Paralympic swimming trials in Toronto, organised by SNC and FNQ, long
course; the records file holds world, Canadian senior, Canadian age-group, Ontario and
Canadian para record lists. CONSTRUCTOR in all four names SPLASH Meet Manager, version
"Debug Build", registered to "Geologix Test User", with contact Splash Software GmbH at
Spiegel bei Bern, Switzerland. Encoding declared UTF-8.

Checked the files against the documentation by script (every attribute used, per element,
against the attributes the 2025 revision lists for that element), and by hand:
  - Undocumented attributes the files use: MEET touchpad (documented name is touchpadmode),
    masters, state; POOL name (removed from the format in November 2016); CLUB clubid;
    ATHLETE sdmsid (the documented attribute for the World Para Swimming number is
    license_ipc); ENTRY late; RESULT entrytime and entrycourse; TIMESTANDARDLIST code.
  - Undocumented enumeration values: EVENT round EXTRAHEATS; RESULT status RJC (the
    documentation lists RJC for ENTRY only); ENTRY status DNS (documented for RESULT only).
  - 363 RESULT elements carry swimtime 00:00:00.00 with no status, where the documentation
    offers NT for no time.
  - Splits: in every result with splits, the last split is short of the event distance;
    the finish is carried only as the result's swimtime. Consistent with the documentation.
  - Federation-prefixed values in use: MEET type CAN.TRIALS, record-list types CAN.IPC,
    CAN.ONP, CAN.ON, CAN.JR, alongside WR and the bare nation code CAN.
The point for the page: the reference files published beside the specification, written by
the specification author's own program, do not conform to the current revision of it.
That is stated as an observation, not as a criticism; it is what a format kept compatible
by extension looks like in practice.

The Swimrankings wiki page (wiki.swimrankings.net/index.php/swimrankings:Lenex, last
modified 3 December 2024): XML-based; 1.0 from 1999; 2.0 with the 2004 European Rankings,
adding records and renaming tags; 3.0 in late 2008, nearly fully backward compatible;
recommended format for European Aquatics rankings; an upload page runs a basic validation.
It lists European Aquatics and 22 national bodies as using Lenex as their primary exchange
format: AUT, BEL, BIH, BLR, CAN (the Quebec federation, FNQ, not Swimming Canada), DEN, ESP,
EST, FIN, ISL, LAT, LTU, MLT, NED, POL, POR, SLO, SRB, SUI, SVK, SWE, TUR. Germany is absent.
It lists four programs with Lenex support: CPS-Schwimm (Hermann Josef Aretz), EasyWk
(Bjoern Stickan), Splash Meet and Team Manager (Christian Kaufmann), Swimify (Erik
Berglund). It names Kaufmann as the trust authority for the format and a member of the
European Aquatics Data Hub Task Force, and states the format is open for any developer to
use without charge. It is the maintainer's own page and is treated as such.

European Aquatics: its 2 July 2025 news item on the new records and rankings pages names a
data-hub task force including Kaufmann, described there as owner of Swim Rankings. It does
not mention Lenex. Nothing found from European Aquatics itself names Lenex as a required
format; "recommended format for European Aquatics rankings" is the Swimrankings wiki's
statement and is attributed as such on the page.

The maintainer and Splash. The Swimrankings wiki credits Splash to Kaufmann; the sample
files' CONSTRUCTOR gives Splash Software GmbH; older Splash documentation names GeoLogix AG
of Berne, and search results describe swimrankings.net as run by GeoLogix AG. The corporate
relationship between GeoLogix and Splash Software is still not established (see the Splash
vendor stub). The page says only that the format's maintainer is also the author of Splash
Meet Manager, which the wiki itself states.

SwimNews, the independent print evidence (all in sources/periodicals/swim-news/):
  - No. 268 (Oct-Nov 2001): SwimNews launched its world ranking database on 14 November 2001
    and asked for results as SDIF or Commlink data. Same issue carries an advertisement for
    Splash Meet & Team Manager at splash.swimnews.com; its format bullet is illegible in the
    scan.
  - Nos. 269 (Jan-Feb 2002) and 270 (Mar-Apr 2002): the Splash advertisement says results
    are saved in Splash's own format and in SDIF, which the ads call the American format.
    No Lenex.
  - Nos. 271-275 (May-Jun 2002 to Nov-Dec 2002): the advertisement, now headed Splash
    Software in 272, 274 and 275, lists entry formats Commlink, SDIF, WSV, Lenex and Aquabec
    and result formats SDIF, Splash, WSV, Lenex and Aquabec.
The stub cited 271 as an anonymous meet-management advertisement; it is Splash's. The
format list therefore records what one European program advertised, not general industry
practice. It is still the earliest dated print mention of Lenex in the collection. The
Swimming World hits for the string "lenex" are all Lenexa, Kansas, and were discarded.

Pro-Swim, recorded but not used on the page. pro-swim.com (certificate expired) and
pro-swim.swimnews.com carry a "SwimNews Pro-Swim Meet Manager", copyright 2009 Archive
Imaging Services Ltd., whose feature list names a "Pro-Swim/Lenex" format for entries and
results, alongside SDIF and WSV. The same timing-system list and language count as the
Splash advertisements suggest a SwimNews rebadge of Splash, and "Pro-Swim/Lenex" suggests
Lenex under another name, but neither is stated anywhere, so neither is claimed.

WSV and Aquabec, the two other formats in the 2002 advertisement:
  - WSV. German Wikipedia's DSV-Standard article says the German federation's text-file
    exchange format was developed within the Westdeutscher Schwimmverband in the 1980s and
    taken over by the DSV in May 2002. WSV is taken here to be that format under its
    earlier name; the advertisement does not expand it, so that identification is an
    inference, recorded on the DSV-Standard stub.
  - Aquabec. The FNQ's 2018 hall of fame announcement credits Christian Berger with
    developing Aquabec competition software in 1984 and rolling it out to Quebec clubs and
    regions. See the Aquabec stub.

American software. Hy-Tek Meet Manager 8's user guide page on importing entries names HY3
and SD3 files only (hytek.active.com/user_guides_html/swmm8/importmeetentries.htm). No
Hy-Tek documentation found mentions Lenex. A swimstandards.com community post says
Swimcloud accepts "Lenex Meet Manager" files with a ".len" extension; that treats a format
as a program and gives an extension the specification never uses, so it is not cited.
Swimcloud's own help page returned 403 and could not be checked. Swimify, a Swedish
program, reads and writes both Lenex and Hy-Tek files and lists Canada among the
federations it is approved for; its changelog records Lenex 3.0 result files from
19 August 2020 and says event files moved to "Lenex 3 format" on 16 January 2025, without
saying what they used before.

Open-source readers (GitHub search for "lenex", September 2026): leonverschuren/lenex-php
(PHP, 2016, MIT, reads .lef and .lxf), Tiim/lenex-java (Java, 2018, reads both), Tiim/js-lenex
(TypeScript, 2021), and later libraries in Go, Rust, Python, C#, Ruby and PureBasic, plus
converters from other formats. The READMEs checked describe reading, not writing, and none
cites an official schema. Many search hits for the string are unrelated projects.

Sources:
  - wiki.swimrankings.net/images/6/62/Lenex_3.0_Technical_Documentation.pdf (4 Mar 2025);
    archive copy dated 27 Oct 2021; southeastswimming.org copy dated 31 Jan 2015. Primary.
  - wiki.swimrankings.net/index.php/swimrankings:Lenex. Maintainer's summary; history,
    adoption list, software list, trust authority.
  - swimrankings.net/files/example-{entries,startlist,results,records}.lxf. Examined.
  - SwimNews 268-275 (2001-2002), local scans. Independent.
  - europeanaquatics.org, "Dynamic Swimming Records and Rankings pages now available",
    2 July 2025. Task force membership.
  - support.swimify.com Swimify Meet Manager changelog. Lenex dates.
  - hytek.active.com Meet Manager 8 user guide, Import Meet Entries. Negative evidence.
  - github.com/leonverschuren/lenex-php, github.com/Tiim/lenex-java. Readers.
  - de.wikipedia.org/wiki/DSV-Standard; fnq.ca 2018 hall of fame item. For the stubs.

Still open: whether any version 4 is planned; the contents of LenexCodes.xlsx; whether
Swimming Canada as a whole, rather than FNQ, uses Lenex as its primary format (the trials
files suggest the national trials ran on Splash); whether any American program writes
Lenex; what the pre-2025 Swimify event files were.
-->

Lenex is an XML-based format for exchanging swimming data between programs: meet
invitations, entries, start lists, results, record lists and time standards. It was created
by Christian Kaufmann of Switzerland, who still maintains it, and it has been in use since
1999.[^doc][^wiki] The current version is 3.0, introduced in November 2008. The Swimrankings
wiki, which Kaufmann runs, describes it as the recommended format for European Aquatics
rankings and lists more than twenty national federations that use it as their main
exchange format.[^wiki] It does in Europe the job [SDIF](sdif.md) does in the United States,
but the two formats are built very differently.

## History

This section covers the three version numbers and the revisions made under the last of them.

Version 1.0 dates from September 1999. Version 2.0 followed in February 2004,
the year European rankings were introduced. It kept 1.0's basic structure for events,
entries and results, but files in the two versions cannot be read interchangeably. Version
2.0 added new branches to hold record lists and time standards, renamed keywords that had been
short or ambiguous, took country-specific separators out of the data types, and moved
every basic value into an XML attribute.[^doc][^wiki]

Version 3.0 was introduced on 25 November 2008. The documentation says compatibility with
2.0 is more or less preserved, so a program written for 2.0 can read a 3.0 file with some
minor exceptions. Among the additions, heats became elements of their own, places moved out
of the result into separate ranking lists, and names could carry an English-language
variant. It also added worldwide identifiers for meets, clubs and athletes, and made UTF-8
the preferred text encoding.[^doc]

The version number has not changed since then, but the specification has. Its
technical documentation carries a dated change log that starts with the 3.0 release and
continues through 2025. The copies examined for this article are dated 31 January 2015,
27 October 2021 and 4 March 2025, and all three are labelled version 3.0.[^doc][^doc2015][^doc2021]
According to the documentation, nearly every change since 2008 has been an extension and
only a few minor ones break existing files. The log does record some removals, though:
middle names were dropped from every element in 2012, the pool's name attribute was removed
in 2016 in favor of a new facility element, and a single meet-wide entry limit was split
into separate limits for athletes and relays in the same year. Later additions include
relays in which every swimmer swims all four strokes (2021), time-trial rounds (2023),
fin-swimming events and bank payment details (2024), and a non-binary gender value
(2025).[^doc] Some outdated names are kept deliberately. The documentation calls the
governing bodies World Aquatics and European Aquatics, but a conversion method is still
called `FINA_POINTS`, because renaming it would break existing files.[^doc]

A file can state which revision it follows. Since December 2024 the root element has had an
optional `revisiondate` attribute, and if it is missing the file is taken to follow the
latest revision.[^doc]

## Form

A Lenex file is an XML document with the extension `.lef`. Files are normally compressed
into a ZIP archive and given the extension `.lxf`. The documentation says some of the
format's rules cannot be expressed in an XSD schema, and that this is why it is published
as a set of tables rather than as a schema.[^doc] No official schema was found.

Six kinds of file are conventional, although any file may combine them: an invitation,
which carries the meet's schedule and event structure; entries, from one club or from all of
them; a start list, which is an entry file in which each entry has a heat and lane; results;
records; and time standards. Time standards that belong to a particular meet go in that
meet's invitation.[^doc]

Element names are upper case and attribute names lower case. The documentation sorts
everything in a file into elements, collections and attributes. Collections are elements
holding children of one kind only, and each takes the plural of its child's name, so `SESSIONS` holds
`SESSION` elements. Every basic value is an attribute.[^doc] Since 3.0 the preferred encoding
has been UTF-8. An ANSI code page is still allowed, as long as the XML prolog declares
it.[^doc]

## Structure

This section describes the tree and the references that connect its branches.

Every file has a `LENEX` root element carrying the format version, currently `3.0`. Under
it, a `CONSTRUCTOR` element names the program that wrote the file, its version and a
contact email. Three optional branches follow:[^doc]

- `MEETS`, which holds one or more `MEET` elements. The documentation advises one meet per
  file.
- `RECORDLISTS`, where each list covers one record type, gender, course and, optionally,
  age group.
- `TIMESTANDARDLISTS`, qualifying and cut times organized the same way.

Inside a meet, the `SESSIONS` branch describes the program. It contains sessions, each
session contains events, and each event holds a `SWIMSTYLE` element (distance, stroke and
number of swimmers), its heats and its age groups. The `CLUBS` branch holds the people. Each
club lists its athletes, relays, coaches and officials, and each athlete holds that
athlete's own entries and results, with split times nested inside each result.[^doc]

The two branches are joined by numeric identifiers rather than by nesting. An entry or a
result names its event with `eventid` and its heat with `heatid`. A ranking names the result
it places with `resultid`. A relay swimmer is not stored inside the relay: the relay
position carries an `athleteid` that points to the athlete elsewhere in the same club. A
final round points back to its preliminary round with `preveventid`. The identifiers that
are targets of these references are mandatory and must be unique across the whole
meet.[^doc]

Places are not stored on results. Since 3.0, each age group within an event holds a
`RANKINGS` collection, and each ranking gives a place and the `resultid` of the swim it
refers to. As a result, one swim can appear in more than one ranking, for example an open
list and an age-group list, and an exhibition swim is a result that no ranking refers to.
An event without age groups still needs one placeholder age group to hold its
rankings.[^doc]

The format sets a few conventions for values:[^doc]

| Type | Form | Example |
|---|---|---|
| Swim time | Fixed-length `HH:MM:SS.ss`, or `NT` for no time | `00:14:45.86` |
| Reaction time | Signed hundredths of a second, `0` for zero | `+68` |
| Date | `YYYY-MM-DD` | `2026-03-14` |
| Time of day | `HH:MM` | `09:30` |
| Money | Integer count of cents | `17500` |
| Unique id | A letter followed by a number, issued by swimrankings.net | |

Split times are cumulative, measured from the start. Relay distances are given per swimmer,
and an event with `relaycount="1"` is an individual event. Pool length is one of `LCM`,
`SCM`, `SCY`, a set of non-standard lengths such as `SCM20` and `SCY27`, or `OPEN` for open
water.[^doc] The strokes are `FREE`, `BACK`, `BREAST`, `FLY` and `MEDLEY`. There are also
`IMRELAY`, `UNKNOWN` for events that fit no stroke (these must carry a descriptive name),
and a set of fin-swimming values.[^doc]

National variations are written into the same file rather than into a separate format.
A federation adds a value by prefixing it with its IOC nation code and a dot. The
documentation lists German and Swiss additions, among them `GER.RES` for a re-swim round at
the German team championships.[^doc]

## A file read

The file below is invented but valid under the documentation. The meet, club and swimmer do
not exist, and the swimmer is the one used in the examples on the [SDIF](sdif.md) and
[HY3](hy3.md) pages, so all three can be compared.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<LENEX version="3.0" created="2026-03-14T18:42:05">
  <CONSTRUCTOR name="Riverside Timing" version="2.1">
    <CONTACT email="results@example.org" />
  </CONSTRUCTOR>
  <MEETS>
    <MEET name="Spring Open" city="Riverside" nation="USA" course="SCY">
      <SESSIONS>
        <SESSION number="1" date="2026-03-14" daytime="09:00">
          <EVENTS>
            <EVENT eventid="7" number="7" gender="F" round="TIM">
              <SWIMSTYLE distance="200" relaycount="1" stroke="FREE" />
              <AGEGROUPS>
                <AGEGROUP agegroupid="1" agemin="-1" agemax="-1" name="Open">
                  <RANKINGS>
                    <RANKING place="1" resultid="301" />
                  </RANKINGS>
                </AGEGROUP>
              </AGEGROUPS>
              <HEATS>
                <HEAT heatid="703" number="3" />
              </HEATS>
            </EVENT>
          </EVENTS>
        </SESSION>
      </SESSIONS>
      <CLUBS>
        <CLUB name="Riverside Aquatic Club" code="RAC" nation="USA">
          <ATHLETES>
            <ATHLETE athleteid="55" firstname="Marguerite" lastname="Wren"
                     gender="F" birthdate="1992-08-26">
              <RESULTS>
                <RESULT resultid="301" eventid="7" heatid="703" lane="5"
                        swimtime="00:01:49.37" reactiontime="+68">
                  <SPLITS>
                    <SPLIT distance="50" swimtime="00:00:25.81" />
                    <SPLIT distance="100" swimtime="00:00:53.60" />
                    <SPLIT distance="150" swimtime="00:01:21.72" />
                  </SPLITS>
                </RESULT>
              </RESULTS>
            </ATHLETE>
          </ATHLETES>
        </CLUB>
      </CLUBS>
    </MEET>
  </MEETS>
</LENEX>
```

The event is defined once, in the session. It is event 7, a women's 200 yard freestyle swum
as a timed final (`round="TIM"`) in a short-course-yards pool, which is set by `course` on
the meet. The swim is recorded on the athlete. Result 301 points to event 7 and heat 703 and
gives the lane, the finishing time and a reaction time of 0.68 seconds. The place is in
neither of those locations: it is in the event's open age group, where a ranking gives place
1 to result 301. The splits stop at 150 yards because the time at 200 yards is the result
itself.

The same swim in SDIF is a single fixed-width `D0` record, with the place, heat and lane in
numbered columns of that line and the splits in separate `G0` records that follow it. In
Lenex it is spread across the tree and connected by the numbers 7, 703 and 301.

## What the sample files show

The Swimrankings wiki links four sample files, for entries, a start list, results and
records.[^wiki] Each is a ZIP archive containing a single `.lef` file dated 1 December 2024.
The first three describe the 2024 Canadian Olympic and Paralympic swimming trials in
Toronto. The fourth holds world, Canadian and Ontario record lists, including para-swimming
lists.[^samples] All four were written by a debug build of SPLASH Meet Manager, whose
author is also the maintainer of the format.[^samples][^wiki]

The files use features that the current documentation does not include:[^samples][^doc]

- The meet's touchpad installation is written as `touchpad`, but the documentation names
  the attribute `touchpadmode`.
- The pool has a `name` attribute, which the change log records as removed in 2016.
- Some attributes are not in the documentation at all: `masters` on the meet, `late` on
  entries, `clubid` on clubs, and a `code` on time-standard lists. The World Para Swimming
  licence number is written as `sdmsid`, while the documentation names it `license_ipc`.
- Rounds marked `EXTRAHEATS` appear, although that value is not in the documented list.
  Some results carry the status `RJC`, which the documentation allows only on entries.
- Several hundred results have a time of `00:00:00.00` and no status, where the
  documentation provides `NT` for a missing time.

In every other respect checked, the files match the documentation. Splits are cumulative
and stop before the finish, the relationships between elements are all expressed through
identifiers, and Canadian additions use the nation-code prefix, such as `CAN.TRIALS` for the
meet type and `CAN.IPC` and `CAN.JR` for record lists.[^samples] The differences above show
that in practice the format is defined partly by what the maintainer's own program writes,
and that a reader written strictly from the documentation will find attributes it does not
recognize.

## Adoption

The Swimrankings wiki names European Aquatics and 22 national bodies that use Lenex as their
main format for results, records, rankings and entries. They include the federations of
Austria, Belgium, Denmark, Finland, Iceland, the Netherlands, Poland, Portugal, Spain, Sweden,
Switzerland and Turkey.[^wiki] The one Canadian entry is the Quebec federation, not Swimming
Canada. Germany does not appear, although the documentation defines German extensions. The
German federation has its own text-based [DSV-Standard](dsv-standard.md) for entries and
results.[^doc][^dsv] European Aquatics formed a data-hub task force in 2025 to run its
records and rankings pages, and Kaufmann is a member.[^ea] Its announcement does not
mention Lenex, so the description of Lenex as the recommended format for European Aquatics
rankings comes from the Swimrankings wiki.[^wiki][^ea]

The wiki names four programs that read and write the format:[^wiki]

| Program | Author named by the wiki | Notes |
|---|---|---|
| [Splash Meet Manager](splash-meet-manager.md) | Christian Kaufmann | The maintainer's own meet and team software, from [Splash Software](../vendors/splash-software.md) |
| [Swimify](swimify.md) | Erik Berglund | Writes Lenex 3.0 result files from August 2020; its event files moved to Lenex 3 only in January 2025[^swimify] |
| [EasyWk](easywk.md) | Björn Stickan | German meet software |
| [CPS-Schwimm](cps-schwimm.md) | Hermann Josef Aretz | German meet software |

The format is open to any developer without charge, and anyone can upload a file to the
[Swimrankings](swimrankings.md) site for a basic validation.[^wiki] Independent libraries
that read it exist in PHP, Java, TypeScript and other languages. The ones examined read both
the plain `.lef` and zipped `.lxf` forms, and none of them refers to an official
schema.[^php][^java]

The American program [Hy-Tek Meet Manager](hy-tek-meet-manager.md) does not import it.
The Meet Manager 8 user guide lists Hy-Tek's own [HY3](hy3.md) files and SDIF `.sd3`
files as the only kinds of entry file it accepts.[^mm8] Swimify, which reads and writes both Lenex and Hy-Tek files, lists Canada
among the federations it is approved for.[^swimify]

The earliest dated print reference to Lenex found for this article is an advertisement for
Splash Meet & Team Manager that ran in the Canadian magazine *SwimNews* in 2002. The
advertisements in the January–February and March–April issues say results can be saved in
Splash's own format and in SDIF, which they present as the American format. From the May–June issue on, the list is longer. Entries could then be read as
[Commlink](commlink.md), SDIF, WSV, Lenex or [Aquabec](aquabec.md), and results could be
saved as SDIF, Splash, WSV, Lenex or Aquabec.[^sn269][^sn271] The advertisements speak for
one European program only. They do place Lenex in commercial use by 2002, beside the
national formats of the United States, Germany and Quebec.

## Compared with SDIF

This section compares Lenex with SDIF, the American format that does the same job.

SDIF is a sequence of 162-byte
fixed-width lines, each identified by a two-character code. Its relationships are implied
by the order of the lines, so a swimmer's records follow the record for that swimmer's
club.[^sdifspec] Lenex is a tree. It groups data by nesting and links the program side of a
meet to the people side with numeric identifiers. A single swim takes one SDIF line but
touches three separate places in a Lenex file, as the example above shows.

Values are written differently too. SDIF times take the form `mm:ss.ss` and dates the form
`MMDDYYYY`, and every field has a fixed column width. In Lenex, times always take the
fixed-length form `HH:MM:SS.ss` and dates take ISO order. A missing Lenex value is omitted
from the file, not left as a blank column.[^sdifspec][^doc] Where SDIF has to add a record
type to hold a longer identifier, Lenex adds an attribute. A federation can also add its own
values under its nation-code prefix without breaking any other reader.

The two are governed differently. United States Swimming publishes SDIF and last revised it
in 1998.[^sdifspec] Lenex is maintained by one person, who also sells a program that reads
and writes it. Its version number has not changed since 2008, but its documentation has been
revised many times since then.[^doc][^wiki] One consequence for anyone writing a reader is
that a Lenex file from a current program may include attributes an older reader does not
know, and the reference files themselves go beyond the current documentation.

## See also

- [SDIF](sdif.md): the American fixed-width counterpart
- [XSDIF](xsdif.md): the XML form of United States Swimming's format
- [DSV-Standard](dsv-standard.md): the German federation's text format, advertised beside
  Lenex in 2002 as WSV
- [Aquabec](aquabec.md): the Quebec competition software named in the same advertisement
- [Splash Meet Manager](splash-meet-manager.md): the maintainer's program, which wrote the
  sample files
- [Swimify](swimify.md), [EasyWk](easywk.md) and [CPS-Schwimm](cps-schwimm.md): other
  programs that read and write the format
- [Swimrankings](swimrankings.md): the site that hosts the specification
- [Software](index.md): the software reference

## References

[^doc]: [Christian Kaufmann, Lenex 3.0 Technical Documentation](https://wiki.swimrankings.net/images/6/62/Lenex_3.0_Technical_Documentation.pdf) (revision of 4 March 2025).
[^doc2021]: [Christian Kaufmann, Lenex 3.0 Technical Documentation](https://wiki.swimrankings.net/images/archive/6/62/20211102213537!Lenex_3.0_Technical_Documentation.pdf) (revision of 27 October 2021).
[^doc2015]: [Christian Kaufmann, Lenex 3.0 Technical Documentation](https://www.southeastswimming.org/wp-content/uploads/2015/07/Lenex_3.0_Technical_Documentation.pdf) (revision of 31 January 2015).
[^wiki]: [Swimrankings, Lenex](https://wiki.swimrankings.net/index.php/swimrankings:Lenex) (history, federations, software, trust authority).
[^samples]: [Swimrankings, example results file](https://www.swimrankings.net/files/example-results.lxf), with the entries, start list and records files beside it.
[^ea]: [European Aquatics, Dynamic Swimming Records and Rankings pages now available](https://europeanaquatics.org/dynamic-swimming-records-and-rankings-pages-now-available-on-european-aquatics-website/) (2 July 2025).
[^dsv]: [Wikipedia (German), DSV-Standard](https://de.wikipedia.org/wiki/DSV-Standard).
[^swimify]: [Swimify, Swimify Meet Manager changelog](https://support.swimify.com/en-US/kb/articles/swimify-meet-manager-changelog).
[^php]: [leonverschuren, lenex-php](https://github.com/leonverschuren/lenex-php) (PHP; reads `.lef` and `.lxf`).
[^java]: [Tiim, lenex-java](https://github.com/Tiim/lenex-java) (Java; reads `.lef` and `.lxf`).
[^mm8]: [HY-TEK, Import Meet Entries](https://hytek.active.com/user_guides_html/swmm8/importmeetentries.htm) (Meet Manager 8 user guide).
[^sn269]: *SwimNews*, January–February 2002 (Splash Meet & Team Manager advertisement; Splash format and SDIF).
[^sn271]: *SwimNews*, May–June 2002 (Splash advertisement listing Commlink, SDIF, WSV, Lenex and Aquabec).
[^sdifspec]: [USA Swimming, Standard Data Interchange Format version 3](https://www.usms.org/admin/sdifv3f.txt) (28 April 1998).

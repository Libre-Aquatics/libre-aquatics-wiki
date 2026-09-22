---
title: Hy-Tek Meet Manager
description: >-
  Hy-Tek Meet Manager is the meet-management program that seeds and scores swimming
  competitions and reads race times from the timing equipment on the deck.
tags:
  - Software
  - Meet management
  - Swimming
---

<!--
Research notes, Hy-Tek Meet Manager. Built out from a stub in September 2026.

Scope. The previous stub was written from the Dolphin pass and covered only the Dolphin
interface. That material now lives on dolphin.md and is linked rather than repeated here.
This pass added the history, the company, the product family, the data-exchange story and
the Daktronics interface, and consolidated the licensing.

A correction this pass makes. The stub said Active acquired Hy-Tek in 2007, in its body and
in its comment, and claimed the year was verified from two independent items. It was 2008.
Active's own press release is dated 8 July 2008 and names what was bought; CBS News and
Swimming World carried the story the same month. The 2007 figure most likely came from Tom
Taylor's "25 years" remark in that release, which is a round characterization and not a
date. docs/software/index.md carried the same wrong year and is fixed in this pass.

Corporate structure, which is more interesting than the stub suggested. Active did not buy
one company. It bought Hodgson's Hurricanes, Inc. and certain assets of T&C Products, Inc.,
two entities trading together as HY-TEK Sports Software. Set that against two other facts
already in hand: Swimming World named the 1984 program's author as B. Thomas Taylor, and a
CTS brochure quotes Charlie Hodgson as Hy-Tek's Director of Product Development. The
corporate names line up with the two principals. No source states that mapping, so the body
gives the names and stops.

The origin, which is new to this wiki. sources/periodicals/swimming-world/198406.txt:619-627
reports Hy-Tek, Ltd. as publisher of a package called Computerized Swim League, with Micro
Computer Co. of Wheaton, Maryland as exclusive national distributor, donated with hardware
to Don Gambril, the USA Olympic coach, at the Colesville-White Oak Swim Center,
Silver Spring.
Note the page names it inconsistently: the body says Computerized Swim League twice and the
photo caption at :627 says Computer Swim League. Both readings are in the same issue.

Product-name timeline, all read directly unless marked:
  1984-06 swimming-world/198406.txt:619  Computerized Swim League, Hy-Tek Ltd. The headline
          calls the company "Hy-Tek Industries", which the body contradicts two lines later
          with "Hy-Tek, Ltd."; treat the headline as a sub-editor's slip.
  1986-10 swimming-world/198610.txt:14742-14755  earliest Meet Manager attestation held. The
          advertisement pairs TEAM MANAGER and MEET MANAGER, and HY-TEK appears in the same
          issue's advertiser index at :16165. The brandmark inside the ad itself is OCR
          garbage, so the attribution rests on the index, not on the ad. An August 1986 ad
          with the same copy exists at 198608.txt:19141 but carries no legible brand at all;
          this article uses October 1986 as the first firm date. Note the same 1986 index
          also lists Easy Meet and Lab Software Associates, so the rivals were there already.
  1988-08 swimming-world/198808.txt:1032-1033  the foundational interface item, and editorial
          rather than advertising: Meet Manager will talk to consoles from Omega, Daktronics,
          Kyrotech, Incomar and Colorado over a cable, through a separate IBM-PC package
          called The Interface, supplied as a disk plus a cable.
  1988-11 swimming-technique/198811.txt:1084-1089  a Daktronics advertisement offering Meet
          Manager free with a swim timing system and putting its value at $500. A competing
          timing vendor bundling the software is the best early adoption evidence held.
  1989-05 swimming-technique/198905.txt:663-665  Hy-Tek advertisement, the full family: TEAM
          MANAGER and MEET MANAGER, plus BUSINESS MANAGER, COMMLINK, SWIM TRAINING and THE
          INTERFACE, for the IBM-PC.
  1990-11 swimming-technique/199011.txt:744-761  independent editorial feature, not
          advertising. Names Bob Mroz as president of Hy-Tek, reports a Polar heart-monitor
          collaboration, and lists competitors James Burrill & Associates, ProGrams Sports
          Software and Easy Meet.
  1991-08 swimming-world/199108.txt:3090-3180  Commlink advertisement and a Hy-Tek full-page
          ad, address 6502 Micro Drive, Dayton, Maryland 21036.
  1992-09 swimming-world/199209.txt:6779  the only Macintosh claim in the corpus.
  1997-04 swimming-world/199704.txt:12389  New Bern, North Carolina; Meet Manager 8.1
          promised for August 1997; the Swimming World results partnership.
  1998-01 swimming-technique/199801.txt:1561  Team Manager for Windows.
  2000-10 swimming-world/200010.txt:5069  Meet Manager for Windows in advertising.
  2008-07 The Active Network acquisition, from outside the periodicals entirely.

The price in the 1989 advertisement cannot be read. The extraction gives "STARTS AT 899.00"
with no dollar sign, and the surrounding numerals in that ad family are unreliable, so the
figure could be $899.00 or $99.00 and nothing decides it. The body therefore uses the 1988
Daktronics valuation of $500 instead, which is a clean reading in another company's copy.
No price for Meet Manager itself is printed anywhere in the corpus.

Bob Mroz is president of Hy-Tek, from swimming-technique/199011.txt:757 (editorial, quoted
directly) and an exhibitor listing at swimming-technique/198805.txt:1264. He is the only
Hy-Tek officer named in the magazines.

The NCAA claim belongs to somebody else. Championship Technologies, run by Bob Clauson,
claims in the 1991 survey (swimming-world/199108.txt:2598-2625) to have run every NCAA
national championship for ten years, and to have built the first automatic timing-to-PC
interface with Colorado Time Systems in 1982. That is vendor self-description, but it is not
Hy-Tek's, and it is easy to misattribute.

The acquisition is absent from the magazines. A corpus-wide search for Active Network,
activenetwork and active.com finds only unrelated event-registration links; the 2008 deal is
reported nowhere in these three titles, and Meet Mobile appears once, in passing, in a 2014
obituary. Section sources for the acquisition are external by necessity.

The version numbering does not form one series and the body says so rather than papering
over it. Swimming World has Meet Manager 8.1 in 1997, on DOS-era product line numbering. The
current Windows product is MEET MANAGER 8.0 for Swimming. Nothing found explains the reset,
and the CTS AquaLink guide F854:119, which requires "Hy-Tek Meet Management software v8.2 or
later" for its team-score download, cannot be placed confidently on either line. Do not
assert a continuous version history.

Commlink against SDIF is the best story here and neither is documented on this wiki. Commlink
is Hy-Tek's own exchange product, advertised from 1989 and described in 1991 as the thing
tying the family together: mark entries in Team Manager, write them to a diskette with best
times, post it to the meet director, load into Meet Manager, get results back on disk. The
1991 copy claims it "has become a standard in the swimming community", which is the
company's claim and is attributed. SDIF is United States Swimming's Standard Data Interchange
Format, version 3 dated 28 April 1998, 162-byte fixed records with a two-byte type code and
defined record types for the meet, teams, swimmers, relays, splits and qualifying times.
The magazines show the two competing: swimming-world/199412.txt:2117-2143 is a US Swimming
item urging readers to press vendors that did not yet support SDIF, and
swimming-world/199805.txt:1032-1036 asks for times "using an SDIF-compatible format or using
Hy-Tek's Commlink", i.e. as alternatives rather than one implementing the other. SwimNews
circa 2001 lists accepted formats as Commlink, SDIF, Splash, WSV and Lenex.

What the local corpus does NOT support, and the body says so. The Hy-Tek file extensions
.hy3, .hyv, .cl2 and .sd3 have zero attestation anywhere in sources/. Every apparent grep
match is OCR noise in result tables, for instance a team code run into a time. The .scb
extension is attested three times but it is CTS's scoreboard format that Hy-Tek exports to,
not a Hy-Tek format; F902 calls the menu item "Start Lists for CTS". So the format section
rests on the SDIF specification itself plus what the CTS and Daktronics documents show
moving across the wire, and it does not claim more.

Timing interfaces, from held documents rather than from Hy-Tek marketing:
  - Daktronics ED-13876 Rev 5, 19 August 2013, is the richest local source on any Meet
    Manager interface. Two separate interfaces, a timer interface and an alpha scoreboard
    interface. Serial through the console J6 results port or UDP over Ethernet; the Pro
    software side runs at 38400 baud on J4; turning the network on disables the matching
    serial port, which is the kind of trap worth recording. Event orders download in swum
    order, up to 500 events numbered 1 to 999 with an optional trailing letter for division,
    gender or age, each with a round designator, and the number-one record time rides along.
  - The Daktronics aquatics brochure and the OmniSport 2000 manual both give Meet Manager
    5.0 as the version that brought Ethernet.
  - CTS Gen7, F1034:2202 and F1058:2106, carries an exclusivity claim worth quoting: "As of
    this writing, only Hy-Tek Meet Manager for Swimming supports UDP scoreboard data", and
    the Alpha Scoreboard licence option has to be owned. Port 60287, Ctrl+F10 sends the first start
    list, then Gen7 requests a new one on every event or heat change.
  - CTS F902 is the opposite of a live link, a sneakernet: export start lists to .scb on a
    floppy or a USB stick and copy them across with a desktop utility.
  - Both the 2011 and 2015 CTS catalogues list Hy-Tek Meet Manager under the Dolphin's
    Requirements heading (2011:227, 2015:300-308), with a Windows laptop. An earlier draft
    of this page claimed the 2015 edition dropped the line and called it a datable
    softening. It does not; the requirement is word for word the same in both. The lesson
    is that a trend asserted from two documents needs both of them re-read, not one.

Deliberately not restated here, because other pages carry it: the Dolphin primary and backup
arrangement, the 0.3 s refuse-to-average rule and the DO3/DO4 build floor are on dolphin.md;
the DisplayLink Plus serial settings and the Gen7 .scb and UDP change are on
displaylink-plus.md; the pace-clock workout export is on upc-c.md.

An unresolved attribution, left open rather than flattened. The pace-clock workout export is
credited to Workout Manager by CTS F901 and by upc-c.md, but omnisport-6000.md footnotes it
to a TEAM MANAGER guide, and the Daktronics PC-2001 manual says TEAM MANAGER while the
Daktronics aquatics brochure says WORKOUT MANAGER. Four sources, two answers. Possibly the
function moved between products; nothing held says.

Vendor claims, all attributed in the body and none stated as fact: the 2008 release claims
over 95 percent of US swimming and track clubs, schools and organizations, and more than
20,000 organizations in over 30 countries; the current Hy-Tek site claims thousands of
customers in over 100 countries. The two do not describe the same quantity, which is why
both appear.

Citation sweep, September 2026. Every URL on this page was opened and checked against the
claim it supports. Findings: the seeding preferences citation was wrong, pointing at the
parent page when the FINA 2013 rule and the Australian lane table live on two sub-pages, now
cited separately; the USA Swimming demo-guide link was a 404 and has been replaced by that
body's own national championship results, which are better evidence anyway; the 1999 release
date is a schedule, not a confirmation, and the wording now says so. Everything else
resolved and said what it was quoted as saying, including the seeding methods, the options
list, the store prices, the February 2020 release date, and all three governing-body PDFs,
which were extracted with PyMuPDF and read. Two findings were added from that reading, the
Utah conversion factor and the Pacific Northwest bonus-event warning.

OCR warning for whoever comes next. The magazine extractions are two-column and interleaved.
swimming-world/199412.txt:2117-2143 alternates fragments of the SDIF item with an unrelated
story about officials' applications, and reads as nonsense unless every other fragment is
discarded. Every magazine claim above was checked against the raw lines.

Still to research: the DOS to Windows transition and when it happened; the version-number
reset; Team Manager in its own right; what The Interface and Swim Training were; whether
Commlink survived SDIF or was replaced by it; the relationship between Meet Manager and Meet
Mobile beyond the fact that Active owns both; pricing beyond the 1989 figure; the track and
field products, which are out of scope here but share the code base; and Hy-Point Software's
SwimMeet Manager, a competitor whose advertisements run through 2000 and 2001 and which is
easy to mistake for Hy-Tek in a grep.
-->

Hy-Tek Meet Manager is the meet-management program that builds a swimming competition,
seeds it, scores it, and collects race times from the timing equipment on the
deck.[^st8905][^ed13876] It has been advertised since 1986, and the American console makers
of the period documented interfaces to it: Colorado Time Systems, Daktronics, Omega,
Kyrotech and Incomar all appear in that role in the sources below.[^sw8610][^sw8808] A
Colorado Time Systems questionnaire for architects asks a new pool what meet management
software it will run and offers three boxes: Hy-Tek, other, or none.[^arch]

The program runs on Windows and is published by Hy-Tek Sports Software, which The Active
Network bought in 2008.[^active08][^hytekreq]

## Naming and versions

The name has been stable far longer than the numbering. An advertisement in October 1986
already pairs Meet Manager with Team Manager,[^sw8610] and Hy-Tek's own advertising from May
1989 lists it in caps as MEET MANAGER beside five other programs.[^st8905] Colorado Time
Systems writes it as two words, Daktronics as one phrase in capitals with a registered mark,
and CTS occasionally drops the hyphen from the company name.[^f912][^dakbro]

Version numbers do not form one series, and Hy-Tek's own record explains why. The company
sold a DOS Meet Manager and a Windows one side by side for years, numbering them
separately. A news release of 23 August 1999 announced the Windows product as scheduled for production
release a week later, starting a second series at 1.x while the DOS line was already at
8.1.[^whatsnew] The Windows line then ran 1.3D in early 2000, 1.4G that August, 1.4J in
2001, and on through 2.0 to the present 8.0, which Hy-Tek dates to 14 February
2020.[^news00][^store] Both products were still on sale together in 2001, with an upgrade
path from one to the other priced at $149.[^store01]

So Swimming World's Meet Manager 8.1 of 1997 and today's MEET MANAGER 8.0 are different
programs that happen to share a number, and the 2.0E reported in January 2007 is a Windows
release, not a step backwards.[^sw9704][^sw0701] A version number here is worth little
without saying which line it belongs to, which is why a CTS guide requiring "version 8.2 or
later" cannot be placed with confidence.[^f854]

A small artefact records the join: in the guides for Meet Manager 6.0 and 7.0, the page
listing each release's new features still sits in a file named for version 2.0, because the
help project was started then and never renamed.[^newin]

The platform history has one real move and one oddity. Every advertisement from 1986 to
1991 sells the programs for the IBM-PC and compatibles alone;[^sw8610][^st8905] a single
1992 advertisement adds the Macintosh, and no later one repeats the claim.[^sw9209] Team
Manager reached Windows in 1998, though the month is in dispute: a Hy-Tek advertisement in
the January 1998 Swimming Technique offers Team Manager for Windows as available then,
while Hy-Tek's own newsletter of August 2000 puts the release in April of that year. The
advertisement is contemporaneous and the newsletter is the company's later recollection,
which is the usual reason to prefer the former, but the conflict is recorded rather than
resolved.[^st9801][^news0008] Meet Manager is advertised for Windows by October 2000, where
the line has stayed since.[^sw0010]

## Role in a meet

Meet Manager sits between the entries and the results, and it is the only piece of the chain
that knows the shape of the competition. It holds the event list, seeds heats and lanes from
entry times, receives finish times from the console, applies the scoring rules, and produces
the heat sheets and result reports.

The program is organised as the work of running a meet, and its menus follow that order:
events, athletes, relays and teams are built first, then seeding, then the Run screen,
then reports and labels.[^guide] Hy-Tek calls the Run screen the operations centre, and it
shows the event list, a heat at a time, and the results, backup and reaction-time columns
as they fill.[^run]

It does no timing of its own. The console on the deck measures
the race; Meet Manager tells the console which race is being swum and takes back the numbers.
The division shows in the Daktronics interface, where event orders travel from the program
to the console and touchpad times, button times, splits, start reactions and relay exchanges
travel back.[^ed13876]

Where a scoreboard is involved the program is often also the source of the names and the
scores, through a second interface that is licensed separately from the timing
one.[^ed13876][^f1034]

## Seeding and scoring

Seeding is the part a meet cannot be run without, and Hy-Tek implements four methods:
timed-finals seeding, which spreads the fastest swimmers outward from the middle of the
pool so that an eight-lane heat is ordered 4-5-3-6-2-7-1-8; circle seeding, which
distributes the fastest swimmers across the last few heats of a preliminary round; dual
seeding, for two to four teams in assigned lanes; and a Masters method that seeds by age
and then by time.[^seeding] The company says the algorithms are those defined in the USA
Swimming, United States Masters Swimming and FINA handbooks, for pools of four to ten
lanes.[^seeding]

The details are where the sport's rules show through. How many preliminary heats are circle
seeded is configurable because practice varies: most bodies want the fastest three circle
seeded, but Hy-Tek records that FINA made a rule in 2013 for events of 400 and longer to use
the fastest two.[^basicseed] Swimmers with no time, and those whose times tie, are seeded at random
and re-randomised on any re-seed, which is why the program warns against re-seeding once
heat sheets have been printed.[^seeding] A tie for the last qualifying place raises a
swim-off warning.[^seeding] Lane order itself is editable, and the supplied Australian
example runs to ten lanes numbered from zero.[^lanepref]

Scoring works in two independent layers. One is place points, a table of points per
finishing position whose default covers sixteen, and which can differ by gender and by
division. A second, rarely used, table sits beside it.[^points] The other is a performance point system, where Hy-Tek supports its own
scheme alongside FINA, LEN, NISCA high-school power points, British, Australian and New
Zealand systems, an improvement-based system that scores how much a swimmer has dropped
rather than where they finished, and Paralympic systems across the S, SB and SM
classes.[^scoring]

Around those sit the rules a meet director actually argues about: whether to score only
swimmers who beat a qualifying time, whether to score the fastest heat alone, how many
swimmers from one team may score in an event, whether foreign athletes count toward team
totals, how a mixed relay's points are divided, and whether no-shows incur a
penalty.[^scoring]

## History

The company appears in the swimming press in June 1984, when Swimming World reported that
Hy-Tek, Ltd. published a package called Computerized Swim League and had brought two
computer firms together to donate hardware and software to Don Gambril, then the USA
Olympic coach, at a ceremony in Silver Spring, Maryland. The program's author is named there as B. Thomas
Taylor, and a Wheaton, Maryland firm is given as the exclusive national distributor. The
same page names the package inconsistently, as Computerized Swim League in the text and
Computer Swim League in the photograph caption.[^sw8406]

Meet Manager itself appears two years later, in an October 1986 advertisement pairing it
with Team Manager. The brand does not survive the scan of the advertisement, but HY-TEK is
listed in the same issue's advertiser index, which also carries Easy Meet and Lab Software
Associates: the rivals were there from the start.[^sw8610]

What made the program matter to timing equipment was announced in August 1988. Swimming
World reported that Meet Manager would talk directly to consoles from Omega, Daktronics,
Kyrotech, Incomar and Colorado over a cable, sending times and splits straight to the
screen and on to a printed report. The link was a separate package,
[The Interface](the-interface.md), sold as a disk and a cable.[^sw8808] Three months later
Daktronics was advertising Meet Manager free with the purchase of one of its swim timing
systems and putting the software's value at $500, which is the only firm price the
magazines give for it.[^st8811] A competing timing manufacturer bundling the program says
more about its position than any of Hy-Tek's own copy does.

By May 1989 Hy-Tek was advertising six programs together for the IBM-PC, under the line
that they were written for swimming people and not computer people.[^st8905] A feature in
November 1990, editorial rather than advertising, names Bob Mroz as the company's president,
lists the same family with Workout Manager added, and sets it against competing packages
from James Burrill & Associates, ProGrams Sports Software and
[Easy Meet](easy-meet.md).[^st9011]

Hy-Tek was not shy about where it expected its customers to come from. A full-page
advertisement in February 1989 offered a trade-in against a buyer's existing Colorado board
and software, so the company was openly targeting the installed base of the largest timing
manufacturer's own meet software.[^sw8902]

By 1990 the line was being revised together rather than piecemeal. Hy-Tek announced Workout
Manager alongside updates to Meet Manager, Team Manager, Commlink and Business Manager, and
put the total at more than fifty enhancements: post-meet summary reports that included what
proportion of each team's entries beat their seed times, age scoring handled independently
within a single event, and wider top-times reporting.[^sw9009]

What the program was expected to cope with, in the company's own 1991 account, was most of
American swimming: meets run for USS, the YMCA and YWCA, colleges, high schools, Masters
clubs and summer leagues, in A, B and C grades, as pentathlons, flighted, prelims and
finals, dual meets and national championships.[^sw9108mm]

The company was at Dayton, Maryland in 1991.[^sw9108] By 1997 it had moved to New Bern,
North Carolina, where it stayed; that year it also agreed to feed meet results directly to
Swimming World for publication, and promised Meet Manager 8.1 for that August.[^sw9704]

On 8 July 2008 The Active Network announced that it had bought Hodgson's Hurricanes, Inc.
and certain assets of T&C Products, Inc., the two entities that traded together as HY-TEK
Sports Software. The release quotes Tom Taylor as co-founder.[^active08] Two names in that
sentence appear elsewhere in this research: the 1984 program author was B. Thomas
Taylor,[^sw8406] and Charlie Hodgson was Hy-Tek's Director of Product Development in a CTS
brochure of 2012.[^ctsbro] No source connects the corporate names to the people, and this
article does not.

[The Active Network](../vendors/active-network.md) still owns and supports the products and
sells them from its own site.[^hytekreq][^hytekdl] It also owns
[Meet Mobile](meet-mobile.md), the live-results app that publishes what Meet Manager is
scoring, so the two ends of a spectator's experience are now in the same
hands.[^meetmobile]

## The Hy-Tek family

Meet Manager has never been sold alone. The 1989 advertisement lists it beside Team Manager,
Commlink, [The Interface](the-interface.md),
[Business Manager](hy-tek-business-manager.md) and a set of swim-training packages; the 1990
survey adds Workout Manager.[^st8905][^st9011] The division of labour that matters to this
wiki is between the two that survive:

- [Team Manager](hy-tek-team-manager.md) belongs to a club and holds its roster, its
  swimmers' best times and its entries.
- Meet Manager belongs to whoever is running a particular competition.

[Commlink](commlink.md) was the product that moved data between them, and
[Workout Manager](hy-tek-workout-manager.md) is the training-side program that CTS and
Daktronics pace clocks accept a session from.[^f901][^dakbro] The pace clock controller
article covers that export from the clock's side.

Which program actually performs the pace-clock export is not settled by the sources. CTS
credits Workout Manager, and so does the Daktronics aquatics brochure, but the Daktronics
PC-2001 manual and a Hy-Tek guide cited elsewhere on this wiki credit Team Manager
instead.[^f901][^dakbro][^dakpc] The function may have moved between products; nothing held
says so.

## Data exchange

Getting entries and results between programs is the problem Meet Manager has been solving
for forty years, and two answers to it competed.

Hy-Tek's own answer was [Commlink](commlink.md), advertised from 1989. A 1991 advertisement
describes the loop: mark the entries in Team Manager, let Commlink write them to a diskette
with each swimmer's best times, post the diskette to the meet director, load it into Meet
Manager, and get the results back on disk afterwards. The same copy claims Commlink had
become a standard in the sport, which is the company's own characterization.[^sw9108]

The other answer was a published standard. United States Swimming defined the Standard Data
Interchange Format, and [SDIF](sdif.md) version 3, dated April 1998, specifies fixed
162-byte records, each opening with a two-byte type code, with record types for the meet
itself, the teams, individual swimmers, relays, splits and qualifying times. Its stated
purpose is to let results move between programs and up to the governing body without being
retyped.[^sdif]

The governing body pushed it. In December 1994 a US Swimming item explained that results
could reach the LSC tabulators by disk or by modem once vendors adopted the format, that
this cut out retyping and the mistakes retyping causes, and told readers whose vendor did
not yet support SDIF to ask when it would.[^sw9412] Four years later the two schemes were
still being treated as alternatives: a 1998 request for times asks for them in an
SDIF-compatible format or in Hy-Tek's Commlink.[^sw9805]

Hy-Tek's own file formats outlasted Commlink and are what an operator meets today.
[HY3](hy3.md) carries entries and results, [CL2](cl2.md) is the older format still shipped
beside it, and [HYV](hyv.md) is the event export. None has a published specification, and
each line of an HY3 ends with a checksum the company does not document, which is why the
programs that read these files were built by inspection and generally will not write them.
Meet Manager itself will convert a CL2 to SDIF, which is the one sanctioned route from
Hy-Tek's formats to the open one.[^convert] Those extensions appear nowhere in the source
collection held for this wiki, so their pages rest on external sources.

## Connections to timing systems

Meet Manager talks to a lot of consoles. The current guide documents seventeen, among them
[ALGE](../vendors/alge-timing.md), [BestBet](../vendors/bestbet.md), Colorado Time Systems
4, 5 and 6, the CTS Dolphin, the Daktronics OmniSport 1000, 2000 and 6000,
[Incomar](../vendors/incomar.md), [Kyrotech](../vendors/kyrotech.md), several Omega models,
a Seiko, [Take Your Mark](../vendors/take-your-mark.md) and
[Wylas](../vendors/wylas-timing.md).[^consoles] Two of those names are worth pausing on: Incomar and Kyrotech were among
the five makers Hy-Tek first announced support for in 1988, and both are still in the
list, long after the companies stopped appearing in the swimming press.[^sw8808][^consoles]

What a console can do varies, and Hy-Tek publishes the matrix. Only some will accept an
event schedule downloaded from the program, and fewer still return start and relay
take-off reaction times; the CTS Dolphin, for instance, can do neither.[^consoles] There is
also a generational split in how they connect. The older consoles are serial, sometimes
fussily so, and Hy-Tek warns that the BestBet needs a null-modem cable where others take a
straight one. The newer ones do not use a cable at all: Wylas, Take Your Mark and IST all
reach the program over a network or through a shared file.[^consoles] The arrangements
differ enough by vendor that they are worth separating.

Daktronics documents the fullest of them. The OmniSport 2000 carries two independent
interfaces to the program: a timer interface and an alpha scoreboard interface. Over the
timer interface, event orders go down to the console in the order the events will actually
be swum, up to 500 of them numbered from 1 to 999 with an optional trailing letter for a
division, a gender or an age group, each carrying a round designator that separates prelims
from semis from finals, and the leading record time rides along so nobody has to key it into
the record board. Coming back are touchpad times, button times, splits, start reactions and
relay exchanges, addressable either by event and heat or by race number.[^ed13876] The link
is either a serial cable from the console results port or UDP over Ethernet, and switching
the network on disables the matching serial port, which is a trap worth knowing.[^ed13876]
Ethernet arrived with Meet Manager 5.0.[^dakbro][^omni2000]

Colorado Time Systems spans the whole range from a cable to a floppy disk. Its Gen7 consoles
take a live UDP link on port 60287, where the operator sends the first start list with a
keystroke and the console then asks for a fresh one whenever the event or heat
changes.[^f1034] At the other extreme, a 2005 CTS instruction sheet has the operator export
start lists to a USB stick or a 3.5-inch floppy and carry them to the scoreboard
computer.[^f902] The Dolphin wireless stopwatch system is covered on its own page, as is the
scoreboard side of the CTS arrangement.

CTS puts it more strongly in its own catalogues than the word option suggests. Both the
2011 and the 2015 editions list Hy-Tek Meet Manager under the Dolphin's requirements,
alongside a Windows laptop, rather than among its accessories.[^cat11][^cat15]

## Licensing

Meet Manager is sold as a base program plus options, and the parts this wiki touches are
mostly options. Hy-Tek describes a start-up version able to run basic meets, to which are
added two label options and five modules: the timing console interface, Dolphin backup
mode, an open-water button-finish interface, the alphanumeric scoreboard interface, and a
network module for multi-user operation and live results to the web.[^options]

The prices are published. As listed in 2026, the start-up program is $349 and an upgrade
$269, the timing console interface is $295, the alpha scoreboard interface and the network
option $495 each, the Dolphin wireless interface $149 and the open-water button interface
$129, with site and organizational licences at $250 a year.[^store] So a facility wanting
its console, its scoreboard and a Dolphin connected pays more for the interfaces than for
the program.

The licence itself is granted to a club or a school rather than to a machine, and Hy-Tek is
strict about the boundary: a club and a school sharing a pool and a coach need one licence
each, and a set of district meets feeding a state championship needs a licence per
meet.[^licensing] A free evaluation edition runs meets of up to six events and twenty-five
athletes and cannot print reports or import entries, which is also the recommended way to
open an old database whose program is no longer licensed.[^demo]

That arrangement has tightened over time. In 2007 CTS documented the Dolphin primary-mode
interface as included with Meet Manager at no extra charge, with only backup mode sold
separately.[^f922] The Dolphin article sets out the current position.

## Adoption

The company's own figures are the only ones available, and they should be read as such. At
the 2008 acquisition Active described Hy-Tek as serving over 95 percent of United States
swimming and track and field clubs, schools and organizations, and more than 20,000
organizations in over 30 countries.[^active08] The current Hy-Tek site claims thousands of
customers in over 100 countries.[^hytekabout] The two are not the same measure and cannot be
compared directly.

Better evidence sits in other people's documents, where the program leaves its own mark.
Meet Manager prints its name and licence type in the header of everything it produces, so
its use is visible on paperwork the governing bodies publish themselves. The official psych
sheet for the 2026 NCAA Division III championships, hosted on the NCAA's own site, is
headed "For Office Use Only License HY-TEK's MM 8.0".[^ncaa] The complete results of USA
Swimming's 2025 Junior National Championships, 218 pages of them, carry the same kind of
header over a licence named for USA Swimming's national meets.[^usas]

Below that level it is written into the rules of local administration. The Metropolitan
Swimming policy manual requires entries to arrive as a Hy-Tek or Team Unify file, or
another program the governing body has approved, and Pacific Northwest Swimming's meet
directors' handbook tells hosts to confirm they are running a current and legal copy of
Meet Manager.[^metro][^pns] State high school associations do the same: Utah's swimming
handbook requires coaches to submit the Hy-Tek file with their entries, and goes further by
citing the program as the authority for the arithmetic, converting times from metres to
yards by dividing by 1.11 and attributing that figure to Hy-Tek in the rule
itself.[^uhsaa]

The Pacific Northwest handbook also shows what dominance costs the people outside it. It
warns hosts that entries from clubs using anything other than Hy-Tek's software may not
import their bonus events properly, and tells them the problem is the entering club's to
solve.[^pns] The format's reach is enforced less by any rule than by the difficulty of
being the one club that does not use it.

The older evidence points the same way. A competing timing manufacturer was giving the
software away with its hardware in 1988.[^st8811] In December 1995 USA Swimming's age-group
office asked for postal meet results "preferably on HY-TEK", naming no
alternative.[^sw9512] From 1997 the sport's magazine of record built its own results
pipeline on the program.[^sw9704] Colorado Time Systems' architectural questionnaire treats
Hy-Tek as the default answer to what meet software a facility runs.[^arch]

One claim that circulates should not be attached to Meet Manager. The assertion that a
program ran every NCAA national championship for a decade belongs to Championship
Technologies, a rival, in its own copy for the 1991 survey, which also claims the first
automatic timing-to-computer interface, built with Colorado Time Systems in
1982.[^sw9108cmm] That is the competitor's self-description, not Hy-Tek's record. Two Daktronics consoles, the
[OmniSport 1000](../equipment/swimming/timers/omnisport-1000.md) and the
[OmniSport 6000](../equipment/swimming/timers/omnisport-6000.md), are now documented mainly
by Hy-Tek's interface guides, because Daktronics publishes nothing for them: the software's
documentation has outlived the hardware vendor's.

## See also

- [Hy-Tek Team Manager](hy-tek-team-manager.md): the club-side counterpart
- [Hy-Tek Workout Manager](hy-tek-workout-manager.md): the training-side program
- [Commlink](commlink.md): Hy-Tek's own data-exchange product
- [HY3](hy3.md) and [CL2](cl2.md): the file formats it writes today
- [SDIF](sdif.md): the published interchange standard it competed with
- [The Interface](the-interface.md): the package that first linked it to timing consoles
- [Business Manager](hy-tek-business-manager.md): the club-accounting member of the family
- [Computerized Swim League](computerized-swim-league.md): the 1984 package that preceded it
- [Meet Mobile](meet-mobile.md): the live-results app under the same owner
- [Easy Meet](easy-meet.md) and
  [Championship Meet Management](championship-meet-management.md): the rivals the magazines name
- [Hy-Tek Sports Software](../vendors/hy-tek.md): the company
- [The Active Network](../vendors/active-network.md): its owner since 2008
- [Dolphin Wireless Stopwatch Timing System](../equipment/swimming/semi-automatic/dolphin.md): the timing interface covered in detail
- [OmniSport 2000](../equipment/swimming/timers/omnisport-2000.md): the console whose interface is best documented
- [DisplayLink Plus](displaylink-plus.md): the CTS display program it feeds
- [Software](index.md): the software reference

## References

[^options]: [HY-TEK, MM product options](https://hytek.active.com/user_guides_html/swmm8/win-mmproductoptions.htm).
[^licensing]: [HY-TEK, Support and licensing](https://hytek.active.com/support-licensing-swimming.html).
[^demo]: [HY-TEK, Evaluation edition](https://hytek.active.com/user_guides_html/swmm8/evaluationedition.htm).
[^consoles]: [HY-TEK, Timing console interface](https://hytek.active.com/user_guides_html/swmm8/timingconsoleinterface.htm) (the supported consoles and what each can do).
[^guide]: [HY-TEK, MEET MANAGER 8.0 for Swimming user guide](https://hytek.active.com/user_guides_html/swmm8/hmcontent.htm) (contents; the program's menu structure).
[^run]: [HY-TEK, Run the meet](https://hytek.active.com/user_guides_html/swmm8/runthemeet.htm).
[^seeding]: [HY-TEK, Seeding basics and tips](https://hytek.active.com/user_guides_html/swmm8/seedingbasicsandtips.htm).
[^basicseed]: [HY-TEK, Basic seeding settings](https://hytek.active.com/user_guides_html/swmm8/basicseedingsettings.htm) (how many heats to circle seed; the 2013 FINA rule).
[^lanepref]: [HY-TEK, Standard lane preferences](https://hytek.active.com/user_guides_html/swmm8/standardlanepreferences.htm) (editable lane order; the ten-lane Australian case).
[^points]: [HY-TEK, Set up point scoring](https://hytek.active.com/user_guides_html/swmm8/setuppointscoring.htm).
[^scoring]: [HY-TEK, Scoring and awards preferences](https://hytek.active.com/user_guides_html/swmm8/scoringawards.htm).
[^whatsnew]: [Hy-Tek news release 21, 23 August 1999](https://web.archive.org/web/1999/http://www.hy-tekltd.com/whatsnew.htm) (MEET MANAGER for Windows production release 30 August 1999).
[^news00]: [Hy-Tek swim newsletter, August 2000](https://web.archive.org/web/20010719031554/http://www.hy-tekltd.com/swim/newsaug00/newsau00main.html) (WIN-MM at 1.4G; DOS features completed May 2000).
[^store01]: [Hy-Tek online store, MEET MANAGER for Windows](https://web.archive.org/web/2001/http://www.hy-tekltd.com/store/swim/mmwin.html) (archived 2001; DOS upgrade at $149 alongside the Windows start-up).
[^store]: [HY-TEK, MEET MANAGER 8.0 store page](https://hytek.active.com/store/swim/mm8.0.html) (release date and current prices).
[^newin]: [HY-TEK, New in MEET MANAGER 7.0](https://hytek.active.com/user_guides_html/swmm7/newinmeetmanager2_0.htm) (the file name still carries the 2.0 release).
[^sw8406]: Industry item, *Swimming World*, June 1984 ("Hy-Tek Industries Support U.S. Swim Team"; Computerized Swim League, B. Thomas Taylor).
[^sw8610]: Hy-Tek advertisement, *Swimming World*, October 1986 (Team Manager and Meet Manager; HY-TEK in the issue's advertiser index).
[^sw8808]: Industry item, *Swimming World*, August 1988 (Meet Manager interfaces to five console makers through The Interface).
[^sw9209]: Hy-Tek advertisement, *Swimming World*, September 1992 (the only Macintosh claim found).
[^st9801]: Hy-Tek advertisement, *Swimming Technique*, January 1998 (Team Manager for Windows).
[^news0008]: [Hy-Tek newsletter, August 2000](https://web.archive.org/web/20010719031554/http://www.hy-tekltd.com/swim/newsaug00/newsau00main.html) (WIN-TM released April 1998).
[^sw0010]: Hy-Tek advertisement, *Swimming World*, October 2000 (Meet Manager for Windows).
[^sw9512]: USA Swimming Age Group Programs notice, *Swimming World*, December 1995 (results "preferably on HY-TEK").
[^sw9108cmm]: Championship Technologies product copy, *Swimming World*, August 1991 (Special Section: Computer), NCAA and 1982 interface claims.
[^st8811]: Daktronics advertisement, *Swimming Technique*, November 1988 (Meet Manager offered free with a Daktronics swim timing system, valued at $500).
[^st8905]: Hy-Tek advertisement, *Swimming Technique*, May 1989 (six programs for the IBM-PC, from $899.00).
[^st9011]: Swim software survey, *Swimming Technique*, November 1990 (Hy-Tek family and competing packages).
[^sw9108]: Hy-Tek Commlink advertisement, *Swimming World*, August 1991 (Dayton, Maryland address).
[^sw9108mm]: Hy-Tek Meet Manager product copy, *Swimming World*, August 1991 (Special Section: Computer), meet types and markets.
[^sw8902]: Hy-Tek advertisement, *Swimming World*, February 1989 (trade-in offered against a Colorado board and software).
[^sw9009]: Swim Biz News item, *Swimming World*, September 1990 (Workout Manager released; over fifty enhancements across the line).
[^sw9412]: United States Swimming news item, *Swimming World*, December 1994 (SDIF adoption and Top 16 tabulation).
[^sw0701]: Industry item, *Swimming World*, January 2007 (SwimmingWorldMagazine.com partnership; MEET MANAGER 2.0E).
[^sw9704]: Industry item, *Swimming World*, April 1997 (Swimming World partnership; Meet Manager 8.1; New Bern, North Carolina).
[^sw9805]: Times submission notice, *Swimming World*, May 1998 (SDIF-compatible format or Hy-Tek's Commlink).
[^active08]: [The Active Network, Acquisition of HY-TEK Sports Software Businesses](https://info.activenetwork.com/news-and-events/active-press-releases/archive/the-active-network-establishes-leadership-position-in-swimming-and-track-and-field-markets-with-acquisition-of-hy-tek-sports-software-business) (8 July 2008).
[^hytekabout]: [HY-TEK Sports Software, About Us](https://hytek.active.com/about-us.html) (vendor claims, as of 2026).
[^meetmobile]: [The Active Network, Meet Mobile swim app](https://www.activenetwork.com/blog/meet-mobile-swim-app-launches).
[^hytekreq]: [HY-TEK Sports Software, System Requirements](https://activenetwork.my.salesforce-sites.com/hytekswimming/articles/en_US/Article/Hy-Tek-System-Requirements).
[^hytekdl]: [HY-TEK Sports Software, Downloads](https://hytek.active.com/downloads.html) (MEET MANAGER 8.0 for Swimming; build dates).
[^sdif]: [United States Swimming, Standard Data Interchange Format version 3](https://www.usms.org/admin/sdifv3f.txt) (28 April 1998; 162-byte fixed records).
[^convert]: [HY-TEK, Convert a Hy-Tek Export CL2 File to SDIF](https://hytek.active.com/user_guides_html/swmm8/converttosdif.htm) (Meet Manager 8 user guide).
[^ed13876]: Daktronics, OmniSport 2000, Pro Swimming and Hy-Tek Software Quick Guide (ED-13876 Rev 5, 19 August 2013).
[^omni2000]: Daktronics, OmniSport 2000 Timing Console and Pro Software Operation Manual (ED-13312).
[^dakbro]: Daktronics, Aquatics Solutions brochure (Meet Manager 5.0 over Ethernet; Workout Manager and the PC-2001).
[^dakpc]: Daktronics, PC-2001 Pace Clock System Display Manual (ED-13737), Team Manager workout download.
[^f1034]: Colorado Time Systems, Gen7 Serial Timer User Guide (F1034), Appendix: Meet Management Connectivity.
[^f902]: Colorado Time Systems, How to Import Start Lists for the Scoreboard from Hy-Tek software (F902 Rev. 1205).
[^f912]: Colorado Time Systems, Dolphin User Guide (F912 Rev. 202412).
[^f922]: Colorado Time Systems, Dolphin sheet (F922 Rev. 0607, Spanish).
[^f854]: Colorado Time Systems, DisplayLink AquaLink 1.6 and 1.7 User Guide (F854 Rev. 0404), team-score download.
[^f901]: Colorado Time Systems, Pace Clock Controller User Guide (F901 Rev. 1007, ©2007).
[^cat11]: Colorado Time Systems, Complete Timing, Scoring, Training and Display Solutions catalogue (2011).
[^cat15]: Colorado Time Systems, Complete Timing, Scoring, Training and Display Solutions catalogue (2015).
[^ctsbro]: Colorado Time Systems brochure (Rev. 08/12), quoting Charlie Hodgson of Hy-Tek.
[^ncaa]: [NCAA, Division III swimming official psych sheet, 2026](https://www.ncaa.com/_flysystem/public-s3/files/2025-26D3XSW_OfficialPsychSheet.pdf) (printed by HY-TEK's MM 8.0).
[^usas]: [USA Swimming, 2025 Speedo Junior National Championships complete results](https://www.usaswimming.org/docs/default-source/timesdocuments/meet-results/junior-nationals/lc-juniors-complete-results.pdf) (printed by HY-TEK's MEET MANAGER 8.0).
[^metro]: [Metropolitan Swimming, policy and procedures manual](https://www.gomotionapp.com/mrlsc/UserFiles/Image/QuickUpload/metro-policy-and-procedures-manual-updated-20251006_057192.pdf) (entries as a Hy-Tek or Team Unify file).
[^pns]: [Pacific Northwest Swimming, meet directors' handbook 2024-25](https://www.pns.org/pnws2/UserFiles/File/MeetDirectorToolBox/meet-director-s-handbook-2024-2025--updated-sept192024_039968.pdf).
[^uhsaa]: [Utah High School Activities Association, swimming handbook 2025-26](https://www.uhsaa.org/Publications/Handbook/SportSections/Swimming.pdf) (entries must include the Hy-Tek file).
[^arch]: Colorado Time Systems, Architectural Guidelines (facility questionnaire; console feature matrix).

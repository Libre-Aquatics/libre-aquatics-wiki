---
title: SDIF
seoTitle: SDIF swimming data format
description: >-
  SDIF is United States Swimming's Standard Data Interchange Format, the published
  fixed-record specification that lets meet results move between programs as .sd3 files.
tags:
  - Software
  - Meet management
  - Reference
---

<!--
Research notes, SDIF.

Built out from the stub in September 2026. The stub's open questions were versions 1 and 2,
whether version 3 was ever revised, how SWIMS consumes the format, the relationship to
Lenex, and which programs still read it. All but the SWIMS question are now answered; that
one is recorded below as still open.

The specification. "United States Swimming Interchange Format VERSION 3 DOCUMENT", titled
"Standard Data Interchange Format, Ver. 3.0 (official)" on its title page, dated 28 April
1998, published by United States Swimming, freely readable at usms.org/admin/sdifv3f.txt.
The full text is now held locally as
sources/reference/uss-standard-data-interchange-format-v3-0-1998.txt so that the
no-verbatim-copying check has a corpus to compare this page against; it is 2,698 lines.
Active hosts a second copy in the Hy-Tek support knowledge base. Prefer the specification
text itself over any description of it.

Record geometry, settled. The stub said "fixed 162-byte records", which is what the
specification says, but the useful statement is more precise: the format design section
states that each record is 162 bytes long and that the final pair of them are ASCII 13
followed by ASCII 10, so 160 characters carry data. That reconciles exactly with the CL2 page, which records a
CL2 line as 160 characters. Verified mechanically, see below.

Verification against a real file. A meet results file for a 2026 NCAA Division III
conference championship, written by Hy-Tek Meet Manager, was examined for this article. It
is not published and is not reproduced here; it is cited as an unhosted document. Findings,
all mechanically checked rather than read off:
  - 148,230 bytes, which is 915 x 162 with no remainder. Every record ends CR LF. This
    settles the record-length question.
  - First record A0, last record Z0, as the specification requires. Record codes present:
    A0 1, B1 1, C1 1, D0 272, D3 57, E0 35, F0 140, G0 407, Z0 1. No B2, C2, D1, D2 or J
    records, which is the modular design working as described: a results file omits the
    record types it has no use for.
  - Every field offset in the A0, D0, D3, G0 and Z0 specifications lands on a sensible
    value in this file. No offset disagreement was found between the specification and the
    file, so there is no discrepancy to flag on that front.
  - The A0 SDIF version field at 4/8, which the revision list says was added in version 3,
    reads "V3". A 2026 file is still declaring the 1998 version.
  - The A0 software version field at 64/10 reads "0.1 Alpha". That is the writing
    program's own declared version in a production file, and it is worth stating plainly
    rather than glossing.
  - Z0 declares counts per record letter. B, C, E, F and G all match the actual counts
    exactly. D does not: Z0 declares 272 where the file holds 329 D records (272 D0 plus
    57 D3), and the separate "number of different swimmers" field reads 57, which is the
    D3 count. So the writer counts only D0 as "D records" and uses D3 as its swimmer
    count. The specification does not say explicitly whether D3 counts toward the D total,
    so this is an interpretation rather than a demonstrable error, and the page says so.
    Do not upgrade this to "Hy-Tek gets it wrong" without a source.
  - Splits behave exactly as specified. All 407 G0 records are cumulative (SPLIT code C)
    at a 50-unit split distance. The internal arithmetic checks out: 10 time fields per
    record, so an event with 33 splits needs 4 records, and the file holds 44 records
    carrying a 33 total, which is 11 swims x 4. Sequence numbers 2, 3 and 4 each appear
    11 times. 16-split swims appear 16 times, which is 8 swims x 2.
  - Identifiers. All 57 D3 records carry a 14-character uppercase hexadecimal value in the
    USSNUM field at 3/14. In all 57 cases the 12-byte USS# field of the preceding D0 holds
    the first 12 characters of that same value, with the last two dropped. Every D3 in the
    file immediately follows a D0, as the specification prescribes. This is the clearest
    single finding on the page and it is verified across every swimmer in the file.
  - Stroke code H appears on 8 D0 records, with distance 1 or 3 and a "finals time" in the
    200 to 350 range. STROKE Code 012 in the specification runs 1 to 7 only and has no H.
    Read together with the board heights and the score magnitudes, these are plainly
    diving results, carried in a swimming format through an undocumented code. A web
    search for a published definition of stroke code H found none. This is therefore an
    observation from one file, and the page states it as such. Someone with more files, or
    with Hy-Tek documentation, should confirm it before it is written as settled.
  - The D3 participation flags (junior high, senior high, YMCA, college, summer league,
    Masters, disabled sports organizations, water polo, none) are blank on all 57 records,
    which fits: they are marked as required only for registration submissions to an LSC,
    and this is a results file.

Identifier history, three stages, and be careful here. The specification defines the USSNUM
construction as date of birth, then three letters of the legal first name, then the middle
initial, then four letters of the last name, with asterisks padding any part that runs
short. That is 14 characters. But the USS# field on the D0 record is 12 bytes and typed
ALPHA, not USSNUM. So the 14-character constructed identifier does not fit the record that
carries the swim, which is exactly why version 3 added the D3 record with a 14-byte USSNUM
field rather than widening D0 and breaking every offset after it. Later, USA Swimming moved
again to an opaque 14-character identifier, which is what the 2026 file shows; it also fits
D3 and is also too long for D0, and Meet Manager truncates it there. The HY3 page describes
the same two identifier generations from Hy-Tek's side and gives HY3's own registration
field as columns 69 to 82, which is 14 characters wide, so HY3 has room where SDIF v3's D0
does not. The three pages agree; keep them agreeing.

Checksums. The word "checksum" appears exactly once in the whole 2,698-line specification,
in the revision list, recording that the checksum fields were removed and their space
reserved for future use. That is the cleanest available statement that earlier SDIF
versions had checksums and version 3 does not, and it explains the otherwise odd fact that
CL2, which the HY3 and CL2 pages establish as nearly-SDIF, carries a four-column checksum.
Do not write that SDIF has a checksum.

Versions 1 and 2. No copy of either is held and none was found published. What version 3
tells us about its predecessors is indirect but real: the D3 record's stated purpose is to
carry information absent from pre-version-3 formats, and the revision lists record the
removal of an H0 record, of vendor-defined fields, of a "Transaction" field, of ANSWER Code
023, and of the checksum fields, plus the addition of the D3 record, the A0 version-number
field, the LOGICAL type, ETHNICITY Code 026, and the definition of the SD3 extension
itself. Note that last one: the file extension was defined during version 3, which explains
the stub's observation that .sd3 appears in no held vendor document from earlier. The
periodical record is the other evidence: US Swimming was pushing vendors to adopt SDIF in
December 1994, three and a half years before the version 3 document, so something was in
use before it.

swimdata.com claims the move to version 3 was driven by the change in how swimmers are
identified, and separately that the constructed identifier is not Y2K-safe (it carries a
two-digit year). The first claim is consistent with the revision lists but is that site's
characterization, not the specification's, and the page attributes it. The site does not
identify its author. It also names two extraction utilities, SDIF Master and SDIF_PRO.

Adoption trail from the periodicals, re-read in context rather than taken from the stub.
  - swimming-world/199412.txt:2117-2143. December 1994. US Swimming item explaining that
    results reach LSC Top 16 tabulators by disk or modem as vendors adopt the format, that
    it saves retyping and the mistakes retyping causes, and telling readers whose vendor
    does not support it to ask when it will. Contact given as the US Swimming MIS
    department. Predates the version 3 document.
  - swimming-world/199805.txt:1032-1036. May 1998, the month after version 3 was dated.
    Swimming World asks for times in an SDIF-compatible format or in Hy-Tek's Commlink, so
    the published standard had not displaced the proprietary route.
  - swimming-world 200009:5110, 200010:5024, 200011:4258, 200012:4446, 200101:4516. A
    Hy-Point Software advertisement for SwimMeet Manager running at least September 2000
    to January 2001, using compliance with the standard as a selling point. Hy-Point is not
    Hy-Tek; the names collide in a grep and the distinction matters.
  - swim-news/swimnewsn268.txt:176. November 2001. SwimNews launched a searchable world
    ranking database and asked for results as SDIF or Commlink data. Independent, non-US,
    and again the two formats side by side.
  - swim-news/swimnewsn271.txt:68-72 and the same advertisement in issues 268 to 275. May
    to June 2002. A meet-management program advertising that it accepts entries in
    Commlink, SDIF, WSV, Lenex and Aquabec and writes results in SDIF, Splash, WSV, Lenex
    and Aquabec, and that it works with timing equipment from Daktronics, Colorado,
    Longines, Alge and Omega. The product name is not in the OCR of the page; the repository's alge-timing
    notes identify this run as a Splash Software advertisement, and this page does not
    re-assert the identification because the page itself does not carry the name. Worth
    settling from the PDF.

Negative results, recorded so they are not repeated. Grepping the periodicals for "SDIF"
returns hits in swimming-world 196502, 196512, 198601 to 198604, 199105, 199106, 200001 and
200812, and in swim-news 240. Every one of them is OCR noise, almost all of it the words
"allows different" or "was different" run together. The genuine trail begins in December
1994. Do not re-run this search expecting an earlier mention.

Lenex, for the comparison. Created and maintained by Christian Kaufmann, XML-based,
extension .lxf. Version 1.0 in use from 1999 across European countries, 2.0 in 2004
alongside the launch of European Rankings, 3.0 in late 2008 and largely backward compatible
with 2.0. Recommended format for European Aquatics rankings; the wiki.swimrankings.net
pages state that more than 20 federations use it as their primary exchange format. The
2002 SwimNews advertisement above shows the two formats being offered side by side in the
same product, which is better evidence than a bare assertion that they coexisted.

Implementations found.
  - dmanusrex/swimlib, TypeScript, zero runtime dependencies, reads and writes SD3, HY3,
    EV3, REC and STD/ST2 and reads CL2 by relaxing its SDIF parser and switching checksum
    validation off. Round-trip is byte-identical only for files it wrote itself; third
    party files come back with normalized padding. Already cited on the CL2 and HY3 pages.
  - tdsmith/sdif, Python, Apache 2.0, dated 2023, worked from the same usms.org document.
    Its README records that Meet Manager needs only A0, B1, C1, D0 or D1, and Z0, which is
    a useful independent statement about what an implementation actually enforces versus
    what the specification allows.
  - SDIFCheck, a validation utility at winswim.com, and SDIF Master and SDIF_PRO from Swim
    Data. None examined directly; all three are named by others rather than inspected, and
    the page reflects that.
  - The sdif-forum Google group, already cited on the HY3 page, carries a thread in which
    someone generating an SD3 by hand for Meet Manager import is rejected with a
    not-an-entries-file error and eventually traces it to Excel writing Unicode with hidden
    formatting. The practical lesson, that the importer is unforgiving about byte-level
    exactness and record order, is corroborated by tdsmith's note and is worth a sentence.

SWIMS and XSDIF, partly resolved late in the pass. USA Swimming's own help page at
swims.usaswimming.org/SWIMSHelp/About_SDIF_and_XSDIF.htm no longer resolves, and
web.archive.org is not reachable from this session, so the publisher's account is out of
reach. A live substitute was found: Snake River Swimming's "Required Procedures for
ELECTRONIC Athlete Registrations via Team Unify", a three-page LSC procedure whose only
internal year is 2016, states that a club's software must be able to produce one of SDIF
version 3 (*.sd3), COM Link (*.cl2) or XSDIF (*.xml) for SWIMS, and describes the registrar
emailing a zipped SDIF file to the LSC registration chair. Two things worth keeping: this
is an LSC restating a requirement rather than USA Swimming stating it, and the document
calls CL2 "COM Link", which is the Commlink name attached to the CL2 extension. No
specification for XSDIF was found anywhere. The stub for it says only what this document
supports.

Still open, for the next pass.
  - Whether version 3 was ever revised after April 1998. Nothing found suggests it was, but
    absence of evidence is not proof; the page says no later version was found rather than
    that none exists.
  - Confirmation of stroke code H, and whether other undocumented codes are in circulation.
  - Copies of versions 1 and 2, which would turn the inferred account above into a
    documented one.
  - Whether the Z0 D-count convention is shared by writers other than Meet Manager.
-->

SDIF, the Standard Data Interchange Format, is the record layout United States Swimming
published so that swimming entries, results and registration data could move between
programs, and from meet hosts up to the governing body, without being retyped. A file is
plain text, carries the extension `.sd3`, and is built from fixed-length records that each
begin with a two-character code naming the record type.[^spec] Version 3, dated 28 April
1998, is the last version published, and it is still what current meet-management software
writes.

## Form

Every record occupies 162 bytes. The first 160 carry data, byte 161 is a carriage return
and byte 162 a line feed, so the file is a text file of fixed-width lines and a reader can
treat it either as a byte stream or line by line.[^spec] A results file written in 2026 is
148,230 bytes, which divides into 915 records with nothing left over, and every one of
those records ends in the two terminator bytes.[^file]

Fields are addressed by a start position and a length, counted from one, and the
specification writes them in that form, so the swimmer name on an individual event record
is 12/28. This page follows that convention. It is not the convention used on the
[HY3](hy3.md) page, where columns are numbered from zero, and the two should not be read
against each other without allowing for the difference.

Eleven field types are declared. CONST is a fixed literal, and the two bytes that open
every record are always CONST and case sensitive. A CODE field has to correspond exactly to
an entry in one of the tables printed at the end of the document, and case matters there
too. ALPHA holds text, left
justified, except that a field containing only digits is right justified instead. INT and
DEC are ASCII digits, right justified and blank filled, with DEC allowing a decimal point.
DATE is eight characters as MMDDYYYY, with no blanks permitted anywhere in a date that is
supplied. TIME is either blank, or minutes, seconds and hundredths in the shape
`mm:ss.ss`, or a code. A LOGICAL field accepts three things only: a capital T, a capital F,
or nothing. PHONE, USPS and USSNUM cover telephone numbers, postal state abbreviations and
swimmer registration numbers.[^spec]

Fields carry one of two levels of obligation, not a single flag. An M1 field has to carry a
non-blank value for its record to be worth anything. An M2 field is one United States
Swimming needs in order to process the record, and a blank one is supposed to raise an
exception report rather than simply pass. Space that the format does not yet use is marked
for future use and has to be left blank until it is defined.[^spec]

SDIF records carry no checksum. The word appears once in the whole specification, in its
list of revisions, which records that the checksum fields were taken out and their space
reserved.[^spec] That is the sharpest structural difference from the two Hy-Tek formats
that travel alongside it: an HY3 line ends in a two-character checksum and a
[CL2](cl2.md) line in a four-character one, and a reader is expected to verify them, while
nothing in an SDIF record verifies itself.

Only two record types are required. A file opens with an A0 and closes with a Z0, and
everything between them is optional, so a file carries the record types its purpose calls
for and omits the rest.[^spec] The 2026 results file bears that out: it holds A0, B1, C1,
D0, D3, E0, F0, G0 and Z0 records and no others, with no B2, C2, D1, D2 or J records at
all.[^file]

## The records

Sixteen record types are defined.[^spec]

| Code | Record |
|---|---|
| `A0` | File description: what the file is, who made it and with what software |
| `B1` | Meet name, address and dates |
| `B2` | Meet host contact details |
| `C1` | Team identification |
| `C2` | Team entry totals and contact |
| `D0` | An individual swim: the athlete, the event and the times |
| `D1` | Individual administrative data |
| `D2` | Individual contact details |
| `D3` | Individual information, including the newer registration number |
| `E0` | A relay entry or result |
| `F0` | A swimmer making up a relay |
| `G0` | Splits |
| `J0` | Meet qualifying times |
| `J1` | National age group times |
| `J2` | Motivational times |
| `Z0` | File terminator, with record counts |

The ordering carries meaning. The format puts the data that occurs
once ahead of the data that repeats, so one meet precedes many teams, which precede many
swimmers, which precede many swims. Records are tied together either by shared field
values or simply by the order they appear in, which is why a D0 that is not preceded by
proper team records is taken to belong to whichever team was identified last.[^spec]

## Code tables

Roughly two dozen tables sit at the back of the document and a CODE field has to match one
of them exactly. They cover the organization (1 for United States Swimming, 2 for Masters,
3 for NCAA, 7 for YMCA, 8 for the international federation, 9 for high school), the file
type (01 for meet registrations, 02 for meet results, and others for record and time
standard files), the three-letter country codes, the meet type, sex, stroke, course,
attached status, split type, region, zone, ethnicity and more.[^spec]

Two of the tables are built by rule instead of being listed out. An event age code is four characters,
the lower age limit in the first two and the upper in the last two, with `UN` standing for
no lower limit and `OV` for none at the top, so an open event reads `UNOV`. An event time
class code is two characters assembled the same way, the first marking the bottom of the
range and the second the top, drawn from the novice, B, BB, A, AA, AAA, AAAA, junior and
senior standards.[^spec]

Course codes allow either digits or letters for the same three pool types, on the stated
grounds that the letters make a file easier to read: short course metres is 1 or S, short
course yards 2 or Y, and long course metres 3 or L. A fourth value, X, marks a
disqualification, which is not a pool type at all.[^spec]

## A record read

The records below are invented but well formed. The swimmer and the club do not exist, and
the identifier is constructed rather than issued, but each line is 160 characters and every
field sits where the specification puts it, so they can be counted against the tables
above. The swimmer is the same invented one used on the [HY3](hy3.md) page, so the two sets
of examples can be compared directly.

A file description record, `A0`:

```text
A01V3      02                              Riverside Timing    2.1       Marguerite Wren     3085550142  02142026                                          NE
```

| Start/length | Field | Value |
|---|---|---|
| 1/2 | Record code | `A0` |
| 3/1 | Organization | `1` |
| 4/8 | SDIF version | `V3` |
| 12/2 | File type | `02` |
| 44/20 | Software name | `Riverside Timing` |
| 64/10 | Software version | `2.1` |
| 74/20 | Contact name | `Marguerite Wren` |
| 94/12 | Contact phone | `3085550142` |
| 106/8 | File created | `02142026` |
| 156/2 | Submitting body | `NE` |

An individual event record, `D0`, for a 500 yard freestyle swum from lane 5 of heat 3 and
won in the final:

```text
D01        Wren, Marguerite D          082692MARAWRAUSA0826199222FF 5001  9 UNOV02142026 4:38.67Y 4:36.99Y          4:34.12Y 3 5 1 4  1  120.0
```

| Start/length | Field | Value |
|---|---|---|
| 12/28 | Swimmer name | `Wren, Marguerite D` |
| 40/12 | Registration number | `082692MARAWR` |
| 52/1 | Attached | `A` |
| 53/3 | Citizenship | `USA` |
| 56/8 | Date of birth | `08261992` |
| 66/1 | Sex | `F` |
| 68/4 | Distance | `500` |
| 72/1 | Stroke | `1` |
| 77/4 | Event age range | `UNOV` |
| 81/8 | Date of swim | `02142026` |
| 89/8 | Seed time | `4:38.67` |
| 98/8 | Prelim time | `4:36.99` |
| 116/8 | Final time | `4:34.12` |
| 125/2, 127/2 | Prelim heat and lane | `3`, `5` |
| 133/3, 136/3 | Prelim and final place | `1`, `1` |
| 139/4 | Points | `20.0` |

Each of the three time fields is followed by a one-character course code, mandatory
whenever the time before it is filled, which is how a file can carry a yards seed time
against a metres final without ambiguity.[^spec]

Splits for that swim ride in a separate `G0` record, cumulative in this case, with ten time
fields and the split distance stated once:

```text
G01            Wren, Marguerite D          082692MARAWR110  50C   24.51   51.85 1:19.40 1:46.93 2:14.44 2:42.23 3:10.50 3:39.31 4:08.26 4:36.99
```

Ten time fields is the limit of one record, so a longer swim runs onto further G0 records
numbered by the sequence field at 56/1. In the 2026 file every one of the 407 splits
records is cumulative at a 50-unit split distance, and the arithmetic is exactly what the
design implies: the eleven swims carrying 33 splits each occupy four records, producing 44
records that declare a 33 total and eleven each of sequence numbers 2, 3 and 4.[^file]

## What a real file shows

The specification establishes what a file may contain. A file written nearly three decades
later shows which parts of it survived.[^file]

The version field added in version 3 still reads `V3`, so a file produced in 2026 declares
the 1998 format unchanged. The software version field beside it reads `0.1 Alpha`, which
is what the writing program puts there in ordinary production output.

The terminator record declares how many records of each letter the file holds, and those
counts can be checked. Four of them are exactly right. The count for D records is not: the
file holds 329 records beginning with D, being 272 D0 and 57 D3, and the terminator
declares 272, while the adjacent field for the number of different swimmers reads 57. The
writer is therefore counting only individual event records as D records and using the D3
total as its swimmer count. The specification does not say in terms whether a D3 counts
toward the D total, so this is best read as an interpretation of an underspecified field
rather than a defect.

The registration number is the clearest case of a 1998 format being stretched. The
specification defines the constructed identifier as a date of birth followed by three
letters of the first name, the middle initial and four letters of the surname, with
asterisks padding anything too short, which comes to fourteen characters.[^spec] The USS#
field on the D0 record is twelve bytes. That mismatch is why version 3 added the D3 record
with a fourteen-byte field of its own, rather than widening D0 and displacing every field
after it. USA Swimming has since moved to an opaque fourteen-character identifier, and the
squeeze is unchanged: in the 2026 file all 57 D3 records carry the full fourteen
characters, and in all 57 cases the D0 in front of them carries the first twelve of the
same value with the last two dropped. Hy-Tek's own HY3 gives that field fourteen columns
and so loses nothing, which is one concrete respect in which the proprietary format
outgrew the published one.

Eight individual event records in the file carry a stroke code of `H`, with a distance of 1
or 3 and a finals figure between 193 and 345. The stroke table runs from 1 to 7 and has no
`H` in it. Taken together with the board heights and the size of the numbers, these are
diving results, carried through a code the specification never defines and with the
judges' score sitting in a field meant for a time. No published definition of the code was
found. This is an observation from a single file rather than a documented extension, and it
should be confirmed against others before it is relied on.

## Versions

United States Swimming set up an ad-hoc committee to establish what was needed and draft
the design, and credits two outside contributors with shaping what came out of it: someone
representing US Masters Swimming, along with a coach who understood what high school and
college programs required. The format was meant to be
extensible, by adding records or by adding codes and fields to existing ones, and to be
usable by aquatic sports bodies beyond swimming.[^spec]

Versions 1 and 2 have not been found published, and what can be said about them comes from
version 3 describing its own changes. The D3 record exists to carry information the earlier
formats had no room for, which is the document stating plainly that earlier formats
existed.[^spec] The revision lists record the removal of an H0 record, of vendor-defined
fields, of a transaction field, of one of the code tables and of the checksum fields, and
the addition of the D3 record, the version-number field on A0, the LOGICAL type, an
ethnicity table, and the definition of the `.sd3` extension itself. That last item explains
why the extension turns up in no vendor document older than this one: it was named during
version 3 rather than before it.

Swim Data attributes the move to version 3 to the change in how swimmers were identified,
and separately points out that the constructed number carries only a two-digit year and so
is not safe across the century boundary.[^swimdata] The first of those is consistent with
what the revision lists show, but it is that site's reading rather than the specification's
own account, and the site does not name its author.

No revision later than April 1998 was found.

## Adoption

The format was in circulation well before the version 3 document. In December 1994 United
States Swimming told readers of *Swimming World* that results could reach each LSC's Top 16
tabulators on disk or by modem as more vendors adopted the format, that this removed the
retyping and the errors it introduced, and that anyone whose vendor did not yet support it
should ask when it would.[^sw94] That is three and a half years before the version 3
document is dated.

Publication did not clear the field. In May 1998, the month after version 3 was dated,
*Swimming World* was still asking for times either in an SDIF-compatible format or in
Hy-Tek's [Commlink](commlink.md), so the open standard and the proprietary route ran side
by side.[^sw98] Hy-Point Software advertised its SwimMeet Manager as fully compliant with
the standard in a run of advertisements from at least September 2000 into January
2001, which shows compliance being sold on and not simply assumed.[^hypoint]
Hy-Point is a different company from Hy-Tek, and the two are easily confused.

The reach was not only American. SwimNews, published in Canada, launched a searchable world
ranking database in November 2001 and asked for results as SDIF or Commlink data.[^sn268]
By the middle of 2002 a meet-management program was advertising in the same magazine that
it read entries in Commlink, SDIF, WSV, Lenex and Aquabec and wrote results in most of the
same set, which places SDIF as one interchange format among several rather than the only
one.[^sn271]

Results were never the whole of it. The format was designed to carry registration data up
to the governing body as well, and it still does: an LSC procedure for electronic athlete
registration names the three formats a club's software has to be able to produce for USA
Swimming's SWIMS database as SDIF version 3, Hy-Tek's CL2, and XSDIF, an XML form carried
in `.xml` files, and has the club registrar email a zipped SDIF file to the registration
chair.[^snake] That document calls CL2 by the name COM Link, which is the same name Hy-Tek
gave its earlier diskette exchange.

It is still in use. The file examined for this page was written in 2026, twenty-eight years
after the specification it conforms to.[^file]

## Where it sits

SDIF is the published standard that Hy-Tek's formats are measured against rather than a
format Hy-Tek owns. [CL2](cl2.md) is close to it and not the same: a CL2 line is 160
characters, uses SDIF's record codes, and ends in a checksum that SDIF does not have, which
is why converting between them takes a utility and not a rename. Meet Manager provides
that utility, converting a CL2 export to SDIF and naming the output after the database and
a sequence number.[^convert] [HY3](hy3.md), the newer of the pair Hy-Tek ships, has no such
sanctioned bridge.

Commlink was the diskette-era route that did the same job for Hy-Tek alone, and the
periodical record above shows the two treated as alternatives for years rather than one
replacing the other.

## Compared with Lenex

[Lenex](lenex.md) is the European equivalent and answers the same need in a different
technical idiom.
It is XML rather than fixed-width, is written as a `.lef` file and usually shipped zipped as
`.lxf`, and is created and maintained by Christian Kaufmann, not by a federation. Version
1.0 was in use across European countries from 1999, version 2.0 arrived in 2004 alongside
the launch of European Rankings, and version 3.0 followed in late 2008 while staying close
to backward compatible with its predecessor. It is the recommended format for European
Aquatics rankings and is described as the primary exchange format of more than twenty
federations.[^lenex]

The two differ in date and in approach, though not in ambition. SDIF fixed its record
geometry in the diskette era and has not moved since 1998. Lenex began a year after SDIF's
last revision and chose a self-describing format. It has had three version numbers, and
since 2008 its documentation has been extended many times while the version number stayed
at 3.0. Where SDIF has to add a record type to carry a longer identifier, an XML format adds
an attribute. SDIF puts a swim on one line; Lenex spreads it across a tree joined by
numeric identifiers, as the [Lenex](lenex.md) page's worked example shows.

## Reading and writing

Implementations exist in several languages, and what they enforce is a useful check on what
the specification permits. swimlib, in TypeScript, reads and writes SD3 along with HY3 and
several other formats, and reads CL2 by running its SDIF parser with the mandatory-field
checks relaxed and checksum validation switched off, which is about as precise a statement
of the closeness of the two formats as anyone has made.[^swimlib] A Python implementation
published in 2023 worked from the same usms.org document and records that Meet Manager in
practice needs only the A0, B1, C1, D0 or D1, and Z0 records, which is a narrower set than
the specification allows for.[^tdsmith]

Importers are unforgiving in practice. A thread on the sdif-forum group follows someone
generating an entries file by hand whose file was rejected outright, and the cause turned
out to be the spreadsheet writing Unicode with hidden formatting in place of plain
text.[^forum] Byte-level exactness and record order both matter, which is the practical
consequence of a format that has no checksum to tell a reader where a file went wrong.
Validation utilities exist to fill that gap, including SDIFCheck and the SDIF Master and
SDIF_PRO extraction tools.[^sdifcheck][^swimdata]

## Gaps

SWIMS accepts the format and an XML variant beside it, but USA Swimming's own documentation
of [XSDIF](xsdif.md) is no longer reachable, so what is said above rests on an LSC's
procedure document rather than on the publisher. No specification for the XML form has been
found at all.

Versions 1 and 2 are known only through version 3's account of what it changed. Whether the
stroke code used for diving is a documented vendor extension or a local convention is
unresolved. Whether writers other than Meet Manager count D3 records the same way in the
terminator is untested, because only one file was available.

## See also

- [HY3](hy3.md) and [CL2](cl2.md): Hy-Tek's own formats, one of them nearly this one
- [XSDIF](xsdif.md): the XML form SWIMS accepts beside it
- [Lenex](lenex.md): the European exchange format, XML where this one is fixed-width
- [Commlink](commlink.md): the proprietary route that ran alongside it for years
- [swimlib](swimlib.md) and [SDIFCheck](sdifcheck.md): software that reads and validates it
- [SwimMeet Manager](swimmeet-manager.md): a competitor that advertised compliance with it
- [Meet Manager](hy-tek-meet-manager.md): the program that writes the files examined here
- [Software](index.md): the software reference

## References

[^spec]: [USA Swimming, Standard Data Interchange Format version 3](https://www.usms.org/admin/sdifv3f.txt) (28 April 1998).
[^file]: Meet results file for a 2026 NCAA Division III conference championship, written by Hy-Tek Meet Manager (unpublished; examined for this article).
[^swimdata]: [Swim Data, SDIF](http://www.swimdata.com/SDIF.shtml) (the identifier change behind version 3, and the SDIF Master and SDIF_PRO utilities).
[^sw94]: *Swimming World*, December 1994 (United States Swimming on vendor adoption and Top 16 tabulation).
[^sw98]: *Swimming World*, May 1998 (times accepted in an SDIF-compatible format or in Commlink).
[^hypoint]: *Swimming World*, September 2000 to January 2001 (Hy-Point Software advertisements for SwimMeet Manager).
[^sn268]: *SwimNews*, November 2001 (world ranking database launch; results wanted as SDIF or Commlink).
[^sn271]: *SwimNews*, May–June 2002 (meet-management advertisement listing Commlink, SDIF, WSV, Lenex and Aquabec).
[^lenex]: [Swimrankings, Lenex](https://wiki.swimrankings.net/index.php/swimrankings:Lenex) (authorship, version history and adoption).
[^swimlib]: [dmanusrex, swimlib](https://github.com/dmanusrex/swimlib) (TypeScript; reads and writes SD3, and reads CL2 through a relaxed SDIF parser).
[^tdsmith]: [tdsmith, sdif](https://github.com/tdsmith/sdif) (Python, 2023; the records Meet Manager requires in practice).
[^forum]: [sdif-forum](https://groups.google.com/g/sdif-forum/c/IimMpaspO70) (an entries file rejected over text encoding).
[^sdifcheck]: [WinSwim, SDIFCheck](http://www.winswim.com/sdifchk.htm) (validation utility).
[^snake]: [Snake River Swimming, Required Procedures for Electronic Athlete Registrations via Team Unify](https://www.gomotionapp.com/wzsrslsc/UserFiles/File/Registration%20Page/Registration%20Procedures%20Using%20Team%20Unify.pdf) (2016; the formats SWIMS accepts).
[^convert]: [HY-TEK, Convert a Hy-Tek Export CL2 File to SDIF](https://hytek.active.com/user_guides_html/swmm8/converttosdif.htm) (Meet Manager 8 user guide).

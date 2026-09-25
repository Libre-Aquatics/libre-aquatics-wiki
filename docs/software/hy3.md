---
title: HY3 file format
schemaType: none
description: >-
  HY3 is Hy-Tek's proprietary fixed-width text format for swimming entries and results,
  never documented by the company but reverse-engineered and published in 2010.
tags:
  - Software
  - Meet management
  - Reference
---

<!--
Research notes, HY3. Substantially corrected in September 2026.

What the first version of this page got wrong, recorded because the error is instructive.
It said the per-line checksum was undocumented and that third-party tools therefore read
HY3 and do not write it. Both statements were false. The checksum was reverse-engineered
and published on Usenet in October 2010, and several tools write valid HY3. The mistake
came from reading only the surface of a forum thread in which people say the checksum is
"the big unknown" and not following the thread forward in time to the post where it stops
being unknown. Check whether a question was later answered before recording it as open.

Nothing about this format is in sources/. A corpus-wide search for .hy3, .hyv and .cl2
returns only OCR noise in result tables. This page is built from public files and code.

Verified directly on this pass, not taken from any secondary account:
  - Real Meet Manager exports were downloaded from the sample set in the hyparse
    repository, data/hy3/, and examined. Every line in every file is exactly 130
    characters: 128 of content plus a 2-character checksum.
  - The checksum algorithm below was implemented from jwh's 2010 description and run over
    two files: a 2010 export written by MM3 3.0Dq (357 lines) and a 2025 NCAA Division I
    women's championship export written by MM5 8.0Fd (4,260 lines). All 4,617 lines match,
    none fail. So the algorithm is unchanged across fifteen years and two Meet Manager
    generations.
  - Record codes actually present were counted. The 2010 file has A1, B1, B2, C1, D1, E1,
    E2, F1, F2, F3 and G1. The 2025 file adds H1. In both, E1 and E2 appear in exactly
    equal numbers (97 and 97; 1,097 and 1,097), as do F1, F2 and F3, which is good
    structural evidence that entry and result records are written in pairs.

The algorithm, from jwh, rec.sport.swimming, 28 October 2010, the original publication:
take the 128 content characters; sum their character codes, counting those at odd 0-based
positions twice; integer-divide by 21; add 205; write the last two decimal digits in
reverse order, ones digit first. jwh's worked example gives an internal value of 604 and a
checksum of "40", which the implementation here reproduces.

A numbering trap worth stating. jwh counts columns from 1 and therefore writes that the
ODD columns are summed once and the EVEN columns twice. Every code implementation counts
from 0 and says the reverse. Same algorithm, opposite words, so always state the base. jwh
also writes "columns 1-129" and "columns 130-131" for a 130-character line, which is an
off-by-one in the primary source itself; 128 content characters is what actually works, as
the verification above shows.

Why the checksum matters more than it looks. Hy-Tek enforces it on import, so a line whose
checksum is wrong is rejected. That is what made the 2010 publication the hinge of this
whole story: before it, outsiders could read HY3 but could not produce a file Hy-Tek would
accept; after it, they could.

It is a weak check. Integer division by 21 throws away information before the result is
reduced to two digits, so many different lines share a checksum. It catches casual
corruption and nothing more. Do not describe it as a security or integrity measure.

Who did the work, which is a datable chain and the best narrative here:
  Mike Walsh, working on a WordPress swim-team plugin, put the problem publicly in July
  2010 and set up the sdif-forum Google Group in September 2010 to pool format knowledge.
  Joe Hance, posting as jwh, published both the HY3 and the CL2 algorithms in October 2010.
  Troy DeLano ported the checksum the following month, crediting Joe, and went on
  to write the Visio record-layout documents in 2012 and a consolidated 15-page format
  document in 2013. Note the language: an earlier draft of this page said Java, which
  nothing found supports. The one contemporaneous attribution, a comment in Walsh's
  WordPress plugin, calls it "Troy Delano's example PHP code". Treat PHP as the attested
  language and Java as unsourced. Walsh wrote the relay-record document.
  That documentation was nearly lost: the Dropbox link died and Walsh could not find his
  backup when it was asked for in 2021. It survives because Jonathan Golliher put the PDFs
  in the hyparse repository, at github.com/jgolliher/hyparse/tree/main/resources, where
  their PDF metadata still carries the authors' names. Verified present on this pass.

Readers and writers, which the first version of this page conflated. The popular Python
and R libraries read only: SwimComm/hytek-parser explicitly raises NotImplementedError for
checksum validation, and hyparse and SwimmeR do not write. Writing is real but less
prominent: Walsh's PHP plugin exported rosters and meet entries that Hy-Tek Team Manager
imported, and a TypeScript library, swimlib, computes checksums and claims a byte-identical
round trip for files it wrote itself, with only semantic equivalence for third-party files. Note two caveats. Walsh reported in July 2012 that his files went into Team
Manager but that Meet Manager initially refused them, which took further work on required
B1 and B2 records and on matching meet dates, so "Hy-Tek accepts it" was true of one
program before the other. And swimlib was created eight days before this page was written,
so it is new and should not be presented as established practice.

Gaps that remain, all real:
  - B3, a meet-contact record, is named in the community documentation but no source gives
    its field layout.
  - E2, the individual result record and arguably the most important one in a results
    file, has no field table in DeLano's document. Everything known about it comes from
    parser source.
  - H2 appears only in hytek-parser and in no written spec.
  - Offsets disagree between implementations, and the consequences are not theoretical:
    hytek-parser carries a bug-fix comment about having previously read the team LSC code
    from the wrong columns and corrupting a fifth of the values.

Still to research: the CL2 checksum against a real CL2 file, which could not be done here
because no public CL2 sample was found; whether Hy-Tek has ever acknowledged the format
publicly; and what the ten unidentified fields in an HYV event line carry.
-->

HY3 is the file format Hy-Tek's [Meet Manager](hy-tek-meet-manager.md) and
[Team Manager](hy-tek-team-manager.md) use to move swimming entries and results between
themselves and to hand them to other software. Hy-Tek has never published a specification
for it. What is known about it was worked out by swimming volunteers between 2010 and 2013
and has been public ever since.

## Form

An HY3 file is plain text, and every line is exactly 130 characters: 128 of content
followed by a two-character checksum. The first two characters identify the record type,
and the fields that follow sit at fixed column positions, so the file opens readably in any
text editor.

The record types in a results file are consistent. A check of two real exports, one written
in 2010 and one in 2025, found the codes below, with `E1` and `E2` appearing in exactly
matching numbers, as did `F1`, `F2` and `F3`, so entries and their results are written in
pairs. Part of the vocabulary is borrowed from [SDIF](sdif.md), the published standard, and
part is Hy-Tek's own.[^delano][^parser]

| Code | Carries |
|---|---|
| `A1` | One per file: what kind of export it is, the software and version that wrote it, the date, and who the copy is licensed to |
| `B1`, `B2` | The meet: name, facility, start, end and age-up dates, course, elevation |
| `C1` | A team: code, full and short names, and its regional body |
| `D1` | A swimmer: names, registration identifier, date of birth, age |
| `E1`, `E2` | An individual entry and its result |
| `F1`, `F2`, `F3` | A relay entry, its result, and the swimmers who made up the team |
| `G1` | Splits |
| `H1` | A disqualification |

## Two records read

Below are two well-formed records. The swimmer and the club are invented, but the lines are
real in every other respect: each is 130 characters and carries the checksum the algorithm
computes, so a reader can verify them.

A team record, `C1`:

```text
C1RVRS Riverside Swim Club           Riverside       NE                                                                         75
```

| Columns | Field | Value |
|---|---|---|
| 0–1 | Record code | `C1` |
| 2–6 | Team code | `RVRS` |
| 7–36 | Full name | `Riverside Swim Club` |
| 37–52 | Short name | `Riverside` |
| 53–54 | Regional body | `NE` |
| 128–129 | Checksum | `75` |

A swimmer record, `D1`:

```text
D1F    7Wren                Marguerite          Daisy               A082692MARAWREN    708261992 33                             35
```

| Columns | Field | Value |
|---|---|---|
| 2 | Sex | `F` |
| 3–7 | Swimmer number | `7` |
| 8–27 | Last name | `Wren` |
| 28–47 | First name | `Marguerite` |
| 48–67 | Preferred name | `Daisy` |
| 68 | Middle initial | `A` |
| 69–82 | Registration identifier | `082692MARAWREN` |
| 83–87 | Team's own swimmer number | `7` |
| 88–95 | Date of birth | `08261992` |
| 96–98 | Age | `33` |
| 128–129 | Checksum | `35` |

Two generations of registration identifier turn up in this field, and which one a file
carries dates it. The older is USA Swimming's legacy number, built rather than assigned:
six digits of date of birth, three letters of the given name, the middle initial, and four
letters of the surname, with an asterisk padding any part too short to fill its
run.[^sdif] In the 2010 sample file that construction accounts for 44 of the 46 swimmer
records. The newer is opaque, a fourteen-character hexadecimal string that encodes nothing
a reader can decompose; it fills 359 of the 437 swimmer records in the 2025 sample, where
the built form appears not once and a further 78 records leave the field empty
altogether.[^hyparse]

The privacy consequence belongs to the older form and is narrowing rather than settled. Where
a file uses the built identifier, an HY3 carries more about a swimmer than the published
results do: a results PDF gives a name and a time, while the file behind it gives a date of
birth, and at an age-group meet most of those entrants are children. Meet hosts pass these
files around by email as a matter of routine. The opaque identifier removes the derivation
but not the date of birth, which is still present in its own field on most records.

## The checksum on that record

Taking the team record above, the 128 content characters weight out to 9,494. Dividing by
21 and discarding the remainder gives 452; adding 205 gives 657; and the last two digits
written backwards give `75`, which is what sits in columns 128 and 129.

## Where it sits

Hy-Tek writes HY3 alongside its older [CL2](cl2.md), not in place of it. Every results
export is a zip carrying both, and the company pins the changeover to a program version
instead of a year: Team Manager releases before 4.0G read the CL2, and 4.0G and
later read the HY3, which carries what the older format cannot, including results by
division, semi-finals and swim-offs.[^exporttm] The event list is paired the same way, as
[HYV](hyv.md) and the newer [EV3](ev3.md), on the same 4.0G boundary.[^eventtm]

The format is not confined to the desktop programs either. An entry file built by Active's
current web product is a zip containing an HY3, so this is the live interchange and not a
survival.[^entryfile]

## The checksum

The two characters at the end of each line are a check digit, and Hy-Tek enforces them: a
line whose checksum is wrong will not import.[^delano] For most of the format's life that
made HY3 effectively write-protected against outsiders, who could read a file perfectly
well but could not produce one the company's software would take.

That changed on 28 October 2010, when a poster signing as jwh published both the HY3 and
the CL2 algorithms to the Usenet group rec.sport.swimming.[^jwh] The HY3 calculation takes
the 128 content characters, sums their character codes while counting those in alternating
positions twice, divides by 21 and discards the remainder, adds 205, and writes the last
two digits of the result backwards, ones digit first.

The description holds. Implemented from that post and run over the two exports mentioned
above, it reproduces the checksum on all 4,617 lines, with none failing, so the calculation
has been unchanged across fifteen years and two generations of Meet Manager.

It is a weak check. Dividing by 21 and keeping two digits discards
most of the information in the sum, so many different lines produce the same value. It will
catch a corrupted transfer and little else.

Two details trip people up. The original post counts columns from one and so describes the
weighting the opposite way round from every later implementation, which counts from zero;
and it gives the content as 129 characters where 128 is what works.[^jwh]

## Who worked it out

The format was documented by a handful of volunteers in a burst between 2010 and 2013. Mike
Walsh, writing a swim-team plugin for WordPress, put the problem publicly in mid-2010 and
started a Google group that September to pool what people knew. Joe Hance published the
checksums a month later. Troy DeLano ported the calculation, in PHP as far as the surviving
attribution goes, then produced a set of
record-layout diagrams in 2012 and a consolidated format document in 2013; Walsh wrote the
one covering relay records.[^jwh][^resources]

That documentation nearly disappeared. The link it had been shared from stopped working,
and when someone asked for it again in 2021 Walsh could not find his own copy. It survives
because the PDFs were later placed in a public code repository, where their internal
metadata still records who wrote them and when.[^resources]

## Reading and writing

The best-known libraries read HY3 and stop there. One Python parser
declines to validate checksums at all, raising an error that says the feature is not
implemented; a second Python project and an R package also read
only.[^parser][^hyparse][^swimmer]

Writing is possible and has been done. Walsh's plugin exported rosters and meet entries
that Hy-Tek's Team Manager imported, and a TypeScript library now computes checksums as
part of building a file.[^walsh][^swimlib] The path was not smooth: in 2012 Walsh reported
that Team Manager accepted his files while Meet Manager refused them, which took further
work on records the meet program required and on making the meet dates agree.[^forum]

So the common belief that Hy-Tek files cannot be generated outside Hy-Tek is wrong, though
it is easy to see where it comes from: the three best-known tools are all read-only.

## Gaps

The format is not fully known even now. One record type is named in the community
documentation with no field layout ever published; another appears in a parser's source and
in no written description at all. The individual result record, which carries the times in
a results file, has no field table in the main community document, so everything known
about it comes from reading code.[^delano][^parser]

Offsets also disagree between implementations, with real consequences: one parser carries a
note about having previously read a team's regional code from the wrong columns, corrupting
about a fifth of the values before the error was found.[^parser]

## Conversion

Hy-Tek supplies one official way out, and it does not apply to this format. Meet Manager
will convert the [CL2](cl2.md) half of an export to SDIF, writing an `.sd3` file that any
program reading the published standard can take.[^convert] Nothing documents an equivalent
conversion from HY3.

## See also

- [CL2](cl2.md): the older Hy-Tek format shipped in the same export
- [HYV](hyv.md) and [EV3](ev3.md): the event-list exports, shipped as a pair
- [SDIF](sdif.md): the published standard, and the format Hy-Tek will convert to
- [swimlib](swimlib.md): a current library that reads and writes this format
- [Meet Manager](hy-tek-meet-manager.md) and [Team Manager](hy-tek-team-manager.md): the
  programs that write it
- [Software](index.md): the software reference

## References

[^jwh]: [jwh, HY-TEK CL2 and HY3 checksum algorithms](https://rec.sport.swimming.narkive.com/y9WjLwDk/hy-tek-cl2-and-hy3-checksum-algorithms), rec.sport.swimming, 28 October 2010.
[^delano]: [Troy DeLano and Mike Walsh, Hy-Tek file format documents](https://github.com/jgolliher/hyparse/tree/main/resources) (2012–2013; preserved in the hyparse repository after the original link lapsed).
[^resources]: [hyparse, resources directory](https://github.com/jgolliher/hyparse/tree/main/resources) (the recovered format PDFs, with their authorship metadata).
[^entryfile]: [ACTIVE, Swim Manager: creating a meet entry file](https://activenetwork.my.salesforce-sites.com/hytekswimming/articles/en_US/Article/Creating-Meet-Entry-File) (the entry file is a zip containing an HY3).
[^parser]: [SwimComm, hytek-parser](https://github.com/SwimComm/hytek-parser) (Python reader; record codes, value tables, and the unimplemented checksum validation).
[^hyparse]: [jgolliher, hyparse](https://github.com/jgolliher/hyparse) (Python reader, and the source of the sample exports examined here).
[^sdif]: [USA Swimming, Swimming Data Interchange Format version 3](https://www.usms.org/admin/sdifv3f.txt) (28 April 1998), USSNUM field construction.
[^swimmer]: [SwimmeR, hy3_parse](https://rdrr.io/cran/SwimmeR/man/hy3_parse.html) (R package reading HY3 results).
[^walsh]: [Michael Walsh, wp-SwimTeam](https://github.com/wp-plugins/wp-swimteam) (PHP; exports rosters and meet entries as HY3, and implements the checksum).
[^swimlib]: [dmanusrex, swimlib](https://github.com/dmanusrex/swimlib) (TypeScript; reads and writes HY3, created September 2026).
[^forum]: [sdif-forum](https://groups.google.com/g/sdif-forum) (the Google group founded in 2010 to pool format knowledge).
[^exporttm]: [HY-TEK, Export results for TEAM MANAGER or SWIMS](https://hytek.active.com/user_guides_html/swmm8/exportresultstotm.htm) (Meet Manager 8 user guide; the CL2 and HY3 pair and the Team Manager 4.0G cutover).
[^eventtm]: [HY-TEK, Export events for TEAM MANAGER](https://hytek.active.com/user_guides_html/swmm8/exporteventfortm.htm) (Meet Manager 8 user guide; HYV and EV3 paired, and what EV3 adds).
[^convert]: [HY-TEK, Convert a Hy-Tek Export CL2 File to SDIF](https://hytek.active.com/user_guides_html/swmm8/converttosdif.htm) (Meet Manager 8 user guide).

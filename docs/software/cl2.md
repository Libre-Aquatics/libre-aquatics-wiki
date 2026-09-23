---
title: CL2 file format
description: >-
  CL2 is the older of Hy-Tek's two export formats, carrying team rosters, entries and
  results, and the one Meet Manager will convert to the published SDIF standard.
tags:
  - Software
  - Meet management
  - Reference
---

<!--
Research notes, CL2.

Written with the HY3 page after the Meet Manager pass. The same caveat applies and is worth
repeating: a corpus-wide search of sources/ for .cl2 returns no genuine hit, only OCR noise
in periodical result tables where a team code runs into a time. Nothing here comes from the
held collection.

The lineage is settled by the vendor rather than inferred. Hy-Tek's Meet Manager 8 user
guide, in the page documenting the conversion utility, calls CL2 the old format contained in
a Hy-Tek export zip alongside the newer .hy3. That is Hy-Tek describing its own formats, so
it is the best statement available on which came first, and it is why this page says older
rather than legacy or obsolete: the vendor still ships it in every export.

The conversion is the most useful concrete thing on the page and it is fully documented by
Hy-Tek. File / Export / Convert a HY-TEK CL2 Export File to SDIF, producing a file named on
the pattern "CL2 Converted to SD3<database>-<nnn>.SD3". Note the output naming embeds the
database name and a sequence number. Note also that the conversion exists for CL2 and not,
as far as anything read, for HY3, which is a small but real asymmetry: the older format is
the one with a sanctioned bridge to the open standard.

What CL2 carries is stated slightly differently by different sources. Hy-Tek's guide frames
it as an export a third-party product can import. The community account describes it as team
roster and entry data that can also include results, moving between Team Manager and Meet
Manager, chiefly before a meet for entries and sometimes after one to bring results back.
Those are compatible, and the body follows the community account for content and the vendor
for status, saying which is which.

A relationship not to overstate. CL2 is close to SDIF but not the same, which is exactly why
a conversion utility has to exist, and third-party utilities to do the same job have
circulated. Do not write that CL2 is SDIF, and do not repeat the claim on
community.swimstandards.com that .hy3 and .sd3 both simply follow the SDIF standard; the
reverse-engineering accounts are more careful than that. Mike Walsh's formulation in 2011,
that the CL2 is very similar to but not exactly an SDIF file, is the one to follow. A
modern implementation operationalises it: swimlib parses CL2 by running its SDIF parser
with mandatory-field checks relaxed and checksums switched off, which is as precise a
statement of the closeness as anyone has made.

Structure, added in September 2026. A CL2 line is 160 characters, against HY3's 130, and
its checksum occupies the last four columns rather than the last two. The record codes are
SDIF's, A0 file description, B1 and B2 meet, C1 and C2 team, D0 for an individual swim, E0
and F0 for relays, Z0 to terminate, where HY3 reuses a few of the same letters for records
of its own. So the two formats are not variants of one another; they are a nearly-SDIF file
and a Hy-Tek file that happen to travel together.

The checksum, published but not verified here. The same 2010 Usenet post that gave the HY3
algorithm gave this one, and it is a different calculation: sum the character codes of the
first 156 columns with no positional weighting, integer-divide by 19, add 211, take the
last two digits reversed, and prefix two characters, NN when the line begins D0 and a space
followed by N otherwise. The HY3 algorithm was checked against real files on this pass and
holds; this one could not be, because no public CL2 sample was found. Treat it as published
and unconfirmed. Note also that a later poster reported the D0 prefix rule is incomplete,
holding only in results files, with entries files using the space-N form and some results
files carrying YN, so the rule as published is known to be wrong in at least one case.

The CL2 example on this page, September 2026. jwh's 2010 post printed a real A0 header
record, but the news client wrapped it at about 70 columns and the wrap points ate their
spaces. Reconstructing it is possible because the post also states the intermediate sum of
the first 156 columns as 7861: restore the line to 160 characters and the sum comes to 7861
whatever way the ten missing spaces are distributed, since spaces all carry the same
character code. Running the published algorithm on it then yields " N42", the checksum the
post prints. So the arithmetic is confirmed and the exact internal padding is not, which is
what the body says. Note this is weaker than the HY3 verification, which ran against 4,617
lines of genuine Meet Manager output; here the only test available is the one its author
supplied.

Still to research: the record layout, which is undocumented in the same way HY3's is; whether
CL2 carries the same per-line checksum that makes HY3 hard to write, which is likely given
the shared heritage but is nowhere stated in what was read; when Meet Manager began shipping
HY3 beside it; whether Hy-Tek has ever announced a date for dropping CL2; and which
third-party converters exist and whether any are maintained.
-->

CL2 is the older of the two file formats Hy-Tek ships in an export from
[Meet Manager](hy-tek-meet-manager.md). It carries a team's roster and its entries, and
sometimes the results of a meet as well, and it is the format Hy-Tek provides a documented
route out of.

## What it carries

A CL2 file moves roster and entry data between [Team Manager](hy-tek-team-manager.md) and
Meet Manager: a club's swimmers and the events they are entered in before a competition,
and in the other direction the results afterwards.[^swimstd] That is the same job
[Commlink](commlink.md) did on a diskette in the 1990s, done as a file.

Like [HY3](hy3.md) it is proprietary to Hy-Tek and has no specification the company has
published, though volunteers worked out much of it. A CL2 line runs to 160 characters
against HY3's 130, its checksum occupies four columns where HY3 uses two, and it borrows
its record codes from [SDIF](sdif.md) instead of inventing them: a file description, meet
and team records, one record per individual swim, relay records and a
terminator.[^jwh][^swimstd]

That is why the two formats in a single Hy-Tek export are not two dialects of one thing.
One is a nearly-SDIF file and the other is Hy-Tek's own. A modern parser handles CL2 by
reading it with an SDIF parser held to looser rules, which is about as exact as the
relationship can be put.[^swimlib]

The checksum is a different calculation from HY3's, published in the same 2010 post that
cracked that one.[^jwh]

## Older, but not retired

Hy-Tek's own user guide is what establishes the order of the two formats. Describing the
contents of a Hy-Tek export archive, it calls the CL2 the old format and the `.hy3` the
newer one.[^convert] Both are still written: every export contains both, so a program that
reads only CL2 has not been cut off.

The changeover is pinned to a program version rather than a date. Hy-Tek states that the
CL2 is the file Team Manager releases before 4.0G will use and the HY3 the one 4.0G and
later will take, and that the HY3 carries things the CL2 cannot, among them results by
division, semi-finals and swim-offs.[^exporttm] One filter on the export screen gives the
asymmetry away: an option to export semi-final results only applies to the CL2, because the
HY3 always carries every round regardless.[^exporttm]

## A record read

The post that published the checksum also printed a CL2 header record, the `A0` that opens
a file and describes it. It carries no personal data, only the vendor's own details, which
makes it the right example to reproduce:[^jwh]

```text
A01V3      02Meet Results                  Hy-Tek, Ltd         WMM 3.0Cl Hy-Tek, Ltd         866-456-511112052009                                    MM40    N42
```

Reading it: the file is a version 3 export of meet results, written by a Hy-Tek program
identifying itself as WMM 3.0Cl and dated 5 December 2009. SDIF writes dates as MMDDYYYY,
so the `12052009` in the record is December, not May.[^sdifspec] The name and telephone
number alongside it are SDIF's contact fields, identifying whoever supplied the data rather
than whoever the copy is licensed to. The last four characters,
`" N42"`, are the checksum.

One caveat about that line. The newsreader it was posted through wrapped it across three
lines, so where exactly the runs of spaces fell inside it cannot be recovered. What is
reproduced above restores the length to 160 and puts the missing spaces back at the wrap
points. The internal padding may not be where Hy-Tek put it, and because every space has
the same character code, the checksum cannot tell the difference.

The two formats are hard to tell apart by their contents, since both are plain text full
of names and times, but the line length gives them away immediately.

## Checking the arithmetic

The published algorithm can be tested on that line, and it holds. Summing the character
codes of the first 156 columns, without the positional weighting HY3 applies, gives 7,861,
which is the figure the original post states. Dividing by 19 and discarding the remainder
gives 413; adding 211 gives 624; the last two digits written backwards give `42`; and the
two-character prefix, a space and an `N` for any record not beginning `D0`, completes
`" N42"`.[^jwh]

That is a weaker result than the one on the [HY3](hy3.md) page and the difference is worth
stating. The HY3 algorithm was run against 4,617 lines of real Meet Manager output and
reproduced every checksum. This one has been checked only against the worked example its
own author supplied, because no CL2 file could be found in public to test it on. The
arithmetic is internally consistent; whether Hy-Tek's software actually computes it this way
remains unconfirmed here.

One known gap in the published rule: a later poster reported that the `NN` prefix applies to
`D0` records only in results files, that entry files use the space-and-`N` form throughout,
and that some results files carry `YN` instead. So the prefix rule as published is known to
be incomplete.[^jwh]

## Conversion to SDIF

Meet Manager will convert a CL2 to the published [SDIF](sdif.md) standard, under File,
Export, and a menu item naming the conversion directly. The output is an `.sd3` file named
on a fixed pattern that embeds the database name and a sequence number.[^convert]

That utility is the only official bridge from Hy-Tek's formats to the open one, and which
of the two it serves is worth noticing. It converts the older CL2. Nothing read here
documents the same conversion from the newer HY3, so the format with a way out is the one
Hy-Tek itself calls old.

## See also

- [HY3](hy3.md): the newer Hy-Tek format shipped in the same export
- [SDIF](sdif.md): the published standard the conversion targets
- [swimlib](swimlib.md): the library that reads this format as relaxed SDIF
- [Commlink](commlink.md): the diskette-era predecessor of the same exchange
- [Meet Manager](hy-tek-meet-manager.md) and [Team Manager](hy-tek-team-manager.md): the
  programs that write it
- [Software](index.md): the software reference

## References

[^jwh]: [jwh, HY-TEK CL2 and HY3 checksum algorithms](https://rec.sport.swimming.narkive.com/y9WjLwDk/hy-tek-cl2-and-hy3-checksum-algorithms), rec.sport.swimming, 28 October 2010.
[^sdifspec]: [USA Swimming, Swimming Data Interchange Format version 3](https://www.usms.org/admin/sdifv3f.txt) (28 April 1998), DATE fields as MMDDYYYY.
[^swimlib]: [dmanusrex, swimlib](https://github.com/dmanusrex/swimlib) (reads CL2 through a relaxed SDIF parser).
[^swimstd]: [Swim Community, Understanding swimming file formats](https://community.swimstandards.com/topic/94/understanding-swimming-file-formats-sdif-sd3-hy3-and-cl2) (community discussion; roster and entry content, proprietary status).
[^exporttm]: [HY-TEK, Export results for TEAM MANAGER or SWIMS](https://hytek.active.com/user_guides_html/swmm8/exportresultstotm.htm) (Meet Manager 8 user guide; the CL2 and HY3 pair and the Team Manager 4.0G cutover).
[^convert]: [HY-TEK, Convert a Hy-Tek Export CL2 File to SDIF](https://hytek.active.com/user_guides_html/swmm8/converttosdif.htm) (Meet Manager 8 user guide).

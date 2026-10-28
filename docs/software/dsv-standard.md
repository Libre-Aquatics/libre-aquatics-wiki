---
title: DSV-Standard
schemaType: none
description: >-
  The DSV-Standard is the German Swimming Federation's plain-text format for meet definitions,
  entries and results, begun in 1989 in West German regional swimming and now at Format 8.
updated: 2026-10-28
tags:
  - Software
  - Meet management
  - Reference
---

<!--
Research notes, DSV-Standard. Stub created while building out lenex.md; built out 2026-10-28.

Held and read (sources/reference/dsv/, filed 2026-10-28, all German):
  - dsv-standard-format-8-rev-2026-03-14: Format 8, document dated 14 March 2026, in force
    1 August 2026; Format 7 still accepted to 31 December 2026, Format 8 alone from 1 January
    2027. 52 pp., read in full. From dsv.de (download-file, file_id=10922).
  - dsv-standard-format-7-rev-2022-08-31: Format 7, 31 August 2022, in force 1 January 2023;
    Format 6 accepted to 31 July 2023, Format 7 alone from 1 August 2023. A typo-fix revision
    on 15 June 2023. Read as a full line diff against Format 8. dsv.de file_id=1258.
  - dsv-standard-format-6-rev-2015-11-01: Format 6, "March 2015", document status
    1 November 2015; in force 1 September 2015, Format 5 accepted for the rest of 2015, Format 6
    alone from 1 January 2016. Wayback copy of
    dsv.de/fileadmin/dsv/documents/schwimmen/Amtliches/151111_DSVStandard_Version6.pdf (linked
    from the DSV forms page, March 2016 capture). Its change log: 15 Sep 2015 adds NACHWEIS,
    makes PFLICHTZEIT fields mandatory; 26 Oct 2015 adds relative session times, PNREAKTION
    and STABLOESE, and stops reaction times being sent as a 0 m split. Read via front matter and
    a full diff against Format 7.
  - dsv-standard-format-5-rev-2007-10: Format 5, issue 8.2 of October 2007, in force 1 January
    2008. 22 pp., read in full. Wayback copy of
    dsv.de/fileadmin/dsv/documents/dsv/service/formulare/dsvformat5_2007.pdf. Grammar notation
    (angle-bracket placeholders, square-bracket options, braces for repetition), keyword-labelled
    fields such as VNKENNZAHL:, LSV:, NATION:, STARTS:, WK:, records spread over several lines,
    ANSI only, YYMMDD names with .DSV. Revision list: issue 2 September 1990, 3 December 1990,
    4 October 1997 (25 m and 5/10/25 km distances, X stroke, mandatory course and birth year,
    abandoned-swim code AU), 5 October 1998 (long-distance times), 6 May 2002 (renamed
    DSV-Standard, format number 4, file naming fixed, IBM or ANSI charset, regional association
    code 01-18, FINA nation code, A and N phases, DQ reason text, four-digit years, officials in
    entries), 7 May 2003 (code 99 for select teams), 8 October 2005 (format number 5, ANSI only,
    new club and swimmer ids, best-list assignment SW/MS/FS, name always "Surname, Given",
    record flags DR/DJR/DMR), November 2005 (optional Wettkampfdefinitionsliste added), October
    2007 (full event definition required in that list). "Ab Dez 89" heads the list, so the first
    issue is taken as December 1989; that is inferred from the heading. Its introduction credits
    the WSV EDV committee working with program authors and users, and says the DSV took the
    standard over in 2001. The same document's revision list dates the rename to May 2002, and
    German Wikipedia says May 2002. Flagged in the text.
  - dsv-amtliche-mitteilungen-2026-05-13: DSV official notices for 13-19 May 2026; the
    Länderfachkonferenz Schwimmen adopted Standard 8 on 14 March 2026. Other items name
    individuals and are not used. dsv.de file_id=10919. (Wikipedia gives this notice as 20 May.)

Format 8 change log against 7: gender on coaches and officials; account holder on bank details;
LASTSCHRIFT (direct debit only) in the definition list, not allowed alongside BANKVERBINDUNG;
direct-debit flag on the club in entry lists; fee types Teilnehmermeldegeld (per swimmer with an
individual entry) and Abschnittspauschale (per club per session entered); zipped .DSV8z holding
exactly one same-named .DSV8, introduced because editors were damaging the encoding; kick drills
KB and KR (butterfly only). Found by diff and not in the log: FINA renamed WA throughout;
Meldegeldpauschale redefined from a sum added per entry (Format 7) to one added per club
(Format 8); example corrections. Format 7 log against 6: nationality on entries and results,
simplified competitions (EW), open-water flag removed from best-list assignment, gender D,
para events (HANDICAP with DBS-ID, IPC-ID, classes S/SB/SM and exceptions), more official roles.

Spec examples still contain slips in Format 8: a comma for a semicolon in two WERTUNG lines
and the relay split lines; a WERTUNG on event 5 as F while the event is defined as E; the club
entry example uses phase F although the entry list allows only V and E; two swimmers both
placed 8th with different times; a 50 m split given as 29,03 in one list and 29,06 in another.

Real file: sources/samples/dsv/2026-11-14-Coesfeld-Wk.dsv7, the definition list for the
Volksbank Westmünsterland-Cup, 14 November 2026, published at
https://sccoesfeld.org/files/cup2026/2026-11-14-Coesfeld-Wk.dsv7 (linked from sccoesfeld.org/cup).
191 lines, UTF-8, CRLF. Written by EasyWk 5.25 (24 March 2024) on 14 July 2026. Six comment
lines before FORMAT; a space after each element's colon; trailing comments after elements;
two sessions, the second timed relative to the first (J flag); 26 events, all E, relays as
4 starters x 50 m; scoring classes by single birth year with ids built as event x 1000 + n;
per-event fees only (4,50 to 7,00 EUR); KONTOINHABER present but commented out, the Format 8
field in a Format 7 file. The file carries a contact's name and address and the club's bank
details; neither is reproduced here.

Independent:
  - de.wikipedia.org/wiki/DSV-Standard (read October 2026): 1980s WSV origin, May 2002 takeover,
    "Ausgabe 8.1, November 2005" (an issue number of the document, not format 8; this explains
    the stub's earlier doubt), Format 7 and 8 dates.
  - Kreisschwimmverband Emsland, "Hinweise zum Staffelmeldebogen und zu den dsv7-Dateien"
    (https://kreisschwimmverband-emsland.de/emsland_5611/emsland5611h.htm, undated, read
    2026-10-28): standard names with 8- and 16-character limits; no dots, spaces or umlauts
    before the extension, because some programs take the type from the first dot; some
    programs refuse non-standard names; standard names required for uploads to the DSV portal;
    transition dates for DSV8.
  - Lenex 3.0 documentation (rev 4 March 2025, held): German extensions license_dsv,
    license_dbs, round GER.RES (re-swim), stroke GER.APH.
  - Splash Meet Manager release notes via splash-meet-manager.md: DSV 7 import December 2022,
    export February 2023; brochure lists DSV 5 and 6. Splash Team Manager: DSV 4 in 2008.
  - SwimNews advertisement, May-June 2002 (periodicals/swim-news/swimnewsn271): "WSV" among
    Splash's formats. Format 5's introduction says the WSV wrote the standard, and the WSV is
    now the Schwimmverband NRW, so the identification is well supported, though the
    advertisement itself does not spell it out.
  - Lsv-sachsen.de, 22 September 2015 and 6 November 2015: Format 6 published, then a
    1 November 2015 revision that made new entry files necessary for two meets.
  - github.com/swimcoachtools/libreDSV6.reader: created December 2018, last pushed January
    2019, converts a DSV6 file into a spreadsheet. Stubbed.
  - 2026 meet invitations (e.g. Hesse, assets.cockpit.coco.one) require entries in DSV7.

Not found: the first issue itself, any WSV-era document, the size of the user base, whether
Format 8 has been taken up by EasyWk or Splash yet.
-->

The DSV-Standard is the plain-text format in which German swimming clubs, meet hosts and
federations exchange meet definitions, entries and results. It is published free of charge by
the [Deutscher Schwimm-Verband](../vendors/deutscher-schwimm-verband.md) (DSV), the German
swimming federation.[^f8] It dates from 1989, when it was a standard of the
[Westdeutscher Schwimm-Verband](../vendors/schwimmverband-nrw.md) (WSV), and was renamed when the
national federation took it over in 2002.[^f5][^dewiki] The current version, Format 8,
came into force on 1 August 2026 and becomes the only valid version on 1 January 2027.[^f8][^am]
German meet programs such as EasyWk and Splash Meet Manager handle it alongside
[Lenex](lenex.md).[^coesfeld][^splash]

## History

This section traces the format from its regional origin to Format 8.

The standard was written by the electronic data processing committee of the WSV, the regional
association for North Rhine-Westphalia, together with the authors of competition programs and
their users. Both groups had asked for a common way to pass entries and results between
programs.[^f5] The revision list printed in the 2007 edition starts in December 1989, and records
issues in September 1990, December 1990, October 1997 and October 1998.[^f5] A 2002 advertisement
for Splash Meet Manager lists "WSV" among its formats, beside SDIF, Lenex and Commlink, which
matches the standard's name at that time.[^sn271]

The national federation adopted the standard and renamed it the DSV-Standard. The 2007 edition
gives two dates for this. Its introduction says the DSV took the standard over in 2001, and its
revision list puts the renaming in May 2002. German Wikipedia gives May 2002.[^f5][^dewiki] Two
numbering schemes ran side by side for the next few years. Issues of the document were numbered
2 to 8, while the format carried its own number, written into each file: format 4 from the
renaming in 2002, and format 5 from the issue of October 2005.[^f5] The 2007 edition calls itself issue 8.2,
so the "Ausgabe 8.1" of November 2005 that Wikipedia mentions is probably the issue before it,
not a Format 8.[^dewiki][^f5]

| Version | Document date | In force | Main changes |
|---|---|---|---|
| Format 4 | May 2002 | Not stated | Renamed DSV-Standard; fixed file names; regional association and nation codes; disqualification reasons as text; officials in entry lists |
| Format 5 | October 2005; revised November 2005 and October 2007 | Not stated for 2005; 1 January 2008 for the October 2007 issue | ANSI only; national club and swimmer ids; best-list assignment; record flags; optional competition definition list |
| Format 6 | March 2015; revised to 1 November 2015 | 1 September 2015; sole format from 1 January 2016 | Complete redesign; one element per line; UTF-8; reaction and changeover times |
| Format 7 | 31 August 2022 | 1 January 2023; sole format from 1 August 2023 | Nationality; para-swimming classes; non-binary gender; simplified competitions |
| Format 8 | 14 March 2026 | 1 August 2026; sole format from 1 January 2027 | Direct debit; two new fee types; kick drills; zipped variant |

The dates come from each edition's own front matter.[^f5][^f6][^f7][^f8] Since 2015 each new format
has been allowed to run beside the previous one for between four and seven months. German
Wikipedia describes Format 7 as mandatory from 1 January 2023, which is the date it came into
force. The Format 7 document itself kept Format 6 valid until the end of July 2023.[^dewiki][^f7]

Format 6 was a rewrite. Format 5 was defined in a grammar notation, with placeholders in angle
brackets and optional parts in square brackets. Its records were made up of labelled fields
such as `VNKENNZAHL:` and `STARTS:` and could run over several lines. It allowed only the ANSI
character set, and its files were named with a two-digit year and the extension `.DSV`.[^f5]
Format 6 replaced this with a fixed list of elements, each on one line with a set number of
semicolon-separated attributes. It also changed the encoding to UTF-8 and named files with a
four-digit year and the extension `.DSV6`.[^f6] Formats 7 and 8 keep that design and extend it.
Regional associations passed the 2015 revisions on to clubs. Saxony's association announced Format 6 in
September 2015 and, in November, a revision that made new entry files necessary for two of its
meets.[^lsvs2015a][^lsvs2015b]

The Länderfachkonferenz Schwimmen, the federation's conference of regional swimming
committees, adopted Format 8 at its meeting of 14 March 2026. The federation published the
decision in its official notices in May.[^am]

## Form

A file is plain text in UTF-8 without a byte-order mark, and holds one list.[^f8] Its name
follows a fixed pattern. That pattern is the date of the meet's last session in the form
`YYYY-MM-DD`, then the venue's town, then a suffix for the kind of list, then the extension.
The town is cut to eight characters, with spaces and hyphens removed and umlauts spelled out
(`ae`, `oe`, `ue`, `ss`). Club names in the suffix are cut to sixteen.[^f8] The specification's
own examples are `2001-12-16-Berlin-Pr.DSV8` and `2001-12-16-Frankfur-Pr.DSV8`. Format 8 adds a
ZIP variant with the extension `.DSV8z`, holding exactly one `.DSV8` file of the same name. The
federation introduced it because files were being opened and saved in text editors that damaged
the encoding.[^f8] A regional association's guidance adds practical points. Some programs refuse
files that are not named to the pattern, and standard names are required for uploads to the
federation's portal. A dot before the extension can confuse programs that read the file type
from the first dot.[^emsland]

Each line is one element. It opens with the element's name in capitals and a colon, followed by
its attributes in a fixed order, each closed by a semicolon. An attribute that is left out still
keeps its semicolon, so the count never changes. An element may not run over a line break, and
spaces around an attribute's value are allowed.[^f8] Comments are enclosed in `(*` and `*)` and
cannot span lines.[^f8] The `FORMAT` element comes first in every file, naming the kind of list
and the version number. `DATEIENDE` (end of file) comes last. In between, elements follow the order
of the specification. A writer may depart from that order only if no element appears before an
element it refers to.[^f8]

Values come in a few fixed types:[^f8]

| Type | Form | Example |
|---|---|---|
| Time | `HH:MM:SS,hh`, with a decimal comma | `00:02:32,09` |
| Date | `DD.MM.YYYY` | `03.08.1990` |
| Time of day | `HH:MM`, 24-hour | `16:00` |
| Amount | Two decimals, decimal comma | `2,50` |
| Year or age class | A four-digit birth year, a letter class, or a masters age | `1990`, `J`, `40`, `100+` |

## The four lists

This section describes the kinds of file the standard defines.

The standard defines four lists:[^f8]

| List | Written by | Carries |
|---|---|---|
| Wettkampfdefinitionsliste (competition definition list) | The meet host | The meet, venue, contacts, entry deadline, fees, sessions, events, scoring classes and qualifying times |
| Vereinsmeldeliste (club entry list) | Each club | The club, its contact, its officials and coaches, and its individual and relay entries with entry times |
| Vereinsergebnisliste (club result list) | The meet host, for one club | That club's results, splits and reaction times |
| Wettkampfergebnisliste (competition result list) | The meet host | Every club and every result in the meet |

The definition list and the club result list are optional. The specification describes the
first as a service that lets clubs load a meet's invitation straight into their entry software.
The second gives a club its own results in compact form.[^f8] The definition list was the last of
the four to be added, in November 2005.[^f5]

The lists share a set of elements that describe the meet. `VERANSTALTUNG` names the meet, its
town, the pool length and the kind of timing. `ABSCHNITT` gives each session's number, date and
start time. `WETTKAMPF` defines each event, and `WERTUNG` defines each scoring class within an
event.[^f8] People are tied to their swims by numbers that are unique within the meet. In an
entry list a swimmer is declared once in a `PNMELDUNG` element, and each entered event follows
in a `STARTPN` element that points back to the swimmer. Relays work the same way, with
`STMELDUNG`, `STARTST` and `STAFFELPERSON`.[^f8] Swimmers also carry a six-digit DSV id, given as 0
when it is not known, and clubs a four-digit DSV club number, given as 0 for clubs outside the
federation.[^f8]

The event element packs the event's definition into fixed fields:[^f8]

| Field | Values |
|---|---|
| Phase | `V` heat, `Z` semi-final, `F` final, `E` timed final; in results also `A` swim-off and `N` re-swim |
| Distance | Metres, 1–25000, with the number of swimmers given separately for relays |
| Stroke | `F` freestyle, `R` backstroke, `B` breaststroke, `S` butterfly, `L` medley, `X` other |
| Form | `GL` full stroke, `BE` legs, `AR` arms, `ST` start, `WE` turn, `GB` glide; since Format 8 `KB` and `KR` butterfly kick, front and back |
| Gender | `M`, `W`, `D` (non-binary), `X` mixed |
| Best-list assignment | `SW` youth and open, `MS` masters, `PA` para, `EW` simplified, `KG` child-friendly, `XX` other |

The drill forms and the child-friendly assignment let a file describe age-group events that are
not full-stroke races.[^f8] A result that has no place gives a reason instead,
using `DS` for disqualified, `NA` for did not start, `AB` for withdrawn, `AU` for abandoned or `ZU`
for over the time limit in long-distance events.[^f8]

Each club also carries the number of its regional association. The appendix numbers the
eighteen Landesschwimmverbände from 1 to 18. Foreign clubs take 0, and select teams drawn from
several clubs take 99.[^f8]

## A file read

The lines below come from a definition list published by a club in Coesfeld for a meet on
14 November 2026, written by [EasyWk](easywk.md) in July 2026 in Format 7.[^coesfeld] Lines
carrying contact and bank details are left out.

```text
(* erzeugt mit EasyWk - DAS Schwimmwettkampfprogramm *)
FORMAT: Wettkampfdefinitionsliste;7;
ERZEUGER: EasyWk;5.25;info@easywk.de;
VERANSTALTUNG: Volksbank Westmünsterland-Cup Coesfeld 2026;Coesfeld;25;HANDZEIT;
MELDESCHLUSS: 04.11.2026;23:59;
(* KONTOINHABER: SC Coesfeld; *)
ABSCHNITT: 1;14.11.2026;09:30;10:00;10:30;;
ABSCHNITT: 2;14.11.2026;00:00;00:30;01:00;J;
WETTKAMPF: 1;E;1;1;50;S;GL;W;SW;;; (* 50m Schmetterling weiblich *)
WETTKAMPF: 13;E;1;4;50;L;GL;W;SW;;; (* 4x50m Lagen weiblich Jugend *)
WERTUNG: 1;E;1002;JG;2017;2017;W;Jahrgang 2017;
WERTUNG: 3;E;3007;JG;0;2008;W;Jahrgang 2008 und älter;
MELDEGELD: Wkmeldegeld;4,50;1;
DATEIENDE
```

The file opens with comment lines, placed ahead of the `FORMAT` element that the standard
requires to come first, and then gives the format and the program that wrote it. The meet is
in a 25 m pool with hand timing.[^coesfeld][^f8] The first
session lists times for opening the doors, the officials' meeting and the start. The second
session's `J` flag marks its times as hours and minutes after the end of the first, which is why
they start at `00:00`.[^coesfeld][^f8]

Event 1 is a timed final (`E`) in session 1 for one swimmer over 50 m of butterfly, full stroke,
women, counted for the youth and open best lists. Event 13 is the medley relay, written as four
swimmers over 50 m rather than as a distance of 200 m.[^coesfeld][^f8] The two `WERTUNG` lines
show how scoring classes work. The first, given id 1002 by the program, ranks swimmers born in
2017. The second covers everyone born in 2008 or earlier, with 0 as the open lower bound. Each
event in this meet has its own entry fee, given by a `Wkmeldegeld` line with the event's
number.[^coesfeld][^f8]

The file also shows how a program meets the standard in practice. Every element name is followed
by a space, which the rule on spaces around values allows. Several elements carry a comment after
them on the same line. And the account-holder field that Format 8 adds to the bank details is
already present, written as a comment where a Format 7 reader skips it.[^coesfeld][^f8]

## Format 8

This section lists what changed in March 2026.

The change log in the Format 8 document lists nine changes. Coaches and officials gain a gender
field, and bank details gain the account holder's name. A meet can be marked as payable only by
direct debit, which is not allowed together with bank details, and a club can declare that the
host holds a debit mandate. Two fee types are added: a flat sum per swimmer with an individual
entry, and a flat sum per club for each session it enters. The ZIP variant is introduced, the
kick drills are added, and the version number becomes 8.[^f8]

Three further changes appear in the text but not in the log. References to FINA, including the three-letter nation codes, now name World Aquatics.
The flat per-club fee, which Format 7 described as added to each entry, is now described as added
once per club. Several errors in the worked examples are corrected, although others remain. Some
lines still use a comma where a semicolon belongs, and the club entry example uses a final (`F`)
in a list that allows only heats and timed finals.[^f7][^f8]

## Adoption

The standard is the federation's own, and German meet invitations ask for entries in it. In
2026, invitations for the Hessian championships and for an international meet in Mainz required
entries as Format 7 files.[^hessen][^mainz] Invitations pair the file with the federation's paper
forms: an entry form, DSV-Form 101, which the club signs, and an entry list, DSV-Form 102.[^mainz][^nrw] Programs that support it include [Splash Meet Manager](splash-meet-manager.md),
which added Format 7 import in December 2022 and export in February 2023, and EasyWk, which wrote
the file above.[^splash][^coesfeld] The independent
[libreDSV6.reader](libredsv6-reader.md), published in 2018, converts a Format 6 file into a
spreadsheet.[^libre]

Lenex, the format most other European federations use, has German extensions of its own. An
athlete can carry `license_dsv`, the DSV id, and `license_dbs`, the id issued by the German
disabled sports federation. Lenex also has a round code `GER.RES` for re-swims at the German team
championships.[^lenex] German meet programs handle both formats, and a regional association's
guidance advises that an invitation should say whether Lenex entry files can be imported, because
not every program reads them.[^emsland]

## Compared with Lenex

This section compares the DSV-Standard with Lenex.

The two formats carry much the same information but are built differently. A DSV-Standard file
is a flat sequence of lines, each a named element with positional fields. A Lenex file is an XML
tree whose elements carry named attributes.[^f8][^lenex] Both link people to their swims by
numbers unique within the file, but the DSV-Standard puts the swimmer and the swimmer's events
on separate lines in a fixed order, where Lenex nests entries inside the athlete.[^f8][^lenex]
The DSV-Standard writes times and amounts with a decimal comma and dates in German order. Lenex
uses a decimal point and ISO dates.[^f8][^lenex]

They also differ in scope and governance. The DSV-Standard is the rule of one national federation,
which sets dates by which each version becomes compulsory and builds in German competition
structures: regional association numbers, DSV ids, best-list assignments and drill events.[^f8]
Lenex is maintained by one person and serves many federations. It has kept the version number
3.0 since 2008 while its documentation is revised in place.[^lenex] The 2007 edition of the
DSV-Standard explains why the format stayed a text file, so that people without computing
experience could write, read and understand it.[^f5]

## See also

- [Lenex](lenex.md): the XML format most other European federations use
- [SDIF](sdif.md): the American fixed-width counterpart
- [libreDSV6.reader](libredsv6-reader.md): a converter for Format 6 files
- [EasyWk](easywk.md), [Splash Meet Manager](splash-meet-manager.md) and [CPS-Schwimm](cps-schwimm.md): programs that use the format
- [Deutscher Schwimm-Verband](../vendors/deutscher-schwimm-verband.md) and [Schwimmverband NRW](../vendors/schwimmverband-nrw.md): the publisher and the originating association
- [Software](index.md): the software reference

## References

[^f8]: [Deutscher Schwimm-Verband, DSV Standard, Format 8](https://www.dsv.de/download-file?file_code=9fbdf74a1f&file_id=10922) (14 March 2026; in German).
[^f7]: [Deutscher Schwimm-Verband, DSV Standard, Format 7](https://www.dsv.de/download-file?file_code=b991de636e&file_id=1258) (31 August 2022; in German).
[^f6]: [Deutscher Schwimm-Verband, DSV-Standard, Format 6](https://web.archive.org/web/2016/http://www.dsv.de/fileadmin/dsv/documents/schwimmen/Amtliches/151111_DSVStandard_Version6.pdf) (1 November 2015; in German).
[^f5]: [Deutscher Schwimmverband, DSV-Standard, Format 5](https://web.archive.org/web/2016/http://www.dsv.de/fileadmin/dsv/documents/dsv/service/formulare/dsvformat5_2007.pdf) (issue 8.2, October 2007; in German).
[^am]: [Deutscher Schwimm-Verband, Amtliche Mitteilungen](https://www.dsv.de/download-file?file_code=7f6ab8d01c&file_id=10919) (13–19 May 2026; in German).
[^dewiki]: [Wikipedia (German), DSV-Standard](https://de.wikipedia.org/wiki/DSV-Standard).
[^coesfeld]: [SC Coesfeld, Volksbank Westmünsterland-Cup 2026 definition list](https://sccoesfeld.org/files/cup2026/2026-11-14-Coesfeld-Wk.dsv7) (written July 2026).
[^emsland]: [Kreisschwimmverband Emsland, Notes on the relay entry form and dsv7 files](https://kreisschwimmverband-emsland.de/emsland_5611/emsland5611h.htm) (in German).
[^lsvs2015a]: [Sächsischer Schwimm-Verband, Neuer DSV-Standard](https://www.lsv-sachsen.de/news/sportarten/schwimmen/276-neuer-dsv-standard) (22 September 2015; in German).
[^lsvs2015b]: [Sächsischer Schwimm-Verband, DSV-Standard Format 6](https://www.lsv-sachsen.de/news/sportarten/schwimmen/302-dsv-standard-format-6) (6 November 2015; in German).
[^hessen]: [Hessischer Schwimm-Verband, Hessian championships invitation](https://sg-frankfurt.de/wp-content/uploads/2026/01/2026-02-08-Offenbac-Au.pdf) (Offenbach, February 2026; in German).
[^mainz]: [Mainzer Schwimmverein 1901, 56th International Swim Festival invitation](https://assets.cockpit.coco.one/4191760279439-tcTcfY0x/2026-03-08-mainz-au.pdf) (7–8 March 2026; in German).
[^nrw]: [Schwimmverband NRW, NRW long-distance championships invitation](https://sgsmuenster.net/wp-content/uploads/2025/11/260307-Ausschreibung-NRW-LangeStrecken-2026-Stand-22.10.2025.pdf) (March 2026; in German).
[^splash]: [Swim Wiki, Meet Manager: Release Notes](https://wiki.swimrankings.net/index.php/Meet_Manager:Release_Notes).
[^lenex]: [Christian Kaufmann, Lenex 3.0 Technical Documentation](https://wiki.swimrankings.net/images/6/62/Lenex_3.0_Technical_Documentation.pdf) (revision of 4 March 2025).
[^libre]: [swimcoachtools, libreDSV6.reader](https://github.com/swimcoachtools/libreDSV6.reader).
[^sn271]: *SwimNews*, May–June 2002 (Splash advertisement listing Commlink, SDIF, WSV, Lenex and Aquabec).

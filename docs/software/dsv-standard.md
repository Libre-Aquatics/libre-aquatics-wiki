---
title: DSV-Standard
description: >-
  The DSV-Standard is the German Swimming Federation's plain-text format for meet
  definitions, entries and results, developed within the Westdeutscher Schwimmverband.
tags:
  - Software
  - Meet management
  - Reference
---

<!--
Research notes, DSV-Standard.

Surfaced while building out Lenex. A Splash Software advertisement in SwimNews, May-June
to November-December 2002 (sources/periodicals/swim-news/swimnewsn271.txt to 275),
lists "WSV" among the entry and result formats the program handled, next to SDIF, Lenex,
Commlink and Aquabec. The advertisement does not expand the abbreviation.

Identification, inferred rather than stated: German Wikipedia's DSV-Standard article
(de.wikipedia.org/wiki/DSV-Standard) says the format was developed in the 1980s within the
Westdeutscher Schwimmverband (the West German regional swimming association, WSV) and
taken over by the Deutscher Schwimm-Verband in May 2002. A German format called WSV in
early 2002 is taken to be this one under its earlier name. Nothing in the advertisement
confirms it.

What the Wikipedia article says, not yet checked against the DSV's own documents: plain text
files, extensions .dsv, .dsv6, .dsv7; Format 6 dated 2 October 2015; Format 7 dated
31 August 2022 and mandatory from 1 January 2023; UTF-8 the only permitted encoding since
the 2015 revision (ANSI before); four list types, the club entry list
(Vereinsmeldeliste), club result list (Vereinsergebnisliste), competition result list
(Wettkampfergebnisliste) and competition definition list (Wettkampfdefinitionsliste).
The article contrasts it with Lenex on human readability. The summary fetched also gave a
"Format 8.1, November 2005" line that contradicts the chronology; not trusted, needs the
article read directly.

Newer: regional association posts (shsv.de, July and August 2026) report a DSV8 format,
with the Länderfachkonferenz allowing DSV7 until the end of 2026 and DSV8 alone valid from
1 January 2027. Not read in full.

Relationship to Lenex: the Lenex 3.0 documentation (4 March 2025) defines German extensions
(license_dsv for the DSV registration id, GER.RES re-swim round, GER.APH stroke), and the
Swimrankings wiki's list of federations using Lenex as their primary format omits Germany.
German meet programs named on the Lenex page (EasyWk, CPS-Schwimm) handle both.

Sources: de.wikipedia.org/wiki/DSV-Standard; dsv.de download "DSV Standard, Standardisierung
des Datenaustausches" (not yet read); shsv.de 2026 posts; svw-online.de on DSV7 from
1 January 2023; swimnewsn271-275.txt; github.com/swimcoachtools/libreDSV6.reader (a DSV6
reader, not examined).

Still to research: the DSV's own specification documents, versions before 6, the DSV8
changes, and what "WSV" files looked like in 2002.
-->

This article is a stub. The DSV-Standard is the German Swimming Federation's plain-text
format for exchanging meet definitions, entries and results, which German Wikipedia says was
developed within the Westdeutscher Schwimmverband in the 1980s and adopted by the national
federation in May 2002, with version 7 in force from 2023.

It appears to be the format a 2002 advertisement listed as WSV beside [Lenex](lenex.md) and
[SDIF](sdif.md); see the [software overview](index.md) for what this section covers.

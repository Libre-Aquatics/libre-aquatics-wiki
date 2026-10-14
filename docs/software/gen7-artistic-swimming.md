---
title: Gen7 Artistic Swimming
description: >-
  Gen7 Artistic Swimming is the Colorado Time Systems scoring program that runs Gen7 wired
  judging terminals for artistic swimming.
tags:
  - Software
  - Artistic swimming
  - Scoring
---

<!--
Research notes, Gen7 Artistic Swimming. Surfaced 2026-10-13 while building out
gen7-wired-judging.md.

Held source: the CTS Diving Installation and User Guide F1022 Rev 202510
(sources/vendors/colorado-time-systems/timers-consoles/cts-diving-installation-and-user-guide-f1022.txt)
names two sport programs that drive the wired JT-01 terminals, Gen7 Diving and Gen7 Artistic
Swimming, and says the sport software chooses the terminal mode. It mentions artistic
swimming twice more: a split panel can put half the judges and controllers on each side of
the pool, and where one judge has to give several awards the software leads the judge
through them. The guide says on-screen help covers each sport; it documents only Gen7
Diving.

Existence check (2026-10-13). The full name appears once in F1022, in the JT-01 section,
where the sport software is given as Gen7 Diving or Gen7 Artistic Swimming. The product
overview a few lines earlier is looser, naming the software as Gen7 Diving and Artistic
Swimming, which could be read as one program covering both sports. No other held CTS
document names it. Verified on the web, October 2026:
  - CTS manuals page (https://coloradotime.com/support/manuals): the Diving and Synchro
    section lists only Gen7 Diving F1022 and the wireless judging guides F941 and F961. The
    only artistic swimming software guide on the site is the System 6 one, F874. No Gen7
    artistic swimming manual is listed.
  - CTS Gen7 Diving product page and datasheet (Rev 08/23): neither mentions an artistic
    swimming program, and the packages JSYS-3 to JSYS-15 include only Gen7 Diving software.
  - CTS blog post on the 2023 Central American and Caribbean Games
    (https://coloradotime.com/blog/colorado-time-systems-is-a-preferred-aquatic-timing-solution-across-the-world,
    fetched, undated): says CTS supplied GEN7 Diving and Artistic Swimming there, and quotes
    the chair of the CCCAN artistic swimming committee. The wording can mean Gen7 equipment
    used for both sports, so it does not establish a separately named program.
  - Site search, product pages and the 2025 catalogue on issuu: no product page, datasheet,
    part number or price under this name.
Conclusion: CTS's own manual names the program, but CTS does not sell or document it as a
separate product. It may be unreleased, bundled with Gen7 Diving, or the manual's label
for running artistic swimming on the same hardware. Treat it as attested by one manual
clause, not as a confirmed product. CTS's older artistic swimming program is SynchroMM,
which works with the wireless terminals; the 2020 CTS site menu listed "Artistic Swimming
Software" (see synchromm.md). Whether Gen7 Artistic Swimming replaces SynchroMM, is it
renamed, or is separate is unknown and should not be asserted.

Still to research: whether the program was ever released (ask CTS support), a manual or
datasheet, part number, release date, scoring formats supported (World Aquatics element
scoring), and the relationship to SynchroMM.
-->

This article is a stub. Gen7 Artistic Swimming is a Colorado Time Systems scoring program that
collects artistic swimming judges' marks from
[Gen7 wired judging](../equipment/diving/gen7-wired-judging.md) terminals, prompting a judge
through each mark in turn where the event calls for several.

It is named only in the Gen7 Diving manual. Colorado Time Systems publishes no product page,
manual or part number for it, and its relationship to the earlier
[SynchroMM](synchromm.md) program is undocumented.

See the [software overview](index.md) for what this section covers.

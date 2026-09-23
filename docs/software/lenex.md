---
title: Lenex
description: >-
  Lenex is the XML-based swimming data exchange format used across Europe, and the
  continental counterpart to United States Swimming's fixed-width SDIF.
tags:
  - Software
  - Meet management
  - Reference
---

<!--
Research notes, Lenex.

Surfaced while building out SDIF, where it is the obvious comparison: the two formats
answer the same need on two continents and in two technical idioms, and the SDIF page
carries a section setting them against each other.

Sources. wiki.swimrankings.net's Lenex pages
(wiki.swimrankings.net/index.php/swimrankings:Lenex) are the reference, and the technical
documentation is a PDF hosted from the same wiki
(wiki.swimrankings.net/images/6/62/Lenex_3.0_Technical_Documentation.pdf). Two datestamps
appear on copies of that document, 31 January 2015 and 27 October 2021, both labelled
version 3.0, so the version number has outlasted several revisions of the document itself.
A third copy sits on southeastswimming.org. None of these has been read in full; what is
recorded here is from the wiki's summary pages.

Verified from those pages: XML-based, not binary or compressed. Created and maintained by
Christian Kaufmann, who the wiki describes as the format's trust authority, so this is one
person's format rather than a federation's, which is the sharpest institutional contrast
with SDIF. Version 1.0 in use from 1999 in various European countries; version 2.0 in 2004,
adding records and renaming tags that had been ambiguous, timed with the launch of European
Rankings; version 3.0 in late 2008, introducing a new representation of result lists while
staying almost entirely backward compatible with 2.0. Recommended format for European
Aquatics rankings. The wiki states more than 20 federations use it as their primary
exchange format; that is the wiki's figure and is not independently checked here.

The file extension is given as .lxf on the strength of the sample files the wiki links.
Treat that as inferred rather than stated until the technical documentation is read.

Independent corroboration that the two formats coexisted in the same products, which is
better than either side's own account: a meet-management advertisement running in SwimNews
issues 268 to 275, May to June 2002, lists entry formats as Commlink, SDIF, WSV, Lenex and
Aquabec and output formats as SDIF, Splash, WSV, Lenex and Aquabec
(sources/periodicals/swim-news/swimnewsn271.txt:68-72). WSV and Aquabec are two further
named formats that this wiki does not yet cover and that nothing here explains.

Still to research: the technical documentation itself, so the comparison with SDIF can be
made on structure rather than on summary; what Lenex 4 plans exist, if any; the
relationship to European Aquatics as an institution, given the format is maintained
privately; and whether any American software reads or writes it.
-->

This article is a stub. Lenex is an XML-based data exchange format for swimming, created
and maintained by Christian Kaufmann, in use across European countries since version 1.0 of
1999 and revised to version 2.0 in 2004 and version 3.0 in late 2008, and it is the
recommended format for European Aquatics rankings.

It is the continental counterpart to [SDIF](sdif.md), which fixed its record geometry in
1998 and never moved, and the two were offered side by side in the same meet-management
software by 2002; see the [software overview](index.md) for what this section covers.

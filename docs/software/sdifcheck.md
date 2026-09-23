---
title: SDIFCheck
description: >-
  SDIFCheck is a Windows utility that validates SDIF files against the published
  specification before they are imported into meet-management software.
tags:
  - Software
  - Meet management
  - Reference
---

<!--
Research notes, SDIFCheck.

Surfaced while building out SDIF. It matters more than a small utility usually would,
because SDIF records carry no checksum: version 3 removed the checksum fields that earlier
versions had, so nothing inside a file tells a reader it is malformed, and an external
checker is the only thing standing between a hand-built file and a flat rejection at
import.

Sources, and a warning about them. The product page is winswim.com/sdifchk.htm. It could
not be fetched on this pass: the connection was reset. Everything below therefore comes
from search-result summaries of that page and from the sdif-forum thread, not from the page
itself. Re-fetch it before building this out.

Recorded, all of it second-hand: a Windows executable rather than source, distributed from
the WinSwim site, described as version 1.3 dated 15 December 2015. It validates a file
against the SDIF format before that file is imported into a program such as Meet Manager.
Whether it is free was not established.

Corroboration that it is the tool people actually reach for: in a thread on the sdif-forum
Google group, someone whose hand-built entries file was rejected by Meet Manager is pointed
at the WinSwim checker by Mike Walsh. The same thread records that Chrome blocked the
download as potentially dangerous, which is worth knowing before recommending it. The
poster eventually found the fault without it, and it was a text-encoding problem rather
than a format one.

Swim Data separately advertises two extraction utilities, SDIF Master and SDIF_PRO
(SDIFPRO4.exe), at swimdata.com/SDIF.shtml. Those extract data from SDIF files rather than
validate them, they are a different product line from a different publisher, and they are
not the same thing as SDIFCheck. They have not been examined either and are recorded here
only so the next person does not conflate the three.

Still to research: the product page itself, licence and price, whether it is still
available and still maintained, which version of the specification it checks against, and
what it reports.
-->

This article is a stub. SDIFCheck is a Windows utility distributed from the
[WinSwim](winswim.md) site, reported as version 1.3 of December 2015, that validates an
[SDIF](sdif.md) file against the published format before it is imported into
meet-management software.

It fills a gap the format leaves open, since version 3 removed the checksum fields that
would otherwise let a reader detect a damaged record; see the
[software overview](index.md) for what this section covers.

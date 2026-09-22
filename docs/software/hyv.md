---
title: HYV file format
description: >-
  HYV is the Hy-Tek event-export file, the sibling of HY3, produced by Meet Manager
  when events rather than a whole merge are exported.
tags:
  - Software
  - Meet management
  - Reference
---

<!--
Research notes, HYV.

Created with the HY3 and CL2 pages. It is the thinnest of the three and the page is short
because the evidence is.

Nothing in sources/ mentions it. The only substantive attestation found is the SwimComm
hytek-parser project, which lists the three file types it handles and distinguishes them:
hy3 for merge exports, hyv for event exports, and xls for individual event report data-only
exports, all tested against Meet Manager 8.0. That is a third-party tool describing what it
reads, not a specification.

Structure, established September 2026 and the thing that makes HYV unlike its siblings.
It is not fixed-width at all. HYV is semicolon-delimited, so nothing about HY3's 130-column
lines and fixed offsets applies. Two independent implementations a decade apart agree on the
shape: a header line of eleven fields (meet description, start, end and age-up dates, course
code, location, an unidentified field, the software vendor, its version, and two more
unidentified), then event lines of eighteen fields (event number with an optional letter
suffix, classification P/F/S, gender, individual or relay, minimum and maximum age,
distance, stroke code, and ten further fields of which a qualifying time and an entry fee
are guessed at and the rest are unidentified). Dates use slashes here, MM/DD/YYYY, where
HY3 writes MMDDYYYY. The two sources are Mike Walsh's PHP validator in wp-SwimTeam and the
HYV reader in SwimComm/hytek-parser, whose field list literally names ten of them unknown1
through unknown10. Two people, two languages, ten years apart, the same gaps.

No enforced checksum. Walsh noted in October 2010 that the trailing two-digit value on
entries files is not a true checksum, since many rows repeat the same value, and guessed at
a lookup table. Unresolved. He later recalled an event file format that imports without a
checksum at all, which fits.

HYV against EV3, argued for years and settled by the vendor. DeLano thought EV3 newer;
Walsh argued HYV was, since the Meet Manager demo emitted only HYV; Bob Goudreau produced
version-history evidence for EV3. Hy-Tek's own Meet Manager 8 guide ends it: the event
export is always a zip carrying both the older HYV format and the newer EV3 format, with
HYV read by Team Manager before 4.0G and EV3 by 4.0G and later, and EV3 adding the sanction
number, altitude, entry eligibility date, open-event low age, per-meet and per-session
entry limits, session numbers and course, and division codes
(hytek.active.com/user_guides_html/swmm8/exporteventfortm.htm, verified September 2026).
Goudreau was right. Note also the vendor's warning that the event export is built for Team
Manager and not for moving events between Meet Manager databases, where Save As is the
route. EV3 is a named format with no page and should get one.

Merge against event export, now settled. The distinction is carried in the HY3 file-type
code in the A1 record, not really in the extension: merge variants exist for entries,
results and advancers, alongside plain entries, roster and results exports. In practice an
event export is the meet's event list, the schedule of what will be swum with no athletes
in it, while a merge export is athlete-bearing data meant to be combined into another
program's database. That is why HYV can be a simple delimited list and HY3 cannot.

The menu item is File / Export / Events for TEAM MANAGER, which answers another question
this page used to carry.

Still to research: the ten unidentified fields in an event line, which have defeated two
implementations; what the trailing two-digit value actually is, if not a checksum; and
whether EV3's layout is documented anywhere.
-->

This article is a stub. HYV is the event-list export from
[Meet Manager](hy-tek-meet-manager.md), carrying the schedule of what a meet will swim,
with no athletes in it, as against the athlete-bearing merge exports that produce an
[HY3](hy3.md).

It is structurally unlike the rest of the family: where [HY3](hy3.md) is fixed-width with
a checksum Hy-Tek enforces, an HYV is a semicolon-delimited list whose trailing digits are
not a real checksum, and ten of the eighteen fields in an event line have defeated everyone
who has tried to identify them. Hy-Tek now pairs it in every event export with a newer
format, [EV3](ev3.md), which Team Manager 4.0G and later read in preference; see the
[software overview](index.md) for what this section covers.

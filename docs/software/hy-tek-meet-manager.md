---
title: Hy-Tek Meet Manager
description: >-
  Hy-Tek Meet Manager is meet-management software for swimming that seeds
  entries, scores competition, and reads results from timing systems.
tags:
  - Software
  - Meet management
  - Swimming
---

<!-- Research notes (do not publish):
  Written from the Dolphin research pass, so what is recorded here is mostly the
  timing-system interface rather than the program as a whole. The program itself has
  not been researched.

  Company: Hy-Tek Sports Software Ltd, of New Bern, North Carolina (the 2007 CTS
  Spanish sheet F922 gives the 252-633-5111 New Bern number; later CTS documents give
  866-456-5111 and hy-tekltd.com). Acquired by The Active Network in 2007, after about
  25 years of independent development; Hy-Tek products now sit under Active's swim
  line and documentation lives at hytek.active.com. Active later also acquired Meet
  Mobile. Hy-Tek is described as USA Swimming's preferred partner for live results and
  meet management. Sources: Swimming World industry news on the acquisition; Active
  Network's own press release; activenetwork.com/swim. Acquisition year verified from
  two independent items; the "25 years" figure is Active's own characterization.

  Dolphin interface, from CTS F912 Rev 202412 and Hy-Tek's own guides:
    - Two arrangements. Stand Alone treats Dolphin watches as the primary times,
      with or without splits. Backup Mode treats them as backup behind a console
      running Hy-Tek's interface, with pad or button times primary; backup mode does
      not carry splits.
    - Both are separately purchased options in current Hy-Tek documentation. The
      CTS Backup Mode setting stays greyed out until the option is bought (F912
      troubleshooting table). Note the change over time: the 2007 Spanish CTS sheet
      (F922 rev 0607) states the primary-mode interface was included in Meet Manager
      at no extra charge while Backup Mode was sold separately. So the commercial
      terms tightened at some point between 2007 and now. Exactly when is not
      established and should not be asserted.
    - Retrieval keys have also moved. F922 (2007) gives Get Times in primary mode and
      Ctrl-F3 in backup, with Ctrl-B to expose backup columns. F912 (2024) gives Get
      Times (F3) for both, with Ctrl-K for the time-adjustment window showing pad,
      button and watch times together. Hy-Tek's own support article describes Ctrl+W
      from the Run screen to list Dolphin result files. These are three descriptions
      of an interface that has changed across versions, not a contradiction; do not
      flatten them into one instruction.
    - Averaging: one watch stands, two are averaged per the rule chosen in
      Preferences / Backup Times, three take the middle. Where two watches differ by
      0.3 s or more MM refuses to average and flags the lane.
    - Data sets: Interfaces / Timer, then Select Data Set stored from CTSS, with Next
      Meet, Previous Meet and Update Data Set controls. A data set is the leading
      three digits of the Dolphin result filenames.
    - File formats: .do3 (final time only) and .do4 (with splits). Minimum build 21044
      for either, per the swimrankings.net Swim Wiki. The same source warns that
      splits in the file carry no positional marker, so a missed split shifts the rest.
    - CTS's 2012 brochure carries a quote from Charlie Hodgson, then Hy-Tek's Director
      of Product Development, about the CTS partnership. Marketing, and attributed as
      such if ever used.

  Sources: CTS F912 Rev 202412; CTS F922 rev 0607 (Spanish); CTS brochure Rev 08/12;
  hytek.active.com/user_guides_html/swmm8/coloradotimesystemsdolphin.htm; Hy-Tek
  Swimming Support articles on the CTS Dolphin interface and on Backup Mode;
  wiki.swimrankings.net Meet Manager pages; Swimming World and Active Network on the
  acquisition.

  Still to research before building this out: version history and current version;
  the Team Manager counterpart and the .hy3/.hyv/.cl2 file family; the SDIF/.sd3
  standard; which other timing systems it interfaces with and how; licensing tiers;
  the relationship to Meet Mobile.
-->

This article is a stub. Hy-Tek Meet Manager is meet-management software for swimming,
originally from Hy-Tek Sports Software and part of The Active Network since 2007, which
builds and seeds a meet, scores it, and reads race results from timing equipment. It
takes times from a [Dolphin Wireless Stopwatch Timing System](../equipment/swimming/semi-automatic/dolphin.md)
either as the primary source or as backup behind a console, in both cases through a
separately purchased option.

See the [software overview](index.md) for what this section covers.

---
title: Splash Meet Manager
description: >-
  Splash Meet Manager is Swiss meet-management software for swimming, used
  widely by European federations and able to read Dolphin result files.
tags:
  - Software
  - Meet management
  - Swimming
---

<!-- Research notes (do not publish):
  Written from the Dolphin research pass. The program itself has not been researched.

  Vendor: Splash Software, based in Berne, Switzerland, at splash-software.ch. Older
  documentation, including the swimrankings.net how-to PDF, attributes the product to
  GeoLogix AG of Berne, and GeoLogix is described as holding the federation contracts,
  so the corporate relationship between GeoLogix and Splash Software needs untangling
  before anything is asserted about the company. Senior developer named in vendor
  material as Christian Kaufmann. Vendor claims more than twenty-five years of
  swimming software and use by federations in Europe, Asia and North America, and
  lists eleven interface languages. All of that is the vendor's own account.

  Splash is closely tied to swimrankings.net: the Swim Wiki at wiki.swimrankings.net
  is the de facto technical documentation for Splash Meet Manager, and it is where the
  Dolphin file-format detail used on the Dolphin page comes from. Whether that wiki is
  vendor-operated or community-run was not established; treat it as vendor-adjacent
  rather than independent.

  Dolphin interface:
    - CTS names Splash alongside Hy-Tek Meet Manager and Meet Maestro in F912 Rev
      202412 and directs users to splash-software.ch and the program's own help.
    - The Swim Wiki's Colorado Dolphin Wireless page is the best public description of
      the result-file grammar found anywhere, vendor documentation included: names of
      the form AAA-BBB-CCCXNNNN.do4, where AAA is the data set, BBB the event, CCC the
      heat, X the round (T timed final, P prelim, S semi, F final) and NNNN a race id
      unique within the data set. .do3 carries the final time only, .do4 adds splits.
      It also gives the Meet Manager build floor of 21044 and the warning that splits
      have no positional marker so a missing one shifts the rest. Note that the build
      number is Hy-Tek's, not Splash's; the page documents both programs' handling.
    - DolphinEventList.csv is described there as the newer mechanism for defining
      available events and .do4 naming.

  Sources: CTS F912 Rev 202412; splash-software.ch; wiki.swimrankings.net Meet Manager
  pages including Timing System Colorado Dolphin Wireless; swimrankings.net
  MeetManager.pdf; the Meet Manager How-to-start PDF hosted on the Swim Wiki.
  Verified: that CTS names the program, and the file-format grammar. Unresolved: the
  GeoLogix relationship and the current corporate entity.

  Still to research before building this out: version history; which federations use
  it; the Team Manager counterpart; the Lenex file format, which is the European
  interchange standard and is associated with this software family but was not
  investigated here; how it connects to timing systems other than the Dolphin.
-->

This article is a stub. Splash Meet Manager is meet-management software for swimming
from Splash Software of Berne, Switzerland, used by clubs, organizing committees and
national federations, chiefly in Europe. Colorado Time Systems lists it among the
programs that can take results from a
[Dolphin Wireless Stopwatch Timing System](../equipment/swimming/semi-automatic/dolphin.md).

See the [software overview](index.md) for what this section covers.

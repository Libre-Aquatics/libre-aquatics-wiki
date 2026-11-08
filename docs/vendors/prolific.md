---
title: Prolific Technology
description: >-
  Prolific Technology makes the PL-2303 USB-to-serial chips whose driver ships with the Swiss
  Timing INT131 and Trycom TRP-C08H converters.
tags:
  - Reference
---

<!--
Research notes, Prolific Technology. Surfaced 2026-11-07 while building out
equipment/swimming/timers/swiss-timing-int131.md.

Sources:
  - Swiss Timing, INT131 User's Manual (3434.502.02, version 1.2, November 2007) and Trycom,
    TRP-C08H User's Manual (Rev 1.0, December 2005): both install the "PL-2303" driver from the
    supplied CD, and Windows then shows four new COM ports. Verified. Neither names the chip
    revision inside the converter.
  - Carmanah support article "Why does my serial to USB adapter not work in Windows 10/11?"
    (support.carmanah.com/article/445-serial-to-usb-adapter-issue, last updated 29 September 2025;
    read 2026-11-07): the PL-2303HXA and PL-2303X are end-of-life and unsupported with Windows 10/11
    drivers; Device Manager shows "PL2303HXA PHASED OUT SINCE 2012"; Prolific recommends the
    PL-2302HXD or PL2302TA; a 2008 driver can be forced on, but Windows may replace it, so Carmanah
    advises replacing the adapter. Verified.
  - pl2303-legacy project (github.com/johnstevenson/pl2303-legacy) and the PL2303HXA-Phased-Out
    project: the HXA/XA chips were phased out in 2012 (the project blames counterfeit copies);
    the TA/TB replacements lost support with Windows 11. Community sources, not Prolific. Read
    through a search summary only.
  Sources disagree on which Windows release first dropped the old chips (8/8.1 or 10). Not checked
  against Prolific's own driver pages. Nothing else about the company was researched; it is a
  chip maker, not an aquatics vendor.
-->

This article is a stub. Prolific Technology makes the PL-2303 family of USB-to-serial chips, whose
driver is installed with the Swiss Timing [INT131](../equipment/swimming/timers/swiss-timing-int131.md)
and [Trycom TRP-C08H](../equipment/swimming/timers/trycom-trp-c08h.md) converters.

See the [vendors overview](index.md) for the other companies this wiki covers.

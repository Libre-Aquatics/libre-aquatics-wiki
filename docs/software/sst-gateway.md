---
title: SST Gateway
description: >-
  SST Gateway is a Superior Swim Timing web service that moves event and results files between
  the SST timing computer and the meet computer without a shared folder.
tags:
  - Software
  - Timing
  - Swimming
---

<!--
Research notes, SST Gateway. Surfaced 2026-11-03 while writing sst-timing-software.md.

Source: SST Operation Manual, current edition, pp. 59-63 (sources/vendors/superior-swim-timing/
software/). Verified there: installs on the meet computer from softwareupdate.ssttiming.com/
SSTGateway.exe; still exchanges text files, but the service handles the transfer so no Windows
share is needed; both computers must be on one subnet; the SST console finds it automatically
unless a firewall intervenes, and can otherwise be pointed at an IP address; default port 49160,
changeable to 1024-65535 under Options, Show Advanced; the console option is called SST Server
under Meet Administration Interface and is only offered with a timer plugged in; the window's
Close button only minimizes, and the program quits from the Options menu.
A HEAD request on 2026-11-03 returned Last-Modified 20 September 2026, about 39.9 MB. The
installer was not downloaded or run.
Absent from the 2019 manual, so it arrived after August 2019. Release date unknown. Whether it
works with meet programs other than Hy-Tek Meet Manager is not stated; only that setup is given.
-->

This article is a stub. SST Gateway is a service from
[Superior Swim Timing](../vendors/superior-swim-timing.md), installed on the meet computer, that
passes schedule and results files to the SST console over the network, by default on port
`49160`, so that no shared folder is required.

See the [SST timing software](sst-timing-software.md) article for how it fits with the other
connection methods.

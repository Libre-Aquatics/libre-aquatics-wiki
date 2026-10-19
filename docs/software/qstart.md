---
title: QSTART
description: >-
  QSTART was the Colorado Time Systems DOS program that logged times from a QuickStart
  training display to a comma-delimited file on a PC.
tags:
  - Software
  - Swimming
  - Team management
---

<!--
Research notes, QSTART. Surfaced 2026-10-19 while building out
equipment/common/pace-clock/quickstart.md.

Only source: Colorado Time Systems, QuickStart User Guide F816 Rev. 0104 (2004), held under
sources/vendors/colorado-time-systems/start-systems/. The guide calls it the QuickStart PC
Logging Software. It was sold as an option with its own RS-232 cable and supplied on a
floppy disk (installed with A:install or B:install from C:\). It creates a C:\CTS directory
and is run from there as QSTART followed by a log file name. On start-up it asks for COM1 or
COM2. Swimmer names, up to 20 characters each: one for start testing, two to four for relays,
or none. F1 opens help, F2 saves the names and starts logging, F3 returns to name entry, and
ESC exits and saves. Up to 22 lines of data are shown on screen. The log file has a header line
and comma-delimited columns for name, start reaction, relay exchange, break-out and turn
speed, and the guide prints two short samples. Under Windows the guide says to open a DOS
session first.
No version number, release date or price is given. Whether the QuickStart Pro (F896, 2006)
had any PC link is not stated in its guide.
-->

This article is a stub. QSTART was a Colorado Time Systems DOS program, sold as an option
with the [QuickStart](../equipment/common/pace-clock/quickstart.md) training display, that
read each result over an RS-232 cable and saved it with the swimmer's name to a
comma-delimited log file for use in a spreadsheet.

See the [software overview](index.md) for the other programs this wiki covers.

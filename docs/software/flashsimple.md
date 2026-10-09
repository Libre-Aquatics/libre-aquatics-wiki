---
title: FlashSimple
description: >-
  FlashSimple is the PC program Swiss Timing provides for loading new firmware into the Calypso
  WPO console over a serial cable.
tags:
  - Software
  - Water polo
---

<!--
Research notes, FlashSimple. Surfaced 2026-10-08 while building out calypso-wpo-console.md.

Read: Swiss Timing, Calypso WPO Console Instructions for Use (3403.504.02, v2.7, January 2026),
3.5 Software download. FlashSimple is downloaded from Swiss Timing's website. On first use its
Flash > Setting dialog takes the device name H8S/2134F, a direct connection, the PC's COM port,
9600 baud and user mode. The operator browses to the firmware file (2054.xxx, .fpr or .mot),
starts the flash on the PC after starting the upload on the console, and waits about four
minutes for a success message; the console is then power-cycled and reset to factory settings.
Cable: straight 9-pin Sub-D, Swiss Timing 9051.1307, or a USB-RS232 adapter.

Web search 2026-10-08 found no independent mention of a program called FlashSimple. The H8S/2134F
is a Renesas (formerly Hitachi) H8S microcontroller, and Renesas's own tool for such parts is the
Flash Development Toolkit; whether FlashSimple is a Swiss Timing build or a renamed simplified
interface to a Renesas tool is not known (inferred possibility, unverified).

Still to research: the program's origin, the download location, and which other Swiss Timing
devices it updates.
-->

This article is a stub. FlashSimple is the PC program that Swiss Timing provides for writing new
firmware to the [Calypso WPO console](../equipment/water-polo/console/calypso-wpo-console.md)
over an RS232 cable, programming the console's Renesas H8S/2134F microcontroller in about four
minutes.

See the [software overview](index.md) for the other programs the wiki covers.

---
title: Colorado Time Systems USB Connect
description: >-
  USB Connect is the Colorado Time Systems USB coupler that links a meet-management computer
  to a Gen7 or DisplayLink computer as a serial connection.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: USB Connect
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Part number
    value: '`USB2USB`'
  - label: Type
    value: USB-to-USB serial coupler
  - label: Connection
    value: Two USB A-to-B cables, 5 m or shorter
  - label: Introduced
    value: '2020'
  - label: Source
    value: '[CTS, New Product Spotlight: USB2USB Device](https://coloradotime.com/blog/new-product-spotlight-usb2usb-device)'
---

<!--
Research notes, CTS USB Connect (USB2USB). Surfaced 2026-10-13 while building out
gen7-wired-judging.md; already mentioned without a page on gen7-serial.md and gen7-legacy.md.

Sources:
  - CTS blog, "New Product Spotlight: USB2USB Device"
    (https://coloradotime.com/blog/new-product-spotlight-usb2usb-device), read October 2026,
    undated: CTS developed it in summer 2020; it gives a serial link between two computers
    with only the device and two USB A-to-B cables of 5 m or less, in place of the usual null
    modem and gender changer setup. Uses named: meet-management computer to a DisplayLink
    computer, and meet-management computer to a Gen7 control computer for swimming and
    diving. The post links a shop page whose slug is usb-connect-device; no price was read.
  - Gen7 Serial and Gen7 Legacy datasheets (timers-consoles/cts-gen7-serial-swim-timing-gen7
    and cts-gen7-legacy-swim-timing-gen7): part USB2USB, a USB to USB coupler for the meet
    management computer to the Gen7 interface laptop.
  - CTS Diving Installation and User Guide F1022 Rev 202510: a CTS USB Connect device with two
    USB cables is one of two ways to link Gen7 Diving to meet management; the other is two
    USB-to-9-pin adapters with a null modem and gender changer. In the simultaneous-events
    setup the meet-management connection is chosen as "Serial Extender" in Gen7 Diving.
  - gen7-serial.md already describes it as simulating a null-modem serial link over USB (from
    the Gen7 Serial user guide F1034).

Naming: CTS writes USB Connect, USB-Connect and USB2USB. Still to research: price, chipset or
driver, and whether it needs a driver on either computer.
-->

This article is a stub. The Colorado Time Systems USB Connect coupler, part `USB2USB`, links a
meet-management computer to a [Gen7](gen7-serial.md) interface laptop, a
[Gen7 wired judging](../../diving/gen7-wired-judging.md) computer or a DisplayLink computer as
a serial connection over two USB cables, replacing serial adapters, a gender changer and a
null modem.

See the overview of [swim timing consoles](index.md) for the shared background that applies to
every CTS timing console.

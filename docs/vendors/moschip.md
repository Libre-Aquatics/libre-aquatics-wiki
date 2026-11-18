---
title: MosChip Semiconductor
description: >-
  MosChip Semiconductor is an Indian chip designer whose MCS7840 USB-to-four-serial-port bridge
  appears to be inside the later Trycom TRP-C08H converter.
tags:
  - Reference
---

<!--
Research notes, MosChip Semiconductor. Surfaced 2026-11-17 while building out
equipment/swimming/timers/trycom-trp-c08h.md.

Sources:
  - MosChip, MCS7840 datasheet, third-party mirror (https://elcodis.com/parts/6114923/mcs7840_p7.html),
    read through a search summary 2026-11-17: a USB 2.0 device with four 16C450/16C550-compatible
    UARTs, 512-byte on-chip FIFOs per port in each direction, serial rates from 50 bit/s to
    6 Mbit/s. Not read directly.
  - Design and Reuse, ASIX Electronics buys MosChip assets
    (https://www.design-reuse.com/news/27077/asix-moschip-assets.html), via search summary:
    ASIX Electronics of Taiwan bought MosChip Semiconductor Technology's I/O connectivity business,
    with its assets and intellectual property, in August 2011. The ASIX Wikipedia article says the
    line covered PCIe, PCI and USB bridges. Search summary only.
  - Search summaries: MosChip is a fabless company founded in 1999 with headquarters and design
    centre in Hyderabad, India. Not checked against a primary source.
  - ASIX AX78140 product page (https://www.asix.com.tw/en/product/Interface/USB_Bridge/AX78140),
    read 2026-11-17: pin-to-pin and driver compatible with the MCS7840; does not name MosChip.
  - The Linux kernel has had a mos7840 USB serial driver since the 2.6 series; NetBSD has umcs.
    Not read.
Link to the TRP-C08H is inferred: Trycom's 2014 manual installs with MSSetup.exe and MSUninst.exe,
shows "High-Speed USB Multi Serial Compound Device" in Device Manager, calls the unit
"MCSTRP-C08H" once, and lists a 512-byte FIFO, all of which match the MCS7840 and its driver.
Trycom never names the chip.
-->

This article is a stub. MosChip Semiconductor is an Indian designer of chips, including the
MCS7840 USB-to-four-serial-port bridge that the later
[Trycom TRP-C08H](../equipment/swimming/timers/trycom-trp-c08h.md) appears to use.

See the [vendors overview](index.md) for the other companies this wiki covers.

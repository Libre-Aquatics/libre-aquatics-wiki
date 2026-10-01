---
title: Colorado Time Systems 900 MHz wireless judging
description: >-
  Colorado Time Systems 900 MHz wireless judging is a set of judges' terminals and a console
  interface that send diving and artistic swimming scores to a timer or laptop without cables.
tags:
  - Equipment
  - Diving
  - Artistic swimming
  - Scoring
infoboxTitle: 900 MHz wireless judging
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Part number
    value: '`WJT-001`, `WIO-001`'
  - label: Type
    value: Wireless judging system
  - label: Connection
    value: 900 MHz radio, 31 channels; USB or CTS I/O cable to the console
  - label: Manual
    value: Wireless Judging 900 MHz Frequency User Guide (F941 Rev. 20110720)
---

<!--
Research notes, CTS 900 MHz wireless judging.

Surfaced while building out the Sky-Fi WA-1 page, because the judging system's guide reserves
the WA-1's channels.

Held and read: F941 Rev. 20110720 (c)2011, Wireless Judging 900 MHz Frequency User Guide
(sources/vendors/colorado-time-systems/accessories/cts-wireless-judging-900-mhz-frequency-user-guide-f941.txt).
The system has a WIO interface box, which is cabled to the timer or laptop, and one WJT
terminal per judge. The WIO connects by USB to a System 6 (Diving version
1.216 or later) or to a laptop running Wireless Synchro software, where the channel is chosen;
to a System 5 it connects by the standard CTS I/O cable and runs on channel 10 only. 31 channels;
1-8 are reserved for sites without the 900 MHz pace clocks or WA-1 units, which use them too. Separate events need
separate consoles or laptops, each with its own WIO, at least six channels apart. Each WJT takes
a JT ID from 1 to 99; 0 is the diving referee. Two AA cells give about 8 hours, four about 16.
The CHANGE key (request to amend a sent score) works with the System 6 and Synchro MM but not the
System 5. Both WIO and WJT contain FCC ID Q7V-3F090003X, the Linx pre-certified Wi.232DTS module;
the WIO module uses an RP-SMA antenna connector.

Other sources: CTS Wireless Synchro sheet (Revised 09/13) lists WJT-003 and WIO-003 in a
package R-8700-0159 (SYNCHRO-03), which may be a later or 2.4 GHz generation; not checked. The
CTS shop (read September 2026) sells factory-refurbished 900 MHz units, which is where the -001
part numbers come from: WJT-001 terminal, $300.00 reduced from $425.00, sold out; WIO-001
interface box, $145.00, in stock, said to pair with WJT-001 or WJT-001.S terminals. Both pages
say to buy them only to extend an existing 900 MHz diving or synchro set-up.
https://shop.coloradotime.com/products/900mhz-wireless-judging-terminal-wjt-001-s-refurbished
https://shop.coloradotime.com/products/900mhz-wireless-interface-box-for-system-5-6-timing-console-wio-001-s-refurbished

Still to research: the -003 generation and its band; dates of introduction and withdrawal;
prices; the System 6 diving software side; how this relates to the WHC-2 and SynchroMM pages
that also mention WJTs.
-->

This article is a stub. Colorado Time Systems 900 MHz wireless judging pairs handheld judging
terminals (`WJT-001`) with a wireless interface (`WIO-001`) cabled to a System 6, a System 5 or
a laptop running the CTS synchro software, and its guide keeps channels 1–8 free for sites that
use CTS wireless pace clocks or [Sky-Fi WA-1](../common/scoreboard-control/wa-1.md) adapters.

See the [diving equipment overview](index.md) for the shared background on judging and
scoring hardware.

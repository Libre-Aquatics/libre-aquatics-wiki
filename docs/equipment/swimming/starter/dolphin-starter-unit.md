---
title: Dolphin Starter Unit
description: >-
  The Colorado Time Systems Dolphin Starter Unit is a wireless start trigger
  that starts all of a Dolphin timing system's stopwatches together, by hand
  or from an electronic start system.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Dolphin Starter Unit
infobox:
  - label: Manufacturer
    value: Colorado Time Systems
  - label: Part number
    value: '`R-1004-0507`'
  - label: Type
    value: Wireless start trigger
  - label: System
    value: '[Dolphin Wireless Stopwatch Timing System](equipment/swimming/semi-automatic/dolphin.md)'
  - label: Radio
    value: '2.4 GHz, 16 channels, spread spectrum'
  - label: Connection
    value: 'Cable kits `K-DSS-1` (Infinity family, Elite) and `K-DSS-2` (Championship)'
  - label: Power
    value: '9 V battery, about 40 hours'
  - label: Introduced
    value: '2006 (with the Dolphin system)'
  - label: Status
    value: Current
  - label: Manual
    value: Dolphin Starter Quick Reference (F923)
    href: 'https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Dolphin/DolphinStarterquickref-F923.pdf'
---

The Dolphin Starter Unit is a handheld wireless start trigger made by
[Colorado Time Systems](../../../vendors/colorado-time-systems.md) (CTS) for its
[Dolphin Wireless Stopwatch Timing System](../semi-automatic/dolphin.md), in which each
lane timer holds a wireless stopwatch instead of a wired backup button.[^ctspage]
It starts every Dolphin watch on the deck at the same instant, either at the
press of its own button or on a pulse cabled from an electronic
[start system](index.md), so the watches run from the start signal rather than
from each timer's reaction to it.[^ctspage][^hytek] CTS sells the unit
separately as part `R-1004-0507`, and every complete Dolphin system package
includes one.[^shop][^datasheet] It is not itself a start system: it produces no
start tone, strobe, or public address, and at a meet it works alongside one rather
than replacing it.[^datasheet]

## Role in the timing system

The Dolphin system has three modes of operation, and the starter unit is used in
two of them. In semi-automatic timing, the starter is cabled to a CTS electronic start
system and every watch starts with the start signal, each stopping when its lane
timer stops it. In the manual synchronized mode, an official presses the starter's
button in conjunction with the whistle, again starting all watches together. In
the fully manual mode the starter is not used at all; the watches run as
independent stopwatches, and CTS's guide tells operators to leave the starter in
the case.[^datasheet][^f912]

A synchronized start with manual stops is what United States rulebooks call
semi-automatic timing: activated by the start, stopped by the lane timers.
Effective April 13, 2023, USA Swimming allows wireless systems such as the Dolphin
to serve as semi-automatic timing systems in sanctioned competition; CTS notes the
system had previously operated under a time-limited waiver.[^blog] For the fully
manual mode, CTS states the watches meet every ruling body's requirements for
backup timing, listing World Aquatics (FINA on older sheets), the NCAA, USA
Swimming, the NFHS, and the YMCA; the compliance claim is the
vendor's.[^datasheet][^ctspage]

Whichever mode is used, the watches report by radio to the Dolphin base unit on
the meet computer, and the Dolphin software passes results to a meet-management
program such as Hy-Tek Meet Manager or SwimTopia Meet Maestro. When a
[timing console](../timers/index.md) with touchpads is the primary system, the
Dolphin serves as the backup layer instead.[^f912][^hytekbackup]

## Design and hardware

The starter is a handheld unit with two buttons, Start/Stop and Reset. Holding
Reset switches it on and off; holding Reset and pressing Start/Stop enters a
two-item settings menu, in which Start/Stop changes the displayed value and Reset
advances to the next item.[^f911] The two settings are the trigger style (`TRIG`)
and the radio channel (`CHAN`), 0–15; the starter must be set to the same channel
as the base unit and the watches.[^f911][^f912]

The starter shares the system radio: 2.4 GHz, 16 channels, spread
spectrum.[^datasheet] Rather than carrying their own FCC grants, the starter,
watches, and base contain a certified radio module; the user guide lists FCC ID
`TFB-FreeStar` or `X8WBT840F`.[^f912] TFB-FreeStar is LS Research's FreeStar 2.4
GHz transmitter module, a Part 15 digital transmission system covering 2405–2480
MHz that received modular approval in August 2005, the year before the Dolphin
appeared.[^fcc]

Two hardware generations exist. CTS released updated Dolphin hardware with a new
radio module in spring 2023; those starters run v2-series firmware, while older
starters run the v1 series (v1.3.1 is the current level for older units), and v2
firmware cannot be loaded on older hardware.[^ctspage][^dlpage] Starter firmware
ships with the Dolphin software (`.DSC` files for the older generation, `.DS2` for
the newer) and is loaded wirelessly through the base unit.[^f912]

A standard 9 V battery powers the starter, as it does each watch. CTS's setup
sheet and product page rate battery life at 40 or more hours; its datasheet says
about 40 operating hours.[^f911][^ctspage][^datasheet] The Dolphin software's
signals screen shows the starter's wireless signal strength and battery level
alongside the per-watch columns, and CTS recommends replacing batteries reading
below half before a meet.[^f912] The setup sheet advises storing the unit off the
pool deck when not in use, to limit corrosion.[^f911]

CTS does not publish the starter's dimensions or weight. The physical figures on
the Dolphin datasheet (6.06 × 2.69 × 1.06 in; 6.9 oz) describe the stopwatch, not
the starter, and resellers list only a 3 lb packaged shipping
weight.[^datasheet][^poolweb]

## Operation

This section describes the starter's race workflow in the two synchronized modes.
At the start, the official either presses Start/Stop as the start signal is given
or lets the cabled start pulse fire the trigger, and every watch begins timing
together.[^datasheet][^hytek] After the last swimmer finishes, the official
presses Start/Stop and then Reset on the starter; pressing Reset makes the
Dolphin software write the race's result file for the meet-management program to
read.[^f923][^hytek][^maestro] When the starter is used, the lane
timers stop their watches but do not reset them; the starter's reset clears the
deck for the next heat, and a race can also be force-reset from the
software.[^f912]

The two patents CTS cites for the Dolphin describe the synchronization mechanism.
Both are titled "Synchronization of a plurality of devices in a wireless sensor
arrangement", name Frederick E. Frantz as inventor with a priority date of
February 27, 2006, and are assigned to Cool River Systems rather than to
CTS.[^pat876][^pat623] The patents describe a start device that establishes a
single authoritative start time when its trigger is activated and then keeps
broadcasting start messages carrying the elapsed time, so a watch that misses the
first message, or is switched on late, synchronizes from a later broadcast instead
of forcing a restart.[^pat876]

## Connection to a start system

This section covers the cabled, semi-automatic mode, where both the jack and the
trigger setting matter. For a CTS start system the starter is
set to `TRIG = CTS`; the `TRIG = NC` setting is for a start system with a normally
closed start circuit.[^f911][^f912] CTS start systems send a normally open start
pulse (the Championship's guide notes that a normally closed output requires
factory modification), which is the circuit the CTS setting expects.[^f875]

The starter connects only to a start system's timer-start output: the Start Output
jack on the Infinity family and the
[Championship Elite](championship-elite-start-system.md), or the Timer Start jack
on the [Championship](championship-start-system.md) (Champ Start). CTS warns that
connecting the starter's cable to any other jack will damage the
starter.[^f923][^f912]

CTS packages the connection as a cable-and-holster kit. `K-DSS-1` serves the
[Infinity](infinity-start-system.md) family and the Elite; its adapter cable
(`R-015-595`) runs from a locking mini BNC at the starter to a phone-plug
connector at the start system. `K-DSS-2` serves the Championship; its cable ends
in a dual banana plug (`R-025-991`). Both kits include a holster (`R-080-004`)
that mounts on a microphone clip so the starter can hang at the start
system.[^f920][^f921][^kdss1][^kdss2] On the Championship Elite, either of the two
microphone rests can be swapped for a Dolphin adapter that holds the
unit.[^f1064]

The kits have carried these names since the 2007 setup sheet, which introduced
`K-DSS-1` for the Infinity and `K-DSS-2` for the Champ Start and labeled the
start-system cable `015-571` in its system diagram; the current shop sells the
heavy-duty starter cable as `R-015-595`, and the 2022 flyer lists the kits
generically as `K-DSS-x`.[^f911r0707][^flyer22][^hdcable]

## Specifications

CTS publishes no physical specifications for the starter unit itself; the table
gives what its documents attribute to the starter and to the system radio.

| | |
|---|---|
| Part number | `R-1004-0507` |
| Type | Wireless start trigger for the Dolphin timing system |
| Radio | 2.4 GHz, 16 channels, spread spectrum (system-wide)[^datasheet] |
| Radio module | FCC ID `TFB-FreeStar` (LS Research FreeStar, 2405–2480 MHz) or `X8WBT840F`[^f912][^fcc] |
| Channel setting | `CHAN` 0–15, matched to the base unit and watches[^f911] |
| Trigger setting | `TRIG = CTS` (CTS start systems) or `TRIG = NC` (normally closed)[^f911] |
| Controls | Start/Stop and Reset buttons[^f911] |
| Battery | Standard 9 V; about 40 hours (CTS lists both "40+" and "~40")[^f911][^datasheet] |
| Firmware | v1 series on older hardware (`.DSC`), v2 series on 2023 hardware (`.DS2`)[^f912][^dlpage] |
| Dimensions and weight | Not published; the datasheet's figures are the watch's[^datasheet] |
| Shipping weight | 3.0 lb, packaged, per Poolweb[^poolweb] |

## Part numbers and accessories

- `R-1004-0507`, the starter unit, sold separately and included in every
  WTS-D-series Dolphin system package.[^shop][^datasheet]
- `K-DSS-1`, cable and holster kit for the Infinity family and Championship
  Elite; includes the `R-015-595` cable, and `R-025-992` is the replacement
  start-system connector.[^kdss1][^f920]
- `K-DSS-2`, cable and holster kit for the Championship; `R-025-991` is the
  replacement dual-banana connector.[^kdss2][^f921]
- `R-015-595`, heavy-duty starter cable, also sold on its own.[^hdcable]
- `R-080-004`, the holster included in both kits.[^kdss1]
- `R-5000-0362`, the standard Dolphin case, which stores the starter and base
  units and up to 27 stopwatches; `R-5000-0363` is the large case for up to 36
  watches. The 2007 setup sheet listed a single case,
  `R-045-011`.[^case][^f911r0707]

## See also

- [Dolphin Wireless Stopwatch Timing System](../semi-automatic/dolphin.md): the timing
  system the starter triggers
- [Start systems](index.md): the start-systems overview
- [Infinity Pro Start System](infinity-pro-start-system.md) and
  [Championship Elite Start System](championship-elite-start-system.md): the
  current CTS start systems the starter cables to
- [Colorado Time Systems](../../../vendors/colorado-time-systems.md): the
  manufacturer
- [Equipment](../../index.md): the equipment reference

## References

[^f911]: [Colorado Time Systems, Dolphin Wireless Stopwatch Timing System Set Up (F911)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Dolphin/Dolphin-F911.pdf) (Rev. 201905; part numbers, starter settings, battery, storage note).
[^f911r0707]: Colorado Time Systems, Dolphin Wireless Stopwatch Timing System Set Up (F911 Rev. 0707), the 2007 revision; kit and cable part numbers.
[^f912]: [Colorado Time Systems, Dolphin User Guide (F912)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Dolphin/Dolphinextendedinstructions-F912.pdf) (Rev. 202412, for Dolphin version 5 and later).
[^f923]: [Colorado Time Systems, Dolphin Starter Quick Reference (F923)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Dolphin/DolphinStarterquickref-F923.pdf) (Rev. 201106; jack warning; Start/Stop then Reset writes the result file).
[^f920]: [Colorado Time Systems, Dolphin Starter to Infinity Family or Elite Kit (F920)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Dolphin/Dolphin_Starter_to_Infinity%20Family_or_Elite_Kit_F920.pdf).
[^f921]: [Colorado Time Systems, Dolphin Starter to Champion Start Kit (F921)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Dolphin/Dolphin_Starter_to_Champion_Start_Kit_F921.pdf).
[^f875]: [Colorado Time Systems, Championship Start Instruction Guide (F875 Rev. 202202)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Start%20Systems/Champ_Start_User_Guide_F875.pdf).
[^f1064]: [Colorado Time Systems, Championship Elite Start System User Instructions (F1064 Rev. 202606)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Start%20Systems/Elite/Championship%20Elite%20Starter_F1064.pdf).
[^datasheet]: [Colorado Time Systems, Dolphin Wireless Stopwatch System datasheet](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Datasheets/Dolphin_2.pdf) (Rev. 10/20; modes, components, system specifications).
[^flyer22]: Colorado Time Systems, Dolphin Wireless Stopwatch System flyer (Rev. 09/22); `K-DSS-x` kit naming.
[^ctspage]: [Colorado Time Systems, Dolphin Wireless Stopwatch Swim Timing](https://coloradotime.com/products/dolphin-wireless-stopwatch-swim-timing).
[^shop]: [Colorado Time Systems, Dolphin starter unit (R-1004-0507)](https://shop.coloradotime.com/products/dolphin-starter-unit-r-1004-0507).
[^kdss1]: [Colorado Time Systems, Cable and holster kit, Dolphin Starter to Infinity Start System (K-DSS-1)](https://shop.coloradotime.com/products/dolphin-starter-to-infinity-start-system-k-dss-1) (kit contents).
[^kdss2]: [Colorado Time Systems, Cable and holster kit, Dolphin Starter to Championship Start System (K-DSS-2)](https://shop.coloradotime.com/products/dolphin-starter-to-championship-start-system-k-dss-2) (kit contents).
[^hdcable]: [Colorado Time Systems, Heavy duty starter cable for Dolphin (R-015-595)](https://shop.coloradotime.com/products/heavy-duty-starter-cable-for-dolphin-r-015-595).
[^case]: [Colorado Time Systems, Standard Dolphin Wireless Stopwatch Case](https://coloradotime.com/products/standard-dolphin-wireless-stopwatch-case) (holds the starter, base, and up to 27 stopwatches).
[^blog]: [Colorado Time Systems, Great News for Dolphin Users](https://coloradotime.com/blog/great-news-for-dolphin-users) (introduced 2006; USA Swimming semi-automatic use effective April 13, 2023).
[^dlpage]: [Colorado Time Systems, Dolphin Software Download](https://coloradotime.com/dolphindownload) (software v5.0.19; firmware levels for older and newer hardware).
[^pat876]: [US Patent 7,821,876 B2, Synchronization of a plurality of devices in a wireless sensor arrangement](https://patents.google.com/patent/US7821876B2/en) (Frederick E. Frantz; priority February 27, 2006; granted October 26, 2010).
[^pat623]: [US Patent 8,085,623 B2, Synchronization of a plurality of devices in a wireless sensor arrangement](https://patents.google.com/patent/US8085623B2/en) (continuation; granted December 27, 2011; assigned to Cool River Systems).
[^fcc]: [FCC ID TFB-FREESTAR, LS Research FreeStar transmitter module](https://fccid.io/TFB-FREESTAR) (Part 15 digital transmission system, 2405–2480 MHz; modular approval August 1, 2005).
[^hytek]: [Hy-Tek Swimming Support, Interface with CTS Dolphin](https://activenetwork.my.salesforce-sites.com/hytekswimming/article?id=kA1d000000098zr) (Start/Stop starts all watches; Reset writes the result file).
[^hytekbackup]: [Hy-Tek Swimming Support, Interface with CTS Dolphin in Backup Mode](https://activenetwork.my.salesforce-sites.com/hytekswimming/articles/en_US/Article/Interface-with-CTS-Dolphin-in-Backup-Mode) (backup mode is a separately purchased Meet Manager option).
[^maestro]: [SwimTopia, CTS Dolphin Integration Overview](https://help.swimtopia.com/hc/en-us/articles/26548799436827-CTS-Dolphin-Integration-Overview) (the starting official presses Start/Stop, then Reset, which writes the result file).
[^poolweb]: [Poolweb, Dolphin Starter Replacement (R-1004-0507)](https://www.poolweb.com/products/starter-replacement-for-dolphin-system) (3.0 lb shipping weight).

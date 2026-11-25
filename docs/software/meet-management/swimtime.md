---
title: SwimTime
description: >-
  SwimTime is the free ALGE-Timing Windows program that operates the TM-SWIM timing console and
  exchanges start lists and results with Splash, Hy-Tek and other meet-management software.
updated: 2026-11-24
tags:
  - Software
  - Timing
  - Swimming
---

<!--
Research notes, SwimTime. Stub surfaced 2026-11-04 while building out alge-tm-swim.md; built out
2026-11-24.

Read in full:
  - History file for SwimTime, V1.3.2.1 (7 February 2013) to V2.5.4.1 (7 April 2025), held. Several
    entries are out of date order or share a date; dates are as printed.
  - Swimming Timing System manual E24-08-29, chapters 3 and 4, with the screens read as page images.
    The menu screens show SwimTime V1.9.3.1 (March 2019), so the manual is older than its 2024 date
    suggests.
  - English help file from the installer SetupSwimTime.exe (42,431,152 bytes, server date 8 April 2025).
    The installer is Inno Setup 6.3; its data was decompressed and the eight help files unpacked without
    running the program. English, German, Italian, Norwegian, Spanish, Finnish, French, Russian. Only
    the English and the German introduction were read. Held as alge-swimtime-help-en-v2.5.4.1.txt.
  - Splash Meet Manager quick start (June 2025); Swim Wiki page; 2013, 2017 and 2026 catalogues; ALGE's
    TM-SWIM and swimming pages; two archived 2007 pages on the TM-SWIM.

Discrepancies, flagged in the text: take manual automatic (manual: deviation from a preset; help: no
pad time at all); Splash exchange folder; Windows versions; terminals needed for two-edge timing (SWT2
in one topic of the help, SWT3 in another); the 400-touch limit, which the log puts in October 2016
and repeats in May 2022.

Not used: the list of registry keys beyond the few in the text; the simulator; the log file and support
routine; serial cables 904-02, 067-02 and 068-02 for Splash, which the help calls deprecated. ALGE's
downloads page also offers an Install-Manager in older notes; not found on the 2026 page.

Other programs named SwimTime exist (a GitHub project, phone apps); none was read and none is
related as far as is known. software.informer lists an early release numbered 0.8; the page refused
the request, so it is not used.

Not established: first release and its date (the Splash interface of April 2010 is the earliest fixed
point), who wrote it, independent accounts of use at meets. No review or federation document naming it
was found beyond Splash's own pages.
-->

SwimTime is the Windows program from [ALGE-Timing](../../vendors/alge-timing.md) that operates the
[TM-SWIM](../../equipment/swimming/timers/alge-tm-swim.md) swim timing console. It shows the lanes and
times, holds the event list, and passes results to meet-management software, while the console does
the timing.[^cat2013][^help] ALGE distributes it as freeware.[^help]

## Naming and versions

ALGE changed the version scheme in February 2013. The numbers now stand for the year, the month and the
version within the month, so 2.5.4.1 is a release of April 2025. It is the current release as of
November 2026.[^log][^product] The published history file begins with that change, and earlier
versions are not listed.[^log]

The program comes in ten languages: Dutch, English, Finnish, French, German, Hungarian, Italian,
Norwegian, Russian and Spanish.[^product] There are help files in all of these except Dutch and
Hungarian.[^help]

## History

ALGE's earlier [SWIM 2000](../../equipment/swimming/timers/alge-swim-2000.md) system had its own
[software package](alge-swim-manager.md). The TM-SWIM, on ALGE's website by December 2007, replaced that
system's [SWC](../../equipment/swimming/timers/alge-swc.md) controller.[^tm2007] According to its help file,
SwimTime was made for both controllers; with an SWC the user has to choose the serial port.[^help]
Its first release is not documented. Splash Software added a SwimTime interface to its meet manager in
April 2010, and reaction times to that interface a month later.[^splashrel]

The history file records these additions:[^log]

| Date | Version | Addition |
|---|---|---|
| June 2013 | 1.3.6.1 | Omega Calypso display boards |
| December 2014 | 1.4.12.1 | Colorado display boards |
| June 2015 | 1.5.6.1 | Starts from the turn end for events such as 150 m |
| September 2017 | 1.7.9.1 | Check for new versions |
| September 2018 | 1.8.9.2 | Timy timers over USB |
| November 2018 | 1.8.11.2 | Automatic use of manual times |
| May 2022 | 2.2.5.1 | 1650 m event; distances up to 25 km |
| March 2023 | 2.3.3.1 | Time-trial rounds from Lenex |
| February 2025 | 2.5.2.1 | Team points for the United States; touchpad failure warning |
| March 2025 | 2.5.3.1 | Record lists; non-binary athletes |
| April 2025 | 2.5.4.1 | Hy-Tek record files |

## Role in the timing system

The race runs in the console. ALGE's 2013 and 2017 catalogues say that once the events are loaded the
computer is needed only to follow and control the race. They also describe timing on one computer and
meet management on others.[^cat2013][^cat2017] The help file gives the capacity as 32
lanes timed at one end or 16 at both, depending on the console's firmware.[^help] The [TM-SWIM](../../equipment/swimming/timers/alge-tm-swim.md) article covers the console
and its lane equipment.

SwimTime can also run without any meet-management program. The operator then types in the events and
heats, and names are optional.[^help]

## Requirements and installation

The product page lists Windows 7 to 11. The help file installed with the same version still lists
Windows XP, 2003 and Vista as well. The help also reports that the program ran under Wine on Linux with
a serial connection, without support.[^product][^help]

ALGE's manual has the software installed before the console is first connected, so that the USB driver
is in place.[^manual] The help warns that a firewall must not block the program, because it talks to
the meet computer and to network displays.[^help]

## Meets and events

A SwimTime database holds one or more meets. Each meet is divided into sessions, events and heats, and the
session carries the pool length, which must agree with the hardware settings.[^help] ALGE recommends
a new database for every competition.[^manual] The records dialog holds three lists, chosen by the
user, and records can be read from Splash, from Lenex files or from Hy-Tek `.rec` files.[^help][^log]

The history file limits a race to 400 touches, a figure first recorded in October 2016 and repeated
in May 2022.[^log]

## Running a heat

Each lane is drawn in the order of the pool, with its time, touches and manual time. A click turns a
lane on or off, and a menu on the lane edits the swimmer, the touch count, the status or the
times.[^help] The status may be OK, DSQ, DNF or DNS. A manual time can be put in place of the touchpad
time, and the change reversed.[^help] Edited times carry a source code that shows whether they came
from a touchpad, a button, a starting block, the start, or a correction.[^help]

Warnings come from two checks. A manual time turns red when it differs too much from the touchpad time,
and a touch warning appears when a manual time has no pad time or when a lap takes about twice as long as
the one before.[^help] The operator ends the heat with End Heat, which can also send the results. A
registry setting ends it automatically when the last swimmer finishes; ALGE leaves this off and warns
that it leaves no time for changes.[^help]

## Timing settings

Times are computed at 1/10,000 s and cut to the output precision, which is 1/100 s as supplied.[^help][^manual]
The limit times block touchpads after the start and after a touch, and a separate value sets how early a
relay swimmer may leave.[^help] The
[TM-SWIM article](../../equipment/swimming/timers/alge-tm-swim.md#software-and-operation) lists the block
times and warning values.

Descriptions of the Take manual automatic option disagree. The manual says it uses the button time if the
two times differ by more than a preset value, 0.500 s. The help says it fills in a missing
touchpad time, with the preset as a waiting period, and that it does not work while a lap warning is
showing. The option is off by default.[^manual][^help]

Two-edge timing uses the press of a pad for the time and its release for statistics. One topic in the
help requires SWT2 terminals for it and another requires the
[SWT3](../../equipment/swimming/deck-cabling/alge-swt3.md).[^help]

## Displays and video

Numeric ALGE boards connect to the console, and SwimTime offers seven display modes for them, by lane or by
rank. It can also show reaction and relay times, and team points for American college
meets.[^help] An intermission dialog shows a result, the time of day or chosen text between races. For a
victory ceremony it can show the first three only.[^help]

Boards from other makers connect to the PC by serial adapter: Omega
[Calypso](../../equipment/common/scoreboard/calypso.md) boards through USB-RS485 and Colorado boards
through USB-RS232.[^manual] The [D-RTNM](../../equipment/common/scoreboard/alge-d-rtnm.md)
matrix boards are reached by network address, in three sizes.[^help]

A network display output sends the running data to one computer or to the whole network.
[PC Display Multisport](../display/pc-display-multisport.md), ALGE's program for video walls, uses
it.[^help] [IDCam](../../equipment/common/photo-finish/alge-idcam.md) video units are set up in the same
dialog, up to 32 of them, each covering one or more lanes.[^help]

## Meet-management software

The help lists five compatible programs: [Splash Meet Manager](splash-meet-manager.md),
[SPORTSYSTEMS](sportsystems.md), [WinGrodan](swimify.md), [Hy-Tek Meet Manager](hy-tek-meet-manager.md)
and Euroconsult [Orpheus](orpheus.md).[^help] [EasyWk](easywk.md) also has an ALGE
interface.[^easywk]

### Splash and Lenex

SwimTime and Splash exchange text files, `splash_send.txt` and `splash_receive.txt`, in a shared
folder.[^splashwiki] The Swim Wiki places the files beside `SwimTime.exe`. ALGE's manual shows a folder
under the public documents, and its help recommends leaving the folder on the timing computer so that
timing can go on if the network fails.[^splashwiki][^manual][^help] The options import
new data from Splash and send a heat's status at End Heat.[^help] SPORTSYSTEMS 5.3 and later uses
the same folder.[^help]

[Lenex](../file-formats/lenex.md) files can be imported. Version 3.0 is fully supported and 2.0 in part. The help says
Lenex export has not been built.[^help]

### Hy-Tek

Hy-Tek data arrives in two files: the event schedule, `generic.sch`, and then the scoreboard start list,
`startlist.slx`, which needs Hy-Tek's scoreboard license. The schedule has no names and no heat
counts.[^help] SwimTime writes a result file for each heat, by hand or at every End Heat. The Standard
format serves pools of up to 10 lanes, and Format version 2 is for larger ones.[^help] The
[generic network file sharing](../file-formats/generic-network-file-sharing.md) article covers the Hy-Tek side.

### WinGrodan

A WinGrodan start list in text form can be imported, and WinGrodan can also be wired to the
console.[^help] Its maker has since renamed the program [Swimify](swimify.md).[^swimify]

## Timy support

Since September 2018 SwimTime has read a [Timy](../../equipment/swimming/timers/alge-timy.md) over USB,
in the Timy's PC Timer, Backup, Tracktimer and SwimTrainer programs.[^log] This works only in automatic
mode. SwimTime sets the Timy's start number from the event and heat, two digits each, except in
SwimTrainer.[^log]

## Printing

Results go to the console's log printer or to a Windows printer. The menu prints the current heat on the
log printer, the whole event, or a protocol of the heat with statistics.[^help][^manual] The report
layouts can be edited, which the help says ALGE does not support.[^help]

## Licensing and availability

SwimTime is free to download from ALGE's website, and it is also supplied on a USB stick with the
system.[^product][^manual] The 2013 catalogue offered ten years of free updates and the 2017 and 2026
ones offer free updates without a term.[^cat2013][^cat2017][^cat2026] The help menu also installs new
firmware on the console, with different files for the SWC and the TM-SWIM.[^help]

## See also

- [ALGE SWIM-Manager](alge-swim-manager.md): the software of the earlier SWIM 2000 system
- [PC Display Multisport](../display/pc-display-multisport.md): ALGE's video-wall software
- [TM-SWIM](../../equipment/swimming/timers/alge-tm-swim.md): the console it operates
- [Splash Meet Manager](splash-meet-manager.md) and [Hy-Tek Meet Manager](hy-tek-meet-manager.md): meet-management programs it exchanges data with
- [SST timing software](../timing/sst-timing-software.md): another maker's timing program
- [Software](../index.md): the software overview
- [ALGE-Timing](../../vendors/alge-timing.md): the publisher

## References

[^log]: [ALGE-Timing, History file for SwimTime](https://alge-timing.com/alge/download/software/Change_SwimTime.txt) (versions 1.3.2.1 to 2.5.4.1, 2013–2025).
[^help]: ALGE-Timing, SwimTime help (English help file installed with version 2.5.4.1, April 2025).
[^product]: [ALGE-Timing, TM-SWIM TimeManager](https://alge-timing.com/en/product/2000/tm-swim) (product page with downloads, as of November 2026).
[^manual]: [ALGE-Timing, Swimming Timing System Manual](https://alge-timing.com/downloads/userGuides/Swimming-BE.pdf) (Version E24-08-29), 3 and 4.
[^cat2013]: [ALGE-Timing, The Specialist for Swimming](https://www.freker.se/dokument/ALGE%20Swimming-KE-1.PDF) (catalogue V1.113, 2013), pp. 6–7.
[^cat2017]: ALGE-Timing, General catalogue (2017), pp. 95–97.
[^cat2026]: [ALGE-Timing, Aquatic Sports](https://alge-timing.com/downloads/leaflets/Swimming_KE.pdf) (catalogue, June 2026), p. 7.
[^tm2007]: [ALGE-Timing, TimeManager TM-SWIM](https://web.archive.org/web/20071219154804/http://www.alge-timing.com:80/alge/SWIM-TM-SWIM-E.html) (archived December 2007).
[^splashrel]: [Splash Software, Release notes](https://web.archive.org/web/20100623045701/http://www.splash-software.ch/index.php?nav=,home,C) (builds 7735 and 8195; archived June 2010).
[^splashwiki]: [Swim Wiki, Meet Manager: Timing System ALGE SwimTime](https://wiki.swimrankings.net/index.php/Meet_Manager:Timing_System_ALGE_SwimTime).
[^easywk]: [EasyWk, EasyWk](https://www.easywk.de/easywk.php) (product page, in German).
[^swimify]: [Swimify, Transition from LiveTiming.se to Swimify.com](https://support.swimify.com/sv/kb/articles/transition-from-livetimingse-to-swimifycom).

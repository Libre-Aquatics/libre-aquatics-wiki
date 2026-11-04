---
title: SST timing software
description: >-
  SST is laptop timing software from Superior Swim Timing that works with a USB timing box
  in place of a dedicated swim timing console.
updated: 2026-11-03
tags:
  - Software
  - Timing
  - Swimming
---

<!--
Research notes, SST timing software. Written 2026-11-03.

Primary sources, all held under sources/vendors/superior-swim-timing/software/ and read in full:
- SST Operation Manual, current edition (90 pp). Linked from the SST knowledge base as
  SUPERIOR-SWIM-TIMING-v2.pdf in the 2026/09 upload folder. The PDF metadata gives a creation
  date of 1 July 2026. The document itself has no date, version or revision number. "v2" comes
  from the file name only and is not known to be a software version.
- SST Operation Manual 2019 (47 pp). Hosted in the 2020/01 upload folder as
  SSTPIManual 8-2019.pdf. PDF metadata gives 21 November 2019. It has the only list of Version 7
  changes, the TouchPad setup, and the wireless stopwatch section.

- A 50-page build of the same 2019 manual, linked from the St. Johns Summer Swim League guides
  page as "SST v7.9.4 (latest) manual" (still so labelled in the 24 June 2024 capture). Page 1 and
  the file's internal name match the 2019 edition, and PDF metadata gives 17 September 2019. The
  document never states 7.9.4; that number is the league's label. It is the 2019 text plus an
  Appendix A on virtual COM ports, using HW VSP3 and port 23000, which the 47-page hosted copy lacks.

Archived SST pages, Wayback Machine, text saved under
sources/vendors/superior-swim-timing/website-archive/: home May 2012; software, pad interface,
pricing and company pages December 2013; software, features, pricing, about and client pages 2014;
news and FAQ 2017. The archive rate-limited bulk requests on 2026-11-03, so pages were taken slowly.

Vendor web pages read 2026-11-03: home, timing-software, features, mobile-scoreboard, demo,
screenshots, pad-interface, technical-specs (the table is an image and was not read),
sst-appserver, pricing, news-events, client-list, contact-us, and the knowledge base (/faq).

Independent or third party:
- Active Network, Timing Console Interface Vendor Contacts: lists SST among vendors connecting
  to Meet Manager for Swimming 5.0. It is the only source here not published by SST or a seller.
- Active Network, Interface Using Generic Network File Sharing: names SST Timing, read directly.
- St. Johns Summer Swim League user guides: a league running meets on SST and Meet Manager.
- Swimcloud support, Connecting Swimcloud Meet to Superior Swim Timing. The site returns 403 to
  direct requests, so this was read only through search summaries.
- Swimnerd listings at swimpractice.com. A reseller, not independent.
- Apple App Store listings for SST Stopwatch (id1035125066) and SST Scoreboard (id6778537530),
  and Google Play listings for both, read 2026-11-03.
- SST shop product feed (shop.superiorswimtiming.com), read 2026-11-03.
- A SwimTopia search found no SST support in Meet Maestro, and the Swimrankings wiki has no SST
  page for Splash. Absence only: neither is a statement that the programs do not connect.

Discrepancies between sources:
- Serial emulation: the 2019 manual and knowledge base accept Colorado 5 or 6; the current manual
  says Colorado 6 only. The 2019 manual also had a networked virtual COM port on port 23000,
  which the current manual omits.
- The knowledge base sends readers to "Appendix A" of the manual for the serial interface. That
  is the virtual COM port appendix of the 2019 build; in the current manual Addendum A is legacy
  hardware. So this knowledge base entry predates the current manual.
- Fallback results location: current manual p. 17 gives AppData\Local\SST\logs, its
  troubleshooting section gives Documents\SST\logs, the knowledge base gives Documents/SST timer.
- F ARM recovery window: current manual 8 seconds, configurable; 2019 manual 10 seconds; knowledge
  base about 10 seconds.
- Finish lane colors: features page lists yellow/cyan for a pad and backup difference; both
  manuals list blue and yellow with a 0.3 s threshold, and no cyan. The same wording is on the 2013
  site, where it was said to match Meet Manager's colors, so the features page is a holdover.
- Projector output: features page says VGA or HDMI; current manual requires HDMI.
- QR code menu: current manual Tools > QR Codes; 2019 manual and knowledge base Help > QR Codes,
  so the knowledge base appears to follow the older layout.
- Rules basis for passing times: 2019 manual USA Swimming only; current manual adds World Aquatics.
- Pace Clock ad files: 2019 manual JPEG, MPG and PowerPoint; current manual JPEG, BMP and PNG.
- No-hardware mode is Training Mode in the manual's main text, Demonstration Mode in its
  troubleshooting list, and demo mode on the website and knowledge base.
- TouchPad: the website and knowledge base still name it. The current manual drops the 2019
  TouchPad setup section and names SwimCloud instead. Whether TouchPad still works is unverified.
- Timer price: a search summary quoted $1,999 for the console; the pricing page as fetched says
  $1,850 and $2,499, matching Swimnerd and the shop feed.
- Cloud Relay price: $19.99 on the App Server page, $19.95 in the shop feed.
- Omega: the timer page says Omega pads and buttons work; no manual covers it.

Found in the current manual and absent from the 2019 one: SST Gateway, scoreboard server and
Addendum B, Portrait layout, Multiple Displays, the 0.15 s button adjustment, DisplayLink+ and
Daktronics RTD scoreboard types. Found in 2019 and absent now: TouchPad setup, the wireless
stopwatch section (the current manual still mentions a wireless watch under time adjustments),
and the Mac OS X and Ubuntu testing statement.

Not verified or not found:
- The current release number. Trail so far: 3.8.7 (December 2013), 4.0 (August 2014), console
  revision 5.12.4 cited by the app in June 2016, Version 7 (April 2018), 7.9.4 (attached by a
  league to a September 2019 manual). Nothing later found. The version line left the software
  page by September 2015, and later captures have none.
- SST Stopwatch 1.1.0 (June 2016) refers to console revisions 5.12.4 and above, which implies
  5.x numbering by 2016. Dates of versions 1 through 3 and 6 are unknown.
- The installer at softwareupdate.ssttiming.com/Setup.exe returned 404 to a HEAD request.
  SSTGateway.exe returned 200 with a Last-Modified of 20 September 2026, about 39.9 MB.
- Current licence terms. The shop says a console includes the software. The 2013 site included
  one year of updates and sold a facility licence; no current page says if either still applies.
- Pete Santilli's role: see the vendor page. Searches found no patent assigned to SST.
- No independent review or press article was found. School board minutes, Uruguayan coverage of
  the 2016 meet, and trademark searches all came up empty. SwimSwam carries a Swimnerd Live piece
  naming SST, but answers automated fetches with HTTP 402, so only its search snippet was seen.
  The testimonials on the Swimnerd bundle listing are seller-published and are not used.
- Whether the +/-2 PPM clock figure still applies. It appears on the 2013 site only.
- Whether any governing body has accepted SST for record purposes was not found.
-->

SST is a timing program from [Superior Swim Timing](../vendors/superior-swim-timing.md) that
runs on a laptop and does the job of a swim [timing console](../equipment/swimming/timers/index.md).
The program provides the operator screen, the scoreboard outputs and the link to
meet-management software, while a small USB box, the
[SST timer](../equipment/swimming/timers/sst-timer.md), takes in the signals from the deck and
measures the times.[^software][^timer] The system handles up to ten lanes with a touchpad, up to
three buttons per lane, or both.[^software] The company presents it as a lower-cost option than
the "big box" consoles and says it was created because customers found Colorado Time Systems
and Daktronics equipment too complicated for parent volunteers.[^sst][^about]

## Naming and versions

Superior Swim Timing uses SST for both the company and the program. Its website calls the
product timing software, and the manual calls the program the SST Timing Console or SST
Console. The Windows start menu entry is SST Timer.[^manual]

Archived copies of the company's website show version 3.8.7 as current in December 2013 and 4.0
in August 2014.[^sw2013][^sw2014] A 2016 update to the SST Stopwatch app refers to console revision
5.12.4.[^apple] The company announced Version 7 on April 17, 2018.[^news] The 2019 manual lists its
changes, among them:[^manual19]

- changing the event or heat after a race has started
- a USE button for backup times
- a purple lane color for missing pad times
- lane numbering that can start from 0
- team scores on the serial scoreboard
- access to the configuration window during a race

A Florida swim league labels a September 2019 build of that manual as version 7.9.4, the highest
number found.[^stjohns] The current manual gives no version number or date. SST's news page records
no software release after 2018.[^news]

The two manuals show how the program has changed since 2019. The current edition adds the
[SST Gateway](sst-gateway.md), a network scoreboard server, a portrait projection layout, up to
four projection displays, and scoreboard types for
[DisplayLink Plus](displaylink-plus.md) and Daktronics RTD.[^manual] It no longer carries the
2019 setup section for TeamUnify TouchPad or the section on wireless stopwatches.[^manual][^manual19]

## History

The earliest archived copy of the company's website, from May 2012, offers the system as the SST-PI
for $999, with a demo available and the software for both serial and projection boards in the price. It describes
the product as a replacement for old Colorado consoles and says it was "made in Colorado".[^home2012]
At that stage the timer was built into a cable rather than a box, and the company also called it the
SST Pad Interface.[^pad2013] Plugged into the pass-through port of a Colorado 5 or 6 console, it could back up that console
and drive a projection board from the same signals.[^pad2013]

The 2013 site reported testing with Meet Manager versions 2, 3 and 4 through the generic file
interface. Single-line scoreboards had partial support, and wireless stopwatches and projection
advertising were still in development.[^sw2013] By the end of 2014 the features page added
TouchPad, pads and buttons at both ends of the pool, and Test Mode.[^features2014] A spectator web
scoreboard was on the site by November 2015, and Daktronics timing cables were on the price list
from 2013.[^mobile2015][^pricing2013]

## Design and requirements

Timing happens in the box and not in the computer. The SST timer has its own timing chip and
microcontroller, so the speed of the laptop and whatever else it is running have no effect on
the times, and the computer clock is not used.[^timer][^faq] The 2013 site gave the reference
as accurate to ±2 parts per million, aging by 1 part per million a year; the current site quotes
no figure.[^pad2013] The original hardware had 44 inputs that software could assign, two of them
for the start and backup start.[^home2012] The box takes its power from the
laptop's USB port, drawing 7 mA typically and up to 500 mA at 5 V, and appears to the computer
as a virtual serial port.[^manual] SST recommends a laptop so that the battery carries the timer
through a power cut.[^manual] The exception is the Daktronics-compatible box, which needs an SST
power supply to feed the deck cable.[^manual]

The program is written in Java.[^software] The 2013 site reported testing on Windows XP, 7 and a beta of 8, on Mac OS X and on Ubuntu Linux,
and the 2019 manual on Windows 7 through 10, Mac OS X and Ubuntu.[^sw2013][^manual19] The current manual names Windows 11 as the
preferred system, and the knowledge base recommends a dual-core 64-bit processor with Windows 10
or 11.[^manual][^faq] Minimum memory is 1 GB, with 2 GB recommended, and the program takes 360 MB
of disk space.[^manual] The knowledge base advises plugging the timer directly into the computer
rather than through a USB hub, and turning off USB power saving, which it names as the usual
cause of the program ceasing to respond during a meet.[^faq]

Started without a timer attached, the program opens in a practice mode that simulates starts,
pad touches and button presses. The manual calls this Training Mode in one place and Demonstration
Mode in another, and the website calls it a demo.[^manual][^demo]

## Connection to meet-management software

SST does not manage entries, seeding or scoring. It takes an event schedule from a meet program
and returns a results file for each race. The manual is written around
[Hy-Tek Meet Manager](hy-tek-meet-manager.md), which needs the paid Timing Console Interface
add-on from Active/Hy-Tek.[^manual] The Active Network lists SST among the vendors that connect through that interface, and its
article on generic network file sharing names SST Timing alongside IST, Take Your Mark and ALGE
Timy.[^hytek][^gnet]

The manual recommends running SST and the meet program on separate computers, so that one person
can watch the pool while another resolves timing problems and enters disqualifications.[^manual]
It describes three ways to link them:

- [Generic network file sharing](generic-network-file-sharing.md). The meet program writes a
  `generic.sch` event schedule to a folder that both computers can reach, and SST writes its
  results there for Meet Manager to import.[^manual]
- Serial emulation. SST presents itself as a Colorado console over a USB null modem cable or,
  in the 2019 manual, a virtual serial port on network port 23000 using a program such as
  [HW VSP3](hw-vsp3.md).
  The current manual selects the Colorado 6 interface, while the 2019 manual and the knowledge
  base accept Colorado 5 or 6.[^manual][^manual19][^faq]
- The [SST Gateway](sst-gateway.md), a service on the meet computer that moves the same text
  files over the network without a shared folder.[^manual]

Swimmer names and heat counts come from a separate export. SST reads the Start Lists for CTS
scoreboard files that the base Meet Manager produces, or the `startlist.slx` file from the Alpha
Scoreboard option. The manual prefers the scoreboard files, because SST picks up changes when
they are recreated.[^manual] With either file, SST can move through heats and events by itself.
Without one, it knows only the events. A built-in Event Manager can also create a schedule without
a meet program.[^manual]

Other programs can use the file or serial routes. [TeamUnify](teamunify.md)'s
[TouchPad](teamunify-touchpad.md) had a Superior Swim Timing timer setting and a setup section in
the 2019 manual, and SST's website still names it, although the current manual does not.[^manual19][^software]
The current manual names SwimCloud instead, and Swimcloud's
[meet program](swimcloud-meet.md) has its own SST option that uses the same schedule
file in a shared folder.[^manual][^swimcloud]

SST recommends a separate folder for each meet and keeping results on the SST computer. If the
network fails, the race files stay on that computer and can be moved later, by USB stick if
necessary, and the meet can continue.[^manual] When results were going to the meet computer, the
fallback location differs by source: the manual gives two folders and the knowledge base a
third.[^manual][^faq]

## Deck equipment

The timer accepts SST and Colorado harnesses, with the same connector as Colorado's, and
works with Colorado pads and buttons.[^faq] SST also says it works with Omega pads and
buttons.[^timer] The Daktronics-compatible box adds near and far Daktronics harness connections
and a start input. Daktronics touchpads can also be run on an
[SST lane harness](../equipment/swimming/deck-cabling/sst-lane-harness.md), set lane by lane, so a
pool can change pads gradually.[^manual][^faq]

The Lane tab of the configuration sets the lanes in use, the first lane number, the course and
the function of each harness. A harness can serve the near or far end. Its prime input can take a
pad or a button, and its backup input a [button](../equipment/swimming/semi-automatic/pushbutton/sst.md)
or a [relay take-off platform](../equipment/swimming/relay-judging/index.md). Each pool lane can
be mapped to any position on the cable, or the lanes reversed, to fit how the harness was laid
out.[^manual]

## Running a race

The operator works from a console screen that resizes to the number of lanes.[^features] Most of
the meet can run without input. When a start arrives the clock runs, and after the last swimmer
finishes SST closes the race, 8 seconds later by default, writes the results file and moves to the
next heat.[^manual] Optional settings cover the common exceptions:[^manual]

- Auto Lane Disable turns off a lane with no pad hits once another lane has two.
- Auto Lane Arm turns a disabled lane back on if a touch arrives.
- Startlist Lane Disable turns off lanes with nobody entered.
- Don't run 25's advances the schedule without timing, for one-length races hand-timed at the far end.
- DQ Enable adds a disqualify button that sends a flag to the meet program and sets the place to 0.

Each lane also has manual controls. The operator can add or subtract a touch, arm a pad early, or
use F ARM to make the next touch the finish, which also reopens a lane finished by mistake. The
manual allows 8 seconds for that by default, and the knowledge base says about 10.[^manual][^faq]
If a race has not closed when the next start arrives, an Unexpected Start window appears. The
operator can ignore it, as when a horn is used to signal a bell lap, or finish the old race. SST
tracks both races in the meantime, so the new start is kept.[^manual]

Lane colors show status. Gray means delayed or off, green armed, orange a touch expected but not
received, and purple no pad touch. A finished lane is white when pad and button agree within 0.3
seconds. Past that margin it turns blue if the pad time was the quicker of the two and yellow if
the button time was.[^manual] The features page on the website gives a different scheme, with red for a touched pad and
yellow or cyan for a mismatch.[^features] That wording appears on the 2013 site, where the yellow
and cyan were chosen to match Meet Manager's colors, and both manuals differ from it.[^sw2013]

A Test Mode shows deck signals on the screen without recording a race. It also shows them on the
projection scoreboard, so that one person can walk the lanes and check them alone.[^manual]

## Times sent to the meet program

SST says it applies USA Swimming and World Aquatics rules when deciding what to send.[^manual] The
logic depends on the equipment in use:

| Equipment | Time sent as the finals time | Other times sent |
|---|---|---|
| Pad and buttons | The pad time | All button times |
| Two buttons | The average, if the buttons are within 0.3 seconds; otherwise none | Both button times |
| Three buttons, two identical | The matching time | All three button times |
| Three buttons, none identical | The median, if the spread is under 0.3 seconds; otherwise none | All three button times |

The console and scoreboard always show a time, using the same methods without the 0.3-second limit.
The manual states that these are unofficial and that the meet's administrative official
determines the official time after import.[^manual]

Two settings change this. Allow Time Adjustments lets the operator replace a time with a backup
or manual value, for the scoreboard alone or for the meet program as well, and the manual notes
that not every organization permits it. A separate option subtracts 0.15 seconds from button
times to offset human reaction, which the manual says USA Swimming and World Aquatics do not
allow.[^manual]

SST also saves an HTML page of each race beside the results file, and a statistics page when it
closes. It can print a summary of each race to the Windows default printer.[^manual]

## Scoreboards

SST has four display outputs. The company says the serial, projection and mobile scoreboard
software all come with the timer.[^timer]

### Serial scoreboards

The manual lists Colorado serial LED, DisplayLink Plus, Daktronics RTD for the
OmniSport 2000, and Daktronics serial multi-drop as scoreboard types. Output follows the Colorado
scoreboard layout, and channels can be reassigned, so a spare lane board can show the order of
finish. The Daktronics RTD type can also run over UDP or TCP.[^manual] Current boxes have a
scoreboard connector built in, and earlier ones use an
[SST scoreboard adapter](../equipment/common/scoreboard-control/sst-scoreboard-adapter.md) that
appears as its own serial port.[^manual]

### Projection scoreboard

A second screen, which can be a monitor, a projector or an LED video wall,
shows names, times and splits. The laptop must run it as a separate display and not a mirror.
Five layouts are offered: Scrolling, Hi-Resolution, Lo-Resolution for LED walls with few pixels,
Portrait for narrow boards, and Pace Clock, which can also show a slideshow of sponsor images. Up
to four displays can be configured separately.[^manual]

### Mobile scoreboard

SST serves a web page at port 8000 of the SST computer. Spectators join a
local wireless network and open the page, usually from a QR code that the program generates, so
no app or internet connection is needed.[^manual][^mobile]

### Scoreboard server

This optional service announces itself by UDP broadcast, by default on port
53535 every five seconds, and accepts TCP connections on port 53536. It then sends JSON messages
for the pool setup, race start, running clock, start list, touches, reaction times, false starts,
results and team scores. The manual documents the fields in an addendum for developers.[^manual]
The separate [SST App Server](sst-app-server.md) feeds the
[SST Scoreboard App](sst-scoreboard-app.md), and its paid [Cloud Relay](sst-cloud-relay.md) add-on
carries that feed over the internet.[^appserver] The app was released for iOS on September 4, 2026
and is also on Google Play. Its listing says the server can take results from Colorado and Daktronics
consoles as well as SST.[^scoreapp][^scoreplay]

### Other outputs

Swimnerd lists [Swimnerd Live](swimnerd-live.md) among the scoreboards SST works with, and Swimcloud describes an optional adapter of its own on
the serial output.[^swimnerdsw][^swimcloud]

## Wireless stopwatches

The [SST Stopwatch](sst-stopwatch.md) app turns a phone into a lane watch connected to the
console over Wi-Fi. The 2019 manual describes both a manual time and a time started by the console's
start signal, for use as backup times.[^manual19] The app is on the App Store and Google Play, and its App Store listing says it does not work with
other makers' timing systems.[^apple][^stopplay] The current manual mentions a wireless watch only as one
source for an adjusted time.[^manual]

## Pricing and availability

As of 2026, SST sells the timing console, meaning the box, its case and the software, at $1,850
for SST and Colorado harnesses and $2,499 with Daktronics support. Harnesses, buttons and start
equipment are priced separately.[^pricing][^shop] In 2014 the same entry point, then a single timing
cable with the software, cost $999, and a six-lane harness $400 against $950 now.[^pricing2014] Swimnerd resells the system at the same prices and
offers bundles with a laptop and the [Atlantis](../equipment/swimming/starter/atlantis.md)
starter.[^swimnerdsw][^bundle] The software can be downloaded after filling in a form and runs
without a timer in its demo mode.[^demo]

Hardware carries a 12-month warranty and cables and adapters 90 days. For software, the seller
promises reasonable efforts to correct reproducible faults.[^manual]

## Adoption

SST's partial client list names 48 organizations, among them schools, clubs, YMCAs and national
federations in Uruguay, Peru and Zambia, with the largest group in Florida.[^clients] The company
reports timing the 2016 South American Masters Championship in Maldonado, Uruguay.[^news] These are the company's own statements. Its 2013 list named 12 users, in Colorado, Florida,
Illinois, Michigan and South Africa.[^company2013] Outside the company's own material, the St. Johns
Summer Swim League in Florida publishes guides for running meets with SST beside Meet
Manager.[^stjohns]

## See also

- [SST timer](../equipment/swimming/timers/sst-timer.md): the USB timing box the software depends on
- [SST Gateway](sst-gateway.md): the file-transfer service for the meet computer
- [SST App Server](sst-app-server.md): the program that feeds phones and tablets
- [SST Stopwatch](sst-stopwatch.md): the wireless lane timer app
- [TIMEWARE3](timeware3.md): laptop timing software from International Sports Timing
- [Timers](../equipment/swimming/timers/index.md): the timing-console overview
- [Hy-Tek Meet Manager](hy-tek-meet-manager.md): the meet program the manual is written around
- [Superior Swim Timing](../vendors/superior-swim-timing.md): the manufacturer
- [Software](index.md): the software overview

## References

[^manual]: [Superior Swim Timing, SST Operation Manual](https://superiorswimtiming.com/wp-content/uploads/2026/09/SUPERIOR-SWIM-TIMING-v2.pdf) (current edition, undated).
[^manual19]: [Superior Swim Timing, 2019 SST Operation Manual](https://superiorswimtiming.com/wp-content/uploads/2020/01/SSTPIManual%208-2019.pdf).
[^software]: [Superior Swim Timing, Timing Software](https://superiorswimtiming.com/timing-software/).
[^features]: [Superior Swim Timing, Features](https://superiorswimtiming.com/timing-software/features/).
[^timer]: [Superior Swim Timing, SST Timer](https://superiorswimtiming.com/pad-interface/).
[^sst]: [Superior Swim Timing](https://superiorswimtiming.com/) (home page; "big box" console comparison).
[^about]: [Superior Swim Timing, About Us](https://superiorswimtiming.com/contact-us/).
[^faq]: [Superior Swim Timing, Knowledge Base](https://superiorswimtiming.com/faq).
[^demo]: [Superior Swim Timing, Software Downloads](https://superiorswimtiming.com/timing-software/demo/).
[^mobile]: [Superior Swim Timing, Mobile Scoreboard](https://superiorswimtiming.com/timing-software/mobile-scoreboard/).
[^appserver]: [Superior Swim Timing, SST App Server](https://superiorswimtiming.com/sst-appserver/).
[^pricing]: [Superior Swim Timing, Pricing](https://superiorswimtiming.com/pricing/).
[^news]: [Superior Swim Timing, News & Events](https://superiorswimtiming.com/contact-us/news-events/).
[^clients]: [Superior Swim Timing, Our Users](https://superiorswimtiming.com/contact-us/client-list/).
[^hytek]: [Active Network, Timing Console Interface Vendor Contacts](https://support.activenetwork.com/hytekswimming/articles/en_US/Article/Timing-Console-Interface-Vendor-Contacts).
[^swimcloud]: [Swimcloud, Connecting Swimcloud Meet to Superior Swim Timing](https://support.swimcloud.com/hc/en-us/articles/24219497626387-Connecting-Swimcloud-Meet-to-Superior-Swim-Timing-SST).
[^swimnerdsw]: [Swimnerd, Superior Swim Timing Software](https://swimpractice.com/products/superior-swim-timing-software).
[^bundle]: [Swimnerd, Swim Timing Systems](https://swimpractice.com/products/swimming-timing-system-bundle).
[^apple]: [Apple App Store, SST Stopwatch: Swim Timing](https://apps.apple.com/app/id1035125066).
[^stopplay]: [Google Play, SST Stopwatch: Swim Timing](https://play.google.com/store/apps/details?id=com.superiorswimtiming.SSTstopwatch).
[^scoreapp]: [Apple App Store, SST Scoreboard: Swim Meet](https://apps.apple.com/app/id6778537530).
[^scoreplay]: [Google Play, SST Scoreboard: Swim Meet](https://play.google.com/store/apps/details?id=com.superiorswimtiming.scoreboards).
[^shop]: [Superior Swim Timing shop](https://shop.superiorswimtiming.com/).
[^gnet]: [Active Network, Interface Using Generic Network File Sharing](https://activenetwork.my.salesforce-sites.com/hytekswimming/articles/en_US/Article/Interface-Using-Generic-Network-File-Sharing).
[^stjohns]: [St. Johns Summer Swim League, User Guides](https://web.archive.org/web/20240624031641/https://stjohnssummerswimleague.swimtopia.com/user-guides) (archived June 2024).
[^home2012]: [Superior Swim Timing, Home](https://web.archive.org/web/20120520053951/http://www.superiorswimtiming.com/) (archived May 2012).
[^sw2013]: [Superior Swim Timing, SST Timing Software](https://web.archive.org/web/20131208200045/http://superiorswimtiming.com/sst-timing-software.html) (archived December 2013).
[^pad2013]: [Superior Swim Timing, SST Pad Interface](https://web.archive.org/web/20131208195820/http://superiorswimtiming.com/sst-pad-interface.html) (archived December 2013).
[^pricing2013]: [Superior Swim Timing, Pricing](https://web.archive.org/web/20131208200205/http://superiorswimtiming.com/pricing.html) (archived December 2013).
[^company2013]: [Superior Swim Timing, Company Information](https://web.archive.org/web/20131208201843/http://superiorswimtiming.com/company-information.html) (archived December 2013).
[^sw2014]: [Superior Swim Timing, Timing Software](https://web.archive.org/web/20140812092519/http://www.superiorswimtiming.com/SwimFast/timing-software/) (archived August 2014).
[^features2014]: [Superior Swim Timing, Features](https://web.archive.org/web/20141201205929/http://www.superiorswimtiming.com/SwimFast/timing-software/features/) (archived December 2014).
[^pricing2014]: [Superior Swim Timing, Pricing](https://web.archive.org/web/20141201203907/http://www.superiorswimtiming.com/SwimFast/pricing/) (archived December 2014).
[^mobile2015]: [Superior Swim Timing, Mobile Scoreboard](https://web.archive.org/web/20151118024851/http://www.superiorswimtiming.com/SwimFast/timing-software/mobile-scoreboard/) (archived November 2015).

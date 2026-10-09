---
title: Start systems
seoTitle: Swimming start systems
tags:
  - Equipment
  - Timing
  - Swimming
---

A start system is the starter's equipment that begins a race: a unit with a
microphone, a start tone (horn), and a strobe light, connected to loudspeakers and,
on deck-wired systems, to visual indicators at the blocks. Pressing the start sounds
the tone, flashes the strobe, and simultaneously sends a start pulse to the timing
system so the race clock begins with the signal. Officials and watch timers are
directed to start from the strobe flash rather than the horn, because the speed of
sound makes a tone-based watch start late, and the strobe gives a fair start to
athletes who are deaf or hard of hearing.

## History and the acoustic problem

Races were once started by a single poolside signal: a whistle, a gun, or a horn. A
single sound source reaches the far lanes later than the near ones. The relevant
distance is the width of the course, across which the blocks are ranged, rather than
its length: ten lanes at 2.5 m set the outermost blocks about 22.5 m apart. Sound
travels about 343 m/s in air, so several hundredths of a second separate the nearest
lane from the farthest, and races are decided in hundredths. The solution, credited
to the Swiss timekeeper Omega and later adopted across the sport, was to place a
loudspeaker behind each starting block and drive them together, so every athlete
hears the command and the signal at the same instant.[^swisstiming][^omegahist]
Modern start systems build this principle
into one unit: the start tone, the strobe, and, on deck-wired systems, a light at
each block all fire together with the electronic start pulse to the timer.

## How a start system works

The starter speaks to the field through a microphone and begins the race by pressing
a start button. The start system then acts at once: it sounds the start tone through
its speaker or the deck loudspeakers, flashes a strobe, flashes any block speedlights
or visual indicators, and sends a start pulse to the timing system, which starts the
race clock on that pulse. A second press signals a false-start recall. Because light
travels far faster than sound, the visual signal is the reference for a fair start,
while the audible tone is for the athletes on the blocks, who have a loudspeaker at
each platform.

## Start tones

This section compares the start tones of the systems the wiki covers, from
manufacturer documents and from recordings measured for the wiki.

Manufacturers describe their start signals in general terms and do not publish
frequencies. Colorado Time Systems (CTS) calls its start signal a dual-tone blast.
The blast lasts half a second on the SS2 and the original Infinity, and a quarter
second on the Championship, Championship Elite, and Infinity
Pro.[^f503][^f849][^f875][^f1064][^f1063] The Championship Elite and Infinity Pro can
replace this classic CTS beep with an alternate beep, and the Championship Elite manual
describes the alternate as the shorter of the two.[^f1064][^f1063] The Daktronics HS-200 offers two swimming tones and
a gunshot emulation without describing either tone.[^dak] Swiss Timing units select a
sound type: the StartTime II chooses between a sampled gunshot and a modulated tone,
and the StartTime V uses a bang as its default start sound.[^st2][^st5]

The measurements below come from phone recordings of start systems in use at pools,
analysed for the wiki in 2026. Each clip is rebuilt from those measurements. It
reproduces the tone as heard beside a lane speaker, so it carries the coloring of the
speaker, the room, and the recording microphone, and it is not the electrical signal
the start system generates.

| Tone | Recorded on | Measured content | Length |
|---|---|---|---|
| CTS classic beep | Championship, Championship Elite, Infinity Pro | 600 Hz with a weaker 800 Hz; the waveform repeats 200 times a second | 0.25 s (documented) |
| CTS alternate beep | Championship Elite | 892.5 Hz and 1020 Hz at similar levels; the waveform repeats 63.75 times a second | About 0.15 s |
| Swiss Timing tone | StartTime V | The same two frequencies as the CTS alternate beep | About 0.15 s |
| Daktronics tone | HS-200 | 715 Hz with odd harmonics, the strongest at 2145 Hz | About 0.4 s |

The Championship Elite and Infinity Pro recordings both measured 600 Hz to within
0.1 Hz. The Championship unit recorded sounded about 2 percent lower, at 587 and
782 Hz, and its tone ran 268 ms against the documented 250 ms. CTS warns that a
Championship on run-down batteries sounds a quieter, longer tone, but the recording
does not show whether that was the cause here.[^f875] The CTS alternate beep and the
Swiss Timing tone match to within 0.05 Hz and sound alike. The Swiss recording rang on
for about 0.29 seconds, which is taken here as an echo from the far end of the pool,
so the clip uses the length of the CTS alternate beep. Two recordings of the HS-200 measured 714.6
and 714.8 Hz.

<div class="wiki-figure-row">
<figure class="wiki-figure">
  <audio controls preload="metadata" src="/assets/start-tone-cts-classic.mp3" aria-label="CTS classic start beep"><a href="/assets/start-tone-cts-classic.mp3">CTS classic start beep (MP3)</a></audio>
  <figcaption>CTS classic beep, rebuilt from recordings of three CTS start systems: a buzzing 600 Hz tone lasting a quarter second.</figcaption>
</figure>
<figure class="wiki-figure">
  <audio controls preload="metadata" src="/assets/start-tone-cts-alternate.mp3" aria-label="CTS alternate start beep"><a href="/assets/start-tone-cts-alternate.mp3">CTS alternate start beep (MP3)</a></audio>
  <figcaption>CTS alternate beep from a Championship Elite: a higher, rougher two-note tone of about 0.15 seconds.</figcaption>
</figure>
<figure class="wiki-figure">
  <audio controls preload="metadata" src="/assets/start-tone-swiss-timing.mp3" aria-label="Swiss Timing start tone"><a href="/assets/start-tone-swiss-timing.mp3">Swiss Timing start tone (MP3)</a></audio>
  <figcaption>Swiss Timing tone: the same rough two-note tone as the CTS alternate beep, lasting about 0.15 seconds.</figcaption>
</figure>
<figure class="wiki-figure">
  <audio controls preload="metadata" src="/assets/start-tone-daktronics-hs-200.mp3" aria-label="Daktronics HS-200 start tone"><a href="/assets/start-tone-daktronics-hs-200.mp3">Daktronics HS-200 start tone (MP3)</a></audio>
  <figcaption>Daktronics HS-200 tone: a steady 715 Hz tone, lower and smoother than the CTS beeps, lasting about 0.4 seconds.</figcaption>
</figure>
</div>

<!-- Research notes, start-tone measurements (October 2026).
     Method: phone videos of start systems in use, supplied to the wiki as MP4 (AAC,
     48 kHz). Audio decoded to mono, the steady part of each tone taken, spectral peaks
     picked with a Blackman-Harris window and a 2^18 to 2^20 point FFT, pitch refined by
     parabolic interpolation, timing read from band-limited Hilbert envelopes. Every take
     turned out to be a periodic waveform, so each clip was rebuilt only from partials on
     multiples of its measured repeat rate (which also drops crowd noise and music), then
     placed on an exact ideal grid. Partial levels are the median across takes so one
     outlier cannot pull the result. All clips are "as heard": speaker, room and phone mic
     are baked in. A line-out recording would be needed for the raw generator signal.
     CTS classic. SSE take: 600.2 Hz, repeat 200.07 Hz, 800 Hz at -20 dB, strong
     partials at 1600 (-9 dB), 1800 (-7 dB) and 2000 Hz (-16 dB); clip cut off before the
     end. Infinity Pro take: 600.16 Hz, repeat 200.05 Hz, 800 Hz at -18 dB, similar upper
     partials; the end of the tone is not trustworthy (the audio after it drops below the
     earlier background, suggesting a trim or noise suppression). Championship Start take
     (unit model SS): 586.9 and 782.4 Hz at nearly equal level, repeat 195.6 Hz, 268 ms
     with a clean stop. All three share the 3:4 pair and the 200 Hz-type repeat, so the
     Championship unit is treated as the same tone running about 2.2 percent slow. F875
     lists weak batteries as a cause of a quieter, longer tone; whether that also shifts
     pitch is an inference, not documented. Length 0.25 s is from F875, F1063 and F1064,
     not measured on the SSE or Infinity Pro.
     CTS alternate and Swiss Timing. Partials are the 14th and 16th of a 63.75 Hz repeat
     (892.5 and 1020 Hz, a 7:8 ratio), with sidebands at the neighbouring multiples, which
     gives the rough sound. SSE alternate take: 892.45 and 1019.80 Hz, about 145 ms, clean
     stop. Swiss take used: 892.8 and 1018.8 Hz, the two within about 1 dB, about 290 ms
     with the lower note dipping in the second half, which fits a strong reflection. The
     recordist hears the Swiss tone as short and close to the CTS alternate, so the Swiss
     clip takes the 145–150 ms length and is levelled as the median of the Swiss take and
     the SSE alternate take. Three older Swiss clips were set aside because the recordist was not
     confident they were Swiss Timing units: two measured 63.65 to 63.75 Hz (about 110 to
     160 ms) and one ran 2.3 percent sharp (913 and 1046 Hz, about 170 ms). A fifth
     recording of the same tone from an unidentified unit measured 63.75 Hz, about 160 ms.
     Which of the two notes sounds louder swung from -10 to +10 dB between takes, so the
     balance at the source is probably near equal. The recordist identified the Swiss unit as a
     StartTime V, which defaults to a bang, so it was on a non-default sound. The StartTime
     II's "modulated tone" setting and the selectable sound types of the IV and V are
     consistent with this tone but no Swiss document gives its frequencies. Why the
     CTS alternate and the Swiss tone match to 0.05 Hz is unexplained.
     Daktronics HS-200. Two takes: 714.76 Hz (clipped recording, 3rd harmonic -28 dB,
     about 0.40 s with a clean stop followed by a natatorium reverb tail decaying near
     17 dB/s) and 714.64 Hz (not clipped, 3rd harmonic -11 dB, 5th -31 dB; the room kept
     the level up for about a second, so no usable length). The strong odd harmonics in the
     second take suggest a square-ish source rolled off by the horn; the weaker ones in
     the first probably reflect an off-axis microphone. Which of the HS-200's two swimming
     tones this is was not recorded. Two non-harmonic peaks (3185 and 4615 Hz) in the
     first take were treated as artifacts.
     Still needed: an HS-200 recording with a clean stop and its tone setting noted; an
     SSE or Infinity Pro classic beep with its end intact; another Swiss recording with
     the model noted; a second Championship Start unit; any line-out recording. -->

## Governing-body requirements

World Aquatics, the international federation for the sport, sets the equipment
standard start systems are built to meet. Its swimming rules give the starter a
microphone for the oral commands, and a transducer where a pistol is fired. Both feed
a loudspeaker at every block, so that no athlete hears a command or the signal sooner
or louder than any other. False-start detection equipment must also be installed,
and at the Olympic Games and the World Aquatics Championships a loudspeaker at or
beside each starting platform carries the commands and the signal.[^wacr] Going
before the signal exposes an athlete to disqualification under the one-start
rule.[^wacr]

Visual starting signals for athletes who are deaf or hard of hearing come from other
rulebooks; the World Aquatics swimming regulations do not address them. USA Swimming
requires a visual signal, a strobe light or the starter's arm signals, positioned
where the swimmer can see it, and allows lane reassignment so it can be
seen.[^usas105] World Para Swimming requires a strobe or starting light for athletes
with a hearing impairment, and allows a team leader to request additional arm signals
from the starter.[^wps] The pairing also appears in equipment patents: a 1992 Seiko
patent for a swimming-race timing system covers start-signal detection together with
a visual display for deaf swimmers.[^seiko]

## False starts and reaction time

The one-start rule shapes both the start pulse and the false-start detection
equipment. The start pulse marks time zero for the race, and the timing
system measures each swimmer's result from it; false-start detection equipment at the
blocks lets officials confirm a start given before the signal.[^wacr] Deck-wired
start systems extend the same instant to the relay-judging platforms, whose
speedlights and sensors are used to judge relay exchanges against the recorded start
and finish.

## Products

Several companies make aquatic start and timing equipment. The principal
manufacturers are
[Colorado Time Systems](../../../vendors/colorado-time-systems.md) (CTS), a
common supplier in United States swimming, [Daktronics](../../../vendors/daktronics.md),
[Swiss Timing](../../../vendors/swiss-timing.md) (Omega), and
[Seiko](../../../vendors/seiko.md); smaller United States makers include
[International Sports Timing](../../../vendors/international-sports-timing.md) (IST) and
[Superior Swim Timing](../../../vendors/superior-swim-timing.md) (SST).[^watiming] This section catalogs the documented
systems by manufacturer.

CTS sells two families with similar names. The Infinity family is portable and
self-contained; the Championship family is deck-wired and drives
[lane speakers](../external-speaker/index.md), underwater speakers, and the
speedlights on relay-judging platforms. Both were preceded in the 1990s by the SS
series of loudspeaker start systems, whose documented member is the
[SS2](ss2.md).

| Product | Part number | Family / tier | Status |
|---|---|---|---|
| [Infinity Start System](infinity-start-system.md) | `INF-SSM` | Infinity, portable, entry | Discontinued 2024 |
| [Infinity Pro Start System](infinity-pro-start-system.md) | `INF-PRO` | Infinity, portable, entry | Current |
| [SS2 Electronic Start System](ss2.md) | `SS2-1` … `SS2-10` | SS series, loudspeaker, legacy | Discontinued |
| [Championship Start System (CHAMP-SSM)](champ-ssm.md) | `CHAMP-SSM` | Championship, deck-wired, legacy | Discontinued (pre-2005) |
| [Championship Start System](championship-start-system.md) | `SS` | Championship, deck-wired, full | Discontinued |
| [Championship Elite Start System](championship-elite-start-system.md) | `SSE` | Championship, deck-wired, full | Current |

Within each family the newer model succeeds the older one. The
[SS2](ss2.md) is the oldest documented system, from the 1990s SS series that
preceded both families. The Infinity Pro replaced the Infinity. The
Championship line runs through three generations, the legacy
[CHAMP-SSM](champ-ssm.md), the current-era
[Championship](championship-start-system.md) (`SS`), and today's
[Championship Elite](championship-elite-start-system.md) (`SSE`). Each article covers
one model in full: its specifications, connections, part-number variants, and how it
differs from its near-namesake. This page is the shared overview they refer back
to. Separate from these acoustic start systems, CTS also makes the
[Dolphin Starter Unit](dolphin-starter-unit.md) (`R-1004-0507`), a wireless
start-trigger that starts the
[Dolphin Wireless Stopwatch Timing System](../semi-automatic/dolphin.md) rather than a horn
or strobe starter.

Daktronics makes one start system, the portable
[HS-200 Horn Start](hs-200.md), sold as the start system for its OmniSport 2000
timing console; its start outputs also connect to other manufacturers' timers.

| Product | Part number | Family / tier | Status |
|---|---|---|---|
| [HS-200 Horn Start](hs-200.md) | `0A-1056-0116` (wired), `0A-1056-0136` (HS-200R wireless) | Portable, horn start and public address | Supported; listed in Daktronics' discontinued-product resources |

International Sports Timing (IST) makes the portable
[SWIMSTART](swimstart.md), which connects to IST, CTS, Daktronics, or Omega
timers. IST also sold an under-block speaker system as an accessory.

| Product | Part number | Family / tier | Status |
|---|---|---|---|
| [SWIMSTART Electronic Start](swimstart.md) | `SWIMSTART` | Portable, loudspeaker start and public address | Current |

Superior Swim Timing (SST) makes the portable [Atlantis](atlantis.md), sold
directly and through SwimNerd, with lane speakers and harnesses as accessories.

| Product | Part number | Family / tier | Status |
|---|---|---|---|
| [Atlantis Swimming Starter System](atlantis.md) | Not published | Portable, loudspeaker start and public address | Current |

Swiss Timing, whose equipment appears under the Omega brand at international
meets, makes electronic starting devices for swimming, athletics, and speed
skating. They drive in-block lane speakers or mobile loudspeaker sets. The
[StartTime II](starttime-ii.md) and [StartTime III](starttime-iii.md) are the
earlier acoustic units, operated from a microphone unit and configured by DIP switch
(the II) or a setup menu (the III). The [StartTime IV](starttime-iv.md) succeeded
them and introduced the company's electronic e-gun, first used at the 2010
Vancouver Winter Olympics. The [StartTime V](starttime-v.md) succeeded the IV
in 2015; the IV and V are not cross-compatible.

| Product | Article number | Family / tier | Status |
|---|---|---|---|
| [StartTime II](starttime-ii.md) | Not published | Electronic starting device (acoustic) | Discontinued (superseded by StartTime III) |
| [StartTime III](starttime-iii.md) | Not published | Electronic starting device (acoustic) | Discontinued (superseded by StartTime IV) |
| [StartTime IV](starttime-iv.md) | 3481.900 (microphone unit), 3481.901 (e-gun) | Electronic starting device | Discontinued (superseded by StartTime V) |
| [StartTime V](starttime-v.md) | 3481.930 (microphone unit), 3481.931 (e-gun) | Electronic starting device | Current |
| [ORA2](ora2.md) | Not published | Omega start system of the 1984 Games | Discontinued |

Seiko makes two separate lines of electronic starter, and only one of them is swimming
equipment. The deck generators are the swimming line: Seiko lists them as
conforming to World Aquatics rules and as Japan Swimming Federation Class AA and Class
A, and their start signal goes to the Seiko printing timer on a wire.[^seikocat] The
current model is the [PS-1400](seiko-ps-1400.md), which replaced the
[PS-1300](seiko-ps-1300.md) between February and May 2026; before those came the much
larger [PS-1200](seiko-ps-1200.md), which was about 30 kg where its successors are
about 14.5 kg.

| Product | Part number | Family / tier | Status |
|---|---|---|---|
| [PS-1400 Electronic Start Sound Generator](seiko-ps-1400.md) | `PS-1400` | Swimming, deck generator with speaker expansion | Current |
| [PS-1300 Electronic Start Sound Generator](seiko-ps-1300.md) | `PS-1300` | Swimming, deck generator | Discontinued 2026 |
| [PS-1200 Electronic Start Sound Generator](seiko-ps-1200.md) | `PS-1200` | Swimming, floor-standing deck generator | Discontinued 2013/14 |

The second line is the portable エレクトロニックスタータ, a flash pistol with a
battery-powered speaker box, sold as general sports equipment without any
governing-body certification.[^seikops110] Seiko's discontinued-product index dates the
whole chain, and each generation has its own operating manual.

| Product | Part number | Family / tier | Status |
|---|---|---|---|
| [Seiko Electronic Starting System](seiko-electronic-starting-system.md) | `PS-110J` (and `PS-110`, 2009–2022) | Portable, cross-sport starter | Current |
| [Seiko PS-109 Electronic Starter](seiko-ps-109.md) | `PS-109` | Portable, cross-sport starter | Discontinued 2008 |
| [Seiko PS-107 Electronic Starter](seiko-ps-107.md) | `PS-107` | Portable, cross-sport starter | Discontinued 2002 |
| [Seiko PS-105 Electronic Starter](seiko-ps-105.md) | `PS-105` | Portable, cross-sport starter | Discontinued 1997 |

## See also

- [External speakers](../external-speaker/index.md): the lane, auxiliary, and
  far-end loudspeakers a start system drives
- [Gen7 Serial Timer](../timers/gen7-serial.md): the timing console a start
  system triggers
- [Equipment](../../index.md): the wider equipment reference
- [Colorado Time Systems](../../../vendors/colorado-time-systems.md): the
  manufacturer

## References

[^usas105]: [USA Swimming, Article 105: officiating swimmers with a disability](https://www.usaswimming.org/docs/default-source/disabilitydocuments/article-105.pdf).
[^wps]: [World Para Swimming, Rules and Regulations (February 2026)](https://www.paralympic.org/sites/default/files/2026-01/2025_12_06_World%20Para%20Swimming%20Rules%20and%20Regulations%201%20February%202026%20-FINAL%20_0.pdf), rule 11.1.6.
[^seikocat]: [Seiko Time Creation, Swimming Systems Catalogue](https://www.seiko-stc.co.jp/products/uploads/pdf/s_swimming_c.pdf) (December 2025), p. 6.
[^seikops110]: [Seiko Time Creation, Electronic Starting System PS-110J Operating Manual](https://www.seiko-stc.co.jp/products/uploads/pdf/st_ps-110j.pdf) (document I-7813-3).
[^wacr]: [World Aquatics, Competition Regulations (Part Two: Swimming Rules)](https://resources.fina.org/fina/document/2026/02/18/e6815ecc-06d9-4f0b-98e9-4c441cf5e6a3/2026-02-18_World-Aquatics_CR-Final.pdf), articles 4.3, 4.4, and 15.16.3 (starting devices).
[^swisstiming]: [Swiss Timing, Swimming](https://www.swisstiming.com/sports/swimming/).
[^omegahist]: [Monochrome Watches, Omega's Gold Medal Olympic Timekeeping Equipment](https://monochrome-watches.com/omegas-gold-medal-olympic-timekeeping-equipment/) (on the loudspeaker placed behind each starting block to equalise the start signal).
[^seiko]: [Google Patents, EP0557888B1, Timing system for swimming race](https://patents.google.com/patent/EP0557888B1/en) (Seiko Instruments; start-signal detection with a visual display for deaf swimmers; priority 1992).
[^watiming]: [Wikipedia, Aquatic timing system](https://en.wikipedia.org/wiki/Aquatic_timing_system).
[^f503]: [Colorado Time Systems, Electronic Start System Model SS2 Instruction Guide (F503 Rev. 0897, ©1993)](https://spanish.coloradotime.com/manuals/StartSystem2-man.pdf).
[^f849]: [Colorado Time Systems, Infinity Start System User Guide (F849 Rev. 202202)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Start%20Systems/Infinity_User_Guide_F849.pdf).
[^f875]: [Colorado Time Systems, Championship Start Instruction Guide (F875 Rev. 202202)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Start%20Systems/Champ_Start_User_Guide_F875.pdf).
[^f1064]: [Colorado Time Systems, Championship Elite Start System User Instructions (F1064 Rev. 202606)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Start%20Systems/Elite/Championship%20Elite%20Starter_F1064.pdf).
[^f1063]: [Colorado Time Systems, Infinity Pro Start System User Instructions (F1063)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Start%20Systems/Infinity%20Pro/INF-PRO%20Starter_F1063.pdf).
[^dak]: [Daktronics, Horn Start HS-200 Owner's Manual (ED-12935, Rev 17, 17 March 2021)](https://www.daktronics.com/web-documents/customer-service-manuals/ed-12935.pdf).
[^st2]: Swiss Timing, StartTime II User's Manual (document 3399.502.02, Version 2.1, July 2007).
[^st5]: [Swiss Timing, StartTime V User's Manual (3481.560.02, Version 1.2, March 2018)](https://www.swisstiming.com/fileadmin/Resources/Instruction_Manuals/3481.560.02_STV_Egun_User_Manual.pdf).

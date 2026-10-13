---
title: Relay take-off platforms
seoTitle: Swimming relay take-off platforms
description: "Relay take-off platforms for swimming, including the CTS RJP and Daktronics RTOP: how exchanges are judged automatically, the rules, and disputed results."
updated: 2026-10-13
tags:
  - Equipment
  - Timing
  - Swimming
---

A relay take-off platform is a sensing surface mounted on top of a starting block that
records the instant the outgoing swimmer's feet leave the block during a relay exchange.
The [timing console](../timers/index.md) compares that departure time with the moment
the incoming swimmer touches the [touchpad](../touchpad/index.md) in the same lane,
producing an exchange differential that shows whether the outgoing swimmer left
early.[^ctsrjp][^dak-rtop] The names are vendor-specific: Colorado Time Systems sells
the RJP (relay judging platform) and Daktronics sells the RTOP (relay take-off
platform), while the World Aquatics rules refer to the function as relay take-off
judging and the NCAA rulebook uses relay judging
platforms.[^ctsrjp][^dak-rtop][^wa-fr][^ncaa]

The same departure signal also measures start reaction time, the interval between the
start signal and the swimmer leaving the block. Consoles that support it can post the
reaction time to the scoreboard, and coaches use the readout as a training
tool.[^ctsrjp][^f968]

## How automatic relay judging works

In a relay, the outgoing swimmer's feet have to be touching the block at the moment the
incoming teammate reaches the wall, and a team that leaves early is
disqualified.[^wa-sw][^usaswim] An automatic relay judging installation pairs the lane's
touchpad with a platform on the block. The console subtracts the incoming swimmer's
finish time from the outgoing swimmer's take-off time: a negative differential means the
swimmer left before the touch, and a zero or positive differential means the exchange
was legal.[^ncaa][^uil] Because the exchange is judged against the pad, USA Swimming
requires each relay swimmer to finish on the touchpad when automatic relay take-off
judging is in use.[^usaswim]

Manufacturers detect the departure in different ways. Colorado Time Systems platforms
register the mechanical unloading of the platform's top and leading edge, and the
company states they are engineered to distinguish weight shifts from an actual
departure.[^f968] Daktronics platforms instead sense the swimmer's body capacitively, an
approach the company patented in the 2000s; Daktronics states the reading does not
depend on the swimmer's weight or the style of start.[^dak-patent][^dak-rtop]

No platform resolves the moment of departure exactly, so each manufacturer defines its
own zero point and tolerance. The World Aquatics facilities rules state that for the
differential in relay take-offs "the manufacturer of the device shall be
consulted".[^wa-fr] Colorado Time Systems adds a fixed 0.01 second to every exchange
time its timers calculate, in favor of a safe take-off (see the
[Colorado Time Systems RJP](cts.md) article),[^f968] the NCAA rule defines its decision
window relative to "the manufacturer's starting point",[^ncaa] and SwimSwam has
reported that Omega, whose
equipment times major international meets, recommends a tolerance of minus 0.03 seconds,
within which an exchange is not called early.[^swimswam][^uil]

## Governing-body requirements

Under the World Aquatics facilities rules, judging the relay take-off to 1/100 of a second
counts among the essential accessories of automatic officiating equipment. A facility that
has overhead video may put it to the automatic judgment as supporting evidence.[^wa-fr]
Take-offs judged by the automatic equipment take precedence
over the officials at the blocks.[^wa-sw] The referee still appoints officials to
determine whether each starting swimmer is in contact with the platform at the touch,
and the control room supervisor checks the relay exchange printout, reports early
take-offs to the referee, and may review video timing to confirm one.[^wa-sw]

USA Swimming rules follow the same pattern. Where a meet runs automatic exchange-judging
equipment, the exchanges are judged from that system's printout. A referee wanting to
confirm what it reported may look at integrated backup timing cameras, and decides the
confirmation process independently at pools that have none.[^usaswim] Without equipment,
relay take-offs are judged by
officials, and when dual take-off judging is used a relay is disqualified only if the
lane judge and the side judge independently report the same infraction in
writing.[^usaswim]

NCAA rules give the equipment the most authority. Where the electronic take-off system
returns a differential inside a band of minus 0.09 to plus 0.09 seconds around the
manufacturer's starting point, its reading settles the matter and human judges do not
enter into it: minus 0.09 through minus 0.01 indicates a
violation, and 0.00 through plus 0.09 indicates a legitimate exchange. Outside that
range, a disqualification requires dual confirmation by the equipment and either a judge
or approved video.[^ncaa] The NCAA rulebook also requires that track-start blocks used
in meets requiring relay judging platforms accommodate the platforms.[^ncaa]

At the high school level, procedures vary by state association. The Texas UIL protocols,
for example, assign at least two take-off judges, require judge confirmation of any
negative reading on non-Omega equipment (below minus 0.03 on Omega equipment), and do
not charge a violation on a reading of 0.00 or better unless an official observed
contact with the block.[^uil]

### Worked example: an early take-off under USA Swimming rules

In this example the third swimmer's feet leave the block while the second swimmer is still
short of the wall. What happens next depends on how the meet judges relay exchanges.

<figure class="wiki-figure wiki-figure--wide">
<svg class="wiki-diagram" viewBox="0 0 600 460" role="img" aria-labelledby="rj-title rj-desc" xmlns="http://www.w3.org/2000/svg" font-size="11">
<title id="rj-title">Early relay take-off under USA Swimming rules, flowchart</title>
<desc id="rj-desc">Flowchart. Swimmer 3's feet leave the block before swimmer 2 touches the wall. The path then depends on how exchanges are judged. With one take-off judge per lane, the lane judge sees it and must raise a hand at once; if no hand is raised there is no disqualification unless the meet runs under World Aquatics procedures; the judge then reports to the referee. Under dual confirmation, the lane and side judges each write the infraction down without a hand signal, and the relay is disqualified only if the side judge confirms the lane judge's report. With automatic equipment, swimmer 2 must finish on the touchpad, the system printout shows a negative differential for the exchange, and the referee may confirm it from integrated backup cameras. All three paths end with the whole relay disqualified, not only swimmer 3, and the swimmer or coach is told the reason; if they are not told, the disqualification still stands.</desc>
<defs><marker id="rj-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="wiki-diagram__arrowhead"/></marker></defs>
<rect x="150" y="10" width="300" height="42" rx="4" class="wiki-diagram__box"/>
<text x="300" y="28" text-anchor="middle"><tspan x="300" dy="0">Swimmer 3's feet leave the block</tspan><tspan x="300" dy="14">before swimmer 2 touches the wall</tspan></text>
<line x1="300" y1="52" x2="300" y2="68" class="wiki-diagram__arrow"/>
<line x1="100" y1="68" x2="500" y2="68" class="wiki-diagram__arrow"/>
<line x1="100" y1="68" x2="100" y2="86" class="wiki-diagram__arrow" marker-end="url(#rj-arrow)"/>
<line x1="300" y1="68" x2="300" y2="86" class="wiki-diagram__arrow" marker-end="url(#rj-arrow)"/>
<line x1="500" y1="68" x2="500" y2="86" class="wiki-diagram__arrow" marker-end="url(#rj-arrow)"/>
<rect x="10" y="86" width="180" height="28" rx="4" class="wiki-diagram__box"/>
<text x="100" y="104" text-anchor="middle"><tspan x="100" dy="0">One take-off judge</tspan></text>
<line x1="100" y1="114" x2="100" y2="130" class="wiki-diagram__arrow" marker-end="url(#rj-arrow)"/>
<rect x="10" y="130" width="180" height="42" rx="4" class="wiki-diagram__box"/>
<text x="100" y="148" text-anchor="middle"><tspan x="100" dy="0">Lane judge sees the feet</tspan><tspan x="100" dy="14">leave before the touch</tspan></text>
<line x1="100" y1="172" x2="100" y2="188" class="wiki-diagram__arrow" marker-end="url(#rj-arrow)"/>
<rect x="10" y="188" width="180" height="70" rx="4" class="wiki-diagram__box"/>
<text x="100" y="206" text-anchor="middle"><tspan x="100" dy="0">Judge must raise a hand at</tspan><tspan x="100" dy="14">once; if not, there is no DQ</tspan><tspan x="100" dy="14">unless the meet runs under</tspan><tspan x="100" dy="14">World Aquatics procedures</tspan></text>
<line x1="100" y1="258" x2="100" y2="274" class="wiki-diagram__arrow" marker-end="url(#rj-arrow)"/>
<rect x="10" y="274" width="180" height="42" rx="4" class="wiki-diagram__box"/>
<text x="100" y="292" text-anchor="middle"><tspan x="100" dy="0">Judge reports the</tspan><tspan x="100" dy="14">infraction to the referee</tspan></text>
<rect x="210" y="86" width="180" height="28" rx="4" class="wiki-diagram__box"/>
<text x="300" y="104" text-anchor="middle"><tspan x="300" dy="0">Dual confirmation</tspan></text>
<line x1="300" y1="114" x2="300" y2="130" class="wiki-diagram__arrow" marker-end="url(#rj-arrow)"/>
<rect x="210" y="130" width="180" height="56" rx="4" class="wiki-diagram__box"/>
<text x="300" y="148" text-anchor="middle"><tspan x="300" dy="0">Lane and side judges each</tspan><tspan x="300" dy="14">write the infraction down,</tspan><tspan x="300" dy="14">with no hand signal</tspan></text>
<line x1="300" y1="186" x2="300" y2="202" class="wiki-diagram__arrow" marker-end="url(#rj-arrow)"/>
<rect x="210" y="202" width="180" height="56" rx="4" class="wiki-diagram__box"/>
<text x="300" y="220" text-anchor="middle"><tspan x="300" dy="0">Relay is disqualified only</tspan><tspan x="300" dy="14">if the side judge confirms</tspan><tspan x="300" dy="14">the lane judge's report</tspan></text>
<rect x="410" y="86" width="180" height="28" rx="4" class="wiki-diagram__box"/>
<text x="500" y="104" text-anchor="middle"><tspan x="500" dy="0">Automatic equipment</tspan></text>
<line x1="500" y1="114" x2="500" y2="130" class="wiki-diagram__arrow" marker-end="url(#rj-arrow)"/>
<rect x="410" y="130" width="180" height="42" rx="4" class="wiki-diagram__box"/>
<text x="500" y="148" text-anchor="middle"><tspan x="500" dy="0">Swimmer 2 must finish</tspan><tspan x="500" dy="14">on the touchpad</tspan></text>
<line x1="500" y1="172" x2="500" y2="188" class="wiki-diagram__arrow" marker-end="url(#rj-arrow)"/>
<rect x="410" y="188" width="180" height="56" rx="4" class="wiki-diagram__box"/>
<text x="500" y="206" text-anchor="middle"><tspan x="500" dy="0">System printout shows a</tspan><tspan x="500" dy="14">negative differential</tspan><tspan x="500" dy="14">for the exchange</tspan></text>
<line x1="500" y1="244" x2="500" y2="260" class="wiki-diagram__arrow" marker-end="url(#rj-arrow)"/>
<rect x="410" y="260" width="180" height="42" rx="4" class="wiki-diagram__box wiki-diagram__box--note"/>
<text x="500" y="278" text-anchor="middle"><tspan x="500" dy="0">Referee may confirm from</tspan><tspan x="500" dy="14">integrated backup cameras</tspan></text>
<line x1="100" y1="316" x2="100" y2="332" class="wiki-diagram__arrow"/>
<line x1="300" y1="258" x2="300" y2="332" class="wiki-diagram__arrow"/>
<line x1="500" y1="302" x2="500" y2="332" class="wiki-diagram__arrow"/>
<line x1="100" y1="332" x2="500" y2="332" class="wiki-diagram__arrow"/>
<line x1="300" y1="332" x2="300" y2="350" class="wiki-diagram__arrow" marker-end="url(#rj-arrow)"/>
<rect x="150" y="350" width="300" height="42" rx="4" class="wiki-diagram__box"/>
<text x="300" y="368" text-anchor="middle"><tspan x="300" dy="0">The whole relay is disqualified,</tspan><tspan x="300" dy="14">not only swimmer 3</tspan></text>
<line x1="300" y1="392" x2="300" y2="408" class="wiki-diagram__arrow" marker-end="url(#rj-arrow)"/>
<rect x="150" y="408" width="300" height="42" rx="4" class="wiki-diagram__box"/>
<text x="300" y="426" text-anchor="middle"><tspan x="300" dy="0">Swimmer or coach is told the reason;</tspan><tspan x="300" dy="14">if they are not, the DQ still stands</tspan></text>
</svg>
<figcaption>An early take-off in the third leg of a USA Swimming relay, followed through each of the three ways a meet can judge exchanges. The dashed box is optional.</figcaption>
</figure>

The chart follows the USA Swimming rulebook. Rule 101.7.4 disqualifies the team, not only
the swimmer, when an outgoing swimmer leaves the platform before the teammate touches, and
requires a touch on the pad where exchanges are judged automatically. Rule 102.13.6 places
the take-off judges, sets out dual confirmation, and makes the system printout the record
under automatic judging, with optional review of backup cameras. Rule 102.21 requires the
immediate hand signal from a single judge and sets out how the swimmer or coach is
told.[^usaswim] A negative differential is the equipment's reading for a swimmer who left
before the touch, as described [above](#how-automatic-relay-judging-works).[^ncaa][^uil]

## Reliability and disputes

Automatic relay judging has produced disputed disqualifications. A Stanford relay was
disqualified by the equipment at the 2008 NCAA Division I Women's Championships, and in
2011 the publisher of Swimming World, Brent Rutemiller, called for the use of electronic
relay take-off platforms to be suspended until human judgment was restored to the
process, arguing that meets without backup cameras let the printout alone decide
borderline readings.[^swimmingworld] Rules have since leaned on review: the NCAA
requires video review of relay takeoff disqualifications where review is in place, and
USA Swimming allows the referee to review integrated backup cameras.[^ncaa][^usaswim]

## Products

Two United States timing manufacturers sell relay judging platforms as lane accessories
to their timing systems, and Omega (Swiss Timing) equipment provides the same function
at the international meets it times.[^dak-compat][^swimswam]

| Product | Manufacturer | Sensing | Status |
|---|---|---|---|
| [Colorado Time Systems RJP](cts.md) | Colorado Time Systems | Mechanical, top and leading edge | Current |
| [Daktronics RTOP](daktronics.md) | Daktronics | Capacitive | Current |
| Omega relay take-off platform | Swiss Timing | Integrated with Omega starting blocks | Current |
| [Omega OSB6](osb6.md) | Omega Electronics | Force-operated contact in the block top | Introduced 1984; discontinued |
| [Omega OSB-3](osb-3.md) | Omega Electronics | Block top that moves under the swimmer's push | Used 1982; discontinued |

The [Colorado Time Systems RJP](cts.md) article covers the RJP and RJPLD lines and the
[Daktronics RTOP](daktronics.md) article covers the RTOP models in full; this page holds
the shared background on how the platforms are judged and ruled on.

## See also

- [Touchpads](../touchpad/index.md): the finish input the exchange is judged against
- [Pushbuttons](../semi-automatic/pushbutton/index.md): the other lane accessory read alongside the pad
- [Timers](../timers/index.md): the timing console that computes the exchange differential
- [Start systems](../starter/index.md): the source of the start impulse used for
  reaction times
- [Equipment](../../index.md): the equipment reference

## References

[^ctsrjp]: [Colorado Time Systems, Relay Judging Platforms for Competition](https://coloradotime.com/products/relay-judging-platforms-for-competition) (exchange judging and start reaction time to 1/100 second).
[^f968]: [Colorado Time Systems, RJPLD User Guide (F968)](https://coloradotime.com/hubfs/CTS%20Website%20%20Assets/Manuals/Swim%20Timing%20Components/Relay%20Judging/RJPLD_User_Guide_F968.pdf) (sensing, training use, and the fixed 0.01 second exchange adjustment).
[^dak-rtop]: [Daktronics, Relay Take-Off Platform](https://www.daktronics.com/en-us/support/hardware-components/relay-take-off-platform) (senses human contact rather than force; not dependent on the athlete's weight).
[^dak-patent]: [Google Patents, US 7,403,135: Capacitive relay takeoff swimming platform sensor system](https://patents.google.com/patent/US7403135B1/en) (Daktronics; capacitive departure sensing; priority 2003, granted 2008).
[^dak-compat]: [Daktronics, RTOP and starting block compatibility](https://www.daktronics.com/en-us/support/kb/DD2090313) (Omega relay take-off platforms and starting blocks alongside Daktronics RTOPs).
[^wa-sw]: [World Aquatics, Swimming Technical Rules 2023–2025](https://resources.fina.org/fina/document/2023/01/04/65961a45-bde5-4217-b666-ca1f5dc2d1f0/1_Swimming-Technical-Rules.04.01.2023.pdf), SW 10.13 (early take-off disqualification), SW 2.1.9 and SW 2.6.8 (officials judge contact), SW 2.2.3 and SW 2.2.4 (relay exchange printout and video), SW 13.1 (precedence of automatic equipment).
[^wa-fr]: [World Aquatics, Facilities Rules 2021–2025](https://resources.fina.org/fina/document/2022/02/08/77c3058d-b549-4543-8524-ad51a857864e/210805-Facilities-Rules_clean.pdf), FR 2.3.6.3 (relay take-off judging to 1/100 second; overhead video as a supplement; the manufacturer consulted for the differential).
[^usaswim]: [USA Swimming, 2025 Rules and Regulations](https://websitedevsa.blob.core.windows.net/sitefinity/docs/default-source/governance/governance-lsc-website/rules_policies/rulebooks/2025-mini-rulebook.pdf), 101.7.4 (pad touch, early take-off), 102.13.6 (take-off judges, dual confirmation, printout) and 102.21 (hand signal).
[^ncaa]: [NCAA, Swimming and Diving Rules Book](https://ncaaorg.s3.amazonaws.com/championships/sports/swimdive/rules/PRXSW_RulesBook.pdf) (electronic relay takeoff equipment differential windows; blocks must accommodate relay judging platforms; video review).
[^uil]: [University Interscholastic League, Protocols for Electronic Relay Judging Equipment](https://www.uiltexas.org/swimming-diving/page/uil-protocols-for-electronic-relay-judging-equipment) (judge assignments and confirmation thresholds by equipment type).
[^swimswam]: [SwimSwam, Why Was Australia's -0.03 Relay Start Not A DQ? A Rules Deep Dive](https://swimswam.com/why-was-australias-0-03-relay-start-not-a-dq-a-rules-deep-dive/) (the manufacturer-consulted differential and Omega's reported minus 0.03 second tolerance).
[^swimmingworld]: [Swimming World, Suspend the Use of Electronic Relay Take-Off Platforms](https://www.swimmingworldmagazine.com/news/suspend-the-use-of-electronic-relay-take-off-platforms/) (2011 editorial; the 2008 Stanford disqualification).

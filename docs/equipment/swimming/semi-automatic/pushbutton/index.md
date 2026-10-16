---
title: Pushbuttons
seoTitle: Swim timing backup pushbuttons
description: "Swim timing backup pushbuttons, or pickles: their role behind the touchpad, how button times resolve a lane's official time, and the CTS and Daktronics models."
updated: 2026-10-01
tags:
  - Equipment
  - Timing
  - Swimming
---

A backup pushbutton is a hand-held button a timer presses at the finish to record a
swimmer's time. Standing behind a lane, the timer holds the button and presses it as the
swimmer touches the wall, which sends a stop signal to that lane's clock on the
[timing console](../../timers/index.md). The pushbutton is the human-operated backup to
the [touchpad](../../touchpad/index.md): the pad records the official time automatically,
and the button is an independent check that can stand in when the pad is missed or
faults. It is nicknamed a "pickle" for its shape.[^usaswim][^ctsshop]

## Role in the timing system

The overview of [semi-automatic timing systems](../index.md) covers the shared background that
applies to every semi-automatic system: the layered primary, secondary, and tertiary
timing structure, and the governing-body rules that require independent backup. The
button is the usual secondary layer. In fully automatic officiating the buttons wait in
reserve behind the pad; in semi-automatic operation the buttons are the timing input,
started by the electronic start and stopped by the timer's press.[^usaswim] Each lane can
carry one, two, or three buttons, designated A, B, and C, each read independently of the
pad.[^tdp] Because a person reacts to the finish rather than the finish triggering the
device, a button time carries the timer's reaction delay and is treated as a check on the
pad, not its equal.[^watiming]

## How button times resolve

How button times become an official time is set by the governing body rather than the
hardware. The USA Swimming timing-adjustment rule keeps the pad time as official when the
automatic equipment works, and uses the backup button and watch times when a pad
malfunction is confirmed.[^usaswim] The published guidance to that rule states that where
three buttons are used and two of the three agree, that time is taken, and that when the
backup times differ from the pad time by 0.29 seconds or less the pad time still
stands.[^usaswim][^swimswam] These specific thresholds are USA Swimming's. Because the
procedures and thresholds differ between bodies, a meet follows the rules of its
sanctioning organization.

<figure class="wiki-figure wiki-figure--wide">
<svg class="wiki-diagram" viewBox="0 0 600 404" role="img" aria-labelledby="pb-title pb-desc" xmlns="http://www.w3.org/2000/svg" font-size="11">
<title id="pb-title">How a lane's official time is settled under USA Swimming rules, flowchart</title>
<desc id="pb-desc">Flowchart. The lane has a pad time. If nothing suggests the pad is wrong, the pad time is official. Three things suggest it may be wrong: the pad and backup times differ by about 0.30 seconds or more, the place judges' finish order disagrees with the times, or the swimmer is reported to have missed the pad or touched it softly. If a malfunction is confirmed, the lane's backup button times are used. With three valid times of which two agree, that time is used; with three that all differ, the middle one; with two, their average with the thousandths dropped; with one, that time unless it conflicts with other information, in which case the administrative official decides. A note adds that a watch time can be used when both the pad and the buttons fail, and that a fault shifting every lane of a heat equally, such as an early start, is corrected across the heat by the average difference instead.</desc>
<defs><marker id="pb-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L8,4 L0,8 z" class="wiki-diagram__arrowhead"/></marker></defs>
<rect x="180" y="10" width="240" height="28" rx="4" class="wiki-diagram__box"/>
<text x="300" y="28" text-anchor="middle"><tspan x="300" dy="0">The lane has a pad time</tspan></text>
<line x1="300" y1="38" x2="300" y2="56" class="wiki-diagram__arrow" marker-end="url(#pb-arrow)"/>
<rect x="110" y="56" width="380" height="76" rx="4" class="wiki-diagram__box"/>
<text x="300" y="77" text-anchor="middle">Any sign the pad time is wrong?</text>
<text x="166" y="91"><tspan x="166" dy="0">• Pad and backup times differ by about 0.30 s or more</tspan><tspan x="166" dy="14">• Place judges' finish order disagrees</tspan><tspan x="166" dy="14">• Swimmer missed the pad or touched it softly</tspan></text>
<line x1="300" y1="132" x2="300" y2="146" class="wiki-diagram__arrow"/>
<line x1="110" y1="146" x2="400" y2="146" class="wiki-diagram__arrow"/>
<line x1="110" y1="146" x2="110" y2="164" class="wiki-diagram__arrow" marker-end="url(#pb-arrow)"/>
<line x1="400" y1="146" x2="400" y2="164" class="wiki-diagram__arrow" marker-end="url(#pb-arrow)"/>
<text x="116" y="160">No</text>
<text x="406" y="160">Yes, and confirmed</text>
<rect x="20" y="164" width="180" height="42" rx="4" class="wiki-diagram__box"/>
<text x="110" y="182" text-anchor="middle"><tspan x="110" dy="0">The pad time</tspan><tspan x="110" dy="14">is official</tspan></text>
<rect x="250" y="164" width="300" height="42" rx="4" class="wiki-diagram__box"/>
<text x="400" y="182" text-anchor="middle"><tspan x="400" dy="0">Use the lane's backup button times,</tspan><tspan x="400" dy="14">counting only valid ones</tspan></text>
<line x1="400" y1="206" x2="400" y2="222" class="wiki-diagram__arrow"/>
<line x1="79" y1="222" x2="523" y2="222" class="wiki-diagram__arrow"/>
<line x1="79" y1="222" x2="79" y2="238" class="wiki-diagram__arrow" marker-end="url(#pb-arrow)"/>
<line x1="227" y1="222" x2="227" y2="238" class="wiki-diagram__arrow" marker-end="url(#pb-arrow)"/>
<line x1="375" y1="222" x2="375" y2="238" class="wiki-diagram__arrow" marker-end="url(#pb-arrow)"/>
<line x1="523" y1="222" x2="523" y2="238" class="wiki-diagram__arrow" marker-end="url(#pb-arrow)"/>
<rect x="10" y="238" width="138" height="72" rx="4" class="wiki-diagram__box"/>
<text x="79" y="264" text-anchor="middle"><tspan x="79" dy="0">Three times,</tspan><tspan x="79" dy="14">two agree:</tspan><tspan x="79" dy="14">that time</tspan></text>
<rect x="158" y="238" width="138" height="72" rx="4" class="wiki-diagram__box"/>
<text x="227" y="264" text-anchor="middle"><tspan x="227" dy="0">Three times,</tspan><tspan x="227" dy="14">all different:</tspan><tspan x="227" dy="14">the middle one</tspan></text>
<rect x="306" y="238" width="138" height="72" rx="4" class="wiki-diagram__box"/>
<text x="375" y="264" text-anchor="middle"><tspan x="375" dy="0">Two times:</tspan><tspan x="375" dy="14">their average,</tspan><tspan x="375" dy="14">thousandths dropped</tspan></text>
<rect x="454" y="238" width="138" height="72" rx="4" class="wiki-diagram__box"/>
<text x="523" y="257" text-anchor="middle"><tspan x="523" dy="0">One time: that time,</tspan><tspan x="523" dy="14">unless it conflicts;</tspan><tspan x="523" dy="14">then the administrative</tspan><tspan x="523" dy="14">official decides</tspan></text>
<rect x="10" y="330" width="580" height="64" rx="4" class="wiki-diagram__box wiki-diagram__box--note"/>
<text x="300" y="352" text-anchor="middle"><tspan x="300" dy="0">Not on the main path: a watch time can stand in when both the pad and the buttons fail.</tspan><tspan x="300" dy="14">A fault that shifts every lane in a heat equally, such as an early or late start,</tspan><tspan x="300" dy="14">is corrected across the heat by the average difference between pad and backup times.</tspan></text>
</svg>
<figcaption>How a lane's official time is settled under USA Swimming rule 102.23.4 when the pad and the backup buttons have both recorded a time. Other governing bodies set their own procedures. The dashed box covers cases outside the main path.</figcaption>
</figure>

The steps in the flowchart are set out in rule 102.23.4 of the USA Swimming rulebook.[^usasrules]

## Products

[Colorado Time Systems](../../../../vendors/colorado-time-systems.md) (CTS) and
Daktronics each make the wired backup pushbutton used with their swim-timing systems, and
Swiss Timing supplies its OIT3 button with the Quantum harness. This section catalogs the
three buttons; Daktronics states that its buttons and the CTS buttons are cross-compatible, so
either can be used on either maker's lane wiring.[^dakcompat]

| Product | Manufacturer | Cord | Connection | Status |
|---|---|---|---|---|
| [Colorado Time Systems Pushbutton](cts.md) | Colorado Time Systems | 6 ft | Banana plug into deck plate or cable harness | Current |
| [Daktronics Pushbutton](daktronics.md) | Daktronics | Not published | Banana plug into lane module or deck plate | Supplied with deck-cabling systems |
| [Swiss Timing OIT3 Pushbutton](swiss-timing.md) | Swiss Timing | Not published | Banana plug into a Quantum harness module or deck plate | Supplied with Quantum harness sets |

Each article covers its button in full, its role in the timing layers, how a timer uses
it, how it connects, and its care; this page is the shared overview they refer back
to.

## See also

- [Semi-automatic timing](../index.md): the overview of the timing class the button
  belongs to
- [Dolphin Wireless Stopwatch Timing System](../dolphin.md): the wireless alternative to
  wired buttons
- [Touchpads](../../touchpad/index.md): the primary lane input the pushbutton backs up
- [Timers](../../timers/index.md): the timing console a pushbutton reports to
- [Start systems](../../starter/index.md): the starter equipment on the other side of the
  timing system
- [Equipment](../../../index.md): the equipment reference
- [Colorado Time Systems](../../../../vendors/colorado-time-systems.md): the
  manufacturer

## References

[^usaswim]: [USA Swimming, Quick Guide to the Timing Adjustment Rule (102.24)](https://www.usaswimming.org/docs/default-source/officialsdocuments/officials-training-resources/timing-adjustment-resources/timing-adjustment-rule-change.pdf) (pad time is the official time when the automatic equipment works; primary/secondary/tertiary layers; backup times used on a confirmed malfunction).
[^usasrules]: [USA Swimming, 2025 Rulebook](https://websitedevsa.blob.core.windows.net/sitefinity/docs/default-source/governance/governance-lsc-website/rules_policies/rulebooks/2025-mini-rulebook.pdf), 102.23.4 (determining official time).
[^swimswam]: [SwimSwam, New USA Swimming Timing Malfunction Rules Take Effect](https://swimswam.com/usa-swimming-timing-malfunction-rules-change/) (independent coverage of the primary/secondary/tertiary timing hierarchy).
[^tdp]: [Colorado Time Systems, Titanium Deckplate (TDP)](https://www.coloradotime.com/titanium-deckplate/) (plug-in connections for touchpads and A/B/C backup pushbuttons).
[^watiming]: [Wikipedia, Aquatic timing system](https://en.wikipedia.org/wiki/Aquatic_timing_system) (touchpads as primary timing with backup buttons and stopwatches).
[^ctsshop]: [Colorado Time Systems, Backup button (PB-6)](https://shop.coloradotime.com/products/backup-button-pb-6) (the swim timing "pickle").
[^dakcompat]: [Daktronics, Are Daktronics and Colorado Timing System push buttons cross compatible? (KB DD2017009)](https://www.daktronics.com/en-us/support/kb/DD2017009).

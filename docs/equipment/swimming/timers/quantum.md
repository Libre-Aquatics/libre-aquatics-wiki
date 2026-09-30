---
title: Swiss Timing Quantum Aquatics
description: >-
  Quantum Aquatics is the Swiss Timing swim timing console sold under the Omega name, in
  single and primary-and-secondary versions.
tags:
  - Equipment
  - Timing
  - Swimming
infoboxTitle: Quantum Aquatics
infobox:
  - label: Manufacturer
    value: Swiss Timing
  - label: Part number
    value: '`3480.911`, `3480.911.IS` (Primary); `3480.912` (Primary & Secondary)'
  - label: Type
    value: Swim timing console
  - label: Manual
    value: '[Quantum Aquatics datasheet](https://www.swisstiming.com/fileadmin/Resources/Data/Datasheets/DOCM_AQ_Quantum_1015_EN.pdf)'
---

<!--
Research notes, Quantum Aquatics.

Surfaced while building out Splash Meet Manager, which has two generations of interface to
it. The Swiss Timing vendor page, the StartTime V page and the Daktronics RTOP page already
name the console without a page.

What is established, from the Swiss Timing datasheet (Quantum AQ/10-2015, created November
2015, two pages, read in full):
  - Sold as OMEGA Quantum Aquatics. Versions: Primary without internal power supply
    (3480.911), Primary with internal power supply (3480.911.IS), and Primary & Secondary
    (3480.912), the last being two complete timers with a data switch choosing between
    them. Separate power supply for the dual version (3480.932).
  - The timer logs every input with a code and passes data to PCs over USB; processing
    happens on the computer, so stored races are limited only by disk space. Start lists,
    titles and records can be loaded so that the timer produces named result lists for a
    printer or a scoreboard. Ships with the swimming software, plus cables for an external
    battery and PC.
  - Specifications: capacity 23:59:59.99; resolution to 1/100 s with 1/10,000 s sampling;
    ageing ±4 ppm over 10 years; stability ±0.1 ppm over 0–45 °C; external battery
    10–18 V DC; current 0.55 A (Primary) or 1.1 A (Primary & Secondary) without harness
    modules, 1.00 A or 2.0 A with 24; operating 0–60 °C; 0–94 % humidity non-condensing;
    CE and RoHS.
  - Options listed with numbers: laptop-compatible Quantum 3397.910, cases 3480.925 and
    3480.926, battery online printer 3480.920, Bluetooth RS422 adapter 3440.708, thermal
    printer 3330.661, double-start cable 3330.651.
  - Swiss Timing says it has been used at the Olympic Games and World Championships. Vendor
    claim; not independently checked here.

From Splash Meet Manager's documentation: an interface from Meet Manager build 20948 using a
shared data folder, with the "DH Splash protocol" selected in Quantum; a second interface
over UDP/TCP from January 2021; and from August 2024 a "Splash V2" setting that needs
Quantum 6.1.19 or later, which suggests "Quantum" also names the PC software, not only the
box. Daktronics' knowledge base says its RTOP relay platforms do not work with Quantum.

Still to research: introduction date and predecessor (the older ARES 21 console is named in
Splash's 2010 list); the Quantum software versions; harness modules; how the
primary-secondary switch works in practice.

Sources: swisstiming.com DOCM_AQ_Quantum_1015_EN.pdf; wiki.swimrankings.net Meet Manager
Omega Quantum Aquatics page and release notes; Daktronics KB DD2090313 (via the RTOP page).
-->

This article is a stub. Quantum Aquatics is the [Swiss Timing](../../../vendors/swiss-timing.md)
swim timing console sold under the Omega name as a Primary unit (`3480.911`) or as a
Primary & Secondary pair of complete timers with a data switch (`3480.912`).

It works with the [StartTime V](../starter/starttime-v.md) starter and connects to
[Splash Meet Manager](../../../software/splash-meet-manager.md); see the
[timers overview](index.md) for the shared background that applies to every timing console.

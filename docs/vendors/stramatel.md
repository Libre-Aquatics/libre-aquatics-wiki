---
title: Stramatel
description: >-
  Stramatel is a French maker of scoreboards and swimming timing systems, based in
  Le Cellier near Nantes.
tags:
  - Equipment
  - Reference
infoboxTitle: Stramatel
infobox:
  - label: Industry
    value: Scoreboards and sports timing
  - label: Key products
    value: Aquasport V timing system; Aquaswim software; Aquatouch touchpads
  - label: Headquarters
    value: Le Cellier, France
  - label: Website
    value: stramatel.com
    href: 'https://www.stramatel.com/en/'
---

<!--
Research notes, Stramatel.

Surfaced while building out Splash Meet Manager, which has an interface to the Stramatel
AquaSwim V system.

What is established:
  - Stramatel's swimming timing page (stramatel.com/en/sport/aquatic-sports/swimming-timing-sytem/,
    read September 2026) gives the address ZI de Bel Air, 44850 Le Cellier, France, and
    describes the company as the only French maker of competition swimming timing. That is
    the vendor's claim. The system is sold as parts: Aquaswim competition software; the
    Aquasport V timer, which includes Aquaswim; Aquatouch touchpads; AquaFalse false-start
    pads for the blocks; an Aquastart start system; AquaConnect boxes for buttons and
    touchpads; scoreboards (a 452 PC 16.8.8 board is named) and LED video screens; and an
    Aquatrolley for touchpads. The company says the system was built to meet FINA (now
    World Aquatics) requirements. It also claims 45 years in sport and events and over
    80,000 installations in over 80 countries; both are vendor claims and cover all of its
    sports, not swimming alone.
  - Splash Meet Manager's Swim Wiki page for Stramatel AquaSwim V
    (wiki.swimrankings.net/index.php/Meet_Manager:Timing_System_Stramatel_AquaSwimV): the
    interface exists from Meet Manager build 29062, last corrected in build 31517. Meet
    Manager writes a meet.xml holding one session's events and heats (a Meet Manager event
    is an AquaSwim session, a heat an AquaSwim race) and reads per-heat result files named
    Id_nnnn-*.stra, checking for new ones every second. A January 2016 release note adds
    export for final events. The 2026 Splash site spells the company StramaTel.

Still to research: founding date and ownership; whether any other meet program interfaces
with AquaSwim; where the system is installed; scoreboard range beyond swimming.

Sources: stramatel.com (swimming timing page); wiki.swimrankings.net Stramatel page and
Meet Manager release notes; splash-software.ch/en/.
-->

This article is a stub. Stramatel is a French manufacturer of scoreboards and sports timing
equipment, based in Le Cellier, whose swimming line is the Aquasport V timer with Aquaswim
software and Aquatouch touchpads.

[Splash Meet Manager](../software/splash-meet-manager.md) exchanges start lists and results
with the Aquaswim software through files; see the [vendors](index.md) register for the
companies this wiki covers.

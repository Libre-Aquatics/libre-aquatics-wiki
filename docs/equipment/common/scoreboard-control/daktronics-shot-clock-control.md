---
title: Daktronics shot clock control
description: >-
  The Daktronics 0A-1196-0031 is a handheld shot clock control with a start/stop rocker and reset
  buttons that plugs into an All Sport console.
tags:
  - Equipment
  - Scoring
  - Water polo
infoboxTitle: Shot clock control
infobox:
  - label: Manufacturer
    value: Daktronics
  - label: Part number
    value: '`0A-1196-0031`'
  - label: Type
    value: Remote shot clock switch
  - label: Connection
    value: J7 on the All Sport 5000
---

<!--
Research notes, Daktronics 0A-1196-0031. Surfaced 2026-10-21 while building out
all-sport-5000.md.

Sources:
  - Daktronics, All Sport 5000 manual ED-11976 Rev 32 (2024, held):
    - Basic Operation, Shot Clock Control: plugs into J7; rocker for start/stop and one or more
      reset buttons; pressing reset loads the reset value and holds the shot clock; releasing
      it restarts the count. Holding reset in FIBA basketball mode blanks the display.
      Set to independent, the shot clock runs only from this switch; in synchronized mode it follows the
      main clock if it was running.
    - Water Polo: the Reset 1 setting is the value the remote control's reset button loads.
    - Drawings DWG-124688 (shot clock block diagram) and the hockey/outdoor sheets
      DWG-124689/124690 each record a revision "changed 0A-1166-0004 to 0A-1196-0031". The text
      extraction scrambles which revision line belongs to which date (candidates span 2000 to
      2012), so when the part number changed is unresolved. Rendering those pages would settle it.
  - Rear-view drawing DWG-102142: J7 is a 6-pin jack with switch inputs 3-5; input 4 usually
    shot/play clock stop, input 5 reset.
  - Daktronics, All Sport & OmniSport Revision Histories (DD3679410): the 5000's FIBA setting
    (v4.1.0, August 2014) blanks the shot clock while reset is held.
Not found: number of reset buttons on each version (the manual says "button(s)"), cord length.
-->

This article is a stub. The Daktronics shot clock control (`0A-1196-0031`) is a handheld
switch with a start/stop rocker and reset buttons that plugs into jack J7 of an
[All Sport 5000](all-sport-5000.md), where pressing reset loads and holds the configured shot
time until the button is released.

See the [scoreboard control overview](index.md) for the shared background on scoreboard
controllers.

---
title: Omega MTE judge's keypad
description: >-
  The MTE is the Swiss Timing judge's portable terminal sold under the Omega name, a handheld
  ZigBee keypad for scoring diving and artistic swimming.
tags:
  - Equipment
  - Diving
  - Artistic swimming
  - Scoring
infoboxTitle: MTE judge's keypad
infobox:
  - label: Manufacturer
    value: Swiss Timing (Omega)
  - label: Part number
    value: '`3474.900` (keypad); sets `3474.905`–`3474.914`'
  - label: Type
    value: Handheld judge's scoring terminal
  - label: Connection
    value: ZigBee radio, 100 m in open space; RS232, RS422 or CAN bus by cable
  - label: Dimensions
    value: 220 × 115 × 95 mm, excluding antenna
  - label: Weight
    value: 480 g, with battery
  - label: Power
    value: Internal battery, 12 hours at 20 °C; charging at 8–30 V DC
  - label: Manual
    value: '[MTE Judge''s Portable Terminal datasheet (3474.525.02)](https://www.swisstiming.com/fileadmin/Resources/Data/Datasheets/DOCM_AQ_MTEjudgesPortableTerminal_0913_EN.pdf)'
---

<!--
Research notes, Omega MTE judge's keypad.

Surfaced while building out div-scoring-manager.md.

Swiss Timing datasheet "MTE - Judge's portable terminal", 3474.525.02 (PDF created 24 November
2008; filename dated 09/13), live on swisstiming.com in October 2026. Used by judges in diving,
synchronised diving and synchronised swimming. Wireless link to a central scoring system over
ZigBee; 18 keys (11 numerals, 7 function keys), each a separate microswitch under an embossed
plastic sheet; 128 x 64 pixel LCD showing up to 8 lines of 21 characters; one top connector for
power and charging (8-30 V DC) and wired RS232, RS422 or CAN bus data; SMA antenna, adjustable;
100 m range in open space; built-in buzzer; polyamide case; 220 x 115 x 95 mm without antenna;
480 g with battery; 12 h at 20 C; 0-50 C; IP64; RoHS. Typical set-up: up to 14 keypads to a
ZigBee master unit, linked to the computer by USB. Sets: 3474.905 (5 keypads), .907 (7), .909
(9), .910 (10), .914 (14), each with a master, power supplies (one per 10 keypads) and cases;
3474.900 single keypad.

DIV Scoring Manager manual (3480.513.02, 2022): Run Event takes MTE keypads at 19,200 baud 8N1,
either wireless through an XBee connector or cabled through Swiss Timing's INT 131 converter
(INT131: USB to two RS232 and two RS422/485 ports, manual 3434.502.02, November 2007), with a
second port for a panel split across the pool. DV quick start (2014): wired or wireless.
SWA Scoring Manager also lists them. The datasheet says ZigBee and the DIV manual XBee; XBee is a
ZigBee-family radio module, but no source says the MTE master is an XBee.

Still to research: introduction date; manual; how the wired option works; whether the keypads
work with Quantum or other Swiss Timing consoles.
-->

This article is a stub. The MTE is a Swiss Timing handheld judge's keypad, sold under the Omega
name, with an 18-key keyboard and a small graphic display, which sends diving and artistic
swimming awards by ZigBee radio, or by cable, to scoring software such as
[DIV Scoring Manager](../../software/div-scoring-manager.md).

See the [diving equipment overview](index.md) for the shared background on judging hardware.

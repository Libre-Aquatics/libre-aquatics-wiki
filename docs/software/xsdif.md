---
title: XSDIF
description: >-
  XSDIF is the XML form of United States Swimming's interchange format, accepted by the
  SWIMS database alongside the fixed-width SDIF and Hy-Tek's CL2.
tags:
  - Software
  - Meet management
  - Reference
---

<!--
Research notes, XSDIF.

Surfaced while building out SDIF. This page is deliberately thin, because the publisher's
own documentation of it cannot currently be reached.

The dead end, recorded so it is not repeated. USA Swimming had a help page titled "About
SDIF and XSDIF" at swims.usaswimming.org/SWIMSHelp/About_SDIF_and_XSDIF.htm. The host no
longer resolves. web.archive.org is not fetchable from this session, so the archived copy
could not be retrieved either; someone with archive access should start there, because it
is almost certainly the only description by the organization that publishes the format.
Search engines still surface the page and summarize it as saying that SWIMS imports SDIF
and exports XSDIF, an XML-based form. That summary is second-hand and is not treated as a
source here.

What is actually sourced. Snake River Swimming's "Required Procedures for ELECTRONIC
Athlete Registrations via Team Unify", a three-page LSC procedure document whose only
internal year is 2016, hosted at gomotionapp.com. It states that a club's team-management
software must be compatible with SWIMS and gives the accepted formats as SDIF version 3
(*.sd3), COM Link (*.cl2) and XSDIF (*.xml). That is an LSC restating a requirement rather
than USA Swimming stating it, and it is the basis for everything on this page. Note that
the same document calls CL2 "COM Link", attaching the Commlink name to the CL2 extension.

No specification for XSDIF was found anywhere: no schema, no element list, no version
number, no date of introduction. It is not known whether it is a direct XML transcription
of the SDIF record set or a different data model, and nothing here should be taken to
imply either. Nor is it known whether SWIMS still accepts it.

Still to research: the archived USA Swimming help page; whether a schema was ever
published; which programs write it; when it appeared; and whether it survived the SWIMS
rebuild.
-->

This article is a stub. XSDIF is an XML form of United States Swimming's interchange
format, named in an LSC registration procedure as one of the three file types a club's
software must be able to produce for the SWIMS database, carried in `.xml` files alongside
[SDIF](sdif.md) version 3 and Hy-Tek's [CL2](cl2.md).

No specification for it has been found, and USA Swimming's own description of it is no
longer reachable; see the [software overview](index.md) for what this section covers.

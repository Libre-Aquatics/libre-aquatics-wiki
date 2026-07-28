---
title: About Libre Aquatics Wiki
tags:
  - Reference
---

Libre Aquatics Wiki is a free reference for the equipment, timing hardware, and meet
operations behind competitive aquatics: swimming, diving, water polo, artistic
swimming, and open water. Its text is published under the
[CC BY-SA 4.0 licence](https://creativecommons.org/licenses/by-sa/4.0/), so anyone may
reuse and adapt it on the same terms. It is facility-neutral: written to be useful at
any pool or venue, not tied to a single institution.

The focus is operations (how competitions are run) rather than coaching,
training, or sport history.

## Scope

The wiki covers the equipment and procedures used to stage a competition:

- In scope: timing hardware and consoles, start systems, touchpads and other lane
  hardware, the vendors that make it, and the meet- and team-management work of
  entering, seeding, scoring, and publishing an event, across swimming, diving,
  water polo, artistic swimming, and open water.
- Out of scope: coaching and training, stroke technique, athlete or team histories,
  and record-keeping. Those are covered well elsewhere; this reference does not
  duplicate them.

Pages describe how equipment and procedures work in general, not how any one pool
or organization has chosen to set them up.

## The Libre Aquatics project

Libre Aquatics Wiki is one part of Libre Aquatics, a family of open-source tools for
aquatic sports:

- [Libre Aquatics Meet](../software/libre-aquatics-meet.md): meet-management software.
- [Libre Aquatics Team](../software/libre-aquatics-team.md): team- and roster-management software.
- Libre Aquatics Wiki, this reference, documenting the systems the software works with.

*Libre* means free, as in free and open, the sense used in "free/libre software".

## How the wiki is organized

The wiki is organized around the equipment and operations of running a competition:

- [Equipment](../equipment/index.md), the catalog of hardware, grouped by role (timers,
  start systems, touchpads, pushbuttons, and more) and by discipline, with a
  [common equipment](../equipment/common/index.md) section for gear shared across sports.
- [Meet management](../meet-management/index.md) and
  [team management](../team-management/index.md), the operations of planning, seeding,
  scoring, and publishing an event, and the [Libre Aquatics software](../software/index.md)
  built for them.
- The [vendors](../vendors/index.md) that make the equipment.

Every article is tagged by its sport(s) and topic(s), so a page is reachable from
both its sport and its subject. The full tag index is on the
[Categories](../categories.md) page.

## Naming and images

Products and companies are named nominatively, to identify the equipment a page
describes, without implying any endorsement. The wiki does not reproduce vendor logos
or host vendor manuals; it links each source at the publisher instead. Infoboxes are
text-only, and any image must be original or cleared for reuse, credited, and
licensed. The full policy is on the [Sources & citations](sources.md)
page.

## Contributing

Libre Aquatics Wiki is written as plain Markdown in a public Git repository and built with
[Astro](https://astro.build/). Anyone can
propose an edit or a new article. Most of the wiki is still to be written: the
overview pages set the structure, and leaf articles (specific roles, events, rules,
and equipment) are filled in over time.

A new article is a Markdown file under the matching section of `docs/`, with front
matter giving its `title` and `tags`, registered in the site navigation. Articles
follow a consistent shape: a lead paragraph, topical sections, any specifications or
details, a "See also" list, and cited references. They are written in a plain,
neutral tone. Claims are backed by sources: primary documents such as vendor manuals
and governing-body rules, corroborated by independent reporting, and cited as
footnotes.

The full contributor guide, covering sourcing standards, house style, and how to add
a page, lives in `CONTRIBUTING.md` in the
[wiki's repository](https://github.com/Libre-Aquatics/libre-aquatics-wiki). See
[Sources & citations](sources.md) for how the wiki references vendor manuals and
rulebooks.

Corrections are welcome from anyone who works with this equipment, including on
points the manuals get wrong. Open an issue on the repository, or email
info@libreaquatics.org.

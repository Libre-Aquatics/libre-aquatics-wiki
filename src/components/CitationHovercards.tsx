import { useEffect, useRef, useState } from 'react';

/*
 * A React "island": the article HTML is fully server-rendered and its footnotes
 * work with zero JS (clicking [1] jumps to the reference). This component layers
 * an *enhancement* on top -- hovering or focusing a footnote marker shows the
 * reference in a popover, without leaving your place. This is the kind of thing
 * a static page cannot do on its own, and exactly where dropping in React earns
 * its keep. If JS never loads, nothing here runs and the page is still fine.
 *
 * It reads the reference text from the footnotes that GFM already rendered into
 * the page (`a[data-footnote-ref]` markers -> `<li id="user-content-fn-...">`),
 * so authors keep writing plain Markdown `[^id]` footnotes.
 */

interface CardState {
  html: string;
  top: number;
  left: number;
}

export default function CitationHovercards() {
  const [card, setCard] = useState<CardState | null>(null);
  const hideTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const markers = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('a[data-footnote-ref]'),
    );
    if (markers.length === 0) return;

    const referenceHtml = (marker: HTMLAnchorElement): string => {
      const id = decodeURIComponent((marker.getAttribute('href') ?? '').replace(/^#/, ''));
      const li = id ? document.getElementById(id) : null;
      if (!li) return '';
      const clone = li.cloneNode(true) as HTMLElement;
      clone.querySelectorAll('a[data-footnote-backref]').forEach((n) => n.remove());
      return clone.innerHTML.trim();
    };

    const open = (event: Event) => {
      window.clearTimeout(hideTimer.current);
      const marker = event.currentTarget as HTMLAnchorElement;
      const html = referenceHtml(marker);
      if (!html) return;
      const rect = marker.getBoundingClientRect();
      const maxLeft = document.documentElement.clientWidth - 340;
      setCard({
        html,
        top: rect.bottom + 8,
        left: Math.max(12, Math.min(rect.left, maxLeft)),
      });
    };

    const scheduleClose = () => {
      hideTimer.current = window.setTimeout(() => setCard(null), 160);
    };

    markers.forEach((marker) => {
      marker.addEventListener('mouseenter', open);
      marker.addEventListener('mouseleave', scheduleClose);
      marker.addEventListener('focus', open);
      marker.addEventListener('blur', scheduleClose);
    });

    return () => {
      markers.forEach((marker) => {
        marker.removeEventListener('mouseenter', open);
        marker.removeEventListener('mouseleave', scheduleClose);
        marker.removeEventListener('focus', open);
        marker.removeEventListener('blur', scheduleClose);
      });
      window.clearTimeout(hideTimer.current);
    };
  }, []);

  if (!card) return null;

  return (
    <div
      className="cite-hovercard"
      role="tooltip"
      style={{ top: `${card.top}px`, left: `${card.left}px` }}
      onMouseEnter={() => window.clearTimeout(hideTimer.current)}
      onMouseLeave={() => setCard(null)}
      dangerouslySetInnerHTML={{ __html: card.html }}
    />
  );
}

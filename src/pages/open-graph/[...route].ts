// Per-page Open Graph cards, generated at build time. BaseLayout points
// og:image and twitter:image here via ogImagePath() in src/lib/seo.ts, so the
// keys below must match the route keys that helper produces: '' (the Main
// Page) becomes 'index', and every article uses idToSlug(article.id).
//
// The cards mirror the dark theme in src/styles/wiki.css, which reads better in
// the feeds and chat clients that render them: the dark page background warming
// to the titlebar tint, a serif title and sans description as on the pages
// themselves, and the accent rule down the leading edge.
//
// An article with its own photograph insets it above the title. It is not used
// as a full-bleed background: the library has no scrim, so text over the photo
// fell to grey-on-pale-tile and the 1200x630 frame cropped out the subject.
//
// Fonts are vendored in src/fonts/ rather than fetched. Left to itself
// astro-og-canvas downloads Noto Sans from api.fontsource.org on every build,
// and CI caches ~/.npm rather than node_modules, so an outage there would break
// the deploy. Noto Sans and Noto Serif are both SIL OFL 1.1 under one licence,
// which sits beside the files.
//
// These URLs 404 under `astro dev`. A route with a dynamic segment does not get
// Astro's file-extension exemption from `trailingSlash: 'always'`, so the dev
// server matches `/open-graph/x.png/` while the emitted tags use the slash-less
// path. The static build is unaffected: check the cards in dist/ or with
// `npm run preview`, never in dev.
import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';
import { imageSize } from '../../lib/imageSize';
import { idToSlug } from '../../lib/routes';
import { PAGE_META, leadImage, summarize } from '../../lib/seo';

interface Card {
  title: string;
  description: string;
  image?: string | null;
}

// The inset is scaled by width with its height following, and the title starts
// below it, so height is the budget that matters: at 630px tall with 60px
// padding above and below, a photograph taller than this would push the text
// off the card. Narrowing a tall image is the only lever, because passing both
// dimensions to astro-og-canvas scales the axes independently and distorts it.
const INSET_MAX_WIDTH = 190;
const INSET_MAX_HEIGHT = 240;

/** Widest the inset may be drawn without its height exceeding the budget. */
function insetWidth(sitePath: string): number {
  const size = imageSize(`./public${sitePath}`);
  if (!size || size.width <= 0 || size.height <= 0) return INSET_MAX_WIDTH;
  const widthAtMaxHeight = Math.round((INSET_MAX_HEIGHT / size.height) * size.width);
  return Math.max(1, Math.min(INSET_MAX_WIDTH, widthAtMaxHeight));
}

const articles = await getCollection('articles');

const pages: Record<string, Card> = {
  index: { ...PAGE_META.home },
  categories: { ...PAGE_META.categories },
};
for (const article of articles) {
  pages[idToSlug(article.id)] = {
    title: article.data.title,
    description: article.data.description ?? summarize(article.body),
    image: leadImage(article.body),
  };
}

export const { getStaticPaths, GET } = await OGImageRoute({
  param: 'route',
  pages,
  getImageOptions: (_path, page: Card) => ({
    title: page.title,
    description: page.description,
    padding: 60,
    // Dark --wiki-bg (#1b1c1d) into its --wiki-titlebar, which is the accent at
    // 18% over that background and resolves to #1f293c.
    bgGradient: [
      [27, 28, 29],
      [31, 41, 60],
    ],
    // Dark --wiki-accent (#6699ff), matching the article page's accent rule.
    border: { color: [102, 153, 255], width: 24, side: 'inline-start' },
    ...(page.image
      ? { logo: { path: `./public${page.image}`, size: [insetWidth(page.image)] } }
      : {}),
    fonts: [
      './src/fonts/NotoSerif-Regular.ttf',
      './src/fonts/NotoSerif-Bold.ttf',
      './src/fonts/NotoSans-Regular.ttf',
      './src/fonts/NotoSans-Bold.ttf',
    ],
    font: {
      // Headings on the site are serif; dark --wiki-fg is #e8e8e8.
      title: {
        color: [232, 232, 232],
        size: 62,
        weight: 'Bold',
        lineHeight: 1.2,
        families: ['Noto Serif'],
      },
      // Body copy is the sans stack; dark --wiki-muted is #b0b0b0.
      description: {
        color: [176, 176, 176],
        size: 29,
        lineHeight: 1.4,
        families: ['Noto Sans'],
      },
    },
  }),
});

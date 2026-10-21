import rss from '@astrojs/rss';
import { getPosts, postUrl, excerpt, SITE } from '../lib/blog';
export async function GET(context) {
  const posts = (await getPosts()).slice(0, 30);
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: posts.map((p) => ({ title: p.data.title, pubDate: p.data.date, link: postUrl(p), description: excerpt(p, 60) })),
    customData: '<language>es-es</language>',
  });
}

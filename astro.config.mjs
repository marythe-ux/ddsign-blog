import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Los enlaces a otras webs se abren en pestaña nueva (como en el blog original).
function externalLinksNewTab() {
  const walk = (node) => {
    if (node.type === 'element' && node.tagName === 'a') {
      const href = String(node.properties?.href ?? '');
      if (/^https?:\/\//i.test(href) && !/^https?:\/\/(www\.)?ddsign\.es(\/|$)/i.test(href)) {
        node.properties.target = '_blank';
        node.properties.rel = ['noopener', 'noreferrer'];
      }
    }
    (node.children || []).forEach(walk);
  };
  return (tree) => walk(tree);
}

export default defineConfig({
  site: 'https://ddsign.es',
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-dark' },
    rehypePlugins: [externalLinksNewTab],
  },
});

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ddsign.es',
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: { shikiConfig: { theme: 'github-dark' } },
});

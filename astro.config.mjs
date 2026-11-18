// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://benwebb.com',
  integrations: [
    icon(),
    sitemap({
      // Served by a separate GitHub Pages project on the same domain.
      customPages: ['https://benwebb.com/wis-live/', 'https://benwebb.com/amtracker/'],
    }),
  ],
  redirects: {
    '/wis': 'https://benwebb.com/wis-live',
  },
});

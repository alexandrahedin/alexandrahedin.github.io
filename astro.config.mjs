import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://alexandrahedin.se',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin') && !page.endsWith('/404/'),
      i18n: { defaultLocale: 'en', locales: { en: 'en', sv: 'sv' } },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
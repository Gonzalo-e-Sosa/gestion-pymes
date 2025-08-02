// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import solidJs from '@astrojs/solid-js';
import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [solidJs({ devtools: true }), db()],
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
  },
});

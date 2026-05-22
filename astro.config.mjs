// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: 'https://nickt26-coder.github.io',
  base: '/personal-website',

  vite: {
    plugins: [tailwindcss()]
  }
});
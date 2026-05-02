import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://erreka-meet-point.example',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'eu'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true
    }
  },
  build: {
    inlineStylesheets: 'auto'
  }
});

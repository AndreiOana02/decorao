import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://decorao.ro',
  compressHTML: true,
  server: {
    host: true,
    port: 4321,
  },
});

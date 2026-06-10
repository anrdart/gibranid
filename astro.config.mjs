// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://demo.gibran.id',
  output: 'static',
  adapter: cloudflare(),
  // Static site never uses sessions; opt out of the adapter's default
  // Cloudflare KV session driver so it stops provisioning a SESSION KV
  // namespace (which caused redeploy error 10014: namespace title exists).
  session: { driver: { entrypoint: 'unstorage/drivers/null' } },
  integrations: [sitemap(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Fraunces',
      cssVariable: '--font-serif',
      weights: [300, 400, 500, 700, 900],
      styles: ['normal', 'italic'],
    },
    {
      provider: fontProviders.google(),
      name: 'Instrument Serif',
      cssVariable: '--font-display',
      weights: [400],
      styles: ['normal', 'italic'],
    },
    {
      provider: fontProviders.google(),
      name: 'Geist',
      cssVariable: '--font-body',
      weights: [300, 400, 500, 600, 700],
      styles: ['normal'],
    },
    {
      provider: fontProviders.google(),
      name: 'Geist Mono',
      cssVariable: '--font-mono',
      weights: [400, 500],
      styles: ['normal'],
    },
  ],
});

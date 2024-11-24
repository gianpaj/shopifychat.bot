import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import compressor from 'astro-compressor';

export default defineConfig({
  output: 'static',
  site: 'https://shopifychat.bot',
  integrations: [
    tailwind(),
    icon({
      include: {
        mdi: ['twitter', 'github', 'linkedin'],
      },
    }),
    compressor(),
  ],
  prefetch: true,
});

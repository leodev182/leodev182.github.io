import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel'

export default defineConfig({
  server: { host: '0.0.0.0' },
  output: 'server',
  adapter: vercel(),
  site: 'https://nonedev-web.vercel.app',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,   // /proyectos (es) y /en/projects (en)
    },
  },
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
})

import { defineNuxtConfig } from 'nuxt'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import eslintPlugin from 'vite-plugin-eslint'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  vite: {
    plugins: [
      Components({
        resolvers: [AntDesignVueResolver({ resolveIcons: true })],
      }),
      eslintPlugin(),
    ],
    // @ts-expect-error: Missing ssr key
    ssr: {
      noExternal: ['moment', 'compute-scroll-into-view', 'ant-design-vue', '@ant-design/icons-vue'],
    },
  },
  buildModules: ['@pinia/nuxt'],
})

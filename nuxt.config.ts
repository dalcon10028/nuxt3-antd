import { defineNuxtConfig } from 'nuxt'
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // modules: ['./modules/antdv'],
  vite: {
    plugins: [
      Components({
        // add option {resolveIcons: true} as parameter for resolving problem with icons
        resolvers: [AntDesignVueResolver({resolveIcons: true})],
      }),
    ],
    // @ts-expect-error: Missing ssr key
    ssr: {
      noExternal: ['moment', 'compute-scroll-into-view', 'ant-design-vue','@ant-design/icons-vue'],
    },  
  },
})

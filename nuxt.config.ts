// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';
import Lara from '@primeuix/themes/lara';
import Nora from '@primeuix/themes/nora';


export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@primevue/nuxt-module',
    '@pinia/nuxt',
  ],
  googleFonts: {
    families: {
      Montserrat: true
    }
  },
  image: {
    domains: ['https://dummyjson.com']
  },
  css: ["@/assets/styles/tailwind.css"],
  // primevue: {
  //   options: {
  //       theme: {
  //           preset: Nora
  //       }
  //   }
  // },
  primevue: {
    options: {
        theme: 'none'
    }
},
  postcss: {
    plugins: {
        "postcss-import": {},
        tailwindcss: {},
        autoprefixer: {},
    },
  },
  runtimeConfig: {
    movieApiUrl: '',
  },
})
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   modules: ["@nuxt/eslint", "@nuxt/ui", "@vueuse/nuxt", "@pinia/nuxt"],

   ssr: false,

   components: {
      dirs: [
         {
            path: "~/components",
            pathPrefix: false,
         },
      ],
   },

   devtools: {
      enabled: true,
   },

   css: ["~/assets/css/main.css"],

   ui: {
      theme: {
         colors: [
            "primary",
            "secondary",
            "accent",
            "error",
            "warning",
            "success",
            "info",
         ],
      },
   },

   runtimeConfig: {
      apiUrl: import.meta.env.API_URL,
      public: {
         appName: import.meta.env.APP_NAME,
      },
   },

   compatibilityDate: "2024-07-11",

   eslint: {
      config: {
         stylistic: {
            commaDangle: "never",
            braceStyle: "1tbs",
         },
      },
   },
})

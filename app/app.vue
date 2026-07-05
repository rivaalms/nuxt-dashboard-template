<script setup lang="ts">
import { id } from "@nuxt/ui/locale"

const colorMode = useColorMode()
const color = computed(() => (colorMode.value === "dark" ? "#1b1718" : "white"))

const route = useRoute()

// TODO: Change this
const title = "Nuxt Dashboard Template"
const description =
   "A professional dashboard template built with Nuxt UI, featuring multiple pages, data visualization, and comprehensive management capabilities for creating powerful admin interfaces."

useHead({
   title: route.meta.title,
   titleTemplate: (chunk) => (chunk ? `${chunk} | ${title}` : title),
   meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { key: "theme-color", name: "theme-color", content: color },
      { name: "description", content: description },
   ],
   link: [{ rel: "icon", href: "/favicon.ico" }],
   htmlAttrs: {
      lang: "id",
   },
})
</script>

<template>
   <UApp :locale="id">
      <NuxtLoadingIndicator />

      <NuxtLayout>
         <NuxtPage />
      </NuxtLayout>
   </UApp>
</template>

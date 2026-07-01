<script lang="ts">
export interface AppLogoProps {
   collapsed?: boolean
   to?: string
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<AppLogoProps>(), {
   collapsed: false,
   to: "/",
})

const runtimeConfig = useRuntimeConfig().public

const appNameComponent = computed(() => {
   const appName = runtimeConfig.appName
   if (!props.collapsed) {
      return h(
         "div",
         {
            class: "flex flex-col",
         },
         [
            h("div", { class: "text-highlighted leading-tight font-black" }, [
               h("div", null, () => appName),
            ]),
         ]
      )
   }

   return h(
      "div",
      {
         class: "aspace-square bg-primary-50 dark:bg-primary-950 flex size-8 items-center justify-center rounded-lg p-2",
      },
      [h("span", { class: "text-primary text-sm font-black" }, ["X"])]
   )
})
</script>

<template>
   <NuxtLink :to="props.to">
      <component :is="appNameComponent" />
   </NuxtLink>
</template>

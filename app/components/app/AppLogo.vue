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
</script>

<template>
   <NuxtLink :to="props.to">
      <div
         v-if="!props.collapsed"
         class="flex flex-col"
      >
         <div class="text-highlighted leading-tight font-black">
            App<span class="text-accent">Name</span>
         </div>
      </div>
      <div
         v-else
         class="bg-accent/10 flex aspect-square size-8 items-center justify-center rounded-lg p-2"
      >
         <span class="text-accent text-sm font-black">X</span>
      </div>
   </NuxtLink>
</template>

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
         v-show="!props.collapsed"
         class="flex flex-col"
      >
         <div class="text-highlighted leading-tight font-black">
            Trans<span class="text-primary">X</span>
         </div>
      </div>
      <div v-show="props.collapsed">
         <div
            class="aspace-square bg-primary-50 dark:bg-primary-950 flex size-8 items-center justify-center rounded-lg p-2"
         >
            <span class="text-primary text-sm font-black"> X </span>
         </div>
      </div>
   </NuxtLink>
</template>

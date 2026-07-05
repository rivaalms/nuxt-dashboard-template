<script lang="ts">
export interface AppLogoProps {
   collapsed?: boolean
   to?: string
   size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<AppLogoProps>(), {
   collapsed: false,
   to: "/",
   size: "md",
})

const sizeClass = computed(() => {
   const sizeMap: Record<typeof props.size, string> = {
      "2xl": "text-xl",
      xl: "text-xl",
      lg: "text-lg",
      md: "text-base",
      sm: "text-sm",
      xs: "text-xs",
   }

   return sizeMap[props.size]
})
</script>

<template>
   <NuxtLink :to="props.to">
      <div
         v-if="!props.collapsed"
         class="flex flex-col"
      >
         <div
            class="text-highlighted leading-tight font-black"
            :class="sizeClass"
         >
            App<span class="text-accent">Name</span>
         </div>
      </div>
      <div
         v-else
         class="bg-accent/10 flex aspect-square size-8 items-center justify-center rounded-lg p-2"
      >
         <span
            class="text-accent font-black"
            :class="sizeClass"
            >X</span
         >
      </div>
   </NuxtLink>
</template>

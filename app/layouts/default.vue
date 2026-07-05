<script setup lang="ts">
import type { DropdownMenuItem } from "@nuxt/ui"

const route = useRoute()

const colorMode = useColorMode()
const colorModeLabel = computed(() => {
   return colorMode.preference === "light" ? "Terang" : "Gelap"
})

const open = ref(false)

const { items: links, breadcrumbItems } = useNavigationMenu()

const groups = computed(() => [
   {
      id: "links",
      label: "Go to",
      items: links.flat(),
   },
])

const user = {
   name: "John Doe",
   description: "Admin",
   avatar: {
      src: "https://api.dicebear.com/10.x/identicon/svg",
   },
}

const userDropdownItem = computed<DropdownMenuItem[]>(() => [
   {
      label: "Logout",
      icon: "i-lucide-log-out",
      color: "error",
      onSelect: () => {},
   },
])
</script>

<template>
   <UDashboardGroup unit="rem">
      <UDashboardSidebar
         id="default"
         v-model:open="open"
         collapsible
         resizable
         class="bg-elevated/25"
         :ui="{ footer: 'lg:border-t lg:border-default' }"
      >
         <template #header="{ collapsed }">
            <AppLogo :collapsed="collapsed" />
         </template>

         <template #default="{ collapsed }">
            <UDashboardSearchButton
               :collapsed="collapsed"
               class="ring-default bg-transparent"
            />

            <UNavigationMenu
               :collapsed="collapsed"
               :items="links"
               orientation="vertical"
               tooltip
               popover
            />
         </template>

         <template #footer="{ collapsed }">
            <UColorModeButton
               :label="(!collapsed && colorModeLabel) || undefined"
               class="w-full"
            />
         </template>
      </UDashboardSidebar>

      <UDashboardSearch :groups="groups" />

      <UDashboardPanel id="app-panel">
         <template #header>
            <UDashboardNavbar>
               <template #leading>
                  <UDashboardSidebarCollapse />
                  <UBreadcrumb :items="breadcrumbItems" />
               </template>
               <template #right>
                  <UDropdownMenu :items="userDropdownItem">
                     <UUser
                        v-bind="user"
                        size="sm"
                        as="button"
                        class="hover:bg-elevated/75 px-2.5 py-1.5 text-start"
                     />
                  </UDropdownMenu>
               </template>
            </UDashboardNavbar>
         </template>
         <template #body>
            <UPageHeader
               :title="route.meta.title"
               :description="route.meta.description"
            />
            <slot />
         </template>
      </UDashboardPanel>
   </UDashboardGroup>
</template>

import type { BreadcrumbItem, NavigationMenuItem } from "@nuxt/ui"

export default function () {
   const items = [
      [
         {
            label: "Dashboard",
            icon: "i-lucide-layout-dashboard",
            to: "/",
         },
      ],
   ] satisfies NavigationMenuItem[][]

   const route = useRoute()
   const router = useRouter()

   const breadcrumbItems = computed(() => {
      if (route.path == "/")
         return [
            { label: route.meta.title, to: route.path },
         ] satisfies BreadcrumbItem[]

      const paths = route.path.split("/").filter(Boolean)
      let currentPath = ""

      return paths.map((path) => {
         currentPath += `/${path}`
         const resolved = router.resolve(currentPath)

         return {
            label: resolved.meta.title,
            to: resolved.path,
         } satisfies BreadcrumbItem
      })
   })

   return {
      items,
      breadcrumbItems,
   }
}

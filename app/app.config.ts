import { defineAppConfig } from "#imports"

export default defineAppConfig({
   ui: {
      colors: {
         primary: "blue",
         secondary: "teal",
         accent: "orange",
         neutral: "zinc",
         error: "rose",
         success: "emerald",
         info: "sky",
         warning: "amber",
      },
      card: {
         slots: {
            description: "mt-0",
         },
      },
      pageHeader: {
         slots: {
            root: "py-0 border-0",
            title: "text-xl sm:text-2xl",
            description: "text-base",
         },
         variants: {
            title: {
               true: {
                  description: "mt-0",
               },
            },
         },
      },
   },
})

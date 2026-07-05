<script setup lang="ts">
import type { FormSubmitEvent, AuthFormField } from "@nuxt/ui"

definePageMeta({
   layout: false,
})

const fields: AuthFormField[] = [
   {
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "nama@email.com",
      required: true,
   },
   {
      name: "password",
      label: "Kata Sandi",
      type: "password",
      placeholder: "Masukkan kata sandi",
      required: true,
   },
]

const schema = $authSchema.login

type Schema = InferSchema<typeof schema>

const loading = ref(false)

async function onSubmit(event: FormSubmitEvent<Schema>) {
   loading.value = true
   // Simulate API call
   await new Promise((resolve) => setTimeout(resolve, 1000))
   loading.value = false

   console.log("Login data:", event.data)
   navigateTo("/")
}
</script>

<template>
   <div class="bg-default flex min-h-dvh">
      <!-- Left: Dummy Copywriting Panel -->
      <div
         class="bg-primary/5 border-default relative hidden flex-1 flex-col justify-between overflow-hidden border-e p-10 lg:flex"
      >
         <!-- Abstract Background Shapes -->
         <div
            class="bg-primary/10 absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl"
         />
         <div
            class="bg-primary/10 absolute -right-32 -bottom-32 h-96 w-96 rounded-full blur-3xl"
         />

         <!-- Logo / Brand -->
         <AppLogo size="xl" />

         <!-- Center Content -->
         <div class="relative z-10 space-y-6">
            <div class="space-y-4">
               <h1 class="text-4xl font-bold tracking-tight xl:text-5xl">
                  <span class="text-default">Bangun lebih cepat dengan</span
                  ><br />
                  <span class="text-primary">Arsitektur Premium.</span>
               </h1>
               <p class="text-muted max-w-xl text-lg leading-relaxed">
                  Mulai proyek Anda berikutnya dengan template Nuxt yang
                  mutakhir ini. Menghadirkan struktur direktori yang terukur,
                  komponen UI yang siap pakai, dan pola desain modern.
               </p>
            </div>

            <!-- Feature List -->
            <div class="space-y-4 pt-4">
               <div class="flex items-center gap-3">
                  <div
                     class="bg-primary/10 text-primary flex aspect-square size-8 items-center justify-center rounded-lg p-2"
                  >
                     <UIcon
                        name="i-lucide-zap"
                        class="h-5 w-5"
                     />
                  </div>
                  <div>
                     <div class="text-default font-semibold">Secepat Kilat</div>
                     <div class="text-muted text-sm">
                        Server pengembangan berbasis Vite
                     </div>
                  </div>
               </div>
               <div class="flex items-center gap-3">
                  <div
                     class="bg-primary/10 text-primary flex aspect-square size-8 items-center justify-center rounded-lg p-2"
                  >
                     <UIcon
                        name="i-lucide-palette"
                        class="h-5 w-5"
                     />
                  </div>
                  <div>
                     <div class="text-default font-semibold">
                        Antarmuka Menawan
                     </div>
                     <div class="text-muted text-sm">
                        Nuxt UI v4 dengan Tailwind CSS
                     </div>
                  </div>
               </div>
               <div class="flex items-center gap-3">
                  <div
                     class="bg-primary/10 text-primary flex aspect-square size-8 items-center justify-center rounded-lg p-2"
                  >
                     <UIcon
                        name="i-lucide-shield-check"
                        class="h-5 w-5"
                     />
                  </div>
                  <div>
                     <div class="text-default font-semibold">
                        Standar Enterprise
                     </div>
                     <div class="text-muted text-sm">
                        Praktik terbaik & pola terukur
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <!-- Bottom tagline -->
         <div class="relative z-10">
            <p class="text-muted text-sm">
               © 2026 Nuxt Template. All rights reserved.
            </p>
         </div>
      </div>

      <!-- Right: Login Form -->
      <div
         class="relative flex w-full flex-col items-center justify-center p-6 lg:w-[500px] lg:shrink-0 xl:w-[600px]"
      >
         <!-- Mobile logo -->
         <div class="mb-8 flex items-center gap-2 lg:hidden">
            <AppLogo size="xl" />
         </div>

         <div class="w-full max-w-sm">
            <UAuthForm
               :schema="schema"
               :fields="fields"
               :loading="loading"
               title="Selamat Datang"
               description="Masukkan kredensial Anda untuk masuk ke akun."
               :submit="{
                  label: 'Masuk',
                  icon: 'i-lucide-log-in',
                  loading: loading,
                  block: true,
               }"
               :ui="{
                  header: 'text-start',
               }"
               @submit="onSubmit"
            />
         </div>
      </div>
   </div>
</template>

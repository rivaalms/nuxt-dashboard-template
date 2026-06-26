---
paths:
  - app/**/*
---

# General Conventions

- Use `date-fns` library to format dates.
- Use [number formatter repository](../../shared/utils/number-formatter.ts) to format number. If you cannot find number formatter you need, create new formatter here.
- Use `useToast()` composable from Nuxt UI to manage toast notifications.

# Component Usage Guide

- Always Prioritize Nuxt UI components.
- Prefer Nuxt UI semantic colors over custom-defined TailwindCSS colors.
- Refer to the Nuxt UI MCP to see available components and their precise configurations.
- Prefer to use `ui` prop to style Nuxt UI component over `class`.
- Use `unovis` to create chart components.

# Component Conventions

- Components are named with a usage-scope prefix (e.g., `FormAuth`, `ModalLayout`, `SectionHeader`).
- Component directories are named with its usage-scope plural (e.g., `components/forms`, `components/modal`, `components/sections`).
- Use component directly by its name (e.g., `components/forms/FormAuth.vue` is `<FormAuth />` in templates).

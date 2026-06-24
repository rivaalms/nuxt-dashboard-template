---
paths:
  - shared/**/*
---

# Global Types Conventions

- Global types and DTOs are defined in [shared/types](../../shared/types) directories.
- Unless you are defining a module, do not use `export` keyword.

# Validation Schema

- Validation schemas live inside [shared/utils/validations](../../shared/utils/validations) directory.
- Use [Zod 4](https://zod.dev/) to define validation schemas.
- Validation schemas are grouped by module, with repository object pattern.
- Example:
  ```typescript
  // shared/tuils/validations/auth.ts
  import { z } from "zod"

  export const $authSchema = {
    get login() {
      return z.object({
        email: z.email().nonempty(),
        password: z.string().min(8)
      })
    }
  }
  ```

# Shared Utils Conventions

- When creating shared utils inside nested directories, re-export the utils in [shared/utils/index.ts](../../shared/utils/index.ts).
  ```typescript
  // shared/utils/index.ts
  export { $authSchema } from "./validations/auth.ts"
  ```

# Workflow

- Run `pnpm postinstall` after code generation to create new `.nuxt` type definitions.

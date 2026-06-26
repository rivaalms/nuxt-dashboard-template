import { z } from "zod"

export const $authSchema = {
   get login() {
      return z.object({
         email: z.email().nonempty(),
         password: z.string().min(8),
      })
   },
}

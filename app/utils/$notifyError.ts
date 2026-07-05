import type { NuxtError } from "#app"
import type { Toast } from "@nuxt/ui/composables"

/**
 * Notify error to user using toast.
 */
export default function (e: unknown) {
   const toast = useToast()
   const item = resolveErrorToast(e)
   toast.add(item)
}

/** @internal */
function resolveErrorToast(e: unknown): Partial<Toast> {
   const title = isResponseError(e)
      ? e.statusMessage
      : isGeneralError(e)
        ? e.name
        : "Error"
   const description =
      isResponseError(e) || isGeneralError(e)
         ? e.message
         : "An unexpected error occurred"

   return {
      title,
      description,
      color: "error",
   }
}

/** @internal */
function isGeneralError(e: unknown): e is Error {
   return e instanceof Error
}

/** @internal */
function isResponseError(e: unknown): e is NuxtError {
   return (
      typeof e === "object" &&
      e !== null &&
      "error" in e &&
      typeof e.error === "boolean" &&
      "data" in e
   )
}

import type { H3Event } from "h3"

export default function (event: H3Event) {
   const config = useRuntimeConfig(event)
   const token = getCookie(event, "auth-token")

   return $fetch.create({
      baseURL: config.apiUrl,
      headers: {
         /**
          * Default Accept Header
          * Overrided when accept type is provided implementation options
          */
         accept: "application/json",
      },
      onRequest({ options }) {
         if (token) {
            options.headers.set("authorization", `Bearer ${token}`)
         }
      },
      onRequestError({ error }) {
         throw createError({
            statusCode: 500,
            statusText: error.name,
            message: error.message,
            name: error.name,
         })
      },
      onResponseError({ response }) {
         if (response.status === 401) {
            deleteCookie(event, "auth-token", {
               path: "/",
            })
         }

         const data = response._data

         throw createError({
            status: response.status,
            statusText: response.statusText,
            message: isApiResponse(data) ? data.message : response.statusText,
            data: data,
         })
      },
   })
}

/**
 * @internal
 *
 * Alter this when ApiResponse interface changed
 */
function isApiResponse(input: unknown): input is ApiResponse<any> {
   return typeof input === "object" && input !== null && "message" in input
}

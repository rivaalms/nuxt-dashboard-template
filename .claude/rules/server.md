---
paths:
  - server/**/*
---

# BFF Proxy Conventions

- Use `$serverApi` util to communicate with downstream APIs.
- Every endpoint that returns JSON data must override Nitro's `toJSON()` to maintain type definitions in the client:
- Every endpoint must have a DTO defined in [shared DTO directory](../../shared/types/dto).
- **Do not** insert `any` to response type inference.
- If required DTO is missing, create a new DTO (empty interface preferred) and asks user to review it.
 
# BFF Proxy Orchestration Example

  ```typescript
  export default defineEventHandler(async (event) => {
    const $api = $serverApi(event)
    const query = getQuery(event)

  // ApiResponse & UserDTO are defined in shared DTO directories.
    const response = await $api<ApiResponse<UserDTO>>(`/api/users`, {
      method: "get",
      query,
    })

    return {
      ...response,
      toJSON() {
        return this as ApiResponse<UserDTO>
      }
    }
  })
  ```

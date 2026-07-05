type InferSchema<S extends import("zod").ZodType> = import("zod").infer<S>
type InferSchemaFrom<
   R extends Record<string, import("zod").ZodType>,
   K extends keyof R,
> = import("zod").infer<R[K]>

type DeepPartial<T> = {
   [K in keyof T]?: T[K] extends Record<string, any>
      ? DeepPartial<T[K]>
      : T[K] extends Array<infer U>
        ? Array<DeepPartial<U>>
        : T[K]
}

type HintedString<S extends string> = S | (string & {})

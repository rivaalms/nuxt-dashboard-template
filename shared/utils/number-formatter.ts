type Options = Intl.NumberFormatOptions & {
   locale?: Intl.LocalesArgument
}

type FormatCurrencyOptions = Omit<Options, "style">

export function $formatCurrency(
   input: number,
   options?: FormatCurrencyOptions
) {
   const {
      locale = "id",
      currency = "IDR",
      maximumFractionDigits = 0,
      ...rest
   } = options || {}

   return Intl.NumberFormat(locale, {
      ...rest,
      style: "currency",
      currency,
      maximumFractionDigits,
   }).format(input)
}

export function $formatNumber(input: number, options?: Options) {
   const { locale = "id", ...rest } = options || {}
   return Intl.NumberFormat(locale, rest).format(input)
}

// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"

export default withNuxt(eslintPluginPrettierRecommended, {
   rules: {
      "prettier/prettier": "error",

      /**
       * @desc disabling tslint rule
       * @reason necessary for dynamic type helper generics
       */
      "@typescript-eslint/no-explicit-any": "off",

      "vue/no-multiple-template-root": "off",
      "vue/max-attributes-per-line": ["error", { singleline: 3 }],
      "vue/attributes-order": "warn",
   },
})

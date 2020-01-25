module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  // NOTE: Order is IMPORTANT. DO NOT change the order unless a good reason arises.
  // Order is important to ensure no conflicts between Prettier and ESLint.
  extends: [
    'eslint:recommended',
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'prettier/vue',
    'prettier', // always put this last to disable ESLint conflicts
  ],
  plugins: [
    'vue',
    'prettier',
  ],
  // Add your custom rules here.
  rules: {
    // To disallow semicolons as the end of statements.
    // Reference: https://stackoverflow.com/questions/40453894/allow-semi-colons-in-javascript-eslint
    'semi': [2, 'never'],

    // To avoid conflict with prettier.
    'vue/max-attributes-per-line': 'off', 

    // To only add semicolons at the beginning of lines that may introduce ASI failures.
    // Reference: https://prettier.io/docs/en/options.html
    'prettier/prettier': ['error', { 'semi': false }]
  }
}

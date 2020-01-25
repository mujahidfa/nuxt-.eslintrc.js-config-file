# nuxt-.eslintrc.js-config-file
This repo contains an .eslintrc.js file for [NuxtJs](https://nuxtjs.org/) that contains configs that "just work".

## Why?
The default, out-of-the-box configuration of the .eslintrc.js that comes with create-nuxt-app (with the inclusion of ESLint and Prettier during installation) almost always **does not** allow ESLint and Prettier to work the way it should. This is a recorded issue that happens between Prettier and [eslint-plugin-vue](https://eslint.vuejs.org/) (see [this issue](https://github.com/prettier/prettier/issues/5363)).


Issues that arise include:

- A lot of rules from [eslint-plugin-vue](https://eslint.vuejs.org/) are not enforced during linting. For example, [vue/no-use-v-if-with-v-for](https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html) was not enforced.
- There are many conflicts between ESLint and Prettier.
- There are conflicts between [eslint-plugin-vue](https://eslint.vuejs.org/) and Prettier, causing Vue's linter to not work properly.

## Instructions
1. Make sure you select ESLint and Prettier during project installation using create-nuxt-app.
2. Copy/replace the out-of-the-box .eslintrc.js file with the .eslintrc.js in this repo.
3. Enjoy!

## Package versions
This was tested with the following package versions:

    "@nuxtjs/eslint-config": "^1.0.1",
    "@nuxtjs/eslint-module": "^1.0.0",
    "babel-eslint": "^10.0.1",
    "eslint": "^6.1.0",
    "eslint-plugin-nuxt": ">=0.4.2",
    "eslint-config-prettier": "^4.1.0",
    "eslint-plugin-prettier": "^3.0.1",
    "prettier": "^1.16.4",

## Contributions
Feel free to open an issue and send a pull request!

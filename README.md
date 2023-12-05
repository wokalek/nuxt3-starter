<p align="center">
  <img src="https://i.imgur.com/dT4D4xZ.png" style="width: 50%; max-width: 720px;" alt="Site screenshot when running nuxt dev">
</p>

# Starter for Nuxt 3

A starter to start developing on Nuxt 3 as quickly as possible.

It seems to me that the starter contains only what is needed for any new typical Nuxt 3 project.

Most of all, it was created by me and to start my developments, but I will be happy if it helps someone else.

⸜(｡˃ ᵕ ˂ )⸝♡

## How to use

Just do:
1. `git clone` this repository
2. Remove `README.md`
3. Remove `LICENSE.md`
4. Customize the rest to suit your needs and you're ready!

## What's inside

- The project structure is defined inside the `src` folder
- Index page `pages/index.vue` created
- The `default.vue` layout is created since you will create it anyway. The layout already uses the common sticky footer technique via Tailwind CSS
- `The/Header` and `The/Footer` components have been created, since you will create them yourself anyway
- `assets/sass/global/index.sass` — for global styles e.g. vendors styles
- [`pnpm`](https://pnpm.io/) — just better then npm
- node_modules:
  - `sass` — SASS. For styles. You know.
  - `nuxt-icons` — every project has logo.svg so you need this module
  - `@nuxtjs/tailwindcss` — the most popular ui library
- ESLint only with some rules:
  1. [comma-dangle](https://eslint.org/docs/latest/rules/comma-dangle#always-multiline) — `["error", "always-multiline"]`, to require a comma at the end of a line when breaking a line
  2. [vue/no-multiple-template-root](https://eslint.vuejs.org/rules/no-multiple-template-root) — `off`, disabled to avoid creating an often unnecessary wrapper for a component
  3. [vue/multi-word-component-names](https://eslint.vuejs.org/rules/multi-word-component-names) — `off`, because often components are created in folders, for example `components/The/Header.vue` or `components/Landing/Block/Hero.vue`, but this rule needs an extra second word in the file name itself, even if the name of the component will consist of two or more camel-case words

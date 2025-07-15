> [!CAUTION]
> Choosr is still under development. Features, functionalities, and the user interface may change as the project evolves.

<div align='center'>
    <img src="./public/logo.png" alt='choosr logo'/>
</div>

<p align="center" title="Build Status">
  <a href="https://github.com/TizianMr/choosr/actions/workflows/ci.yml">
    <img src="https://github.com/TizianMr/choosr/actions/workflows/ci.yml/badge.svg" alt="build status"/>
  </a>
</p>

# choosr

Choosr is an open-source platform that lets users create polls with ease, including binary polls, single-choice, multi-choice, and appointment polls, making decision-making simple and collaborative.

## Techstack

[Vue](https://vuejs.org/) as frontend framework\
[TailwindCSS](https://tailwindcss.com/) as CSS framework\
[Flowbite](https://flowbite.com/) as component library\
[Vitest](https://vitest.dev/) as testing framework

## How to install

### Prerequisites

- [bun](https://bun.com/) installed on machine

### Project setup

<!-- ## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/). -->

Install all dependencies by running:
```sh
bun install
```

Run the dev server by executing:
```sh
bun dev
```

For building you app for production (type-check, compile and minify for production), run:
```sh
bun run build
```

### Linting and testing

Run Unit Tests with [Vitest](https://vitest.dev/) by executing:

```sh
bun run test
```

To get the test coverage, you can run:

```sh
bun run test:coverage
```

To lint with [ESLint](https://eslint.org/), run:

```sh
bun lint
```

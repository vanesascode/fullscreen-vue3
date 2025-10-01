# Vue 3 Fullscreen Scaffolding

This is a **Vue 3** scaffolding project that includes fullscreen functionality and **Daisy UI** components to accelerate modern web application development.

## ✨ Features

- **Vue 3** with Composition API
- **TypeScript** for static typing
- **Fullscreen Functionality** - Toggle between normal and fullscreen mode
- **Daisy UI** - Styled table components and design system
- **Vue Router** for navigation
- **Tailwind CSS** for styling
- **Vitest** for unit testing
- **ESLint** for code linting

## 🏗️ Architecture

The project includes:

- Main layout with TopBar and LeftBar
- Composable for fullscreen management
- CustomTable component with Daisy UI styles
- Configured routing system
- Unit tests for layout components with Vitest

## 💻 Recommended IDE

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## 🔧 Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## ⚙️ Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## 🚀 Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

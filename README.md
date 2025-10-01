# Vue 3 Fullscreen Scaffolding

Este es un proyecto scaffolding de **Vue 3** que incluye funcionalidad de pantalla completa y componentes de **Daisy UI** para acelerar el desarrollo de aplicaciones web modernas.

## ✨ Características

- **Vue 3** con Composition API
- **TypeScript** para tipado estático
- **Funcionalidad Fullscreen** - Alterna entre modo normal y pantalla completa
- **Daisy UI** - Componentes de tabla estilizados y sistema de diseño
- **Vue Router** para navegación
- **Tailwind CSS** para estilos
- **Vitest** para testing unitario
- **ESLint** para linting del código

## 🏗️ Arquitectura

El proyecto incluye:

- Layout principal con TopBar y LeftBar
- Composable para manejo de fullscreen
- Componente CustomTable con estilos de Daisy UI
- Sistema de rutas configurado
- Tests unitarios para componentes del layout con Vitest

## 💻 IDE Recomendado

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (y deshabilitar Vetur).

## 🔧 Soporte de tipos para archivos `.vue` en TS

TypeScript no puede manejar información de tipos para importaciones `.vue` por defecto, por lo que reemplazamos el CLI `tsc` con `vue-tsc` para verificación de tipos. En editores, necesitamos [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) para hacer que el servicio de lenguaje TypeScript sea consciente de los tipos `.vue`.

## ⚙️ Configuración personalizada

Ver [Referencia de configuración de Vite](https://vite.dev/config/).

## 🚀 Configuración del proyecto

```sh
npm install
```

### Compilar y Hot-Reload para desarrollo

```sh
npm run dev
```

### Verificación de tipos, compilar y minificar para producción

```sh
npm run build
```

### Ejecutar tests unitarios con [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Linting con [ESLint](https://eslint.org/)

```sh
npm run lint
```

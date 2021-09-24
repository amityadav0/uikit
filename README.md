# Harmony UIkit

[![Version](https://img.shields.io/npm/v/@harmonyswap-libs/uikit)](https://www.npmjs.com/package/@harmonyswap-libs/uikit) [![Size](https://img.shields.io/bundlephobia/min/@harmonyswap-libs/uikit)](https://www.npmjs.com/package/@harmonyswap-libs/uikit)

harmony UIkit is a set of React components and hooks used to build pages on harmony's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @harmonyswap-libs/uikit`

## Setup

### Theme

Before using harmony UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@harmonyswap-libs/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@harmonyswap-libs/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://harmonyswap.github.io/harmony-uikit/)

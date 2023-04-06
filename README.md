# vanilla-stack starter

This is a [Next.js](https://nextjs.org/) web starter template for personal use.

Starter contains an example website template. The template is  
rebuilt from scratch and based on the [Tailwind UI's template "Salient"](https://tailwindui.com/templates/salient).

## What's inside?

This monorepo is managed by [Turborepo](https://turbo.build/repo) and [npm](https://www.npmjs.com/). It includes the following packages/apps:

### Apps and Packages

- `web`: a [Next.js](https://nextjs.org/) app with [Storybook](https://storybook.js.org/) and [vanilla-extract](https://vanilla-extract.style/) integrations
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Bootstrap template

To bootstrap the app with this template, run the following command:

```bash
npx create-next-app@latest -e [github-url]
```

### Develop

To develop, run the following command:

```bash
# for next app
npm run dev
# for storybook
npm run storybook
```

### Build

To build all apps and packages, run the following command:

```bash
npm run build
```

## Learn more about Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Other useful links

Integration docs

- [Storybook Docs](https://storybook.js.org/docs/react/get-started/install)
- [vanilla-extract Docs](https://vanilla-extract.style/documentation/getting-started)

Design concepts inspired by

- [Shopify Polaris](https://polaris.shopify.com/)
- [Material Design 3](https://m3.material.io/)
- [Open Props](https://open-props.style/)
- [Utopia Fluid Responsive Design](https://utopia.fyi/)

---

**No confusing license here. Be kind and help others learn.**  
You are free to use this code as inspiration. Please do not copy it directly. Crediting the author or resource is appreciated.

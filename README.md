# Adobe Commerce Events

A monorepo for Adobe Commerce Events packages. This repo is using [turborepo](https://turborepo.org/) to manage packages.

## Getting Started

This turborepo uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager. Install yarn if you haven't already by running `npm install -g yarn`.

### Develop

To develop all apps and packages, run the following command:

```
cd commerce-events
yarn dev
```

This runs all packages and examples at the same time. The newer examples are using [NextJS](https://nextjs.org/) to make sure we cover use cases for modern package development. Under the old-examples, we are using [parcel](https://parceljs.org/) to just quickly host static files and test our amd/umd scripts.

Under the dev script, our built files are hosted at:

-   sdk - `http://localhost:8080/index.js`
-   collector - `http://localhost:8081/index.js`

## Release process

### QA

Merging a change to the `main` branch triggers a github action that builds and deploys the latest code to QA: https://unpkg.com/@adobe/magento-storefront-event-collector@qa/dist/index.js.

### Production

Release steps:

-   create a PR with a version bump in the package.json and package-lock.json in the package(s) you're releasing (example PR [here](https://github.com/adobe/commerce-events/pull/56/files))

-   once the PR is approved and merged, create a [new release tag for the repo](https://github.com/adobe/commerce-events/tags)

Creating a new release tag triggers a github action that builds and deploys the latest code to Prod: https://unpkg.com/@adobe/magento-storefront-event-collector/dist/index.js.

### NPM Packages

| Name                                                                  | NPM Namespace                               | version |
| --------------------------------------------------------------------- | ------------------------------------------- | ------- |
| [storefront-events-sdk](./packages/storefront-events-sdk)             | `@adobe/magento-storefront-events-sdk`      | 1.x     |
| [storefront-events-collector](./packages/storefront-events-collector) | `@adobe/magento-storefront-event-collector` | 1.x     |

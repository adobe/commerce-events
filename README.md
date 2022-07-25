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

#### v1.x

- sdk - `http://localhost:8080/index.js`
- collector - `http://localhost:8081/index.js`

#### v2.x
- sdk: `http://localhost:8040/index.js`
- collectors: `http://localhost:8041/index.js`

## Packages

> :warning: If you plan on doing any immediate work for these packages, use the 1.x versions. There will be a slow migration to the new package names, but this involves changing references in other [php extensions](data-services). v1.x and v2.x should be the same code as of right now, but could change soon.


| Name                                                                  | NPM Namespace                                   | version |
| --------------------------------------------------------------------- | ------------------------------------------- | ------- |
| [storefront-events-sdk](./packages/storefront-events-sdk)             | `@adobe/magento-storefront-events-sdk`      | 1.x     |
| [storefront-events-collector](./packages/storefront-events-collector) | `@adobe/magento-storefront-event-collector` | 1.x     |
| [commerce-events-sdk](./packages/commerce-events-sdk)                 | `@adobe/commerce-events-sdk`                | 2.x     |
| [commerce-events-collector](./packages/commerce-events-collectors)    | `@adobe/commerce-events-collectors`         | 2.x     |

[data-services]: https://github.com/magento-commerce/data-services/blob/main/DataServices/view/frontend/requirejs-config.js

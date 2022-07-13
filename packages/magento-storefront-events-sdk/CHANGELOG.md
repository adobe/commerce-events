# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.1.1](https://github.com/adobe/magento-storefront-events-sdk/compare/v1.1.0...v1.1.1) (2021-10-26)


### Bug Fixes

* **src/types/schemas/recommendations.ts:** added `typeId: string` as field to RecommendationUnit ([ba0e636](https://github.com/adobe/magento-storefront-events-sdk/commit/ba0e636f8c65327aa4bbe224a9d26a84ef9daf00))

## [1.1.0](https://github.com/adobe/magento-storefront-events-sdk/compare/v1.0.2...v1.1.0) (2021-09-07)


### Features

* add api execution time tracking ([611f8e5](https://github.com/adobe/magento-storefront-events-sdk/commit/611f8e5b62f47b0f049b5f23848b555892d740ec))

### [1.0.2](https://github.com/adobe/magento-storefront-events-sdk/compare/v1.0.1...v1.0.2) (2021-09-07)


### Bug Fixes

* make price optional to support b2b ([8847ca0](https://github.com/adobe/magento-storefront-events-sdk/commit/8847ca0eaf71aef75ecdb5fdebc5debf0ff3b162))

### [1.0.1](https://github.com/adobe/magento-storefront-events-sdk/compare/v1.0.0...v1.0.1) (2021-06-17)

## [1.0.0](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.17.1...v1.0.0) (2021-06-07)

### [0.17.1](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.17.0...v0.17.1) (2021-06-05)


### Features

* add sourcemaps in dev and qa. broadcast message when available ([368de43](https://github.com/adobe/magento-storefront-events-sdk/commit/368de43217762609456968977426cab2f00e710d))

## [0.17.0](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.16.2...v0.17.0) (2021-05-27)


### ⚠ BREAKING CHANGES

* The placement field has been renamed to pagePlacement.

* change placement to pagePlacement ([46dcb9d](https://github.com/adobe/magento-storefront-events-sdk/commit/46dcb9d373db05b6aa5f1a0dda0a4ae91c7c69ac))

### [0.16.2](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.16.1...v0.16.2) (2021-05-27)


### Features

* support gift options ([24250aa](https://github.com/adobe/magento-storefront-events-sdk/commit/24250aa9a7a6c02bc7f8a21cfc58f3ecbd8a4720))

### [0.16.1](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.16.0...v0.16.1) (2021-05-26)


### Features

* support one page checkouts ([3c86046](https://github.com/adobe/magento-storefront-events-sdk/commit/3c860469bcefed0e53f5189c71c71b5fe92c6d9d))

## [0.16.0](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.15.3...v0.16.0) (2021-05-25)


### ⚠ BREAKING CHANGES

* Placement is now required in the Recommendation context.

### Features

* support placement and offset ([a2ea560](https://github.com/adobe/magento-storefront-events-sdk/commit/a2ea560237e99cb1ee93b95f3f1a03a8b462217a))

### [0.15.3](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.15.2...v0.15.3) (2021-05-25)

### [0.15.2](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.15.1...v0.15.2) (2021-05-18)


### Bug Fixes

* make product pricing optional ([095bb10](https://github.com/adobe/magento-storefront-events-sdk/commit/095bb10a7bf2d1124666fe55d9c0e7d519accdd4))

### [0.15.1](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.15.0...v0.15.1) (2021-05-17)

## [0.15.0](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.14.0...v0.15.0) (2021-05-14)


### ⚠ BREAKING CHANGES

* The Facet types have changed. See the types directory for more information.

### Features

* support new search facets api ([97c11c9](https://github.com/adobe/magento-storefront-events-sdk/commit/97c11c94191e83f78a866d2f2e11b46285cb2eb2))

## [0.14.0](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.13.0...v0.14.0) (2021-05-12)


### ⚠ BREAKING CHANGES

* The sort field is now an array.

### Features

* support multiple sorts ([6761d36](https://github.com/adobe/magento-storefront-events-sdk/commit/6761d3645421e624677fd4521356e49afa79a6c1))

## [0.13.0](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.12.0...v0.13.0) (2021-05-10)


### ⚠ BREAKING CHANGES

* The SearchInput and SearchResults contexts are now an array of units.

SEARCH-1322

### Features

* include unit id with every search handler ([4d37aad](https://github.com/adobe/magento-storefront-events-sdk/commit/4d37aad32f7fc9b6ecfb8b00b603bb86aad5c54d))
* support multiple search units ([a2803cb](https://github.com/adobe/magento-storefront-events-sdk/commit/a2803cba802637a20cdeb6bef87ff953921d1daa))


### Bug Fixes

* export search input types ([bde2b52](https://github.com/adobe/magento-storefront-events-sdk/commit/bde2b52d368053be70eda1084c3d6a05596094fc))

## [0.12.0](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.11.2...v0.12.0) (2021-04-30)


### ⚠ BREAKING CHANGES

* The product.sku and product.pricing are now required. Same with the
shoppingCart.item.prices and the shoppingCart.item.quantity.

SEARCH-1441

### Bug Fixes

* require more properties to match snowplow schema ([45ef6d4](https://github.com/adobe/magento-storefront-events-sdk/commit/45ef6d4fbcccbb43798feef25ecd9460b74ef57a))

### [0.11.2](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.11.1...v0.11.2) (2021-04-28)


### Features

* add category context ([b72d2d8](https://github.com/adobe/magento-storefront-events-sdk/commit/b72d2d86fe5282cd34648fa4a1b62b8f502eec12))

### [0.11.1](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.11.0...v0.11.1) (2021-04-26)


### Features

* add custom context getters and setters ([e8991c2](https://github.com/adobe/magento-storefront-events-sdk/commit/e8991c2b9048104f9c2491765a79caf0aa5de8cb))

## [0.11.0](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.10.1...v0.11.0) (2021-04-26)


### ⚠ BREAKING CHANGES

* The magentoJsBuild field in the MagentoJsTracker context has been removed.

### Bug Fixes

* remove tracker build numberr ([3df3347](https://github.com/adobe/magento-storefront-events-sdk/commit/3df33477524b11fa8777b8968de1214c409d047e))

### [0.10.1](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.10.0...v0.10.1) (2021-04-22)


### Features

* instant purchase event ([b733e50](https://github.com/adobe/magento-storefront-events-sdk/commit/b733e503dab567599951ff66898a2ad241094303))

## [0.10.0](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.9.0...v0.10.0) (2021-04-20)


### ⚠ BREAKING CHANGES

* The ShoppingCart context now has a different shape.

SEARCH-1381

### Bug Fixes

* fix shopping cart types ([af4b967](https://github.com/adobe/magento-storefront-events-sdk/commit/af4b9679f91a5d4e8111e8ed5073a59f7c01d098))

## [0.9.0](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.8.1...v0.9.0) (2021-04-16)


### ⚠ BREAKING CHANGES

* searchRequestId is a new required property for SearchInput and SearchResults
context.

SEARCH-1374
* The SearchResults schema now requires a facets property.

SEARCH-1342
* The SearchInput context now has a filters property instead of the previous
refinements properties.

### Features

* add search request id ([cc7b2a3](https://github.com/adobe/magento-storefront-events-sdk/commit/cc7b2a3847b898516290515b5ffc5593a034255d))
* adjusting the filter types ([c81b53c](https://github.com/adobe/magento-storefront-events-sdk/commit/c81b53cb2b019867eb234a658131d0d76c190cf1))
* update snowplow schema versions ([caeba1d](https://github.com/adobe/magento-storefront-events-sdk/commit/caeba1d1d211080a4c90d7038510f171c415730c))

### [0.8.1](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.8.0...v0.8.1) (2021-04-09)

## [0.8.0](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.7.0...v0.8.0) (2021-04-08)


### ⚠ BREAKING CHANGES

* The following events now require additional parameters when published:
- recsItemAddToCartClick
- recsItemClick
- recsUnitRender
- recsUnitView
- searchCategoryClick
- searchProductClick
- searchSuggestionClick

SEARCH-1326

### Features

* pass additional data to publish ([0d50b0c](https://github.com/adobe/magento-storefront-events-sdk/commit/0d50b0c8a99b64d9f020e630997ebfca3ea18070))

## [0.7.0](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.6.0...v0.7.0) (2021-04-07)


### ⚠ BREAKING CHANGES

* Renamed the getPageOffset and setPageOffset methods to getPage and setPage.

SEARCH-1329

### Features

* add page context ([530de3d](https://github.com/adobe/magento-storefront-events-sdk/commit/530de3db82d84527edd3e38bd6082ee28a3eebba))

## [0.6.0](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.5.2...v0.6.0) (2021-04-06)


### ⚠ BREAKING CHANGES

* Renamed adjustment.value to adjustment.amount.

### Bug Fixes

* fix adjustment type definition ([375cc84](https://github.com/adobe/magento-storefront-events-sdk/commit/375cc84d14141daf368dbfc93ed02bdd46663d96))

### [0.5.2](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.5.1...v0.5.2) (2021-04-01)


### Features

* add recommendations context ([309dc9f](https://github.com/adobe/magento-storefront-events-sdk/commit/309dc9f0bfcc84f23b3f2c2d3b90c8e966f678a9))

### [0.5.1](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.5.0...v0.5.1) (2021-03-29)


### Features

* support shopping cart view event ([5231139](https://github.com/adobe/magento-storefront-events-sdk/commit/52311395578768d2ac8864143c2adf28c5ce25ab))

## [0.5.0](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.4.0...v0.5.0) (2021-03-24)


### ⚠ BREAKING CHANGES

* Renamed foramttedPrice to formattedPrice in ShoppingCartItem.

### Bug Fixes

* fix typo in ShoppingCartItem ([bd61d84](https://github.com/adobe/magento-storefront-events-sdk/commit/bd61d842cf306149b16528494e35bb3ff5fbee9a))

## [0.4.0](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.3.1...v0.4.0) (2021-03-24)


### ⚠ BREAKING CHANGES

* Renamed environtmentId to environmentId.

### Bug Fixes

* fix storefront instance typo ([d4fb111](https://github.com/adobe/magento-storefront-events-sdk/commit/d4fb11173f108f4ffe6a9f2a1b9731a13ca61ba5))

### [0.3.1](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.3.0...v0.3.1) (2021-03-22)

## [0.3.0](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.2.3...v0.3.0) (2021-03-22)


### ⚠ BREAKING CHANGES

* Removed the SEARCH_RESULT_CLICK event.

### Features

* support search result click events ([1759ba0](https://github.com/adobe/magento-storefront-events-sdk/commit/1759ba055286ab501ff80d5aeb00bf690ac31e56))

### [0.2.3](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.2.2...v0.2.3) (2021-03-19)

### [0.2.2](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.2.1...v0.2.2) (2021-03-18)

### [0.2.1](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.2.0...v0.2.1) (2021-03-18)


### Features

* **recommendations:** enables recommendations events ([cd76752](https://github.com/adobe/magento-storefront-events-sdk/commit/cd767529c0afaa24df5d2f7362057b1e47838b44))


### Bug Fixes

* **filename:** fixed recomendations.js to reocmmendations.js ([b6d7e13](https://github.com/adobe/magento-storefront-events-sdk/commit/b6d7e136242ca64e3fc64a95e2da09ea05aa2f9e))

## [0.2.0](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.1.1...v0.2.0) (2021-03-17)

### ⚠ BREAKING CHANGES

-   **rename:** Changing the package name to @adobe/magento-storefront-events-sdk.
-   **webpack:** window.magentoDataLayer.default is now window.MagentoDataLayer.

### build

-   **webpack:** include default export on window ([839d9d9](https://github.com/adobe/magento-storefront-events-sdk/commit/839d9d9ec4c077d8e6784b24bdbd9d1be8aae54a))

-   **rename:** change the package name ([9598d98](https://github.com/adobe/magento-storefront-events-sdk/commit/9598d98e3b3fa3ee48657252d8e6b2bf85a49205))

### [0.1.1](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.1.0...v0.1.1) (2021-03-16)

### Bug Fixes

-   **events:** event context was in data layer. Change to "eventInfo" object that won't be persisted ([e1de784](https://github.com/adobe/magento-storefront-events-sdk/commit/e1de784ef6920c629ab3b738d2a1e9eb1acbdcce))

## [0.1.0](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.0.9...v0.1.0) (2021-03-16)

### ⚠ BREAKING CHANGES

-   handlers no longer receive a reference to mdl as a second argument

### Features

-   add initial order context ([d2078b2](https://github.com/adobe/magento-storefront-events-sdk/commit/d2078b260d2b2db328a93cb687376e8734722a26))

-   send copy of the entire data layer context with handler rather than a reference to mdl ([37ba49a](https://github.com/adobe/magento-storefront-events-sdk/commit/37ba49af6073abe351a3c466d3080962d2b727f0)), closes [#8](https://github.com/adobe/magento-storefront-events-sdk/issues/8)

### [0.0.9](https://github.com/adobe/magento-storefront-events-sdk/compare/v0.0.8...v0.0.9) (2021-03-15)

### Features

-   add missing unsubscribe support for generic event listeners ([f8ee42e](https://github.com/adobe/magento-storefront-events-sdk/commit/f8ee42e079e9c861be0295e47135eb3d80077a2a))

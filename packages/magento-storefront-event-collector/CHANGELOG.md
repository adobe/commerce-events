# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.1.3](https://github.com/adobe/magento-storefront-event-collector/compare/v1.1.2...v1.1.3) (2022-02-01)

### Features

* forward page view events to the Adobe Experience Platform Edge when the appropriate AEP context is set, closes [#83](https://github.com/adobe/magento-storefront-event-collector/pull/83), [#84](https://github.com/adobe/magento-storefront-event-collector/pull/84) and [#85](https://github.com/adobe/magento-storefront-event-collector/pull/85).

## [1.1.2](https://github.com/adobe/magento-storefront-event-collector/compare/v1.1.1...v1.1.2) (2022-01-14)

### Features

* **shopper.ts** set shopperId in default context ([fa3da4c8](https://github.com/adobe/magento-storefront-event-collector/pull/81/commits/fa3da4c8066d34f3662764bba4d13cb1eee2e1b3)), closes [#81](https://github.com/adobe/magento-storefront-event-collector/pull/81)

## [1.1.1](https://github.com/adobe/magento-storefront-event-collector/compare/v1.1.0...v1.1.1) (2021-10-26)


### Bug Fixes

* **package.json:** upping the mse sdk version ([6512103](https://github.com/adobe/magento-storefront-event-collector/commit/651210380663f420e35f2a9000ac6eed4fd6310c))
* **recommendations.d.ts:** recType was improper value, fixed it ([a8a8add](https://github.com/adobe/magento-storefront-event-collector/commit/a8a8add22f8d703d39d8c8dd35e07ffaad634f26)), closes [#78](https://github.com/adobe/magento-storefront-event-collector/issues/78)

## [1.1.0](https://github.com/adobe/magento-storefront-event-collector/compare/v1.0.1...v1.1.0) (2021-09-07)


### Features

* add api execution time tracking ([c410cd3](https://github.com/adobe/magento-storefront-event-collector/commit/c410cd37b0cbfd3a642f6805b76ecf0238d94a95))

### [1.0.1](https://github.com/adobe/magento-storefront-event-collector/compare/v1.0.0...v1.0.1) (2021-09-07)


### Bug Fixes

* make the search results price optional ([88cb62b](https://github.com/adobe/magento-storefront-event-collector/commit/88cb62bf04d8cb363e6c0a75fb0ea7b9db348c2c))
* **recommendeditem.ts:** do not add prices to recommendation item context if they are not present ([47625e9](https://github.com/adobe/magento-storefront-event-collector/commit/47625e977e069959e8c9644bc3469644bd30d846))
* **search-result-product schema:** update search-result-product schema to version 1-0-2 ([c1dd7bb](https://github.com/adobe/magento-storefront-event-collector/commit/c1dd7bbd27d567b2cb1d1eb1453e9329bc8a93c0))
* make price optional to support b2b ([3bb8e05](https://github.com/adobe/magento-storefront-event-collector/commit/3bb8e05aeb6fdd2582cfc3f21a5564065d919e91))

## [1.0.0](https://github.com/adobe/magento-storefront-event-collector/compare/v0.1.7...v1.0.0) (2021-06-07)

### [0.1.7](https://github.com/adobe/magento-storefront-event-collector/compare/v0.1.6...v0.1.7) (2021-06-07)


### Features

* asynchronous initialization via post message ([ad00fd9](https://github.com/adobe/magento-storefront-event-collector/commit/ad00fd97a25e1c949d302d059afc68d7a817948c))

### [0.1.6](https://github.com/adobe/magento-storefront-event-collector/compare/v0.1.5...v0.1.6) (2021-05-27)


### Bug Fixes

* fix page placement bug ([71fb887](https://github.com/adobe/magento-storefront-event-collector/commit/71fb88734101c8ec4075406330055e08e4f2e4aa))

### [0.1.5](https://github.com/adobe/magento-storefront-event-collector/compare/v0.1.4...v0.1.5) (2021-05-27)


### Features

* support gift options ([73cf94c](https://github.com/adobe/magento-storefront-event-collector/commit/73cf94c6b33712c85a7ee466344c5b1b071dd82f))

### [0.1.4](https://github.com/adobe/magento-storefront-event-collector/compare/v0.1.3...v0.1.4) (2021-05-26)


### Bug Fixes

* remove search input context from events ([4c44e7e](https://github.com/adobe/magento-storefront-event-collector/commit/4c44e7e2fda2f04851e9b81218c142c519ba5c29))

### [0.1.3](https://github.com/adobe/magento-storefront-event-collector/compare/v0.1.2...v0.1.3) (2021-05-26)


### Features

* populate placement and offset values ([95646aa](https://github.com/adobe/magento-storefront-event-collector/commit/95646aa69e89ca32d2137ea1531c9151643fc0c7))

### [0.1.2](https://github.com/adobe/magento-storefront-event-collector/compare/v0.1.1...v0.1.2) (2021-05-25)

### [0.1.1](https://github.com/adobe/magento-storefront-event-collector/compare/v0.1.0...v0.1.1) (2021-05-20)


### Bug Fixes

* include the shopping cart context with the place order event ([f10c94b](https://github.com/adobe/magento-storefront-event-collector/commit/f10c94b37f5cf939caadb702e5a6516eb65f6461))
* remove unnecessary early return ([fd5ebec](https://github.com/adobe/magento-storefront-event-collector/commit/fd5ebecdacc3fc39efab8774f52b3eceec0363c5))

## [0.1.0](https://github.com/adobe/magento-storefront-event-collector/compare/v0.0.19...v0.1.0) (2021-05-20)


### ⚠ BREAKING CHANGES

* TrackPageView is no longer called for you. You must execute this manually.

### Bug Fixes

* dynamically create all global contexts and remove track page view ([77f1372](https://github.com/adobe/magento-storefront-event-collector/commit/77f1372c2612e1b5eedb28ada47fea32accfd917))

### [0.0.19](https://github.com/adobe/magento-storefront-event-collector/compare/v0.0.18...v0.0.19) (2021-05-19)


### Bug Fixes

* dynamically calculate the shopper context ([46f464c](https://github.com/adobe/magento-storefront-event-collector/commit/46f464c1c30296d198b371522e2543940c63d13a))
* handle empty data layer during context creation ([d3fb41b](https://github.com/adobe/magento-storefront-event-collector/commit/d3fb41b511a321d17b22ba143b18bafb5314a974))

### [0.0.18](https://github.com/adobe/magento-storefront-event-collector/compare/v0.0.17...v0.0.18) (2021-05-18)


### Bug Fixes

* make product pricing optional ([f0d85e1](https://github.com/adobe/magento-storefront-event-collector/commit/f0d85e1d523792a1b4d5f8304aaa011625995f14))

### [0.0.17](https://github.com/adobe/magento-storefront-event-collector/compare/v0.0.16...v0.0.17) (2021-05-18)

### [0.0.16](https://github.com/adobe/magento-storefront-event-collector/compare/v0.0.15...v0.0.16) (2021-05-17)

### [0.0.15](https://github.com/adobe/magento-storefront-event-collector/compare/v0.0.14...v0.0.15) (2021-05-17)

### [0.0.14](https://github.com/adobe/magento-storefront-event-collector/compare/v0.0.13...v0.0.14) (2021-05-14)


### Features

* support multiple search units ([c4f44bc](https://github.com/adobe/magento-storefront-event-collector/commit/c4f44bcd2329e53ba43d736316ec5f031048e748))
* support new facets structure ([0b86d75](https://github.com/adobe/magento-storefront-event-collector/commit/0b86d75d5a156d0e5b31582b92c911bc35389fb5))
* support new search input structure ([a8f022a](https://github.com/adobe/magento-storefront-event-collector/commit/a8f022afb4fe4e88d348591dac22bf4365fe67af))

### [0.0.13](https://github.com/adobe/magento-storefront-event-collector/compare/v0.0.12...v0.0.13) (2021-04-30)


### Bug Fixes

* remove conditionals on required fields ([499127f](https://github.com/adobe/magento-storefront-event-collector/commit/499127fa723c9249bd3ff846d653967f6aba901b))

### [0.0.12](https://github.com/adobe/magento-storefront-event-collector/compare/v0.0.11...v0.0.12) (2021-04-28)

### [0.0.11](https://github.com/adobe/magento-storefront-event-collector/compare/v0.0.10...v0.0.11) (2021-04-26)

### [0.0.10](https://github.com/adobe/magento-storefront-event-collector/compare/v0.0.9...v0.0.10) (2021-04-23)


### Bug Fixes

* resolve id type mismatches ([8e17959](https://github.com/adobe/magento-storefront-event-collector/commit/8e1795928f40f19c4d98d7a4548330c6ecccba42))

### [0.0.9](https://github.com/adobe/magento-storefront-event-collector/compare/v0.0.8...v0.0.9) (2021-04-23)


### Bug Fixes

* remove invalid data type from value field ([8fad8af](https://github.com/adobe/magento-storefront-event-collector/commit/8fad8afb7efb885308f16af1463bfbab31345176))
* remove js build from tracker context ([5cb107c](https://github.com/adobe/magento-storefront-event-collector/commit/5cb107c80de94954ff001b7070c341443e08480d))

### [0.0.8](https://github.com/adobe/magento-storefront-event-collector/compare/v0.0.7...v0.0.8) (2021-04-22)


### Features

* add instant purchase event handler ([8304d4c](https://github.com/adobe/magento-storefront-event-collector/commit/8304d4c9941e00110ef2026483c016d5acc47edb))
* add page view event handler ([691d600](https://github.com/adobe/magento-storefront-event-collector/commit/691d600bfa5d333682a6ad8ff6683fc2692b2474))


### Bug Fixes

* handle empty shopping cart ([b79364e](https://github.com/adobe/magento-storefront-event-collector/commit/b79364eeadc564617a61b03fee9c90b1eed0c844))

### [0.0.7](https://github.com/adobe/magento-storefront-event-collector/compare/v0.0.6...v0.0.7) (2021-04-21)

### [0.0.6](https://github.com/adobe/magento-storefront-event-collector/compare/v0.0.5...v0.0.6) (2021-04-20)


### Features

* link click tracking ([47b9c44](https://github.com/adobe/magento-storefront-event-collector/commit/47b9c440d03b0e6ebfca71b8fd0052db1f98730d))


### Bug Fixes

* include a doctype in the example ([6434f97](https://github.com/adobe/magento-storefront-event-collector/commit/6434f97c54957da2d3df2ac5fc80d1b4c49598e4))

### [0.0.5](https://github.com/adobe/magento-storefront-event-collector/compare/v0.0.4...v0.0.5) (2021-04-16)


### Features

* allow data to be passed in to context creators ([46bea75](https://github.com/adobe/magento-storefront-event-collector/commit/46bea75924ee61fb87708479f783bb5952367daa))
* leverage custom context data ([fbfa729](https://github.com/adobe/magento-storefront-event-collector/commit/fbfa729ca713285dce954499d7436dcf833d1d2d))
* support search request id ([bffffeb](https://github.com/adobe/magento-storefront-event-collector/commit/bffffeb1a96d7af597a9cb268024ee42cbe3f61a))
* update schema versions ([6941c57](https://github.com/adobe/magento-storefront-event-collector/commit/6941c577a895a4cce253f9c5523577a5a4e9bdf0))

### [0.0.4](https://github.com/adobe/magento-storefront-event-collector/compare/v0.0.3...v0.0.4) (2021-04-09)


### Features

* populate order id ([ba2bb8b](https://github.com/adobe/magento-storefront-event-collector/commit/ba2bb8b1c85b7013c278d3db72ca6ca8b3c0c12a))
* populate page type ([48fa6d5](https://github.com/adobe/magento-storefront-event-collector/commit/48fa6d5ef365e0c67d1e159ca937c40a6a79b32a))
* support recommendation add to cart event ([dc63789](https://github.com/adobe/magento-storefront-event-collector/commit/dc637899a15f1ad6c69eed700d1ca2fdd3b9eef9))
* support recommendation api response received event ([5ec92ce](https://github.com/adobe/magento-storefront-event-collector/commit/5ec92ce343c46347a124b30065468b8ce3f9b166))
* support recommendation api response received event ([3f47b81](https://github.com/adobe/magento-storefront-event-collector/commit/3f47b812cf3dc99d6edf64aeb78b8e5520d66278))
* support recommendation click event ([c8d6426](https://github.com/adobe/magento-storefront-event-collector/commit/c8d6426d7a1695e877b9e0c4d29c35567651bf24))
* support recommendation render event ([e007582](https://github.com/adobe/magento-storefront-event-collector/commit/e007582eecf5c5c2c554d1d31c3105534a0f3625))
* support recommendation view event ([42fd248](https://github.com/adobe/magento-storefront-event-collector/commit/42fd248812b67de4931fab1a4362272c5e003964))

### [0.0.3](https://github.com/adobe/magento-storefront-event-collector/compare/v0.0.2...v0.0.3) (2021-04-01)


### Features

* support add to cart event ([c3ab34f](https://github.com/adobe/magento-storefront-event-collector/commit/c3ab34f9cce1be92c1cc7e6d9699b9890c84ca84))
* support place order event ([f9d8021](https://github.com/adobe/magento-storefront-event-collector/commit/f9d8021ce3e47ec833b581669c553d3727582117))
* support product view event ([8f2b388](https://github.com/adobe/magento-storefront-event-collector/commit/8f2b388340e4e2a49bb162a2ba5809dfbe93ed86))
* support recommendation api request sent event ([4f89389](https://github.com/adobe/magento-storefront-event-collector/commit/4f893892b50a614587f22594d73e473dcfbc3e13))
* support shopping cart view event ([5ebb760](https://github.com/adobe/magento-storefront-event-collector/commit/5ebb760917c3fa329a53296101869c361deb706f))

### [0.0.2](https://github.com/adobe/magento-storefront-event-collector/compare/v0.0.1...v0.0.2) (2021-03-25)


### Features

* add event handlers which send data to snowplow ([dc223aa](https://github.com/adobe/magento-storefront-event-collector/commit/dc223aa1427f3adb870596d44ad7e725fe98b97a))
* construct snowplow contexts ([9540fd2](https://github.com/adobe/magento-storefront-event-collector/commit/9540fd2ecafa9c9a67f4caf0a4ee044351fe70b5))
* create extension context and include it with global contexts ([8ca18d5](https://github.com/adobe/magento-storefront-event-collector/commit/8ca18d5b830261c7683644e1f09d89071e337d3f))
* create shopper context and include it with global contexts ([e2ffb14](https://github.com/adobe/magento-storefront-event-collector/commit/e2ffb1498e3b09d9323134fe626bbdd06775edc5))
* create shopping cart context and include it with global contexts ([0d0ffec](https://github.com/adobe/magento-storefront-event-collector/commit/0d0ffecb0a322a7ca458d4a5c3a90b9515cbf144))
* create storefront instance context and include it with global contexts ([22b5cb1](https://github.com/adobe/magento-storefront-event-collector/commit/22b5cb1afc2637af8aee2770815e02ea99b45801))
* include tracker global context ([7014a83](https://github.com/adobe/magento-storefront-event-collector/commit/7014a8369ed2b4e958a20379dee58f5e9924a6c9))
* initialize adobe client data layer ([bcdc07b](https://github.com/adobe/magento-storefront-event-collector/commit/bcdc07b1a69803bb9b9f9090d4a0bca9cb2f001d))
* initialize analytics ([6342e59](https://github.com/adobe/magento-storefront-event-collector/commit/6342e5907b02563d0b3e91458922394709c4c54b))
* send events to snowplow ([ab6edee](https://github.com/adobe/magento-storefront-event-collector/commit/ab6edee27d9dae18a8d438ad138e30b01cbb2b63))

### 0.0.1 (2021-03-17)

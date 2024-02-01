# Adobe Commerce Events Collectors

[![version][version-badge]][npm]
[![downloads][downloads-badge]][npm]
[![size][size-badge]][bundlephobia]
[![build][build-badge]][actions]
[![typescript][typescript-badge]][typescript]
[![contributing][contributing-badge]][contributing]

## Overview

This package listens for and handles events published by the [Adobe Commerce Events SDK][sdk] to the adobeDataLayer[acdl]. It runs as a side effect and is meant to be a convenience for users who want to send event data to Adobe Commerce.

## Installation

The collector can be used as a hosted script, or bundled in a JavaScript application. The script version is hosted on [unpkg][unpkg], and the bundled version is hosted on [npm][npm].

To load the Collector as a script, use the following snippet.

```
<script src="https://unpkg.com/@adobe/commerce-events-collectors/dist/index.js"></script>
```

To install the script as a dependency, run this command.

```shell
npm install @adobe/commerce-events-collectors
```

## Quick start

After loading the collector script, or importing the package as shown below, there is nothing else that needs to be done.

```javascript
import "@adobe/commerce-events-collectors";
```

## Usage

The collector listens for the following events.

-   `pageView`
-   `addToCart`
-   `productPageView`
-   `shoppingCartView`
-   `initiateCheckout`
-   `openCart`
-   `placeOrder`
-   `recsItemAddToCartClick`
-   `recsItemClick`
-   `recsRequestSent`
-   `recsResponseReceived`
-   `recsUnitRender`
-   `recsUnitView`
-   `removeFromCart`
-   `searchCategoryClick`
-   `searchProductClick`
-   `searchRequestSent`
-   `searchResponseReceived`
-   `searchResultsView`
-   `categoryResultsView`
-   `searchSuggestionClick`
-   `createAccount`
-   `editAccount`
-   `signIn`
-   `signOut`
-   `custom`

B2B events

-   `createRequisitionList`
-   `deleteRequisitionList`
-   `addToRequisitionList`
-   `removeFromRequisitionList`

The handlers forward events to two edges:

-   Adobe Commerce Data Services (maintained by Adobe Engineering and used to power merchant performance dashboards)

    Required contexts:

    -   `StorefrontInstance`

    Events not forwarded to Adobe Commerce:

    -   `createAccount`
    -   `editAccount`
    -   `openCart`
    -   `removeFromCart`
    -   `signIn`
    -   `signOut`
    -   `custom`

    B2B events:

    -   `createRequisitionList`
    -   `deleteRequisitionList`
    -   `addToRequisitionList`
    -   `removeFromRequisitionList`

-   [Adobe Experience Platform (AEP)](https://business.adobe.com/products/experience-platform/adobe-experience-platform.html) (requires a subscription and additional merchant [setup](https://experienceleague.adobe.com/docs/experience-platform/edge/fundamentals/datastreams.html?lang=en); data can be used by merchants inside the Adobe Experience Platform for detailed analytics, targeted merchandising, real time customer data profiles, and more)

    Required contexts:

    -   `AEP`
    -   `EventForwarding.aep: true`

    Events not forwarded to AEP Edge:

    -   `recsItemAddToCartClick`
    -   `recsItemClick`
    -   `recsRequestSent`
    -   `searchResponseReceived`
    -   `searchCategoryClick`
    -   `searchProductClick`
    -   `searchResultsView`
    -   `categoryResultsView`
    -   `searchSuggestionClick`

### Turning off collection per edge

Events are sent to Adobe Commerce Data Services by default. To turn collection off collection, set `EventForwarding.commerce: false`.

Events are not set to AEP Edge unless explicitly configured (`EventForwarding.aep: true`);

### Handling custom events

Custom events are supported for the Adobe Experience Platform only. Custom data will not be forwarded to Adobe Commerce dashboards and metrics trackers.

For any `custom` event, the collector:

-   adds`identityMap` with `ECID` as a primary identity
-   includes `email` in `identityMap` as a secondary identity _if_ `personalEmail.address` is set in the event
-   wraps the full event inside an `xdm` object before forwarding to the Edge

Example:

Custom event published through MSE SDK:

```javascript
mse.publish.custom({
    commerce: {
        saveForLaters: {
            value: 1,
        },
    },
});
```

In AEP Edge:

```javascript
{
  xdm: {
    identityMap: {
      ECID: [
        {
          id: 'ecid1234',
          primary: true
        }
      ],
      email: [
        {
          id: "runs@safari.ke",
          primary: false
        }
      ]
    },
    commerce: {
        saveForLaters: {
            value: 1
        }
    }
  }
}
```

**note** Using custom events may affect OOTB Adobe Analytics reports.

### Handling event overrides (custom attributes)

Attribute overrides for standard events are supported for the Experience Platform only. Custom data will not be forwarded to Commerce dashboards and metrics trackers.

For any event with a set `customContext`, the collector overrides joins fields set in the relevant contexts with fields in `customContext`. The use case for overrides is when a developer wants to reuse and extend contexts set by other parts of the page in already supporte events.

_Note_ when overriding custom events, event forwarding to AEP should be turned off for that event type in order to avoid-double counting.

Example:

Product view with Adobe Commerce overrides published though MSE SDK:

Product context (set by another script on the page):

```javascript
{
}
```

```javascript
mse.publish.productPageView({
    productListItems: [
        {
            productCategories: [
                {
                    categoryID: "cat_15",
                    categoryName: "summer pants",
                    categoryPath: "pants/mens/summer",
                },
            ],
        },
    ],
});
```

In AEP Edge:

```javascript
{
  xdm: {
    eventType: 'commerce.productViews',
    identityMap: {
      ECID: [
        {
          id: 'ecid1234',
          primary: true,
        }
      ]
    },
    commerce: {
      productViews: {
        value : 1,
      }
    },
    productListItems: [{
        SKU: "1234",
        name: "leora summer pants",
        productCategories: [{
            categoryID: "cat_15",
            categoryName: "summer pants",
            categoryPath: "pants/mens/summer",
        }],
    }],
  }
}
```

**Note** Overriding events with custom attributes may affect OOTB Adobe Analytics reports.

## Shopper Consent and Data Collection Opt out

The "mg_dnt" cookie is used by Product Recommendations to restrict data collection.

when the [cookie restriction mode](https://experienceleague.adobe.com/docs/commerce-admin/start/compliance/privacy/compliance-cookie-law.html) is enabled, data services will set the "mg_dnt" cookie to true.

```javascript
const listenForCookieEvents = ($) => {
    const DNT_COOKIE = "mg_dnt";
    let userAllowedSaveCookie = !!$.mage.cookies.get("user_allowed_save_cookie");

    if (userAllowedSaveCookie) {
        $.mage.cookies.clear(DNT_COOKIE);
    } else {
        $.mage.cookies.set(DNT_COOKIE, true);
    }
};
```

By default, the user consent preference in AEP is set to "opt in", unless the cookie restriction mode is enabled and the "mg_dnt" cookie is present.

The script will keep polling to check for any changes and send the updated preference to AEP.

```javascript
const doNotTrackCookie = document.cookie.indexOf("mg_dnt") !== -1;
alloy("setConsent", {
    consent: [
        {
            standard: "Adobe",
            version: "1.0",
            value: {
                general: doNotTrackCookie ? "out" : "in",
            },
        },
    ],
});
setInterval(setConsent, 1000);
```

## PII Data Collection

The following events forward a user's email as PII data to AEP:

`createAccount`

`editAccount`

`signIn`

## Support

If you have any questions or encounter any issues, please reach out at these locations.

-   [GitHub][issues]

[npm]: https://npmjs.com/package/@adobe/commerce-events-collectors
[version-badge]: https://img.shields.io/npm/v/@adobe/magento-storefront-event-collector.svg?style=flat-square
[downloads-badge]: https://img.shields.io/npm/dt/@adobe/magento-storefront-event-collector?style=flat-square
[bundlephobia]: https://bundlephobia.com/result?p=@adobe/magento-storefront-event-collector
[size-badge]: https://img.shields.io/bundlephobia/minzip/@adobe/magento-storefront-event-collector?style=flat-square
[actions]: https://github.com/adobe/commerce-events/actions
[build-badge]: https://img.shields.io/github/workflow/status/adobe/magento-storefront-event-collector/merge-to-main?style=flat-square
[typescript]: https://typescriptlang.org/dt/search?search=%40adobe%2Fcommerce-events-collectors
[typescript-badge]: https://img.shields.io/npm/types/@adobe/commerce-events-collectors?style=flat-square
[contributing]: https://github.com/adobe/commerce-events/blob/main/.github/CONTRIBUTING.md
[contributing-badge]: https://img.shields.io/badge/PRs-welcome-success?style=flat-square
[sdk]: https://npmjs.com/package/@adobe/magento-storefront-events-sdk
[acdl]: https://github.com/adobe/adobe-client-data-layer
[unpkg]: https://unpkg.com/@adobe/magento-storefront-event-collector/dist/index.js
[issues]: https://github.com/adobe/commerce-events/issues

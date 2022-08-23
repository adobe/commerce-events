import {
    generateMagentoExtensionContext,
    generateOrderContext,
    generatePageContext,
    generateProductContext,
    generateRecommendationsContext,
    generateSearchInputContext,
    generateSearchResultsContext,
    generateShopperContext,
    generateShoppingCartContext,
    generateStorefrontInstanceContext,
} from "../../../packages/commerce-events-sdk/tests/mocks";

const sdk = window.commerceEventsSdk;

sdk.context.setPage(generatePageContext());
sdk.context.setRecommendations(generateRecommendationsContext());
sdk.context.setProduct(generateProductContext());
sdk.context.setOrder(generateOrderContext());
sdk.context.setShoppingCart(generateShoppingCartContext());
sdk.context.setMagentoExtension(generateMagentoExtensionContext());
sdk.context.setStorefrontInstance(generateStorefrontInstanceContext());
sdk.context.setShopper(generateShopperContext());
sdk.context.setSearchInput(generateSearchInputContext());
sdk.context.setSearchResults(generateSearchResultsContext());

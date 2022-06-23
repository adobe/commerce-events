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
} from "../tests/mocks";

const mse = window.magentoStorefrontEvents;

mse.context.setPage(generatePageContext());
mse.context.setRecommendations(generateRecommendationsContext());
mse.context.setProduct(generateProductContext());
mse.context.setOrder(generateOrderContext());
mse.context.setShoppingCart(generateShoppingCartContext());
mse.context.setMagentoExtension(generateMagentoExtensionContext());
mse.context.setStorefrontInstance(generateStorefrontInstanceContext());
mse.context.setShopper(generateShopperContext());
mse.context.setSearchInput(generateSearchInputContext());
mse.context.setSearchResults(generateSearchResultsContext());

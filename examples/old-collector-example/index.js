import {
    mockAccount,
    mockDataServicesExtension,
    mockExperiencePlatformConnectorExtenion,
    mockExtension,
    mockOrder,
    mockPage,
    mockProduct,
    mockRecommendations,
    mockRecommendationsExtension,
    mockSearchExtension,
    mockSearchInput,
    mockSearchResults,
    mockShopper,
    mockShoppingCart,
    mockStorefront,
} from "../../packages/storefront-events-collector/tests/utils/mocks";

const mse = window.magentoStorefrontEvents;

mse.context.setAccount(mockAccount);
mse.context.setMagentoExtension(mockExtension);
mse.context.setDataServicesExtension(mockDataServicesExtension);
mse.context.setExperiencePlatformConnectorExtension(mockExperiencePlatformConnectorExtenion);
mse.context.setRecommendationsExtension(mockRecommendationsExtension);
mse.context.setSearchExtension(mockSearchExtension);
mse.context.setOrder(mockOrder);
mse.context.setPage(mockPage);
mse.context.setProduct(mockProduct);
mse.context.setRecommendations(mockRecommendations);
mse.context.setSearchInput(mockSearchInput);
mse.context.setSearchResults(mockSearchResults);
mse.context.setShopper(mockShopper);
mse.context.setShoppingCart(mockShoppingCart);
mse.context.setStorefrontInstance(mockStorefront);

/* beacon/experience platform specific code below*/
mse.context.setAEP({
    imsOrgId: "DEDB2A52641B1D460A495F8E@AdobeOrg",
    datastreamId: '869fcdfe-abda-4bd5-b948-d9c1595c42e9', // ani commerce
});

mse.context.setEventForwarding({
    commerce: true,
    aep: true,
});
/* end beacon */


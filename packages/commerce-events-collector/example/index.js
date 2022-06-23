import {
    mockAccount,
    mockDataServicesExtension,
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
} from "../tests/utils/mocks";

const mse = window.magentoStorefrontEvents;

mse.context.setAccount(mockAccount);
mse.context.setMagentoExtension(mockExtension);
mse.context.setDataServicesExtension(mockDataServicesExtension);
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
    imsOrgId: "53A16ACB5CC1D3760A495C99@AdobeOrg",
    // datastreamId: "1144fb8d-b234-4c44-85ac-af91ed64c2dd:dev", // aniham
    datastreamId: "4d8ccd3b-9463-43bf-862a-c908fad3b20b", // beacon
});
mse.context.setEventForwarding({
    commerce: true,
    aep: true,
});
/* end beacon */

// mse.publish.pageView();

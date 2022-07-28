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
} from "../../packages/commerce-events-collectors/tests/utils/mocks";

function exampleSync() {
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
    mse.context.setAEP({
        imsOrgId: "53A16ACB5CC1D3760A495C99@AdobeOrg",
        // datastreamId: "1144fb8d-b234-4c44-85ac-af91ed64c2dd:dev", // aniham
        datastreamId: "4d8ccd3b-9463-43bf-862a-c908fad3b20b", // beacon
    });
    mse.context.setEventForwarding({
        commerce: true,
        aep: true,
    });

    mse.publish.pageView();
}

async function exampleAsync() {
    Promise.all([
        commerceConnector("context", "setAccount", mockAccount),
        commerceConnector("context", "setMagentoExtension", mockExtension),
        commerceConnector("context", "setDataServicesExtension", mockDataServicesExtension),
        commerceConnector("context", "setRecommendationsExtension", mockRecommendationsExtension),
        commerceConnector("context", "setSearchExtension", mockSearchExtension),
        commerceConnector("context", "setOrder", mockOrder),
        commerceConnector("context", "setPage", mockPage),
        commerceConnector("context", "setProduct", mockProduct),
        commerceConnector("context", "setRecommendations", mockRecommendations),
        commerceConnector("context", "setSearchInput", mockSearchInput),
        commerceConnector("context", "setSearchResults", mockSearchResults),
        commerceConnector("context", "setShopper", mockShopper),
        commerceConnector("context", "setShoppingCart", mockShoppingCart),
        commerceConnector("context", "setStorefrontInstance", mockStorefront),
        commerceConnector("context", "setAEP", {
            imsOrgId: "53A16ACB5CC1D3760A495C99@AdobeOrg",
            // datastreamId: "1144fb8d-b234-4c44-85ac-af91ed64c2dd:dev", // aniham
            datastreamId: "4d8ccd3b-9463-43bf-862a-c908fad3b20b", // beacon
        }),
        commerceConnector("context", "setEventForwarding", {
            commerce: true,
            aep: true,
        }),
    ]).then(() => {
        console.log("done setting context async");
        commerceConnector("publish", "pageView");
    });
}

exampleSync();
// exampleAsync();

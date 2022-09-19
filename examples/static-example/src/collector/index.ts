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
} from "@adobe/commerce-events-collectors/tests/utils/mocks";
import { generateButton } from "./button";

import { sdk } from "../sdk/get-sdk";

sdk.context.setAccount(mockAccount);
sdk.context.setMagentoExtension(mockExtension);
sdk.context.setDataServicesExtension(mockDataServicesExtension);
sdk.context.setRecommendationsExtension(mockRecommendationsExtension);
sdk.context.setSearchExtension(mockSearchExtension);
sdk.context.setOrder(mockOrder);
sdk.context.setPage(mockPage);
sdk.context.setProduct(mockProduct);
sdk.context.setRecommendations(mockRecommendations);
sdk.context.setSearchInput(mockSearchInput);
sdk.context.setSearchResults(mockSearchResults);
sdk.context.setShopper(mockShopper);
sdk.context.setShoppingCart(mockShoppingCart);
sdk.context.setStorefrontInstance(mockStorefront);

/* beacon/experience platform specific code below*/
sdk.context.setAEP({
    imsOrgId: "53A16ACB5CC1D3760A495C99@AdobeOrg",
    // datastreamId: "1144fb8d-b234-4c44-85ac-af91ed64c2dd:dev", // aniham
    datastreamId: "4d8ccd3b-9463-43bf-862a-c908fad3b20b", // beacon
});
sdk.context.setEventForwarding({
    commerce: true,
    aep: true,
});
/* end beacon */

// sdk.publish.pageView();
document.querySelectorAll("button").forEach((btn) => generateButton(btn));

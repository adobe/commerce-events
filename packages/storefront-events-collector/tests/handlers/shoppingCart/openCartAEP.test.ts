jest.mock("../../../src/alloy");
import { sendEvent } from "../../../src/alloy";
import { openCartHandlerAEP } from "../../../src/handlers";
import { mockEvent } from "../../utils/mocks";

const AEPevent = { ...mockEvent };
delete AEPevent.eventInfo.customContext;

test("correctly structures AEP event and calls alloy.sendEvent", () => {
    openCartHandlerAEP(mockEvent);

    expect(sendEvent).toHaveBeenCalledTimes(1);

    expect(sendEvent).toHaveBeenCalledWith({
        commerce: {
            cart: {
                cartID: "111111",
            },
            productListOpens: {
                value: 1,
            },
            commerceScope: {
                environmentID: "aaaaaa",
                storeCode: "magento",
                storeViewCode: "default",
                websiteCode: "website",
            },
        },
        productListItems: [
            {
                SKU: "aaaaaa",
                name: "T-Shirt",
                quantity: 1,
                priceTotal: 20,
                productImageUrl: undefined,
                currencyCode: "USD",
                discountAmount: 0,
                selectedOptions: [],
            },
            {
                SKU: "h001",
                name: "Hoodie",
                quantity: 1,
                priceTotal: 50,
                productImageUrl: undefined,
                currencyCode: "USD",
                discountAmount: 0,
                selectedOptions: [],
            },
        ],
        _id: undefined,
        eventType: "commerce.productListOpens",
    });
});

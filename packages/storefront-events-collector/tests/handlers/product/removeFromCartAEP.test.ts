jest.mock("../../../src/alloy");
import { sendEvent } from "../../../src/alloy";
import { removeFromCartHandlerAEP } from "../../../src/handlers";
import { mockEvent } from "../../utils/mocks";

const AEPevent = { ...mockEvent };
delete AEPevent.eventInfo.customContext;

test("correctly structures AEP event and calls alloy.sendEvent", () => {
    removeFromCartHandlerAEP(mockEvent);

    expect(sendEvent).toHaveBeenCalledTimes(1);

    expect(sendEvent).toHaveBeenCalledWith({
        commerce: {
            commerceScope: {
                environmentID: "aaaaaa",
                storeCode: "magento",
                storeViewCode: "default",
                websiteCode: "website",
            },
            cart: {
                cartID: "111111",
            },
            productListRemovals: {
                value: 1,
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
        eventType: "commerce.productListRemovals",
    });
});

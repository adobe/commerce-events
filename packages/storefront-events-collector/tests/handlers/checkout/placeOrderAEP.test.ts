jest.mock("../../../src/alloy");
import { sendEvent } from "../../../src/alloy";
import { placeOrderHandlerAEP } from "../../../src/handlers";
import { mockEvent } from "../../utils/mocks";

const AEPevent = { ...mockEvent };
delete AEPevent.eventInfo.customContext;

test("correctly structures AEP event and calls alloy.sendEvent", () => {
    placeOrderHandlerAEP(mockEvent);

    expect(sendEvent).toHaveBeenCalledTimes(1);

    expect(sendEvent).toHaveBeenCalledWith({
        commerce: {
            commerceScope: {
                environmentID: "aaaaaa",
                storeCode: "magento",
                storeViewCode: "default",
                websiteCode: "website",
            },
            order: {
                purchaseID: "111111",
                currencyCode: "USD",
                payments: [
                    {
                        currencyCode: "USD",
                        paymentAmount: 30,
                        paymentType: "other",
                        transactionID: "111111",
                    },
                    {
                        currencyCode: "USD",
                        paymentAmount: 39.98,
                        paymentType: "other",
                        transactionID: "111111",
                    },
                ],
                orderType: "checkout",
            },
            promotionID: "",
            shipping: { shippingMethod: "ground", shippingAmount: 5.99 },
            purchases: { value: 1 },
        },
        personalEmail: {
            address: "beacon3@commerce.com",
        },
        productListItems: [
            {
                SKU: "ts001",
                name: "T-Shirt",
                quantity: 1,
                priceTotal: 20,
                currencyCode: "USD",
                discountAmount: 0,
                selectedOptions: [],
                productImageUrl: undefined,
            },
            {
                SKU: "h001",
                name: "Hoodie",
                quantity: 1,
                priceTotal: 50,
                currencyCode: "USD",
                discountAmount: 0,
                selectedOptions: [],
                productImageUrl: undefined,
            },
        ],
        _id: undefined,
        eventType: "commerce.purchases",
    });
});

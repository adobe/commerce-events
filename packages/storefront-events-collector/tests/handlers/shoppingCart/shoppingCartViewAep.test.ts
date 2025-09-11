jest.mock("../../../src/alloy");
import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";
import { sendEvent } from "../../../src/alloy";
import { shoppingCartViewHandlerAEP } from "../../../src/handlers";
import { mockEvent } from "../../utils/mocks";

const AEPevent = { ...mockEvent };
delete AEPevent.eventInfo.customContext;

test("correctly structures AEP event and calls alloy.sendEvent", () => {
    shoppingCartViewHandlerAEP(mockEvent);

    expect(sendEvent).toHaveBeenCalledTimes(1);

    expect(sendEvent).toHaveBeenCalledWith(
        {
            commerce: {
                cart: {
                    cartID: "111111",
                },
                productListViews: {
                    value: 1,
                },
                commerceScope: {
                    environmentID: "aaaaaa",
                    storeCode: "magento",
                    storeViewCode: "default",
                    websiteCode: "website",
                },
                order: {
                    discountAmount: 0,
                },
            },
            productListItems: [
                {
                    SKU: "ts001",
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
            eventType: "commerce.productListViews",
        },
        mockEvent,
    );
});

test("correctly structures AEP event with customContext and calls alloy.sendEvent", () => {
    const customContext = {
        commerce: {
            order: {
                couponCode: "couponCode123",
            },
        },
        productListItems: [
            {
                SKU: "ts001",
                name: "Custom Product Name",
                categoryId: "customCat001",
            },
        ],
    };
    const mockedAEPevent = {
        event: 'shopping-cart-view',
        eventInfo: {
            ...AEPevent.eventInfo,
            customContext,
        }
    } as Event;

    shoppingCartViewHandlerAEP(mockedAEPevent);

    expect(sendEvent).toHaveBeenCalledTimes(1);

    expect(sendEvent).toHaveBeenCalledWith(
        {
            commerce: {
                cart: {
                    cartID: "111111",
                },
                productListViews: {
                    value: 1,
                },
                commerceScope: {
                    environmentID: "aaaaaa",
                    storeCode: "magento",
                    storeViewCode: "default",
                    websiteCode: "website",
                },
                order: {
                    discountAmount: 0,
                    couponCode: customContext.commerce.order.couponCode,
                },
            },
            productListItems: [
                {
                    SKU: "ts001",
                    name: customContext.productListItems[0].name,
                    quantity: 1,
                    priceTotal: 20,
                    productImageUrl: undefined,
                    currencyCode: "USD",
                    discountAmount: 0,
                    selectedOptions: [],
                    categoryId: customContext.productListItems[0].categoryId,
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
            eventType: "commerce.productListViews",
        },
        mockedAEPevent,
    );
});

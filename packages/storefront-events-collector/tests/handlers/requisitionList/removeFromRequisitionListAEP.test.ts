jest.mock("../../../src/alloy");
import { sendEvent } from "../../../src/alloy";
import { removeFromRequisitionListHandlerAEP } from "../../../src/handlers";
import { mockEvent } from "../../utils/mocks";

const AEPevent = { ...mockEvent };
delete AEPevent.eventInfo.customContext;

test("correctly structures AEP event and calls alloy.sendEvent", () => {
    removeFromRequisitionListHandlerAEP(mockEvent);

    expect(sendEvent).toHaveBeenCalledTimes(1);

    expect(sendEvent).toHaveBeenCalledWith({
        commerce: {
            requisitionListRemovals: {
                value: 1,
            },
            requisitionList: {
                ID: "1",
                name: "Req List 1",
                description: "This is req list 1",
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
                currencyCode: "USD",
                selectedOptions: [
                    {
                        attribute: "size",
                        value: "S",
                    },
                ],
            },
            {
                SKU: "h001",
                name: "Hoodie",
                quantity: 1,
                priceTotal: 50,
                currencyCode: "USD",
                selectedOptions: [],
            },
        ],
        personalEmail: {
            address: "beacon3@commerce.com",
        },
        _id: undefined,
        eventType: "commerce.requisitionListRemovals",
    });
});

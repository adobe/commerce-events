jest.mock("../../../src/alloy");
import { sendEvent } from "../../../src/alloy";
import { addToRequisitionListHandlerAEP } from "../../../src/handlers";
import { mockEvent } from "../../utils/mocks";

const AEPevent = { ...mockEvent };
delete AEPevent.eventInfo.customContext;

test("correctly structures AEP event and calls alloy.sendEvent", () => {
    addToRequisitionListHandlerAEP(mockEvent);

    expect(sendEvent).toHaveBeenCalledTimes(1);

    expect(sendEvent).toHaveBeenCalledWith({
        commerce: {
            requisitionListAdds: {
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
                currencyCode: "USD",
                name: "T-Shirt",
                priceTotal: 20,
                quantity: 1,
                selectedOptions: [
                    {
                        attribute: "size",
                        value: "S",
                    },
                ],
            },
            {
                SKU: "h001",
                currencyCode: "USD",
                name: "Hoodie",
                priceTotal: 50,
                quantity: 1,
                selectedOptions: [],
            },
        ],
        personalEmail: {
            address: "beacon3@commerce.com",
        },
        _id: undefined,
        eventType: "commerce.requisitionListAdds",
    });
});

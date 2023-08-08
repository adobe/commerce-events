jest.mock("../../../src/alloy");
import { sendEvent } from "../../../src/alloy";
import { createRequisitionListHandlerAEP } from "../../../src/handlers";
import { mockEvent } from "../../utils/mocks";

const AEPevent = { ...mockEvent };
delete AEPevent.eventInfo.customContext;

test("correctly structures AEP event and calls alloy.sendEvent", () => {
    createRequisitionListHandlerAEP(mockEvent);

    expect(sendEvent).toHaveBeenCalledTimes(1);

    expect(sendEvent).toHaveBeenCalledWith({
        commerce: {
            requisitionListOpens: {
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
        personalEmail: {
            address: "beacon3@commerce.com",
        },
        _id: undefined,
        eventType: "commerce.requisitionListOpens",
    });
});

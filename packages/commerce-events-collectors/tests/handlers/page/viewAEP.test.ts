import { Web } from "../../../src/types/aep";
import { sendEvent } from "../../../src/alloy";
import { pageViewHandlerAEP } from "../../../src/handlers";
import { mockEvent } from "../../utils/mocks";

jest.mock("../../../src/alloy");

test("sends correctly structured event to AEP by default", async () => {
    const pageViewEvent = {
        ...mockEvent,
        eventInfo: {
            ...mockEvent.eventInfo,
            pageContext: {
                ...mockEvent.eventInfo.pageContext,
                pageName: "Webpage Title",
            },
        }
    };

    await pageViewHandlerAEP(pageViewEvent);

    expect(sendEvent).toHaveBeenCalledTimes(1);
    expect(sendEvent).toHaveBeenCalledWith({
        web: {
            webPageDetails: {
                pageViews: {
                    value: 1,
                },
                siteSection: "pdp",
                name: "Webpage Title",
            },
        },
        eventType: "web.webpagedetails.pageViews",
        _id: undefined,
    });
});

test("uses custom context if provided", async () => {
    const mockWebContext: Web = {
        webPageDetails: {
            pageViews: {
                value: 22,
            },
            name: "Some Webpage",
            siteSection: "some-section",
        },
    };

    const pageViewEvent = {
        ...mockEvent,
        eventInfo: {
            ...mockEvent.eventInfo,
            pageContext: {
                ...mockEvent.eventInfo.pageContext
            },
            customContext: { web: mockWebContext },
        }
    };

    await pageViewHandlerAEP(pageViewEvent);

    expect(sendEvent).toHaveBeenCalledTimes(1);
    expect(sendEvent).toHaveBeenCalledWith({
        web: mockWebContext,
        eventType: "web.webpagedetails.pageViews",
        _id: undefined,
    });
});

test("uses event ID from debug context", async () => {
    const uuid = "961c1b79-f245-4f8c-815f-f525f6abb96d";

    const pageViewEvent = {
        ...mockEvent,
        eventInfo: {
            ...mockEvent.eventInfo,
            pageContext: {
                ...mockEvent.eventInfo.pageContext
            },
            debugContext: { eventId: uuid },
        }
    };

    await pageViewHandlerAEP(pageViewEvent);

    expect(sendEvent).toHaveBeenCalledTimes(1);
    expect(sendEvent).toHaveBeenCalledWith({
        web: {
            webPageDetails: {
                pageViews: {
                    value: 1,
                },
                siteSection: "pdp",
                name: undefined,
            },
        },
        eventType: "web.webpagedetails.pageViews",
        _id: uuid,
    });
});

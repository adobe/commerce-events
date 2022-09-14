import { Account } from "@adobe/commerce-events-sdk";
import { sendEvent } from "../../../src/alloy";
import { signOutHandlerAEP } from "../../../src/handlers";
import { mockEvent } from "../../utils/mocks";

jest.mock("../../../src/alloy");

test("sends correctly structured event to AEP by default", async () => {
    await signOutHandlerAEP(mockEvent);

    expect(sendEvent).toHaveBeenCalledTimes(1);
    expect(sendEvent).toHaveBeenCalledWith({
        userAccount: { logout: 1 },
        eventType: "userAccount.logout",
        _id: undefined,
    });
});

test("uses custom context if provided", async () => {
    const mockAccountContext: Account = {
        firstName: "Myfirstname",
        lastName: "Mylastname",
        emailAddress: "some@email.address",
    };

    const logoutEvent = {
        ...mockEvent,
        eventInfo: {
            ...mockEvent.eventInfo,
            customContext: { person: mockAccountContext },
        },
    };

    await signOutHandlerAEP(logoutEvent);

    expect(sendEvent).toHaveBeenCalledTimes(1);
    expect(sendEvent).toHaveBeenCalledWith({
        person: mockAccountContext,
        userAccount: { logout: 1 },
        eventType: "userAccount.logout",
        _id: undefined,
    });
});

test("uses event ID from debug context", async () => {
    const uuid = "86187b98-7d0d-44ae-94d3-7a831edc4464";

    const createAccountEvent = {
        ...mockEvent,
        eventInfo: {
            ...mockEvent.eventInfo,
            debugContext: { eventId: uuid },
        },
    };

    await signOutHandlerAEP(createAccountEvent);

    expect(sendEvent).toHaveBeenCalledTimes(1);
    expect(sendEvent).toHaveBeenCalledWith({
        userAccount: { logout: 1 },
        eventType: "userAccount.logout",
        _id: uuid,
    });
});

import { Account } from "@adobe/commerce-events-sdk";
import { sendEvent } from "../../../src/alloy";
import { createAccountHandlerAEP } from "../../../src/handlers";
import { mockEvent, mockAccount } from "../../utils/mocks";

jest.mock("../../../src/alloy");

mockEvent.eventInfo.accountContext = mockAccount;

test("sends correctly structured event to AEP by default", async () => {
    await createAccountHandlerAEP(mockEvent);

    expect(sendEvent).toHaveBeenCalledTimes(1);
    expect(sendEvent).toHaveBeenCalledWith({
        person: {
            accountID: undefined,
            accountType: undefined,
        },
        personalEmail: { address: "beacon3@commerce.com" },
        userAccount: { createProfile: 1 },
        eventType: "userAccount.createProfile",
        _id: undefined,
    });
});

test("uses custom context if provided", async () => {
    const mockAccountContext: Account = {
        firstName: "Myfirstname",
        lastName: "Mylastname",
        emailAddress: "some@email.address",
    };

    const createAccountEvent = {
        ...mockEvent,
        eventInfo: {
            ...mockEvent.eventInfo,
            customContext: { person: mockAccountContext },
        },
    };

    await createAccountHandlerAEP(createAccountEvent);

    expect(sendEvent).toHaveBeenCalledTimes(1);
    expect(sendEvent).toHaveBeenCalledWith({
        person: mockAccountContext,
        userAccount: { createProfile: 1 },
        eventType: "userAccount.createProfile",
        _id: undefined,
    });
});

test("includes optional params if provided", async () => {
    const uuid = "82969a0a-e264-40ca-ad53-74cb5dcc73ca";

    const createAccountEvent = {
        ...mockEvent,
        eventInfo: {
            ...mockEvent.eventInfo,
            accountContext: {
                ...mockAccount,
                accountId: "44",
                accountType: "some-account-type",
            },
            debugContext: { eventId: uuid },
        },
    };

    await createAccountHandlerAEP(createAccountEvent);

    expect(sendEvent).toHaveBeenCalledTimes(1);
    expect(sendEvent).toHaveBeenCalledWith({
        person: {
            accountID: "44",
            accountType: "some-account-type",
        },
        personalEmail: { address: "beacon3@commerce.com" },
        userAccount: { createProfile: 1 },
        eventType: "userAccount.createProfile",
        _id: uuid,
    });
});

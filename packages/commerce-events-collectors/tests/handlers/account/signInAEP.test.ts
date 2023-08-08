import { Account } from "@adobe/commerce-events-sdk";
import { sendEvent } from "../../../src/alloy";
import { signInHandlerAEP } from "../../../src/handlers";
import { mockEvent, mockAccount } from "../../utils/mocks";

jest.mock("../../../src/alloy");

mockEvent.eventInfo.accountContext = mockAccount;

test("sends correctly structured event to AEP by default", async () => {
    await signInHandlerAEP(mockEvent);

    expect(sendEvent).toHaveBeenCalledTimes(1);
    expect(sendEvent).toHaveBeenCalledWith({
        person: {
            accountID: undefined,
            accountType: undefined,
        },
        personalEmail: { address: "beacon3@commerce.com" },
        userAccount: { login: 1 },
        eventType: "userAccount.login",
        _id: undefined,
    });
});

test("uses custom context if provided", async () => {
    const mockAccountContext: Account = {
        firstName: "Myfirstname",
        lastName: "Mylastname",
        emailAddress: "some@email.address",
    };

    const signInEvent = {
        ...mockEvent,
        eventInfo: {
            ...mockEvent.eventInfo,
            customContext: { person: mockAccountContext },
        },
    };

    await signInHandlerAEP(signInEvent);

    expect(sendEvent).toHaveBeenCalledTimes(1);
    expect(sendEvent).toHaveBeenCalledWith({
        person: mockAccountContext,
        userAccount: { login: 1 },
        eventType: "userAccount.login",
        _id: undefined,
    });
});

test("includes optional params if provided", async () => {
    const uuid = "54d02b64-ba9d-4f1d-81d4-dec094c82b75";

    const signInEvent = {
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

    await signInHandlerAEP(signInEvent);

    expect(sendEvent).toHaveBeenCalledTimes(1);
    expect(sendEvent).toHaveBeenCalledWith({
        person: {
            accountID: "44",
            accountType: "some-account-type",
        },
        personalEmail: { address: "beacon3@commerce.com" },
        userAccount: { login: 1 },
        eventType: "userAccount.login",
        _id: uuid,
    });
});

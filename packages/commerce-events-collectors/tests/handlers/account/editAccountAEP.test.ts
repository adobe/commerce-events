import { Account } from "@adobe/commerce-events-sdk";
import { sendEvent } from "../../../src/alloy";
import { editAccountHandlerAEP } from "../../../src/handlers";
import { mockEvent, mockAccount } from "../../utils/mocks";

jest.mock("../../../src/alloy");

mockEvent.eventInfo.accountContext = mockAccount;

test("sends correctly structured event to AEP by default", async () => {
    await editAccountHandlerAEP(mockEvent);

    expect(sendEvent).toHaveBeenCalledTimes(1);
    expect(sendEvent).toHaveBeenCalledWith({
        person: {
            accountID: undefined,
            accountType: undefined,
            personalEmailID: "beacon3@commerce.com",
        },
        personalEmail: { address: "beacon3@commerce.com" },
        userAccount: { updateProfile: 1 },
        eventType: "userAccount.updateProfile",
        _id: undefined,
    });
});

test("uses custom context if provided", async () => {
    const mockAccountContext: Account = {
        firstName: "Myfirstname",
        lastName: "Mylastname",
        emailAddress: "some@email.address",
    };

    const updateAccountEvent = {
        ...mockEvent,
        eventInfo: {
            ...mockEvent.eventInfo,
            customContext: { person: mockAccountContext },
        },
    };

    await editAccountHandlerAEP(updateAccountEvent);

    expect(sendEvent).toHaveBeenCalledTimes(1);
    expect(sendEvent).toHaveBeenCalledWith({
        person: mockAccountContext,
        userAccount: { updateProfile: 1 },
        eventType: "userAccount.updateProfile",
        _id: undefined,
    });
});

test("includes optional params if provided", async () => {
    const uuid = "1b901a49-278b-4c96-af6b-5c382559376c";

    const updateAccountEvent = {
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

    await editAccountHandlerAEP(updateAccountEvent);

    expect(sendEvent).toHaveBeenCalledTimes(1);
    expect(sendEvent).toHaveBeenCalledWith({
        person: {
            accountID: "44",
            accountType: "some-account-type",
            personalEmailID: "beacon3@commerce.com",
        },
        personalEmail: { address: "beacon3@commerce.com" },
        userAccount: { updateProfile: 1 },
        eventType: "userAccount.updateProfile",
        _id: uuid,
    });
});

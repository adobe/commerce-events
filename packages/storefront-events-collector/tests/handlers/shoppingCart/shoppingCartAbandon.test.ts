import { trackStructEvent } from "@snowplow/browser-tracker";

// eslint-disable-next-line @typescript-eslint/no-empty-function
jest.mock("@adobe/alloy", () => ({ createInstance: jest.fn(() => {}) }));

import { abandonCartHandler } from "../../../src/handlers";
import schemas from "../../../src/schemas";
import { mockEvent, mockShoppingCartCtx } from "../../utils/mocks";

test("sends snowplow event", () => {
    abandonCartHandler(mockEvent);

    expect(trackStructEvent).toHaveBeenCalledTimes(1);

    expect(trackStructEvent).toHaveBeenCalledWith({
        category: "shopping-cart",
        action: "abandon",
        property: "pdp",
        context: [
            {
                data: mockShoppingCartCtx,
                schema: schemas.SHOPPING_CART_SCHEMA_URL,
            },
        ],
    });
});

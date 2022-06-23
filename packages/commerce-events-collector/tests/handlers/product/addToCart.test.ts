import { trackStructEvent } from "@snowplow/browser-tracker";

// eslint-disable-next-line @typescript-eslint/no-empty-function
jest.mock("@adobe/alloy", () => ({ createInstance: jest.fn(() => {}) }));

import { addToCartHandler } from "../../../src/handlers";
import schemas from "../../../src/schemas";
import {
    mockEvent,
    mockProductCtx,
    mockShoppingCartCtx,
} from "../../utils/mocks";

test("sends snowplow event", () => {
    addToCartHandler(mockEvent);

    expect(trackStructEvent).toHaveBeenCalledTimes(1);

    expect(trackStructEvent).toHaveBeenCalledWith({
        category: "product",
        action: "add-to-cart",
        property: "pdp",
        context: [
            {
                data: mockProductCtx,
                schema: schemas.PRODUCT_SCHEMA_URL,
            },
            {
                data: mockShoppingCartCtx,
                schema: schemas.SHOPPING_CART_SCHEMA_URL,
            },
        ],
    });
});

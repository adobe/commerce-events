import { trackStructEvent } from "@snowplow/browser-tracker";

// eslint-disable-next-line @typescript-eslint/no-empty-function
jest.mock("@adobe/alloy", () => ({ createInstance: jest.fn(() => {}) }));

import { productViewHandler } from "../../../src/handlers";
import schemas from "../../../src/schemas";
import { mockEvent, mockProductCtx, mockShoppingCartCtx } from "../../utils/mocks";

test("sends snowplow event", () => {
    // we don't send product id to snowplow anymore, but don't want to break mocks for any aep tests
    const { productId, ...mockProductCtxNoId } = mockProductCtx;

    productViewHandler(mockEvent);

    expect(trackStructEvent).toHaveBeenCalledTimes(1);

    expect(trackStructEvent).toHaveBeenCalledWith({
        category: "product",
        action: "view",
        property: "pdp",
        context: [
            {
                data: mockProductCtxNoId,
                schema: schemas.PRODUCT_SCHEMA_URL,
            },
            {
                data: mockShoppingCartCtx,
                schema: schemas.SHOPPING_CART_SCHEMA_URL,
            },
        ],
    });
});

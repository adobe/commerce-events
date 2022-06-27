import { trackStructEvent } from "@snowplow/browser-tracker";

// eslint-disable-next-line @typescript-eslint/no-empty-function
jest.mock("@adobe/alloy", () => ({ createInstance: jest.fn(() => {}) }));

import { searchProductClickHandler } from "../../../src/handlers";
import schemas from "../../../src/schemas";
import {
    mockEvent,
    mockSearchResultProductCtx,
    mockSearchResultsCtx,
} from "../../utils/mocks";

test("sends snowplow event", () => {
    searchProductClickHandler(mockEvent);

    expect(trackStructEvent).toHaveBeenCalledTimes(1);

    expect(trackStructEvent).toHaveBeenCalledWith({
        category: "search",
        action: "product-click",
        label: "abc123",
        property: "pdp",
        context: [
            {
                data: mockSearchResultsCtx,
                schema: schemas.SEARCH_RESULTS_SCHEMA_URL,
            },
            {
                data: mockSearchResultProductCtx,
                schema: schemas.SEARCH_RESULT_PRODUCT_SCHEMA_URL,
            },
        ],
    });
});

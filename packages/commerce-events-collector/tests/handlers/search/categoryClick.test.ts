import { trackStructEvent } from "@snowplow/browser-tracker";

// eslint-disable-next-line @typescript-eslint/no-empty-function
jest.mock("@adobe/alloy", () => ({ createInstance: jest.fn(() => {}) }));

import { searchCategoryClickHandler } from "../../../src/handlers";
import schemas from "../../../src/schemas";
import {
    mockEvent,
    mockSearchResultCategoryCtx,
    mockSearchResultsCtx,
} from "../../utils/mocks";

test("sends snowplow event", () => {
    searchCategoryClickHandler(mockEvent);

    expect(trackStructEvent).toHaveBeenCalledTimes(1);

    expect(trackStructEvent).toHaveBeenCalledWith({
        category: "search",
        action: "category-click",
        label: "https://magento.com/category/pants",
        property: "pdp",
        context: [
            {
                data: mockSearchResultsCtx,
                schema: schemas.SEARCH_RESULTS_SCHEMA_URL,
            },
            {
                data: mockSearchResultCategoryCtx,
                schema: schemas.SEARCH_RESULT_CATEGORY_SCHEMA_URL,
            },
        ],
    });
});

import { trackStructEvent } from "@snowplow/browser-tracker";

// eslint-disable-next-line @typescript-eslint/no-empty-function
jest.mock("@adobe/alloy", () => ({ createInstance: jest.fn(() => {}) }));

import { searchSuggestionClickHandler } from "../../../src/handlers";
import schemas from "../../../src/schemas";
import {
    mockEvent,
    mockSearchResultsCtx,
    mockSearchResultSuggestionCtx,
} from "../../utils/mocks";

test("sends snowplow event", () => {
    searchSuggestionClickHandler(mockEvent);

    expect(trackStructEvent).toHaveBeenCalledTimes(1);

    expect(trackStructEvent).toHaveBeenCalledWith({
        category: "search",
        action: "suggestion-click",
        label: "red pants",
        property: "pdp",
        context: [
            {
                data: mockSearchResultsCtx,
                schema: schemas.SEARCH_RESULTS_SCHEMA_URL,
            },
            {
                data: mockSearchResultSuggestionCtx,
                schema: schemas.SEARCH_RESULT_SUGGESTION_SCHEMA_URL,
            },
        ],
    });
});

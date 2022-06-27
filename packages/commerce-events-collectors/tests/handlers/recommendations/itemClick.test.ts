import { trackStructEvent } from "@snowplow/browser-tracker";

// eslint-disable-next-line @typescript-eslint/no-empty-function
jest.mock("@adobe/alloy", () => ({ createInstance: jest.fn(() => {}) }));

import { recsItemClickHandler } from "../../../src/handlers";
import schemas from "../../../src/schemas";
import {
    mockEvent,
    mockRecommendationUnitCtx,
    mockRecommendedItemsCtx,
} from "../../utils/mocks";

test("sends snowplow event", () => {
    recsItemClickHandler(mockEvent);

    expect(trackStructEvent).toHaveBeenCalledTimes(1);

    expect(trackStructEvent).toHaveBeenCalledWith({
        category: "recommendation-unit",
        action: "rec-click",
        property: "pdp",
        value: 1,
        context: [
            {
                data: mockRecommendationUnitCtx,
                schema: schemas.RECOMMENDATION_UNIT_SCHEMA_URL,
            },
            {
                data: mockRecommendedItemsCtx[0],
                schema: schemas.RECOMMENDED_ITEM_SCHEMA_URL,
            },
        ],
    });
});

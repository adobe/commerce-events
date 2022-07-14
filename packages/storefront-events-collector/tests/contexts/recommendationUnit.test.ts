import { createRecommendationUnitCtx } from "../../src/contexts";
import schemas from "../../src/schemas";
import { mockRecommendationUnitCtx } from "../utils/mocks/context";

test("creates context", () => {
    const ctx = createRecommendationUnitCtx("abc123");

    expect(ctx).toEqual({
        data: mockRecommendationUnitCtx,
        schema: schemas.RECOMMENDATION_UNIT_SCHEMA_URL,
    });
});

import { getProduct, getUnit } from "../src/utils/recommendations";
import { mockRecommendations } from "./utils/mocks";

test("gets unit", () => {
    const unit = getUnit("abc123", mockRecommendations);
    expect(unit).toEqual(mockRecommendations.units[0]);
});

test("gets product", () => {
    const product = getProduct("abc123", 111111, mockRecommendations);
    expect(product).toEqual(mockRecommendations.units[0].products[0]);
});

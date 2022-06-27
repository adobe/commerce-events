import { trackPageView } from "@snowplow/browser-tracker";

// eslint-disable-next-line @typescript-eslint/no-empty-function
jest.mock("@adobe/alloy", () => ({ createInstance: jest.fn(() => {}) }));

import { pageViewHandler } from "../../../src/handlers";

test("sends snowplow event", () => {
    pageViewHandler();
    expect(trackPageView).toHaveBeenCalledTimes(1);
});

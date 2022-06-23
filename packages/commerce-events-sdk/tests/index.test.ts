import mdl, { MagentoStorefrontEvents } from "../src/index";
import { waitFor } from "@testing-library/dom";

beforeAll(() => {
    // Forces magento data layer code to be bundled so that
    // 'data layer should exist' test passes
    expect(mdl).toBeInstanceOf(MagentoStorefrontEvents);
});

beforeEach(async () => {
    jest.resetModules();
    window.adobeDataLayer = [];
    require("@adobe/adobe-client-data-layer");
});

test("data layer should exist", () => {
    expect(window.adobeDataLayer).toBeDefined();
});

test("broadcasts message", async () => {
    const handlerMock = jest.fn();
    window.addEventListener("message", handlerMock, false);

    await waitFor(() => {
        expect(handlerMock).toHaveBeenCalledTimes(1);

        expect(handlerMock).toHaveBeenCalledWith(
            expect.objectContaining({
                data: "magento-storefront-events-sdk",
            }),
        );
    });
});

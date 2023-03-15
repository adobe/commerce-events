import mdl, { MagentoStorefrontEvents } from "../src/index";
import {
    generateAccountContext,
    generateAEPContext,
    generateCategoryContext,
    generateCustomContext,
    generateCustomUrlContext,
    generateDebugContext,
    generateEventForwardingContext,
    generateMagentoExtensionContext,
    generateOrderContext,
    generateOrderViewContext,
    generatePageContext,
    generateProductContext,
    generateRecommendationsContext,
    generateReferrerUrlContext,
    generateRequisitionListContext,
    generateRequisitionListItemsContext,
    generateSearchInputContext,
    generateSearchResultsContext,
    generateShopperContext,
    generateShoppingCartContext,
    generateStorefrontInstanceContext,
} from "./mocks";

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

describe("contexts", () => {
    test("account context", () => {
        const context = generateAccountContext();
        expect(mdl.context.getAccount()).toBeUndefined();
        mdl.context.setAccount(context);
        expect(mdl.context.getAccount()).toEqual(context);
    });

    test("aep context", () => {
        const context = generateAEPContext();
        expect(mdl.context.getAEP()).toBeUndefined();
        mdl.context.setAEP(context);
        expect(mdl.context.getAEP()).toEqual(context);
    });

    test("category context", () => {
        const context = generateCategoryContext();
        expect(mdl.context.getCategory()).toBeUndefined();
        mdl.context.setCategory(context);
        expect(mdl.context.getCategory()).toEqual(context);
    });

    test("custom url context", () => {
        const context = generateCustomUrlContext();
        expect(mdl.context.getCustomUrl()).toBeUndefined();
        mdl.context.setCustomUrl(context);
        expect(mdl.context.getCustomUrl()).toEqual(context);
    });

    test("debug context", () => {
        const context = generateDebugContext();
        expect(mdl.context.getDebug()).toBeUndefined();
        mdl.context.setDebug(context);
        expect(mdl.context.getDebug()).toEqual(context);
    });

    test("event forwarding context", () => {
        const context = generateEventForwardingContext();
        expect(mdl.context.getEventForwarding()).toBeUndefined();
        mdl.context.setEventForwarding(context);
        expect(mdl.context.getEventForwarding()).toEqual(context);
    });

    test("magento extension context", () => {
        const context = generateMagentoExtensionContext();
        expect(mdl.context.getMagentoExtension()).toBeUndefined();
        mdl.context.setMagentoExtension(context);
        expect(mdl.context.getMagentoExtension()).toEqual(context);
    });

    test("order context", () => {
        const context = generateOrderContext();
        expect(mdl.context.getOrder()).toBeUndefined();
        mdl.context.setOrder(context);
        expect(mdl.context.getOrder()).toEqual(context);
    });

    test("order page context", () => {
        const context = generateOrderViewContext();
        expect(mdl.context.getOrderPage()).toBeUndefined();
        mdl.context.setOrderPage(context);
        expect(mdl.context.getOrderPage()).toEqual(context);
    });

    test("page context", () => {
        const context = generatePageContext();
        expect(mdl.context.getPage()).toBeUndefined();
        mdl.context.setPage(context);
        expect(mdl.context.getPage()).toEqual(context);
    });

    test("product context", () => {
        const context = generateProductContext();
        expect(mdl.context.getProduct()).toBeUndefined();
        mdl.context.setProduct(context);
        expect(mdl.context.getProduct()).toEqual(context);
    });

    test("recommendations context", () => {
        const context = generateRecommendationsContext();
        expect(mdl.context.getRecommendations()).toBeUndefined();
        mdl.context.setRecommendations(context);
        expect(mdl.context.getRecommendations()).toEqual(context);
    });

    test("referrer url context", () => {
        const context = generateReferrerUrlContext();
        expect(mdl.context.getReferrerUrl()).toBeUndefined();
        mdl.context.setReferrerUrl(context);
        expect(mdl.context.getReferrerUrl()).toEqual(context);
    });

    test("requisition list context", () => {
        const context = generateRequisitionListContext();
        expect(mdl.context.getRequisitionList()).toBeUndefined();
        mdl.context.setRequisitionList(context);
        expect(mdl.context.getRequisitionList()).toEqual(context);
    });

    test("requisition list items context", () => {
        const context = generateRequisitionListItemsContext();
        expect(mdl.context.getRequisitionListItems()).toBeUndefined();
        mdl.context.setRequisitionListItems(context);
        expect(mdl.context.getRequisitionListItems()).toEqual(context);
    });

    test("search input context", () => {
        const context = generateSearchInputContext();
        expect(mdl.context.getSearchInput()).toBeUndefined();
        mdl.context.setSearchInput(context);
        expect(mdl.context.getSearchInput()).toEqual(context);
    });

    test("search results context", () => {
        const context = generateSearchResultsContext();
        expect(mdl.context.getSearchResults()).toBeUndefined();
        mdl.context.setSearchResults(context);
        expect(mdl.context.getSearchResults()).toEqual(context);
    });

    test("shopper context", () => {
        const context = generateShopperContext();
        expect(mdl.context.getShopper()).toBeUndefined();
        mdl.context.setShopper(context);
        expect(mdl.context.getShopper()).toEqual(context);
    });

    test("shopping cart context", () => {
        const context = generateShoppingCartContext();
        expect(mdl.context.getShoppingCart()).toBeUndefined();
        mdl.context.setShoppingCart(context);
        expect(mdl.context.getShoppingCart()).toEqual(context);
    });

    test("storefront instance context", () => {
        const context = generateStorefrontInstanceContext();
        expect(mdl.context.getStorefrontInstance()).toBeUndefined();
        mdl.context.setStorefrontInstance(context);
        expect(mdl.context.getStorefrontInstance()).toEqual(context);
    });

    test("custom context", () => {
        const context = generateCustomContext();
        expect(mdl.context.getContext("custom")).toBeUndefined();
        mdl.context.setContext("custom", context);
        expect(mdl.context.getContext("custom")).toEqual(context);
    });
});

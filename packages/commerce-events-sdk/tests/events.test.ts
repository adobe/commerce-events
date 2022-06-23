import events from "../src/events";
import mdl, { MagentoStorefrontEvents } from "../src/index";
import { Event } from "../src/types/events";
import { Shopper } from "../src/types/schemas/shopper";

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

describe("events", () => {
    test("add to cart", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.ADD_TO_CART,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.addToCart(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.addToCart();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.addToCart(eventHandler);
        mdl.publish.addToCart();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("abandon cart", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.ABANDON_CART,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.abandonCart(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.abandonCart();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.abandonCart(eventHandler);
        mdl.publish.abandonCart();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("create account", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.CREATE_ACCOUNT,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.createAccount(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.createAccount();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.createAccount(eventHandler);
        mdl.publish.createAccount();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("custom", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.CUSTOM,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.custom(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.custom();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.custom(eventHandler);
        mdl.publish.custom();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("custom url", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.CUSTOM_URL,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.customUrl(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.customUrl();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.customUrl(eventHandler);
        mdl.publish.customUrl();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("edit account", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.EDIT_ACCOUNT,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.editAccount(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.editAccount();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.editAccount(eventHandler);
        mdl.publish.editAccount();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("initiate checkout", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.INITIATE_CHECKOUT,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.initiateCheckout(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.initiateCheckout();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.initiateCheckout(eventHandler);
        mdl.publish.initiateCheckout();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("page activity summary", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.PAGE_ACTIVITY_SUMMARY,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.pageActivitySummary(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.pageActivitySummary();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.pageActivitySummary(eventHandler);
        mdl.publish.pageActivitySummary();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("page view", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.PAGE_VIEW,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.pageView(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.pageView();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.pageView(eventHandler);
        mdl.publish.pageView();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("place order", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.PLACE_ORDER,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.placeOrder(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.placeOrder();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.placeOrder(eventHandler);
        mdl.publish.placeOrder();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("product page view", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.PRODUCT_PAGE_VIEW,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.productPageView(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.productPageView();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.productPageView(eventHandler);
        mdl.publish.productPageView();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("rec item add to cart click", () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.RECS_ITEM_ADD_TO_CART_CLICK,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.recsItemAddToCartClick(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.recsItemAddToCartClick("abc123", 123456);
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.recsItemAddToCartClick(eventHandler);
        mdl.publish.recsItemAddToCartClick("abc123", 123456);
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("rec item click", () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.RECS_ITEM_CLICK,
                eventInfo: expect.any(Object),
            });
        });
        mdl.subscribe.recsItemClick(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.recsItemClick("abc123", 123456);
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.recsItemClick(eventHandler);
        mdl.publish.recsItemClick("abc123", 123456);
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("rec request sent", () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.RECS_REQUEST_SENT,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.recsRequestSent(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.recsRequestSent();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.recsRequestSent(eventHandler);
        mdl.publish.recsRequestSent();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("rec response sent", () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.RECS_RESPONSE_RECEIVED,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.recsResponseReceived(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.recsResponseReceived();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.recsResponseReceived(eventHandler);
        mdl.publish.recsResponseReceived();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("rec unit render", () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.RECS_UNIT_RENDER,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.recsUnitRender(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.recsUnitRender("abc123");
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.recsUnitRender(eventHandler);
        mdl.publish.recsUnitRender("abc123");
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("rec unit view", () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.RECS_UNIT_VIEW,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.recsUnitView(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.recsUnitView("abc123");
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.recsUnitView(eventHandler);
        mdl.publish.recsUnitView("abc123");
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("referrer url", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.REFERRER_URL,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.referrerUrl(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.referrerUrl();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.referrerUrl(eventHandler);
        mdl.publish.referrerUrl();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("remove from cart", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.REMOVE_FROM_CART,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.removeFromCart(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.removeFromCart();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.removeFromCart(eventHandler);
        mdl.publish.removeFromCart();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("search category click", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.SEARCH_CATEGORY_CLICK,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.searchCategoryClick(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.searchCategoryClick("search-bar", "tops");
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.searchCategoryClick(eventHandler);
        mdl.publish.searchCategoryClick("search-bar", "tops");
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("search product click", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.SEARCH_PRODUCT_CLICK,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.searchProductClick(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.searchProductClick("search-bar", "abc123");
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.searchProductClick(eventHandler);
        mdl.publish.searchProductClick("search-bar", "abc123");
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("search request sent", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.SEARCH_REQUEST_SENT,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.searchRequestSent(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.searchRequestSent("search-bar");
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.searchRequestSent(eventHandler);
        mdl.publish.searchRequestSent("search-bar");
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("search response received", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.SEARCH_RESPONSE_RECEIVED,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.searchResponseReceived(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.searchResponseReceived("search-bar");
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.searchResponseReceived(eventHandler);
        mdl.publish.searchResponseReceived("search-bar");
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("search results view", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.SEARCH_RESULTS_VIEW,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.searchResultsView(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.searchResultsView("search-bar");
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.searchResultsView(eventHandler);
        mdl.publish.searchResultsView("search-bar");
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("search suggestion click", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.SEARCH_SUGGESTION_CLICK,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.searchSuggestionClick(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.searchSuggestionClick("search-bar", "pants");
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.searchSuggestionClick(eventHandler);
        mdl.publish.searchSuggestionClick("search-bar", "pants");
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("shopping cart view", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.SHOPPING_CART_VIEW,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.shoppingCartView(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.shoppingCartView();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.shoppingCartView(eventHandler);
        mdl.publish.shoppingCartView();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("sign in", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.SIGN_IN,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.signIn(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.signIn();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.signIn(eventHandler);
        mdl.publish.signIn();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("sign out", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.SIGN_OUT,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.signOut(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.signOut();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.signOut(eventHandler);
        mdl.publish.signOut();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("update cart", async () => {
        const eventHandler = jest.fn(eventObj => {
            expect(eventObj).toEqual({
                event: events.UPDATE_CART,
                eventInfo: expect.any(Object),
            });
        });

        mdl.subscribe.updateCart(eventHandler);
        expect(eventHandler).not.toHaveBeenCalled();
        mdl.publish.updateCart();
        expect(eventHandler).toHaveBeenCalledTimes(1);
        mdl.unsubscribe.updateCart(eventHandler);
        mdl.publish.updateCart();
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test("getting state before data layer initializes", () => {
        window.adobeDataLayer = [];
        expect(mdl.context.getCustomUrl()).toEqual({});
        expect(mdl.context.getReferrerUrl()).toEqual({});
    });

    test("deferred handlers receive the same context object as synchronous handlers", async () => {
        const firstContext = { shopperId: "guest" } as Shopper;
        const secondContext = { shopperId: "logged-in" } as Shopper;

        const handler = (event: Event) => {
            expect(event.eventInfo.shopperContext).toEqual(firstContext);
            expect(mdl.context.getShopper()).toEqual(firstContext);
        };
        const deferredHandler = (event: Event) => {
            // values don't match because the event context was created from
            // the context when the event was fired thus ensuring deferred
            // handlers receive "timely" data
            expect(event.eventInfo.shopperContext).toEqual(firstContext);
            expect(mdl.context.getShopper()).toEqual(secondContext);
        };
        mdl.context.setShopper(firstContext);
        mdl.subscribe.signIn(handler);
        mdl.publish.signIn();
        await new Promise<void>(res => {
            setTimeout(() => res());
        });
        mdl.context.setShopper(secondContext);
        await new Promise<void>(res => {
            setTimeout(() => res());
        });
        mdl.subscribe.signIn(deferredHandler);
    });

    test("event publisher passes custom context through to subscribers", () => {
        const customContext = { foo: "bar" };

        const handler = (event: Event) => {
            expect(event.eventInfo).toEqual({ customContext });
        };

        mdl.subscribe.addToCart(handler);
        mdl.publish.addToCart(customContext);
    });

    test("event context data is not persisted in data layer", () => {
        mdl.context.setCustomUrl({ customUrl: "test.com" });
        mdl.publish.pageView();

        expect(window.adobeDataLayer.getState()).not.toHaveProperty(
            "eventInfo",
        );
    });
});

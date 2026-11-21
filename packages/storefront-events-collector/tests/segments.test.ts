import { clearAdobeCommerceAEPSegmentCookies, setAdobeCommerceAEPSegmentCookies } from "../src/segments";

const COOKIE_NAME = "aep-segments-membership";

const expire = (name: string) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
};

describe("segment cookies", () => {
    afterEach(() => {
        expire(COOKIE_NAME);
        expire("mg_dnt");
        window.history.pushState({}, "", "/");
    });

    test("clears the segment cookie on a nested page", () => {
        window.history.pushState({}, "", "/women/tops/jacket.html");
        setAdobeCommerceAEPSegmentCookies("segment-a,segment-b");
        expect(document.cookie).toContain(`${COOKIE_NAME}=segment-a,segment-b`);

        clearAdobeCommerceAEPSegmentCookies();
        expect(document.cookie).not.toContain(COOKIE_NAME);
    });

    test("clears the segment cookie on a nested page when mg_dnt is set", () => {
        window.history.pushState({}, "", "/checkout/cart");
        setAdobeCommerceAEPSegmentCookies("segment-a");
        document.cookie = "mg_dnt=1;path=/";

        setAdobeCommerceAEPSegmentCookies("segment-b");
        expect(document.cookie).not.toContain(COOKIE_NAME);
    });
});

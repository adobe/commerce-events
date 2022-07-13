/** View(s) of a webpage has occurred. */
export type PageViews = {
    value: number;
};

/** Details about the web page where the web interaction occurred. */
export type WebPageDetails = {
    pageViews: PageViews;
    name?: string;
    siteSection?: string;
};

/** Link clicks, web page details, referrer information, and browser details. */
export type Web = {
    webPageDetails: WebPageDetails;
};

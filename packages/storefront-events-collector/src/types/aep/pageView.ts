/** View(s) of a webpage has occurred. */
export type PageViews = {
    value: number;
};

/** Details about the web page where the web interaction occurred. */
export type WebPageDetails = {
    pageViews?: PageViews;
    name?: string;
    URL?: string;
    siteSection?: string;
};

export type Referrer = {
    URL?: string;
};

/** Link clicks, web page details, referrer information, and browser details. */
export type Web = {
    webPageDetails?: WebPageDetails;
    webReferrer?: Referrer;
};

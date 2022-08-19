import { Event } from "@adobe/commerce-events-sdk";
import { trackStructEvent } from "@snowplow/browser-tracker";

const handler = (event: Event): void => {
    const { pageContext } = event.eventInfo;

    trackStructEvent({
        category: "recommendation-unit",
        action: "api-request-sent",
        property: pageContext?.pageType,
    });
};

export default handler;

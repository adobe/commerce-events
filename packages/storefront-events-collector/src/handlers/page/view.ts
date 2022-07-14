import { trackPageView } from "@snowplow/browser-tracker";

const handler = (): void => {
    trackPageView();
};

export default handler;

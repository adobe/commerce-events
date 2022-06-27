import { Event } from "@adobe/commerce-events-sdk/dist/types/types/events";
import {
    SearchFilter,
    SearchSort,
} from "@adobe/commerce-events-sdk/dist/types/types/schemas";

import { sendEvent } from "../../alloy";
import { createSearchInputCtx } from "../../contexts";
import { BeaconSchema, Filter, Sort } from "../../types/aep";

const XDM_EVENT_TYPE = "searchRequest";

const handler = async (event: Event): Promise<void> => {
    const { searchUnitId, searchInputContext, debugContext, customContext } =
        event.eventInfo;

    let payload: BeaconSchema;
    if (customContext) {
        // override payload on custom context
        payload = customContext as BeaconSchema;
    } else {
        const searchInputCtx = createSearchInputCtx(
            searchUnitId as string,
            searchInputContext,
        );

        const sortFromCtx: SearchSort[] =
            (searchInputCtx?.data.sort as SearchSort[]) ?? [];

        const sort: Sort[] = sortFromCtx.map((searchSort: SearchSort) => {
            return {
                attribute: searchSort.attribute,
                order: searchSort.direction,
            } as Sort;
        });

        const filtersFromCtx: SearchFilter[] =
            (searchInputCtx?.data.filter as SearchFilter[]) ?? [];

        const filters: Filter[] = filtersFromCtx.map(
            (searchFilter: SearchFilter) => {
                let value: string[] = [];
                let isRange = false;
                if (searchFilter.eq) {
                    value.push(searchFilter.eq);
                } else if (searchFilter.in) {
                    value = searchFilter.in;
                } else if (searchFilter.range) {
                    // we represent range in the event as "from value[0] to value[1]"
                    isRange = true;
                    value.push(String(searchFilter.range.from));
                    value.push(String(searchFilter.range.to));
                }
                return {
                    attribute: searchFilter.attribute,
                    value,
                    isRange,
                } as Filter;
            },
        );

        payload = {
            siteSearch: {
                query: searchInputContext.units[0].phrase,
                sort,
                refinements: filters,
            },
        };
    }

    payload.searchRequest = {
        value: 1,
    };

    payload._id = debugContext?.eventId;
    payload.eventType = XDM_EVENT_TYPE;

    sendEvent(payload);
};

export default handler;

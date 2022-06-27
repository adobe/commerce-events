import { Product } from "@adobe/commerce-events-sdk/dist/types/types/schemas";

import { ProductPricing } from "../types/contexts";

const createPricing = (ctx: Product): ProductPricing | undefined => {
    if (!ctx.pricing) {
        return undefined;
    }

    const pricing = {
        regularPrice: ctx.pricing.regularPrice,
        minimalPrice: ctx.pricing.minimalPrice,
        maximalPrice: ctx.pricing.maximalPrice,
        specialPrice: ctx.pricing.specialPrice,
        tierPricing: ctx.pricing.tierPricing?.map(price => ({
            customerGroupId: price.customerGroupId ?? null,
            qty: price.qty,
            value: price.value,
        })),
        currencyCode: ctx.pricing.currencyCode ?? null,
    };

    return pricing;
};

export { createPricing };

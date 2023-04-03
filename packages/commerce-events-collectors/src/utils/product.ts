import { Product, ShoppingCartItem } from "@adobe/commerce-events-sdk";
import { createProductCtx } from "../contexts";
import { ProductContext, ProductPricing } from "../types/contexts";

const createPricing = (ctx: Product): ProductPricing | undefined => {
    if (!ctx.pricing) {
        return undefined;
    }

    const pricing = {
        regularPrice: ctx.pricing.regularPrice,
        minimalPrice: ctx.pricing.minimalPrice,
        maximalPrice: ctx.pricing.maximalPrice,
        specialPrice: ctx.pricing.specialPrice,
        tierPricing: ctx.pricing.tierPricing?.map((price) => ({
            customerGroupId: price.customerGroupId ?? null,
            qty: price.qty,
            value: price.value,
        })),
        currencyCode: ctx.pricing.currencyCode ?? null,
    };

    return pricing;
};

const createProductFromCartItem = (ctx: ShoppingCartItem): ProductContext => {
    const pricing: ProductPricing = {
        regularPrice: ctx.prices.price.value,
        currencyCode: ctx.prices.price.currency || null,
    };
    let productId: any = ctx.product.productId;

    const newCtx: Product = {
        canonicalUrl: null,
        categories: ctx.product.categories || [],
        countryOfManufacture: null,
        createdAt: null,
        mainImageUrl: ctx.product.mainImageUrl,
        manufacturer: null,
        name: ctx.product.name,
        newFromDate: null,
        newToDate: null,
        productId: parseInt(productId),
        sku: ctx.product.sku,
        pricing: pricing,
        productType: null,
        specialFromDate: null,
        specialToDate: null,
        topLevelSku: ctx.product.topLevelSku || null,
        updatedAt: null,
    };
    return createProductCtx(newCtx);
};

export { createPricing, createProductFromCartItem };

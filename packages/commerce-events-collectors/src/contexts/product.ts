import { Product } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import schemas from "../schemas";
import { ProductContext } from "../types/contexts";
import { createPricing } from "../utils/product";

const createContext = (product?: Product): ProductContext => {
    const mse = window.magentoStorefrontEvents;
    const productCtx = product ?? mse.context.getProduct();

    if (!productCtx) {
        return {
            schema: schemas.PRODUCT_SCHEMA_URL,
            data: {},
        };
    }

    const context: ProductContext = {
        schema: schemas.PRODUCT_SCHEMA_URL,
        data: {
            productId: productCtx.productId,
            name: productCtx.name,
            sku: productCtx.sku,
            topLevelSku: productCtx.topLevelSku,
            specialToDate: productCtx.specialToDate,
            specialFromDate: productCtx.specialFromDate,
            newToDate: productCtx.newToDate,
            newFromDate: productCtx.newFromDate,
            createdAt: productCtx.createdAt,
            updatedAt: productCtx.updatedAt,
            manufacturer: productCtx.manufacturer,
            countryOfManufacture: productCtx.countryOfManufacture,
            categories: productCtx.categories,
            productType: productCtx.productType,
            pricing: createPricing(productCtx),
            canonicalUrl: productCtx.canonicalUrl,
            mainImageUrl: productCtx.mainImageUrl,
        },
    };

    return context;
};

export default createContext;

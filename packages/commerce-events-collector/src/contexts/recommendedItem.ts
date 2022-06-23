import { Recommendations } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import schemas from "../schemas";
import { RecommendedItemContext } from "../types/contexts";
import { getProduct, getUnit } from "../utils/recommendations";

const createContext = (
    unitId: string,
    productId: number,
    recommendations?: Recommendations,
): RecommendedItemContext | null => {
    const mse = window.magentoStorefrontEvents;
    const recommendationsCtx =
        recommendations ?? mse.context.getRecommendations();

    if (!recommendationsCtx) {
        return {
            schema: schemas.RECOMMENDED_ITEM_SCHEMA_URL,
            data: {},
        };
    }

    const unit = getUnit(unitId, recommendationsCtx);

    if (!unit) {
        return null;
    }

    const product = getProduct(unitId, productId, recommendationsCtx);

    if (!product) {
        return null;
    }

    const context: RecommendedItemContext = {
        schema: schemas.RECOMMENDED_ITEM_SCHEMA_URL,
        data: {
            unitId,
            serviceRank: product.rank,
            displayRank: product.rank,
            name: product.name,
            sku: product.sku,
            url: product.url,
            imageUrl: product.image?.url ?? null,
            ...(product.prices && {
                prices: {
                    maximum: {
                        final: product.prices.maximum.final,
                        regular: product.prices.maximum.regular,
                        finalAdjustments:
                            product.prices.maximum.finalAdjustments.map(
                                finalAdjustment => ({
                                    code: finalAdjustment.code,
                                    amount: finalAdjustment.amount,
                                }),
                            ),
                        regularAdjustments:
                            product.prices.maximum.regularAdjustments.map(
                                finalAdjustment => ({
                                    code: finalAdjustment.code,
                                    amount: finalAdjustment.amount,
                                }),
                            ),
                    },
                    minimum: {
                        final: product.prices.minimum.final,
                        regular: product.prices.minimum.regular,
                        finalAdjustments:
                            product.prices.minimum.finalAdjustments.map(
                                finalAdjustment => ({
                                    code: finalAdjustment.code,
                                    amount: finalAdjustment.amount,
                                }),
                            ),
                        regularAdjustments:
                            product.prices.minimum.regularAdjustments.map(
                                finalAdjustment => ({
                                    code: finalAdjustment.code,
                                    amount: finalAdjustment.amount,
                                }),
                            ),
                    },
                },
            }),
            currencyCode: product.currency,
        },
    };

    return context;
};

export default createContext;

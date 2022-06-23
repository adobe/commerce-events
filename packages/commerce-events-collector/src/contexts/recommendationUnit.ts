import { Recommendations } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import schemas from "../schemas";
import { RecommendationUnitContext } from "../types/contexts";
import { getUnit } from "../utils/recommendations";

const createContext = (
    unitId: string,
    recommendations?: Recommendations,
): RecommendationUnitContext | null => {
    const mse = window.magentoStorefrontEvents;
    const recommendationsCtx =
        recommendations ?? mse.context.getRecommendations();

    if (!recommendationsCtx) {
        return {
            schema: schemas.RECOMMENDATION_UNIT_SCHEMA_URL,
            data: {},
        };
    }

    const unit = getUnit(unitId, recommendationsCtx);

    if (!unit) {
        return null;
    }

    const context: RecommendationUnitContext = {
        schema: schemas.RECOMMENDATION_UNIT_SCHEMA_URL,
        data: {
            name: unit.unitName,
            unitId: unit.unitId,
            itemsCount: unit.totalProducts,
            backupsCount: unit.backupProducts,
            configType: "preconfigured",
            source: "api",
            recType: unit.typeId,
            placement: unit.pagePlacement,
            yOffsetTop: unit.yOffsetTop,
            yOffsetBottom: unit.yOffsetBottom,
        },
    };

    return context;
};

export default createContext;

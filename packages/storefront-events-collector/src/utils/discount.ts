import { Product } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

/** calculates the discountAmount from a Product object */
export const getDiscountAmount = ({ pricing }: Product): number => {
    if (!pricing) {
        return 0;
    }

    const { regularPrice, specialPrice } = pricing;
    const discount = regularPrice - (specialPrice ?? regularPrice);

    return discount || 0;
};

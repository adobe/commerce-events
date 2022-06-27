import { Product } from "@adobe/commerce-events-sdk/dist/types/types/schemas";

/** calculates the discountAmount from a Product object */
export const getDiscountAmount = ({ pricing }: Product): number | undefined => {
    if (!pricing) {
        return undefined;
    }

    const { regularPrice, specialPrice } = pricing;
    const discount = regularPrice - (specialPrice ?? regularPrice);

    return discount;
};

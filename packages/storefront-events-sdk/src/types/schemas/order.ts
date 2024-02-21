export type Order = {
    appliedCouponCode: string;
    email: string;
    grandTotal: number;
    orderId: string;
    orderType?: "checkout" | "instant_purchase";
    otherTax: number;
    /** @deprecated - use payments instead */
    paymentMethodCode: string;
    /** @deprecated - use payments instead */
    paymentMethodName: string;
    payments?: Payment[];
    salesTax: number;
    shipping?: Shipping;
    subtotalExcludingTax: number;
    subtotalIncludingTax: number;
    discountAmount?: number;
};

export type Payment = {
    paymentMethodCode: string;
    paymentMethodName: string;
    total: number;
    orderId?: string;
};

export type Shipping = {
    shippingMethod?: string;
    shippingAmount?: number;
};

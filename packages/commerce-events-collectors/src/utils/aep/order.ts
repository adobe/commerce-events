import * as sdkSchemas from "@adobe/commerce-events-sdk";

import { Order, Payment } from "../../types/aep";

const createOrder = (
    orderContext: sdkSchemas.Order,
    storefrontInstanceContext: sdkSchemas.StorefrontInstance,
): Order => {
    let payments: Payment[] = [];

    if (orderContext.payments && orderContext.payments.length) {
        // try payments array first
        payments = orderContext.payments.map((payment) => {
            return {
                paymentAmount: payment.total,
                // todo ahammond these should be an enum, change in sdk, retest (DINT-324)
                paymentType: payment.paymentMethodCode,
                transactionID: orderContext.orderId.toString(),
                currencyCode: storefrontInstanceContext.storeViewCurrencyCode,
            };
        });
    } else {
        // no payments array, try deprecated top level payment fields
        payments = [
            {
                paymentAmount: orderContext.grandTotal,
                // todo ahammond these should be an enum, change in sdk, retest (DINT-324)
                paymentType: orderContext.paymentMethodCode,
                transactionID: orderContext.orderId.toString(),
                currencyCode: storefrontInstanceContext.storeViewCurrencyCode,
            },
        ];
    }

    // default orderType to 'checkout'
    const orderType = orderContext.orderType === "instant_purchase" ? "instant_purchase" : "checkout";

    return {
        purchaseID: orderContext.orderId.toString(),
        currencyCode: storefrontInstanceContext.storeViewCurrencyCode,
        payments,
        orderType,
    };
};

export { createOrder };

import * as sdkSchemas from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import { Order, Payment } from "../../types/aep";

const createOrder = (
    orderContext: sdkSchemas.Order,
    storefrontInstanceContext: sdkSchemas.StorefrontInstance,
): Order => {
    let payments: Payment[] = [];

    if (orderContext.payments && orderContext.payments.length) {
        // try payments array first
        payments = orderContext.payments.map(payment => {
            return {
                paymentAmount: payment.total,
                // todo ahammond these should be an enum, change in sdk, retest (DINT-324)
                paymentType: payment.paymentMethodCode,
                transactionID: orderContext.orderId.toString(),
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
            },
        ];
    }

    return {
        purchaseID: orderContext.orderId.toString(),
        currencyCode: storefrontInstanceContext.storeViewCurrencyCode,
        payments,
        orderType: orderContext.orderType,
    };
};

export { createOrder };

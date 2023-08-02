import * as sdkSchemas from "@adobe/magento-storefront-events-sdk/src/types/schemas";

import { Order, Payment } from "../../types/aep";

const getAepPaymentCode = (paymentMethodCode: string) => {
    switch (paymentMethodCode) {
        case "checkmo":
            return "check";
        case "banktransfer":
            return "wire_transfer";
        case "cashondelivery":
            return "cash";
        case "purchaseorder":
        case "free":
        case "companycredit":
        default:
            return "other";
    }
};

const createOrder = (
    orderFromCustomContext: Order | undefined,
    orderContext: sdkSchemas.Order,
    storefrontInstanceContext: sdkSchemas.StorefrontInstance,
): Order => {
    let payments: Payment[] = [];

    if (orderFromCustomContext?.payments?.length) {
        // try custom context first
        payments = orderFromCustomContext.payments;
    }
    if (orderContext?.payments?.length) {
        // payments array
        payments = orderContext.payments.map((payment) => {
            return {
                paymentAmount: Number(payment.total || 0),
                paymentType: getAepPaymentCode(payment.paymentMethodCode),
                transactionID: String(orderContext?.orderId),
                currencyCode: storefrontInstanceContext?.storeViewCurrencyCode,
            };
        });
    } else {
        // no payments array, use deprecated top level payment fields
        payments = [
            {
                paymentAmount: Number(orderContext?.grandTotal || 0),
                paymentType: getAepPaymentCode(orderContext?.paymentMethodCode),
                transactionID: String(orderContext?.orderId),
                currencyCode: storefrontInstanceContext?.storeViewCurrencyCode,
            },
        ];
    }

    // default orderType to 'checkout'
    const orderType = orderContext?.orderType === "instant_purchase" ? "instant_purchase" : "checkout";

    return {
        purchaseID: orderFromCustomContext?.purchaseID || String(orderContext?.orderId),
        currencyCode: orderFromCustomContext?.currencyCode || storefrontInstanceContext?.storeViewCurrencyCode,
        payments,
        orderType,
    };
};

export { createOrder };

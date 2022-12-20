import * as sdkSchemas from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

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
    orderContext: sdkSchemas.Order,
    storefrontInstanceContext: sdkSchemas.StorefrontInstance,
): Order => {
    let payments: Payment[] = [];

    if (orderContext?.payments?.length) {
        // try payments array first
        payments = orderContext.payments.map((payment) => {
            return {
                paymentAmount: payment.total,
                paymentType: getAepPaymentCode(payment.paymentMethodCode),
                transactionID: orderContext?.orderId.toString(),
                currencyCode: storefrontInstanceContext?.storeViewCurrencyCode,
            };
        });
    } else {
        // no payments array, try deprecated top level payment fields
        payments = [
            {
                paymentAmount: orderContext?.grandTotal,
                paymentType: getAepPaymentCode(orderContext?.paymentMethodCode),
                transactionID: orderContext?.orderId?.toString(),
                currencyCode: storefrontInstanceContext?.storeViewCurrencyCode,
            },
        ];
    }

    // default orderType to 'checkout'
    const orderType = orderContext?.orderType === "instant_purchase" ? "instant_purchase" : "checkout";

    return {
        purchaseID: orderContext?.orderId.toString(),
        currencyCode: storefrontInstanceContext?.storeViewCurrencyCode,
        payments,
        orderType,
    };
};

export { createOrder };

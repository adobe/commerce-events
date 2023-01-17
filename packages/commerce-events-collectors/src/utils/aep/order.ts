import * as sdkSchemas from "@adobe/commerce-events-sdk/src/types/schemas";

import { Order, Payment } from "../../types/aep";

const getAepPaymentCode = (paymentMethodCode: string) => {
    //Code support reasoning documented here: https://jira.corp.adobe.com/browse/DINT-324
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

    if (orderContext.payments && orderContext.payments.length) {
        // try payments array first
        payments = orderContext.payments.map((payment) => {
            return {
                paymentAmount: Number(payment.total || 0),
                paymentType: getAepPaymentCode(payment.paymentMethodCode),
                transactionID: orderContext.orderId.toString(),
                currencyCode: storefrontInstanceContext.storeViewCurrencyCode,
            };
        });
    } else {
        // no payments array, try deprecated top level payment fields
        payments = [
            {
                paymentAmount: Number(orderContext.grandTotal || 0),
                paymentType: getAepPaymentCode(orderContext.paymentMethodCode),
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

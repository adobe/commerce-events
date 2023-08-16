/* top level object for all transaction events */
export type Commerce = {
    productListAdds?: ProductListAdds;
    productListOpens?: ProductListOpens;
    productListRemovals?: ProductListRemovals;
    productListViews?: ProductListViews;
    cart?: Cart;
    checkouts?: Checkout;
    commerceScope?: CommerceScope;
    purchases?: Purchases;
    order?: Order;
    promotionID?: string;
    productViews?: ProductView;
    requisitionList?: RequisitionList;
    requisitionListOpens?: RequisitionListOpens;
    requisitionListAdds?: RequisitionListAdds;
    requisitionListRemovals?: RequisitionListRemovals;
    shipping?: Shipping;
};

export type CommerceScope = {
    environmentID: string;
    storeCode?: string;
    storeViewCode?: string;
    websiteCode?: string;
};

export type ProductView = {
    value: number;
};

export type Cart = {
    cartID?: string | null;
};

export type Purchases = {
    value: number;
};

export type Order = {
    purchaseID: string;
    purchaseOrderNumber?: string;
    payments: Payment[];
    priceTotal?: number;
    currencyCode?: string;
    orderType?: "checkout" | "instant_purchase";
};

export type Shipping = {
    shippingMethod?: string;
    shippingAmount?: number;
};

export type Payment = {
    transactionID?: string;
    paymentAmount?: number;
    paymentType?: string;
    currencyCode?: string;
};

export type Checkout = {
    value: number;
};

/**
 * Addition or increase in quantity of a product to the product list, for example a product is added
 * to a shopping cart.
 */
export type ProductListAdds = {
    id?: string;
    value: number;
};

/**
 * Addition of a product to an empty product list
 */
export type ProductListOpens = {
    id?: string;
    value: number;
};

/**
 * Removal or decrease in quantity of a product from the product list, for example a product is deleted
 * from a shopping cart.
 */
export type ProductListRemovals = {
    id?: string;
    value: number;
};

/** View or views of a product-list has occurred. */
export type ProductListViews = {
    value: number;
};

export type RequisitionList = {
    ID: string;
    name?: string;
    description?: string;
};

/**
 * Creation of a new requisition list
 */
export type RequisitionListOpens = {
    id?: string;
    value: number;
};

/**
 * Addition of a products to a requisition list
 */
export type RequisitionListAdds = {
    id?: string;
    value: number;
};

export type RequisitionListRemovals = {
    id?: string;
    value: number;
};

/**
 * Items representing a product selected by a customer with specific
 * options and pricing.
 */
export type ProductListItem = {
    /**
     * product sku
     */
    SKU: string;
    /**
     * product name as displayed on page
     */
    name: string;
    /**
     * number of this item added/purchased, defaults to 1
     */
    quantity?: number;
    /**
     * price of one item, excluding tax
     */
    priceTotal?: number;
    /**
     * currency code (USD, EUR, MXN, etc)
     */
    currencyCode?: string;
    /**
     * amount by which regular price is reduced on this item
     */
    discountAmount?: number;
    /**
     * product configurable options (ex: {type: 'color', value: 'red'})
     */
    selectedOptions?: SelectedOption[];
};

export type SelectedOption = {
    attribute: string;
    value: string;
};

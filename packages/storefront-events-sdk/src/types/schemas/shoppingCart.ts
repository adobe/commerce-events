import { Product } from "./product";

export type ShoppingCart = {
    id: string | null;
    items?: Array<ShoppingCartItem>;
    prices?: {
        subtotalExcludingTax?: Price;
        subtotalIncludingTax?: Price;
    };
    totalQuantity: number;
    possibleOnepageCheckout?: boolean;
    giftMessageSelected?: boolean;
    giftWrappingSelected?: boolean;
    source?: string; // ui component or page that the customer used to add a product to cart
};

type Price = {
    value: number;
    currency?: string;
    regularPrice?: number;
};

export type ShoppingCartItem = {
    canApplyMsrp: boolean;
    formattedPrice: string;
    id: string;
    prices: {
        price: Price;
    };
    product: Product;
    configurableOptions?: Array<ConfigurableOption>;
    quantity: number;
};

export type ConfigurableOption = {
    id: number;
    optionLabel: string;
    valueId: number;
    valueLabel: string;
};

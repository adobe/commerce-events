import { Product } from "./product";

export type RequisitionList = {
    id: string;
    name?: string;
    description?: string;
};

export type RequisitionListItem = Product & {
    quantity: number;
    selectedOptions: Array<SelectedOption>;
};

export type RequisitionListItems = {
    items: Array<RequisitionListItem>;
};

export type SelectedOption = {
    attribute: string;
    value: string;
};

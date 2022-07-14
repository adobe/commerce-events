export type SearchInput = {
    units: Array<SearchInputUnit>;
};

export type SearchInputUnit = {
    searchUnitId: string; // "productPage" or "searchPopover"
    searchRequestId: string; // uuid
    queryTypes: Array<"products" | "suggestions" | "categories">;
    phrase: string;
    pageSize: number;
    currentPage: number;
    filter: Array<SearchFilter>;
    sort: Array<SearchSort>;
    context?: QueryContextInput;
};

export type QueryContextInput = {
    customerGroup: string;
};

export type SearchFilter = {
    attribute: string;
    eq?: string;
    in?: Array<string>;
    range?: {
        from?: number;
        to?: number;
    };
};

export type SearchSort = {
    attribute: string;
    direction: "ASC" | "DESC";
};

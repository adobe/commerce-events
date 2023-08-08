import { Commerce } from "./commerce";
import { Web } from "./pageView";
import { ProductListItem } from "./productListItem";

/** The Beacon Schema that matches our schema object in AEP */
export type BeaconSchema = {
    _id?: string;
    eventType?: string;
    commerce?: Commerce;
    identityMap?: IdentityMap;
    productListItems?: ProductListItem[];
    web?: Web;
    person?: Account;
    personID?: string;
    personalEmail?: Email;
    userAccount?: AccountActions;
    searchRequest?: SearchRequest;
    searchResponse?: SearchResponse;
    siteSearch?: Search;
};

export type IdentityMap = {
    ECID: {
        id: string;
        primary: boolean;
    }[];
    email?: {
        id: string;
        primary: boolean;
    }[];
};

export type Account = {
    accountID?: string;
    accountType?: string;
};

export type Email = {
    address?: string;
};

export type AccountActions = {
    login?: number;
    logout?: number;
    createProfile?: number;
    updateProfile?: number;
};

export type SearchRequest = {
    id?: string;
    value: number;
};

export type SearchResponse = {
    id?: string /** contains ID of the search request so the two can be mapped to each other */;
    value: number;
};

export type Search = {
    query?: string;
    refinements?: Filter[];
    sort?: Sort[];
    suggestions?: string[];
    numberOfResults?: number;
};

export type Filter = {
    attribute: string;
    value: string[];
    isRange: boolean;
};

export type Sort = {
    attribute: string;
    order: "ASC" | "DESC";
};

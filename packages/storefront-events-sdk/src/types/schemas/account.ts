/* shopper object with PII */
/* for anonymous info use type Shopper */

import { Address } from ".";

export type Account = {
    firstName: string;
    lastName: string;
    billingAddress?: Address;
    shippingAddress?: Address;
    emailAddress?: string;
    phoneNumber?: string;
    countryCode?: string; // phone number country code
    accountId?: string;
    accountType?: string;
    company?: string;
    customerGroup?: string;
};

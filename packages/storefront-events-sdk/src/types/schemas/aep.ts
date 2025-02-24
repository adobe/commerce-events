export type AEP = {
    imsOrgId: string;
    datastreamId: string;
    webSdkName?: string;
    edgeDomain?: string;
    identityMap?: [{ id: string; primary: boolean }];
};

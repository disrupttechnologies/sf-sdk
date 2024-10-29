import { Api } from "../__generated__/merchantSDK";
interface SDKInitConfig {
    url: string;
    jwtToken?: string;
}
export type MerchantApiSDK = Api<unknown>;
export declare class MerchantClient {
    init(config: SDKInitConfig): Api<unknown>;
    private generateHTTPClient;
}
export {};
//# sourceMappingURL=merchantclient.d.ts.map
import { Api } from "../__generated__/adminSDK";
interface SDKInitConfig {
    url: string;
    jwtToken?: string;
}
export type AdminApiSDK = Api<unknown>;
export declare class AdminSDKClient {
    init(config: SDKInitConfig): Api<unknown>;
    private generateHTTPClient;
}
export {};
//# sourceMappingURL=adminclient.d.ts.map
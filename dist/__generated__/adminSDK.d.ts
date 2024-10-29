export interface CommondtoChangePassword {
    newpassword: string;
}
export interface CommondtoLoginInput {
    email: string;
    password: string;
}
export interface CommondtoResetPassword {
    email: string;
}
export interface CommondtoSetup2FA {
    otp: string;
    secret: string;
}
export interface CommondtoVerify2FA {
    otp: string;
}
export interface ModelsAdmin {
    createdAt?: string;
    createdByID?: string;
    email?: string;
    id?: string;
    is2FAEnabled?: boolean;
    isEnabled?: boolean;
    name?: string;
    updatedAt?: string;
}
export interface ModelsSFStaff {
    createdAt?: string;
    email?: string;
    id?: string;
    is2FAEnabled?: boolean;
    isEnabled?: boolean;
    name?: string;
    staffType?: ModelsStaffType;
    storefrontID?: string;
    updatedAt?: string;
}
export declare enum ModelsStaffType {
    ST_OWNER = "OWNER",
    ST_STAFF = "STAFF"
}
export interface ModelsStorefront {
    address?: string;
    createdAt?: string;
    createdByID?: string;
    id?: string;
    metadata?: string;
    settings?: string;
    storefrontName?: string;
    timezone?: string;
    updatedAt?: string;
}
export interface ResponsesLoginResponse {
    token?: string;
}
export interface ResponsesOkResponse {
    message?: string;
}
export interface StorefrontdtoCreateSFInput {
    address: string;
    metadata: string;
    name: string;
    timezone: string;
}
export interface StorefrontdtoCreateSFStaffInput {
    email: string;
    name: string;
}
export interface StorefrontdtoSetupSFSettingsInput {
    settings: string;
}
export interface StorefrontdtoUpdateSFInput {
    address?: string;
    metadata?: string;
    name?: string;
    timezone?: string;
}
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";
export type QueryParamsType = Record<string | number, any>;
export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: ResponseType;
    /** request body */
    body?: unknown;
}
export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
    securityWorker?: (securityData: SecurityDataType | null) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
    secure?: boolean;
    format?: ResponseType;
}
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded",
    Text = "text/plain"
}
export declare class HttpClient<SecurityDataType = unknown> {
    instance: AxiosInstance;
    private securityData;
    private securityWorker?;
    private secure?;
    private format?;
    constructor({ securityWorker, secure, format, ...axiosConfig }?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType | null) => void;
    protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig;
    protected stringifyFormItem(formItem: unknown): string;
    protected createFormData(input: Record<string, unknown>): FormData;
    request: <T = any, _E = any>({ secure, path, type, query, format, body, ...params }: FullRequestParams) => Promise<AxiosResponse<T>>;
}
/**
 * @title Admin APIs
 * @version 1.0
 * @baseUrl /api/v1
 * @contact
 *
 * Testing Swagger APIs.
 */
export declare class Api<SecurityDataType extends unknown> {
    http: HttpClient<SecurityDataType>;
    constructor(http: HttpClient<SecurityDataType>);
    auth: {
        /**
         * @description Change Password
         *
         * @tags auth
         * @name ChangePassword
         * @summary Change Password
         * @request POST:/auth/changepassword
         * @secure
         */
        changePassword: (data: CommondtoChangePassword, params?: RequestParams) => Promise<AxiosResponse<ResponsesOkResponse, any>>;
        /**
         * @description Login
         *
         * @tags auth
         * @name Login
         * @summary Login
         * @request POST:/auth/login
         */
        login: (data: CommondtoLoginInput, params?: RequestParams) => Promise<AxiosResponse<ResponsesLoginResponse, any>>;
        /**
         * @description GetMe
         *
         * @tags profile
         * @name GetMe
         * @summary GetMe
         * @request GET:/auth/me
         * @secure
         */
        getMe: (params?: RequestParams) => Promise<AxiosResponse<ModelsAdmin, any>>;
        /**
         * @description Reset  Password
         *
         * @tags auth
         * @name ResetPassword
         * @summary Reset  Password
         * @request POST:/auth/resetpassword
         */
        resetPassword: (data: CommondtoResetPassword, params?: RequestParams) => Promise<AxiosResponse<ResponsesOkResponse, any>>;
        /**
         * @description Setup2FA
         *
         * @tags auth
         * @name Setup2Fa
         * @summary Setup2FA
         * @request POST:/auth/setup2FA
         * @secure
         */
        setup2Fa: (data: CommondtoSetup2FA, params?: RequestParams) => Promise<AxiosResponse<ResponsesLoginResponse, any>>;
        /**
         * @description Verify 2FA
         *
         * @tags auth
         * @name Verify2Fa
         * @summary Verify 2FA
         * @request POST:/auth/verify2FA
         * @secure
         */
        verify2Fa: (data: CommondtoVerify2FA, params?: RequestParams) => Promise<AxiosResponse<ResponsesLoginResponse, any>>;
    };
    storefront: {
        /**
         * @description Create Storefront
         *
         * @tags storefront
         * @name CreateStorefront
         * @summary Create Storefront
         * @request POST:/storefront/create
         * @secure
         */
        createStorefront: (data: StorefrontdtoCreateSFInput, params?: RequestParams) => Promise<AxiosResponse<ModelsStorefront, any>>;
        /**
         * @description Create Storefront Owner
         *
         * @tags storefront
         * @name CreateStorefrontOwner
         * @summary Create Storefront Owner
         * @request POST:/storefront/createowner/{storefrontID}
         * @secure
         */
        createStorefrontOwner: (storefrontId: string, data: StorefrontdtoCreateSFStaffInput, params?: RequestParams) => Promise<AxiosResponse<ModelsSFStaff, any>>;
        /**
         * @description Storefront List
         *
         * @tags storefront
         * @name StorefrontList
         * @summary Storefront List
         * @request GET:/storefront/list
         * @secure
         */
        storefrontList: (query?: {
            /** page no for pagination */
            page?: number;
            /** limit no for pagination */
            limit?: number;
        }, params?: RequestParams) => Promise<AxiosResponse<ModelsStorefront[], any>>;
        /**
         * @description Get Storefront Owners
         *
         * @tags storefront
         * @name GetStorefrontOwners
         * @summary Get Storefront Owners
         * @request GET:/storefront/owners/{storefrontID}
         * @secure
         */
        getStorefrontOwners: (storefrontId: string, params?: RequestParams) => Promise<AxiosResponse<ModelsSFStaff[], any>>;
        /**
         * @description Update Storefront
         *
         * @tags storefront
         * @name UpdateStorefront
         * @summary Update Storefront
         * @request PATCH:/storefront/update/{storefrontID}
         * @secure
         */
        updateStorefront: (storefrontId: string, data: StorefrontdtoUpdateSFInput, params?: RequestParams) => Promise<AxiosResponse<ModelsStorefront, any>>;
        /**
         * @description Setup Storefront Settings
         *
         * @tags storefront
         * @name SetupStorefrontSettings
         * @summary Setup Storefront Settings
         * @request PATCH:/storefront/updatesettings/{storefrontID}
         * @secure
         */
        setupStorefrontSettings: (storefrontId: string, data: StorefrontdtoSetupSFSettingsInput, params?: RequestParams) => Promise<AxiosResponse<ModelsStorefront, any>>;
    };
}
//# sourceMappingURL=adminSDK.d.ts.map
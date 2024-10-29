/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
export var ModelsStaffType;
(function (ModelsStaffType) {
    ModelsStaffType["ST_OWNER"] = "OWNER";
    ModelsStaffType["ST_STAFF"] = "STAFF";
})(ModelsStaffType || (ModelsStaffType = {}));
import axios from "axios";
export var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
    ContentType["Text"] = "text/plain";
})(ContentType || (ContentType = {}));
export class HttpClient {
    instance;
    securityData = null;
    securityWorker;
    secure;
    format;
    constructor({ securityWorker, secure, format, ...axiosConfig } = {}) {
        this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "/api/v1" });
        this.secure = secure;
        this.format = format;
        this.securityWorker = securityWorker;
    }
    setSecurityData = (data) => {
        this.securityData = data;
    };
    mergeRequestParams(params1, params2) {
        const method = params1.method || (params2 && params2.method);
        return {
            ...this.instance.defaults,
            ...params1,
            ...(params2 || {}),
            headers: {
                ...((method && this.instance.defaults.headers[method.toLowerCase()]) || {}),
                ...(params1.headers || {}),
                ...((params2 && params2.headers) || {}),
            },
        };
    }
    stringifyFormItem(formItem) {
        if (typeof formItem === "object" && formItem !== null) {
            return JSON.stringify(formItem);
        }
        else {
            return `${formItem}`;
        }
    }
    createFormData(input) {
        if (input instanceof FormData) {
            return input;
        }
        return Object.keys(input || {}).reduce((formData, key) => {
            const property = input[key];
            const propertyContent = property instanceof Array ? property : [property];
            for (const formItem of propertyContent) {
                const isFileType = formItem instanceof Blob || formItem instanceof File;
                formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
            }
            return formData;
        }, new FormData());
    }
    request = async ({ secure, path, type, query, format, body, ...params }) => {
        const secureParams = ((typeof secure === "boolean" ? secure : this.secure) &&
            this.securityWorker &&
            (await this.securityWorker(this.securityData))) ||
            {};
        const requestParams = this.mergeRequestParams(params, secureParams);
        const responseFormat = format || this.format || undefined;
        if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
            body = this.createFormData(body);
        }
        if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
            body = JSON.stringify(body);
        }
        return this.instance.request({
            ...requestParams,
            headers: {
                ...(requestParams.headers || {}),
                ...(type ? { "Content-Type": type } : {}),
            },
            params: query,
            responseType: responseFormat,
            data: body,
            url: path,
        });
    };
}
/**
 * @title Admin APIs
 * @version 1.0
 * @baseUrl /api/v1
 * @contact
 *
 * Testing Swagger APIs.
 */
export class Api {
    http;
    constructor(http) {
        this.http = http;
    }
    auth = {
        /**
         * @description Change Password
         *
         * @tags auth
         * @name ChangePassword
         * @summary Change Password
         * @request POST:/auth/changepassword
         * @secure
         */
        changePassword: (data, params = {}) => this.http.request({
            path: `/auth/changepassword`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Login
         *
         * @tags auth
         * @name Login
         * @summary Login
         * @request POST:/auth/login
         */
        login: (data, params = {}) => this.http.request({
            path: `/auth/login`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description GetMe
         *
         * @tags profile
         * @name GetMe
         * @summary GetMe
         * @request GET:/auth/me
         * @secure
         */
        getMe: (params = {}) => this.http.request({
            path: `/auth/me`,
            method: "GET",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Reset  Password
         *
         * @tags auth
         * @name ResetPassword
         * @summary Reset  Password
         * @request POST:/auth/resetpassword
         */
        resetPassword: (data, params = {}) => this.http.request({
            path: `/auth/resetpassword`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Setup2FA
         *
         * @tags auth
         * @name Setup2Fa
         * @summary Setup2FA
         * @request POST:/auth/setup2FA
         * @secure
         */
        setup2Fa: (data, params = {}) => this.http.request({
            path: `/auth/setup2FA`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Verify 2FA
         *
         * @tags auth
         * @name Verify2Fa
         * @summary Verify 2FA
         * @request POST:/auth/verify2FA
         * @secure
         */
        verify2Fa: (data, params = {}) => this.http.request({
            path: `/auth/verify2FA`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
    };
    storefront = {
        /**
         * @description Create Storefront
         *
         * @tags storefront
         * @name CreateStorefront
         * @summary Create Storefront
         * @request POST:/storefront/create
         * @secure
         */
        createStorefront: (data, params = {}) => this.http.request({
            path: `/storefront/create`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Create Storefront Owner
         *
         * @tags storefront
         * @name CreateStorefrontOwner
         * @summary Create Storefront Owner
         * @request POST:/storefront/createowner/{storefrontID}
         * @secure
         */
        createStorefrontOwner: (storefrontId, data, params = {}) => this.http.request({
            path: `/storefront/createowner/${storefrontId}`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Storefront List
         *
         * @tags storefront
         * @name StorefrontList
         * @summary Storefront List
         * @request GET:/storefront/list
         * @secure
         */
        storefrontList: (query, params = {}) => this.http.request({
            path: `/storefront/list`,
            method: "GET",
            query: query,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Get Storefront Owners
         *
         * @tags storefront
         * @name GetStorefrontOwners
         * @summary Get Storefront Owners
         * @request GET:/storefront/owners/{storefrontID}
         * @secure
         */
        getStorefrontOwners: (storefrontId, params = {}) => this.http.request({
            path: `/storefront/owners/${storefrontId}`,
            method: "GET",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Update Storefront
         *
         * @tags storefront
         * @name UpdateStorefront
         * @summary Update Storefront
         * @request PATCH:/storefront/update/{storefrontID}
         * @secure
         */
        updateStorefront: (storefrontId, data, params = {}) => this.http.request({
            path: `/storefront/update/${storefrontId}`,
            method: "PATCH",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Setup Storefront Settings
         *
         * @tags storefront
         * @name SetupStorefrontSettings
         * @summary Setup Storefront Settings
         * @request PATCH:/storefront/updatesettings/{storefrontID}
         * @secure
         */
        setupStorefrontSettings: (storefrontId, data, params = {}) => this.http.request({
            path: `/storefront/updatesettings/${storefrontId}`,
            method: "PATCH",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
    };
}

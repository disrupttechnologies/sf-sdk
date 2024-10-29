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

export enum ModelsStaffType {
  ST_OWNER = "OWNER",
  ST_STAFF = "STAFF",
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

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
import axios from "axios";

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
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "/api/v1" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
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
export class Api<SecurityDataType extends unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
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
    changePassword: (data: CommondtoChangePassword, params: RequestParams = {}) =>
      this.http.request<ResponsesOkResponse, any>({
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
    login: (data: CommondtoLoginInput, params: RequestParams = {}) =>
      this.http.request<ResponsesLoginResponse, any>({
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
    getMe: (params: RequestParams = {}) =>
      this.http.request<ModelsAdmin, any>({
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
    resetPassword: (data: CommondtoResetPassword, params: RequestParams = {}) =>
      this.http.request<ResponsesOkResponse, any>({
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
    setup2Fa: (data: CommondtoSetup2FA, params: RequestParams = {}) =>
      this.http.request<ResponsesLoginResponse, any>({
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
    verify2Fa: (data: CommondtoVerify2FA, params: RequestParams = {}) =>
      this.http.request<ResponsesLoginResponse, any>({
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
    createStorefront: (data: StorefrontdtoCreateSFInput, params: RequestParams = {}) =>
      this.http.request<ModelsStorefront, any>({
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
    createStorefrontOwner: (storefrontId: string, data: StorefrontdtoCreateSFStaffInput, params: RequestParams = {}) =>
      this.http.request<ModelsSFStaff, any>({
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
    storefrontList: (
      query?: {
        /** page no for pagination */
        page?: number;
        /** limit no for pagination */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<ModelsStorefront[], any>({
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
    getStorefrontOwners: (storefrontId: string, params: RequestParams = {}) =>
      this.http.request<ModelsSFStaff[], any>({
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
    updateStorefront: (storefrontId: string, data: StorefrontdtoUpdateSFInput, params: RequestParams = {}) =>
      this.http.request<ModelsStorefront, any>({
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
    setupStorefrontSettings: (
      storefrontId: string,
      data: StorefrontdtoSetupSFSettingsInput,
      params: RequestParams = {},
    ) =>
      this.http.request<ModelsStorefront, any>({
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

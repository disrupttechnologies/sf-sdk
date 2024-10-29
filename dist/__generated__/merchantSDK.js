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
export var ModelsBlockchainNetworkType;
(function (ModelsBlockchainNetworkType) {
    ModelsBlockchainNetworkType["BNT_TRON"] = "TRON";
})(ModelsBlockchainNetworkType || (ModelsBlockchainNetworkType = {}));
export var ModelsCryptoToFiatInvoiceStatusType;
(function (ModelsCryptoToFiatInvoiceStatusType) {
    ModelsCryptoToFiatInvoiceStatusType["CryptoToFiatInvoiceStatusOPEN"] = "OPEN";
    ModelsCryptoToFiatInvoiceStatusType["CryptoToFiatInvoiceStatusSUCCESS"] = "SUCCESS";
    ModelsCryptoToFiatInvoiceStatusType["CryptoToFiatInvoiceStatusFAILED"] = "FAILED";
})(ModelsCryptoToFiatInvoiceStatusType || (ModelsCryptoToFiatInvoiceStatusType = {}));
export var ModelsCryptoTxnStatusType;
(function (ModelsCryptoTxnStatusType) {
    ModelsCryptoTxnStatusType["CryptoTxnStatusTypeNOTINITIALIZED"] = "NOT_INITIALIZED";
    ModelsCryptoTxnStatusType["CryptoTxnStatusTypeFAILED"] = "FAILED";
    ModelsCryptoTxnStatusType["CryptoTxnStatusTypePENDING"] = "PENDING";
    ModelsCryptoTxnStatusType["CryptoTxnStatusTypeCONFIRMING"] = "CONFIRMING";
    ModelsCryptoTxnStatusType["CryptoTxnStatusTypeSUCCESS"] = "SUCCESS";
})(ModelsCryptoTxnStatusType || (ModelsCryptoTxnStatusType = {}));
export var ModelsFiatToCryptoInvoiceStatusType;
(function (ModelsFiatToCryptoInvoiceStatusType) {
    ModelsFiatToCryptoInvoiceStatusType["F2CInvoiceStatusNOTINITIALIZED"] = "NOT_INITIALIZED";
    ModelsFiatToCryptoInvoiceStatusType["F2CInvoiceStatusCONFIRMING"] = "CONFIRMING";
    ModelsFiatToCryptoInvoiceStatusType["F2CInvoiceStatusSUCCESS"] = "SUCCESS";
    ModelsFiatToCryptoInvoiceStatusType["F2CInvoiceStatusFAILED"] = "FAILED";
})(ModelsFiatToCryptoInvoiceStatusType || (ModelsFiatToCryptoInvoiceStatusType = {}));
export var ModelsFiatTxnType;
(function (ModelsFiatTxnType) {
    ModelsFiatTxnType["FiatTxnTypeBUSINESSTXN"] = "BUSINESS_TXN";
    ModelsFiatTxnType["FiatTxnTypeSTOCKTXN"] = "STOCK_TXN";
    ModelsFiatTxnType["FiatTxnTypeSTAFFTXN"] = "STAFF_TXN";
    ModelsFiatTxnType["FiatTxnTypeOTHER"] = "OTHER";
    ModelsFiatTxnType["ThresholdModePIPS"] = "PIPS";
    ModelsFiatTxnType["ThresholdModePERCENT"] = "PERCENT";
})(ModelsFiatTxnType || (ModelsFiatTxnType = {}));
export var ModelsRateFetchModeType;
(function (ModelsRateFetchModeType) {
    ModelsRateFetchModeType["RateModeNONE"] = "NONE";
    ModelsRateFetchModeType["RateModeBID"] = "BID";
    ModelsRateFetchModeType["RateModeASK"] = "ASK";
    ModelsRateFetchModeType["RateModeMID"] = "MID";
})(ModelsRateFetchModeType || (ModelsRateFetchModeType = {}));
export var ModelsRateModeType;
(function (ModelsRateModeType) {
    ModelsRateModeType["RateModeMARGIN"] = "MARGIN";
    ModelsRateModeType["RateModePERCENT"] = "PERCENT";
    ModelsRateModeType["RateModeFIXED"] = "FIXED";
})(ModelsRateModeType || (ModelsRateModeType = {}));
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
 * @title Merchant APIs
 * @version 1.0
 * @baseUrl /api/v1
 * @contact
 *
 * Swagger APIs Docs.
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
    cashmanagement = {
        /**
         * @description Create fiat txn for staff
         *
         * @tags fiat management
         * @name CreateFiatTxnForStaff
         * @summary Create fiat txn for staff
         * @request POST:/cashmanagement/createstafftxn
         * @secure
         */
        createFiatTxnForStaff: (data, params = {}) => this.http.request({
            path: `/cashmanagement/createstafftxn`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Create fiat stock txn
         *
         * @tags fiat management
         * @name CreateFiatStockTxn
         * @summary Create fiat stock txn
         * @request POST:/cashmanagement/createstocktxn
         * @secure
         */
        createFiatStockTxn: (data, params = {}) => this.http.request({
            path: `/cashmanagement/createstocktxn`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Get fiat txns
         *
         * @tags fiat management
         * @name GetFiatTxns
         * @summary Get fiat txns
         * @request GET:/cashmanagement/txnlist/{fiatId}
         * @secure
         */
        getFiatTxns: (fiatId, query, params = {}) => this.http.request({
            path: `/cashmanagement/txnlist/${fiatId}`,
            method: "GET",
            query: query,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
    };
    currency = {
        /**
         * @description Create Currency
         *
         * @tags currency
         * @name CreateCurrency
         * @summary Create Currency
         * @request POST:/currency/create
         * @secure
         */
        createCurrency: (data, params = {}) => this.http.request({
            path: `/currency/create`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Disable Currency
         *
         * @tags currency
         * @name DisableCurrency
         * @summary Disable Currency
         * @request PATCH:/currency/disable/{currencyID}
         * @secure
         */
        disableCurrency: (currencyId, params = {}) => this.http.request({
            path: `/currency/disable/${currencyId}`,
            method: "PATCH",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Get User
         *
         * @tags currency
         * @name GetCurrencies
         * @summary Get Currencies
         * @request GET:/currency/list
         * @secure
         */
        getCurrencies: (params = {}) => this.http.request({
            path: `/currency/list`,
            method: "GET",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Update Currency
         *
         * @tags currency
         * @name UpdateCurrency
         * @summary Update Currency
         * @request PATCH:/currency/update/{currencyID}
         * @secure
         */
        updateCurrency: (currencyId, data, params = {}) => this.http.request({
            path: `/currency/update/${currencyId}`,
            method: "PATCH",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
    };
    gas = {
        /**
         * @description IS SFWallet TRX Balance  Running Low
         *
         * @tags gas
         * @name IsSfWalletTrxBalanceRunningLow
         * @summary IS SFWallet TRX Balance  Running Low
         * @request GET:/gas/isTrxRunningLow/{address}
         * @secure
         */
        isSfWalletTrxBalanceRunningLow: (address, params = {}) => this.http.request({
            path: `/gas/isTrxRunningLow/${address}`,
            method: "GET",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Sync SFWallet TRX Balance
         *
         * @tags gas
         * @name SyncSfWalletTrxBalance
         * @summary Sync SFWallet TRX Balance
         * @request PATCH:/gas/synctrxwallet/{address}
         * @secure
         */
        syncSfWalletTrxBalance: (address, params = {}) => this.http.request({
            path: `/gas/synctrxwallet/${address}`,
            method: "PATCH",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Get TRX Balance For SFWallet
         *
         * @tags gas
         * @name GetTrxBalanceForSfWallet
         * @summary Get TRX Balance For SFWallet
         * @request GET:/gas/trxbalance/{address}
         * @secure
         */
        getTrxBalanceForSfWallet: (address, params = {}) => this.http.request({
            path: `/gas/trxbalance/${address}`,
            method: "GET",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
    };
    invoice = {
        /**
         * @description Create C2F Invoice
         *
         * @tags invoice
         * @name CreateC2FInvoice
         * @summary Create C2F Invoice
         * @request POST:/invoice/c2f/create
         * @secure
         */
        createC2FInvoice: (data, params = {}) => this.http.request({
            path: `/invoice/c2f/create`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Get Opened C2F Invoices By ID
         *
         * @tags invoice
         * @name GetOpenedC2FInvoicesById
         * @summary Get Opened C2F Invoices By ID
         * @request GET:/invoice/c2f/get/{invoiceId}
         * @secure
         */
        getOpenedC2FInvoicesById: (invoiceId, params = {}) => this.http.request({
            path: `/invoice/c2f/get/${invoiceId}`,
            method: "GET",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Get All C2F Invoices
         *
         * @tags invoice
         * @name GetAllC2FInvoices
         * @summary Get All C2F Invoices
         * @request GET:/invoice/c2f/list
         * @secure
         */
        getAllC2FInvoices: (query, params = {}) => this.http.request({
            path: `/invoice/c2f/list`,
            method: "GET",
            query: query,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Get All C2F Invoices By Staff
         *
         * @tags invoice
         * @name GetAllC2FInvoicesByStaff
         * @summary Get All C2F Invoices By Staff
         * @request GET:/invoice/c2f/my/list
         * @secure
         */
        getAllC2FInvoicesByStaff: (query, params = {}) => this.http.request({
            path: `/invoice/c2f/my/list`,
            method: "GET",
            query: query,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Settle C2F Invoice
         *
         * @tags invoice
         * @name SettleC2FInvoice
         * @summary Settle C2F Invoice
         * @request POST:/invoice/c2f/settle/{invoiceId}
         * @secure
         */
        settleC2FInvoice: (invoiceId, data, params = {}) => this.http.request({
            path: `/invoice/c2f/settle/${invoiceId}`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Get Opened C2F Invoices By UserId
         *
         * @tags invoice
         * @name GetOpenedC2FInvoicesByUserId
         * @summary Get Opened C2F Invoices By UserId
         * @request GET:/invoice/c2f/user/{userId}
         * @secure
         */
        getOpenedC2FInvoicesByUserId: (userId, params = {}) => this.http.request({
            path: `/invoice/c2f/user/${userId}`,
            method: "GET",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Create C2F Invoice
         *
         * @tags invoice
         * @name CreateF2CInvoice
         * @summary Create F2C Invoice
         * @request POST:/invoice/f2c/create
         * @secure
         */
        createF2CInvoice: (data, params = {}) => this.http.request({
            path: `/invoice/f2c/create`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Resend Email For Invoice
         *
         * @tags invoice
         * @name ResendEmailForInvoice
         * @summary Resend Email For Invoice
         * @request PATCH:/invoice/f2c/resendemail/{invoiceId}
         * @secure
         */
        resendEmailForInvoice: (invoiceId, params = {}) => this.http.request({
            path: `/invoice/f2c/resendemail/${invoiceId}`,
            method: "PATCH",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Submit Wallet Address For Invoice
         *
         * @tags invoice
         * @name SubmitWalletAddressForInvoice
         * @summary Submit Wallet Address For Invoice
         * @request PATCH:/invoice/f2c/setWallet/{invoiceId}
         * @secure
         */
        submitWalletAddressForInvoice: (invoiceId, data, params = {}) => this.http.request({
            path: `/invoice/f2c/setWallet/${invoiceId}`,
            method: "PATCH",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Get Quote
         *
         * @tags invoice
         * @name GetQuote
         * @summary Get Quote
         * @request POST:/invoice/quote
         * @secure
         */
        getQuote: (data, params = {}) => this.http.request({
            path: `/invoice/quote`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
    };
    pair = {
        /**
         * @description Get Asset Configs
         *
         * @tags pair
         * @name GetAssetConfigs
         * @summary Get Asset Configs
         * @request GET:/pair/assetconfig
         * @secure
         */
        getAssetConfigs: (params = {}) => this.http.request({
            path: `/pair/assetconfig`,
            method: "GET",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Create Pair
         *
         * @tags pair
         * @name CreatePair
         * @summary Create Pair
         * @request POST:/pair/create
         * @secure
         */
        createPair: (data, params = {}) => this.http.request({
            path: `/pair/create`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Create Rate Setting
         *
         * @tags pair
         * @name CreateRateSetting
         * @summary Create Rate Setting
         * @request POST:/pair/createratesetting
         * @secure
         */
        createRateSetting: (data, params = {}) => this.http.request({
            path: `/pair/createratesetting`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Get Pairs
         *
         * @tags pair
         * @name GetPairs
         * @summary Get Pairs
         * @request GET:/pair/list
         * @secure
         */
        getPairs: (params = {}) => this.http.request({
            path: `/pair/list`,
            method: "GET",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Update Rate Setting
         *
         * @tags pair
         * @name UpdateRateSetting
         * @summary Update Rate Setting
         * @request PATCH:/pair/ratesetting/update
         * @secure
         */
        updateRateSetting: (data, params = {}) => this.http.request({
            path: `/pair/ratesetting/update`,
            method: "PATCH",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
    };
    ratemanager = {
        /**
         * @description Get Latest Pair Rates
         *
         * @tags ratemanager
         * @name GetLatestPairRates
         * @summary Get Latest Pair Rates
         * @request GET:/ratemanager/latestrates/{pairId}
         * @secure
         */
        getLatestPairRates: (pairId, params = {}) => this.http.request({
            path: `/ratemanager/latestrates/${pairId}`,
            method: "GET",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Manage Pair
         *
         * @tags ratemanager
         * @name ManagePair
         * @summary Manage Pair
         * @request PATCH:/ratemanager/managepair/{pairId}
         * @secure
         */
        managePair: (pairId, data, params = {}) => this.http.request({
            path: `/ratemanager/managepair/${pairId}`,
            method: "PATCH",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Get Pair Rate History
         *
         * @tags ratemanager
         * @name GetPairRateHistory
         * @summary Get Pair Rate History
         * @request GET:/ratemanager/ratehistory/{pairId}
         * @secure
         */
        getPairRateHistory: (pairId, query, params = {}) => this.http.request({
            path: `/ratemanager/ratehistory/${pairId}`,
            method: "GET",
            query: query,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Set Pair Rate
         *
         * @tags ratemanager
         * @name SetPairRate
         * @summary Set Pair Rate
         * @request PATCH:/ratemanager/setrate/{settingId}
         * @secure
         */
        setPairRate: (settingId, data, params = {}) => this.http.request({
            path: `/ratemanager/setrate/${settingId}`,
            method: "PATCH",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
    };
    roles = {
        /**
         * @description Manage Role Accesses
         *
         * @tags roles
         * @name ManageRoleAccesses
         * @summary Manage Role Accesses
         * @request POST:/roles/access/manage/{roleId}
         * @secure
         */
        manageRoleAccesses: (roleId, data, params = {}) => this.http.request({
            path: `/roles/access/manage/${roleId}`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Get All Accesses
         *
         * @tags roles
         * @name GetAllAccesses
         * @summary Get All Accesses
         * @request GET:/roles/accesslist
         * @secure
         */
        getAllAccesses: (params = {}) => this.http.request({
            path: `/roles/accesslist`,
            method: "GET",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Assign Role to Staff
         *
         * @tags roles
         * @name AssignRoleToStaff
         * @summary Assign Role to Staff
         * @request PATCH:/roles/assign/{roleId}/{staffId}
         * @secure
         */
        assignRoleToStaff: (roleId, staffId, params = {}) => this.http.request({
            path: `/roles/assign/${roleId}/${staffId}`,
            method: "PATCH",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Create Role
         *
         * @tags roles
         * @name CreateRole
         * @summary Create Role
         * @request POST:/roles/create
         * @secure
         */
        createRole: (data, params = {}) => this.http.request({
            path: `/roles/create`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Detach Role from Staff
         *
         * @tags roles
         * @name DetachRoleFromStaff
         * @summary Detach Role from Staff
         * @request PATCH:/roles/detach/{roleId}/{staffId}
         * @secure
         */
        detachRoleFromStaff: (roleId, staffId, params = {}) => this.http.request({
            path: `/roles/detach/${roleId}/${staffId}`,
            method: "PATCH",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Disable Role
         *
         * @tags roles
         * @name DisableRole
         * @summary Disable Role
         * @request PATCH:/roles/disable/{roleId}
         * @secure
         */
        disableRole: (roleId, params = {}) => this.http.request({
            path: `/roles/disable/${roleId}`,
            method: "PATCH",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Get Roles List
         *
         * @tags roles
         * @name GetRolesList
         * @summary Get Roles List
         * @request GET:/roles/list
         * @secure
         */
        getRolesList: (query, params = {}) => this.http.request({
            path: `/roles/list`,
            method: "GET",
            query: query,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Update Role
         *
         * @tags roles
         * @name UpdateRole
         * @summary Update Role
         * @request PATCH:/roles/update/{roleId}
         * @secure
         */
        updateRole: (roleId, data, params = {}) => this.http.request({
            path: `/roles/update/${roleId}`,
            method: "PATCH",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
    };
    sfcryptowallet = {
        /**
         * @description Get SFWallet
         *
         * @tags SFWallet
         * @name GetSfWallet
         * @summary Get SFWallet
         * @request GET:/sfcryptowallet/list
         * @secure
         */
        getSfWallet: (params = {}) => this.http.request({
            path: `/sfcryptowallet/list`,
            method: "GET",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Get SFWallet Asset Txns
         *
         * @tags SFWallet
         * @name GetSfWalletAssetTxns
         * @summary Get SFWallet Asset Txns
         * @request GET:/sfcryptowallet/txns/{assetId}
         * @secure
         */
        getSfWalletAssetTxns: (assetId, query, params = {}) => this.http.request({
            path: `/sfcryptowallet/txns/${assetId}`,
            method: "GET",
            query: query,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
    };
    staff = {
        /**
         * @description Create Storefront Staff
         *
         * @tags storefront staff
         * @name CreateStorefrontStaff
         * @summary Create Storefront Staff
         * @request POST:/staff/create
         * @secure
         */
        createStorefrontStaff: (data, params = {}) => this.http.request({
            path: `/staff/create`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Disable  Storefront Staff
         *
         * @tags storefront staff
         * @name DisableStorefrontStaff
         * @summary Disable  Storefront Staff
         * @request PATCH:/staff/disable/{staffID}
         */
        disableStorefrontStaff: (staffId, params = {}) => this.http.request({
            path: `/staff/disable/${staffId}`,
            method: "PATCH",
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Storefront Staff List
         *
         * @tags storefront staff
         * @name StorefrontStaffList
         * @summary Storefront Staff List
         * @request GET:/staff/list
         * @secure
         */
        storefrontStaffList: (query, params = {}) => this.http.request({
            path: `/staff/list`,
            method: "GET",
            query: query,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
    };
    user = {
        /**
         * @description Create User
         *
         * @tags user
         * @name CreateUser
         * @summary Create User
         * @request POST:/user/create
         * @secure
         */
        createUser: (data, params = {}) => this.http.request({
            path: `/user/create`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Get User By Email
         *
         * @tags user
         * @name GetUserByEmail
         * @summary Get User By Email
         * @request GET:/user/get/{email}
         * @secure
         */
        getUserByEmail: (email, params = {}) => this.http.request({
            path: `/user/get/${email}`,
            method: "GET",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Wallet Clipboard
         *
         * @tags user
         * @name WalletClipboard
         * @summary Wallet Clipboard
         * @request POST:/user/walletclipboard
         */
        walletClipboard: (data, params = {}) => this.http.request({
            path: `/user/walletclipboard`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Get User Crypto Txns
         *
         * @tags user
         * @name GetUserCryptoTxns
         * @summary Get User Crypto Txns
         * @request GET:/user/{userId}/crypto/deposits
         * @secure
         */
        getUserCryptoTxns: (userId, query, params = {}) => this.http.request({
            path: `/user/${userId}/crypto/deposits`,
            method: "GET",
            query: query,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
    };
}

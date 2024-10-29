export interface AuthcontrollerGetMeWithToken {
    info?: CommonmodelsSFStaffWithRoles;
    token?: string;
}
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
export interface CommonmodelsC2FInvoiceWithDetails {
    amountPaidByUser?: number;
    amountReceivedByUser?: number;
    createdAt?: string;
    createdByID?: string;
    cryptoSymbol?: string;
    denominationStructure?: string;
    fiatCurrency?: string;
    fiatId?: string;
    id?: string;
    network?: ModelsBlockchainNetworkType;
    rate?: number;
    roundingMargin?: number;
    status?: ModelsCryptoToFiatInvoiceStatusType;
    updatedAt?: string;
    userEmail?: string;
    userId?: string;
    walletAddress?: string;
}
export interface CommonmodelsSFRoleWithAccesses {
    accesses?: ModelsSFRoleAccess[];
    createdAt?: string;
    id?: string;
    isEnabled?: boolean;
    name?: string;
    storefrontID?: string;
    totalStaff?: number;
    updatedAt?: string;
}
export interface CommonmodelsSFStaffWithRoles {
    createdAt?: string;
    email?: string;
    id?: string;
    is2FAEnabled?: boolean;
    isEnabled?: boolean;
    name?: string;
    roles?: ModelsSFRole[];
    staffType?: ModelsStaffType;
    storefrontID?: string;
    updatedAt?: string;
}
export interface DtoCreateCurrencyInput {
    decimals: number;
    denominations: number[];
    name: string;
    rounding: number;
}
export interface DtoUpdateCurrencyInput {
    decimals?: number;
    rounding?: number;
}
export interface FiattxnhelperCreateCashTxnForStaffInput {
    denominations: FiattxnhelperDenominationInput[];
    fiatCurrencyId: string;
    isDebit?: boolean;
    staffId: string;
}
export interface FiattxnhelperCreateCashTxnInput {
    denominations: FiattxnhelperDenominationInput[];
    fiatCurrencyId: string;
    isDebit?: boolean;
}
export interface FiattxnhelperDenominationInput {
    denominationId: string;
    quantity: number;
}
export interface GasfeemanagerPaoa {
    message?: string;
}
export interface InvoicedtoCreateC2FInvoiceInput {
    pairId: string;
    userId: string;
}
export interface InvoicedtoCreateF2CInvoiceInput {
    denominations: FiattxnhelperDenominationInput[];
    pairId: string;
    userId: string;
}
export interface InvoicedtoSettleC2FInvoiceInput {
    cryptotxnids: string[];
    denominations: FiattxnhelperDenominationInput[];
}
export interface InvoicedtoSubmitWalletAddressInput {
    walletAddress: string;
}
export declare enum ModelsBlockchainNetworkType {
    BNT_TRON = "TRON"
}
export interface ModelsCryptoAssetConfig {
    contractAddress?: string;
    createdAt?: string;
    decimals?: number;
    id?: string;
    isNative?: boolean;
    name?: string;
    network?: ModelsBlockchainNetworkType;
    symbol?: string;
    updatedAt?: string;
}
export interface ModelsCryptoToFiatInvoice {
    amountPaidByUser?: number;
    amountReceivedByUser?: number;
    createdAt?: string;
    createdByID?: string;
    denominationStructure?: string;
    id?: string;
    rateId?: string;
    receiverWalletId?: string;
    roundingMargin?: number;
    status?: ModelsCryptoToFiatInvoiceStatusType;
    updatedAt?: string;
    userId?: string;
}
export declare enum ModelsCryptoToFiatInvoiceStatusType {
    CryptoToFiatInvoiceStatusOPEN = "OPEN",
    CryptoToFiatInvoiceStatusSUCCESS = "SUCCESS",
    CryptoToFiatInvoiceStatusFAILED = "FAILED"
}
export declare enum ModelsCryptoTxnStatusType {
    CryptoTxnStatusTypeNOTINITIALIZED = "NOT_INITIALIZED",
    CryptoTxnStatusTypeFAILED = "FAILED",
    CryptoTxnStatusTypePENDING = "PENDING",
    CryptoTxnStatusTypeCONFIRMING = "CONFIRMING",
    CryptoTxnStatusTypeSUCCESS = "SUCCESS"
}
export interface ModelsFiatToCryptoInvoice {
    amountPaidByUser?: number;
    amountReceivedByUser?: number;
    createdAt?: string;
    createdByID?: string;
    cryptoTxnID?: string;
    denominationStructure?: string;
    id?: string;
    rateId?: string;
    receivingWalletAddress?: string;
    roundingMargin?: number;
    status?: ModelsFiatToCryptoInvoiceStatusType;
    updatedAt?: string;
    userId?: string;
}
export declare enum ModelsFiatToCryptoInvoiceStatusType {
    F2CInvoiceStatusNOTINITIALIZED = "NOT_INITIALIZED",
    F2CInvoiceStatusCONFIRMING = "CONFIRMING",
    F2CInvoiceStatusSUCCESS = "SUCCESS",
    F2CInvoiceStatusFAILED = "FAILED"
}
export declare enum ModelsFiatTxnType {
    FiatTxnTypeBUSINESSTXN = "BUSINESS_TXN",
    FiatTxnTypeSTOCKTXN = "STOCK_TXN",
    FiatTxnTypeSTAFFTXN = "STAFF_TXN",
    FiatTxnTypeOTHER = "OTHER",
    ThresholdModePIPS = "PIPS",
    ThresholdModePERCENT = "PERCENT"
}
export declare enum ModelsRateFetchModeType {
    RateModeNONE = "NONE",
    RateModeBID = "BID",
    RateModeASK = "ASK",
    RateModeMID = "MID"
}
export interface ModelsRateHistory {
    createdAt?: string;
    id?: string;
    isBuy?: boolean;
    rate?: number;
    rateMode?: ModelsRateModeType;
    sfPairID?: string;
    updatedAt?: string;
}
export declare enum ModelsRateModeType {
    RateModeMARGIN = "MARGIN",
    RateModePERCENT = "PERCENT",
    RateModeFIXED = "FIXED"
}
export interface ModelsRateSetting {
    createdAt?: string;
    fetchMode?: ModelsRateFetchModeType;
    id?: string;
    isBuy?: boolean;
    rateMode?: ModelsRateModeType;
    sfPairID?: string;
    thresholdInput?: number;
    thresholdMode?: string;
    updatedAt?: string;
}
export interface ModelsSFCryptoAssetTxn {
    amount?: number;
    assetID?: string;
    createdAt?: string;
    failedRemarks?: string;
    id?: string;
    isDebit?: boolean;
    txnHash?: string;
    txnRef?: string;
    txnStatus?: ModelsCryptoTxnStatusType;
    txnType?: string;
    updatedAt?: string;
}
export interface ModelsSFCryptoWallet {
    address?: string;
    assets?: ModelsSFCryptoWalletAsset[];
    blockchainNetwork?: ModelsBlockchainNetworkType;
    createdAt?: string;
    id?: string;
    sfId?: string;
    updatedAt?: string;
}
export interface ModelsSFCryptoWalletAsset {
    assetConfigId?: string;
    balance?: number;
    createdAt?: string;
    id?: string;
    updatedAt?: string;
    walletID?: string;
}
export interface ModelsSFFiatCurrency {
    createdAt?: string;
    decimals?: number;
    denominations?: ModelsSFFiatDenomination[];
    id?: string;
    isEnabled?: boolean;
    name?: string;
    rounding?: number;
    sfId?: string;
    updatedAt?: string;
}
export interface ModelsSFFiatCurrencyTxn {
    amount?: number;
    createdAt?: string;
    createdById?: string;
    denominationStructure?: string;
    fiatCurrencyId?: string;
    id?: string;
    isDebit?: boolean;
    metadata?: string;
    txnType?: ModelsFiatTxnType;
    updatedAt?: string;
}
export interface ModelsSFFiatDenomination {
    createdAt?: string;
    fiatID?: string;
    freeQuantity?: number;
    id?: string;
    staffAllocations?: ModelsSFFiatStaffAllocation[];
    updatedAt?: string;
    value?: number;
}
export interface ModelsSFFiatStaffAllocation {
    createdAt?: string;
    denominationID?: string;
    id?: string;
    quantity?: number;
    staffID?: string;
    updatedAt?: string;
}
export interface ModelsSFPair {
    createdAt?: string;
    cryptoAssetConfigId?: string;
    fiatId?: string;
    id?: string;
    isEnable?: boolean;
    kycRequiredAmount?: number;
    maxCryptoAmount?: number;
    minCryptoAmount?: number;
    ratesettings?: ModelsRateSetting[];
    sfID?: string;
    updatedAt?: string;
}
export interface ModelsSFRole {
    createdAt?: string;
    id?: string;
    isEnabled?: boolean;
    name?: string;
    storefrontID?: string;
    updatedAt?: string;
}
export interface ModelsSFRoleAccess {
    createdAt?: string;
    function?: string;
    id?: string;
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
export interface ModelsUser {
    createdAt?: string;
    createdByID?: string;
    email?: string;
    id?: string;
    idNumber?: string;
    infoMetadata?: string;
    isEnabled?: boolean;
    isKYCDone?: boolean;
    updatedAt?: string;
    wallets?: ModelsUserCryptoWallet[];
}
export interface ModelsUserCryptoAsset {
    assetConfigId?: string;
    balance?: number;
    createdAt?: string;
    id?: string;
    updatedAt?: string;
    walletID?: string;
}
export interface ModelsUserCryptoWallet {
    address?: string;
    assets?: ModelsUserCryptoAsset[];
    blockchainNetwork?: ModelsBlockchainNetworkType;
    createdAt?: string;
    id?: string;
    updatedAt?: string;
    userId?: string;
}
export interface PairdtoCreatePairInput {
    cryptoAssetConfigId: string;
    fiatId: string;
    kycRequiredAmount: number;
    maxCryptoAmount: number;
    minCryptoAmount: number;
}
export interface PairdtoCreateRateSettingInput {
    isBuy?: boolean;
    isThresholdPipsMode?: boolean;
    sfPairID: string;
    thresholdInput: number;
}
export interface PairdtoManagePairInput {
    isEnabled?: boolean;
}
export interface PairdtoSetRateInput {
    rate: number;
}
export interface PairdtoUpdateRateSettingInput {
    isThresholdPipsMode?: boolean;
    settingID: string;
    thresholdInput?: number;
}
export interface QuotemanagerGetQuoteInput {
    amountA: number;
    isBuy?: boolean;
    pairId: string;
}
export interface QuotemanagerGetQuoteResponse {
    finalamount?: number;
    rawamount?: number;
    requireKYC?: boolean;
}
export interface ResponsesLoginResponse {
    token?: string;
}
export interface ResponsesOkResponse {
    message?: string;
}
export interface RolesdtoCreateSFRole {
    name: string;
}
export interface RolesdtoManageRoleAccessInput {
    addedAccessIds?: string[];
    removedAccessIds?: string[];
}
export interface RolesdtoUpdateSFRole {
    name: string;
}
export interface StorefrontstaffdtoCreateSFStaffInput {
    email: string;
    name: string;
}
export interface UserdtoCreateUserInput {
    email: string;
    idNumber?: string;
    infoMetadata: string;
    /** todo remove */
    walletAddress?: string;
}
export interface UserdtoWalletClipboard {
    content?: string;
    token?: string;
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
 * @title Merchant APIs
 * @version 1.0
 * @baseUrl /api/v1
 * @contact
 *
 * Swagger APIs Docs.
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
        getMe: (params?: RequestParams) => Promise<AxiosResponse<CommonmodelsSFStaffWithRoles, any>>;
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
        verify2Fa: (data: CommondtoVerify2FA, params?: RequestParams) => Promise<AxiosResponse<AuthcontrollerGetMeWithToken, any>>;
    };
    cashmanagement: {
        /**
         * @description Create fiat txn for staff
         *
         * @tags fiat management
         * @name CreateFiatTxnForStaff
         * @summary Create fiat txn for staff
         * @request POST:/cashmanagement/createstafftxn
         * @secure
         */
        createFiatTxnForStaff: (data: FiattxnhelperCreateCashTxnForStaffInput, params?: RequestParams) => Promise<AxiosResponse<ModelsSFFiatCurrencyTxn, any>>;
        /**
         * @description Create fiat stock txn
         *
         * @tags fiat management
         * @name CreateFiatStockTxn
         * @summary Create fiat stock txn
         * @request POST:/cashmanagement/createstocktxn
         * @secure
         */
        createFiatStockTxn: (data: FiattxnhelperCreateCashTxnInput, params?: RequestParams) => Promise<AxiosResponse<ModelsSFFiatCurrencyTxn, any>>;
        /**
         * @description Get fiat txns
         *
         * @tags fiat management
         * @name GetFiatTxns
         * @summary Get fiat txns
         * @request GET:/cashmanagement/txnlist/{fiatId}
         * @secure
         */
        getFiatTxns: (fiatId: string, query?: {
            /** page no for pagination */
            page?: number;
            /** limit no for pagination */
            limit?: number;
        }, params?: RequestParams) => Promise<AxiosResponse<ModelsSFFiatCurrencyTxn[], any>>;
    };
    currency: {
        /**
         * @description Create Currency
         *
         * @tags currency
         * @name CreateCurrency
         * @summary Create Currency
         * @request POST:/currency/create
         * @secure
         */
        createCurrency: (data: DtoCreateCurrencyInput, params?: RequestParams) => Promise<AxiosResponse<ModelsSFFiatCurrency, any>>;
        /**
         * @description Disable Currency
         *
         * @tags currency
         * @name DisableCurrency
         * @summary Disable Currency
         * @request PATCH:/currency/disable/{currencyID}
         * @secure
         */
        disableCurrency: (currencyId: string, params?: RequestParams) => Promise<AxiosResponse<ModelsSFFiatCurrency, any>>;
        /**
         * @description Get User
         *
         * @tags currency
         * @name GetCurrencies
         * @summary Get Currencies
         * @request GET:/currency/list
         * @secure
         */
        getCurrencies: (params?: RequestParams) => Promise<AxiosResponse<ModelsSFFiatCurrency[], any>>;
        /**
         * @description Update Currency
         *
         * @tags currency
         * @name UpdateCurrency
         * @summary Update Currency
         * @request PATCH:/currency/update/{currencyID}
         * @secure
         */
        updateCurrency: (currencyId: string, data: DtoUpdateCurrencyInput, params?: RequestParams) => Promise<AxiosResponse<ModelsSFFiatCurrency, any>>;
    };
    gas: {
        /**
         * @description IS SFWallet TRX Balance  Running Low
         *
         * @tags gas
         * @name IsSfWalletTrxBalanceRunningLow
         * @summary IS SFWallet TRX Balance  Running Low
         * @request GET:/gas/isTrxRunningLow/{address}
         * @secure
         */
        isSfWalletTrxBalanceRunningLow: (address: string, params?: RequestParams) => Promise<AxiosResponse<boolean, any>>;
        /**
         * @description Sync SFWallet TRX Balance
         *
         * @tags gas
         * @name SyncSfWalletTrxBalance
         * @summary Sync SFWallet TRX Balance
         * @request PATCH:/gas/synctrxwallet/{address}
         * @secure
         */
        syncSfWalletTrxBalance: (address: string, params?: RequestParams) => Promise<AxiosResponse<GasfeemanagerPaoa, any>>;
        /**
         * @description Get TRX Balance For SFWallet
         *
         * @tags gas
         * @name GetTrxBalanceForSfWallet
         * @summary Get TRX Balance For SFWallet
         * @request GET:/gas/trxbalance/{address}
         * @secure
         */
        getTrxBalanceForSfWallet: (address: string, params?: RequestParams) => Promise<AxiosResponse<GasfeemanagerPaoa, any>>;
    };
    invoice: {
        /**
         * @description Create C2F Invoice
         *
         * @tags invoice
         * @name CreateC2FInvoice
         * @summary Create C2F Invoice
         * @request POST:/invoice/c2f/create
         * @secure
         */
        createC2FInvoice: (data: InvoicedtoCreateC2FInvoiceInput, params?: RequestParams) => Promise<AxiosResponse<ModelsCryptoToFiatInvoice, any>>;
        /**
         * @description Get Opened C2F Invoices By ID
         *
         * @tags invoice
         * @name GetOpenedC2FInvoicesById
         * @summary Get Opened C2F Invoices By ID
         * @request GET:/invoice/c2f/get/{invoiceId}
         * @secure
         */
        getOpenedC2FInvoicesById: (invoiceId: string, params?: RequestParams) => Promise<AxiosResponse<CommonmodelsC2FInvoiceWithDetails, any>>;
        /**
         * @description Get All C2F Invoices
         *
         * @tags invoice
         * @name GetAllC2FInvoices
         * @summary Get All C2F Invoices
         * @request GET:/invoice/c2f/list
         * @secure
         */
        getAllC2FInvoices: (query?: {
            /** page no for pagination */
            page?: number;
            /** limit no for pagination */
            limit?: number;
            /** Status */
            status?: "OPEN" | "SUCCESS" | "FAILED";
        }, params?: RequestParams) => Promise<AxiosResponse<CommonmodelsC2FInvoiceWithDetails[], any>>;
        /**
         * @description Get All C2F Invoices By Staff
         *
         * @tags invoice
         * @name GetAllC2FInvoicesByStaff
         * @summary Get All C2F Invoices By Staff
         * @request GET:/invoice/c2f/my/list
         * @secure
         */
        getAllC2FInvoicesByStaff: (query?: {
            /** page no for pagination */
            page?: number;
            /** limit no for pagination */
            limit?: number;
            /** Status */
            status?: "OPEN" | "SUCCESS" | "FAILED";
        }, params?: RequestParams) => Promise<AxiosResponse<CommonmodelsC2FInvoiceWithDetails[], any>>;
        /**
         * @description Settle C2F Invoice
         *
         * @tags invoice
         * @name SettleC2FInvoice
         * @summary Settle C2F Invoice
         * @request POST:/invoice/c2f/settle/{invoiceId}
         * @secure
         */
        settleC2FInvoice: (invoiceId: string, data: InvoicedtoSettleC2FInvoiceInput, params?: RequestParams) => Promise<AxiosResponse<CommonmodelsC2FInvoiceWithDetails, any>>;
        /**
         * @description Get Opened C2F Invoices By UserId
         *
         * @tags invoice
         * @name GetOpenedC2FInvoicesByUserId
         * @summary Get Opened C2F Invoices By UserId
         * @request GET:/invoice/c2f/user/{userId}
         * @secure
         */
        getOpenedC2FInvoicesByUserId: (userId: string, params?: RequestParams) => Promise<AxiosResponse<CommonmodelsC2FInvoiceWithDetails[], any>>;
        /**
         * @description Create C2F Invoice
         *
         * @tags invoice
         * @name CreateF2CInvoice
         * @summary Create F2C Invoice
         * @request POST:/invoice/f2c/create
         * @secure
         */
        createF2CInvoice: (data: InvoicedtoCreateF2CInvoiceInput, params?: RequestParams) => Promise<AxiosResponse<ModelsFiatToCryptoInvoice, any>>;
        /**
         * @description Resend Email For Invoice
         *
         * @tags invoice
         * @name ResendEmailForInvoice
         * @summary Resend Email For Invoice
         * @request PATCH:/invoice/f2c/resendemail/{invoiceId}
         * @secure
         */
        resendEmailForInvoice: (invoiceId: string, params?: RequestParams) => Promise<AxiosResponse<ResponsesOkResponse, any>>;
        /**
         * @description Submit Wallet Address For Invoice
         *
         * @tags invoice
         * @name SubmitWalletAddressForInvoice
         * @summary Submit Wallet Address For Invoice
         * @request PATCH:/invoice/f2c/setWallet/{invoiceId}
         * @secure
         */
        submitWalletAddressForInvoice: (invoiceId: string, data: InvoicedtoSubmitWalletAddressInput, params?: RequestParams) => Promise<AxiosResponse<ResponsesOkResponse, any>>;
        /**
         * @description Get Quote
         *
         * @tags invoice
         * @name GetQuote
         * @summary Get Quote
         * @request POST:/invoice/quote
         * @secure
         */
        getQuote: (data: QuotemanagerGetQuoteInput, params?: RequestParams) => Promise<AxiosResponse<QuotemanagerGetQuoteResponse, any>>;
    };
    pair: {
        /**
         * @description Get Asset Configs
         *
         * @tags pair
         * @name GetAssetConfigs
         * @summary Get Asset Configs
         * @request GET:/pair/assetconfig
         * @secure
         */
        getAssetConfigs: (params?: RequestParams) => Promise<AxiosResponse<ModelsCryptoAssetConfig[], any>>;
        /**
         * @description Create Pair
         *
         * @tags pair
         * @name CreatePair
         * @summary Create Pair
         * @request POST:/pair/create
         * @secure
         */
        createPair: (data: PairdtoCreatePairInput, params?: RequestParams) => Promise<AxiosResponse<ModelsSFPair, any>>;
        /**
         * @description Create Rate Setting
         *
         * @tags pair
         * @name CreateRateSetting
         * @summary Create Rate Setting
         * @request POST:/pair/createratesetting
         * @secure
         */
        createRateSetting: (data: PairdtoCreateRateSettingInput, params?: RequestParams) => Promise<AxiosResponse<ModelsRateSetting, any>>;
        /**
         * @description Get Pairs
         *
         * @tags pair
         * @name GetPairs
         * @summary Get Pairs
         * @request GET:/pair/list
         * @secure
         */
        getPairs: (params?: RequestParams) => Promise<AxiosResponse<ModelsSFPair[], any>>;
        /**
         * @description Update Rate Setting
         *
         * @tags pair
         * @name UpdateRateSetting
         * @summary Update Rate Setting
         * @request PATCH:/pair/ratesetting/update
         * @secure
         */
        updateRateSetting: (data: PairdtoUpdateRateSettingInput, params?: RequestParams) => Promise<AxiosResponse<ModelsRateSetting, any>>;
    };
    ratemanager: {
        /**
         * @description Get Latest Pair Rates
         *
         * @tags ratemanager
         * @name GetLatestPairRates
         * @summary Get Latest Pair Rates
         * @request GET:/ratemanager/latestrates/{pairId}
         * @secure
         */
        getLatestPairRates: (pairId: string, params?: RequestParams) => Promise<AxiosResponse<ModelsRateHistory, any>>;
        /**
         * @description Manage Pair
         *
         * @tags ratemanager
         * @name ManagePair
         * @summary Manage Pair
         * @request PATCH:/ratemanager/managepair/{pairId}
         * @secure
         */
        managePair: (pairId: string, data: PairdtoManagePairInput, params?: RequestParams) => Promise<AxiosResponse<ResponsesOkResponse, any>>;
        /**
         * @description Get Pair Rate History
         *
         * @tags ratemanager
         * @name GetPairRateHistory
         * @summary Get Pair Rate History
         * @request GET:/ratemanager/ratehistory/{pairId}
         * @secure
         */
        getPairRateHistory: (pairId: string, query?: {
            /** page no for pagination */
            page?: number;
            /** limit no for pagination */
            limit?: number;
        }, params?: RequestParams) => Promise<AxiosResponse<ModelsRateHistory, any>>;
        /**
         * @description Set Pair Rate
         *
         * @tags ratemanager
         * @name SetPairRate
         * @summary Set Pair Rate
         * @request PATCH:/ratemanager/setrate/{settingId}
         * @secure
         */
        setPairRate: (settingId: string, data: PairdtoSetRateInput, params?: RequestParams) => Promise<AxiosResponse<ModelsRateHistory, any>>;
    };
    roles: {
        /**
         * @description Manage Role Accesses
         *
         * @tags roles
         * @name ManageRoleAccesses
         * @summary Manage Role Accesses
         * @request POST:/roles/access/manage/{roleId}
         * @secure
         */
        manageRoleAccesses: (roleId: string, data: RolesdtoManageRoleAccessInput, params?: RequestParams) => Promise<AxiosResponse<ResponsesOkResponse, any>>;
        /**
         * @description Get All Accesses
         *
         * @tags roles
         * @name GetAllAccesses
         * @summary Get All Accesses
         * @request GET:/roles/accesslist
         * @secure
         */
        getAllAccesses: (params?: RequestParams) => Promise<AxiosResponse<ModelsSFRoleAccess, any>>;
        /**
         * @description Assign Role to Staff
         *
         * @tags roles
         * @name AssignRoleToStaff
         * @summary Assign Role to Staff
         * @request PATCH:/roles/assign/{roleId}/{staffId}
         * @secure
         */
        assignRoleToStaff: (roleId: string, staffId: string, params?: RequestParams) => Promise<AxiosResponse<ResponsesOkResponse, any>>;
        /**
         * @description Create Role
         *
         * @tags roles
         * @name CreateRole
         * @summary Create Role
         * @request POST:/roles/create
         * @secure
         */
        createRole: (data: RolesdtoCreateSFRole, params?: RequestParams) => Promise<AxiosResponse<ModelsSFStaff, any>>;
        /**
         * @description Detach Role from Staff
         *
         * @tags roles
         * @name DetachRoleFromStaff
         * @summary Detach Role from Staff
         * @request PATCH:/roles/detach/{roleId}/{staffId}
         * @secure
         */
        detachRoleFromStaff: (roleId: string, staffId: string, params?: RequestParams) => Promise<AxiosResponse<ResponsesOkResponse, any>>;
        /**
         * @description Disable Role
         *
         * @tags roles
         * @name DisableRole
         * @summary Disable Role
         * @request PATCH:/roles/disable/{roleId}
         * @secure
         */
        disableRole: (roleId: string, params?: RequestParams) => Promise<AxiosResponse<ResponsesOkResponse, any>>;
        /**
         * @description Get Roles List
         *
         * @tags roles
         * @name GetRolesList
         * @summary Get Roles List
         * @request GET:/roles/list
         * @secure
         */
        getRolesList: (query?: {
            /** page no for pagination */
            page?: number;
            /** limit no for pagination */
            limit?: number;
        }, params?: RequestParams) => Promise<AxiosResponse<CommonmodelsSFRoleWithAccesses[], any>>;
        /**
         * @description Update Role
         *
         * @tags roles
         * @name UpdateRole
         * @summary Update Role
         * @request PATCH:/roles/update/{roleId}
         * @secure
         */
        updateRole: (roleId: string, data: RolesdtoUpdateSFRole, params?: RequestParams) => Promise<AxiosResponse<ModelsSFRole, any>>;
    };
    sfcryptowallet: {
        /**
         * @description Get SFWallet
         *
         * @tags SFWallet
         * @name GetSfWallet
         * @summary Get SFWallet
         * @request GET:/sfcryptowallet/list
         * @secure
         */
        getSfWallet: (params?: RequestParams) => Promise<AxiosResponse<ModelsSFCryptoWallet, any>>;
        /**
         * @description Get SFWallet Asset Txns
         *
         * @tags SFWallet
         * @name GetSfWalletAssetTxns
         * @summary Get SFWallet Asset Txns
         * @request GET:/sfcryptowallet/txns/{assetId}
         * @secure
         */
        getSfWalletAssetTxns: (assetId: string, query?: {
            /** page no for pagination */
            page?: number;
            /** limit no for pagination */
            limit?: number;
        }, params?: RequestParams) => Promise<AxiosResponse<ModelsSFCryptoAssetTxn, any>>;
    };
    staff: {
        /**
         * @description Create Storefront Staff
         *
         * @tags storefront staff
         * @name CreateStorefrontStaff
         * @summary Create Storefront Staff
         * @request POST:/staff/create
         * @secure
         */
        createStorefrontStaff: (data: StorefrontstaffdtoCreateSFStaffInput, params?: RequestParams) => Promise<AxiosResponse<ModelsSFStaff, any>>;
        /**
         * @description Disable  Storefront Staff
         *
         * @tags storefront staff
         * @name DisableStorefrontStaff
         * @summary Disable  Storefront Staff
         * @request PATCH:/staff/disable/{staffID}
         */
        disableStorefrontStaff: (staffId: string, params?: RequestParams) => Promise<AxiosResponse<ModelsSFStaff, any>>;
        /**
         * @description Storefront Staff List
         *
         * @tags storefront staff
         * @name StorefrontStaffList
         * @summary Storefront Staff List
         * @request GET:/staff/list
         * @secure
         */
        storefrontStaffList: (query?: {
            /** page no for pagination */
            page?: number;
            /** limit no for pagination */
            limit?: number;
        }, params?: RequestParams) => Promise<AxiosResponse<CommonmodelsSFStaffWithRoles[], any>>;
    };
    user: {
        /**
         * @description Create User
         *
         * @tags user
         * @name CreateUser
         * @summary Create User
         * @request POST:/user/create
         * @secure
         */
        createUser: (data: UserdtoCreateUserInput, params?: RequestParams) => Promise<AxiosResponse<ModelsUser, any>>;
        /**
         * @description Get User By Email
         *
         * @tags user
         * @name GetUserByEmail
         * @summary Get User By Email
         * @request GET:/user/get/{email}
         * @secure
         */
        getUserByEmail: (email: string, params?: RequestParams) => Promise<AxiosResponse<ModelsUser, any>>;
        /**
         * @description Wallet Clipboard
         *
         * @tags user
         * @name WalletClipboard
         * @summary Wallet Clipboard
         * @request POST:/user/walletclipboard
         */
        walletClipboard: (data: UserdtoWalletClipboard, params?: RequestParams) => Promise<AxiosResponse<ResponsesOkResponse, any>>;
        /**
         * @description Get User Crypto Txns
         *
         * @tags user
         * @name GetUserCryptoTxns
         * @summary Get User Crypto Txns
         * @request GET:/user/{userId}/crypto/deposits
         * @secure
         */
        getUserCryptoTxns: (userId: string, query?: {
            /** page no for pagination */
            page?: number;
            /** limit no for pagination */
            limit?: number;
            /** Status */
            status?: "NOT_INITIALIZED" | "FAILED" | "PENDING" | "CONFIRMING" | "SUCCESS";
            /** onlyUnassigned */
            onlyUnassigned?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<ModelsUser, any>>;
    };
}
//# sourceMappingURL=merchantSDK.d.ts.map
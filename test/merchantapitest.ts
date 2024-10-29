import { authenticator } from "otplib";
import { MerchantClient, MerchantApiSDK } from "../src/clients/merchantclient";
import { AxiosError } from "axios";
import { fa, faker, tr } from "@faker-js/faker";

let client: MerchantApiSDK;

const performLogin = async () => {
  try {
    const url = process.env.MERCHANT_API_URL
      ? process.env.MERCHANT_API_URL
      : "";
    const nonAuthClient = new MerchantClient().init({
      url,
    });

    const resp = await nonAuthClient.auth.login({
      email: process.env.MERCHANT_EMAIL!,
      password: process.env.MERCHANT_PASSWORD!,
    });

    return resp.data.token;
  } catch (err) {
    const error = err as AxiosError;
    console.error("Sasasas", error.response?.data);
  }
};

const perform2FALogin = async (jwtToken: string) => {
  try {
    const url = process.env.MERCHANT_API_URL
      ? process.env.MERCHANT_API_URL
      : "";
    const nonAuthClient = new MerchantClient().init({
      url,
      jwtToken,
    });

    const otp = authenticator.generate(process.env.OTP_SECRET!);

    const resp = await nonAuthClient.auth.verify2Fa({
      otp,
    });
    return resp.data.token;
  } catch (err) {
    const error = err as AxiosError;
    console.error("Sasasas", error.response?.data);
  }
};

const setup = async () => {
  const loginJWT = await performLogin();
  const finalJWT = await perform2FALogin(loginJWT!);

  const url = process.env.MERCHANT_API_URL ? process.env.MERCHANT_API_URL : "";
  client = new MerchantClient().init({
    url,
    jwtToken: finalJWT,
  });
};

const cashmanagementtest = async () => {
  //   const currencyList = await client.currency.getCurrencies();
  //   console.log("currencyList", currencyList.data);

  const fiatID = "4c47e043-0ecc-45f6-b241-4519f7ce178c";
  const createTxnInput = await client.cashmanagement.createFiatStockTxn({
    fiatCurrencyId: fiatID,
    denominations: [
      {
        denominationId: "0ec1604f-f085-4685-9a7c-c698a01e2471",
        quantity: 1,
      },
    ],
    isDebit: true,
  });

  console.log("createTxnInput", createTxnInput.data);

  // const staffID = "3a9534fa-8cf3-4e19-b0ad-61098bc76319";
  // const createFiatTxnForStaffResp = await client.cashmanagement.createFiatTxnForStaff({
  //   denominations: [

  //         {
  //           denominationId: "5a33bc57-1c45-4bf0-b99d-7e475a22c7c0",
  //           quantity:500
  //       },
  //   ],
  //   fiatCurrencyId: fiatID,
  //   staffId: staffID,
  //   isDebit: false,
  // });
  //   console.log("createFiatTxnForStaffResp",createFiatTxnForStaffResp.data)

  // const fiatTxns = await client.cashmanagement.getFiatTxns(fiatID)

  // console.log("fiatTxns",fiatTxns.data)
};

const currencytest = async () => {
  const currencyList = await client.currency.getCurrencies();
  console.log("currencyList", currencyList.data);

  const currencyCreate = await client.currency.createCurrency({
    decimals: 10,
    denominations: [10, 50, 100, 500],
    name: "INR",
    rounding: 5,
  });

  console.log("currencyCreate", currencyCreate.data);

  // const currencyID = "21f874ca-eda0-4090-9d66-cb9b0400f6ef"
  // const disableResp = await client.currency.disableCurrency(currencyID)
  // console.log("disableResp",disableResp.data)
};

const rolesTest = async () => {
  const roleList = await client.roles.getRolesList();
  console.log("rolelist", roleList.data);

  const roleID = roleList.data[0].id!;
  // const createRoleResp = await client.roles.createRole({
  //     name:`Role-${roleList.data.length+1}`
  // })
  // console.log("createRoleResp", createRoleResp.data)

  // const updateRoleResp = await client.roles.updateRole(roleID, {
  //        name:"Role1"
  //    })
  // console.log("updateRoleResp", updateRoleResp.data)

  //  const accessList = await client.roles.getAllAccesses()
  // console.log("accessList", accessList.data)

  // const assistAccessResp = await client.roles.manageRoleAccesses(roleID, {
  //     addedAccessIds:["cm1sfulni0000139b4my6761l"]
  //     // removedAccessIds:["cm1sfulni0000139b4my6761l"]

  // })

  // console.log("assistAccessResp",assistAccessResp.data)

  const assignRole = await client.roles.assignRoleToStaff(
    roleID,
    "44c772a0-9b21-423b-bb13-b335c758cfc3"
  );
  console.log("assignRole", assignRole.data);

  // const detachRole = await client.roles.detachRoleFromStaff(roleID, "44c772a0-9b21-423b-bb13-b335c758cfc3")
  // console.log("detachRole",detachRole.data)
};

const sfStaffTest = async () => {
  const sfList = await client.staff.storefrontStaffList();
  console.log("sfList", sfList.data);

  // const createSF = await client.staff.createStorefrontStaff({
  //     name: faker.person.fullName(),
  //     email:faker.internet.email()
  // })
  // console.log("createSF", createSF.data)
};

const sfWalletTest = async () => {
  // const getRespWalletResp = await client.sfcryptowallet.getSfWallet()
  // console.log("getRespWalletResp", getRespWalletResp.data)

  // const ASSET_ID = "6387e5ef-731d-4cb8-9d08-79e1fd3cbb62"
  // const assetTxns = await client.sfcryptowallet.getSfWalletAssetTxns(ASSET_ID)
  // console.log("assetTxns", assetTxns.data)

  const assetID = "6387e5ef-731d-4cb8-9d08-79e1fd3cbb62";

  const getSfWalletAssetTxnsResp =
    await client.sfcryptowallet.getSfWalletAssetTxns(assetID);
  console.log("getSfWalletAssetTxnsResp", getSfWalletAssetTxnsResp.data);
};

const sfUsersTest = async () => {
  // let count = 0;
  // const maxCount = 25;

  // for (const address of topholderAddress) {
  //   const createUserResp = await client.user.createUser({
  //     email: faker.internet.email(),
  //     idNumber: faker.vehicle.vin(),
  //     infoMetadata: JSON.stringify({}),
  //     // walletAddress: address.Account,
  //   });
  //   console.log("createUserResp", createUserResp.data);
  //   count++;

  //   if (count > maxCount) {
  //     return;
  //   }
  // }

  const userId = "e112e306-20c6-4244-9dd1-29f350b18535";

  const getUserCryptoTxns = await client.user.getUserCryptoTxns(userId, {
    status: "SUCCESS",
    onlyUnassigned: true,
  });
  console.log("getUserCryptoTxns", getUserCryptoTxns.data);

  // const userEmail = "celia.schaden78@yahoo.com"
  // const user = await client.user.getUserByEmail(userEmail)
  // console.log("user",user.data)
};

const sfRateManagement = async () => {
  const pairID = "f78fe54b-40e5-4e8c-b338-844c656357e2";

  const pairResp = await client.pair.getPairs();
  console.log("pairResp", pairResp.data);
  // const getLatestPairRatesResp = await client.ratemanager.getLatestPairRates(pairID)
  // console.log("getLatestPairRates",getLatestPairRatesResp.data)

  // const setPairRateResp = await client.ratemanager.setPairRate("91e258e4-db81-482e-a0c1-d8b80465e4a8", {
  //   rate:160
  // })
  // console.log("setPairRate",setPairRateResp.data)

  // const getLatestPairRatesResp = await client.ratemanager.getPairRateHistory(pairID )
  // console.log("getLatestPairRates",getLatestPairRatesResp.data)
};

const sfc2fInvoice = async () => {
  const pairID = "f78fe54b-40e5-4e8c-b338-844c656357e2";
  // const getQuote = await client.invoice.getQuote({
  //   amountA: 12000,
  //   isBuy: true,
  //   pairId:pairID
  // })
  // console.log("getQuote", getQuote.data)

  // const userId = "e112e306-20c6-4244-9dd1-29f350b18535"
  // const createC2FInvoice = await client.invoice.createC2FInvoice({
  //   pairId: pairID,
  //   userId
  // })
  // console.log("createC2FInvoice", createC2FInvoice.data)

  // const getAllC2FInvoicesResp = await client.invoice.getAllC2FInvoicesByStaff({
  //   status: "SUCCESS",
  // })
  // console.log("getAllC2FInvoices",getAllC2FInvoicesResp.data)

  // const getAllC2FInvoicesByStaff = await client.invoice.getAllC2FInvoicesByStaff({
  //   status:"OPEN"
  // })
  // console.log("getAllC2FInvoicesByStaff", getAllC2FInvoicesByStaff.data)

  const settleC2FInvoiceResp = await client.invoice.settleC2FInvoice("ebdf95d1-50ec-4c5d-854b-dac6e2548f7d", {
    denominations: [
      {
        denominationId: "5a33bc57-1c45-4bf0-b99d-7e475a22c7c0",
        quantity:1
      }
    ],
    cryptotxnids: [
    "cm2g6ni1g0000ka4dotdvb647"
    ]
  })
  console.log("settleC2FInvoiceResp", settleC2FInvoiceResp.data)

  // const invoice  = await client.invoice.getOpenedC2FInvoicesById("ebdf95d1-50ec-4c5d-854b-dac6e2548f7d")
  // console.log("Saasasa",invoice.data)

  // const userInvoice = await client.invoice.getOpenedC2FInvoicesByUserId("e112e306-20c6-4244-9dd1-29f350b18535")
  // console.log("userInvoice",userInvoice.data)


};

const sfPairTest = async () => {
  const getPairsResp = await client.pair.getPairs();
  console.log("getPairsResp", getPairsResp.data);

  // const getAssetConfigsResp = await client.pair.getAssetConfigs()
  // console.log("getAssetConfigsResp",getAssetConfigsResp.data)

  // const ASSET_ID = "7c81e835-9d67-4e36-aee1-fb7bde51d1da";
  // const FIAT_ID = "4c47e043-0ecc-45f6-b241-4519f7ce178c";

  // const createPairResp = await client.pair.createPair({
  //   cryptoAssetConfigId: ASSET_ID,
  //   fiatId: FIAT_ID,
  //   kycRequiredAmount: 10000,
  //   minCryptoAmount: 10000,
  //   maxCryptoAmount: 1000,
  // });
  // console.log("createPairResp", createPairResp.data);

  // const pairID = "f78fe54b-40e5-4e8c-b338-844c656357e2"
  // const createRateSettingResp = await client.pair.createRateSetting({
  //   sfPairID: pairID,
  //   isBuy: false,
  //   thresholdInput: 0.1,
  //   isThresholdPipsMode:false
  // })
  // console.log("createRateSetting",createRateSettingResp.data)

  // const settingID = "91e258e4-db81-482e-a0c1-d8b80465e4a8"
  // const updateRateSettingResp = await client.pair.updateRateSetting({
  //   settingID:settingID,
  //   isThresholdPipsMode: false,
  //   thresholdInput:5
  // })
  // console.log("updateRateSettingResp",updateRateSettingResp.data)
};



const f2cInvoice = async () => {
  const pairID = "f78fe54b-40e5-4e8c-b338-844c656357e2";
  // const getQuote = await client.invoice.getQuote({
  //   amountA: 200,
  //   isBuy: false,
  //   pairId:pairID
  // }) 
  // console.log("getQuote", getQuote.data)
  
  const userId = "e112e306-20c6-4244-9dd1-29f350b18535"

  // const invoiceResp = await client.invoice.createF2CInvoice({
  //   denominations: [
  //     {
  //       denominationId: "5a33bc57-1c45-4bf0-b99d-7e475a22c7c0",
  //       quantity:1
  //     }
  //   ],
  //   pairId: pairID,
  //   userId

  // })

  // console.log("invoiceResp",invoiceResp.data)


  // const invoiceId = "1c90dde2-d8df-4daa-9615-6017e2806efb"
  // const submitWalletAddressForInvoice = await client.invoice.submitWalletAddressForInvoice(invoiceId, {
  //   walletAddress:"TMkcaxKdCuzK4rNwwcj4fEmk7UJhB9moBB",
  // })
  // console.log("submitWalletAddressForInvoice",submitWalletAddressForInvoice.data)


  
}


const gasTest = async () => {
  const wallet = "TDMCqr7KVN57jJMAKNctbW61K1FxbM7mKT"
  // const isSfWalletTrxBalanceRunningLow = await client.gas.isSfWalletTrxBalanceRunningLow(wallet)
  // console.log("isSfWalletTrxBalanceRunningLow",isSfWalletTrxBalanceRunningLow.data)
  const getTrxBalanceForSfWallet = await client.gas.getTrxBalanceForSfWallet("TDMCqr7KVN57jJMAKNctbW61K1FxbM7mKT")
  console.log("getTrxBalanceForSfWallet",getTrxBalanceForSfWallet.data)


  // const syncSfWalletTrxBalance = await client.gas.syncSfWalletTrxBalance(wallet)
  // console.log("syncSfWalletTrxBalance",syncSfWalletTrxBalance.data)
  
}
const main = async () => {
  await setup();
  try {
    // await currencytest()
    // await rolesTest()
    // await sfStaffTest()
    // await sfWalletTest()
    // await cashmanagementtest();
    // await sfUsersTest()
    // await sfPairTest();
    // await sfRateManagement()
    // await sfUsersTest();
    // await sfc2fInvoice()
    // await f2cInvoice()
    await gasTest()
  } catch (err) {
    const error = err as AxiosError;
    console.error("Sasasas", error.response?.data);
  }
};

main();

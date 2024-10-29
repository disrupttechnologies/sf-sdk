import { authenticator } from "otplib";
import { AdminSDKClient, AdminApiSDK } from "../src/clients/adminclient";
import { AxiosError } from "axios";

import { fa, faker } from "@faker-js/faker";

let client: AdminApiSDK;

const performLogin = async () => {
  const url = process.env.ADMIN_API_URL ? process.env.ADMIN_API_URL : "";
  const nonAuthClient = new AdminSDKClient().init({
    url,
  });

  const resp = await nonAuthClient.auth.login({
    email: process.env.ADMIN_EMAIL!,
    password: process.env.ADMIN_PASSWORD!,
  });

  return resp.data.token;
};

const perform2FALogin = async (jwtToken: string) => {
  const url = process.env.ADMIN_API_URL ? process.env.ADMIN_API_URL : "";
  const nonAuthClient = new AdminSDKClient().init({
    url,
    jwtToken,
  });

  const otp = authenticator.generate(process.env.OTP_SECRET!);

  const resp = await nonAuthClient.auth.verify2Fa({
    otp,
  });

  return resp.data.token;
};

const setup = async () => {
  const loginJWT = await performLogin();
  const finalJWT = await perform2FALogin(loginJWT!);

  const url = process.env.ADMIN_API_URL ? process.env.ADMIN_API_URL : "";
  client = new AdminSDKClient().init({
    url,
    jwtToken: finalJWT,
  });
};

const storefrontTest = async () => {
  // create storefront
  // const createResp = await client.storefront.createStorefront({
  //     address: faker.location.secondaryAddress(),
  //     metadata:JSON.stringify({}),
  //     name:faker.person.fullName(),
  // timezone:  faker.location.timeZone()
  // })
  // console.log("createResp",createResp.data)

  const sfList = await client.storefront.storefrontList();
//   console.log("sfList", sfList.data);

  const SFID = sfList.data[0].id!;
    // const createSFOwner = await client.storefront.createStorefrontOwner(
    //   SFID,
    //   {
    //     email: faker.internet.email(),
    //     name: faker.person.fullName(),
    //   }
    // );
    //   console.log("createSFOwner", createSFOwner.data);
    


    const sfOwners = await client.storefront.getStorefrontOwners(SFID)
    console.log("sfOwners",sfOwners.data)
};

const main = async () => {
  await setup();

  try {
    await storefrontTest();

    // var resp = await client.storefront.updateStorefront("97c0498a-24e2-40bb-9612-751600fce5a9", {
    //     timezone:  faker.location.timeZone(),
    // })

    // var resp = await client.storefront.createStorefrontOwner("97c0498a-24e2-40bb-9612-751600fce5a9", {
    //     email: faker.internet.email(),
    //     name:faker.person.fullName()
    // })

    // var resp = await client.storefront.createStorefrontOwner("97c0498a-24e2-40bb-9612-751600fce5a9", {
    //     email: faker.internet.email(),
    //     name:faker.person.fullName()
    // })

    // var resp = await client.storefront.getStorefrontOwners("97c0498a-24e2-40bb-9612-751600fce5a9")
  } catch (err) {
    const error = err as AxiosError;

    console.error("Sasasas", error.response?.data);
  }
};

main();

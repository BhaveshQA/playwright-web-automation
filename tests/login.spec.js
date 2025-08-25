import { test } from "../utils/BaseTest.js";
import { expect } from "@playwright/test";
import { CommonUtils } from "../utils/CommonUtils.js";
import loginData from "../test-data/loginData.json" assert { type: "json" };

// ✅ All tests grouped under describe
test.describe.serial("Login test functionality", () => {
  test("Login with valid input", async ({ loginPage }) => {
    await loginPage.userLogin(
      loginData.validUser.username,
      loginData.validUser.password
    );
    const sucemsg = await loginPage.getAlertMessage();
    expect(sucemsg).toContain("You logged into a secure area!");
  });

  test("Login with Invalid username and password", async ({ loginPage }) => {
    await loginPage.userLogin("invalid", "invalid!");
    const errMsg = await loginPage.getAlertMessage();
    expect(errMsg).toContain("Your username is invalid!");
  });

  test("Login with valid username and invalid password", async ({
    loginPage,
  }) => {
    await loginPage.userLogin("tomsmith", "invalid");
    const errMsg = await loginPage.getAlertMessage();
    expect(errMsg).toContain("Your password is invalid!");
  });

  test("Login with Invalid username and Valid password", async ({
    loginPage,
  }) => {
    await loginPage.userLogin("invalid", "SuperSecretPassword!");
    const errMsg = await loginPage.getAlertMessage();
    expect(errMsg).toContain("Your username is invalid!");
  });

 /* test("Multiple Login data using the loop", async ({ loginPage }) => {
    for (const [key, data] of Object.entries(loginData)) {
      await loginPage.userLogin(data.username, data.password);
      if (key === "validUser") {
        const sucemsg = await loginPage.getAlertMessage();
        expect(sucemsg).toContain("You logged into a secure area!");
        await loginPage.clickLogout();
      } else {
        const errMsg = await loginPage.getAlertMessage();
        expect(errMsg).toContain("Your username is invalid!");
      }
    }
  });*/
});

const { test } = require("../utils/BaseTest");
const { expect } = require("@playwright/test");
//const { LoginPage } = require("../pages/LoginPage");
const { CommonUtils } = require("../utils/CommonUtils");
const loginData = require("../test-data/loginData.json");

test.describe("Login test functionality", async () => {
  //let loginpage;
  //loginpage = new LoginPage(page);
  /* test.beforeEach("URL & Object Setup", async ({ page }) => {
    loginpage = new LoginPage(page);
    CommonUtils.logStep("URL Launch");
    await page.goto("https://the-internet.herokuapp.com/login");
  }); */

  test("Login in valid input", async ({ page }) => {
    await loginpage.userLogin(
      loginData.validUser.username,
      loginData.validUser.password
    );
    const sucemsg = await loginpage.getAlertMessage();
    expect(sucemsg).toContain("You logged into a secure area!");
  });

  test("Login with Invalid username and password", async ({ page }) => {
    await loginpage.userLogin("invalid", "invalid!");
    const errMsg = await loginpage.getAlertMessage();
    expect(errMsg).toContain("Your username is invalid!");
  });

  test("Login with valid username and invalid password", async ({ page }) => {
    await loginpage.userLogin("tomsmith", "invalid");
    const errMsg = await loginpage.getAlertMessage();
    expect(errMsg).toContain("Your password is invalid!");
  });

  test("Login with Invalid username and Valid password", async ({ page }) => {
    await loginpage.userLogin("invalid", "SuperSecretPassword!");
    const errMsg = await loginpage.getAlertMessage();
    expect(errMsg).toContain("Your username is invalid!");
  });

  test("Multiple Login data using the loop", async ({ loginPage }) => {
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
  });
});

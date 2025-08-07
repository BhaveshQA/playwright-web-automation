const { test: base } = require("@playwright/test");
const { CheckboxPage } = require("../pages/CheckboxPage");
const { LoginPage } = require("../pages/LoginPage");
const { WebTablePage } = require("../pages/WebTablePage");

const baseURL = "https://the-internet.herokuapp.com/";

exports.test = base.extend({
  page: async ({ page }, use) => {
    // This runs beforeEach
    await page.goto(baseURL);
    console.log("Navigated to base URL: " + baseURL);
    await use(page);
    //This runs afterEach
    console.log("Test finished. Can add cleanup if needed.");
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  WebTablePage: async ({ page }, use) => {
    const webpageObj = new WebTablePage(page);
    await use(webpageObj);
  },

  CheckboxPage: async ({ page }, use) => {
    const checkboxpage = new CheckboxPage(page);
    await use(checkboxpage);
  },
});

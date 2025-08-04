const { test: base } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");

const baseURL = "https://the-internet.herokuapp.com/login";

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
});

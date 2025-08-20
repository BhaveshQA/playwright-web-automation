import { test as base } from "@playwright/test";
import { captureScreenshot } from "../utils/CommonUtils.js";
import CheckboxPage from "../pages/CheckboxPage.js";
import LoginPage from "../pages/LoginPage.js";
import WebTablePage from "../pages/WebTablePage.js";
import FrameActionPage from "../pages/FramesPage.js";
import AlertHandle from "../pages/alertHandlePage.js";

const baseURL = "https://the-internet.herokuapp.com/";

export const test = base.extend({
  page: async ({ page }, use, testInfo) => {
    // This runs beforeEach
    await page.goto(baseURL);
    console.log("Navigated to base URL: " + baseURL);

    await use(page);

    // This runs afterEach
    console.log("Test finished. Can add cleanup if needed.");

    if (testInfo.status === "failed") {
      await captureScreenshot(testInfo, page, testInfo.title, "failed");
    } else {
      await captureScreenshot(testInfo, page, testInfo.title, "passed");
    }
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

  FrameActionPage: async ({ page }, use) => {
    const framespage = new FrameActionPage(page);
    await use(framespage);
  },

  AlertHandle: async ({ page }, use) => {
    const alertpage = new AlertHandle(page);
    await use(alertpage);
  },
});

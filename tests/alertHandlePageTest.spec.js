import { test } from "../utils/BaseTest.js";

test.describe("Alert Hadle", async () => {
  test("Validate when click on JS alert", async ({ AlertHandle }) => {
    await AlertHandle.clickOnAlert();
  });

  test("Validate when click on cancel or ok button from alert", async ({
    AlertHandle,
  }) => {
    await AlertHandle.clickOnConfirmCancelBtn(true);
  });

  test("Validate JS prompt alert", async ({ AlertHandle }) => {
    await AlertHandle.clickonJSPrompt();
  });
});

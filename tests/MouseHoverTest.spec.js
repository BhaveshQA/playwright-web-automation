import { test } from "../utils/BaseTest.js";

test.describe.serial("Mouse hover Verification", async () => {
  test("Click on the mouse hover menu link", async ({ MouseAction }) => {
    await MouseAction.clickOnHoverMenu();
  });

  test("Print text of all images", async ({ MouseAction }) => {
    await MouseAction.getListOfImagesText();
  });

  test("Verify click on particular user view profile link", async ({
    MouseAction,
  }) => {
    await MouseAction.clickOnUserViewProfileLink();
  });
});

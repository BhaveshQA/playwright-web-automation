const { test } = require("../utils/BaseTest");
const { expect } = require("@playwright/test");

test.describe("Checkbox page verification", async () => {
  test("Validate checkbox selected or deselected", async ({ CheckboxPage }) => {
    await CheckboxPage.isCheckboxCheckUnCheck();
  });

  test("Validate check only unchecked checkbox", async ({ CheckboxPage }) => {
    await CheckboxPage.selectOnlyUncheckedCheckbox();
  });

  test("Validate unselect already selected checkbox", async ({
    CheckboxPage,
  }) => {
    await CheckboxPage.uncheckSelectedCheckboxOnly();
  });
});

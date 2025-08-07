const { test } = require("../utils/BaseTest");
const { expect } = require("@playwright/test");

test.describe("Table Component Autoamtion", async () => {
  test("Print all data of given table", async ({ WebTablePage }) => {
    await WebTablePage.printTableData();
  });
});

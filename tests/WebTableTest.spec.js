import { test } from "../utils/BaseTest.js";
import { expect } from "@playwright/test";

test.describe("Table Component Automation", () => {
  test("Print all data of given table", async ({ WebTablePage }) => {
    await WebTablePage.printTableData();
  });
});

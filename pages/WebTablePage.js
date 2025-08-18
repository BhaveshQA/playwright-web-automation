export class WebTablePage {
  constructor(page) {
    this.page = page;
    this.WebTableLink = page.locator('a[href="/tables"]');
    this.rows = page.locator("#table1 tbody tr"); // ✅ corrected selector
  }

  async printTableData() {
    await this.WebTableLink.click();
    await this.page.waitForSelector("#table1 tbody tr"); // ✅ wait for table

    const rowCount = await this.rows.count();
    console.log("Total Rows:", rowCount);

    for (let i = 0; i < rowCount; i++) {
      let row = this.rows.nth(i);
      let columns = row.locator("td");
      let columnsCount = await columns.count();

      let rowData = "";
      for (let j = 0; j < columnsCount; j++) {
        let text = await columns.nth(j).textContent();
        rowData += (text?.trim() ?? "") + " | ";
      }
      console.log(`Row ${i + 1}: ${rowData}`);
    }
  }
}

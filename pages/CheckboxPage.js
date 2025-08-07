const { expect } = require("@playwright/test");

class CheckboxPage {
  constructor(page) {
    this.page = page;
    this.checkboxpageLink = page.locator('a[href="/checkboxes"]');
    this.checkboxes = page.locator('input[type="checkbox"]');
  }

  async getCheckboxList() {
    await this.checkboxpageLink.click();
    await this.page.waitForSelector('input[type="checkbox"]');
  }
  async isCheckboxCheckUnCheck() {
    /* await this.checkboxpageLink.click();
    await this.page.waitForSelector('input[type="checkbox"]'); */
    await this.getCheckboxList();
    const count = await this.checkboxes.count();
    console.log("Checkbox count : " + count);
    for (let i = 0; i < count; i++) {
      const isValue = await this.checkboxes.nth(i).isChecked();
      if (!isValue) {
        console.log(
          "Checkbox checked " + (await this.checkboxes.nth(i).click())
        );
      } else {
        console.log(
          "Checkbox unchecked  " + (await this.checkboxes.nth(i).click())
        );
      }
    }
  }
  async selectOnlyUncheckedCheckbox() {
    await this.getCheckboxList();
    const count = await this.checkboxes.count();
    for (let i = 0; i < count; i++) {
      let isValue = await this.checkboxes.nth(i).isChecked();
      if (!isValue) {
        console.log("Click on checkbox");
        await this.checkboxes.nth(i).click();
        console.log(`Checkbox No is selected ${i + 1}`);
        expect(await this.checkboxes.nth(i).isChecked()).toBe(true);
      }
    }
  }

  async uncheckSelectedCheckboxOnly() {
    await this.getCheckboxList();
    const count = await this.checkboxes.count();
    for (let i = 0; i < count; i++) {
      let isSelected = await this.checkboxes.nth(i).isChecked();
      if (isSelected) {
        await this.checkboxes.nth(i).click();
        console.log(`Checkbox No is unselected ${i + 1}`);
        expect(await this.checkboxes.nth(i).isChecked()).toBe(false);
      }
    }
  }
}
module.exports = { CheckboxPage };

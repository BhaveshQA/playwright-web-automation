import { expect } from "@playwright/test";

export class CheckboxPage {
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
    await this.getCheckboxList();
    const count = await this.checkboxes.count();
    console.log("Checkbox count : " + count);

    for (let i = 0; i < count; i++) {
      const isValue = await this.checkboxes.nth(i).isChecked();
      if (!isValue) {
        await this.checkboxes.nth(i).click();
        console.log(`Checkbox ${i + 1} is now checked`);
      } else {
        await this.checkboxes.nth(i).click();
        console.log(`Checkbox ${i + 1} is now unchecked`);
      }
    }
  }

  async selectOnlyUncheckedCheckbox() {
    await this.getCheckboxList();
    const count = await this.checkboxes.count();

    for (let i = 0; i < count; i++) {
      const isValue = await this.checkboxes.nth(i).isChecked();
      if (!isValue) {
        await this.checkboxes.nth(i).click();
        console.log(`Checkbox No ${i + 1} selected`);
        await expect(this.checkboxes.nth(i)).toBeChecked();
      }
    }
  }

  async uncheckSelectedCheckboxOnly() {
    await this.getCheckboxList();
    const count = await this.checkboxes.count();

    for (let i = 0; i < count; i++) {
      const isSelected = await this.checkboxes.nth(i).isChecked();
      if (isSelected) {
        await this.checkboxes.nth(i).click();
        console.log(`Checkbox No ${i + 1} unselected`);
        await expect(this.checkboxes.nth(i)).not.toBeChecked();
      }
    }
  }
}

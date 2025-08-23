import { expect, Page } from "@playwright/test";

export default class KeyActionPage {
  /**@param{Page} page */
  constructor(page) {
    this.page = page;
    this.clickOnKeyPressMenuLink = page.locator('a[href="/key_presses"]');
    this.inputBox = page.locator("#target");
    this.resultText = page.locator("#result");
  }

  async clickOnKeyPressMenu() {
    await this.clickOnKeyPressMenuLink.click();
    const currentURL = this.page.url();
    expect(currentURL).toBe("https://the-internet.herokuapp.com/key_presses");
    await this.inputBox.click();
  }

  async printText() {
    const resultMsg = await this.resultText.textContent();
    console.log("User press :", resultMsg);
  }
  async pressEnterKey() {
    await this.clickOnKeyPressMenu();
    await this.page.keyboard.press("Enter");
    await this.printText();
  }

  async enterTextUsingKeyboard() {
    await this.clickOnKeyPressMenu();
    await this.page.keyboard.type("Bhavesh");
    await this.printText();
  }

  async pressBackSpace() {
    await this.clickOnKeyPressMenu();
    await this.page.keyboard.press("A");
    await this.printText();
    await this.page.keyboard.press("Backspace");
    await this.printText();
  }
  async pressArrowUp() {
    await this.clickOnKeyPressMenu();
    await this.page.keyboard.press("ArrowUp");
    await this.printText();
  }

  async pressArrowDown() {
    await this.clickOnKeyPressMenu();
    await this.page.keyboard.down("ArrowDown");
    await this.printText();
  }
}

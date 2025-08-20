import { expect, Page } from "@playwright/test";

export default class AlertHandle {
  /**@param{Page} page */
  constructor(page) {
    this.page = page;
    this.alertPageLink = page.locator('a[href="/javascript_alerts"]');
    this.clickForJSAlert = page.getByText("Click for JS Alert");
    this.clickForJSConfirm = page.getByText("Click for JS Confirm");
    this.clickForJSPromt = page.getByText("Click for JS Prompt");
    this.resultText = page.locator("#result");
  }

  async clickonAlertLinkUrl() {
    await this.alertPageLink.click();
    const currentURL = this.page.url();
    expect(currentURL).toBe(
      "https://the-internet.herokuapp.com/javascript_alerts"
    );
  }

  async clickOnAlert() {
    await this.clickonAlertLinkUrl();

    //dialog event for handle JS Alert
    this.page.on("dialog", async (dialog) => {
      await dialog.accept();
    });

    await this.clickForJSAlert.click();
    const resultMsg = await this.resultText.textContent();
    console.log("Msg :", resultMsg);
    expect(resultMsg).toContain("You successfully clicked an alert");
  }

  async clickOnConfirmCancelBtn(Cancel = true) {
    await this.clickonAlertLinkUrl();

    this.page.on("dialog", async (dialog) => {
      if (Cancel) {
        await dialog.dismiss();
        const resultMsg = await this.resultText.textContent();
        console.log("ResultMsg :", resultMsg);
        expect(resultMsg).toContain("You clicked: Cancel");
      } else {
        const resultMsg = await this.resultText.textContent();
        console.log("ResultMsg :", resultMsg);
        expect(resultMsg).toContain("You clicked: Ok");
      }
    });

    await this.clickForJSConfirm.click();
  }

  async clickonJSPrompt() {
    await this.clickonAlertLinkUrl();

    this.page.on("dialog", async (dialog) => {
      await dialog.accept("Accepted");

      const resultMsg = await this.resultText.textContent();
      console.log("Result text :", resultMsg);
    });

    await this.clickForJSPromt.click();
  }
}

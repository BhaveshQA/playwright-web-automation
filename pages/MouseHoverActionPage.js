import { expect, Page } from "@playwright/test";

export default class MouseAction {
  /**@param{Page} page */
  constructor(page) {
    this.page = page;
    this.clickOnMouseHoverLinkMenu = page.locator('a[href="/hovers"]');
    this.imagelist = page.locator(".figure");
    this.imageText = page.locator(".figcaption h5");
    this.viewProfileLink = page.getByText("View profile");
  }

  async clickOnHoverMenu() {
    await this.clickOnMouseHoverLinkMenu.click();
    const currentURL = this.page.url();
    // expect(currentURL).toBe("https://the-internet.herokuapp.com/hovers");
    await expect(this.page).toHaveURL(
      "https://the-internet.herokuapp.com/hovers"
    );
  }

  async getListOfImagesText() {
    await this.clickOnHoverMenu();
    const getlist = await this.imagelist.count();
    console.log(getlist);
    for (let i = 0; i < getlist; i++) {
      await this.imagelist.nth(i).hover();
      let imageText = await this.imageText.nth(i).textContent();
      console.log(`Imagee ${i + 1} : ${imageText}`);
    }
  }

  async clickOnUserViewProfileLink() {
    await this.clickOnHoverMenu();
    const getlist = await this.imagelist.count();
    for (let i = 0; i < getlist; i++) {
      await this.imagelist.nth(i).hover();
      let imageTextList = await this.imageText.nth(i).textContent();

      let userName = imageTextList.split(":")[1].trim();
      console.log(`User name : ${userName}`);
      if (userName === "user2") {
        await this.viewProfileLink.nth(i).click();
        let profileUrl = await this.page.url();
        console.log(profileUrl);
        //break;
        await this.page.goBack();
      }
    }
  }
}

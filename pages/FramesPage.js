import { expect } from "@playwright/test";

export default class FrameActionPage {
  constructor(page) {
    this.page = page;
    this.frameLink = page.locator('a[href="/frames"]');
    this.nestedFrameLink = page.locator('a[href="/nested_frames"]');
    this.iframeLink = page.locator('a[href="/iframes"]');
    this.parentFrame = page.frameLocator('frame[name="frame-top"]');
    this.nested_frame_left_frame = this.parentFrame.frameLocator(
      'frame[name="frame-left"]'
    );
  }

  async clickOnframeLink() {
    await this.frameLink.click();
    await this.page.waitForSelector('a[href="/nested_frames"]');
    await this.nestedFrameLink.click();

    const currentUrl = await this.page.url();
    expect(currentUrl).toBe("https://the-internet.herokuapp.com/nested_frames");
    console.log("currentURL: " + currentUrl);
  }

  async verifyTextFromSingleFrame() {
    await this.clickOnframeLink();
    await this.page.waitForTimeout(500);

    const left_frame_text = await this.nested_frame_left_frame
      .locator("body")
      .textContent();

    console.log("Left side frame text: " + left_frame_text);
    expect(left_frame_text).toContain("LEFT");
  }

  async printAllFrameNames() {
    await this.clickOnframeLink();
    await this.page.waitForTimeout(1000);

    const frames = this.page.frames();
    console.log(`Total frames found: ${frames.length}`);

    for (const frame of frames) {
      const name = frame.name() || "(no name)";
      const url = frame.url();
      console.log(`Name: ${name} | URL: ${url}`);
    }
  }

  async printAllFrameText() {
    await this.clickOnframeLink();
    await this.page.waitForTimeout(1000);

    const frames = this.page.frames();
    console.log(`Total frames: ${frames.length}`);

    for (const f of frames) {
      if (f.url() !== "" && f.url() !== "about:blank") {
        try {
          const body = f.locator("body");
          if ((await body.count()) > 0) {
            const text = await body.innerText();
            console.log(`Frame: ${f.name()} | Text: ${text}`);
          } else {
            console.log(`Frame: ${f.name()} | No body found`);
          }
        } catch (err) {
          console.log(`Frame: ${f.name()} | Cannot access text`);
        }
      }
    }
  }
}

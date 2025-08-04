class CommonUtils {
  /**
   * Wait for fixed seconds
   */
  static async waitForSeconds(seconds) {
    await new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  }

  /**
   * Check element is visible
   */
  static async isElementVisible(locator) {
    return await locator.isVisible();
  }

  /**
   * Wait until element is visible
   */
  static async waitUntilVisible(locator, timeout = 5000) {
    await locator.waitFor({ state: "visible", timeout });
  }

  /**
   * Retry click if fails
   */
  static async retryClick(locator, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
      try {
        await locator.click();
        break;
      } catch (err) {
        if (i === maxRetries - 1) throw err;
        await this.waitForSeconds(1);
      }
    }
  }

  /**
   * Scroll into view
   */
  static async scrollToElement(locator) {
    await locator.scrollIntoViewIfNeeded();
  }

  /**
   * Select dropdown by visible text
   */
  static async selectDropdownByText(locator, text) {
    await locator.selectOption({ label: text });
  }

  /**
   * Take screenshot with custom name
   */
  static async takeScreenshot(page, name = "screenshot") {
    await page.screenshot({ path: `screenshots/${name}.png`, fullPage: true });
  }

  /**
   * Generate random email
   */
  static generateRandomEmail() {
    const rand = Math.random().toString(36).substring(2, 8);
    return `user_${rand}@testmail.com`;
  }

  /**
   * Generate random number
   */
  static generateRandomNumber(length = 5) {
    return Math.floor(Math.random() * Math.pow(10, length));
  }

  /**
   * Log message in style
   */
  static logStep(stepDescription) {
    console.log(`👉 ${stepDescription}`);
  }
}

module.exports = { CommonUtils };

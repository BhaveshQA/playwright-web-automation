import fs from "fs";
import path from "path";

/**
 * Wait for fixed seconds
 */
export async function waitForSeconds(seconds) {
  await new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

/**
 * Check element is visible
 */
export async function isElementVisible(locator) {
  return await locator.isVisible();
}

export async function clickOnElement(locator) {
  await locator.click();
}

/**
 * Wait until element is visible
 */
export async function waitUntilVisible(locator, timeout = 5000) {
  await locator.waitFor({ state: "visible", timeout });
}

/**
 * Retry click if fails
 */
export async function retryClick(locator, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      await locator.click();
      break;
    } catch (err) {
      if (i === maxRetries - 1) throw err;
      await waitForSeconds(1);
    }
  }
}

/**
 * Scroll into view
 */
export async function scrollToElement(locator) {
  await locator.scrollIntoViewIfNeeded();
}

/**
 * Select dropdown by visible text
 */
export async function selectDropdownByText(locator, text) {
  await locator.selectOption({ label: text });
}

/**
 * Take screenshot with custom name
 */
export async function captureScreenshot(
  testInfo,
  page,
  stepName,
  status = "info"
) {
  let screenshotCounter = 1;
  const screenshotFolder = path.join("reports", "screenshots", testInfo.title);

  if (!fs.existsSync(screenshotFolder)) {
    fs.mkdirSync(screenshotFolder, { recursive: true });
  }

  const fileName = `${stepName}-${status}-${screenshotCounter}.png`;
  const filepath = path.join(screenshotFolder, fileName);
  screenshotCounter++;

  const screenshot = await page.screenshot({
    path: filepath,
    fullPage: true,
  });

  await testInfo.attach(`${stepName} - ${status}`, {
    body: screenshot,
    contentType: "image/png",
  });
}

/**
 * Generate random email
 */
export function generateRandomEmail() {
  const rand = Math.random().toString(36).substring(2, 8);
  return `user_${rand}@testmail.com`;
}

/**
 * Generate random number
 */
export function generateRandomNumber(length = 5) {
  return Math.floor(Math.random() * Math.pow(10, length));
}

/**
 * Log message in style
 */
export function logStep(stepDescription) {
  console.log(`👉 ${stepDescription}`);
}

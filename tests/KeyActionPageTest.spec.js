import { test } from "../utils/BaseTest.js";

test.describe("Keyboard action use cases", async () => {
 test("Redirect to page url and verify currentURL", async ({ KeyAction }) => {
    await KeyAction.clickOnKeyPressMenu();
  });

  test("Verify the Keyboard 'Enter' key press action", async ({
    KeyAction,
  }) => {
    await KeyAction.pressEnterKey();
  });

  test("Verify enter text using keyboard key", async ({ KeyAction }) => {
    await KeyAction.enterTextUsingKeyboard();
  });
  test("Verify the backspace keypress action", async ({ KeyAction }) => {
    await KeyAction.pressBackSpace();
  });


  test("Verify the keyboard ArrowUp key", async ({ KeyAction }) => {
    await KeyAction.pressArrowUp();
  });

  test("Verify the keyboard ArrowDown keyaction", async ({ KeyAction }) => {
    await KeyAction.pressArrowDown();
  });
  
});

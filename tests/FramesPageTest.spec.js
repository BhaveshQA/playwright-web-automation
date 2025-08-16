const { test } = require("../utils/BaseTest");

test.describe("Frame component automation", async () => {
  test("Print text from the single left frame", async ({ FrameActionPage }) => {
    await FrameActionPage.verifyTextFromSingleFrame();
  });

  test("Print Name and URL of all the sub-frames", async ({
    FrameActionPage,
  }) => {
    await FrameActionPage.printAllFrameNames();
  });

  test("Print text of the sub-frames", async ({ FrameActionPage }) => {
    await FrameActionPage.printAllFrameText();
  });
});

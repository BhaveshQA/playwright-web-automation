const { test, expect, request } = require("@playwright/test");
test("PUT - Update user job title", async () => {
  const apiContext = await request.newContext();

  const response = await apiContext.put("https://reqres.in/api/users/2", {
    data: {
      name: "Bhavesh",
      job: "SDET Lead",
    },
  });

  expect(response.status()).toBe(200);
  const resBody = await response.json();
  console.log(resBody);
});

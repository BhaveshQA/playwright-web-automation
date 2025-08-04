const { test, expect, request } = require("@playwright/test");

test("Create new user", async () => {
  const apiContext = await request.newContext();

  const response = apiContext.post("https://reqres.in/api/users", {
    data: {
      name: "Bhavesh",
      job: "QA Engineer",
    },
  });

  expect((await response).status()).toBe(201);
  const responseBody = (await response).json();
  console.log(responseBody);
});

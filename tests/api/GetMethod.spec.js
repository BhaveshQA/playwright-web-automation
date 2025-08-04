const { test, expect, request } = require("@playwright/test");
test("GET - Fetch a user", async () => {
  const apiContext = await request.newContext();

  const response = await apiContext.get("https://reqres.in/api/users/2");

  expect(response.status()).toBe(200);
  const data = await response.json();
  console.log(data);
});

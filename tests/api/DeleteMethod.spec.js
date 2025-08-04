const { test, expect, request } = require("@playwright/test");
test("DELETE - Delete a user", async () => {
  const apiContext = await request.newContext();

  const response = await apiContext.delete("https://reqres.in/api/users/2");

  expect(response.status()).toBe(204); // No content
});

export default class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.loginBtn = page.locator('button[type="submit"]');
    this.errorSussMsg = page.locator("#flash-messages");
    this.logoutBtn = page.locator('a[href="/logout"]');
  }

  async userLogin(user, password) {
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
  }

  async getAlertMessage() {
    return this.errorSussMsg.textContent();
  }

  async clickLogout() {
    await this.logoutBtn.click();
  }
}
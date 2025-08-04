# Playwright Web Automation Framework 🚀

This repository contains a **modern web automation framework** built using [Playwright](https://playwright.dev/). It is designed to test user flows on a sample e-commerce website and showcases best practices in structuring, scripting, and reporting.

---

## 📌 Features

- 🔹 Built with **Playwright (JavaScript/Node.js)** for modern, fast, and reliable browser automation
- 🔹 Uses **Page Object Model (POM)** for better code reusability and maintainability
- 🔹 Supports **cross-browser testing** (Chromium, Firefox, WebKit)
- 🔹 Test cases include **Login**,  **API Method [GET/POST/PUT/DELETE]**
- 🔹 Command-line execution using `npx playwright test`
- 🔹 Generates **HTML Reports** after each run
- 🔹 Includes reusable selectors and test data

---

## 📁 Folder Structure
```
playwright-web-automation/
├── tests/ # Test specs for user flows
├── pages/ # Page Object classes
├── data/ # Test data files (e.g., login credentials)
├── reports/ # Playwright test reports (auto-generated)
├── playwright.config.js # Global configuration file
├── package.json # Project dependencies and scripts
```
yaml
Always show details


## 🧪 Sample Test Scenarios

- ✅ Verify user login with valid credentials
- ✅ Add product to cart and validate cart item count
- ✅ Complete checkout flow and assert confirmation message
- ✅ Search for a product and validate search results

---


## ⚙️ Setup & Run Locally

```bash
# Install dependencies
npm install

# Run tests (default browser)
npx playwright test

# Run tests with UI (headed mode)
npx playwright test --headed

# Open the HTML report after execution
npx playwright show-report
📷 Reports
HTML reports are auto-generated in the playwright-report/ folder after each test run.

📬 Contact
Created with ❤️ by Bhavesh Rathod
📧 Email: engineerqa.bhavesh007@gmail.com
🔗 GitHub: BhaveshQA

“Test automation is not just about speed — it’s about confidence, coverage, and clarity.”
"""

#  Playwright Web Automation

This repository demonstrates Playwright-based web automation with JavaScript, following the Page Object Model (POM) design pattern. It includes reusable utilities, test data management, CI/CD pipeline setup, and reporting.

## 🚀 Features

Cross-browser testing: Chromium, Firefox, WebKit

Page Object Model (POM) for maintainability

Reusable utilities for actions (keyboard, mouse hover, etc.)

Test data management with dedicated folder

Allure & HTML reports for execution results

CI/CD integration with GitHub Actions

ES6 standards for modern, clean code


```
📂 Project Structure
.
├── .github/workflows/       # CI/CD workflow (GitHub Actions)
├── .vscode/                 # VSCode settings
├── allure-report/           # Allure reports (generated)
├── config/                  # Playwright configs (env, yml)
├── pages/                   # Page Object Model classes
├── reports/html-report/     # Playwright HTML reports
├── test-data/               # External test data (JSON, CSV, etc.)
├── tests-examples/          # Sample Playwright tests
├── tests/                   # Actual project test cases
├── utils/                   # Utility functions (keyboard, mouse, helpers)
├── .gitignore               # Ignored files
├── README.md                # Project documentation
├── package.json             # Dependencies & scripts
├── package-lock.json        # Dependency lock file
```

## 🧪 Running Tests
Install dependencies
npm install
npx playwright install

Run all tests
npx playwright test

Run tests in headed mode
npx playwright test --headed

Run tests in specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox

Run a specific test file
npx playwright test tests/login.spec.js

Run with Allure report
npx playwright test --reporter=line,allure-playwright
allure serve allure-results

Run with HTML report
npx playwright show-report

## 📊 Reporting

Allure Report → allure-report/

HTML Report → reports/html-report/

Both reporting options are available depending on your CI/CD or local debugging needs.

## ⚙️ CI/CD Integration

The repository includes GitHub Actions workflows (.github/workflows/) for continuous test execution on every push/PR.

Tests run in parallel across browsers.

Reports can be uploaded as artifacts.

✅ Best Practices Used

Page Object Model (POM) for clean separation of concerns

Test data externalization for reusability

Utilities for actions like mouse hover and keyboard events

ES6 syntax for modern, maintainable code

Config-driven test execution

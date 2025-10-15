# 🧪 Cypress Test Projects — Cnarios Concepts & E-Commerce Automation

This repository contains Cypress end-to-end (E2E) automation tests created while studying and completing the **concepts** from [Cnarios Concepts](https://www.cnarios.com/concepts).  
The goal of this project is to strengthen foundational Cypress skills through hands-on exercises covering UI interactions, validation, and real-world testing scenarios.

---

## 📁 Project Structure

CYPRESS-TEST-PROJECTS
├── .vscode/ # VS Code workspace settings
├── cypress/
│ ├── downloads/ # Downloaded files during test execution
│ ├── e2e/ # Main test folder
│ │ ├── auth/ # Authentication-related tests
│ │ │ └── login.cy.js
│ │ ├── concepts/ # Core automation concept exercises from Cnarios
│ │ │ ├── button.cy.js
│ │ │ ├── checkbox.cy.js
│ │ │ └── forms.cy.js
│ │ └── ecommerce/ # Product listing and pagination automation
│ │ └── product_listing_and_pagination.cy.js
│ ├── fixtures/ # Static test data or mock values
│ │ └── example.json
│ ├── pageObjects/ # Reusable selectors and page objects
│ │ └── objects.js
│ ├── screenshots/ # Screenshots generated on failure or validation
│ └── support/ # Cypress support utilities and global configs
│ ├── commands.js
│ └── e2e.js
├── cypress.config.js # Cypress configuration file
├── cypress.env.json # Environment variables
├── package-lock.json
└── package.json


---

## 🧠 Purpose

This project serves as a **practice and learning workspace** for:
- Understanding how to structure Cypress projects  
- Implementing automated tests for core UI/UX behaviors  
- Practicing data-driven testing and reusable page objects  
- Exploring asynchronous waits, intercepts, and validations  

---

## ✅ Concept Coverage

Each test suite corresponds to a specific learning objective from the **Cnarios Concepts** site.

| Concept Area | File | Description |
|---------------|------|--------------|
| 🔐 Authentication | `auth/login.cy.js` | Validate login form, error states, and redirects |
| 🧩 Buttons | `concepts/button.cy.js` | Verify button clicks, states, and actions |
| ☑️ Checkboxes | `concepts/checkbox.cy.js` | Validate checkbox interactions, select/deselect logic |
| 📝 Forms | `concepts/forms.cy.js` | Validate field inputs, required rules, and error messages |
| 🛍️ Product Listing & Pagination | `ecommerce/product_listing_and_pagination.cy.js` | Test pagination navigation, category counts, and data accuracy |

---

## 🧰 Tools & Dependencies

- [Cypress](https://www.cypress.io/) — E2E testing framework  
- [Node.js](https://nodejs.org/) — Runtime environment  
- **VS Code** — Recommended editor  

Install dependencies:
```bash
npm install

▶️ How to Run Tests
Open Cypress Test Runner
npx cypress open


Select a test file (e.g. concepts/forms.cy.js) from the UI.

Run Headlessly (CLI Mode)
npx cypress run

⚙️ Configuration

You can customize base URL and other settings in cypress.config.js or cypress.env.json.

Example:

{
  "baseUrl": "https://www.cnarios.com",
  "env": {
    "login_email": "test@example.com",
    "login_password": "password123"
  }
}

🧩 Page Object Model

All test selectors and reusable references are managed under:

cypress/pageObjects/objects.js


Example usage:

cy.get(objects.loginButton).click();

🧪 Testing Practices Followed

Use of data-testid / data-cy selectors

Avoid CSS class-based selectors (unstable)

Use .should() and .invoke() instead of arbitrary cy.wait()

Grouping tests by functionality and concept

Reusable commands defined in support/commands.js

📚 Learning Focus

✅ DOM interaction (buttons, forms, checkboxes)

✅ Assertions and element visibility checks

✅ Handling dynamic content and loaders

✅ Waiting for network calls using cy.intercept()

✅ Pagination and list validation

✅ Error and validation message testing

💡 Next Steps

Add coverage for search, sorting, and filter filters concepts

Integrate CI (GitHub Actions or GitLab CI) for automated runs

Include video and screenshot reporting

Expand fixtures for data-driven testing

📖 References

🔗 Cnarios Concepts

📘 Cypress Documentation

🧠 Cypress Best Practices

Author: Terelle Balagso Sarmiento
Goal: To master Cypress automation by building from foundational concepts to advanced testing strategies.

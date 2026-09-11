![Cypress Tests](https://github.com/22AGabriel/automation-cypress-api-ui/actions/workflows/cypress.yml/badge.svg)

# Cypress Testing Project (API + UI)
This project contains automated tests built with Cypress, covering both API and UI testing scenarios.
It demonstrates validation of CRUD operations, user interactions, and error handling using real-world applications, following QA best practices and CI/CD integration.

---

### 🧪 Tech Stack

- **Cypress**
- **JavaScript**
- **Cypress-Mochawesome Reporter**
- **GitHub Actions (CI/CD)**
 
---

### 🌐 Applications under test

#### 🔹 API Testing:
- Base URL: `https://jsonplaceholder.typicode.com`
- Endpoints tested:
  - `GET /posts`
  - `GET /posts/{id}`
  - `POST /posts`
  - `PUT /posts/{id}`
  - `DELETE /posts/{id}`
  
### 🔹 UI Testing:
- Base URL: `https://todomvc.com/examples/react/dist/#/active`
- Features tested:
  - Add new tasks
  - Mark tasks as completed
  - Delete tasks
  - Filter tasks (All, Active, Completed)

---

### 📋 Features

- API Testing (CRUD operations)
- UI Testing (user flows)
- Positive and negative test cases
- Reusable commands and fixtures
- Automated test reporting
- CI/CD pipeline integration

---

### ⚙️ CI/CD Pipeline

This project includes a CI pipeline built with GitHub Actions following a Shift-Left Testing approach to ensure early detection of defects.

#### 🔁 Pipeline Behavior

- Tests run automatically on every Pull Request to `main`
- Tests also run after merging changes into `main`
- API and UI tests are executed in a single Cypress run to generate a unified report

#### 🔒 Quality Gates

Branch protection rules are configured to enforce quality:

- Pull Requests are required before merging into `main`
- All automated tests must pass before merge is allowed
- Merges are blocked if any test fails
 
#### 🧪 Test Execution Strategy

- **Stable**: Runs only validated API and UI tests (`test:ci`)
- **Full**: Runs all tests, including experimental/failing scenarios (`test:ci:full`)

This allows:
- Reliable validation in CI pipelines
- Flexible execution for testing and demonstration purposes
 
#### 📊 Reporting

- Test reports are generated using Mochawesome
- Reports are uploaded as artifacts in GitHub Actions
- Include execution summary, failures, and screenshots

This setup ensures continuous validation, early feedback, and controlled code integration.

---

### 🛠️ Installation

```npm install```

---

### ▶️ Run Tests

Open Cypress (UI mode):

```npx cypress open``` 

Run all tests (headless mode):

```npx cypress run```

Run API or UI tests only:

API: ```npm run test:api```

UI: ```npm run test:ui```

Run tests for CI (API + UI together):

```npm run test:ci```

---

### 🌍 Environment Configuration

Tests can run against different environments by passing the `environment` variable:

`npx cypress run --env environment=production`

If no environment is specified, `production` is used by default.

---

### 📊 Test Reports

This project uses Mochawesome for generating test reports. 

Reports are automatically generated during CI execution and can be downloaded from GitHub Actions as artifacts.

Each report includes:

- Test execution summary
- Passed and failed test cases
- Error details
- Screenshots of failures (when applicable)

### 🔍 Report Overview
![Report Overview](./docs/report-overview.png)

### 🔍 Report Overview Details
![Report OverviewDetails](./docs/report-overview-detail.png)

### ❌ API Failure Example
![API Failure](./docs/api-failure-detail.png)

### ❌ UI Failure Example
![UI Failure](./docs/ui-failure-detail.png)

Failing tests cases were intentionally created to demonstrate the reporting capabilities and to validate error handling in both API and UI tests.

---

### 🧠 Testing Approach

Tests were designed following QA best practices:

- Clear and independent test cases
- Validation of both happy and edge cases
- Separation between API and UI tests
- Reusable and maintainable code structure

---

### 📈 Future Improvements

- Cross-browser testing
- Integration with performance testing tools (e.g. Apache JMeter)
 
---

### 👨‍💻 Author

Gabriel Azubel

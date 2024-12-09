# Swag Labs Playwright Tests

![Playwright Logo](https://playwright.dev/img/playwright-logo.svg)

## Introduction

This repository contains automated tests for the [Swag Labs web](https://www.saucedemo.com/) application, leveraging **Playwright** with **TypeScript**. The project follows the Page Object Model (POM) design pattern, aimed at ensuring robust, maintainable tests that validate the core functionality of the application, enabling successful user interaction with the web interface.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Continuous Integration](#continuous-integration)
- [Documentation](#documentation)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)

## Installation

Before you begin, ensure you have the following installed:

- Node.js (LTS version)
- npm (Node Package Manager)

To set up the project:

1. Clone the repository:
```bash {"id":"01HVPSSVWAYS3TWF0KAGPQKFX2"}
git clone https://github.com/saranyathiru1/PlaywrightSauceLabsProject.git
```
2. Change directory to the project root:
```bash
cd PlaywrightSauceLabsProject
```
3. Install Dependencies:
```bash
npm install
```


## Usage

To run the tests, execute the following command from the project root:

```bash {"id":"01HVPSSVWAYS3TWF0KAJDFDN28"}
npx playwright test
```

To run tests by tags, execute the following command from the project root:

```bash {"id":"01HVPTX4AA6EW7F90YXZ2N8G4Y"}
npx playwright test --grep "@tagName"
```

To run all tests in debug mode, execute the following command:

```bash {"id":"01HVPTX4AA6EW7F90YXZ2N8G4Y"}
npx playwright test --debug
```

## Features

- End-to-End Testing: Complete automated tests covering all major functionalities of Swag Labs.
- Cross-browser Testing: Tests can be run across multiple browsers using Playwright's capabilities.

## Dependencies

The project relies on several key Node.js packages:

- playwright for running browser automation.
- Javacsript for using JavaScript in the project.
   Further details can be found in package.json.

## Configuration

Configuration settings for Playwright are stored in playwright.config.js, which includes browser configurations, test directory paths, and options for handling test outputs.

## Continuous Integration

This project is integrated with GitHub Actions for continuous integration (CI), leveraging a configuration defined in the `playwright.yml` file. This allows automated tests to run on every push or pull request to the main branch, ensuring that changes do not break existing functionalities.

### GitHub Actions Setup

The GitHub Actions workflow is set up to install dependencies, run tests, and generate reports automatically. Here's a brief overview of the workflow defined in `playwright.yml`:

```yaml {"id":"01HVPTC17MQB4WYQX2AWQAFK2N"}
name: Playwright Tests
on:
  push:
    branches: [ main, master ]
  pull_request:
    branches: [ main, master ]
jobs:
  test:
    timeout-minutes: 60
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: lts/*
    - name: Install dependencies
      run: npm ci
    - name: Install Playwright Browsers
      run: npx playwright install --with-deps
    - name: Run Playwright tests
      run: npx playwright test
    - uses: actions/upload-artifact@v4
      if: always()
      with:
        name: playwright-report
        path: playwright-report/
        retention-days: 30
```

This YAML configuration defines a workflow that:

- Triggers on push or pull request events to the main branch.
- Sets up a testing environment on the latest Ubuntu server.
- Installs Node.js and project dependencies.
- Executes the tests using Playwright.
- Uploads the test report as an artifact, which can be accessed from the GitHub Actions run summary.

## Documentation

Refer to the [Playwright documentation](https://playwright.dev/) for comprehensive guidelines on using Playwright.

## Troubleshooting

- Issue: Playwright not launching browser.
- Solution: Ensure all browser binaries are installed correctly with npx playwright install.
   Contributors

To contribute to this project, please fork the repository and submit a pull request for review.

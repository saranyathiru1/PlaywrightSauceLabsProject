// @ts-check
const { defineConfig, devices } = require('@playwright/test');



module.exports = defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 10000,
    toHaveScreenshot: {
      maxDiffPixels: 100,
    },
  },
  fullyParallel: false,
  retries: 3,
  workers: 2,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [["html"], ["junit", { outputFile: "results.xml" }], ['blob'], ["json", { outputFile: "report.json" }],
  ["allure-playwright", { outputFolder: "allure-results" }]],

  use: {

    baseURL: 'https://www.saucedemo.com',
    trace: 'on-first-retry',
    screenshot: 'on',
    headless: true
  },
  snapshotPathTemplate: 'snapshots/{projectName}/{platform}/{arg}{ext}',

  projects: [
    {
      name: 'webkit',
      use:
      {
        browserName: 'webkit',
      }
    },
    {
      name: 'firefox',
      use:
      {
        browserName: 'firefox',
      }
    },
    {
      name: 'chromium',
      use:
      {
        browserName: 'chromium',
      }
    }



  ],


});


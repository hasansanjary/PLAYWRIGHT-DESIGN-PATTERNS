import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: '../',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 3,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  /*
    webServer: {
    // Run yarn dev from the project directory
    command: 'yarn dev',
    url: 'http://localhost:3000', // adjust if your app runs on another port
    reuseExistingServer: !process.env.CI,
    cwd: 'C:/Users/Admin/Desktop/cypress-realworld-app', // 👈 set working directory
    timeout: 120 * 1000, // optional: increase if startup is slow
  },
  */

  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: 'https://parabank.parasoft.com/parabank/index.htm',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',

    screenshot: 'on',

    video: 'on'

  },

  /* Configure projects for major browsers */
  projects: [

    /*
    {
      name: 'data-setup',
      testMatch: /.*\.data-load\.setup\.ts/,
      teardown: 'data-cleanup',
    },

     {
      name: 'data-cleanup',
      testMatch: /.*\.data-cleanup\.ts/,
    },

    */

    {
      name: 'smoke',
      // grep: '/@smoke/'
      use: {
        ...devices['Desktop Chrome'],
        // viewport: { width: 1280, height: 720 },
        // baseURL: 'http://localhost:3000',
        // trace: 'on'

      },
      /*  
        testMatch: /.*\.spec\.ts/,
        dependencies: ['data-setup'],
        fullyParallel: false,
      */

    },

    {
      // name: 'regression',
      // use: { ...devices['Desktop Chrome'] },
      // testIgnore: /.*\.spec\.ts/,
      // dependencies: ['smoke'],
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

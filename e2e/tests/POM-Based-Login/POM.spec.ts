import { test, expect, chromium } from '@playwright/test';
import { LoginPage } from './Login-Page';
import { loginData } from './Login-Data';

test.describe('POM-based login', () => {

  test.beforeEach(async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage('https://parabank.parasoft.com/parabank/index.htm');

  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('successful login with valid credentials using POM', async ({ page }) => {

    //Logging in using POM class
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage('https://parabank.parasoft.com/parabank/index.htm');
    await loginPage.loginPage(loginData);

    //performing a navigation action: goBack and goForward

    // await page.goBack();
    // console.log("URL after goBack:", await page.url());
    // await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/index.htm');

    // await page.goForward();
    // console.log("URL after goForward:", await page.url());
    // await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/overview.htm');

    //Taking screenshot and pdf of the logged in page

    await page.screenshot({ path: 'pom-login.png', fullPage: true });
    await page.pdf({ path: 'pom-login.pdf', format: 'A4' });

    // Asserting the Title of the logged in Page
    // expect(page).toHaveTitle('ParaBank | Accounts Overview');

  });



});


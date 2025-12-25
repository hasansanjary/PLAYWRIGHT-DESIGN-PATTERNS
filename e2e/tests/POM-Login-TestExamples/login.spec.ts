import { test, expect, chromium } from '@playwright/test';
import { LoginPage } from './login';
import { loginData } from "./login_data";
import { takeScreenshot } from './Utils/screenshot';

test.describe('Sign in page', () => {

  // test.beforeEach(async ({ page }) => {
  //   await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  // });

  /*
    test('successful login with valid credentials POM newlogin', async ({page }) => {
  
      await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  
      const loginPage = new LoginPage(page);
      await loginPage.newLogin(loginData);
  
      await page.screenshot({ path: 'pom-login.png', fullPage: true });
      await page.pdf({ path: 'pom-login.pdf', format: 'A4' });
  
  
      expect(page).toHaveTitle('ParaBank | Accounts Overview');
  
    });
  */

  test('successful login with valid credentials using POM', async ({ }) => {

    const browser = await chromium.launch({ headless: false });

    const context = await browser.newContext({});
    const page = await context.newPage();

    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    //Checking the Title of the lgogin Page
    await expect(page).toHaveTitle('ParaBank | Welcome | Online Banking');

    //Logging in using POM class
    const loginPage = new LoginPage(page);
    await loginPage.login('demo', 'demopass');

    //performing a navigation action: goBack and goForward
    await page.goBack();
    console.log("URL after goBack:", await page.url());
    await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/index.htm');

    await page.goForward();
    console.log("URL after goForward:", await page.url());
    await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/overview.htm');

   //Taking screenshot and pdf of the logged in page
    await page.screenshot({ path: 'pom-login.png', fullPage: true });
    await page.pdf({ path: 'pom-login.pdf', format: 'A4' });

   // Asserting the Title of the logged in Page
    expect(page).toHaveTitle('ParaBank | Accounts Overview');

  });



});


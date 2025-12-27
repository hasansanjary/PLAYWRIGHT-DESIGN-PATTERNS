import { test, expect } from './helpers/Login-Fixture';

test.describe('xyz', () => {

  test('successful login with invalid credentials using POM Fixture', async ({ loginPage, page }) => {

    //Logging in using POM class
    const Page = loginPage;

    await Page.navigateToLoginPage('https://parabank.parasoft.com/parabank/index.htm');
    await Page.loginPage('demo', 'demopass');

  });
})

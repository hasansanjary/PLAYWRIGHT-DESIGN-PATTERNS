import { test, expect } from './helpers/Login-Fixture';

test.describe('xyz', () => {

  test('successful login with invalid credentials using POM Fixture', async ({ loginPage }) => {

    //Logging in using POM class
    const Page = loginPage;

    await Page.navigateToLoginPage('https://parabank.parasoft.com/parabank/index.htm');
    await Page.loginPage('demo', 'demopass');

  });

  test('Login with Empty Fields shows validation and does not log in', async ({ loginPage, page }) => {
    const Page = loginPage;

    await Page.navigateToLoginPage('https://parabank.parasoft.com/parabank/index.htm');
    // Do not fill any fields
    await Page.clickLoginButton(); // Assumes you have a method to click login

    // Check for validation messages (adjust selectors/text as needed)
    await expect(page.getByText('Please enter a username and password.')).toBeVisible();

    // Optionally, check that user is not logged in (e.g., login form still visible)
    await expect(page.locator('//form[@name=\'login\']')).toBeVisible();
  });
});

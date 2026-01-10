import { test, expect } from './Login-Fixture';
import { loginData } from './Login-Data';


test.describe('Fixture-based login', () => {

    test('successful login with invalid credentials', async ({ loginPage, page }) => {

        //Logging in using POM class

        const Page = loginPage;

        await Page.navigateToLoginPage('https://parabank.parasoft.com/parabank/index.htm');
        await Page.loginPage(loginData);

        await page.waitForLoadState('load');
        await expect(Page.internalErrorMessage).toHaveText('The user and pass could not be verified.');

    });

    test.skip('Login with Empty Fields shows validation and does not log in', async ({ loginPage }) => {
        
        const Page = loginPage;

        await Page.navigateToLoginPage('https://parabank.parasoft.com/parabank/index.htm');
        // Do not fill any fields
        await Page.clickLoginButton(); // Assumes you have a method to click login

        // Check for validation messages (adjust selectors/text as needed)
        // await expect(page.getByText('Please enter a username and password.')).toBeVisible();
        await expect(Page.emptyLoginFieldValidation).toHaveText('Please enter a username and password.');

        // Optionally, check that user is not logged in (e.g., login form still visible)
        await expect(Page.loginForm).toBeVisible();
    });
})


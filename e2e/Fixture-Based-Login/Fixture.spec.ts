import { test, expect } from './test-fixtures';
import { loginData } from './LoginData';


test.describe('Fixture-based login', () => {

    test('@smoke unsuccessful login with invalid credentials using Fixture', async ({ loginPage, page }) => {


        //Logging in using POM clas

        const Page = loginPage;
        await Page.navigateToLoginPage('https://parabank.parasoft.com/parabank/index.htm');
        await Page.invalidLogin();

        await page.waitForLoadState('load');
        await expect(Page.internalErrorMessage).toHaveText('The username and password could not be verified.');

    });

    test('@smoke successfull login with valid credentials using Fixture', async ({ loginPage, page }) => {


        //Logging in using POM clas

        const Page = loginPage;
        await Page.navigateToLoginPage('https://parabank.parasoft.com/parabank/index.htm');
        await Page.login();


    });


    test('@regression Login with Empty Fields shows validation and does not log in', async ({ loginPage }) => {

        const Page = loginPage;
        // Do not fill any fields
        await Page.navigateToLoginPage('https://parabank.parasoft.com/parabank/index.htm');
        await Page.clickLoginButton(); // Assumes you have a method to click login

        // Check for validation messages (adjust selectors/text as needed)
        // await expect(page.getByText('Please enter a username and password.')).toBeVisible();
        await expect(Page.emptyLoginFieldValidation).toHaveText('Please enter a username and password.');

        // Optionally, check that user is not logged in (e.g., login form still visible)
        await expect(Page.loginForm).toBeVisible();
    });

    test('@regression Dashboard shows successful login', async ({ loginPage, dashboardPage }) => {

        const Page = loginPage;
        await Page.navigateToLoginPage('https://parabank.parasoft.com/parabank/index.htm');
        await Page.login();

        await dashboardPage.page.waitForLoadState('load');
        await expect(dashboardPage.page).toHaveTitle("ParaBank | Accounts Overview");


    });

});


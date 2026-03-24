import { test, expect } from '../Fixtures/Fixture';
import { loginData } from '../TestData/LoginData';
import { AppNavigator } from '../AppNavigation/AppNavigator';


test.describe('Fixture-based login', () => {

    test.skip('@smoke unsuccessful login with invalid credentials using Fixture', async ({ loginPage, page }) => {


        //Logging in using POM clas

        const Page = loginPage;
        // await Page.navigateToLoginPage('https://parabank.parasoft.com/parabank/index.htm');
        await page.goto('https://parabank.parasoft.com/parabank/index.htm');
        await Page.invalidLogin();

        await page.waitForLoadState('load');
        await expect(Page.internalErrorMessage).toHaveText('The username and password could not be verified.');



    });

    test.skip('@smoke successfull login with valid credentials using Fixture', async ({ loginPage, page }) => {


        //Logging in using POM clas

        const Page = loginPage;
        await Page.navigateToLoginPage('https://parabank.parasoft.com/parabank/index.htm');
        await Page.login();

        await expect(page).toHaveTitle("ParaBank | Accounts Overview");


    });


    test.skip('@regression Login with Empty Fields shows validation and does not log in', async ({ loginPage }) => {

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

    test('@regression Dashboard shows successful login', async ({ loginPage, dashboardPage, page }) => {

        const Page = loginPage;
        await Page.navigateToLoginPage('https://parabank.parasoft.com/parabank/index.htm');
        await Page.login();

        await dashboardPage.page.waitForLoadState('load');
        await expect(page).toHaveTitle("ParaBank | Accounts Overview");


    });

      test('@regression Dashboard shows successful logout', async ({ loginPage, dashboardPage, appNavigator, page }) => {

        const Page = loginPage;
        await Page.navigateToLoginPage('https://parabank.parasoft.com/parabank/index.htm');
        await Page.login();
        
        const nav = appNavigator;
        await nav.goTo('dashboard');

        await dashboardPage.page.waitForLoadState('load');
        await expect(page).toHaveTitle("ParaBank | Accounts Overview");

        await page.waitForTimeout(5000);
        await dashboardPage.logOut();

        await page.waitForTimeout(5000);
        
        await expect(page).toHaveTitle("ParaBank | Welcome | Online Banking");


    });



});


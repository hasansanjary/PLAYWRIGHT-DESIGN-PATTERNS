import { test, expect } from './Login-Fixture';
import { loginData } from './LoginData';


test.describe('Fixture-based login', () => {

    test('@smoke successful login with invalid credentials using Fixture', async ({ loginPage, page }) => {
        

        //Logging in using POM clas

        const Page = loginPage;
        await Page.loginPage();

        await page.waitForLoadState('load');
        await expect(Page.internalErrorMessage).toHaveText('The username and password could not be verified.');

    });

    test('@regression Login with Empty Fields shows validation and does not log in', async ({ loginPage }) => {

        const Page = loginPage;
        // Do not fill any fields
        await Page.clickLoginButton(); // Assumes you have a method to click login

        // Check for validation messages (adjust selectors/text as needed)
        // await expect(page.getByText('Please enter a username and password.')).toBeVisible();
        await expect(Page.emptyLoginFieldValidation).toHaveText('Please enter a username and password.');

        // Optionally, check that user is not logged in (e.g., login form still visible)
        await expect(Page.loginForm).toBeVisible();
    });
})


// import { test, expect } from '@playwright/test';
import { test, expect } from '../Fixtures/Fixtures';
import { AppNavigator } from '../AppNavigation/AppNavigator';



test.describe('App Navigation-based login', () => {

    test('@smoke unsuccessful login with invalid credentials using Fixture', async ({ loginPage, page }) => {

        const Page = loginPage;

        const nav = new AppNavigator(page);

        // Step 1: Go to login page

        await nav.goTo('login');
        // await page.waitForTimeout(2000);
        expect(await nav.isAt('login')).toBe(true);

        await Page.login();


        // await nav.goTo('dashboard');
        await page.waitForTimeout(2000);
        expect(await nav.isAt('dashboard')).toBe(true);

        await page.getByRole('link', { name: 'Bill Pay' }).click();
        await page.waitForTimeout(2000);
        expect(page.url()).toContain('/parabank/billpay.htm');

        await nav.goTo('dashboard');
        await page.waitForTimeout(2000);
        expect(await nav.isAt('dashboard')).toBe(true);



    });



});

import { test, expect } from '../Fixtures/Fixture';



test.describe('App Navigation-based login', () => {

    test('New navigation interface', async ({ loginPage, appNavigator, page }) => {

        const Page = loginPage;

        const nav = appNavigator;

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

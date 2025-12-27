import { test, expect } from '@playwright/test';
import { LoginPage } from '../POM-Login-TestExamples/login';
const playwright = require('playwright/test');

test.describe.configure({ mode: 'parallel' });

test('successful cross browser login with valid credentials', async ({ browserName }) => {

    for (const browserType of [playwright.chromium, playwright.firefox, playwright.webkit]) {

        const browser = await browserType.launch({ headless: false });
        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto('https://parabank.parasoft.com/parabank/index.htm');

        const loginPage = new LoginPage(page);
        await loginPage.loginPage('demo', 'demopass');


        await page.screenshot({ path: `pom-login-${browserType.name()}.png`, fullPage: true });

        //PDF generation is not supported in firefox and webkit browsers in playwright
        // await page.pdf({ path: `pom-login-${browserType.name()}.pdf`, format: 'A4' });

        // PDF only for Chromium
        if (browserType.name() === 'chromium') {
            await page.pdf({
                path: `pom-login-${browserName}.pdf`,
                format: 'A4'
            });
        }


        //Assert page title
        await expect(page).toHaveTitle('ParaBank | Accounts Overview');

        //Assert page URL
        await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/overview.htm');

        //Assert screenshot match
        // await expect(page).toHaveScreenshot(`pom-login-${browserType.name()}.png`);

        await context.close();

        await browser.close();

        await page.close();

    }


});

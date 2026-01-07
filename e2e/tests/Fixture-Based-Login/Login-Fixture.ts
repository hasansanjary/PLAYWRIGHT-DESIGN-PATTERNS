import { test as base } from '@playwright/test';
import { LoginPage } from '../POM-Based-Login/Login-Page';

const test = base.extend<{ loginPage: LoginPage }>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateToLoginPage('https://parabank.parasoft.com/parabank/index.htm');
        await use(loginPage);
    },
});

export { test };
export { expect } from '@playwright/test';

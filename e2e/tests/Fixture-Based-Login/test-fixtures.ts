import { test as base } from '@playwright/test';
import { LoginPage } from './Login-Page';
import { DashboardPage } from './Dashboard-Page';

type MyFixtures = {

    loginPage: LoginPage;
    dashboardPage: DashboardPage;
}

const test = base.extend<MyFixtures>({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    dashboardPage: async ({ page }, use) => {

        const loginPage = new LoginPage(page);
        await loginPage.navigateToLoginPage('https://parabank.parasoft.com/parabank/index.htm');
        await loginPage.login();
        await use(new DashboardPage(page));
    }

});

export { test };
export { expect } from '@playwright/test';

import { test as base } from '@playwright/test';
import { LoginPage } from '../Page/Login-Page';
import { DashboardPage } from '../Page/Dashboard-Page';
import { AppNavigator } from '../AppNavigation/AppNavigator';

type MyFixtures = {

    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    appNavigator: AppNavigator;
}

const test = base.extend<MyFixtures>({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    dashboardPage: async ({ page }, use) => {
        await use(new DashboardPage(page));
    },

    appNavigator: async ({ page }, use) => {
        await use(new AppNavigator(page));
    }
});


export { test };
export { expect } from '@playwright/test';

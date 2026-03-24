import { test, expect } from '../Fixtures/Fixture';


test('@regression Dashboard shows successful login', async ({ loginPage, dashboardPage, page }) => {

  const Page = loginPage;
  await Page.navigateToLoginPage('https://parabank.parasoft.com/parabank/index.htm');
  await Page.login();

  await page.context().storageState({ path: 'auth.json' });

  await dashboardPage.page.waitForLoadState('load');
  await expect(page).toHaveTitle("ParaBank | Accounts Overview");


});

test.use({ storageState: 'auth.json' });

test('@regression Dashboard shows successful logout', async ({ dashboardPage, appNavigator, page }) => {

  const nav = appNavigator;
  await nav.goTo('dashboard');

  await dashboardPage.page.waitForLoadState('load');
  await expect(page).toHaveTitle("ParaBank | Accounts Overview");

  await page.waitForTimeout(5000);
  await dashboardPage.logOut();

  await page.waitForTimeout(5000);

  await expect(page).toHaveTitle("ParaBank | Welcome | Online Banking");


});
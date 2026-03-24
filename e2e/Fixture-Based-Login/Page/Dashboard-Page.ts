import { Page, expect, Locator } from "@playwright/test";


export class DashboardPage {

    readonly page: Page;
    readonly homepageTitle: Locator;
    readonly logOutButton: Locator;


    constructor(page: Page) {

        this.page = page;
        this.homepageTitle = page.getByTitle("ParaBank | Accounts Overview");

        // this.usernameInput = page.locator('//input[@type=\'text\']');
        // this.passwordInput = page.locator('//input[@type=\'password\']');
        // this.rememberMeCheckbox = page.locator('input[name=remember]');
        this.logOutButton = page.getByRole('link', { name: 'Log Out' });


    }

    async logOut() {
        // await this.page.click('text=Log Out');

        await this.clickElement(this.logOutButton);

    }

    // This helper performs a click but doesn't return anything.
    /*  async clickElement(selector: string): Promise<void> {
          // In a real Playwright/Cypress test, you'd have:
          await this.page.click(selector);
          console.log(`Successfully clicked on ${selector}!`);
      }
  */
    // This helper performs a click but doesn't return anything.
    async clickElement(selector: Locator): Promise<void> {
        // In a real Playwright/Cypress test, you'd have:
        await selector.click();
        console.log(`Successfully clicked on ${selector}!`);
    }




}
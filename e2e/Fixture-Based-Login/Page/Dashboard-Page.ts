import { Page, expect, Locator } from "@playwright/test";
import { HelperFunctions } from "../helper/helperFunctions";
import * as Locators from "../Locators/Dashboard-Locators";


export class DashboardPage {

    readonly page: Page;
    readonly homepageTitle: Locator;
    readonly logOutButton: Locator;
    readonly helper: HelperFunctions;


    constructor(page: Page) {

        this.page = page;
        this.helper = new HelperFunctions(page);
        this.homepageTitle = Locators.homepageTitle(page);
        this.logOutButton = Locators.logOutButton(page);


    }

    async logOut() {
        // await this.page.click('text=Log Out');

        // await this.clickElement(this.logOutButton);
        await this.helper.click(this.logOutButton);

    }

    // This helper performs a click but doesn't return anything.
    /*  async clickElement(selector: string): Promise<void> {
          // In a real Playwright/Cypress test, you'd have:
          await this.page.click(selector);
          console.log(`Successfully clicked on ${selector}!`);
      }
  */
    // This helper performs a click but doesn't return anything.
    // async clickElement(selector: Locator): Promise<void> {
    //     // In a real Playwright/Cypress test, you'd have:
    //     await selector.click();
    //     console.log(`Successfully clicked on ${selector}!`);
    // }




}
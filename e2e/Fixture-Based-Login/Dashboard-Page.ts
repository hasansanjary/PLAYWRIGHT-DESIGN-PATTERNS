import { Page, expect, Locator } from "@playwright/test";
import * as Locators from './Login-Locators';

export class DashboardPage {

    readonly page: Page;
    readonly homepageTitle: Locator;
    

    constructor(page: Page) {
        
        this.page = page;
        this.homepageTitle = page.getByTitle("ParaBank | Accounts Overview");

        // this.usernameInput = page.locator('//input[@type=\'text\']');
        // this.passwordInput = page.locator('//input[@type=\'password\']');
        // this.rememberMeCheckbox = page.locator('input[name=remember]');
        // this.signInButton = page.locator('//input[@type="submit"]');

        
    }


}
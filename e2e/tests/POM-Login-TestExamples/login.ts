import { Page, Locator } from "@playwright/test";
import { loginData } from "./login_data";
import * as Locators from "./login_Locators";

export class LoginPage {

    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    // readonly rememberMeCheckbox: Locator;
    readonly signInButton: Locator;



    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('//input[@type=\'text\']');
        this.passwordInput = page.locator('//input[@type=\'password\']');
        // this.rememberMeCheckbox = page.locator('input[name=remember]');
        this.signInButton = page.locator('//input[@type="submit"]');
    }


    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        // await this.rememberMeCheckbox.uncheck();
        await this.signInButton.click();

    }
/*
    async newLogin(logInput: typeof loginData) {

      await Locators.username(this.page).fill(logInput.username);
      await Locators.password(this.page).fill(logInput.password);
    //   await Locators.remember(this.page).uncheck();
      await Locators.signInButton(this.page).click();
    
    };
    
*/
}
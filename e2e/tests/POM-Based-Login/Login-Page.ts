import { Page, Locator } from "@playwright/test";
import * as Locators from './Login-Locator';
import { loginData } from './Login-Data';


export class LoginPage {

    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly rememberMeCheckbox: Locator;
    readonly signInButton: Locator;
    readonly emptyLoginFieldValidation: Locator;
    readonly loginForm: Locator;
    readonly internalErrorMessage: Locator;

    constructor(page: Page) {
        this.page = page;

        // this.usernameInput = page.locator('//input[@type=\'text\']');
        // this.passwordInput = page.locator('//input[@type=\'password\']');
        // this.rememberMeCheckbox = page.locator('input[name=remember]');
        // this.signInButton = page.locator('//input[@type="submit"]');

        this.usernameInput = Locators.username(page);
        this.passwordInput = Locators.password(page);
        this.rememberMeCheckbox = Locators.remember(page);
        this.signInButton = Locators.signInButton(page);
        this.emptyLoginFieldValidation = Locators.emptyLoginFieldValidation(page);
        this.loginForm = Locators.loginForm(page);
        this.internalErrorMessage = Locators.internalErrorMessage(page);
    }

    async navigateToLoginPage(url: string) {
        await this.page.goto(url);
    }


    async loginPage(logData: typeof loginData ) {
        await this.usernameInput.fill(logData.username);
        await this.passwordInput.fill(logData.password);
        // await this.rememberMeCheckbox.uncheck();
        await this.signInButton.click();



    }

    async clickLoginButton() {
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
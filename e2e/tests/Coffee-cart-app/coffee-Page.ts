import { Page, Locator } from "@playwright/test";
// import * as Locators from './Login-Locators';
// import { loginData } from './LoginData';


export class CoffeePage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToCoffeePage(url: string) {
        await this.page.goto(url);
    }

}
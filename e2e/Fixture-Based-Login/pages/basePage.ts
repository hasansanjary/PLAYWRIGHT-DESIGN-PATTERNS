import { Page } from "@playwright/test";
import { HelperFunctions } from "../helper/helperFunctions";

export class BasePage {
    readonly page: Page;
    readonly helper: HelperFunctions;

    constructor(page: Page) {
        this.page = page;
        this.helper = new HelperFunctions(page);
    }

    async goto(url: string): Promise<void> {
        await this.page.goto(url);
        await this.helper.waitForPageLoad();
    }
}
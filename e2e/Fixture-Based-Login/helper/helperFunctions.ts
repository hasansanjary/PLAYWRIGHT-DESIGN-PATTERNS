import { Page, expect, Locator } from "@playwright/test";

export class HelperFunctions {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async click(locator: Locator): Promise<void> {
        await locator.waitFor({ state: "visible" });
        await locator.click();
    }

    async fill(locator: Locator, text: string): Promise<void> {
        await locator.waitFor({ state: "visible" });
        await locator.fill(text);
    }

    async type(locator: Locator, text: string, options?: Parameters<Locator["type"]>[1]): Promise<void> {
        await locator.waitFor({ state: "visible" });
        await locator.type(text, options);
    }

    async getText(locator: Locator): Promise<string> {
        await locator.waitFor({ state: "visible" });
        return (await locator.textContent()) ?? "";
    }

    async waitForPageLoad(): Promise<void> {
        await this.page.waitForLoadState("networkidle");
    }

    async expectVisible(locator: Locator): Promise<void> {
        await expect(locator).toBeVisible();
    }

}


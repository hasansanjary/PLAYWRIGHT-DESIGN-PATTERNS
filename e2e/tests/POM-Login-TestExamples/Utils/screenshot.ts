import {Page} from '@playwright/test';

export async function takeScreenshot(page: Page, path: string) {
    await page.screenshot({ path: path, fullPage: true });
}
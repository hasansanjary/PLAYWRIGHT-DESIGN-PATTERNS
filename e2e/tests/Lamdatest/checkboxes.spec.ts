import { test, expect, Locator } from '@playwright/test';

test('checkboxes', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/checkbox-demo');

    //handle single checkbox
    const singleCheckboxLocator: Locator = await page.getByLabel('Click on check box');
    await singleCheckboxLocator.check();

    const singleCheckboxMessageLocator: Locator = await page.getByText('Checked!', { exact: true });
    await expect(singleCheckboxMessageLocator).toContainText('Checked!');

    //handle disable checkboxes
    const disableCheckbox1Locator: Locator = await page.getByLabel('Option 3').first();
    console.log("Is Option 3 checkbox enabled: ", + await disableCheckbox1Locator.isEnabled());

    //handle multiple checkboxes
    const multipleCheckboxesLocator: Locator[] = await page.locator("//input[@class='mr-8' and @type='checkbox']").all();

    console.log("Total number of checkboxes: ", + await multipleCheckboxesLocator.length);

    for (const idx in multipleCheckboxesLocator) {
        await multipleCheckboxesLocator[idx].check();
        expect(await multipleCheckboxesLocator[idx].isChecked());

        const uncheckButtonLocator: Locator = await page.getByRole('button', { name: 'Uncheck All' });
        expect(uncheckButtonLocator).toBeVisible();
  }


});

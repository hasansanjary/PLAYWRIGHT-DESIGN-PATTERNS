import { test, expect, Locator } from '@playwright/test';

test('checkboxes', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/checkbox-demo');
  /*
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

*/
  // await expect(page.getByRole('checkbox', { name: 'Option' })).toHaveCount(8);

  // await page.getByLabel('Option 1').last().check();

  // await page.locator('label').filter({ hasText: /^Option 1$/ }).check();

  // const options = page.locator('label').filter({ hasText: /^Option/ });
  // const options = page.locator('label').filter({ hasText: 'Option 2' });

  const options = page.locator('label')
  // .filter({ hasText: /^Option [1-4]$/ });
  // .filter({ hasText: /^Option/ });
  // .filter({ has: page.locator('input[type="checkbox"]') });

const count = await options.count();

for (let i = 0; i < count; i++) {
  const label = options.nth(i);
  // const checkbox = label.locator('input[type="checkbox"]');

  // if (await checkbox.isEnabled()) {
  //   await checkbox.check();
  // }

  if (await label.isEnabled()) {
    await label.check();
  }
}

expect(await page.getByRole('button', { name: 'Uncheck All' })).toHaveText('Uncheck All');


const multichk = page.locator('label').filter({ has: page.locator('//input[@type="checkbox" and @class="mr-8"]') });
// page.getByRole('button', { name: 'Uncheck All' }).click();

const count2 = await multichk.count();

for (let i = 0; i < count2; i++) {
  const label = multichk.nth(i);

  if ( await label.isChecked) {
    console.log('Checkbox is still checked: ' + await label.isChecked());
    page.getByRole('button', { name: 'Uncheck All' }).click();
  }
}
  // const checkbox = label.locator('input[type="checkbox"]');
expect(await page.getByRole('button', { name: 'Check All' })).toHaveText('Check All');

  // console.log('Labels found: ' + (await options.allTextContents()).length);
  // .filter({ hasText: /^Option 1/ });
  // .filter({ hasText: 'Click on check box' })
  // .filter({ hasText: ['Option 1', 'Option 2', 'Option 3', 'Option 4'] });
  // .filter({ hasText: 'Option 2' })
  // .filter({ hasText: 'Option 3' })
  // .filter({ hasText: 'Option 4' });
  // const options = page.locator('input[type="checkbox"]');

  // await expect(page.locator('label')).toHaveText(['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Click on check box']);

  // const count = await options.count();
  // console.log('Total checkboxes found: ' + count);
  // for (let i = 0; i < count; i++) {
  //   await options.nth(i).check();
  //   // .locator('input[type="checkbox"]').check();
  // }

  // for (const idx in multipleCheckboxes2Locator) {
  //     await multipleCheckboxes2Locator[idx].uncheck();
  //     expect(!(await multipleCheckboxes2Locator[idx].isChecked()));
  // }


});

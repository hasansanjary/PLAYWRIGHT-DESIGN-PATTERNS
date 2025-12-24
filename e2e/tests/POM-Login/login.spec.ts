import { test, expect } from '@playwright/test';

test.describe('Sign in page', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  });

  test('successful login with valid credentials', async ({ page }) => {
    // Enter valid credentials
    await page.fill('//input[@type=\'text\']', 'demologin');
    await page.fill('//input[@type=\'password\']', 'demopass');
    
    // Ensure remember me is unchecked
    // await page.uncheck('input[name=remember]');
    
    // Click Sign In button
    await page.click('//input[@type="submit"]');
    // await page.click('button[type=submit]');
    // Verify successful login and redirect to authenticated landing page
    // await expect(page).not.toHaveURL(/\/signin/);

  });

});

  
import { test, expect } from '@playwright/test';

test.describe('Sign in page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/signin');
  });

  test('successful login with valid credentials', async ({ page }) => {
    // Enter valid credentials
    await page.fill('#username', 'demologin');
    await page.fill('#password', 'demopass');
    
    // Ensure remember me is unchecked
    await page.uncheck('input[name=remember]');
    
    // Click Sign In button
    await page.click('button[type=submit]');
    
    // Verify successful login and redirect to authenticated landing page
    await expect(page).not.toHaveURL(/\/signin/);

  });

});

  
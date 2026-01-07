import { test, expect } from '@playwright/test';
import { loginData } from './FPM-Data';
import { realWorldLogin } from './FPM-Actions';

test.describe('FPM-based login', () => {

  test.beforeEach(async ({ page }) => {
    // await page.goto('http://localhost:3000/signin');
    await page.goto('/');
  });

  test('successful login with valid credentials', async ({ page }) => {
    // Enter valid credentials
    await realWorldLogin(page, loginData);

    // await page.screenshot({ path: 'after-login.png', fullPage: true });

    // Verify successful login and redirect to authenticated landing page
    await expect(page).not.toHaveURL(/\/signin/);

  });

});
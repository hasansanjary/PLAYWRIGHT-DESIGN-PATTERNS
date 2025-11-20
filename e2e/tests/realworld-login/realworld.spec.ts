import { test, expect } from '@playwright/test';
import { loginData } from './realworld.data';
import { realWorldLogin } from './realworld.actions';

test.describe('Sign in page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/signin');
  });

  test('successful login with valid credentials', async ({ page }) => {
    // Enter valid credentials
    await realWorldLogin(page, loginData);

    // Verify successful login and redirect to authenticated landing page
    await expect(page).not.toHaveURL(/\/signin/);

  });

});
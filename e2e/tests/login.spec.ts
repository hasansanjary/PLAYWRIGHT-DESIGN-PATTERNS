import { test, expect } from '@playwright/test';

test.describe('Sign in page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/signin');
  });

  test('renders main controls', async ({ page }) => {
    await expect(page.locator('#username')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.locator('input[name=remember]')).toBeVisible();
    await expect(page.getByRole('button', { name: /sign in/i })).toBeVisible();
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

  test('empty submit stays on signin (client validation or no navigation)', async ({ page }) => {
    await page.click('button[type=submit]');
    // allow any client-side validation UI to appear briefly
    await page.waitForTimeout(500);
    expect(page.url()).toContain('/signin');
  });

  test('invalid credentials do not navigate away (shows error or stays)', async ({ page }) => {
    await page.fill('#username', 'valid_user@example.com');
    await page.fill('#password', 'WrongPassword');
    await page.click('button[type=submit]');

    // either an error message appears or the app remains on the signin route
    let showedError = false;
    try {
      await page.locator('text=/invalid|incorrect|error|wrong/i').first().waitFor({ state: 'visible', timeout: 2000 });
      showedError = true;
    } catch (e) {
      // ignore -- we'll assert based on URL below
    }

    expect(showedError || page.url().includes('/signin')).toBeTruthy();
  });

  test('sign up link navigates to /signup', async ({ page }) => {
    await page.locator('text=Don\'t have an account? Sign Up').click();
    await expect(page).toHaveURL(/\/signup/);
  });

  test('remember me checkbox toggles', async ({ page }) => {
    const chk = page.locator('input[name=remember]');
    await expect(chk).toBeVisible();
    // toggle on
    await chk.check();
    await expect(chk).toBeChecked();
    // toggle off
    await chk.uncheck();
    await expect(chk).not.toBeChecked();
  });

  test('pressing Enter in password submits the form (no navigation expected for invalid creds)', async ({ page }) => {
    await page.fill('#username', 'foo');
    await page.fill('#password', 'bar');
    await page.press('#password', 'Enter');
    await page.waitForTimeout(500);
    expect(page.url()).toContain('/signin');
  });
});

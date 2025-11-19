import { Page } from "@playwright/test";

// Login-related locators used in login.spec.ts
export const username = (page: Page) => page.locator('#username');
export const password = (page: Page) => page.locator('#password');
export const remember = (page: Page) => page.locator('input[name=remember]');
export const signInButton = (page: Page) => page.locator('button[type=submit]');
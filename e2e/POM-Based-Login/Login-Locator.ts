import { Page } from "@playwright/test";

// Login-related locators used in login.spec.ts
export const username = (page: Page) =>  page.locator('//input[@type=\'text\']');
export const password = (page: Page) =>  page.locator('//input[@type=\'password\']');
export const remember = (page: Page) => page.locator('input[name=remember]');
export const signInButton = (page: Page) => page.locator('//input[@type="submit"]');

export const emptyLoginFieldValidation = (page: Page) => page.locator('//p[@class=\'error\']');
export const loginForm = (page: Page) => page.locator('//form[@name=\'login\']');
export const internalErrorMessage = (page: Page) => page.locator('//p[@class=\'error\']');
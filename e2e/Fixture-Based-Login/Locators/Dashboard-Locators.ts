import { Page } from "@playwright/test";

// Login-related locators used in login.spec.ts
export const logOutButton = (page: Page) => page.getByRole('link', { name: 'Log Out' });
export const homepageTitle = (page: Page) => page.getByTitle("ParaBank | Accounts Overview");

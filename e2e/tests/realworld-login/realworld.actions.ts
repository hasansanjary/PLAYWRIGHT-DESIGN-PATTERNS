import { Page } from '@playwright/test';
import * as Locators from './realworld.locators';
import { loginData } from './realworld.data';

export const realWorldLogin = async (page: Page, logInput: typeof loginData) => {
  await Locators.username(page).fill(logInput.username);
  await Locators.password(page).fill(logInput.password);
  await Locators.remember(page).uncheck();
  await Locators.signInButton(page).click();

};
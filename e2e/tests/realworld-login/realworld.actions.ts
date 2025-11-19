import { Page } from '@playwright/test';
import * as Locators from './realworld.locators';
import { LoginData } from './realworld.data';

export const realWorldLogin = async (page: Page, credInput: LoginData) => {
  await Locators.username(page).fill(credInput.username);
  await Locators.password(page).fill(credInput.password);
  await Locators.remember(page).uncheck();
  await Locators.signInButton(page).click();

};
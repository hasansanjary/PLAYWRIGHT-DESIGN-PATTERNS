import { Page } from '@playwright/test';
import * as Locators from './FPM-Realworld.locators';
import { loginData } from './FPM-Realworld.data';

export const realWorldLogin = async (page: Page, logInput: typeof loginData) => {

  console.log("Type checking the test data: ", typeof logInput.username, typeof logInput.password);
  await Locators.username(page).fill(logInput.username);
  await Locators.password(page).fill(logInput.password);
  await Locators.remember(page).uncheck();
  await Locators.signInButton(page).click();

};

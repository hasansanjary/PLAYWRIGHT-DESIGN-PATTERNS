import { Page } from '@playwright/test';
import * as Locators from './FPM-Locators';
import { loginData } from './FPM-Data';

export const realWorldLogin = async (page: Page, logInput: typeof loginData) => {

  console.log("Type checking the test data: ", typeof logInput.username, typeof logInput.password);

  await Locators.username(page).fill(logInput.username);
  await Locators.password(page).fill(logInput.password);
  await Locators.remember(page).uncheck();
  await Locators.signInButton(page).click();

};

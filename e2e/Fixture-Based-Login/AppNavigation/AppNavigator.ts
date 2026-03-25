import { Page } from '@playwright/test';

type AppPage = 'login' | 'dashboard';

const PAGE_URLS: Record<AppPage, string> = {
  login: 'https://parabank.parasoft.com/parabank/index.htm',
  dashboard: 'https://parabank.parasoft.com/parabank/overview.htm',
};

export class AppNavigator {
  constructor(private page: Page) { }

  async goTo(pageName: AppPage) {
    await this.page.goto(PAGE_URLS[pageName]);
    await this.page.waitForURL(`**${PAGE_URLS[pageName]}`);
  }

  //   async isAt(pageName: AppPage): Promise<boolean> {
  //     const url = new URL(this.page.url());
  //     return url.pathname === PAGE_URLS[pageName];
  //   }

  async isAt(pageName: AppPage): Promise<boolean> {
    const currentUrl = new URL(this.page.url());
    const expectedUrl = new URL(PAGE_URLS[pageName]);
    return currentUrl.pathname === expectedUrl.pathname;
  }
}
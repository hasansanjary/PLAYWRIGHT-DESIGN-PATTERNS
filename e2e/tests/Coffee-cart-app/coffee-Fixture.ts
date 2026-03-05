import { test as base } from '@playwright/test';
import { CoffeePage } from './coffee-Page';

const test = base.extend<{ coffeePage: CoffeePage }>({
    coffeePage: async ({ page }, use) => {
        const coffeePage = new CoffeePage(page);
        await coffeePage.navigateToCoffeePage('https://coffee-cart.app/');
        await use(coffeePage);
    }
});

export { test };
export { expect } from '@playwright/test';
import { test, expect } from './coffee-Fixture';

test.describe('coffee page landing', () => {

    test('should navigate to coffee page', async ({ coffeePage }) => {

        await expect(coffeePage.page).toHaveURL('https://coffee-cart.app/');

        // await expect(page.url()).toBe('https://coffee-cart.app/');

        
        

    });

});
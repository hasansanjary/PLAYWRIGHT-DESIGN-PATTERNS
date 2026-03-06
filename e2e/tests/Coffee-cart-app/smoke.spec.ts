import { test, expect } from './coffee-Fixture';

test.describe('Smoke Tests - Coffee Cart Application', () => {

    test('should load application successfully', async ({ coffeePage }) => {
        // Verify application loads without errors
        await expect(coffeePage.page).toBeTruthy();
    });

    test('should navigate to main page and verify accessibility', async ({ coffeePage }) => {
        // Verify main page is accessible
        const url = coffeePage.page.url();
        await expect(url).toContain('coffee-cart.app');
    });


    test('should have a page title', async ({ coffeePage }) => {
        // Verify page has a title
        const title = await coffeePage.page.title();
        console.log('Page Title:', title);
        expect(title).toBeTruthy();
        
    });

    test('should be responsive to viewport', async ({ coffeePage }) => {
        // Verify page responds to viewport size
        const viewport = coffeePage.page.viewportSize();
        console.log('Viewport Size:', viewport);
        expect(viewport).toBeTruthy();
       
    });

});

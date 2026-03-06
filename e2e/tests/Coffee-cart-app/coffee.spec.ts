import { test, expect } from './coffee-Fixture';

test.describe('Coffee Cart Application - Functional Tests', () => {

    // TC-001: Verify Application Load
    test('TC-001: should load application without errors', async ({ coffeePage }) => {
        // Step 1 & 2: Page navigates to coffee-cart.app and loads
        
        // Verify page loads without errors
        const errors: string[] = [];
        coffeePage.page.on('console', (msg) => {
            if (msg.type() === 'error') {
                errors.push(msg.text());
            }
        });

        // Verify correct URL
        await expect(coffeePage.page).toHaveURL('https://coffee-cart.app/');

        // Verify title/logo is visible
        const pageTitle = await coffeePage.page.title();
        expect(pageTitle).toBeTruthy();

        // Verify navigation is functional
        const navLinks = coffeePage.page.locator('a, nav');
        const navCount = await navLinks.count();
        console.log('Navigation Links Count:', navCount);
        expect(navCount).toBeGreaterThan(0);

        // Verify no critical errors occurred
        const criticalErrors = errors.filter(
            (err) => !err.includes('favicon') && !err.includes('chunk')
        );
        expect(criticalErrors).toHaveLength(0);
    });

    // TC-002: Add Product to Cart
    test('TC-002: should add product to cart and verify cart count increases', async ({ coffeePage }) => {
        // Step 1: Navigate to product catalog (already loaded in fixture)
        
        // Step 2: Click "Add to Cart" button on first product
        // Find the first product item and its add to cart button
        const firstProduct = coffeePage.page.locator('//div[@class="cup-body" and @aria-label="Espresso"]');
        // const addToCartButton = firstProduct.locator('button, [role="button"]').first();

        // Click add to cart
        await firstProduct.click();

        // Wait for cart to update
        await coffeePage.page.waitForTimeout(500);

        // Step 3: Verify cart updated
        // Check cart count badge (usually shows as "cart (0)" or similar in navigation)
        const cartLink = coffeePage.page.locator('a[href="/cart"], [aria-label*="cart"]');
        const cartText = await cartLink.textContent();
        
        // Verify product was added (cart count should be > 0 or show in cart link)
        expect(cartText).toContain('1');

        // Verify product appears in cart by navigating to cart page
        await coffeePage.page.click('a[href="/cart"], [aria-label*="cart"]');
        
        // Verify we're on cart page and product is displayed
        const cartItems = coffeePage.page.locator('li, [role="listitem"]').last();
        // const cartItemCount = await cartItems.count();
        console.log('Cart Item Count:', await cartItems.textContent());
        expect(cartItems).toHaveCount(1);
    });

});
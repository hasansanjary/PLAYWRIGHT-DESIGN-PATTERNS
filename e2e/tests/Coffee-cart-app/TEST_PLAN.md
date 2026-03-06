# Coffee Cart Application - Test Plan

## 1. Overview
This document outlines the comprehensive test plan for the Coffee Cart application (https://coffee-cart.app/). The tests will be implemented using Playwright with Fixture-based and Page Object Model (POM) design patterns.

---

## 2. Scope of Testing

### In Scope:
- UI Elements and Navigation
- Coffee Product Catalog
- Shopping Cart Functionality
- Product Selection and Customization
- Checkout Process
- Payment Simulation
- Error Handling
- Responsive Design (Desktop/Mobile)

### Out of Scope:
- Actual payment processing
- Backend API testing (covered in API tests)
- Third-party service integrations

---

## 3. Test Levels

### 3.1 Smoke Tests
**Purpose:** Verify basic application functionality

- [ ] Application loads successfully
- [ ] Main page is accessible
- [ ] Navigation menu is visible
- [ ] All major UI elements are present

### 3.2 Functional Tests
**Purpose:** Verify core features work as expected

#### 3.2.1 Navigation & Page Load
- [ ] Landing page navigates correctly
- [ ] URL is correct (https://coffee-cart.app/)
- [ ] Page title is correct
- [ ] Header/Footer are visible

#### 3.2.2 Product Catalog
- [ ] All coffee products are displayed
- [ ] Product images load correctly
- [ ] Product names are visible
- [ ] Product prices are displayed
- [ ] Product descriptions are shown
- [ ] Products can be filtered (if applicable)
- [ ] Products can be sorted (if applicable)

#### 3.2.3 Shopping Cart
- [ ] Add single product to cart
- [ ] Add multiple products to cart
- [ ] Update product quantity
- [ ] Remove product from cart
- [ ] Cart total price calculates correctly
- [ ] Cart badge shows correct count
- [ ] Cart persists on page refresh (if applicable)
- [ ] Empty cart displays appropriate message

#### 3.2.4 Product Details
- [ ] Product details page loads
- [ ] All product information is displayed
- [ ] Size/variant selection works (if applicable)
- [ ] Quantity selector works
- [ ] Add to cart button is functional

#### 3.2.5 Checkout Process
- [ ] Checkout page loads
- [ ] Order summary is correct
- [ ] Shipping address form (if applicable)
- [ ] Payment method selection (if applicable)
- [ ] Order confirmation message
- [ ] Order number is displayed
- [ ] Confirmation email (if applicable)

### 3.3 Edge Cases & Error Handling
- [ ] Invalid quantity input
- [ ] Out of stock product handling
- [ ] Network error handling
- [ ] Cart with maximum items
- [ ] Removing item from cart during checkout
- [ ] Browser back button during checkout

### 3.4 Regression Tests
- [ ] Existing test cases pass after new features
- [ ] UI elements maintain alignment
- [ ] Functionality doesn't break with updates

---

## 4. Test Data Requirements

### Products:
- Coffee type (Espresso, Americano, Latte, etc.)
- Sizes (Small, Medium, Large)
- Prices
- Availability status

### User Data:
- Guest checkout (if applicable)
- Registered user checkout (if applicable)
- Delivery address
- Contact information

---

## 5. Test Scenarios

### Scenario 1: Basic Product Browsing
```
Given: User is on the coffee cart landing page
When: User views the product catalog
Then: All products are displayed with correct information
      And product images are visible
      And prices are displayed correctly
```

### Scenario 2: Add Single Product to Cart
```
Given: User is viewing the product catalog
When: User clicks "Add to Cart" on a product
Then: Product is added to the shopping cart
      And cart count is updated
      And success message is shown (if applicable)
```

### Scenario 3: Complete Purchase
```
Given: User has products in the cart
When: User proceeds to checkout
Then: Cart items are displayed correctly
      And total price is calculated correctly
      And user can complete purchase
      And confirmation is shown
```

### Scenario 4: Update Cart Quantity
```
Given: User has items in the cart
When: User updates the quantity of a product
Then: Quantity is updated
      And total price is recalculated
      And cart reflects the change
```

### Scenario 5: Remove Product from Cart
```
Given: User has multiple items in the cart
When: User removes a product
Then: Product is removed from the cart
      And cart count is updated
      And total price is recalculated
```

---

## 6. Test Cases

### TC-001: Verify Application Load
**Precondition:** User has internet access
**Steps:**
1. Open https://coffee-cart.app/
2. Wait for page to load

**Expected Result:**
- Page loads without errors
- Title/logo is visible
- Navigation is functional

**Status:** [ ] Not Yet [ ] Pass [ ] Fail

---

### TC-002: Add Product to Cart
**Precondition:** Landing page is accessible
**Steps:**
1. Navigate to product catalog
2. Click "Add to Cart" button on first product
3. Verify cart updated

**Expected Result:**
- Product added to cart
- Cart count increases by 1
- Product appears in cart

**Status:** [ ] Not Yet [ ] Pass [ ] Fail

---

### TC-003: Verify Cart Total
**Precondition:** Products in cart
**Steps:**
1. Add product with price $5.99
2. Add product with price $3.99
3. Check cart total

**Expected Result:**
- Total = $9.98
- Price calculation is correct

**Status:** [ ] Not Yet [ ] Pass [ ] Fail

---

### TC-004: Complete Checkout
**Precondition:** Items in cart
**Steps:**
1. Click "Checkout" button
2. Review order summary
3. Complete purchase (if checkout available)
4. Verify confirmation

**Expected Result:**
- Checkout page loads
- Summary displays correctly
- Order confirmed (if applicable)

**Status:** [ ] Not Yet [ ] Pass [ ] Fail

---

## 7. Test Execution Strategy

### Phase 1: Smoke Testing (Week 1)
- Basic navigation
- Page load verification
- Core UI elements

### Phase 2: Functional Testing (Week 1-2)
- Product catalog
- Shopping cart operations
- Cart calculations

### Phase 3: End-to-End Testing (Week 2)
- Complete user journeys
- Checkout process
- Order confirmation

### Phase 4: Regression Testing (Ongoing)
- Re-run all tests after updates
- Verify no breaking changes

---

## 8. Success Criteria

✅ **All Smoke Tests Pass:** Application is functional
✅ **Core Features Work:** Add/remove/checkout works
✅ **No Critical Bugs:** No blocking issues found
✅ **Calculations Accurate:** Cart totals are correct
✅ **Cross-browser Compatibility:** Works on Chrome, Firefox, Safari, Edge

---

## 9. Tools & Technologies

- **Framework:** Playwright
- **Language:** TypeScript
- **Pattern:** Fixture-based testing + Page Object Model
- **CI/CD:** GitHub Actions (if applicable)
- **Reporting:** Playwright HTML Reporter

---

## 10. Known Limitations & Assumptions

- Payment gateway is mocked/simulated
- Tests run against production-like environment
- Network connectivity is stable
- Browser is up-to-date

---

## 11. Sign-off

| Role | Name | Date | Status |
|------|------|------|--------|
| QA Lead | | | |
| Dev Lead | | | |
| Product Owner | | | |

---

## 12. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-03-05 | AI Assistant | Initial test plan created |
| | | | |

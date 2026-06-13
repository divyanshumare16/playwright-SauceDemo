const { test, expect } = require('@playwright/test');

const LoginPage =
    require('../src/pages/LoginPage');

const InventoryPage =
    require('../src/pages/InventoryPage');

const CartPage =
    require('../src/pages/CartPage');

const CheckoutPage =
    require('../src/pages/CheckoutPage');

test('Complete Checkout',
    async ({ page }) => {

        const login =
            new LoginPage(page);

        const inventory =
            new InventoryPage(page);

        const cart =
            new CartPage(page);

        const checkout =
            new CheckoutPage(page);

        await login.goto();

        await login.login(
            'standard_user',
            'secret_sauce'
        );

        await inventory.addFirstProduct();

        await cart.openCart();

        await checkout.completeCheckout(
            'John',
            'Doe',
            '411001'
        );

        await expect(
            page.locator('.complete-header')
        ).toContainText('Thank you');
    });

test('Checkout Empty Fields',
    async ({ page }) => {

        const login =
            new LoginPage(page);

        const inventory =
            new InventoryPage(page);

        const cart =
            new CartPage(page);

        const checkout =
            new CheckoutPage(page);

        await login.goto();

        await login.login(
            'standard_user',
            'secret_sauce'
        );

        await inventory.addFirstProduct();

        await cart.openCart();

        await checkout.startCheckout();

        await checkout.continue();

        await expect(
            page.locator('[data-test="error"]')
        ).toBeVisible();
    });
const { test, expect } = require('@playwright/test');

const LoginPage =
    require('../src/pages/LoginPage');

const InventoryPage =
    require('../src/pages/InventoryPage');

const CartPage =
    require('../src/pages/CartPage');

test('Add Product To Cart',
    async ({ page }) => {

        const login =
            new LoginPage(page);

        const inventory =
            new InventoryPage(page);

        const cart =
            new CartPage(page);

        await login.goto();

        await login.login(
            'standard_user',
            'secret_sauce'
        );

        await inventory.addFirstProduct();

        await cart.openCart();

        expect(
            await cart.getCartItemsCount()
        ).toBe(1);
    });

test('Add Multiple Products',
    async ({ page }) => {

        const login =
            new LoginPage(page);

        const inventory =
            new InventoryPage(page);

        const cart =
            new CartPage(page);

        await login.goto();

        await login.login(
            'standard_user',
            'secret_sauce'
        );

        await inventory.addTwoProducts();

        await cart.openCart();

        expect(
            await cart.getCartItemsCount()
        ).toBe(2);
    });

test('Remove Product',
    async ({ page }) => {

        const login =
            new LoginPage(page);

        const inventory =
            new InventoryPage(page);

        const cart =
            new CartPage(page);

        await login.goto();

        await login.login(
            'standard_user',
            'secret_sauce'
        );

        await inventory.addFirstProduct();

        await cart.openCart();

        await cart.removeFirstProduct();

        expect(
            await cart.getCartItemsCount()
        ).toBe(0);
    });
const { test, expect } = require('@playwright/test');
const LoginPage = require('../src/pages/LoginPage');

test('Inventory Page Smoke', async ({ page }) => {

    const login = new LoginPage(page);

    await login.goto();

    await login.login(
        'standard_user',
        'secret_sauce'
    );

    await expect(
        page.locator('.inventory_list')
    ).toBeVisible();
});

test('Cart Page Smoke', async ({ page }) => {

    const login = new LoginPage(page);

    await login.goto();

    await login.login(
        'standard_user',
        'secret_sauce'
    );

    await page.click('.shopping_cart_link');

    await expect(
        page.locator('.cart_list')
    ).toBeVisible();
});

test('Checkout Page Smoke', async ({ page }) => {

    const login = new LoginPage(page);

    await login.goto();

    await login.login(
        'standard_user',
        'secret_sauce'
    );

    await page
        .locator('button')
        .filter({ hasText: 'Add to cart' })
        .first()
        .click();

    await page.click('.shopping_cart_link');

    await page.click('#checkout');

    await expect(
        page.locator('.checkout_info')
    ).toBeVisible();
});
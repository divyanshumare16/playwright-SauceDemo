const { test, expect } = require('@playwright/test');
const LoginPage = require('../src/pages/LoginPage');
const InventoryPage = require('../src/pages/InventoryPage');

test.beforeEach(async ({ page }) => {

    const login = new LoginPage(page);

    await login.goto();

    await login.login(
        'standard_user',
        'secret_sauce'
    );
});

test('Verify Products Available', async ({ page }) => {

    const inventory = new InventoryPage(page);

    const count =
        await inventory.getProductCount();

    expect(count).toBeGreaterThan(0);
});

test('Sort A-Z', async ({ page }) => {

    const inventory = new InventoryPage(page);

    await inventory.sort('az');

    await expect(
        page.locator('.inventory_item')
            .first()
    ).toBeVisible();
});

test('Sort Z-A', async ({ page }) => {

    const inventory = new InventoryPage(page);

    await inventory.sort('za');

    await expect(
        page.locator('.inventory_item')
            .first()
    ).toBeVisible();
});

test('Sort Price Low To High', async ({ page }) => {

    const inventory = new InventoryPage(page);

    await inventory.sort('lohi');

    await expect(
        page.locator('.inventory_item')
            .first()
    ).toBeVisible();
});
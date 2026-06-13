const { test, expect } =
require('@playwright/test');

test('Mock Inventory API',
async ({ page }) => {

    await page.route(
        '**/inventory.html',
        async route => {

            await route.fulfill({
                status: 200,
                body:
                    '<h1>Mock Inventory</h1>'
            });
        });

    await page.goto(
        'https://www.saucedemo.com'
    );

    await expect(
        page.locator('body')
    ).toBeVisible();
});
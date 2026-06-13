const { test, expect } = require('@playwright/test');
const LoginPage = require('../src/pages/LoginPage');

test('Script Injection Test', async ({ page }) => {

    const login = new LoginPage(page);

    await login.goto();

    await login.login(
        '<script>alert(1)</script>',
        '<script>alert(1)</script>'
    );

    await expect(
        page.locator('[data-test="error"]')
    ).toBeVisible();
});
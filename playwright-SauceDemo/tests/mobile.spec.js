const { test, expect, devices } = require('@playwright/test');
const LoginPage = require('../src/pages/LoginPage');

test.use({
    ...devices['iPhone 13']
});

test('Mobile Login Test', async ({ page }) => {

    const login = new LoginPage(page);

    await login.goto();

    await login.login(
        'standard_user',
        'secret_sauce'
    );

    await expect(page)
        .toHaveURL(/inventory/);
});
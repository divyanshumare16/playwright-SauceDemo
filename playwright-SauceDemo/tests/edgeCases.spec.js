const { test, expect } = require('@playwright/test');
const LoginPage = require('../src/pages/LoginPage');

test.skip('Network Failure Test', async ({ page }) => {

    await page.route(
        '**/*',
        route => route.abort()
    );

    await expect(
        page.goto(
            'https://www.saucedemo.com'
        )
    ).rejects.toThrow();

});

test('Performance User Login', async ({ page }) => {

    const login =
        new LoginPage(page);

    await login.goto();

    await login.login(
        'performance_glitch_user',
        'secret_sauce'
    );

    await expect(page)
        .toHaveURL(/inventory/);

});
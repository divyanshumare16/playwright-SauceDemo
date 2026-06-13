const { test, expect } = require('@playwright/test');
const LoginPage = require('../src/pages/LoginPage');

test('Valid Login', async ({ page }) => {

    const login = new LoginPage(page);

    await login.goto();

    await login.login(
        'standard_user',
        'secret_sauce'
    );

    await expect(page).toHaveURL(/inventory/);
});

test('Invalid Login', async ({ page }) => {

    const login = new LoginPage(page);

    await login.goto();

    await login.login(
        'standard_user',
        'wrong_password'
    );

    await expect(
        page.locator('[data-test="error"]')
    ).toBeVisible();
});

test('Locked User Login', async ({ page }) => {

    const login = new LoginPage(page);

    await login.goto();

    await login.login(
        'locked_out_user',
        'secret_sauce'
    );

    await expect(
        page.locator('[data-test="error"]')
    ).toContainText('locked out');
});

test('Empty Username', async ({ page }) => {

    const login = new LoginPage(page);

    await login.goto();

    await login.login('', 'secret_sauce');

    await expect(
        page.locator('[data-test="error"]')
    ).toContainText('Username is required');
});

test('Empty Password', async ({ page }) => {

    const login = new LoginPage(page);

    await login.goto();

    await login.login('standard_user', '');

    await expect(
        page.locator('[data-test="error"]')
    ).toContainText('Password is required');
});
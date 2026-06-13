const { test, expect } = require('@playwright/test');

const LoginPage =
    require('../src/pages/LoginPage');

const ProductPage =
    require('../src/pages/ProductPage');

test('Verify Product Details',
    async ({ page }) => {

        const login =
            new LoginPage(page);

        const product =
            new ProductPage(page);

        await login.goto();

        await login.login(
            'standard_user',
            'secret_sauce'
        );

        await product.openFirstProduct();

        await expect(
            page.locator(
                '.inventory_details_desc'
            )
        ).toBeVisible();

        await expect(
            page.locator(
                '.inventory_details_price'
            )
        ).toBeVisible();
    });

test('Back Navigation',
    async ({ page }) => {

        const login =
            new LoginPage(page);

        const product =
            new ProductPage(page);

        await login.goto();

        await login.login(
            'standard_user',
            'secret_sauce'
        );

        await product.openFirstProduct();

        await product.goBack();

        await expect(page)
            .toHaveURL(/inventory/);
    });
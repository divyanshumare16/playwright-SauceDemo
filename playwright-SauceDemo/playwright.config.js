const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

    testDir: './tests',

    timeout: 30000,

    retries: 1,

    workers: 2,

    reporter: [
        ['html'],
        ['list']
    ],

    use: {

        baseURL:
            'https://www.saucedemo.com',

        headless: true,

        screenshot:
            'only-on-failure',

        video:
            'retain-on-failure',

        trace:
            'retain-on-failure'
    }
});
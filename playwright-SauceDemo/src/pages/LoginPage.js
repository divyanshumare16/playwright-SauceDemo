class LoginPage {

    constructor(page) {
        this.page = page;

        this.username = '#user-name';
        this.password = '#password';
        this.loginBtn = '#login-button';
        this.errorMsg = '[data-test="error"]';
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.page.fill(this.username, username);
        await this.page.fill(this.password, password);
        await this.page.click(this.loginBtn);
    }

    async getErrorMessage() {
        return await this.page.locator(this.errorMsg).textContent();
    }
}

module.exports = LoginPage;
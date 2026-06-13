class CheckoutPage {

    constructor(page) {

        this.page = page;

        this.checkoutBtn = '#checkout';

        this.firstName = '#first-name';
        this.lastName = '#last-name';
        this.zipCode = '#postal-code';

        this.continueBtn = '#continue';
        this.finishBtn = '#finish';

        this.completeHeader = '.complete-header';
        this.errorMsg = '[data-test="error"]';
    }

    async startCheckout() {
        await this.page.click(this.checkoutBtn);
    }

    async enterInformation(first, last, zip) {

        await this.page.fill(this.firstName, first);
        await this.page.fill(this.lastName, last);
        await this.page.fill(this.zipCode, zip);
    }

    async continue() {
        await this.page.click(this.continueBtn);
    }

    async finish() {
        await this.page.click(this.finishBtn);
    }

    async completeCheckout(first, last, zip) {

        await this.startCheckout();

        await this.enterInformation(first, last, zip);

        await this.continue();

        await this.finish();
    }
}

module.exports = CheckoutPage;
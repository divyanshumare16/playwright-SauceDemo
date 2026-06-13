class ProductPage {

    constructor(page) {
        this.page = page;

        this.productName = '.inventory_item_name';
        this.description = '.inventory_details_desc';
        this.price = '.inventory_details_price';
        this.backBtn = '#back-to-products';
    }

    async openFirstProduct() {
        await this.page.locator(this.productName).first().click();
    }

    async goBack() {
        await this.page.click(this.backBtn);
    }
}

module.exports = ProductPage;
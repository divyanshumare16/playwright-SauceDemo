class InventoryPage {

    constructor(page) {
        this.page = page;

        this.products = '.inventory_item';
        this.sortDropdown = '.product_sort_container';
        this.cartBadge = '.shopping_cart_badge';
    }

    async getProductCount() {
        return await this.page.locator(this.products).count();
    }

    async addFirstProduct() {
        await this.page.locator('button').filter({ hasText: 'Add to cart' }).first().click();
    }

    async addTwoProducts() {
        const buttons = this.page.locator('button').filter({ hasText: 'Add to cart' });

        await buttons.nth(0).click();
        await buttons.nth(1).click();
    }

    async sort(option) {
        await this.page.selectOption(this.sortDropdown, option);
    }

    async getCartBadgeCount() {
        return await this.page.locator(this.cartBadge).textContent();
    }
}

module.exports = InventoryPage;
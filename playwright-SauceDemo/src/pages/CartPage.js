class CartPage {

    constructor(page) {
        this.page = page;

        this.cartIcon = '.shopping_cart_link';
        this.cartItems = '.cart_item';
    }

    async openCart() {
        await this.page.click(this.cartIcon);
    }

    async getCartItemsCount() {
        return await this.page.locator(this.cartItems).count();
    }

    async removeFirstProduct() {
        await this.page.locator('button').filter({ hasText: 'Remove' }).first().click();
    }
}

module.exports = CartPage;
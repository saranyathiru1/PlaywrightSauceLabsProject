class ProductsPage {

    constructor(page) {
        this.page = page;
        this.productTitle = page.locator(".product_label");
        this.products = page.locator(".inventory_item_description");
        this.productsList = page.locator(".inventory_item_label");
        this.productsName = page.locator(".inventory_item_name");
        this.productsPrice = page.locator(".inventory_item_price");
        this.addToCartButton = page.locator("#add-to-cart-sauce-labs-bike-light");
        this.removeButton = page.locator("#remove-sauce-labs-backpack");
        this.productSortDropDown = page.locator(".product_sort_container");
        this.shoppingCartIcon = page.locator(".shopping_cart_link");
        this.shoppingCartBadge = page.locator(".shopping_cart_badge");
    }

    async addOrRemoveProductToCart(productName,addorRemoveButtonText) {

        await this.products.nth(1).waitFor();
        const titles = await this.productsName.allTextContents();
        const count = await this.products.count();
        for (let i = 0; i < count; i++) {
            if (await this.products.nth(i).locator("a div").textContent() == productName) {
                await this.products.nth(i).locator("button", {hasText: addorRemoveButtonText}).click();
                break;
            }
        }
    }

    async getShoppingCartBadgeNumber(){
        return await this.shoppingCartBadge.textContent();

    }

    async sortProduct(sortValue){

        await this.productSortDropDown.selectOption({value: sortValue});
        
    }

    async getProduct(){
        const products = {};
        const allProductNames = await this.productsName.allTextContents();
        const allProductPrices = await this.productsPrice.allTextContents();
        products.allProductNames = allProductNames;
        products.allProductPrices = allProductPrices;
        return products;

    }


    async navigateToCart(){
        await this.shoppingCartIcon.click();
    }

}
module.exports = {ProductsPage};
const { test, expect } = require("../fixtures/FixtureConfig");
const productsData = require("../utils/products.json");
const loginData = require("../utils/users.json");


test.describe('Swag Labs Cart Validations', async () => {

    test.beforeEach('Login', async ({ page, loginPage }) => {

        await loginPage.Login(loginData.valid[0].username, loginData.valid[0].password);
    })


    test('Add single product to cart', async function addProductToCart({ page, productsPage }) {

        await productsPage.addOrRemoveProductToCart("Sauce Labs Backpack", "Add to cart");
        expect(await productsPage.getShoppingCartBadgeNumber()).toEqual("1");
    })

    test('Remove single product from cart', async ({ productsPage }) => {

        await productsPage.addOrRemoveProductToCart("Sauce Labs Backpack", "Add to cart");
        await productsPage.addOrRemoveProductToCart("Sauce Labs Backpack", "Remove");
        expect(await productsPage.addToCartButton).toHaveText("Add to cart", { timeout: 10000 });
    })


    test('Add all products to cart and verify total items in cart page', { tag: '@regression' },async ({ productsPage, myCartPage }) => {

        for (let i = 0; i < productsData.productNames.length; i++) {
            await productsPage.addOrRemoveProductToCart(productsData.productNames[i]);
            expect(parseInt(await productsPage.getShoppingCartBadgeNumber())).toEqual(i + 1);
        }
        await productsPage.navigateToCart();
        console.log(myCartPage.totalCartItems);
        expect(await myCartPage.totalCartItems).toHaveCount(productsData.productNames.length, { timeout: 10000 });

    })

});




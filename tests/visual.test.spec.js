const { test, expect } = require("../fixtures/FixtureConfig");
const loginData = require("../utils/users.json");


test.describe('Swag Labs Images Validations', async () => {

    test.beforeEach('Login Page', async ({ page, loginPage }) => {

        await expect(page).toHaveScreenshot("Login.png");
        await loginPage.Login(loginData.valid[0].username, loginData.valid[0].password);
        
    })


    test('Products Page', async ({ page}) => {
        await expect(page).toHaveScreenshot("Products.png");
    })

    test('Cart Page', async ({ page, productsPage }) => {
        await productsPage.addOrRemoveProductToCart("Sauce Labs Onesie","Add to cart");
        await productsPage.navigateToCart();
        await expect(page).toHaveScreenshot("Cart.png");
    }) 
});




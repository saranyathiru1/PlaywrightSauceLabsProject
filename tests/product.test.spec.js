const { test, expect } = require("../fixtures/FixtureConfig");
const productsData = require("../utils/products.json");
const loginData = require("../utils/users.json");
let products;


test.describe('Swag Labs Sort Product Validations', async () => {

    test.beforeEach('Login', async ({ page, loginPage }) => {

        await loginPage.Login(loginData.valid[0].username, loginData.valid[0].password);
    })


    test('Sort product A to Z', async ({ productsPage }) => {
        
        await productsPage.sortProduct('az');
        products = await productsPage.getProduct();
        const expectedProductNames = productsData.productNames.sort();
        expect(products.allProductNames).toEqual(expectedProductNames);

    })


    test('Sort product Z to A', async ({ productsPage }) => {
        await productsPage.sortProduct('za');
        products = await productsPage.getProduct();
        const expectedProductNames = productsData.productNames.reverse();
        expect(products.allProductNames).toEqual(expectedProductNames);
    })

    test('Sort product high to Low', async ({ productsPage }) => {
        await productsPage.sortProduct('hilo');
        products = await productsPage.getProduct();
        const expectedProductPrice = productsData.productPrices.sort((a, b) => {
            let valorA = parseFloat(a.slice(1));
            let valorB = parseFloat(b.slice(1));
            // Compare Numeric Values
            return valorB - valorA;
        });
        expect(products.allProductPrices).toEqual(expectedProductPrice);
    })

    test('Sort product Low to High', async ({ productsPage }) => {
        await productsPage.sortProduct('lohi');
        products = await productsPage.getProduct();
        const expectedProductPrice = productsData.productPrices.sort((a, b) => {
            let valorA = parseFloat(a.slice(1));
            let valorB = parseFloat(b.slice(1));
            // Compare Numeric Values
            return valorA - valorB;
        });
        expect(products.allProductPrices).toEqual(expectedProductPrice);
    })

});




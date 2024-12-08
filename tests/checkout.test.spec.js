const { test, expect } = require("../fixtures/FixtureConfig");
const {faker} = require("@faker-js/faker");
const loginData = require("../utils/users.json");
const productsData = require("../utils/products.json");

test.describe.configure({ mode: 'parallel' });

test.describe('Swag Labs Checkout Product Validations', async()=> {

    test.beforeEach('Login', async({page,loginPage})=> 
        {  
            await loginPage.Login(loginData.valid[0].username,loginData.valid[0].password);
        })


    for(const data of productsData.productNames){
    test(`Checkout product end to end validations for ${data} item`, async({page,productsPage,myCartPage,orderReviewPage,orderConfirmationPage}) =>
     {
  
        await productsPage.addOrRemoveProductToCart(data);
        await productsPage.navigateToCart();
        await myCartPage.verifyCartTitleTextDisplayed();
        await myCartPage.checkoutProduct();
        await myCartPage.verifyCheckoutInformationTitleDisplayed();
        await myCartPage.enterYourInformationDetails(faker.person.firstName(),faker.person.lastName(),faker.location.zipCode());
        await myCartPage.clickContinueButton();
        await orderReviewPage.clickFinishButton();
        await orderConfirmationPage.verifyOrderConfirmationTextIsVisible();
    })
}

});




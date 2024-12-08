const {test,expect} = require('@playwright/test');

class MyCartPage {

    
    constructor(page){
        this.page = page;
        this.cartTitleText = page.getByText("Your Cart")
        this.totalCartItems = page.locator(".cart_item");
        this.checkoutButton =page.getByText("CHECKOUT");
        this.continueShoppingButton = page.getByRole("button", {name:'Continue Shopping'});
        this.checkoutInformationTitle = page.getByText("Checkout: Your Information");
        this.firstNameInputField = page.locator("#first-name");
        this.lastNameInputField = page.locator("#last-name");
        this.postalCodeInputField = page.locator("#postal-code");
        this.continueButton = page.locator("input[value='Continue']");
        this.cancelButton = page.locator(".cart_cancel_link");
    }

    async verifyCartTitleTextDisplayed(){
       expect(await this.cartTitleText).toBeVisible();
    }

    async checkoutProduct(){

        await this.checkoutButton.click();
    }

    async verifyCheckoutInformationTitleDisplayed(){
       expect(await this.checkoutInformationTitle).toBeVisible();
    }


    async enterYourInformationDetails(firstname,lastname,postalcode){
        await this.firstNameInputField.fill(firstname);
        await this.lastNameInputField.fill(lastname);
        await this.postalCodeInputField.fill(postalcode);
    }

    async clickContinueButton(){
        await this.continueButton.click();
    }


}

module.exports = {MyCartPage};
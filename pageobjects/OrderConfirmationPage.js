const{expect} = require('@playwright/test');

class OrderConfirmationPage {

    constructor(page){
        this.page = page;
        this.orderConfirmationText = page.locator(".complete-header");
        this.orderConfirmationdescriptionText =page.locator(".complete-text");
        this.orderConfirmationImage = page.locator("//img[@class='pony_express']");
    }

    async verifyOrderConfirmationTextIsVisible() {
        await expect(this.orderConfirmationText).toHaveText("Thank you for your order!");
    }

}

module.exports = {OrderConfirmationPage};
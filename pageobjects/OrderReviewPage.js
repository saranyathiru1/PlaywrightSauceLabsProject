class OrderReviewPage {

     
    constructor(page){
        this.page = page;
        this.checkoutOverviewTitle = page.locator("//div[text()='Checkout: Overview']");
        this.finishButton =page.locator("text=FINISH");
    }

    async clickFinishButton(){
        await this.finishButton.click();
    }

    

}

module.exports = {OrderReviewPage};
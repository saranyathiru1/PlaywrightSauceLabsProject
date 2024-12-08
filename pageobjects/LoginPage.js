const {test,expect} = require("@playwright/test");

class LoginPage {

    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator("#user-name");
        this.passwordInput = page.locator("#password");
        this.loginButton = page.getByRole("button",{name:'Login'});
        this.invalidCredentialsText = page.locator("[data-test='error']")
        this.pageTitle = page.locator(".title");
        
    }

    async goTo(){
        await this.page.goto('/');
    }

    async Login(username,password){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

}

module.exports = {LoginPage};
const { test, expect } = require("../fixtures/FixtureConfig");
const { SidebarPage } = require("../pageobjects/SidebarPage");
const loginData = require("../utils/users.json");



test.describe('Swag Labs Logout Validations', async () => {

    test.beforeEach('Login', async ({ page, loginPage }) => {

        await loginPage.Login(loginData.valid[0].username, loginData.valid[0].password);
    })


    test('LogoutTest', async ({ sidebarPage,loginPage }) => {
        
        await sidebarPage.clickBurgerMenu();
        await sidebarPage.clickLogout();
        await expect(loginPage.loginLogo).toHaveText("Swag Labs");

    })

});




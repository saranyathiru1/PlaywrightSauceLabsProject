class SidebarPage {

    constructor(page) {

        this.page = page;
        this.burgerMenuIcon = page.locator("#react-burger-menu-btn");
        this.sidebarAllItemsLink = page.locator("#inventory_sidebar_link");
        this.sidebarLogoutLink = page.locator("#logout_sidebar_link");
        this.sidebarResetAppLink = page.locator("#reset_sidebar_link");
        this.sidebarAboutLink = page.locator("#about_sidebar_link");
    }

    async clickBurgerMenu(){
        await this.burgerMenuIcon.click();
    }

    async clickLogout(){
        await this.sidebarLogoutLink.click();
    }

}

module.exports = {SidebarPage};
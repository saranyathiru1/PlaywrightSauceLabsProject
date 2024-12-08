import { test as base } from "@playwright/test"
import { LoginPage } from "../pageobjects/LoginPage"
import { ProductsPage } from "../pageobjects/ProductsPage"
import { MyCartPage } from "../pageobjects/MyCartPage"
import { OrderReviewPage } from "../pageobjects/OrderReviewPage"
import { OrderConfirmationPage } from "../pageobjects/OrderConfirmationPage"
import { SidebarPage } from "../pageobjects/SidebarPage"

type MyFixtures = {
  loginPage: LoginPage;
  productsPage: ProductsPage;
  myCartPage: MyCartPage;
  orderReviewPage: OrderReviewPage;
  orderConfirmationPage: OrderConfirmationPage;
  sidebarPage: SidebarPage;  
}

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page)
    loginPage.goTo();   
    await use(loginPage)
  },
  productsPage: async ({ page }, use) => {
    const productsPage = new ProductsPage(page)
    await use(productsPage)
  },
  myCartPage: async ({ page }, use) => {
    const myCartPage = new MyCartPage(page)
    await use(myCartPage)
  },
  orderReviewPage: async ({ page }, use) => {
    const orderReviewPage = new OrderReviewPage(page)
    await use(orderReviewPage)
  },
  orderConfirmationPage: async ({ page }, use) => {
    const orderConfirmationPage = new OrderConfirmationPage(page)
    await use(orderConfirmationPage)
  },
  sidebarPage: async ({ page }, use) => {
    const sidebarPage = new SidebarPage(page)
    await use(sidebarPage)
  }
})
export { expect } from "@playwright/test"

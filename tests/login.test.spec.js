const { test, expect } = require("../fixtures/FixtureConfig");
const loginData = require("../utils/users.json");
const messagesData = require("../utils/messages.json");

test.describe.configure({ mode: 'parallel' });

test.describe('Swag Labs Login Validations', async () => {

    for (const data of loginData.valid) {
        test(`Valid Login ${data.id}`, async ({ loginPage }) => {
            await loginPage.Login(data.username, data.password);
            await expect(loginPage.pageTitle).toContainText(messagesData.login_success);
        });
    }

    for (const data of loginData.invalid) {
        test(`Invalid credentials login ${data.id}`, async ({ loginPage }) => {
            await loginPage.Login(data.username, data.password);
            console.log(await loginPage.invalidCredentialsText.textContent());
            await expect(loginPage.invalidCredentialsText).toContainText(messagesData.login_error);
        });


        test(`Empty username Login ${data.id}`, async ({ loginPage }) => {
            await loginPage.Login("", data.password);
            console.log(await loginPage.invalidCredentialsText.textContent());
            await expect(loginPage.invalidCredentialsText).toContainText(messagesData.username_required);
        });

        test(`Empty password Login ${data.id}`, async ({ loginPage }) => {
            await loginPage.Login(data.username, "");
            console.log(await loginPage.invalidCredentialsText.textContent());
            await expect(loginPage.invalidCredentialsText).toContainText(messagesData.password_required);
        });


    }







});




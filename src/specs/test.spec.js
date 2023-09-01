import { expect } from 'chai';
import loginPage from '../pages/login.page.js';
import dashboardPage from '../pages/dashboard.page.js';
import { invalidUserNamePasswordError, dashboardPageTitleText, userInfo } from "../resources/constants.js";

describe('Login application', ()=>{

    before(async ()=>{
        await loginPage.openLoginPage();
    })

    it('should not login with invalid credentials and display error message', async ()=> {
        await loginPage.login(userInfo.invalid.user, userInfo.invalid.password)
        await browser.pause(1000);

        const actualErrorMessage = await loginPage.invalidUserNamePasswordError.getText();

        expect(invalidUserNamePasswordError).to.eql(actualErrorMessage);
    });

    it('should login with valid credentials and display error message', async ()=> {
        await loginPage.login(userInfo.valid.user, userInfo.valid.password)

        const pageTitleElem = await dashboardPage.pageTitle.getText();

        expect(dashboardPageTitleText).to.eql(pageTitleElem);
    });
})

/// <reference types="cypress" />
import loginpage from '../pages/loginPage'
import homepage from '../pages/homePage'
import createaccountpage from '../pages/createAccountPage'
import productpage from '../pages/productPage'
import checkoutpage from '../pages/checkoutPage'

describe('E2E Magento Nublue', () => {
        
    it('E2E Full', () => {
        homepage.goToHomePage()
        createaccountpage.goToCreateAccountPage()
        createaccountpage.createNewAccount()
        homepage.goToHomePage()
        homepage.clickOnProduct()
        productpage.selectQty()
        productpage.addProductCart()
        productpage.openMiniCart()
        productpage.proceedToCheckout()
        checkoutpage.fillAdressAtCheckout()
        checkoutpage.finishCheckout()
    })

    it('E2E with Login', () => {
        homepage.goToHomePage()
        loginpage.goToLoginPage()
        loginpage.login()
        homepage.clickOnProduct()
        productpage.selectQty()
        productpage.addProductCart()
        productpage.openMiniCart()
        productpage.proceedToCheckout()
        checkoutpage.finishCheckout()
    })

    
    it('Login', () => {
        homepage.goToHomePage()
        loginpage.goToLoginPage()
        loginpage.login()
    })


});
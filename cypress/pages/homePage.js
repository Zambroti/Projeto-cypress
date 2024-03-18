class HomePage {

    goToHomePage() {
        cy.visit('https://magento2-demo.magebit.com/')
    } 

    clickOnProduct() {
        cy.get('a[href="https://magento2-demo.magebit.com/fusion-backpack.html').first().click()
    }

}

export default new HomePage;
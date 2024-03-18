class ProductPage {

    selectQty() {
        cy.get('#qty').clear().type('2')
    } 

    addProductCart() {
        cy.get('#product-addtocart-button').click()
        cy.wait(3000)
    } 

    openMiniCart() {
        cy.get('.action.showcart').click()
    }

    proceedToCheckout() {
        cy.get('#top-cart-btn-checkout').click()
    }
}

export default new ProductPage;
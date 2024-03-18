class CheckoutPage {

    fillAdressAtCheckout() {
        cy.get('input[name="street[0]"]').type('Rua Teste 123')
        cy.get('select[name="country_id"]').select('BR')
        cy.get('select[name="region_id"]').select('508')
        cy.get('input[name="city"]').type('São Paulo')
        cy.get('input[name="postcode"]').type('01153-000')
        cy.get('input[name="telephone"]').type('11912345678')
    }

    finishCheckout() {
        cy.wait(4000)
        cy.get('.button.action.continue.primary').click()
        cy.get('.action.primary.checkout').click()
        cy.get('#maincontent').contains('Thank you for your purchase!')
    }

}

export default new CheckoutPage;
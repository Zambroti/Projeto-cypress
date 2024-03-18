class CategoriesPage {

    clickOnCategory() {
        cy.get('#ui-id-3').click()
    } 
}

export default new CategoriesPage;
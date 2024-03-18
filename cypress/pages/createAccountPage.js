class CreateAccount {

    goToCreateAccountPage() {
        cy.get('a[href="https://magento2-demo.magebit.com/customer/account/create/"]').first().click()
    } 

    createNewAccount() {
        cy.get('#firstname').type('Thiago.,')
        cy.get('#lastname').type('Zambroti.,') 
        cy.get('#email_address').type('thiagozambroti17@teste.com')
        cy.get('#password').type('Teste12345')
        cy.get('#password-confirmation').type('Teste12345')
        cy.get('.action.submit.primary').click()
        cy.get('div.message-success.success.message').contains('Thank you for registering with Main Website Store.')
    } 

}

export default new CreateAccount;
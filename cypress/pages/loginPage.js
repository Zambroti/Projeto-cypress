class LoginPage {

    goToLoginPage() {
        cy.get('a[href="https://magento2-demo.magebit.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvMi1kZW1vLm1hZ2ViaXQuY29tLw%2C%2C/"]').first().click()
    } 

    login() {
        cy.get('#email').type('thiagozambroti29c@teste.com')
        cy.get('#pass').type('Teste12345')
        cy.get('#send2').click()
        cy.get('.logged-in').contains('Welcome, Thiago., Zambroti.,!')
    }

}

export default new LoginPage;
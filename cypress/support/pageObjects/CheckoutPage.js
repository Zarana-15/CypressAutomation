class CheckoutPage
{

    getCountry()
    {
        return cy.get('#country')
    }

    getCheckBox()
    {
        return cy.get('#checkbox2')
    }

    getPurchaseButton()
    {
        return cy.contains("Purchase")
    }

    getAlert()
    {
        return cy.get('.alert')
    }

}

export default CheckoutPage;
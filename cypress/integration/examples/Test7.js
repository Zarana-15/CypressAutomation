/// <reference types ="Cypress"/>

import BillPage from "../../support/pageObjects/BillPage";
import CheckoutPage from "../../support/pageObjects/CheckoutPage";
import HomePage from "../../support/pageObjects/HomePage";
import ProductPage from "../../support/pageObjects/ProductPage";


describe("Seventh Test by Zarana", function(){

    before(function(){
        cy.fixture("example").then(function(ddata){
            this.data = ddata

        })
    })

    it("Test Frameworks", function(){

        const hp = new HomePage()
        const pp = new ProductPage()
        const bp = new BillPage()
        const cp = new CheckoutPage()

        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        hp.getEditBox().type(this.data.name)
        hp.getGender().select(this.data.gender)
        hp.getTwoWayDataBinding().should("have.value",this.data.name)
        hp.getEditBox().should("have.attr","minlength","2")
        hp.getEmploymentStatus().should("be.disabled")
        //cy.pause()
        hp.getShopTab().click()

        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        })
        pp.getCheckoutButton().click()

          
        bp.getAllAmounts()  
        
        
        cy.wait(3000)

        bp.getCheckoutButton().click()

        cp.getCountry().type("India")
        cy.wait(2000)
        cy.contains("India").click()
        cp.getCheckBox().check({force:true})
        cp.getPurchaseButton().click()
        cp.getAlert().then(function(alertText){
            expect(alertText.text()).includes("Success! Thank you! Your order will be delivered in next few weeks :-).")
        })
    })
})
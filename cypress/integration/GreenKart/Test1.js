/// <reference types="Cypress" />

describe("First Test by Zarana",function (){

    it("Really short test case", function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        //cy.viewport(800, 400)
        cy.get(".search-keyword").type("ca")
        cy.wait(2000)

        //Visible invisible
        cy.get(".product:visible").should("have.length",4)

        //Parent CHild Concept
        cy.get(".products").find(".product").should("have.length",4)

        cy.get(".products").find(".product").eq(2).contains("+").click()
        cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click()


        cy.get(".products").find(".product").each(($el, index, $list)=>{
            const vegName = $el.find("h4.product-name").text()
            if(vegName.includes("Cashews"))
            {
                // before(async()=>{
                //     await cy.wrap($el).contains("+").click()
                // cy.wait(3000)
                // $el.find("button").click()
                //cy.wrap($el).contains("ADD TO CART").click()
                cy.wrap($el).contains("+").click().then(()=>$el.find("button").click())
                //cy.wait(3000)
                //$el.find("button").click() This line executes before asynchronously
                //cy.wrap($el).contains("ADD TO CART").click()
                
            }
            cy.get(".brand").should("have.text", "GREENKART")
        })

        cy.wait(2000)
        cy.get('.cart-icon > img').click()
        cy.wait(1000)
        cy.get(".cart-preview>.action-block").contains("PROCEED TO CHECKOUT").click()
    
        cy.contains("Place Order").click()
    
    }

    )

})

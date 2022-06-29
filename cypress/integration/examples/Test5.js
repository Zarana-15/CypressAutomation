/// <reference types="Cypress" />

describe("Fifth Test by Zarana",function (){

    it("Really short test case", function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        
        cy.get(".mouse-hover-content").invoke("show")
        cy.contains("Top").click({force:true})
        cy.url().should("include","top")     
        
        cy.get("#opentab").then(function(el){
            const url = el.prop("href")
            cy.visit(url)
            cy.go("back")
        })

    }
    )
})

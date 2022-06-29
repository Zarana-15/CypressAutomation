/// <reference types="Cypress" />

describe("Fourth Test by Zarana",function (){

    it("Really short test case", function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        
        cy.get("tr td:nth-child(2)").each(($el, index, $list)=>{
            const tableText = $el.text()
            if(tableText.includes("Python")){
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price){
                   const priceText = price.text()
                   expect(priceText).to.equal("25")
                })
            }
        })

    }
    )
})

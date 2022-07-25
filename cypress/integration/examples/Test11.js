/// <reference types ="Cypress"/>

describe("Eleventh Test by Zarana",function (){
    it("Session Tokens", function(){

        cy.loginAPI().then(function()
        {
            cy.visit("https://rahulshettyacademy.com/client",
            {
                onBeforeLoad: function(window)
                {
                    window.localStorage.setItem("token", Cypress.env("token"))
                }
            })
        })

        cy.get(".card-body button:last-of-type").eq(1).click()
        cy.get("[routerlink*='cart']").click()
        cy.contains("Checkout").click()
        cy.get("input[placeholder='Select Country']").type("Ind")
        cy.get("div[class='ta-backdrop']").each(($el,index,$list) => {
 
            const actualText = $el.text()
            if(actualText.trim() == 'India') // actual value in website is " India"
            {
                cy.wrap($el).click()
            }
        }
        )
        

    })
})
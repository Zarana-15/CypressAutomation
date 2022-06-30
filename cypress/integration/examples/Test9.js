/// <reference types ="Cypress"/>

describe("Ninth Test by Zarana",function (){
    it("Mock HTTP Requests", function(){

        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

        cy.intercept("GET", 
        "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty", 
        (req) =>
        {
            req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
            req.continue((res)=>
            {
                //expect(res.statusCode).to.equal(403)
            })
        }).as("newUrl")
        
        cy.get("button[class='btn btn-primary']").click()

        cy.wait("@newUrl")
    })
})
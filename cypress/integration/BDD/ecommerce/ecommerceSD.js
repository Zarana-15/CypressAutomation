import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../support/pageObjects/HomePage";
import ProductPage from "../../../support/pageObjects/ProductPage";
import BillPage from "../../../support/pageObjects/BillPage";
import CheckoutPage from "../../../support/pageObjects/CheckoutPage";

const hp = new HomePage()
const pp = new ProductPage()
const bp = new BillPage()
const cp = new CheckoutPage()

let name


Given("I open ecommerce page", function()
{
    cy.visit("https://rahulshettyacademy.com/angularpractice/")
}) 

When("I add items to cart", function(){
    hp.getShopTab().click()
        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        })
        pp.getCheckoutButton().click()
})

And("validate total prices", function(){
    var sum = Number("0")
        cy.get("tr td:nth-child(4) strong").each(($el,index,$list)=>{
            cy.log($el.text())
            const actualText = $el.text()
            var res = actualText.split(" ")
            res = res[1].trim()
            cy.log(res)
            sum = sum + Number(res)
        }).then(()=>{cy.log("Sum: "+sum)}) 

        var res1
        cy.get("h3 strong").then(function(elem){
            const amt = elem.text()
            res1 = amt.split(" ")
            res1 = res1[1].trim()
            expect(Number(sum)).to.equal(Number(res1))
        })
})

Then("select the country submit and verify thankyou", function(){
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

When("I fill the form details", function(dataTable){
    name = dataTable.rawTable[1][0]
    hp.getEditBox().type(dataTable.rawTable[1][0])
    hp.getGender().select(dataTable.rawTable[1][1])
        
})

Then("validate form behavior", function(){
    hp.getTwoWayDataBinding().should("have.value",name)
    hp.getEditBox().should("have.attr","minlength","2")
    hp.getEmploymentStatus().should("be.disabled")
})

And("select the shop page", function(){
    hp.getShopTab().click()
})
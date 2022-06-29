/// <reference types="Cypress" />

describe("Third Test by Zarana",function (){

    it("Really short test case", function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        
        cy.get("#checkBoxOption1").check().should("be.checked").and("have.value","option1")
        cy.wait(500)
        cy.get("#checkBoxOption1").uncheck().should("not.be.checked")

        cy.wait(500)
        cy.get("input[type='checkbox']").check(["option2", "option3"])
        cy.wait(500)
        cy.get("input[type='checkbox']").uncheck(["option2", "option3"])

        //Static Dropdown
        cy.wait(500)
        cy.get("select").select("Option1")
        cy.wait(100)
        cy.get("select").select("Option3")

        cy.get("select").select("option3").should("have.value","option3")

        cy.get("#autocomplete").type("Ind")

        cy.get(".ui-menu-item div").each(($el, index, $list) => {
            if($el.text()==="India")
            {
                cy.wait(1000).then(()=>$el.click())
            }
        }
        )

        cy.get("#autocomplete").should("have.value","India")
        cy.get("#displayed-text").should("be.visible")

        cy.wait(1000)
        cy.get("#hide-textbox").click()
        cy.get("#displayed-text").should("not.be.visible")
        cy.wait(1000)
        cy.get("#show-textbox").click()
        cy.get("#displayed-text").should("be.visible")

        cy.wait(1000)
        cy.get("input[value='radio1']").check().should("be.checked")

        cy.get("#alertbtn").click()
        cy.get("input[value='Confirm']").click()
        //Window alert
        cy.on("window:alert", (str)=>{
            expect(str).to.equal("Hello , share this practice page and share your knowledge")
        })
        cy.on("window:confirm", (str)=>{
            expect(str).to.equal("Hello , Are you sure you want to confirm?")
        })

        cy.get("#opentab").invoke("removeAttr", "target").click()
        cy.url().should("include","rahulshettyacademy.com")
        cy.wait(1000)
        cy.go("back")


    }

    )

})

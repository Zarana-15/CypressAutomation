class BillPage
{
    
    getCheckoutButton()
    {
        return cy.get(':nth-child(5) > :nth-child(5) > .btn')
    }

    getAllAmounts()
    {
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
    }
}

export default BillPage;
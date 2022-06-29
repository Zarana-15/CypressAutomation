beforeEach(function(){
    cy.fixture("example").then(function(ddata){
        this.data = ddata
    })
})
beforeEach(()=>
{
    cy.fixture('testDataFile').then(function(data)
    {
this.data=data
    })
});
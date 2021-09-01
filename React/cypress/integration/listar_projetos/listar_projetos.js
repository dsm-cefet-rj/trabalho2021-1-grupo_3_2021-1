import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('que temos produtos cadastrados', function (produtos) {
    this.produtos = produtos.hashes();
    cy.log(produtos);
    //aqui deveria incluir os dados em um banco de dados de teste.
});

When('a tela de listagem de produtos é acessada', function () {
    cy.visit('./');
});

Then('os produtos são exibidos', function () {
    
    for(let i in this.produtos){
        
        cy.get("#produtos")
            .find('tbody tr').eq(i)
            .contains('td:first', this.produtos[i].Produto)
            .should('be.visible')
            
            cy.get("#produtos")
            .find('tbody tr').eq(i).find('td').eq(1)
            .should('contain', `${this.produtos[i].Unidade} ${this.produtos[i].UnAtual}/${this.produtos[i].UnTotal} IDC ${this.produtos[i].IDC} IDP ${this.produtos[i].IDP}`)
            .should('be.visible')
            
            cy.get("#produtos")
            .find('tbody tr').eq(i).find('td').eq(2)
            .should('contain', 'X')
            .should('be.visible')
    }
    
});

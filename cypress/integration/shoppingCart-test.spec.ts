/// <reference types= "cypress"/>

import { ShoppingCartPage } from "../src/pages/shoppingCartPage";

// ignore uncaught exceptions
//   if they are not originating from Cypress,
//     but from the web app
Cypress.on("uncaught:exception", (err) => {
  return false;
});

describe("test if is add to cart", () => {
  const SCP = new ShoppingCartPage();
  it("open the website and search a term ", () => {
    SCP.goToPage();
    cy.fixture('regData.json').then((mydata) =>
    {
      SCP.searchItem(mydata[5].termToSearch1);
    })
  });

  it("add the item to cart", () => {
    SCP.enterToShoppingCart();
 
  });
  
});


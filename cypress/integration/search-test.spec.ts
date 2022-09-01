/// <reference types= "cypress"/>

import { SearchPage } from "../src/pages/searchPage";

// ignore uncaught exceptions
//   if they are not originating from Cypress,
//     but from the web app
Cypress.on("uncaught:exception", (err) => {
  return false;
});

var expectedError = "אין תוצאות חיפוש עבור: \"גארפילד\"";
var numResults='67';
describe("search test-search valid product ", () => {
  const SP = new SearchPage();

  it("open the website and search a term ", () => {
    SP.goToPage();
    cy.fixture('regData.json').then((mydata) =>
    {
      SP.searchTermAndGetResultCount(mydata[5].termToSearch1).should((res=>{
        expect(res).contain(numResults);
      }));

    })
  });
  
});


describe("search test-search invalid product ", () => {
  const SP = new SearchPage();
  it("open the website and search an invalid term ", () => {
    SP.goToPage();
    cy.fixture('regData.json').then((mydata) =>
    {
        SP.searchAndGetInvalidSearch(mydata[5].termToSearch2).should((res=>{
        expect(res).equal(expectedError)
      }));

    })
  });
  
});
/// <reference types= "cypress"/>

import { LoginPage } from "../src/pages/loginPage";
const LP = new LoginPage();
var expectedError: any;
// ignore uncaught exceptions
//   if they are not originating from Cypress,
//     but from the web app

Cypress.on("uncaught:exception", (err) => {
  return false;
});

function helpTest(i: number) {
  LP.goToPage();
  LP.fillElement(i);
  LP.saveLogin();
}


describe("succeedLoginTest", () => {
  it(" go to login page fill password and email and login", () => {
    helpTest(0);
  });
});

describe("illegalEmailTest", () => {
  it("go to login page fill password and illegal email and Compare error msg", () => {
    helpTest(1);
    LP.getErrorString().should((errorMsg)=>{
        cy.fixture("regData.json").then((mydata) => {
          expectedError = mydata[1].expectedResult;
          mydata[1].actualError = errorMsg;
          cy.writeFile("regData.json", JSON.stringify(mydata));
          expect(errorMsg).contain(expectedError);
        });
    });

   
  });
});


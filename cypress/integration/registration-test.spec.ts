/// <reference types= "cypress"/>

import { RegistrationPage } from "../src/pages/registrationPage";

// ignore uncaught exceptions
//   if they are not originating from Cypress,
//     but from the web app
Cypress.on("uncaught:exception", (err) => {
  return false;
});

const RP = new RegistrationPage();
var expectedError=null;
function helpTest(i: number) {
  RP.goToPage();
  RP.fillElement(i);
  RP.saveReg();
}


// describe("succeedRegistrationTest", () => {
//   const RP = new RegistrationPage();
//   it("Fill registration fields", () => {
//     RP.goToPage();
//     RP.fillElement(0);
//     RP.saveReg();
//   });
// });

describe("registrationErrorCaseOne-password not equal", () => {
  const RP = new RegistrationPage();
  it("Fill registration fields and not correct password according to demands", () => {
    helpTest(2);
    RP.fillElementError('password')
    RP.getErrorStringByParameter("@errorPass").should((errorMsg)=>{
      console.log(errorMsg);
      console.log("bye");
      cy.readFile("cypress/fixtures/regData.json").then((mydata) => {
        expectedError = mydata[2].expectedResult;
        mydata[2].actualError = errorMsg;
        // cy.writeFile("regData.json", JSON.stringify(mydata));
         cy.writeFile("cypress/fixtures/regData.json", JSON.stringify(mydata));
        expect(errorMsg).equal(expectedError);
      });
  });
});
});
describe("registrationErrorCaseTwo-birthday not permitted", () => {
  const RP = new RegistrationPage();
  it("Fill registration fields and not correct birthday according to demands", () => {
    helpTest(3);
    cy.get("#register_dateOfBirth-error").as("errorBirthday");
    RP.getErrorStringByParameter("@errorBirthday").should((errorMsg)=>{   
      cy.readFile("cypress/fixtures/regData.json").then((mydata) => {
        expectedError = mydata[3].expectedResult;
        mydata[3].actualError = errorMsg;
        // cy.writeFile("regData.json", JSON.stringify(mydata));
        cy.writeFile("cypress/fixtures/regData.json", JSON.stringify(mydata));
        expect(errorMsg).equal(expectedError);
      });
  });
});
});

describe("registrationErrorCaseThree-id not legal", () => {
  const RP = new RegistrationPage();
  it("Fill registration fields and not correct id ", () => {
    helpTest(4);
    cy.get("#register_idNumber-error").as("errorId");
    RP.getErrorStringByParameter("@errorId").should((errorMsg)=>{   
      cy.readFile('cypress/fixtures/regData.json').then((mydata) => {
        expectedError = mydata[4].expectedResult;
        mydata[4].actualError = errorMsg;
        // cy.writeFile("regData.json", JSON.stringify(mydata));
        cy.writeFile("cypress/fixtures/regData.json", JSON.stringify(mydata));
        expect(errorMsg).equal(expectedError);
      });
  });
});
});

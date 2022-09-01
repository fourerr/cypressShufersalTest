import { BasePage } from "./base-page";

export class LoginPage extends BasePage {
  loginPageUrl = "https://www.shufersal.co.il/online/he/login";

  constructor() {
    super();
  }

  initElement() {
    cy.get("#j_username").as("email");
    cy.get("#j_password").as("password");
    cy.get(".btn-login").as("saveButton");
    cy.get(".register-message-validation").as("errorEmail");
  }

  goToPage() {
    cy.visit(this.loginPageUrl);
    this.initElement();
  }

  fillElement(i: number) {
    cy.fixture("regData.json").then((mydata) => {
      cy.get("@email").type(mydata[i].email);
       cy.get("@password").type(mydata[i].password);
    });
  }
  

  saveLogin() {
    cy.get("@saveButton").first().click();
  }

   getErrorString() {
   return cy.get("@errorEmail").first().invoke('text').then((error=>{
    let textValue1 =error;
    console.log(textValue1);
   }));
  
}


}

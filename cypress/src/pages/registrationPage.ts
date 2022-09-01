import { List } from "../../../node_modules/cypress/types/lodash/index";
import { BasePage } from "./base-page";

export class RegistrationPage extends BasePage{
    registerPageUrl = "https://www.shufersal.co.il/online/he/register";
    constructor() {
        super();
      }
      initElement()
    {
        cy.get("#register_firstName").as("firstName");
        cy.get("#register_lastName").as("lastName");
        cy.get("#register_idNumber").as("id");
        cy.get("#register_phone").as("phone");
        cy.get("#password").as("password");
        cy.get('input[name="checkPwd"]').as("confirmPassword");
        // cy.get("#register.checkPwd").as("confirmPassword");
        cy.get("#register_email").as("email");
        cy.get("#j_birthday").as("birthday");
        //  cy.get("#register_dateOfBirth-error").as("errorBirthday");
        //  cy.get("#register_idNumber-error").as("errorId");

  }
  goToPage() {
    cy.visit(this.registerPageUrl);
    this.initElement();
    }


    fillElement(i:number)
    { 
      cy.fixture('regData.json').then((mydata) =>
      {
        cy.get("@firstName").type(mydata[i].name,{force: true});
        cy.get("@lastName").type(mydata[i].lastName,{force: true});
        cy.get("@id").type(mydata[i].id,{force: true});
        cy.get("@phone").type(mydata[i].phone,{force: true});
        cy.get("@password").type(mydata[i].password,{force: true});
        cy.get("@confirmPassword").type(mydata[i].confirmPassword,{force: true});
        cy.get("@email").type(mydata[i].email,{force: true});
        cy.get("@birthday").type(mydata[i].birthday,{force: true});
      })
  
    }

    fillElementError(err:string){
      switch ( err ) {
        case 'password':
          cy.get("#password-error").as("errorPass");  
            break;
        case  'birth':
          cy.get("#register_dateOfBirth-error").as("errorBirthday");
            break;
        case 'id':
          cy.get("#register_idNumber-error").as("errorId");
            break;
        default: 
            break;
     }
    }

  saveReg() {
  cy.get(".btn-save").click();
	}

  getErrorStringByParameter(err:string) {
  

    return cy.get(err).first().invoke('text').then((error=>{
     let textValue1 =error;
     console.log(textValue1);
    }));
   
 };

 writeToFileAllResults(file:string,data:JSON){
  cy.writeFile(file, JSON.stringify(data));
 }

}


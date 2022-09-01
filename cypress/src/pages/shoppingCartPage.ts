import { eq } from "../../../node_modules/cypress/types/lodash/index";
import { BasePage } from "./base-page";
import { SearchPage } from "./searchPage";

export class ShoppingCartPage extends BasePage{
    searchPageUrl="https://www.shufersal.co.il/online";
   
    initElements() {
    cy.get("#js-site-search-input").as("searchTextBox");

	}
    
    goToPage() {
        cy.visit(this.searchPageUrl);
        this.initElements();
        }

    searchItem( i :string) {
        var sPage = new SearchPage();
        sPage.searchTerm(i);
       
    }
    enterToShoppingCart() {
        cy.get(".miglog-prod-inStock").as("hoverBy");
        cy.scrollTo(0, 500) 
        cy.get("@hoverBy").first().trigger('mouseover');
        cy.get(".js-add-to-cart ").as("addToCart"); 
        cy.get("@addToCart").first().click({force:true})
        cy.get(".loginModalTop > .btnClose").as("closePopUp"); 
        cy.get("@closePopUp").click({force:true});
        }
   
}


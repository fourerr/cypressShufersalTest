import { BasePage } from "./base-page";

export class SearchPage extends BasePage{
    searchPageUrl="https://www.shufersal.co.il/online";


    initElements() {
    cy.get("#js-site-search-input").as("searchTextBox");
  
	}
    
    goToPage() {
        cy.visit(this.searchPageUrl);
        this.initElements();
        }

    searchTerm(term : string){
            cy.get("@searchTextBox").type(term+"{enter}",{force: true})
          

    }
    searchTermAndGetResultCount(termToSearch:string) {
        this.searchTerm(termToSearch);
        cy.get("#searchResults_count_label").as("searchResultCountBy");
        return cy.get("@searchResultCountBy").first().invoke('text');
	}
    searchAndGetInvalidSearch( termToSearch:string ) {
        this.searchTerm(termToSearch);
        cy.get(".titleSection").as("errorForInvalidSearchBy")
        return cy.get("@errorForInvalidSearchBy").first().invoke('text');
	}
}


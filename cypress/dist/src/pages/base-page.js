/// <reference types= "cypress"/>
var BasePage = /** @class */ (function () {
    function BasePage(pageUrlPath) {
        if (pageUrlPath === void 0) { pageUrlPath = ""; }
        this.pageUrlPath = pageUrlPath;
        this.fullUrl = Cypress.config().baseUrl + pageUrlPath;
    }
    BasePage.prototype.goToPage = function () {
        cy.visit(this.fullUrl);
    };
    return BasePage;
}());
export { BasePage };

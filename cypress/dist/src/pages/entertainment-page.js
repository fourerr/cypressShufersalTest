var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { BasePage } from './base-page';
import { entertainmentLocators } from './entertainment-locators';
var EntertainmentPage = /** @class */ (function (_super) {
    __extends(EntertainmentPage, _super);
    function EntertainmentPage() {
        var _this = _super.call(this) || this;
        _this.entertainmentPageUrl = "https://www.yahoo.com/entertainment";
        return _this;
    }
    EntertainmentPage.prototype.goToPage = function () {
        cy.visit(this.entertainmentPageUrl);
    };
    //   Example how to compare list from fixtures to a list of elements 
    //    (check text on elements equals to text from a list)
    EntertainmentPage.prototype.compareMenuOptionsToList = function () {
        cy.fixture('entertainmentMiddleMenu.json').then(function (menuOptions) {
            var menuOptionsArr = menuOptions.arr;
            cy.get(entertainmentLocators.theInnerMainMenu)
                .find(entertainmentLocators.menuSingleOptions).each(function (elem, i) {
                cy.log(elem.text() + " " + (menuOptionsArr[i]));
                expect(elem.text()).equal(menuOptionsArr[i]);
            });
        });
    };
    //   Example how to list all elements text
    EntertainmentPage.prototype.listInnerMenuOptions = function () {
        cy.get(entertainmentLocators.theInnerMainMenu).as('menuOptions');
        cy.get('@menuOptions').find(entertainmentLocators.menuSingleOptions).each(function (elem, i) {
            cy.log(i + " " + elem.text());
        });
    };
    //   Example how to hover
    EntertainmentPage.prototype.hoverExample = function () {
        cy.get('nav ul li:nth-child(3)').as('menuItem');
        cy.get('@menuItem').trigger('mouseover')
            .then(function () {
            cy.log('did hover');
        });
        cy.get('#uh-signedin').trigger('mouseover')
            .then(function () {
            cy.log('did hover sign in');
        });
    };
    return EntertainmentPage;
}(BasePage));
export { EntertainmentPage };

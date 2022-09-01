/// <reference types= "cypress"/>
import { EntertainmentPage } from '../src/pages/entertainment-page';
// ignore uncaught exceptions 
//   if they are not originating from Cypress,
//     but from the web app
Cypress.on('uncaught:exception', function (err) {
    return false;
});
describe('Check content - main articles', function () {
    var entrtnmntPg = new EntertainmentPage();
    it('Compare Menu Options ToList', function () {
        entrtnmntPg.goToPage();
        entrtnmntPg.listInnerMenuOptions();
        entrtnmntPg.compareMenuOptionsToList();
    });
});

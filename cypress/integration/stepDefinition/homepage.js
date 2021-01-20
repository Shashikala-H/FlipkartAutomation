import { Then, When, Given } from "cypress-cucumber-preprocessor/steps";
import homepage from  'C:/FlipkartAutomation/cypress/integration/pageObjects/Homepage.js';

Given('I am in facebook page', () => {
    homepage.visitSite();
});
When('I click on Top Offers', () => {
    homepage.topOffers();
});

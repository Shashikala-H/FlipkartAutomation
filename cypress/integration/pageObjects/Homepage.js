const topOffers = 'div.CXW8mj >img';
class Homepage {
    static topOffers() {
        cy.get(topOffers).first().click();
    }
    static visitSite() {
        cy.visit("/");
    }

}
export default Homepage;
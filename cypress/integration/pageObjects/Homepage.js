const topOffers = 'div.CXW8mj >img[alt="Apple iPads (From ₹25,200)"]';
class Homepage {
    static topOffers() {
        cy.get(topOffers).click();
    }
    static visitSite() {
        cy.visit("/");
    }

}
export default Homepage;
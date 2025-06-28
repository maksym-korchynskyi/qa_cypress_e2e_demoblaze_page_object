import PageObject from '../PageObject';

export class ProductPageObject extends PageObject {
  url = '/prod.html';

  addToCard() {
    return cy.contains('a', 'Add to cart').click();
  }
}

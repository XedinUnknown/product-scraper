import Product from './Product';
import Page from 'common/Page';
import Optional from 'common/Optional';

export default interface ProductScraper {
  /**
   * Scrapes a product from a page it appears on.
   */
  (productPage: Page, defaults?: Optional<Product>): Product;
}

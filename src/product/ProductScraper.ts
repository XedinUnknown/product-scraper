import Product from './Product';
import Page from 'common/Page';
import Optional from 'common/Optional';

export default interface ProductScraper {
  (productPage: Page, defaults?: Optional<Product>): Product;
}

import Product from './Product';
import ProductPage from './ProductPage';
import Optional from 'common/Optional';

export default interface ProductScraper {
  (page: ProductPage, defaults?: Optional<Product>): Product;
}

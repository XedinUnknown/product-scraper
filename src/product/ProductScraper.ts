import Product from './Product';
import ProductPage from './ProductPage';

export default interface ProductScraper {
  (page: ProductPage): Product;
}

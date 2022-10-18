import Product from 'product/Product';
import ProductPage from 'product/ProductPage';
import ProductScraper from 'product/ProductScraper';
import Optional from 'common/Optional';
import Category from 'product/Category';

const scrape: ProductScraper = (page: ProductPage, defaults?: Optional<Product>): Product => {
  const title = page.select('.page-title .base').eq(0).text();
  const price = page.select('.product-info-price .price').eq(0).text();
  const categories: Array<Category> = [];

  return {
    categories,
    ...defaults,
    title,
    price,
  };
};

export default scrape;

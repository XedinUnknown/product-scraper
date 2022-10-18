import Page from 'common/Page';
import Optional from 'common/Optional';
import Product from 'product/Product';
import Category from 'product/Category';
import ProductScraper from 'product/ProductScraper';

const scrape: ProductScraper = (page: Page, defaults?: Optional<Product>): Product => {
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

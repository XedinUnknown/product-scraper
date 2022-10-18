import Product from 'product/Product';
import ProductPage from 'product/ProductPage';
import ProductScraper from 'product/ProductScraper';

const scrape: ProductScraper = (page: ProductPage): Product => {
  const title = page.select('.page-title .base').eq(0).text();
  const price = page.select('.product-info-price .price').eq(0).text();

  return {
    title,
    price,
  };
};

export default scrape;

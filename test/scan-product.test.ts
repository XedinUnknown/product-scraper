import ProductPage from 'product/ProductPage';
import * as cheerio from 'cheerio';
import scrape from 'scrapers/scanmalta.com';
import * as fs from 'fs';

test('Get data for a product from scanmalta.com', async () => {
  const data = fs.readFileSync(`${__dirname}/scan-product.html`, 'utf-8');
  const document = cheerio.load(data);
  const page = new ProductPage(document.root());
  const product = scrape(page);

  console.log(product);
});

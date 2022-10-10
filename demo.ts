import ProductPage from './src/product/ProductPage';
import * as cheerio from 'cheerio';
import axios from 'axios';
import scrape from './src/product/scrapers/scanmalta.com';
import express from 'express';

type RequestData = {
  u: string;
}

let app = express();

app.get('/demo', async (req, res) => {
  const url = req.query['u' as keyof RequestData] as string;
  const {data} = await axios.get(url);
  const document = cheerio.load(data);
  const page = new ProductPage(document.root());
  const product = scrape(page);

  res.json(product);
});

app.listen(3000, () => {
  console.log('Listening...');
})

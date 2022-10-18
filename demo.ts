import ProductPage from 'common/Page';
import * as cheerio from 'cheerio';
/* eslint-disable-next-line node/no-unpublished-import */
import axios from 'axios';
import scrape from 'scrapers/scanmalta.com';
/* eslint-disable-next-line node/no-unpublished-import */
import express from 'express';

type RequestData = {
  u: string;
};

const app = express();

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
});

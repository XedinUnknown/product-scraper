import * as cheerio from 'cheerio';

type Element = cheerio.Cheerio;

export default class ProductPage {
  constructor(private document: Element) {}

  select(selector: string): Element {
    return this.document.find(selector);
  }
}

import Page from 'common/Page';
import Category from './Category';

export default interface CategoryScraper {
    /**
     * Scrapes a category tree from a page it appears on.
     */
    (categoriesPage: Page): Category;
}
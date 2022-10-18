import Category from "./Category";

export default interface Product {
  title: string;
  price: string;
  categories: Iterable<Category>;
}

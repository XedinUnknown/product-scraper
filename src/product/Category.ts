export default interface Category {
    title: string;
    link: string;
    children: Iterable<Category>;
};
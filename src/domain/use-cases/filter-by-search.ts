import { Product } from 'domain/models/product';

export function filterBySearch(productList: Product[], search: string) {
  const searchInLowerCase = search.toLowerCase();

  if (!searchInLowerCase) return productList;

  return productList.filter(
    (product) => product.title.toLowerCase().includes(searchInLowerCase)
  );
}

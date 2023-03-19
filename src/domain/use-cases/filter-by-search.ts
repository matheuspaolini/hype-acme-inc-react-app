import { Product } from 'domain/models/product';

const normalize = (string: string) => string.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

export function filterBySearch(productList: Product[], search: string) {
  const searchInLowerCase = search.toLowerCase();
  const normalizedSearch = normalize(searchInLowerCase);

  if (!searchInLowerCase) return productList;

  return productList.filter(
    (product) => normalize(product.title.toLowerCase()).includes(normalizedSearch)
  );
}

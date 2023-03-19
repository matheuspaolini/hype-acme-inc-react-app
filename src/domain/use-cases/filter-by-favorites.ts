import { Product } from 'domain/models/product';

export function filterByFavorites(favorites: string[], productList: Product[]) {
  return productList.filter((product) => favorites.includes(product.id));
}

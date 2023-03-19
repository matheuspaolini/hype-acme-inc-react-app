import { CartProduct } from '../models/cart-product';

export function isOnFavorites(cart: CartProduct[], id: string) {
  return cart.find((cartProduct) => cartProduct.id === id);
}

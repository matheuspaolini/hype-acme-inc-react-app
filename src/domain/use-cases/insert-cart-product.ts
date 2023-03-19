import { CartProduct } from '../models/cart-product';

export function insertCartProduct(cart: CartProduct[], cartProduct: CartProduct) {
  return [...cart, cartProduct];
}

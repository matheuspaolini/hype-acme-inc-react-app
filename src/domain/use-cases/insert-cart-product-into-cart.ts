import { CartProduct } from '../models/cart-product';

export function insertCartProductIntoCart(cart: CartProduct[], cartProduct: CartProduct) {
  return [...cart, cartProduct];
}

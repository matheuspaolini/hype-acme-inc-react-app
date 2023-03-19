import { CartProduct } from 'domain/models/cart-product';

export function removeCartProductFromCart(cart: CartProduct[], id: string) {
  return cart.filter((cartProduct) => cartProduct.id !== id);
}

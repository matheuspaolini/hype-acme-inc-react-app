import { CartProduct } from '../models/cart-product';

export type UpdateCartProductQuantityFn = {
  cart: CartProduct[];
  id: string;
  quantity: number;
}

export function updateCartProductQuantity({ cart, id, quantity }: UpdateCartProductQuantityFn) {
  const newCart = [...cart];
  const currentCartProduct = newCart.find((cartProdct) => cartProdct.id === id);

  if (currentCartProduct) {
    currentCartProduct.quantity = quantity;
  }

  return newCart;
}


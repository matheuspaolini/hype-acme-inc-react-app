import { CartProduct } from './cart-product';

export interface Checkout {
  username: string;
  cart: CartProduct[];
  totalPrice: number;
  cartTotalItems: number;
}

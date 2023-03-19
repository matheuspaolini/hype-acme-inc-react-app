import { CartProduct } from 'domain/models/cart-product';
import { Product } from 'domain/models/product';

export function calculateCartTotalPrice(productList: Product[], cart: CartProduct[]) {
  const priceList = cart.map(
    (cartProduct) => {
      const price = productList.find((product) => product.id === cartProduct.id)?.price || 0;
      const finalPrice = price * cartProduct.quantity;
      return finalPrice;
    }
  );

  return priceList.reduce((previous, current) => previous + current, 0);
}

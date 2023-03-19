import { CartProduct } from 'domain/models/cart-product';
import { Product } from 'domain/models/product';

export function syncProductListAndCart(productList: Product[], cart: CartProduct[]) {
  return productList.filter((product) => cart.find((cartProduct) => cartProduct.id === product.id))
}

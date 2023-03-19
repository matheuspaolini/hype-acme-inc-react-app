import { atom } from 'jotai';

import { _productListAtom } from 'application/jotai-store/product-list';

import { CartProduct } from 'domain/models/cart-product';
import { insertCartProduct } from 'domain/use-cases/insert-cart-product';
import { removeCartProduct } from 'domain/use-cases/remove-cart-product';
import { UpdateCartProductQuantityFn, updateCartProduct } from 'domain/use-cases/update-cart-product';
import { calculateCartTotalPrice } from 'domain/use-cases/calculate-cart-total-price';
import { syncProductListAndCart } from 'domain/use-cases/sync-product-list-and-cart';

export const _cartAtom = atom([] as CartProduct[]);

export const _insertCartProductAtom = atom(
  null,
  (get, set, cartProduct: CartProduct) =>
    set(_cartAtom, insertCartProduct(get(_cartAtom), cartProduct))
);

export const _removeCartProductAtom = atom(
  null,
  (get, set, cartProductId: string) =>
    set(_cartAtom, removeCartProduct(get(_cartAtom), cartProductId))
);

export const _updateCartProductAtom = atom(
  null,
  (get, set, { id, quantity }: Omit<UpdateCartProductQuantityFn, 'cart'>) =>
    set(_cartAtom, updateCartProduct({ cart: get(_cartAtom), id, quantity }))
);

export const _clearCartAtom = atom(
  null,
  (get, set) => set(_cartAtom, [])
);

export const _cartTotalPriceAtom = atom(
  (get) => calculateCartTotalPrice(get(_productListAtom), get(_cartAtom))
);

export const _synchronizedProductListWithCartAtom = atom(
  (get) => syncProductListAndCart(get(_productListAtom), get(_cartAtom))
);

export const _cartTotalItemsAtom = atom(
  (get) => get(_cartAtom)
    .map(({ quantity }) => quantity)
    .reduce((previous, current) => previous + current, 0)
);

export const _isCartEmptyAtom = atom(
  (get) => !get(_cartTotalItemsAtom)
);

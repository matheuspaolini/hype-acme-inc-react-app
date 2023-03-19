import { atom } from 'jotai';

import { CartProduct } from 'domain/models/cart-product';
import { insertCartProduct } from 'domain/use-cases/insert-cart-product';
import { removeCartProduct as removeCartProduct } from 'domain/use-cases/remove-cart-product';
import { UpdateCartProductQuantityFn, updateCartProduct } from 'domain/use-cases/update-cart-product';

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

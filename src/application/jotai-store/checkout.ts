import { _cartAtom, _cartTotalItemsAtom, _cartTotalPriceAtom } from 'application/jotai-store/cart';

import { Checkout } from 'domain/models/checkout';

import { atom } from 'jotai';

export const _checkoutAtom = atom<Checkout>(
  (get) => ({
    username: 'Usuário',
    cart: get(_cartAtom),
    cartTotalItems: get(_cartTotalItemsAtom),
    totalPrice: get(_cartTotalPriceAtom),
  })
);

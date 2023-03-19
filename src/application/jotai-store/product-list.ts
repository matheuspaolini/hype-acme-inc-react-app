import { Product } from 'domain/models/product';

import { atom } from 'jotai';

export const productListKey = 'acme-app-product-list';

export const _productListAtom = atom([] as Product[]);

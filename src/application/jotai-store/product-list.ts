import { productListFactory } from 'application/factories/product-list-factory';
import { atom, useSetAtom } from 'jotai';

const productListKey = 'acme-app-product-list';

const productList = productListFactory();

export const _productListAtom = atom(productList);

export function initPersistedProductList() {
  const setProductListAtom = useSetAtom(_productListAtom);

  const productListFromLocalStorage = localStorage.getItem(productListKey);

  if (productListFromLocalStorage) {
    const parsedProductListFromLocalStorage = JSON.parse(productListFromLocalStorage);
    setProductListAtom(parsedProductListFromLocalStorage);

    return;
  }

  const stringifiedProductList = JSON.stringify(productList);
  localStorage.setItem(productListKey, stringifiedProductList);
}

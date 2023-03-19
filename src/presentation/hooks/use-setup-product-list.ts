import { useCallback, useEffect } from 'react';

import { _productListAtom, productListKey } from 'application/jotai-store/product-list';
import { productListFactory } from 'application/factories/product-list-factory';
import { acmeHttpGetProductList } from 'application/http/acme-http-get-product-list';

import { useSetAtom } from 'jotai';
import { Product } from 'domain/models/product';

const getProductList = async () => acmeHttpGetProductList(productListFactory());

const insertProductListIntoLocalStorage = (productList: Product[]) => {
  const stringifiedProductList = JSON.stringify(productList);
  localStorage.setItem(productListKey, stringifiedProductList);
}

const getProductListFromLocalStorage = (): Product[] => {
  const productListFromLocalStorage = localStorage.getItem(productListKey);
  const parsedProductListFromLocalStorage = JSON.parse(productListFromLocalStorage || '');
  return parsedProductListFromLocalStorage;
}

export function useSetupProductList() {
  const isSettedUp = !!localStorage.getItem(productListKey);

  const setProductListAtom = useSetAtom(_productListAtom);

  const setup = useCallback(async () => {
    if (isSettedUp) {
      const productListFromLocalStorage = getProductListFromLocalStorage()
      return setProductListAtom(productListFromLocalStorage);
    }

    const productList = await getProductList();

    insertProductListIntoLocalStorage(productList);
    setProductListAtom(productList);
  }, [isSettedUp]);

  useEffect(() => {
    setup();
  }, [setup]);
}

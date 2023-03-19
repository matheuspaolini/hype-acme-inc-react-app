import { Product } from 'domain/models/product';

import { generateProduct } from 'application/utils/generate-product';
import { generateProductTitleList } from 'application/utils/generate-product-title-list';

const titleList = generateProductTitleList();

export const productListFactory = (): Product[] =>
  titleList.map((title) => generateProduct(title));

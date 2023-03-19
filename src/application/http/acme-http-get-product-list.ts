import { Product } from 'domain/models/product';

const maxMiliseconds = 750;
const generateTimeToResolve = () => Math.floor(Math.random() * maxMiliseconds);

export const acmeHttpGetProductList = (productList: Product[]) =>
  new Promise<Product[]>((resolve) => {
    setTimeout(() => resolve(productList), generateTimeToResolve());
  });

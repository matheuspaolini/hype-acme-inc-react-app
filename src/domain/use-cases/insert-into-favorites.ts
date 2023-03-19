export function insertIntoFavorites(favoriteProductList: string[], productId: string) {
  const updatedProductList = [...favoriteProductList, productId];
  return updatedProductList;
}

export function insertFavorites(favoriteProductList: string[], productId: string) {
  const updatedProductList = [...favoriteProductList, productId];
  return updatedProductList;
}

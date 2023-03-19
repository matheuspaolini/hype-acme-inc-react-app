export function removeFromFavorites(favorites: string[], id: string) {
  return favorites.filter((favorite) => favorite !== id);
}

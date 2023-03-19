export function isOnFavorites(favorites: string[], id: string) {
  return favorites.find((favorite) => favorite === id);
}

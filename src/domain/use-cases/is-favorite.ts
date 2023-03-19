export function isFavorite(favorites: string[], id: string) {
  return favorites.find((favorite) => favorite === id);
}

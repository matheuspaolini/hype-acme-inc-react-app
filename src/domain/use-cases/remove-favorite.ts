export function removeFavorite(favorites: string[], id: string) {
  return favorites.filter((favorite) => favorite !== id);
}

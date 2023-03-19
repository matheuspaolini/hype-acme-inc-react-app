import { insertFavorites } from 'domain/use-cases/insert-favorite';
import { removeFavorite } from 'domain/use-cases/remove-favorite';
import { atom } from 'jotai';

export const _favoritesAtom = atom([] as string[]);

export const _insertFavoriteAtom = atom(
  null,
  (get, set, productId: string) => set(_favoritesAtom, insertFavorites(get(_favoritesAtom), productId))
);

export const _removeFavoriteAtom = atom(
  null,
  (get, set, productId: string) => set(_favoritesAtom, removeFavorite(get(_favoritesAtom), productId))
);

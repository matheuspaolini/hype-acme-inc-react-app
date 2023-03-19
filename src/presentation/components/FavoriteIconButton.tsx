import { Heart } from 'phosphor-react';
import { IconButton } from './IconButton';
import { RootCSS } from 'presentation/styles/stitches.config';
import { ForwardedRef, forwardRef, useCallback } from 'react';
import { useAtomValue, useSetAtom } from 'jotai';
import { _insertFavoriteAtom, _favoritesAtom, _removeFavoriteAtom } from 'application/jotai-store/favorites';
import { isFavorite } from 'domain/use-cases/is-favorite';

type Props = {
  initialValue?: boolean;
  productId?: string;

  onAddFavorite?: (value: boolean) => void;
} & RootCSS;

export function FavoriteIconButtonComponent(props: Props, ref: ForwardedRef<HTMLButtonElement>) {
  const { productId = '', rootCss } = props;

  const favoritesAtom = useAtomValue(_favoritesAtom);
  const isOnFavoritesAtom = isFavorite(favoritesAtom, productId);
  const insetFavoriteAtom = useSetAtom(_insertFavoriteAtom);
  const removeFavoriteAtom = useSetAtom(_removeFavoriteAtom);

  const handleToggleFavorite = useCallback(() => {
    if (!productId) return;

    isOnFavoritesAtom
      ? removeFavoriteAtom(productId)
      : insetFavoriteAtom(productId);
  }, [productId, isOnFavoritesAtom, removeFavoriteAtom, insetFavoriteAtom]);

  return (
    <IconButton
      ref={ref}
      onClick={handleToggleFavorite}
      rootCss={{ ...rootCss, color: isOnFavoritesAtom ? '$Primary' : '$MediumGray' }}
    >
      <Heart size={24} weight="fill" />
    </IconButton>
  );
}

export const FavoriteIconButton = forwardRef(FavoriteIconButtonComponent);

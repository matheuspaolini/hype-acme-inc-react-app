import { Heart } from 'phosphor-react';
import { IconButton } from './IconButton';
import { RootCSS, styled } from 'presentation/styles/stitches.config';
import { ForwardedRef, forwardRef, useCallback, useState } from 'react';

type Props = {
  size?: number;
  initialValue?: boolean;

  onAddFavorite?: (value: boolean) => void;
} & RootCSS;

export function FavoriteIconButtonComponent(props: Props, ref: ForwardedRef<HTMLButtonElement>) {
  const { size = 24, initialValue = false, onAddFavorite, rootCss } = props;

  const [_isActive, _setIsActive] = useState(initialValue);

  const handleAddFavorite = useCallback(() => {
    const nextState = !_isActive;

    _setIsActive(nextState);

    if (onAddFavorite) onAddFavorite(nextState);
  }, [_isActive, onAddFavorite]);

  return (
    <IconButton
      ref={ref}
      onClick={handleAddFavorite}
      rootCss={{ ...rootCss, color: _isActive ? '$Primary' : '$MediumGray' }}
    >
      <Heart size={size} weight="fill" />
    </IconButton>
  );
}

export const FavoriteIconButton = forwardRef(FavoriteIconButtonComponent);

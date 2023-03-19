import { Heart, ShoppingCart } from 'phosphor-react';
import { IconButton } from './IconButton';
import { RootCSS, styled } from 'presentation/styles/stitches.config';
import { ForwardedRef, forwardRef, useCallback, useState } from 'react';

type Props = {
  size?: number;
  productId?: string;
} & RootCSS;

function CartIconButtonComponent(props: Props, ref: ForwardedRef<HTMLButtonElement>) {
  const { size = 24, productId, rootCss } = props;

  const handleOnCartClick = useCallback(() => {

  }, []);

  return (
    <IconButton ref={ref} onClick={handleOnCartClick} rootCss={{ ...rootCss }}>
      <ShoppingCart size={size} weight="fill" />
    </IconButton>
  );
}

export const CartIconButton = forwardRef(CartIconButtonComponent);

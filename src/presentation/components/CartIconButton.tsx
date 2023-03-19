import { Heart, ShoppingCart } from 'phosphor-react';
import { IconButton } from './IconButton';
import { RootCSS, styled } from 'presentation/styles/stitches.config';
import { ForwardedRef, forwardRef, useCallback, useState } from 'react';
import { useSetAtom } from 'jotai';
import { _insertCartProductAtom } from 'application/jotai-store/cart';

type Props = {
  productId?: string;
} & RootCSS;

function CartIconButtonComponent(props: Props, ref: ForwardedRef<HTMLButtonElement>) {
  const { productId, rootCss } = props;

  const insertCartProductIntoCart = useSetAtom(_insertCartProductAtom);

  const handleOnCartClick = useCallback(() => {
    if (!productId) return;

    insertCartProductIntoCart({ id: productId, quantity: 1 });
  }, [productId]);

  return (
    <IconButton ref={ref} onClick={handleOnCartClick} rootCss={{ ...rootCss }}>
      <ShoppingCart size={24} weight="fill" />
    </IconButton>
  );
}

export const CartIconButton = forwardRef(CartIconButtonComponent);

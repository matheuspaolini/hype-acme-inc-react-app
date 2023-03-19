import { ForwardedRef, forwardRef, useCallback } from 'react';

import { IconButton } from 'presentation/components/IconButton';
import { RootCSS } from 'presentation/styles/stitches.config';

import { Trash } from 'phosphor-react';
import { useSetAtom } from 'jotai';
import { _removeCartProductAtom } from 'application/jotai-store/cart';

type Props = {
  productId?: string;
  onRemove?: () => void;
} & RootCSS;

function TrashIconButtonComponent(props: Props, ref: ForwardedRef<HTMLButtonElement>) {
  const { productId, onRemove, rootCss } = props;
  const removeCartProductFromCart = useSetAtom(_removeCartProductAtom);

  const handleRemoveFromCart = useCallback(() => {
    if (!productId) return;

    removeCartProductFromCart(productId);

    if (onRemove) onRemove();
  }, [productId, onRemove]);

  return (
    <IconButton ref={ref} onClick={handleRemoveFromCart} rootCss={{ ...rootCss }}>
      <Trash size={24} weight="fill" />
    </IconButton>
  );
}

export const TrashIconButton = forwardRef(TrashIconButtonComponent);

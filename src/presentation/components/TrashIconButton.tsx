import { ForwardedRef, forwardRef, useCallback } from 'react';

import { IconButton } from 'presentation/components/IconButton';
import { RootCSS } from 'presentation/styles/stitches.config';

import { Trash } from 'phosphor-react';

type Props = {
  size?: number;
  productId?: string;
} & RootCSS;

function TrashIconButtonComponent(props: Props, ref: ForwardedRef<HTMLButtonElement>) {
  const { productId, rootCss } = props;

  const handleRemoveFromCart = useCallback(() => {

  }, []);

  return (
    <IconButton ref={ref} onClick={handleRemoveFromCart} rootCss={{ ...rootCss }}>
      <Trash size={24} weight="fill" />
    </IconButton>
  );
}

export const TrashIconButton = forwardRef(TrashIconButtonComponent);

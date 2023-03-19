import { styled } from 'presentation/styles/stitches.config';
import { useCallback, useEffect, useState } from 'react';
import { IconButton } from './IconButton';
import { Minus, Plus } from 'phosphor-react';
import { useAtomValue, useSetAtom } from 'jotai';
import { _cartAtom, _updateCartProductAtom } from 'application/jotai-store/cart';

type Props = {
  productId?: string;
  initialValue?: number;
}

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

const Quantity = styled('span', {
  fontSize: 24,
  color: '$DarkGray',

  width: 64,
  height: 48,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export function ChooseQuantity({ productId, initialValue }: Props) {
  const cartAtom = useAtomValue(_cartAtom);
  const updateCartProductQuantity = useSetAtom(_updateCartProductAtom);
  const currentQuantity = cartAtom.find((cartProduct) => cartProduct.id === productId)?.quantity;

  const [quantity, setQuantity] = useState(currentQuantity || 1);
  const isDisabled = quantity <= 1;

  const increment = useCallback(() => {
    if (!productId) return;

    const newQuantity = quantity + 1;

    updateCartProductQuantity({ id: productId, quantity: newQuantity });
    setQuantity(newQuantity);
  }, [productId, quantity]);

  const decrement = useCallback(() => {
    if (!productId) return;

    const newQuantity = quantity - 1;

    updateCartProductQuantity({ id: productId, quantity: newQuantity });
    setQuantity(newQuantity);
  }, [productId, quantity]);

  return (
    <Container>
      <IconButton onClick={decrement} disabled={isDisabled}>
        <Minus size={24} weight="fill" />
      </IconButton>

      <Quantity>{quantity}</Quantity>

      <IconButton onClick={increment} rootCss={{ background: '$Primary', color: '$White' }}>
        <Plus size={24} weight="fill" />
      </IconButton>
    </Container>
  );
}

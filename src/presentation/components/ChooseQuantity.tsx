import { styled } from 'presentation/styles/stitches.config';
import { useState } from 'react';
import { IconButton } from './IconButton';
import { Minus, Plus } from 'phosphor-react';

type Props = {
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

export function ChooseQuantity({ initialValue = 1 }: Props) {
  const [quantity, setQuantity] = useState(initialValue);
  const isDisabled = quantity <= 1;

  const increment = () => setQuantity((quantity) => quantity + 1);
  const decrement = () => setQuantity((quantity) => quantity - 1);

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

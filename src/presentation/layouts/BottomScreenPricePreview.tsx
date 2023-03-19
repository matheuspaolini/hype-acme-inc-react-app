import { keyframes, styled } from 'presentation/styles/stitches.config';
import { Box } from 'presentation/components/Box';
import { Button } from 'presentation/components/Button';

import { ArrowRight } from 'phosphor-react';
import { Spacer } from 'presentation/components/Spacer';
import { useState } from 'react';

const slideUpAnimation = keyframes({
  from: {
    bottom: '-100%',
  },
  to: {
    bottom: 0,
  }
});

const slideDownAnimation = keyframes({
  from: {
    bottom: 0,
  },
  to: {
    bottom: '-100%',
  }
});

const Container = styled('div', {
  position: 'fixed',
  bottom: 0,
  left: '50%',
  transform: 'translate(-50%)',

  zIndex: 1,

  padding: 20,

  borderTopRightRadius: 16,
  borderTopLeftRadius: 16,

  margin: '0 auto',

  background: '$LowGray',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '100%',
  maxWidth: 1200,

  height: 100,

  boxShadow: '0 0 20px 0px rgba(0,0,0,0.3)'
});

const Price = styled('div', {
  color: '$DarkGray',
  fontSize: 24,
});

const ProductQuantity = styled('small', {
  color: '$MediumGray',
  fontSize: 14,
});

export function BottomScreenPricePreview() {
  const [isActive, setIsActive] = useState(false);

  const currentAnimation = isActive
    ? slideUpAnimation
    : slideDownAnimation;

  return (
    <Container css={{ animation: `${currentAnimation} 0.75s ease forwards` }}>
      <Box>
        <Price>R$ 657,00</Price>
        <Spacer yAxis={8} />
        <ProductQuantity>4 Itens adicionados</ProductQuantity>
      </Box>

      <Button onClick={() => setIsActive(!isActive)} rightAdornment={<ArrowRight size={24} />}>
        Prosseguir
      </Button>
    </Container>
  );
}

import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { _cartTotalPriceAtom, _cartAtom, _cartTotalItemsAtom } from 'application/jotai-store/cart';

import { animations, keyframes, styled } from 'presentation/styles/stitches.config';
import { Box } from 'presentation/components/Box';
import { Button } from 'presentation/components/Button';
import { Spacer } from 'presentation/components/Spacer';
import { formatPriceToBrl } from 'presentation/utils/format-price-to-brl';

import { atom, useAtomValue, useSetAtom } from 'jotai';

import { ArrowRight } from 'phosphor-react';

const Container = styled('div', {
  position: 'fixed',
  bottom: 0,
  left: '50%',
  transform: 'translate(-50%)',

  zIndex: 1,

  width: '100%',
  maxWidth: 1200,
  height: 100,

  padding: 20,

  borderTopRightRadius: 16,
  borderTopLeftRadius: 16,

  background: '$LowGray',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  filter: 'drop-shadow(0px -59px 23px rgba(0, 0, 0, 0.01)) drop-shadow(0px -33px 20px rgba(0, 0, 0, 0.03)) drop-shadow(0px -15px 15px rgba(0, 0, 0, 0.04)) drop-shadow(0px -4px 8px rgba(0, 0, 0, 0.05)) drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.05))'
});

const Price = styled('div', {
  color: '$DarkGray',
  fontSize: 24,
});

const ProductQuantity = styled('small', {
  color: '$MediumGray',
  fontSize: 14,
});

export const _showBottomScreenPricePreviewAtom = atom(false);

export function BottomScreenPricePreview() {
  const location = useLocation();
  const navigate = useNavigate();
  const goToCheckout = () => navigate({ pathname: '/checkout' });

  const cartTotalPriceAtom = useAtomValue(_cartTotalPriceAtom);
  const cartTotalItemsAtom = useAtomValue(_cartTotalItemsAtom);

  const quantityText = cartTotalItemsAtom === 1
    ? '1 Item adicionado.'
    : `${cartTotalItemsAtom} Itens adicionados.`;

  const formattedPrice = formatPriceToBrl(cartTotalPriceAtom);

  const showBottomScreenPricePreviewAtom = useAtomValue(_showBottomScreenPricePreviewAtom);
  const setShowBottomScreenPricePreviewAtom = useSetAtom(_showBottomScreenPricePreviewAtom);

  const currentAnimation = showBottomScreenPricePreviewAtom
    ? animations.slideUp
    : animations.slideDown;

  useEffect(() => {
    if (location.pathname.includes('checkout')) {
      return setShowBottomScreenPricePreviewAtom(false);
    }

    if (!!cartTotalItemsAtom) {
      setShowBottomScreenPricePreviewAtom(true);
    } else {
      setShowBottomScreenPricePreviewAtom(false);
    }
  }, [location.pathname, cartTotalItemsAtom]);

  return (
    <Container css={{ animation: `${currentAnimation} 0.75s ease forwards` }}>
      <Box>
        <Price>{formattedPrice}</Price>
        <Spacer yAxis={4} />
        <ProductQuantity>{quantityText}</ProductQuantity>
      </Box>

      <Button onClick={goToCheckout} rightAdornment={<ArrowRight size={24} />}>
        Prosseguir
      </Button>
    </Container>
  );
}

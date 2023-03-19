import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { _checkoutAtom } from 'application/jotai-store/checkout';
import { _cartAtom, _cartTotalPriceAtom, _clearCartAtom } from 'application/jotai-store/cart';

import { Checkout } from 'domain/models/checkout';

import { Navigator } from 'presentation/components/Navigator';
import { OrderItem } from 'presentation/components/OrderItem';
import { Spacer } from 'presentation/components/Spacer';
import { animations, styled } from 'presentation/styles/stitches.config';
import { Button } from 'presentation/components/Button';
import { Box } from 'presentation/components/Box';
import { formatPriceToBrl } from 'presentation/utils/format-price-to-brl';

import { useAtomValue, useSetAtom } from 'jotai';

import { Check, ShoppingBagOpen } from 'phosphor-react';

const Container = styled('div', {
  width: '100%',
  maxWidth: 1080,

  margin: '0 auto',
});

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

const TotalItems = styled('p', {
  fontSize: 32,
  color: '$MediumGray',

  display: 'flex',
  alignItems: 'center',
  gap: 16,
});

const Total = styled('p', {
  fontSize: 28,
  color: '$DarkGray',
});

const AcmePoints = styled('small', {
  fontSize: 16,
  color: '$MediumGray'
});

function logCheckoutJSON(checkoutAtom: Checkout) {
  console.log('JSON Object generated on Checkout Page.\n', checkoutAtom);
}

export function OrderCheckout() {
  const navigate = useNavigate();

  const checkoutAtom = useAtomValue(_checkoutAtom);

  const cartTotalPriceAtom = useAtomValue(_cartTotalPriceAtom);
  const formattedPrice = formatPriceToBrl(cartTotalPriceAtom);

  const cartAtom = useAtomValue(_cartAtom);
  const clearCart = useSetAtom(_clearCartAtom)
  const isCartEmpty = cartAtom.length === 0;

  const goToFinished = useCallback(() => navigate({ pathname: '/finished' }, { replace: true }), []);

  const handleFinishOrder = useCallback(() => {
    logCheckoutJSON(checkoutAtom);
    clearCart();
    goToFinished();
  }, [goToFinished]);

  useEffect(() => {
    if (isCartEmpty) navigate('/');
  }, [isCartEmpty]);

  return (
    <Container css={{ animation: `${animations.slideAndfadeIn} 0.5s ease forwards`, opacity: 0 }}>
      <Navigator pageTitle="Checkout" />

      <Spacer yAxis={64} />

      <Wrapper>
        <TotalItems>
          <ShoppingBagOpen size={32} />
          <span>Resumo</span>
        </TotalItems>

        <Spacer yAxis={12} />

        {cartAtom.map((cartProduct) =>
          <OrderItem key={cartProduct.id} cartProduct={cartProduct} />
        )}

        <Box>
          <Total>Valor Total: <b>{formattedPrice}</b></Total>
          <Spacer yAxis={8} />
          <AcmePoints>Você irá receber <b>{Math.floor(cartTotalPriceAtom * 1.25)}</b> Acme Points!</AcmePoints>
        </Box>

        <Spacer yAxis={24} />

        <Button
          rootCss={{
            width: 320,
            '@small-screen': {
              width: '100%',
            }
          }}
          leftAdornment={<Check size={20} weight="bold" />}
          onClick={handleFinishOrder}
        >
          Finalizar
        </Button>
      </Wrapper>

      <Spacer yAxis={240} />
    </Container>
  );
}

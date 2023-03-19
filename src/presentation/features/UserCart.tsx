import { _productListAtom } from 'application/jotai-store/product-list';
import {
  _cartTotalItemsAtom,
  _clearCartAtom,
  _isCartEmptyAtom,
  _synchronizedProductListWithCartAtom
} from 'application/jotai-store/cart';

import { CartProductCard } from 'presentation/components/CartProductCard';
import { Navigator } from 'presentation/components/Navigator';
import { Spacer } from 'presentation/components/Spacer';
import { styled } from 'presentation/styles/stitches.config';

import { useAtomValue, useSetAtom } from 'jotai';
import { Button } from 'presentation/components/Button';

import { ShoppingCartSimple, Trash } from 'phosphor-react';

const Container = styled('div', {
  width: '100%',
  maxWidth: 1080,

  margin: '0 auto',

  '@medium-screen': {
    maxWidth: 640,
  }
});

const ProductGrid = styled('div', {
  display: 'grid',
  gap: 32,
  gridTemplateColumns: '1fr 1fr 1fr',

  '@medium-screen': {
    gridTemplateColumns: '1fr 1fr',
  },

  '@small-screen': {
    gridTemplateColumns: '1fr',
  }
});

const NoProducts = styled('div', {
  height: 480,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 24,
});

const NoProductsMessage = styled('p', {
  fontSize: 28,
  color: '$MediumGray',
  textAlign: 'center',
});

export function UserCart() {
  const synchronizedProductListWithCartAtom = useAtomValue(_synchronizedProductListWithCartAtom);
  const isCartEmptyAtom = useAtomValue(_isCartEmptyAtom);

  const clearCartAtom = useSetAtom(_clearCartAtom);

  return (
    <Container>
      <Navigator pageTitle="Carrinho" />

      <Spacer yAxis={64} />

      {!isCartEmptyAtom && (
        <Button onClick={clearCartAtom} leftAdornment={<Trash size={24} weight="fill" />}>
          Limpar Carrinho
        </Button>
      )}

      <Spacer yAxis={64} />

      {!isCartEmptyAtom ? (
        <ProductGrid>
          {synchronizedProductListWithCartAtom.map((product) =>
            <CartProductCard key={product.id} product={product} />
          )}
        </ProductGrid>
      ) : (
        <NoProducts>
          <ShoppingCartSimple size={96} color="#A0A0A0" weight="fill" />
          <NoProductsMessage>
            Seu carrinho está vazio ;(
          </NoProductsMessage>
        </NoProducts>
      )}

      <Spacer yAxis={80} />
    </Container>
  );
}

import { CartProductCard } from 'presentation/components/CartProductCard';
import { Navigator } from 'presentation/components/Navigator';
import { Spacer } from 'presentation/components/Spacer';
import { localProductList } from 'presentation/layouts/RootLayout';
import { styled } from 'presentation/styles/stitches.config';

const Container = styled('div', {
  width: '100%',
  maxWidth: 1080,

  margin: '0 auto',
  padding: '24px 0',

  '@medium-screen': {
    maxWidth: 640,

    padding: 0,
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

export function UserCart() {
  return (
    <Container>
      <Navigator pageTitle="Carrinho" />

      <Spacer yAxis={64} />

      <ProductGrid>
        {localProductList.map((product) =>
          <CartProductCard
            key={product.id}
            product={product}
          />
        )}
      </ProductGrid>
    </Container>
  );
}

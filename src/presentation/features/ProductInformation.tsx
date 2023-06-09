import { useCallback, useState } from 'react';

import { ShoppingCart, Trash } from 'phosphor-react';

import { Box } from 'presentation/components/Box';
import { Button } from 'presentation/components/Button';
import { ChooseQuantity } from 'presentation/components/ChooseQuantity';
import { FavoriteIconButton } from 'presentation/components/FavoriteIconButton';
import { Spacer } from 'presentation/components/Spacer';
import { animations, styled } from 'presentation/styles/stitches.config';
import { formatPriceToBrl } from 'presentation/utils/format-price-to-brl';
import { Navigator } from 'presentation/components/Navigator';

import { useParams } from 'react-router-dom';
import { useAtomValue, useSetAtom } from 'jotai';
import { _productListAtom } from 'application/jotai-store/product-list';
import { _cartAtom, _insertCartProductAtom } from 'application/jotai-store/cart';
import { TrashIconButton } from 'presentation/components/TrashIconButton';

const Container = styled('div', {
  width: '100%',
  maxWidth: 1080,

  margin: '0 auto',

  animation: `${animations.fadeIn} 1s ease forwards`,

  '@medium-screen': {
    maxWidth: 640,
  }
});

const Wrapper = styled('div', {
  height: 'fit-content',

  display: 'flex',
  gap: 32,

  '@medium-screen': {
    width: '100%',
    flexDirection: 'column',
  }
});

const Banner = styled('div', {
  position: 'relative',
  width: '100%',
  maxWidth: 540,
  height: 'fit-content',

  '@medium-screen': {
    maxWidth: '100%',
  }
});

const BannerImage = styled('img', {
  width: '100%',
  minWidth: 440,
  aspectRatio: 1,

  borderRadius: 8,

  objectFit: 'cover',

  '@large-screen': {
    maxWidth: '100%',
  },

  '@small-screen': {
    minWidth: 280,
  }
});

const Information = styled('div', {
  maxWidth: '50%',

  '@medium-screen': {
    maxWidth: '100%',

    paddingLeft: 24,
    paddingRight: 24,
  },
});

export const Title = styled('h1', {
  fontSize: 32,
  fontWeight: '$Light',

  color: '$DarkGray',
});

export const Price = styled('p', {
  fontSize: 32,
  fontWeight: '$Light',

  color: '$Primary',
});

const Description = styled('p', {
  fontSize: 20,
  fontWeight: '$Light',

  color: '$MediumGray',
});

const ButtonGroup = styled('div', {
  animation: `${animations.slideAndfadeIn} 0.5s ease forwards`,

  display: 'flex',
  alignItems: 'center',
  gap: 16,
});

export function ProductInformation() {
  const productListAtom = useAtomValue(_productListAtom)

  const params = useParams();
  const product = productListAtom.find((product) => product.id === params.productId);

  const insertCartProductIntoCart = useSetAtom(_insertCartProductAtom);

  const cartAtom = useAtomValue(_cartAtom);
  const cartProduct = cartAtom.find((cartProduct) => cartProduct.id === product?.id);
  const isOnCart = !!cartProduct;

  const [isQuantityShown, setIsQuantityShown] = useState(isOnCart || false);

  const formattedPrice = formatPriceToBrl(product?.price || 0);

  const handleAddToCart = useCallback(() => {
    if (!product?.id) return;

    insertCartProductIntoCart({ id: product.id, quantity: 1 });
    setIsQuantityShown(true);
  }, [insertCartProductIntoCart, product?.id]);

  const handleRemoveFromCart = useCallback(() => {
    setIsQuantityShown(false);
  }, []);

  return (
    <Container>
      <Navigator pageTitle="Produto" />

      <Spacer yAxis={64} />

      <Wrapper>
        <Banner>
          <BannerImage src={product?.image} />
          <FavoriteIconButton
            productId={product?.id}
            rootCss={{ position: 'absolute', bottom: 16, right: 16 }}
          />
        </Banner>

        <Information>
          <Title>{product?.title}</Title>
          <Price>{formattedPrice}</Price>

          <Spacer yAxis={24} />

          <Description>{product?.description}</Description>

          <Spacer yAxis={12} />

          <Box as="small" css={{ color: '$MediumGray' }}>
            Código: {product?.id}
          </Box>

          <Spacer yAxis={48} />

          {isQuantityShown ? (
            <ButtonGroup>
              <TrashIconButton
                onRemove={handleRemoveFromCart}
                productId={product?.id}
              />

              <ChooseQuantity
                initialValue={cartProduct?.quantity}
                productId={product?.id}
              />
            </ButtonGroup>
          ) : (
            <Button
              onClick={handleAddToCart}
              leftAdornment={<ShoppingCart weight="fill" size={24} />}
              rootCss={{
                animation: `${animations.slideAndfadeIn} 0.5s ease forwards`,
                '@small-screen': {
                  width: '100%',
                }
              }}
            >
              Adicionar ao Carrinho
            </Button>
          )}
        </Information>
      </Wrapper>

      <Spacer yAxis={120} />
    </Container>
  );
}

import { useCallback } from 'react';

import { ProductModel } from 'domain/models/product';

import { Spacer } from 'presentation/components/Spacer';
import { FavoriteIconButton } from 'presentation/components/FavoriteIconButton';
import { CartIconButton } from 'presentation/components/CartIconButton';
import { formatPriceToBrl } from 'presentation/utils/format-price-to-brl';
import { styled } from 'presentation/styles/stitches.config';

import { Link, useNavigate } from 'react-router-dom';
import { TrashIconButton } from './TrashIconButton';
import { ChooseQuantity } from './ChooseQuantity';

type Props = {
  product?: Partial<ProductModel>;
}

const Container = styled('div', {
  width: '100%',
  maxWidth: 480,
});

const Image = styled('img', {
  width: '100%',
  aspectRatio: 1,

  cursor: 'pointer',

  outline: 'transparent',

  objectFit: 'cover',

  borderRadius: 8,
});

const ActionButtons = styled('div', {
  position: 'absolute',
  right: 0,
  bottom: 4,

  display: 'flex',
  gap: 12,
  margin: 12,

  opacity: 0,

  transition: 0.15 + 's',
});

const Wrapper = styled('div', {
  position: 'relative',

  '&:hover, &:focus-within': {
    [`& ${ActionButtons}`]: {
      opacity: 1,
    }
  },

  '@large-screen': {
    [`& ${ActionButtons}`]: {
      opacity: 1,
    }
  }
});

const Title = styled('h4', {
  width: 'fit-content',

  fontSize: 20,
  fontWeight: '$Light',

  color: '$DarkGray',
});

const Price = styled('p', {
  color: '$Primary',
  fontSize: 28,
  fontWeight: '$Light'
});

export function CartProductCard({ product }: Props) {
  const navigate = useNavigate();

  const productUrl = `/product/${product?.id}`;
  const formattedPrice = formatPriceToBrl(product?.price || 0);

  const handleImageClick = useCallback(() => {
    navigate({ pathname: productUrl });
  }, [productUrl]);

  const handleAddToCart = useCallback(() => {

  }, []);

  return (
    <Container>
      <Wrapper>
        <Image
          onClick={handleImageClick}
          loading="lazy"
          src={product?.imageUrl?.lowResolution}
        />

        <ActionButtons>
          <FavoriteIconButton />
          <TrashIconButton />
        </ActionButtons>
      </Wrapper>

      <Spacer yAxis={12} />

      <Link to={productUrl}>
        <Title>{product?.title}</Title>
      </Link>

      <Price>{formattedPrice}</Price>

      <Spacer yAxis={20} />

      <ChooseQuantity />
    </Container>
  );
}

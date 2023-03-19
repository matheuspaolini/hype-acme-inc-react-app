import { _productListAtom } from 'application/jotai-store/product-list';

import { styled } from 'presentation/styles/stitches.config';
import { Spacer } from 'presentation/components/Spacer';
import { formatPriceToBrl } from 'presentation/utils/format-price-to-brl';

import { useAtomValue } from 'jotai';
import { CartProduct } from 'domain/models/cart-product';
import { Box } from './Box';

const Container = styled('div', {
  paddingBottom: 20,

  borderBottom: '2px solid #F0F0F0',
});

const Title = styled('p', {
  color: '$DarkGray',
  fontSize: 24,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const Price = styled('p', {
  color: '$Primary',
  fontSize: 20,
});

const Subtotal = styled('div', {
  color: '$MediumGray',
  fontSize: 16,
});

type Props = {
  cartProduct: CartProduct;
}

export function OrderItem({ cartProduct }: Props) {
  const quantityText = cartProduct.quantity === 1
    ? '1 Item'
    : `${cartProduct.quantity} Itens`;

  const productListAtom = useAtomValue(_productListAtom);
  const product = productListAtom.find((product) => product.id === cartProduct.id);

  const formattedPrice = formatPriceToBrl(product?.price || 0);

  const subtotal = cartProduct.quantity * (product?.price || 0);
  const formattedSubtotal = formatPriceToBrl(subtotal);

  return (
    <Container>
      <Title>
        <span>{product?.title}</span>
        <Box as="span" css={{ fontSize: 18, color: '$MediumGray' }}>
          ({quantityText})
        </Box>
      </Title>

      <Price>{formattedPrice}</Price>
      <Spacer yAxis={12} />
      <Subtotal>Subtotal: {formattedSubtotal}</Subtotal>
    </Container>
  );
}

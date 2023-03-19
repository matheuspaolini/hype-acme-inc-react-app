import { ChangeEvent, ForwardedRef, forwardRef, useCallback, useState } from 'react';

import { Input } from 'presentation/components/Input';
import { Spacer } from 'presentation/components/Spacer';
import { styled } from 'presentation/styles/stitches.config';
import { ToggleButton } from 'presentation/components/ToggleButton';
import { ProductCard } from 'presentation/components/ProductCard';

import { _productListAtom } from 'application/jotai-store/product-list';

import { useAtomValue } from 'jotai';
import { MagnifyingGlass } from 'phosphor-react';
import { filterByFavorites } from 'domain/use-cases/filter-by-favorites';
import { _favoritesAtom } from 'application/jotai-store/favorites';
import { filterBySearch } from 'domain/use-cases/filter-by-search';

type Props = {}

const Container = styled('div', {
  width: '100%',
  maxWidth: 1080,

  margin: '0 auto',
});

const Title = styled('h2', {
  width: 'fit-content',
  margin: '0 auto',

  fontSize: 'clamp(32px, 2.5vw, 40px)',

  textAlign: 'center',
  color: '$DarkGray',
  fontWeight: '$Light'
});

const Filters = styled('div', {
  width: 1080 / 1.5,

  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  gap: 16,

  '@medium-screen': {
    width: '100%',
    gap: 8,
  }
});

const ProductGrid = styled('div', {
  minHeight: 240,

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

export function HomeProductListComponent(props: Props, ref: ForwardedRef<HTMLDivElement>) {
  const productListAtom = useAtomValue(_productListAtom);
  const favoritesAtomm = useAtomValue(_favoritesAtom);

  const [search, setSearch] = useState('');
  const [isFavoritesOnly, setIsFavoritesOnly] = useState(false);
  const toggleFavoritesOnly = () => setIsFavoritesOnly((state) => !state);

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.currentTarget.value;
    setSearch(searchValue);
  }, []);

  const currentProductList = isFavoritesOnly
    ? filterByFavorites(favoritesAtomm, productListAtom)
    : filterBySearch(productListAtom, search);

  return (
    <Container ref={ref}>
      <Spacer yAxis={120} />

      <Title>Confira nossos produtos! ;)</Title>

      <Spacer yAxis={32} />

      <Filters>
        <Input
          placeholder="Pesquisar"
          rootCss={{ width: '100% ' }}
          leftAdornment={<MagnifyingGlass size={24} />}
          onChange={handleSearch}
          value={search}
        />

        <ToggleButton onToggle={toggleFavoritesOnly} rootCss={{ width: 'fit-content' }}>
          Favoritos
        </ToggleButton>
      </Filters>

      <Spacer yAxis={80} />

      <ProductGrid>
        {currentProductList.map((product) =>
          <ProductCard
            key={product.id}
            product={product}
          />
        )}
      </ProductGrid>

      <Spacer yAxis={160} />
    </Container>
  );
}

export const HomeProductList = forwardRef(HomeProductListComponent);


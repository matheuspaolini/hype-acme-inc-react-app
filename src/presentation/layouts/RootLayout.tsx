import { Fragment } from 'react';

import { _productListAtom } from 'application/jotai-store/product-list';

import { Footer } from 'presentation/layouts/Footer';
import { Header } from 'presentation/layouts/Header';
import { styled, useStitches } from 'presentation/styles/stitches.config';
import { BottomScreenPricePreview } from 'presentation/layouts/BottomScreenPricePreview';
import { useSetupProductList } from 'presentation/hooks/use-setup-product-list';

import { Outlet, ScrollRestoration } from 'react-router-dom';

const Container = styled('div', {
  width: '100%',
  height: '100%',
});

export function RootLayout() {
  useStitches();
  useSetupProductList();

  return (
    <Fragment>
      <Container>
        <Header />
        <Outlet />
        <Footer />
      </Container>

      <BottomScreenPricePreview />

      <ScrollRestoration
        getKey={(location) => {
          const paths = ['/', '/finished'];

          return paths.includes(location.pathname)
            ? location.pathname
            : location.key
        }}
      />
    </Fragment>
  );
}

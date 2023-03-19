import { Fragment, useEffect } from 'react';

import { Footer } from 'presentation/layouts/Footer';
import { Header } from 'presentation/layouts/Header';
import { styled, useStitches } from 'presentation/styles/stitches.config';
import { BottomScreenPricePreview } from 'presentation/layouts/BottomScreenPricePreview';

import { makeLocalCreateProductList } from 'main/factories/use-cases/local-create-product-list-factory';

import { Outlet, ScrollRestoration } from 'react-router-dom';

const Container = styled('div', {
  width: '100%',
  height: '100%',
});

export const localProductList = makeLocalCreateProductList().perform();

export function RootLayout() {
  useStitches();

  return (
    <Fragment>
      <Container>
        <Header />
        <Outlet />
        <Footer />
      </Container>

      <BottomScreenPricePreview />

      <ScrollRestoration
        getKey={(location, matches) => {
          const paths = ['/'];

          return paths.includes(location.pathname)
            ? location.pathname
            : location.key
        }}
      />
    </Fragment>
  );
}

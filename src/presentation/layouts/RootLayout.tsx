import { Fragment } from 'react';

import { Footer } from 'presentation/layouts/Footer';
import { Header } from 'presentation/layouts/Header';
import { styled, useStitches } from 'presentation/styles/stitches.config';

import { makeLocalCreateProductList } from 'main/factories/use-cases/local-create-product-list-factory';

import { GetScrollRestorationKeyFunction, Outlet, ScrollRestoration } from 'react-router-dom';

const Container = styled('div', {
  width: '100%',
  height: '100%',
});

const paths = ['/'];

const getKey: GetScrollRestorationKeyFunction = (location, matches) =>
  paths.includes(location.pathname) ? location.pathname : location.key;

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

      <ScrollRestoration getKey={getKey} />
    </Fragment>
  );
}

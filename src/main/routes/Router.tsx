import { RootLayout } from 'presentation/layouts/RootLayout';
import { CartPage } from 'presentation/pages/Cart';
import { CheckoutPage } from 'presentation/pages/Checkout';
import { HomePage } from 'presentation/pages/Home';
import { ProductPage } from 'presentation/pages/Product';

import { createBrowserRouter } from 'react-router-dom';

export const browserRouter = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: 'product/:productId',
        element: <ProductPage />
      },
      {
        path: 'cart',
        element: <CartPage />
      },
      {
        path: 'checkout',
        element: <CheckoutPage />
      }
    ]
  }
]);

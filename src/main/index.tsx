import React from 'react';
import ReactDOM from 'react-dom/client';

import { browserRouter } from 'main/routes/Router';

import { Provider as JotaiProvider } from 'jotai';
import { RouterProvider } from 'react-router-dom';

const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM
  .createRoot(rootElement)
  .render(
    <React.StrictMode>
      <JotaiProvider>
        <RouterProvider router={browserRouter} />
      </JotaiProvider>
    </React.StrictMode>,
  );

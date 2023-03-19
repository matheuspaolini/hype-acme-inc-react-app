import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import { browserRouter } from './routes/Router';

const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM
  .createRoot(rootElement)
  .render(
    <React.StrictMode>
      <RouterProvider router={browserRouter} />
    </React.StrictMode>,
  );

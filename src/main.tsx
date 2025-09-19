import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from './core/routers/router';
import './core/styles/integral_cf-font.css';
import './core/styles/satoshi-font.css';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

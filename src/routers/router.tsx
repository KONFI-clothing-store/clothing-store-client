import { createBrowserRouter } from 'react-router-dom';

import {
  CartPage,
  ClothesPage,
  Home,
  Layout,
  PageOfClothes,
  Shop,
} from '@/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/shop/:type',
        element: <PageOfClothes />,
      },
      {
        path: '/shop/:type/:id',
        element: <ClothesPage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
    ],
  },
]);

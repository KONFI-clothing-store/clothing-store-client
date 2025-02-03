import { createBrowserRouter } from "react-router-dom";

import { Home, Layout, ClothesPage, Shop } from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop/:type/:id",
        element: <ClothesPage />,
      },
    ],
  },
]);

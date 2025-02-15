export type NAVIGATION_LIST_TYPE = {
  id: number;
  name: string;
  path: string;
};

export const NAVIGATION_LIST: Array<NAVIGATION_LIST_TYPE> = [
  {
    id: 1,
    name: 'Shop',
    path: '/shop',
  },
  {
    id: 2,
    name: 'Brands',
    path: '/brands',
  },
  {
    id: 3,
    name: 'New Arrivals',
    path: '/new-arrivals',
  },
];

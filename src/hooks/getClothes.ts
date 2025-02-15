import React from 'react';
import axios from 'axios';

import type { ClothesCardType } from '@/pages/Home/components';

export const useGetClothes = () => {
  const [data, setData] = React.useState<ClothesCardType[]>([]);

  const getData = React.useCallback(
    (
      url: string,
      params: {
        limit: number;
        offset: number;
        order?: string;
      },
    ) => {
      axios({
        method: 'GET',
        url,
        params,
      }).then((res) =>
        setData((prevState: ClothesCardType[]) => {
          if (!res.data.length) return prevState;

          if (prevState[0]?.name === res.data[0].name) {
            return res.data;
          }
          return [...prevState, ...res.data];
        }),
      );
    },
    [],
  );

  return { data, getData };
};

import { useFilter } from '@/core/zustand/filter';
import { ClothesCardType } from '@/pages/Home/components';

export const useClothesFilter = () => {
  const price = useFilter((state) => state.price);
  const size = useFilter((state) => state.size);

  const filter = (clothesData: ClothesCardType[]) => {
    let result: ClothesCardType[] = clothesData;

    if (price.to > 0) {
      result = result?.filter(
        (clothes) =>
          Number(clothes.price) >= price.from &&
          Number(clothes.price) <= price.to,
      );
    }

    if (size !== '') {
      result = result?.filter((clothes) => clothes.sizes.includes(size));
    }

    return result;
  };

  return { filter };
};

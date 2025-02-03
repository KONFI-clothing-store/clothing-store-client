import React from "react";

import { Container } from "@/components/ui";
import { ClothesCard } from "./components";

import { useGetClothes } from "@/hooks/getClothes";

export type ClothesCardType = {
  id: number;
  name: string;
  image_url: string;
  price: string;
  type: string;
  rating: string;
  createdAt: string;
  updatedAt: string;
};

interface Props {
  title: string;
  typeOfClothes: "all" | "latest" | "rating";
  className?: string;
}

export const Clothes: React.FC<Props> = ({ title, typeOfClothes, className }) => {
  const { data: clothes, getData } = useGetClothes();
  const [offsetState, setOffsetState] = React.useState<number>(0);

  React.useEffect(() => {
    getData(`${import.meta.env.VITE_API_BASE_URL}/clothes/${typeOfClothes}`, {
      limit: 4,
      offset: offsetState * 4,
    });

    setOffsetState(1);
  }, [getData, setOffsetState]);

  const addNewBatchOfClothes = () => {
    getData(`${import.meta.env.VITE_API_BASE_URL}/clothes/${typeOfClothes}`, {
      limit: 4,
      offset: offsetState * 4,
    });

    setOffsetState((prevState) => prevState + 1);
  };

  return (
    <section className={className}>
      <Container>
        <h2 className="font-integral_cf text-4xl text-center mb-[52px]">{title}</h2>

        <div className="grid grid-cols-4 gap-4 max-md:grid-cols-3 max-md654:grid-cols-2">
          {clothes?.map((item: ClothesCardType) => (
            <ClothesCard key={item.id} item={item} />
          ))}
        </div>

        <button
          onClick={addNewBatchOfClothes}
          className="block py-[13.5px] px-20 mx-auto mt-[36px] border border-gray-200 rounded-[62px] hover:bg-gray-300 duration-500"
        >
          Add more
        </button>
      </Container>
    </section>
  );
};

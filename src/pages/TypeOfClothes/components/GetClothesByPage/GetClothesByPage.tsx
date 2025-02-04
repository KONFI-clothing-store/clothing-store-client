import React from "react";
import cn from "classnames";
import axios from "axios";
import { useLocation } from "react-router-dom";

import { LIST_OF_URL } from "./constants/listOfUrl";
import { ClothesCard } from "@/components/ui";

interface Props {
  className?: string;
}

export const GetClothesByPage: React.FC<Props> = ({ className }) => {
  const [clothes, setClothes] = React.useState([]);
  const { pathname } = useLocation();

  React.useEffect(() => {
    const getClothes = async () => {
      try {
        const res = await axios({
          method: "get",
          url: `${import.meta.env.VITE_API_BASE_URL}/clothes/${LIST_OF_URL[pathname as keyof typeof LIST_OF_URL]}`,
        });

        setClothes(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getClothes();
  }, []);

  console.log("clothes:", clothes);

  return (
    <div className={cn(className, "grid grid-cols-3 gap-x-5 gap-y-[36px] max-md:grid-cols-2")}>
      {clothes.map((item) => (
        <ClothesCard item={item} />
      ))}
    </div>
  );
};

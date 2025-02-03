import React from "react";

import { Intro, Brands, Clothes } from "./components";

interface Props {
  className?: string;
}

export const Home: React.FC<Props> = () => {
  return (
    <>
      <Intro />
      <Brands />

      <Clothes title="New Arrivals" typeOfClothes="latest" className="mt-[70px] mb-16 max-md:mt-5" />
      <Clothes title="Top Rating" typeOfClothes="rating" className="mt-[70px] mb-16 max-md:mt-5" />
    </>
  );
};

import React from "react";

import { Breadcrumb, Container } from "@/components/ui";

import tShirtsImage from "@/assets/t-shirts-model.jpg";
import shortsImage from "@/assets/shorts-model.jpg";
import shirtsImage from "@/assets/shirts-model.jpg";
import jeansImage from "@/assets/jeans-model.jpg";
import { Link } from "react-router-dom";

export const Shop: React.FC = () => {
  return (
    <Container>
      <hr className="mb-6" />

      <Breadcrumb />

      <div className="flex gap-[50px] mb-10">
        <div className="grid gap-[50px] w-[48%] h-full mt-6">
          <Link to="t-shirts" className="group block h-[491px] rounded-[20px] overflow-hidden relative">
            <p className="absolute top-4 right-10 text-[36px] font-bold z-50">T-shirts</p>
            <img className="w-full h-full transition-transform duration-300 group-hover:scale-110" src={tShirtsImage} alt="T-shirt model" />
          </Link>
          <Link to="shorts" className="group rounded-[20px] h-[357px] overflow-hidden relative">
            <p className="absolute top-4 right-10 text-[36px] font-bold z-50">Shorts</p>
            <img className="w-full h-full transition-transform duration-300 group-hover:scale-110" src={shortsImage} alt="Short model" />
          </Link>
        </div>

        <div className="grid gap-[50px] w-[48%] h-full mt-6">
          <Link to="shirts" className="group h-[357px] rounded-[20px] overflow-hidden relative">
            <p className="absolute top-4 left-6 text-[36px] font-bold z-50">Shirts</p>
            <img className="w-full h-full transition-transform duration-300 group-hover:scale-110" src={shirtsImage} alt="Shirt model" />
          </Link>
          <Link to="jeans" className="group h-[491px] rounded-[20px] overflow-hidden relative">
            <p className="absolute top-3 left-6 text-[36px] font-bold z-50">Jeans</p>
            <img className="w-full h-full transition-transform duration-300 group-hover:scale-110" src={jeansImage} alt="Jean model" />
          </Link>
        </div>
      </div>
    </Container>
  );
};

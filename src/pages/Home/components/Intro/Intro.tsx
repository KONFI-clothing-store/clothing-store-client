import React from "react";
import cn from "classnames";
import { useNavigate } from "react-router-dom";

import { Button, Container, Icon } from "@/components/ui";

import models from "@/../public/images/models.png";

interface Props {
  className?: string;
}

export const Intro: React.FC<Props> = ({ className }) => {
  const navigate = useNavigate();

  return (
    <section className={cn(className, "bg-gray-300 pt-[43px]")}>
      <Container className="flex items-center justify-between max-md:flex-col">
        <div className="mb-[50px]">
          <h1 className="font-integral_cf text-5xl max-w-[577px] max-md1205:text-2xl">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="opacity-60 mt-[28px] max-w-[545px]">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality
            and cater to your sense of style.
          </p>
          <Button
            onClick={() => navigate("/shop")}
            className="mt-[37px] py-[15px] px-[67.5px] max-md:w-full"
          >
            Shop Now
          </Button>
        </div>

        <div className="max-w-[620px] relative max-md1024:max-w-[400px]">
          <Icon
            name="icon_star"
            className="absolute left-0 top-[35%] w-[56px] h-[56px] max-md1024:w-[32px] max-md1024:h-[32px]"
          />
          <Icon
            name="icon_star"
            className="absolute right-[0%] top-[7%] w-[104px] h-[104px] max-md1024:w-[56px] max-md1024:h-[56px] max-md1024: right-[4%]"
          />
          <img src={models} className="w-full" />
        </div>
      </Container>
    </section>
  );
};

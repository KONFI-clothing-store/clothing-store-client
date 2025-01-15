import { Container, Icon } from "@/components/ui";
import React from "react";

interface Props {
  className?: string;
}

export const Brands: React.FC<Props> = () => {
  return (
    <div className="bg-black">
      <Container className="flex flex-wrap items-center justify-between gap-x-3 gap-y-3 py-11 max-md:py-5">
        <Icon className="w-[167px] h-[34px]" name="versache" />
        <Icon className="w-[91px] h-[38px]" name="zara" />
        <Icon className="w-[156px] h-[36px]" name="gucci" />
        <Icon className="w-[194px] h-[32px]" name="prada" />
        <Icon className="w-[207px] h-[34px]" name="calvin" />
      </Container>
    </div>
  );
};

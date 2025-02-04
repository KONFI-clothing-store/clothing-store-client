import React from "react";
import cn from "classnames";

import { Button, ChooseSize } from "@/components/ui";
import { ChoosePrice } from "./components";

interface Props {
  className?: string;
}

export const FilterBar: React.FC<Props> = ({ className }) => {
  return (
    <aside className={cn(className, "w-[295px] p-6 border rounded-[20px]")}>
      <h5 className="text-lg font-bold mb-5">Filters</h5>

      <hr className="my-6" />

      {/* <div>
        <h5 className="text-lg font-bold mb-5">Type</h5>
        <ChooseSize className="w-full" isTitle={false} sizes={["All", "T-shirt", "Shirt", "Jeans", "Shorts"]} />
      </div>

      <hr className="my-6" /> */}

      <ChoosePrice />

      <hr className="my-6" />

      <div>
        <h5 className="text-lg font-bold mb-5">Size</h5>
        <ChooseSize
          className="w-full"
          isTitle={false}
          sizes={["X-Small", "Small", "Medium", "X-Medium", "Large", "X-Large"]}
        />
      </div>

      <Button className="w-full text-sm py-[14.5px] mt-6 bg-black">Apply Filter</Button>
    </aside>
  );
};

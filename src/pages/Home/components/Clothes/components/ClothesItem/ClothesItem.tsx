import React from "react";
import cn from "classnames";

import { Icon } from "@/components/ui";

import type { ClothesItemType } from "../../Clothes";

interface Props {
  className?: string;
  item: ClothesItemType;
}

export const ClothesItem: React.FC<Props> = ({ item, className }) => {
  const { name, price, image_url, rating} = item;

  return (
    <div className={cn(className, "max-w-[298px]")}>
      <div className="w-full grid place-items-center bg-gray-400 rounded-[20px] overflow-hidden">
        <img src={image_url} className="" alt={name} />
      </div>
      <p className="text-black text-lg mt-4 font-bold max-md1024:text-base">{name}</p>
      <div className="flex gap-x-1">
        <Icon name="yellow_star" className="w-5 h-5" />
        <p className="text-sm">
          {rating}/<span className="opacity-60">5</span>
        </p>
      </div>
      <p className="text-xl font-bold max-md1024:text-lg">${price}</p>
    </div>
  );
};

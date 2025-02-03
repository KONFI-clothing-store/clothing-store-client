import React from "react";
import cn from "classnames";

import { Icon } from "../Icon/Icon";

interface Props {
  rating: string;
  className?: string;
}

export const Rating: React.FC<Props> = ({ rating, className }) => {
  return (
    <div className={cn(className, "flex gap-x-[6.5px] max-md:gap-x-[4px]")}>
      {Array.from({ length: +rating }).map(() => (
        <Icon className="w-[21px] h-[20px]" name="rating_star" />
      ))}
      {Number(rating.split(".")[1]) !== 0 && <Icon className="w-[23px] h-[23px]" name="half_of_rating_star" />}
    </div>
  );
};

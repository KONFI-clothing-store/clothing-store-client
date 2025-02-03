import React from "react";

import { Rating, Icon } from "@/components/ui";

import { getFormattedDate } from "./utils";

import type { ClothesComment } from "../ClothesItem/ClothesItem.types";

interface Props {
  comments: ClothesComment[];
  className?: string;
}

export const CommentsItem: React.FC<Props> = ({ comments, className }) => {
  console.log("comments:", comments);
  return (
    <section className={className}>
      <h2 className="text-xl mb-8">All reviews ({comments.length})</h2>

      <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
        {comments.map((el: ClothesComment) => {
          const { id, rating, comment, first_name, second_name, createdAt } = el;

          return (
            <div
              className="flex flex-col justify-between py-7 pl-8 pr-[34px] rounded-[20px] border border-black border-opacity-10"
              key={id}
            >
              <div>
                <Rating className="mb-[15px]" rating={rating} />

                <p className="flex items-center gap-x-2 text-lg font-bold mb-3">
                  {first_name} {second_name[0]}.
                  <Icon className="w-[20px] h-[22px]" name={+rating >= 3 ? "positive_icon" : "negative_icon"} />
                </p>

                <p className="opacity-60 mb-6">"{comment}"</p>
              </div>

              <p className="opacity-60">Posted on {getFormattedDate(createdAt)}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

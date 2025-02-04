import React from "react";

import { Rating, Icon } from "@/components/ui";
import { getFormattedDate } from "@/pages/ClothesPage/components/CommentsItem/utils/getFormattedDate";

import { CommentType } from "./Comment.types";

interface Props {
  commentData: CommentType;
  className?: string;
}

export const Comment: React.FC<Props> = ({ commentData }) => {
  const { id, rating, comment, first_name, second_name, createdAt } = commentData;

  return (
    <div
      className="flex flex-col justify-between py-7 pl-8 pr-[34px] h-full rounded-[20px] border border-black border-opacity-10"
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
};

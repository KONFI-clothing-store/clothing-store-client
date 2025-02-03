import React from "react";
import cn from "classnames";

interface Props {
  sizes: string[];
  isTitle?: boolean;
  className?: string;
}

export const ChooseSize: React.FC<Props> = ({ isTitle = true, sizes, className }) => {
  const [choice, setChoice] = React.useState<string>("");

  const changeSize = (size: string) => {
    setChoice(size);
  };

  return (
    <div className={cn(className, "")}>
      {isTitle && <p className="opacity-60 mb-5">Choose Size</p>}

      <div className="flex flex-wrap gap-3">
        {sizes.map((size) => (
          <button
            className={`px-6 py-3 rounded-[62px] duration-500 ${
              choice === size ? "bg-black text-white" : "bg-gray-100 text-gray-600"
            } hover:bg-black hover:text-white duration-500`}
            key={size}
            onClick={() => changeSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

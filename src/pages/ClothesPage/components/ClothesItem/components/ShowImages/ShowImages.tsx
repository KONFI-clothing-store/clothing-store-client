import React from "react";
import cn from "classnames";

interface Props {
  images: string[];
  className?: string;
}

export const ShowImages: React.FC<Props> = ({ images, className }) => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  console.log("activeIndex:", activeIndex);

  return (
    <div className={cn(className, "flex gap-[14px] w-[610px] max-md1024:flex-col max-md1024:max-w-[550px] max-md579:w-full")}>
      <div className="grid gap-[14px] w-[25%] max-md1024:order-2 max-md1024:flex max-md1024:w-auto">
        {images.map((image, index) => (
          <button
            className={`bg-gray-100 rounded-[20px] overflow-hidden ${
              activeIndex === index && "outline outline-black"
            } max-md1024:w-[33%]`}
            onClick={() => setActiveIndex(index)}
          >
            <img
              className={`${activeIndex === index && "scale-90"}`}
              src={import.meta.env.VITE_API_BASE_URL + "/files/" + image}
            />
          </button>
        ))}
      </div>
      <img
        className="w-[73%] rounded-[20px] max-md1024:order-1 max-md1024:w-full"
        src={import.meta.env.VITE_API_BASE_URL + "/files/" + images[activeIndex]}
      />
    </div>
  );
};

import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import { ShoppingCart, CircleUserRound } from "lucide-react";

import { Container } from "../ui";

import { NAVIGATION_LIST } from "./navigationList";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const [isActiveMenu, setIsActiveMenu] = React.useState<boolean>(false);
  console.log("isActiveMenu: ", isActiveMenu);

  return (
    <header className={cn(className, "py-6 max-md654:py-3")}>
      <Container className="flex items-center justify-between py-3">
        <div className="flex items-center gap-x-[18.63px]">
          <button
            onClick={() => setIsActiveMenu((prevState) => !prevState)}
            className={"max-md:grid hidden gap-y-[4px] w-[18.75px] h-[14.25px] relative z-50 "}
          >
            <span
              className={`block w-[18.75px] h-[2px] bg-black rounded-[10px] ${
                isActiveMenu && "max-md:bg-white"
              } duration-500`}
            />
            <span
              className={`block w-[18.75px] h-[2px] bg-black rounded-[10px] ${
                isActiveMenu && "max-md:bg-white"
              } duration-500`}
            />
            <span
              className={`block w-[18.75px] h-[2px] bg-black rounded-[10px] ${
                isActiveMenu && "max-md:bg-white"
              } duration-500`}
            />
          </button>

          <Link
            to="/"
            className={`font-integral_cf text-2xl relative z-50 ${isActiveMenu && "max-md:text-white"} duration-500`}
          >
            SHOP.CO
          </Link>
        </div>

        <nav
          className={`max-md:bg-black max-md:absolute max-md:left-[-100%] max-md:top-0 max-md:w-[300px] max-md:h-full z-20 ${
            isActiveMenu && "max-md:left-[0%]"
          }  duration-500`}
        >
          <ul className="flex items-center gap-x-6 max-md:grid max-md:gap-y-4 max-md:mt-[120px] max-md:ml-4">
            {NAVIGATION_LIST.map((el) => (
              <li key={el.id}>
                <Link
                  className="text-base hover:text-gray-600 duration-300 max-md:text-white max-md:text-xl"
                  to={el.path}
                >
                  {el.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-x-4">
          <Link to="/cart">
            <ShoppingCart size={20} className="hover:text-gray-600 duration-300" />
          </Link>

          <Link to="/profile">
            <CircleUserRound size={20} className="hover:text-gray-600 duration-300" />
          </Link>
        </div>
      </Container>
    </header>
  );
};

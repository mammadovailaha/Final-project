import React from "react";
import type { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  buttonClassName?: string;
}
const MainButton: React.FC<Props> = ({ text, buttonClassName }) => {
  return <button 

 className={`${buttonClassName} rounded-4xl outline-none text-white text-xs md:text-sm hover:shadow-md  bg-[linear-gradient(to_right,_#606060,_#849561,_#eed690)]
    bg-[length:200%_200%]
    bg-left
    hover:bg-[linear-gradient(to_left,_#eed690,_#849561,_#606060)]
    hover:bg-right
    transition-all duration-700 ease-in-out `}>{text}</button>;
};

export default MainButton;

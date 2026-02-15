import {  type FC, type ReactNode } from "react";
import UseOnScreen from "./UseOnScreen";

interface Props{
    children:ReactNode;
}

const ScrollAnimation:FC<Props> = ({children}) => {
    const {ref, isVisible}=UseOnScreen(0.5);
  return (
    <div 
    ref={ref}
     className={`transition-opacity duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  )
}

export default ScrollAnimation

import { NavLink } from "react-router-dom";
import React from "react";

interface Props{
className:string;
path:string;
label:string;
icon: React.ReactNode;
}

const NavItem:React.FC<Props> = ({className,  path, label, icon}) => {
  return (
   <NavLink className={className} to={path}>
            <div
              className="w-full h-full bg-[#f7fcff] hover:bg-gradient-to-r hover:from-blue-200 hover:to-green-200 transition-all duration-700 ease-in-out  flex justify-start items-center gap-2 rounded-[2rem] group"
            >
              <span className="w-10 h-10 rounded-full bg-blue-200 group-hover:bg-transparent transition-all duration-700  ease-in-out flex justify-center items-center">
                {icon}
              </span>
              <span className="w-[78%] h-full bg-green-200 group-hover:bg-transparent rounded-[2rem] flex justify-center items-center transition-all ease-in-out duration-700">
                {label}
              </span>
            </div>
           </NavLink>
  )
}

export default NavItem;

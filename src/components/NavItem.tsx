import { NavLink } from "react-router-dom";
import React from "react";

interface Props {
  className?: string;
  path: string;
  label: string;
  icon: React.ReactNode;
}

const NavItem: React.FC<Props> = ({ className = "", path, label, icon }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `
        ${className} 
        w-[80%] h-full 
        flex justify-start items-center gap-2 rounded-4xl group 
        transition-all duration-500 ease-in-out
        ${
          isActive
            ? "bg-[linear-gradient(to_right,_#4b6043,_#f6e9d9)]"
            : "hover:bg-[linear-gradient(to_right,_#7b8e6a,_#f0e4cf)]"
        }
        `
      }
    >
      {({ isActive }) => (
        <div className="flex items-center gap-2 w-full">
          <span
            className={`w-8 h-8 rounded-full flex justify-center items-center transition-all duration-500 
              ${isActive ? "bg-transparent" : "bg-[#b8c6b3] group-hover:bg-transparent"}
            `}
          >
            {icon}
          </span>
          <span
            className={`w-[80%] h-10 rounded-[2rem] flex justify-center items-center transition-all duration-500 
              ${isActive ? "bg-transparent font-semibold" : "bg-[#f0e4cf] group-hover:bg-transparent"}
            `}
          >
            {label}
          </span>
        </div>
      )}
    </NavLink>
  );
};

export default NavItem;

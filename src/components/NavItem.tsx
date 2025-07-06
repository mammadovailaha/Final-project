import { CiHome } from "react-icons/ci";
import { PiBooks } from "react-icons/pi";
import { RiServiceLine } from "react-icons/ri";
import { CiPhone } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import React from "react";

const menuItems = [
  { icon: <CiHome />, label: "Əsas səhifə" , path:"/"},
  { icon: <PiBooks />, label: "Nəşirlərimiz",path:"/publications" },
  { icon: <RiServiceLine />, label: "Xidmətlər", path:"/allServices" },
  { icon: <CiPhone />, label: "Əlaqə", path:"/contact" },
];

interface Props{
className:string;
linkClassName:string;

}

const NavItem:React.FC<Props> = ({className, linkClassName}) => {
  return (
    <div className={className}>
       {menuItems.map((item, index) => (
           <NavLink className={linkClassName} to={item.path}>
            <div
              className="w-full h-full bg-[#f7fcff] hover:bg-gradient-to-r hover:from-blue-200 hover:to-green-200 transition-all duration-700 ease-in-out  flex justify-start items-center gap-2 rounded-[2rem] group"
              key={index}
            >
              <span className="w-10 h-10 rounded-full bg-blue-200 group-hover:bg-transparent transition-all duration-700  ease-in-out flex justify-center items-center">
                {item.icon}
              </span>
              <span className="w-[78%] h-full bg-green-200 group-hover:bg-transparent rounded-[2rem] flex justify-center items-center transition-all ease-in-out duration-700">
                {item.label}
              </span>
            </div>
           </NavLink>
          ))}
    </div>
  )
}

export default NavItem

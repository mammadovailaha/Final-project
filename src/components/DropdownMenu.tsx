import { useState, useEffect } from "react";
import {  NavLink, useLocation } from "react-router-dom";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

interface Props {
  title: string;
  items: { label: string; path: string }[];
}

export default function DropdownMenu({ title, items }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  // Ekran ölçüsünə görə davranış dəyişir
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = () => {
    if (!isDesktop) {
      setIsOpen((prev) => !prev);
    }
  };
const location = useLocation();

useEffect(() => {
  setIsOpen(false); // route dəyişəndə dropdown bağlansın
}, [location.pathname]);

  return (
    <li className="relative group">
      <NavLink
        onClick={toggleDropdown}
                to=""
                className="text-sm xl:text-base font-medium text-black flex justify-center items-center gap-0.5 md:leading-7  transition-all duration-500
                 hover:bg-[#c0d2b9] py-2.5 lg:px-0.5 xl:px-2 rounded-3xl"
      >
        {title}
        {/* İkon dəyişimi */}
        {isOpen || (!isOpen && isDesktop) ? (
          <RiArrowDropUpLine className={`text-2xl xl:text-[28px] ${!isDesktop ? "group-hover:hidden" : " group-hover:block"}`} />
        ) : (
          <RiArrowDropDownLine className={`text-2xl xl:text-[28px] ${!isDesktop ? "group-hover:block" : "group-hover:hidden"}`} />
        )}
      </NavLink>

      <ul
        className={`
          absolute top-full left-1/2 -translate-x-1/2 bg-gray-50 rounded shadow-md z-[999]
          min-w-[200px] min-h-[170px] flex flex-col justify-center items-center gap-1 font-[averta]
          transition-all duration-300 ease-in-out p-5
          ${isDesktop ? "hidden group-hover:flex" : isOpen ? "flex" : "hidden"}
        `}
      >
        {items.map((subItem) => (
          <li key={subItem.path} className="w-full">
            <NavLink
              to={subItem.path}
              className="block whitespace-nowrap text-black  hover:bg-gray-100 hover:rounded-xl text-sm p-2"
              onClick={() => setIsOpen(false)} // mobil klikdən sonra bağlansın
            >
              {subItem.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </li>
  );
}

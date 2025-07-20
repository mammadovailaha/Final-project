import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
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

  return (
    <li className="relative group">
      <NavLink
        onClick={toggleDropdown}
                to=""
                className="text-base font-medium text-black flex justify-center items-center md:leading-7  transition-all duration-500
                 hover:bg-[#c0d2b9] py-2.5 px-5 rounded-3xl"
      >
        {title}
        {/* İkon dəyişimi */}
        {isOpen || (!isOpen && isDesktop) ? (
          <RiArrowDropUpLine className={`text-[28px] ${!isDesktop ? "group-hover:hidden" : " group-hover:block"}`} />
        ) : (
          <RiArrowDropDownLine className={`text-[28px] ${!isDesktop ? "group-hover:block" : "group-hover:hidden"}`} />
        )}
      </NavLink>

      <ul
        className={`
          absolute top-full left-1/2 -translate-x-1/2 bg-gray-50 rounded shadow-md z-[999]
          min-w-[200px] min-h-[170px] flex flex-col justify-center items-center gap-1 font-[averta]
          transition-all duration-300 ease-in-out py-5 md:py-1   pl-5
          ${isDesktop ? "hidden group-hover:flex" : isOpen ? "flex" : "hidden"}
        `}
      >
        {items.map((subItem) => (
          <li key={subItem.path} className="w-full">
            <NavLink
              style={{ padding: "7px" }}
              to={subItem.path}
              className="block whitespace-nowrap text-black hover:text-base hover:bg-gray-100 hover:rounded-xl text-sm"
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

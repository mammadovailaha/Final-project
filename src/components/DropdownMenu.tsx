import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-1 text-black text-lg font-medium"
      >
        {title}
        {/* İkon dəyişimi */}
        {isOpen || (!isOpen && isDesktop) ? (
          <RiArrowDropUpLine className={`text-3xl ${!isDesktop ? "" : "hidden group-hover:block"}`} />
        ) : (
          <RiArrowDropDownLine className={`text-3xl ${!isDesktop ? "" : "group-hover:hidden"}`} />
        )}
      </button>

      <ul
        className={`
          absolute top-full left-1/2 -translate-x-1/2 bg-gray-50 rounded shadow-md z-[999]
          min-w-[200px] min-h-[170px] flex flex-col justify-center items-center gap-1 font-[averta]
          transition-all duration-300 ease-in-out
          ${isDesktop ? "hidden group-hover:flex" : isOpen ? "flex" : "hidden"}
        `}
      >
        {items.map((subItem) => (
          <li key={subItem.path} className="w-full">
            <Link
              style={{ padding: "7px" }}
              to={subItem.path}
              className="block whitespace-nowrap text-black hover:text-base hover:bg-gray-100 hover:rounded-xl text-sm"
              onClick={() => setIsOpen(false)} // mobil klikdən sonra bağlansın
            >
              {subItem.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

interface Props {
  title: string;
  items: { label: string; path: string }[];
}

export default function DropdownMenu({ title, items }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <li className="relative group lg:hover:cursor-pointer">
      <button
        onClick={toggleMenu}
        className="flex items-center gap-1 text-black text-lg font-medium"
        aria-expanded={isOpen}
      >
        {title} {isOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
      </button>

      <ul
        className={`
          absolute top-full left-1/2 -translate-x-1/2 bg-surface bg-transparent rounded shadow-md z-[999] min-w-[200px] min-h-[170px] flex flex-col justify-center items-center gap-1 lg:gap-2
          font-[averta] transition-all duration-300 ease-in-out
          ${isOpen ? "block" : "hidden"} 
          lg:group-hover:block
        `}
      >
        {items.map((subItem) => (
          <li key={subItem.path} className="w-full ">
            <Link
             style={{padding:"7px"}}
              to={subItem.path}
              className="block whitespace-nowrap text-black hover:text-base  hover:bg-gray-100 hover:rounded-xl text-sm"
              onClick={() => setIsOpen(false)}
            >
              {subItem.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

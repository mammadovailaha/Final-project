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
        className="flex items-center gap-1 text-white text-[15px]"
        aria-expanded={isOpen}
      >
        {title} {isOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
      </button>

      <ul
        className={`
          absolute left-0 mt-1 bg-white rounded shadow-md z-[999] min-w-[180px]
          font-[averta] transition-all duration-300 ease-in-out
          ${isOpen ? "block" : "hidden"} 
          lg:group-hover:block
        `}
      >
        {items.map((subItem) => (
          <li key={subItem.path}>
            <Link
              to={subItem.path}
              className="block whitespace-nowrap px-4 py-2 text-black hover:bg-gray-100 text-sm"
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

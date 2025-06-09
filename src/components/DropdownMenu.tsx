import { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

interface Props {
  title: string;
  items: { label: string; path: string }[];
}

export default function DropdownMenu({ title, items }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  // Dropdown menyunu açıb-bağlayan funksiya
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <li className="relative group lg:hover:cursor-pointer z-50">
      {/* Mobil üçün onClick, Desktop üçün hover */}
      <button
        onClick={toggleMenu}
        className="flex items-center gap-1 text-white text-[15px]"
        aria-expanded={isOpen}
      >
        {title} {isOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
      </button>

      {/* Menyu blokunun həm click (mobil), həm də hover (desktop) üçün göstərilməsi */}
      <ul
        className={`absolute left-0 bg-white shadow-md mt-1 rounded font-[averta] z-50 ${
          isOpen ? "block" : "hidden"
        } lg:group-hover:block`}
      >
        {items.map((subItem) => (
          <li key={subItem.path}>
            <Link
              to={subItem.path}
              className={`block whitespace-nowrap px-4 py-2 text-black hover:bg-gray-100     transition-all duration-300 ease-in-out origin-top transform
                    ${isOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-0 invisible"}

                `}
              onClick={() => setIsOpen(false)} // Menyudan sonra avtomatik bağlanır (mobil UX üçün vacibdir)
            >
              {subItem.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

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

  return (
    <li
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="relative"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-white text-[15px]"
        aria-expanded={isOpen}
      >
        {title} {isOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
      </button>

      {isOpen && (
       <ul className="absolute bg-white shadow-md mt-1 rounded font-[averta]">
  {items.map((subItem) => (
    <li key={subItem.path}>
      <Link 
     
      to={subItem.path}>{subItem.label}</Link>
    </li>
  ))}
</ul>
      )}
    </li>
  );
}

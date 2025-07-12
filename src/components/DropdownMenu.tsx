
import { Link } from "react-router-dom";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

interface Props {
  title: string;
  items: { label: string; path: string }[];
}

export default function DropdownMenu({ title, items }: Props) {


  return (
   <li className="relative group">
  <button
    className="flex items-center gap-1 text-black text-lg font-medium"
  >
    {title}
    <RiArrowDropDownLine className="text-3xl group-hover:hidden" />
    <RiArrowDropUpLine className="text-3xl hidden group-hover:block" />
  </button>

  <ul
    className="absolute top-full left-1/2 -translate-x-1/2 bg-gray-50 rounded shadow-md z-[999] min-w-[200px] min-h-[170px] flex flex-col justify-center items-center gap-1 font-[averta] transition-all duration-300 ease-in-out hidden group-hover:flex"
  >
    {items.map((subItem) => (
      <li key={subItem.path} className="w-full">
        <Link
          style={{ padding: "7px" }}
          to={subItem.path}
          className="block whitespace-nowrap text-black hover:text-base hover:bg-gray-100 hover:rounded-xl text-sm"
        >
          {subItem.label}
        </Link>
      </li>
    ))}
  </ul>
</li>

  );
}

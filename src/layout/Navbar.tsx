import DropdownMenu from "../components/DropdownMenu";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const XidmetlerItems = [
    { label: "Xidmət 1", path: "/xidmetler/xidmet1" },
    { label: "Xidmət 2", path: "/xidmetler/xidmet2" },
    { label: "Xidmət 3", path: "/xidmetler/xidmet3" },
  ];

  const AboutItems = [
    { label: "Nailliyyətlərimiz", path: "/about/achievements" },
    { label: "Struktur", path: "/about/structure" },
    { label: "Brendlərimiz", path: "/about/brands" },
    { label: "Məqsəd və dəyərlərimiz", path: "/about/ Mission-and-Values" },
    { label: "Tanıtım filmi", path: "/about/film" },
    { label: "Bloq", path: "/about/bloq" },
  ];
  const FilialItems = [
    { label: "Elmlər A", path: "/branches/elmler-a" },
    { label: "28 May", path: "/branches/28-may" },
    { label: "Nizami", path: "/branches/nizami" },
    { label: "Nəriman Nərimanov", path: "/branches/n-nermanov" },
    { label: "Gəncə", path: "/branches/gence" },
    { label: "Sumqayıt", path: "/branches/sumqait" },
    { label: "Elmlər B", path: "/branches/elmler-b" },
    { label: "Göyçay", path: "/branches/goycay" },
    { label: "Xırdalan", path: "/branches/xirdalan" },
  ];

  return (
    <div className="w-full h-18 lg:h-22 bg-[#015715] flex justify-center overflow-visible absolute z-40 " >
      <div className="w-[90%] h-full flex justify-between items-center lg:overflow-hiddenr">
        <div className="flex flex-col gap-1"> 
          <h1 className="text-white font-[averta] text-[22px] lg:text-[45px] tracking-normal leading-5 lg:leading-9">
            EDU COMPANY
          </h1>
          <span className="text-white font-[averta] text-[9px] lg:text-[12px] tracking-normal]">
            Education & Consulting Center
          </span>
        </div>
        <div className="lg:hidden  flex justify-end relative z-60">
          {/* İkona kliklənəndə menyu açılıb bağlanır */}
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
          </button>
        </div>
        <div
          className={`w-full h-full absolute z-50 lg:top-[40%] lg:left-[40%] left-0  lg:w-auto  transition-all duration-300 ease-in-out transform origin-top lg:overflow-hidden 
  ${
    isOpen
      ? "opacity-100 scale-y-100 pointer-events-auto"
      : "opacity-0 scale-y-0 pointer-events-none"
  } lg:opacity-100 lg:scale-y-100 lg:pointer-events-auto lg:block`}>
          <ul className="flex flex-col lg:flex-row lg:justify-end gap-3 lg:gap-7  bg-[#015715]   lg:bg-transparent">
            <DropdownMenu title="Haqqımızda" items={AboutItems} />
            <li>
              <Link
                to="/career"
                className="font-[averta] text-[15px] text-white "
              >
                Kariyera
              </Link>
            </li>
            <DropdownMenu title="Xidmətlər" items={XidmetlerItems} />
            <li>
              <Link
                to="/publications"
                className="font-[averta] text-[15px] text-white"
              >
                Nəşrlər
              </Link>
            </li>
            <li>
              <Link
                to="/study-abroad"
                className="font-[averta] text-[15px] text-white"
              >
                Xaricdə təhsil
              </Link>
            </li>
            <DropdownMenu title="Filiallar" items={FilialItems} />
            <li>
              <Link
                to="/contact"
                className="font-[averta] text-[15px] text-white "
              >
                Əlaqə
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
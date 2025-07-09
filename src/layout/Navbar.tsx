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
    { label: " FAQ", path: "/about/faq" },
  ];
  const FilialItems = [
    { label: "Elmlər A", path: "/contact/branches/:id" },
    { label: "28 May", path: "/contact/branches/:id" },
    { label: "Nizami", path: "/contact/branches/:id" },
    { label: "Nəriman Nərimanov", path: "/contact/branches/:id" },
    { label: "Gəncə", path: "/contact/branches/:id" },
    { label: "Sumqayıt", path: "/contact/branches/:id" },
    { label: "Elmlər B", path: "/contact/branches/:id" },
    { label: "Göyçay", path: "/contact/branches/:id" },
    { label: "Xırdalan", path: "/contact/branches/:id" },
    { label: "Xalqlar", path: "/contact/branches/:id" },
  ];

  return (
    <div className="w-full h-18 lg:h-22 bg-background shadow-2xl flex justify-center absolute z-[1000] overflow-visible" >
      <div className="w-[90%] h-full flex justify-between items-center">
    <Link to={"/"}>
        <div className="flex justify-center items-center gap-2"> 
            <div className="w-16 h-14">
            <img
              className="w-full h-full object-cover"
              src="https://www.educompany.az/assets/front/image/logo/logo_c.webp"
              alt="edu compony logo"
            />
          </div>
         <div className="flex flex-col gap-1">
           <h1 className="text-[#4b6043] text-[22px] lg:text-[45px] tracking-normal leading-5 lg:leading-9 font-bold">
            EDU COMPANY
          </h1>
          <span className="text-black text-[9px] lg:text-base tracking-normal font-medium">
            Education & Consulting Center
          </span>
         </div>
        </div>
    </Link>
        <div className="lg:hidden  flex justify-end relative z-90">
          {/* İkona kliklənəndə menyu açılıb bağlanır */}
          <button onClick={() => setIsOpen(!isOpen)} className="text-black">
            {isOpen ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
          </button>
        </div>
        <div
          className={`w-full h-full absolute z-50 lg:top-[40%] lg:left-[40%] left-0  lg:w-auto  transition-all duration-300 ease-in-out transform origin-top 
  ${
    isOpen
      ? "opacity-100 scale-y-100 pointer-events-auto"
      : "opacity-0 scale-y-0 pointer-events-none"
  } lg:opacity-100 lg:scale-y-100 lg:pointer-events-auto lg:block`}>
          <ul className="flex flex-col lg:flex-row lg:justify-end gap-3 lg:gap-7  bg-[#ffff]  lg:bg-transparent">
            <DropdownMenu title="Haqqımızda" items={AboutItems} />
            <li>
              <Link
                to="/vacancies"
                className="text-lg font-medium text-black "
              >
                Kariyera
              </Link>
            </li>
            <DropdownMenu title="Xidmətlər" items={XidmetlerItems} />
            <li>
              <Link
                to="/publications"
                className="text-lg font-medium text-black"
              >
                Nəşrlər
              </Link>
            </li>
            <li>
              <Link
                to="/study-abroad"
                className="text-lg font-medium text-black"
              >
                Xaricdə təhsil
              </Link>
            </li>
            <DropdownMenu title="Filiallar" items={FilialItems} />
            <li>
              <Link
                to="/contact"
                className=" text-lg font-medium text-black "
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
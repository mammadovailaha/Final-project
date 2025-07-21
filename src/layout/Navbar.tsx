import DropdownMenu from "../components/DropdownMenu";
import { Link, NavLink } from "react-router-dom";
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
    <div className="w-full h-18 lg:h-22 bg-background shadow-lg flex justify-center absolute z-[1000] overflow-visible bg-white" >
      <div className ="w-full lg:w-[90%] h-full flex justify-center lg:justify-between items-center  bg-white">
    <Link to={"/"}>
        <div className="lg:flex justify-center items-center gap-2 hidden " > 
            <div className="w-10 lg:w-16 h-8 lg:h-14">
            <img
              className="w-full h-full object-cover"
              src="https://www.educompany.az/assets/front/image/logo/logo_c.webp"
              alt="edu compony logo"
            />
          </div>
         <div className="flex flex-col gap-1">
           <h1 className="text-[#4b6043] text-[20px] lg:text-[40px] tracking-normal leading-5 lg:leading-9 font-bold">
            EDU COMPANY
          </h1>
          <span className="text-black text-[9px] lg:text-base tracking-normal font-medium">
            Education & Consulting Center
          </span>
         </div>
        </div>
    </Link>
        <div className="w-[95%] lg:hidden  flex justify-between relative z-90">
           <div className="flex flex-col gap-1 lg:hidden">
           <h1 className="text-[#4b6043] text-[20px] lg:text-[40px] tracking-normal leading-5 lg:leading-9 font-bold">
            EDU COMPANY
          </h1>
          <span className="text-black text-[9px] lg:text-base tracking-normal font-medium">
            Education & Consulting Center
          </span>
         </div>
          {/* İkona kliklənəndə menyu açılıb bağlanır */}
          <button onClick={() => setIsOpen(!isOpen)} className="text-black">
            {isOpen ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
          </button>
        </div>
        <div
          className={`w-full h-full absolute z-50 top-[300%] lg:top-[30%] lg:left-[40%] left-0  lg:w-auto  transition-all duration-300 ease-in-out transform origin-top flex justify-center items-center
  ${
    isOpen
      ? "opacity-100 scale-y-100 pointer-events-auto"
      : "opacity-0 scale-y-0 pointer-events-none"
  } lg:opacity-100 lg:scale-y-100 lg:pointer-events-auto lg:block`}>

          <ul className="w-full flex flex-col lg:flex-row lg:justify-end gap-3 lg:gap-2  bg-[#ffff]  lg:bg-transparent lg:h-14  ">
            <DropdownMenu title="Haqqımızda" items={AboutItems} />
            <li>
              <NavLink
                to="/career"
                className={({isActive})=>`text-base font-medium text-black flex justify-center items-center md:leading-7  transition-all duration-500
                ${isActive? "bg-[#4b6043] text-white py-2.5 px-5 rounded-3xl ": "hover:bg-[#c0d2b9] py-2.5 px-5 rounded-3xl"}`}
              >
                Kariyera
              </NavLink>
            </li>
            <DropdownMenu title="Xidmətlər" items={XidmetlerItems} />
            <li>
              <NavLink
                to="/publications"
                className={({isActive})=>`text-base font-medium text-black flex justify-center items-center md:leading-7  transition-all duration-500
                ${isActive? "bg-[#4b6043] text-white py-2.5 px-5 rounded-3xl": "hover:bg-[#c0d2b9] py-2.5 px-5 rounded-3xl"}`}
              >
                Nəşrlər
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/study-abroad"
                className={({isActive})=>`text-base font-medium text-black flex justify-center items-center md:leading-7  transition-all duration-500
                ${isActive? "bg-[#4b6043] text-white py-2.5 px-5 rounded-3xl": "hover:bg-[#c0d2b9] py-2.5 px-5 rounded-3xl"}`}
              >
                Xaricdə təhsil
              </NavLink>
            </li>
            <DropdownMenu title="Filiallar" items={FilialItems} />
            <li>
              <NavLink
                to="/contact"
                className={({isActive})=>`text-base font-medium text-black flex justify-center items-center md:leading-7  transition-all duration-500
                ${isActive? "bg-[#4b6043] text-white py-2.5 px-6 rounded-3xl": "hover:bg-[#c0d2b9] py-2.5 px-6 rounded-3xl"}`}
              >
                Əlaqə
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
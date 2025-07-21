import { useState } from "react";
import { Link } from "react-router-dom";
import SosialMedia from "../components/SosialMedia";

import QuickContact from "../pages/Auth/QuickContact";
import Modal from "../components/Modals/Modal";

const HeaderInfo = [
  { title: "Bilet al", path: "/ticket" },
  { title: "Müraciət et", path: "/apply" },
  { title: "Imtahan nəticələri", path: "/exam-results" },
];

export default function Header() {
   const [isModalOpen, setIsModalOpen]=useState(false);
    const openModal=()=>setIsModalOpen(true);
    const closeModal=()=>setIsModalOpen(false);
  return (
    <div className="w-full h-8 md:h-14 bg-background shadow-lg flex justify-center lg:justify-between items-center px-1 lg:px-4">
      <div className="w-[95%] h-full flex justify-around items-center gap-2 ">
        <button className="outline-none border-none " onClick={openModal} >
          <p className="text-[6px]  leading-1.5 md:leading-3 lg:leading-4 md:text-xs  lg:text-base text-black " >
            Sınaq dərs istə
          </p>
        </button>
        <div className="flex flex-col items-center gap-0.2">
          <span className="text-[6px] leading-1.5 md:leading-3 lg:leading-4 md:text-xs lg:text-base  text-black ">
            09:00-21:00
          </span>
          <span className="text-[6px]  leading-1.5 md:leading-3 lg:leading-4 md:text-xs lg:text-base text-black ">
            iş saatları
          </span>
        </div>
        <div className="flex  items-center gap-0.5 md:gap-1.5">
          <ul className="flex justify-center items-center gap-1 md:gap-1.5">
            {HeaderInfo.map((item, index) => (
              <li
                key={index}
                className={`flex justify-center items-center w-11 md:w-25 lg:w-40 h-4 md:h-6 lg:h-8 lg:px-1`}
              >
                <Link
                  to={item.path}
                  className={`text-center flex justify-center items-center h-full text-[8px] md:text-sm lg:text-base leading-2 md:leading-4 text-black rounded-sm md:rounded-lg  ${
                    index === 0 ? "bg-[linear-gradient(to_right,_#4b6043,_#f6e9d9)] bg-[length:200%_100%] bg-[position:left] shadow hover:bg-[position:right] transition-[background-position] duration-1000 ease-in-out text-white w-[65%]" : ""
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
         <SosialMedia/>
        </div>
      </div>
  <Modal title="Konsultasiyaya yazil" isOpen={isModalOpen} onClose={closeModal} >
<QuickContact title=""/>
  </Modal>
    </div>
  );
}

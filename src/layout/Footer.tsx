import { FaFacebook } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";

const branches = [
  {
    name: "Elmlər A filialı",
    phone1: "+994 12 539 40 23",
    phone2: "+994 77 412 12 02",
  },
  {
    name: "Nizami filialı",
    phone1: "+994 77 567 12 02",
    phone2: "+994 77 478 12 02",
  },
  {
    name: "28 May filialı",
    phone1: "+994 70 876 78 05",
    phone2: "+994 70 438 12 02",
  },
  {
    name: "N.Nərimanov filialı",
    phone1: "+994 12 564 93 67",
    phone2: "+994 70 844 12 02",
  },
  {
    name: "Neftçilər filialı",
    phone1: "+994 77 485 12 02",
    phone2: "+994 77 410 12 02",
  },
  {
    name: "Xalqlar filialı",
    phone1: "+994 77 432 12 02",
    phone2: "+994 77 412 02 71",
  },
  {
    name: "Sumqayıt filialı",
    phone1: "+994 77 677 12 02",
    phone2: "+994 77 395 12 02",
  },
  {
    name: "Gəncə filialı",
    phone1: "+994 70 565 12 02",
    phone2: "+994 77 556 05 02",
  },
  {
    name: "Göyçay filialı",
    phone1: "+994 20 274 61 42",
    phone2: "+994 51 444 10 44",
  },
  {
    name: "Xırdalan filialı",
    phone1: "+994 77 407 12 02",
    phone2: "+994 77 244 12 02",
  },
  {
    name: "Elmlər B filialı",
    phone1: "+994 77 588 53 56",
    phone2: "+994 77 424 12 02",
  },
];

export default function Footer() {
  return (
    <div>
      <div className="w-full min-h-[300px] flex flex-col items-center gap-5 bg-[#F7FCFF] ">
        <div className="flex flex-col items-center gap-3.5">
          <div className="w-40 h-32">
            <img
              className="w-full h-full object-cover"
              src="https://www.educompany.az/assets/front/image/logo/logo_c.webp"
              alt="edu compony logo"
            />
          </div>
          <div className="flex justify-center gap-1">
            <FaFacebook className="text-[#1EB2A6] text-[40px]" />
            <div className="w-10 h-10 bg-[#1EB2A6] flex justify-center items-center rounded-[100%] text-2xl">
              <TfiYoutube className="text-white" />
            </div>
            <div className="w-10 h-10 bg-[#1EB2A6] flex justify-center items-center rounded-[100%] text-2xl">
              <FaInstagram className="text-white text-2xl" />
            </div>
          </div>
          <div className="flex justify-center items-center gap-1.5">
            <button className="w-24 h-7 rounded-[7px] bg-[#0D6EFD] border-none outline-none text-white flex justify-center items-center gap-1">
              <FaThumbsUp className="text-[16px] text-white" />
              Bəyən
            </button>
            <button className="w-24 h-7 rounded-[7px] bg-[#0D6EFD] border-none outline-none text-white flex justify-center items-center gap-1">
              Paylaş
            </button>
          </div>
        </div>
        <div className="flex flex-col w-[95%]  gap-3.5">
          <h3 className="text-lg tracking-normal font-medium">Filiallarımız</h3>
          <div className="flex justify-center">
            <div className="md:max-w-[70%] flex justify-center items-center  gap-10 flex-wrap ">
              {branches.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-2.5 w-43 group"
                >
                  <p className="flex justify-center items-center gap-1 text-[16px] tracking-normal font-medium transition-all duration-500 group-hover:text-[#22caba]">
                    <FaBuildingColumns className="text-lg" />
                    {item.name}
                  </p>
                  <span className="text-[12px] font-[averta] tracking-normal font-normal transition-all duration-500 group-hover:text-[#22caba]">
                    {item.phone1}
                  </span>
                  <span className="text-[12px] font-[averta] tracking-normal font-normal transition-all duration-500 group-hover:text-[#22caba]">
                    {item.phone2}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-24 flex justify-center items-center bg-[#008080]">
        <div className="w-[96%] flex flex-col md:flex-row md:justify-around">
          <div className="flex justify-start">
            <p className="text-white text-[16px] font-[averta]">
              Məxfilik Siyasəti
            </p>
          </div>
          <div className="flex justify-center">
            <p className="text-white text-[16px] font-[averta]">
              Copyright © All rights reserved | educompany.az
            </p>
          </div>
          <div className="flex justify-end">
            <p className="text-white text-[16px] font-[averta]">Əlaqə</p>
          </div>
        </div>
      </div>
    </div>
  );
}

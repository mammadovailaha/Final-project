
import { FaThumbsUp } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import SosialMedia from "../components/SosialMedia";

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
    <div style={{paddingTop:"40px"}} className="w-full min-h-[350px]">
      <div className="w-full pt-10 flex flex-col  justify-center  items-center gap-5 bg-white ">
        <div className="flex flex-col items-center justify-center gap-3.5 p-10">
          <div className="w-40 h-32">
            <img
              className="w-full h-full object-cover"
              src="https://www.educompany.az/assets/front/image/logo/logo_c.webp"
              alt="edu compony logo"
            />
          </div>
          <div className="">
            <SosialMedia />
          </div>
          <div className="flex justify-center items-center gap-1.5">
            <button className="w-24 h-7 rounded-[7px] shadow-lg border-none outline-none text-black flex justify-center items-center gap-1">
              <FaThumbsUp className="text-[16px] text-[#4b6043]" />
              Bəyən
            </button>
            <button className="w-24 h-7 rounded-[7px] shadow-lg  border-none outline-none text-black flex justify-center items-center gap-1">
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
                  <p className="flex justify-center items-center gap-1 text-base tracking-normal font-medium ">
                    <FaBuildingColumns className="text-lg" />
                    {item.name}
                  </p>
                  <span className="text-xs font-[averta] tracking-normal font-normal ">
                    {item.phone1}
                  </span>
                  <span className="text-xs font-[averta] tracking-normal font-normal">
                    {item.phone2}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div  className="w-full h-20 flex justify-center items-center bg-gray-100">
        <div className="w-[96%] flex flex-col md:flex-row md:justify-around">
          <div className="flex justify-start">
            <p className="text-black text-base font-[averta]">
              Məxfilik Siyasəti
            </p>
          </div>
          <div className="flex justify-center">
            <p className="text-black text-base font-[averta]">
              Copyright © All rights reserved | educompany.az
            </p>
          </div>
          <div className="flex justify-end">
            <p className="text-black text-base font-[averta]">Əlaqə</p>
          </div>
        </div>
      </div>
    </div>
  );
}

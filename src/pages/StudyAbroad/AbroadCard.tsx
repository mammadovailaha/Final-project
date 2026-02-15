import type { FC } from "react";
import { IoArrowRedoSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
interface Props {
  id:number;
  imgUrl: string;
  country: string;
  onClick:()=>void;
}
const AbroadCard: FC<Props> = ({ imgUrl, country , id, onClick}) => {

  return (
    <Link to={`/study-abroad/country-detail/${id}`}>
      <div className="w-60 h-70 shadow rounded-lg flex flex-col justify-start items-center gap-3 group">
        <div className="w-full h-[80%]  relative overflow-hidden  transition-all duration-500 rounded-md">
          <img
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 "
            src={imgUrl}
            alt="olke sekili"
          />
          <div className="absolute inset-0 group-hover:bg-[#0000005d] z-0 rounded-xl transition-all duration-500  " />

          <button
            className="group/button absolute outline-none border-none z-10 w-40 h-20 opacity-0 group-hover:opacity-100 top-[40%] left-[18%] flex  justify-center items-center"
            onClick={onClick}
          >
            <span className=" relative w-30 h-10 bg-white group-hover/button:bg-[#849561] group-hover/button:text-white text-[#849561] rotate-345 opacity-0 group-hover:opacity-100 rounded-4xl flex justify-center items-center z-10 text-lg">
              Ətraflı
            </span>
            <span className="w-10 h-10 bg-[#849561] group-hover/button:bg-white rounded-full flex justify-center items-center right-[5%] z-20 absolute">
              <IoArrowRedoSharp className="text-3xl group-hover/button:text-[#849561] text-white " />
            </span>
          </button>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <p className="text-center text-sm md:text-base font-bold">
            {country}
          </p>
          <div
            className="w-[80%] h-[3px] bg-[linear-gradient(to_right,_#606060,_#849561,_#eed690)]
    bg-[length:200%_200%]
    bg-left
    group-hover:bg-[linear-gradient(to_left,_#eed690,_#849561,_#606060)]
    group-hover:bg-right
    transition-all duration-500 ease-in-out"
          />
        </div>
      </div>
    </Link>
  );
};

export default AbroadCard;

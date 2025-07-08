import React from "react";
import { LuCalendarCheck2 } from "react-icons/lu";
import { LuCalendarDays } from "react-icons/lu";
import MoreInfoButton from "../../components/MoreInfoButton";


interface Props{
    title:string;
    postedDate:string;
    deadline:string;
    onClick: () => void | Promise<void>;
}

const VacanciesItem:React.FC<Props> = ({ title, postedDate, deadline, onClick }) => {

 

  return (
    <div style={{padding:"20px"}} className="w-[95%] lg:w-[75%] h-24 flex flex-col justify-center items-start gap-2 bg-blue-200 rounded-4xl" >
      <h2 className="text-sm md:text-lg leading-4  text-black">{title}</h2>
      <div className="flex justify-around items-center gap-2 md:gap-4">
        <p className="flex justify-center items-center gap-1 md:gap-2">
          <LuCalendarCheck2 className="text-[16px] text-green-800" /> <span className="text-[8px] md:text-sm font-[averta] leading-2 md:leading-3.5"><b>Elanın yerləşdirilmə tarixi: </b>{postedDate}</span>
        </p>
        <p className="flex justify-center items-center gap-2">
          <LuCalendarDays  className="text-[16px] text-green-800"  /><span className="text-[8px] md:text-sm font-[averta] leading-2 md:leading-3.5"><b>Son müraciət tarixi:</b> {deadline}</span>
        </p>
        <MoreInfoButton onClick={onClick} text="Daha ətraflı" className="w-20 md:w-24 h-6 md:h-9 outline-none  text-white text-xs  md:text-sm rounded-lg bg-[linear-gradient(to_right,_#22CABA,_#015715)] bg-[length:200%_100%] bg-[position:left] hover:bg-[position:right] transition-[background-position] duration-1000 ease-in-out"/>
      </div>
    </div>
  );
};

export default VacanciesItem;

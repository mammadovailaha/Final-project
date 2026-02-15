import React from 'react'
import MainButton from '../../components/Buttons/MainButton';
import { LuClock } from "react-icons/lu";
import { LuCalendarDays } from "react-icons/lu";
import { PiChalkboardTeacherDuotone } from "react-icons/pi";

interface TicketCardProps{
    examName:string,
    date:string,
    examType:string,
    examTime:string,
    onClick?:()=>void
}

const TicketCard:React.FC<TicketCardProps> = ({examName,date, examType, examTime, onClick}) => {
  return (
    <div className='w-52 h-58 shadow-xl rounded-xl bg-white/56 backdrop-blur-md border border-white/50 p-4 text-sm text-black flex flex-col justify-center items-center gap-1.5 md:gap-2.5 '>
      <h2 className='text-base md:text-xl text-[#465133] font-medium text-center'>{examName}</h2>
     <div className='w-[75%] flex flex-col justify-center items-start gap-2'>
         <span className='text-sm text-white hover:text-[#465133] group flex justify-center items-center gap-1.5 transition-all duration-500'><LuCalendarDays className='text-base text-white  group-hover:text-[#465133] transition-all duration-500' />{date}</span>
      <p  className='text-sm text-white hover:text-[#465133] group flex justify-center items-center gap-1.5 transition-all duration-500'><PiChalkboardTeacherDuotone className="text-base text-white group-hover:text-[#465133] transition-all duration-500" />{examType}</p>
      <p  className='text-sm text-white hover:text-[#465133] group flex justify-center items-center gap-1.5 transition-all duration-500'><LuClock className="text-base text-white group-hover:text-[#465133] transition-all duration-500" />{examTime}</p>
     </div>
      <MainButton 
      onClick={onClick}
      buttonClassName='w-40 h-9'
      text='Sifariş et'/>
    </div>
  )
}

export default TicketCard

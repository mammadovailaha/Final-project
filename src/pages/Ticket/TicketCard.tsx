import React from 'react'
import MainButton from '../../components/MainButton';
import { LuClock } from "react-icons/lu";
import { LuCalendarDays } from "react-icons/lu";
import { PiChalkboardTeacherDuotone } from "react-icons/pi";

interface TicketCardProps{
    examName:string,
    date:string,
    examType:string,
    examTime:string,
}

const TicketCard:React.FC<TicketCardProps> = ({examName,date, examType, examTime}) => {
  return (
    <div style={{padding:"5px"}} className='w-52 h-58 shadow-xl rounded-xl bg-white/56 backdrop-blur-md border border-white/50 p-4 text-sm text-black flex flex-col justify-center items-center gap-1.5 md:gap-2.5'>
      <h2 className='text-base md:text-xl text-[#465133] font-medium text-center'>{examName}</h2>
     <div className='w-[75%] flex flex-col justify-center items-start gap-2'>
         <span className='text-sm text-white flex justify-center items-center gap-1.5'><LuCalendarDays className='text-base text-white' />{date}</span>
      <p  className='text-sm text-white flex justify-center items-center gap-1.5'><PiChalkboardTeacherDuotone className="text-base text-white" />{examType}</p>
      <p  className='text-sm text-white flex justify-center items-center gap-1.5'><LuClock />{examTime}</p>
     </div>
      <MainButton 
      buttonClassName='w-40 h-9'
      text='Sifariş et'/>
    </div>
  )
}

export default TicketCard

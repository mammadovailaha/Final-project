import React from 'react'
import MoreInfoButton from '../Buttons/MoreInfoButton';

interface Props{
    src:string;
    alt:string;
    key:number;
    text:string;
}

const BloqCard:React.FC<Props> = ({src, alt, key, text}) => {
  return (
    <div className='w-94 h-45 md:w-125 md:h-60 flex justify-center items-center rounded-tl-[80px] md:rounded-tl-[100px] rounded-br-[80px] md:rounded-br-[100px] rounded-tr-[80px]   md:rounded-tr-[100px]  overflow-hidden bg-[#f3f2eb] shadow-xl hover:shadow-2xl transition-shadow duration-300 group '>
      <div className=' w-36 md:w-60 h-33 md:h-45 rounded-tl-[100px] rounded-bl-[5px] rounded-br-[100px] rounded-tr-[100px] overflow-hidden  ' key={key}>
        <img className='w-full h-full object-center rounded-tl-[100px] rounded-bl-[5px] rounded-br-[100px] rounded-tr-[100px] hover:scale-110 transition-all duration-700' src={src} alt={alt} />
        </div>
      <div className='w-55 md:w-70 h-full flex flex-col justify-center items-center gap-2 md:gap-3.5 left-40'>
        <p className='text-lg md:text-2xl text-black text-wrap text-center'>{text}</p>
       <MoreInfoButton text='Daha ətraflı' className='w-20 md:w-26 h-6 md:h-9 outline-none border border-black  text-black text-sm  md:text-lg rounded-[5px] hover:text-[##4b6043] transition-all duration-500'/>
       </div>
    </div>
  )
}

export default BloqCard

import React from 'react'

interface Props{
    src:string;
    alt:string;
    key:number;
    text:string;
}

const BloqCard:React.FC<Props> = ({src, alt, key, text}) => {
  return (
    <div className='w-94 h-40 md:w-120 md:h-50 flex justify-center items-center'>
      <div className='w-47 md:w-67 h-full bg-amber-50' key={key}><img className='w-full h-full object-contain' src={src} alt={alt} /></div>
      <div className='w-55 md:w-70 h-full bg-[#22caba] flex flex-col justify-center items-center gap-2 md:gap-3.5'>
        <p className='text-lg md:text-2xl text-white text-wrap text-center'>{text}</p>
       <button className='w-20 md:w-26 h-6 md:h-9 outline-none border border-white  text-white text-sm  md:text-lg rounded-[5px] hover:bg-white hover:text-[#22caba] transition-all duration-500'>Daha ətraflı</button>
       </div>
    </div>
  )
}

export default BloqCard

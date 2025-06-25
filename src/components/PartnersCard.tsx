import React from 'react'


interface Props{
    src:string;
    alt:string;
    key:number;
}
const PartnersCard:React.FC<Props> = ({src, alt, key}) => {
  return (
    <div
    className='flex justify-center items-center w-30 h-16 md:w-48 md:h-22 border-r border-gray-300' 
     key={key}>
      <img
      className='w-[95%] h-[90%] object-cover filter grayscale hover:grayscale-0 transition duration-300'
      src={src} alt={alt} />
    </div>
  )
}

export default PartnersCard

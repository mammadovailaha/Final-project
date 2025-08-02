import React from 'react'


interface Props{
    src:string;
    alt:string;
    key:number;
}
const PartnersCard:React.FC<Props> = ({src, alt, key}) => {
  return (
    <div
    className='flex justify-center items-center w-26 h-18 md:w-62 md:h-35 rounded-lg  p-6 md:p-4 mx-2 md:mx-5' 
     key={key}>
      <img
      className='w-[100%] h-[90%] object-cover  transition duration-300'
      src={src} alt={alt} />
    </div>
  )
}

export default PartnersCard

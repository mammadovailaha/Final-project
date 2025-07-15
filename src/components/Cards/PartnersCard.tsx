import React from 'react'


interface Props{
    src:string;
    alt:string;
    key:number;
}
const PartnersCard:React.FC<Props> = ({src, alt, key}) => {
  return (
    <div
    className='flex justify-center items-center w-30 h-16 md:w-65 md:h-35 rounded-lg shadow-lg' 
     key={key}>
      <img
      className='w-[95%] h-[90%] object-cover  transition duration-300'
      src={src} alt={alt} />
    </div>
  )
}

export default PartnersCard

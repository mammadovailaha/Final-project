
import React from 'react'

interface Props {
    key:number;
    src:string;
    alt:string;
}
const Card:React.FC<Props> = ({key,src,alt}) => {
  return (
      <div className="lg:w-85 lg:h-50 w-54 h-28 p-2  cursor-pointer ">     
             <img
             className="w-full h-full object-cover"
              key={key}
              src={src} 
              alt={alt} />

      </div>
  )
}

export default Card

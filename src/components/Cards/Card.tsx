
import React from 'react'

interface Props {
    key:number;
    src:string;
    alt:string;
}
const Card:React.FC<Props> = ({key,src,alt}) => {
  return (
      <div className="lg:w-85 lg:h-50 w-54 h-28 cursor-pointer rounded-lg shadow">     
             <div style={{padding:'10px'}} className=' bg-gray-100 rounded-lg overflow-hidden'>
              <img 
             className="w-full h-full object-cover rounded-lg
              hover:scale-110 transition-all duration-500"
              key={key}
              src={src} 
              alt={alt} />

             </div>
      </div>
  )
}

export default Card

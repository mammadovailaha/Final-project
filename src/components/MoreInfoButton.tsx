import React from 'react'


interface Props{
    className:string;
    text:string;
}
const MoreInfoButton:React.FC<Props> = ({className, text}) => {
  return (
    <div>
      <button className={className}>{text}</button>
    </div>
  )
}

export default MoreInfoButton

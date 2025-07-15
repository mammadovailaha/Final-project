import React from 'react'


interface Props{
    className:string;
    text:string;
    onClick?: () => void;
}
const MoreInfoButton:React.FC<Props> = ({className, text, onClick}) => {
  return (
    <div>
      <button className={className} onClick={onClick}>
        {text}
      </button>
    </div>
  )
}

export default MoreInfoButton

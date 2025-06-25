import React from 'react'


interface Props{
    className:string;
}
const MoreInfoButton:React.FC<Props> = ({className}) => {
  return (
    <div>
      <button className={className}>Daha ətraflı</button>
    </div>
  )
}

export default MoreInfoButton

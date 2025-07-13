import React from 'react'
import NavItem from './NavItem'

interface Props{
    navItem:any;
    item:object;
    index:number;
    className:string;
}

const NavItemComponent:React.FC<Props> = ({navItem, className}) => {
  return (
 <div className={`flex flex-col justify-center items-center gap-2 ${className}`}>
          {navItem.map((item, index) => (
            <NavItem
              key={index}
              className="w-[70%] md:w-[70%] h-12"
              path={item.path}
              icon={item.icon}
              label={item.label}
            />
          ))}
        </div>
  )
}

export default NavItemComponent

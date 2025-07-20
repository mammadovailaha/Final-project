import React, { type JSX } from 'react'
import NavItem from './NavItem'

interface Props{
  navItem: {
    id: number;
    icon: JSX.Element;
    label: string;
    path: string;
  }[];
    className:string;
}

const NavItemComponent:React.FC<Props> = ({navItem, className}) => {
  return (
 <div className={`flex flex-col justify-center items-center gap-2 ${className}`}>
          {navItem.map((item) => (
            <NavItem
              key={item.id}
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

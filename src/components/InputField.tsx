import React from 'react'

interface InputFieldProps{
    htmlFor:string;
    label:string;
    id:string;
    name:string;
    type:string;
     onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value:string;
}

const InputField:React.FC<InputFieldProps> = ({htmlFor,label, id, name, type, onChange, value}) => {
  return (
    <>
       <label htmlFor={htmlFor} className="text-xs md:text-sm font-[averta] text-[#1B1B1B]">
         {label}
          </label>
          <input
            id={id}
            name={name}
            type={type}
            onChange={onChange}
            value={value}
            className="w-full h-9 pl-4 border rounded outline-none  text-black text-sm  border-green-700 transition-shadow duration-300 hover:shadow-[-5px_6px_31px_-5px_rgba(17,159,86,0.31)] "
          />
    </>
  )
}

export default InputField

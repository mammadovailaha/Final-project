import React from 'react'

interface TextareaFieldProps{
    htmlFor:string;
    label:string;
    name:string;
    id:string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    value:string;
}

const TextareaField:React.FC<TextareaFieldProps> = ({htmlFor, label, name, id, onChange, value}) => {
  return (
    <>
       <label htmlFor={htmlFor} className="text-xs md:text-sm font-[averta] text-[#1B1B1B]">
         {label}
          </label>
          <textarea
            name={name}
            id={id}
            className="w-full   border rounded outline-none  pl-4  border-green-700  transition-shadow duration-300 hover:shadow-[-5px_6px_31px_-5px_rgba(17,159,86,0.31)] "
            onChange={onChange}
            value={value}
          />
    </>
  )
}

export default TextareaField

import { Field, ErrorMessage } from "formik";
import React from "react";

interface FormikInputProps {
  name: string;
  type?: "text" | "email" | "password" | "textarea" | "select";
  placeholder?: string;
  options?: { value: string; label: string }[];
  inputClassName?:string;
}
const baseClassName = "w-[90%] lg:w-[70%] h-10 md:h-12 rounded-4xl border border-[#4f813b] hover:shadow-md outline-none   placeholder:text-xs md:placeholder:text-sm placeholder:text-gray-500";
const FormikInput: React.FC<FormikInputProps> = ({
  name,
  type,
  placeholder,
  options,
  inputClassName
}) => {
  return (
    <div className="w-full flex flex-col justify-start items-center gap-0.5">
      {type === "textarea" ? (

     <Field
          as="textarea"
          name={name}
          placeholder={placeholder}
          className={`${baseClassName} min-h-[100px] ${inputClassName} pl-4 pt-1`}
        />
      ) : type === "select" ? (
        <Field 
        name={name}
         as="select"
          className={`${baseClassName} ${inputClassName} pl-4`}>
          <option value="" className="text-xs md:text-sm text-gray-500">{placeholder}</option>
          {options?.map((option) => (
            <option
            className="text-black text-xs md:text-sm"
            key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Field>
      ) : (
        <Field
          type={type}
          name={name}
          placeholder={placeholder}
          className={`${baseClassName} ${inputClassName} pl-4 `}
        />
      )}
       <ErrorMessage
        name={name}
        component="span"
        className="text-[#E70303] text-xs mt-1"
      />
    </div>
  );
};

export default FormikInput;

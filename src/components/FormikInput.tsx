import { Field, ErrorMessage } from "formik";
import React from "react";

interface FormikInputProps {
  name: string;
  type?: "text" | "email" | "password" | "textarea" | "select";
  placeholder?: string;
  options?: { value: string; label: string }[];
}
const baseClassName = "w-[90%] lg:w-[70%] h-10 rounded-4xl border border-[#4f813b] hover:shadow-md outline-none   placeholder:text-xs md:placeholder:text-sm placeholder:text-gray-500";
const FormikInput: React.FC<FormikInputProps> = ({
  name,
  type,
  placeholder,
  options,
}) => {
  return (
    <div className="w-full flex flex-col justify-start items-center gap-0.5">
      {type === "textarea" ? (
        <Field
        style={{paddingLeft:"15px", paddingTop:"5px"}}
          as="textarea"
          name={name}
          placeholder={placeholder}
          className={`${baseClassName} min-h-[100px] `}
        />
      ) : type === "select" ? (
        <Field 
        style={{paddingLeft:"15px"}}
        name={name}
         as="select"
          className={`${baseClassName} `}>
          <option value="">Seçin</option>
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
        style={{paddingLeft:"15px"}}
          type={type}
          name={name}
          placeholder={placeholder}
          className={`${baseClassName} `}
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

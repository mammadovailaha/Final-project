import { Formik } from "formik";
import { quickRegistrationSchema } from "../../validation/QuickRegistrationSchema";
import FormikInput from "../../components/FormikInput";
import MainButton from "../../components/Buttons/MainButton";

const initialValues = {
  fullname: "",
  phone: "",
  note: "",
};

const QuickRegistration = ({title=""}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
          <Formik
      initialValues={initialValues}
      validationSchema={quickRegistrationSchema}
       onSubmit={(values) => {
        console.log("Form dəyərləri:", values);
      }}
    >
      <form className="w-full flex flex-col justify-center items-center gap-7">
        <h1 className="text-xl md:text-3xl font-bold text-center">{title}</h1>
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <FormikInput 
          name="fullname"
          type="text"
          placeholder="Ad Soyad"
          />
          <FormikInput 
          name="phone"
          type="text"
          placeholder="Telefon nömrəsi"
          />
          <FormikInput  
          name="note"
          type="textarea"
          placeholder="Qeydiniz"

          /> 
          <MainButton  
          buttonClassName="w-[90%] lg:w-[70%] h-12 md:h-14"
          text="Göndər"/>
        </div>
      </form>
    </Formik>
    </div>

  );
};

export default QuickRegistration;

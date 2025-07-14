import { useState } from "react";
import { Formik } from "formik";
import { quickRegistrationSchema } from "../../validation/QuickRegistrationSchema";
import FormikInput from "../../components/FormikInput";
import MainButton from "../../components/MainButton";
import { ImCheckboxChecked } from "react-icons/im";
import { ImCheckboxUnchecked } from "react-icons/im";

const branchOptions = [
  { value: "elmler-a", label: "Elmler A" },
  { value: "elmler-b", label: "Elmler B" },
  { value: "nerimanov", label: "N.Nerminaov" },
  { value: "azadliq", label: "Azadliq" },
  { value: "xirdalan", label: "Xirdalan" },
];


const initialValues = {
  fullname: "",
  phone: "",
  branch: "",
};

const QuickContact = () => {
  const [checked, setChecked] = useState(false);
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  return (
    <div className="w-full flex  justify-center items-center">
      <Formik
        initialValues={initialValues}
        validationSchema={quickRegistrationSchema}
        onSubmit={(values) => {
          console.log("Form dəyərləri:", values);
        }}
      >
        <form className="w-full flex  flex-col justify-center items-center gap-8">
          <h1 className="text-xl md:text-3xl font-bold">Sürətli əlaqə</h1>
          <div className="w-full flex flex-col justify-center items-center gap-3">
            <FormikInput name="fullname" type="text" placeholder="Ad Soyad" />
            <FormikInput
              name="phone"
              type="text"
              placeholder="Telefon nömrəsi"
            />
            <FormikInput
              options={branchOptions}
              type="select"
              name="branch"
              placeholder="Filial seçin"
            />
            <div
              className="w-[90%] lg:w-[70%] flex items-center justify-start gap-2"
              onClick={handleCheckboxChange}
            >
              {checked ? (
                <ImCheckboxChecked className="text-[#4b6043]" />
              ) : (
                <ImCheckboxUnchecked className="text-[#4b6043]" />
              )}
              <p className="text-xs md:text-sm">Nömrəmdə whatssap var</p>
            </div>
            <MainButton
              buttonClassName="w-[90%] lg:w-[70%] h-10 "
              text="Göndər"
            />
          </div>
        </form>
      </Formik>
    </div>
  );
};

export default QuickContact;

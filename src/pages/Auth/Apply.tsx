import { Formik } from "formik";
import React from "react";
import { applySchema } from "../../validation/ApplySchema";
import FormikInput from "../../components/FormikInput";
import MainButton from "../../components/MainButton";

const initialValues = {
  services: "",
  fullname: "",
  phone: "",
  branch: "",
  educationType: "",
  note: "",
};

const courseOptions = [
  { value: "english", label: "İngilis dili" },
  { value: "russian", label: "Rus dili" },
  { value: "german", label: "Alman dili" },
  { value: "primary-education", label: "İbtidai sinif hazırlığı" },
  { value: "abiturient", label: "Abituriyent hazırlığı" },
  { value: "miq", label: "MİQ hazırlığı" },
  { value: "certification", label: "Sertifikasiya hazırlığı" },
  { value: "preschool", label: "Məktəbəqədər hazırlıq" },
  { value: "drawing-design", label: "Rəsm və dizayn" },
  { value: "graphic-design", label: "Qrafik dizayn" },
  { value: "ux-ui", label: "UX/UI dizayn" },
  { value: "programming", label: "Proqramlaşdırma" },
  { value: "frontend", label: "Front-end development" },
  { value: "backend", label: "Back-end development" },
  { value: "robotics", label: "Robototexnika" },
  { value: "mental", label: "Mental aritmetika" },
  { value: "logic-games", label: "Zəka oyunları" },
  { value: "sat", label: "SAT" },
];

const educationTypeOptions = [
  { value: "online", label: "Online" },
  { value: "offline", label: "Offline" },
  { value: "hybrid", label: "Hybrid" },
];

const branchOptions = [
  { value: "elmler-a", label: "Elmler A" },
  { value: "elmler-b", label: "Elmler B" },
  { value: "nerimanov", label: "N.Nerminaov" },
  { value: "azadliq", label: "Azadliq" },
  { value: "xirdalan", label: "Xirdalan" },
];

const Apply = () => {
  return (
    <div style={{paddingTop:"20px"}} className="w-full h-screen flex  justify-center items-start">
      <Formik
        initialValues={initialValues}
        validationSchema={applySchema}
        onSubmit={(values) => {
          console.log("Form dəyərləri:", values);
        }}
      >
        <form className="w-[90%] md:w-[63%] flex  flex-col justify-center items-center gap-5 lg:gap-10">
          <h1 className="text-2xl md:text-4xl font-bold">Müraciət et</h1>
          <div className="w-full flex flex-col justify-center items-center gap-3">
            <FormikInput
              name="services"
              type="select"
              placeholder="Xidmət seçin"
              options={courseOptions}
            />
            <FormikInput name="fullName" type="text" placeholder="Ad Soyad" />
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
            <FormikInput
              name="educationType"
              type="select"
              placeholder="Tədris formatı seçin"
              options={educationTypeOptions}
            />
            <FormikInput name="note" type="textarea" placeholder="Qeydiniz" />
            <MainButton 
            buttonClassName="w-[90%] lg:w-[70%] h-10 rounded-2xl "
            text="Göndər"
            />
          </div>
        </form>
      </Formik>
    </div>
  );
};

export default Apply;

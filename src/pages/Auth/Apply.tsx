import { Formik } from "formik";
import { applySchema } from "../../validation/ApplySchema";
import FormikInput from "../../components/FormikInput";
import MainButton from "../../components/Buttons/MainButton";
import applyBg from "../../assets/images/applyBg.jpg";
import applyImg1 from "../../assets/images/applyImg1.jpg";
import applyImg2 from "../../assets/images/applyImg2.jpg";
import applyImg3 from "../../assets/images/apply3.jpg";
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
    <div className="w-full h-screen flex justify-center xl:justify-between items-start gap-5">
      <div className="hidden w-[50%] h-[600px] relative  xl:grid grid-cols-2 grid-rows-2 justify-center items-start ">
        <div className="w-80 h-70 relative rounded-tr-[100px] rounded-bl-[100px] rounded-tl-[100px]">
          <img
            src={applyBg}
            alt="students photo"
            className="w-full h-full object-cover rounded-tr-[100px] rounded-bl-[100px] rounded-tl-[100px]"
          />
          <div className="absolute inset-0 bg-[#ffffff96] z-0 rounded-tr-[100px] rounded-bl-[100px] rounded-tl-[100px] " />
        </div>
        <div className="w-80 h-70 relative rounded-tl-[100px] rounded-br-[100px] rounded-tr-[100px]">
          <img
            src={applyImg1}
            alt="students photo"
            className="w-full h-full object-cover rounded-tl-[100px] rounded-br-[100px] rounded-tr-[100px]"
          />
          <div className="absolute inset-0 bg-[#ffffff96] z-0 rounded-tl-[100px] rounded-br-[100px] rounded-tr-[100px] " />
        </div>
        <div className="w-80 h-70 relative rounded-tl-[100px] rounded-br-[100px] rounded-bl-[100px]">
          <img
            src={applyImg2}
            alt="students photo"
            className="w-full h-full object-cover rounded-tl-[100px] rounded-br-[100px] rounded-bl-[100px]"
          />
          <div className="absolute inset-0 bg-[#ffffff96] z-0 rounded-tl-[100px] rounded-br-[100px] rounded-bl-[100px] " />
        </div>
        <div className="w-80 h-70 relative rounded-tr-[100px] rounded-bl-[100px] rounded-br-[100px]">
          <img
            src={applyImg3}
            alt="students photo"
            className="w-80 h-70 object-cover rounded-tr-[100px] rounded-bl-[100px] rounded-br-[100px]"
          />
          <div className="absolute inset-0 bg-[#ffffff96] z-0 rounded-tr-[100px] rounded-bl-[100px] rounded-br-[100px] " />
        </div>
      <div className="w-[80%] absolute z-20 top-64 left-16">
    <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#384228] text-center">Səni komandamızda görmək bizim üçün böyük sevincdir!</h2>
    <p className="text-sm md:text-base text-[#384228] text-center">Birlikdə öyrənəcək, birlikdə inkişaf edəcəyik.</p>
  </div>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={applySchema}
        onSubmit={(values) => {
          console.log("Form dəyərləri:", values);
        }}
      >
        <form
          style={{ paddingTop: "20px" }}
          className="w-[90%] md:w-[60%] flex  flex-col justify-center items-center gap-5 lg:gap-10"
        >
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

import { Formik } from "formik";
import { studyAbroadFormSchema } from "../../validation/StudyAbroadFormSchema";
import FormikInput from "../../components/FormikInput";
import MainButton from "../../components/Buttons/MainButton";

const initialValues = {
  fullname: "",
  phone: "",
  note: "",
  region: "",
  admissionYear: "",
  emailSchema: "",
};
const country = [
  { label: "Poland", value: "poland" },
  { label: "Ukraine", value: "ukraine" },
  { label: "Turkey", value: "turkey" },
];
const StudyAbroadForm = () => {
  return (
    <div className="w-full ">
      <Formik
        initialValues={initialValues}
        validationSchema={studyAbroadFormSchema}
        onSubmit={(values) => {
          console.log("Form dəyərləri:", values);
        }}
      >
        <form className="w-full flex flex-col justify-center items-center gap-6">
          <h1 className="text-2xl md:text-3xl font-medium text-center">Xaricdə Təhsil Almaq Üçün Müraciət Et</h1>
          <div className="w-full flex justify-center items-center">
            <div className="w-full flex  flex-col justify-center items-center gap-5">
              <FormikInput name="fullname" type="text" placeholder="Ad Soyad"   inputClassName="w-[97%]!" />
              <FormikInput
                name="email"
                type="text"
                placeholder="Email adress"
                  inputClassName="w-[97%]!"
              />
              <FormikInput
                name="admissionYear"
                type="text"
                placeholder="Qəbul iliniz"
                  inputClassName="w-[97%]!"
              />
            </div>
            <div className="w-full flex  flex-col justify-center items-center gap-5">
              <FormikInput
                name="phone"
                type="text"
                placeholder="Telefon nömrəsi"
                  inputClassName="w-[97%]!"
              />
              <FormikInput
                name="region"
                type="text"
                placeholder="Yaşadığınız ünvan"
                  inputClassName="w-[97%]!"
              />
              <FormikInput
                options={country}
                type="select"
                name="country"
                placeholder="Ölkə seçin"
                  inputClassName="w-[97%]!"
              />
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <FormikInput
              name="note"
              type="textarea"
              placeholder="Qeydiniz"
             inputClassName="w-[97%]!"
            />
             <MainButton
              buttonClassName="w-[40%] lg:w-[20%] h-12 md:h-14 text-base md:text-lg "
              text="Göndər"
            />
          </div>
           
        </form>
      </Formik>
    </div>
  );
};

export default StudyAbroadForm;

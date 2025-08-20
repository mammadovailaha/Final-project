import { Formik } from "formik";
import { examResultSchema } from "../../validation/ExamResultSchema";
import FormikInput from "../../components/FormikInput";
import MainButton from "../../components/Buttons/MainButton";
import examResultBg from "../../assets/images/examResultBg.jpg";

const examOptions = [
  { value: "muellim-qebul", label: "Müəllimlərin Kursa Qəbul İmtahanı" },
  { value: "ada-tedris-merkezi", label: "ADA Tədris Mərkəzi" },
  { value: "bilik-yarisi", label: "Bilik Yarışı" },
  { value: "isabet-hazirliq-merkezi", label: "İsabet Hazırlıq Mərkəzi" },
  { value: "zekali-hazirliq-merkezi", label: "Zəkalı Hazırlıq Mərkəzi" },
  { value: "abituriyent-sinaq", label: "Abituriyent Sınaq İmtahanı" },
  { value: "miq-hazirliq", label: "MİQ Hazırlıq İmtahanı" },
  { value: "sertifikasiya-sinaq", label: "Sertifikasiya Sınaq İmtahanı" },
  { value: "ibtidai-sinaq", label: "İbtidai Müəllimlər üçün Sınaq" },
  { value: "tedris-dizayn", label: "Tədris Dizaynı İmtahanı" },
];

const initialValues = {
  exam: "",
  bookletNumber: "",
};

const ExamResult = () => {
  return (
    <div
      style={{ backgroundImage: `url(${examResultBg})`, paddingTop:"60px" , paddingBottom:"40px"}}
      className="w-full h-auto lg:h-screen bg-cover bg-center relative flex justify-center items-start"
    >
      <div className="absolute inset-0 bg-[#ffffffc9] z-0" />
      <Formik
        initialValues={initialValues}
        validationSchema={examResultSchema}
        onSubmit={(values) => {
          console.log("Form dəyərləri:", values);
        }}
      >
        <form className="w-[90%] md:w-[70%] flex flex-col justify-center items-center gap-6 lg:gap-18 z-10">
          <h1 className="text-2xl md:text-4xl font-bold z-10">İmtahan nəticəsi</h1>
          <div className="w-full md:w-[70%] flex flex-col justify-center items-center gap-5 z-10">
            <FormikInput
              type="select"
              options={examOptions}
              name="exam"
              placeholder="İmtahan seçin"
              inputClassName="z-10 bg-white"
            />
            <FormikInput
              type="text"
              name="bookletNumber"
              placeholder="İş nömrəsi"
                 inputClassName="z-10 bg-white"
            />
            <MainButton buttonClassName="w-[90%] lg:w-[28%] h-12 md:h-14 " text="Göndər" />
          </div>
        </form>
      </Formik>
    </div>
  );
};

export default ExamResult;

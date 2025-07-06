import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "./InputField";

interface Props {
  text: string;
  onClick: () => void;
}

const QuickRegistration: React.FC<Props> = ({ text, onClick }) => {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      phone: "",
      note: "",
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .required("Ad və soyad mütləqdir")
        .min(3, "Çox qısadır"),
      phone: Yup.string()
        .required("Telefon nömrəsi mütləqdir")
        .matches(
          /^(\+994|0)(50|51|55|70|77)[0-9]{7}$/,
          "Düzgün nömrə daxil edin"
        ),
      note: Yup.string().max(300, "Əlavə qeyd maksimum 300 simvol ola bilər"),
    }),
    onSubmit: (values) => {
      console.log("Form məlumatları:", values);
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full flex flex-col justify-center items-center gap-4"
    >
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <div className="w-[75%] flex flex-col items-start justify-center">
          <InputField
            htmlFor="fullname"
            label="Ad Soyad"
            id="fullname"
            name="fullname"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.fullname}
          />
          {formik.touched.fullname && formik.errors.fullname && (
            <div className="text-red-500 text-xs font-[averta]">
              {formik.errors.fullname}
            </div>
          )}
        </div>
        <div className="w-[75%] flex flex-col items-start justify-center">
          <InputField
            htmlFor="phone"
            label="Telefon"
            id="phone"
            name="phone"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className="text-red-500 text-xs font-[averta]">
              {formik.errors.phone}
            </div>
          )}
        </div>
        <div className="w-[75%] flex flex-col items-start justify-center">
          <label htmlFor="note" className="text-sm ">
            Əlavə qeydiniz
          </label>
          <textarea
            name="note"
            id="note"
            className="w-full   border rounded outline-none  pl-4  border-green-700  transition-shadow duration-300 hover:shadow-[-5px_6px_31px_-5px_rgba(17,159,86,0.31)] "
            onChange={formik.handleChange}
            value={formik.values.note}
          />
          {formik.touched.note && formik.errors.note && (
            <div className="text-red-500 text-xs font-[averta]">
              {formik.errors.note}
            </div>
          )}
        </div>
        <div className="w-[75%] h-11 flex items-center justify-center">
          <button
            onClick={onClick}
            className="w-full h-full text-white rounded-md bg-[linear-gradient(to_right,_#22CABA,_#015715)] bg-[length:200%_100%] bg-[position:left] hover:bg-[position:right] transition-[background-position] duration-1000 ease-in-out "
            type="submit"
          >
            {text}
          </button>
        </div>
      </div>
    </form>
  );
};

export default QuickRegistration;

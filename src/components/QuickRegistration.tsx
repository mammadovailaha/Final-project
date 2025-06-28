import { useFormik } from "formik";
import * as Yup from "yup";

const QuickRegistration = () => {
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
      <h1 className="text-2xl leading-11 md:text-3xl md:leading-14 font-medium">Sürətli Qeydiyyat</h1>
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <div className="w-[75%] flex flex-col items-start justify-center">
          <label htmlFor="fullname" className="text-sm">
            Ad Soyad
          </label>
          <input
            id="fullname"
            name="fullname"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.fullname}
            className="w-full h-8 pl-4 border rounded outline-none  text-black text-sm  border-green-700 transition-shadow duration-300 hover:shadow-[-5px_6px_31px_-5px_rgba(17,159,86,0.31)] "
          />
          {formik.touched.fullname && formik.errors.fullname && (
            <div>{formik.errors.fullname}</div>
          )}
        </div>
        <div className="w-[75%] flex flex-col items-start justify-center">
          <label htmlFor="phone" className="text-sm">
            Telefon
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="w-full h-8 pl-4 border rounded outline-none  transition-shadow duration-300 hover:shadow-[-5px_6px_31px_-5px_rgba(17,159,86,0.31)] border-green-700"
            onChange={formik.handleChange}
            value={formik.values.phone}
            {...(formik.touched.phone && formik.errors.phone && (
              <div>{formik.errors.phone}</div>
            ))}
          />
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
            <div>{formik.errors.note}</div>
          )}
        </div>
      </div>
    </form>
  );
};

export default QuickRegistration;

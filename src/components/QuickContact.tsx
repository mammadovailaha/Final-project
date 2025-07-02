import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "./InputField";
import TextareaField from "./TextareaField";

const applicationReasons = [
  { id: 1, value: "qeydiyyat", label: "Qeydiyyat" },
  { id: 2, value: "kurslar", label: "Kurslar" },
  { id: 3, value: "telimler", label: "Təlimlər" },
  { id: 4, value: "imtahanlar", label: "İmtahanlar" },
  { id: 5, value: "diger", label: "Digər" },
];

const QuickContact = () => {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      phone: "",
      note: "",
      email: "",
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
      email: Yup.string()
        .required("E-mail mütləqdir")
        .email("Düzgün e-mail daxil edin")
        .matches(
          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          "Düzgün e-mail daxil edin"
        ),
      reason: Yup.string().required("Müraciət səbəbi seçilməlidir"),
    }),

    onSubmit: (values) => {
      console.log("Form məlumatları:", values);
    },
  });
  return (

      <form
        className="w-[85%] lg:w-full flex-col justify-center items-center gap-8 md:gap-10"
        action=""
      >
        <h1 className="text-2xl leading-8 font-bold md:text-3xl md:leading-20 text-center">
          Sürətli Əlaqə
        </h1>
        <div className="w-full lg:w-[80%] flex flex-col  justify-center gap-2">
          <div className="w-full  flex flex-col justify-center ">
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
          <div>
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
          <div>
            <InputField
              htmlFor="email"
              label="E-mail"
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-xs font-[averta]">
                {formik.errors.email}
              </div>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Qeydiyyat"
              {...formik.getFieldProps("reason")}
              list="reason"
              className=" h-9 md:h-12 w-full border rounded outline-none  text-black text-sm  border-green-700 transition-shadow duration-300 hover:shadow-[-5px_6px_31px_-5px_rgba(17,159,86,0.31)] placeholder:text-xs  md:placeholder:text-sm placeholder:text-gray-500 placeholder:left-2.5"
            />
            <datalist id="reason">
              {applicationReasons.map((item) => (
                <option key={item.id} value={item.label} />
              ))}
            </datalist>
          </div>
          <div>
            <TextareaField
              htmlFor="note"
              label="Qeydiniz"
              id="note"
              name="note"
              onChange={formik.handleChange}
              value={formik.values.note}
            />
            {formik.touched.note && formik.errors.note && (
              <div className="text-red-500 text-xs font-[averta]">
                {formik.errors.note}
              </div>
            )}
          </div>
          <div className="w-full h-11 md:h-13 flex justify-center items-center">
            <button
              className="w-full h-full text-white rounded-md bg-[linear-gradient(to_right,_#22CABA,_#015715)] bg-[length:200%_100%] bg-[position:left] hover:bg-[position:right] transition-[background-position] duration-1000 ease-in-out "
              type="submit"
            >
              Göndər
            </button>
          </div>
        </div>
      </form>

  );
};

export default QuickContact;
